#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_CLIENT = path.resolve(__dirname, '../dist/client');
const DIST_SERVER = path.resolve(__dirname, '../dist/server');
const SERVER_ENTRY = path.join(DIST_SERVER, 'entry-server.js');
const TEMPLATE_PATH = path.join(DIST_CLIENT, 'index.html');
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const APP_FILE = path.resolve(__dirname, '../src/App.tsx');
const BLOG_POSTS_FILE = path.resolve(__dirname, '../content/blog/posts.json');
const VERCEL_OUTPUT_DIR = path.resolve(__dirname, '../.vercel/output');
const VERCEL_STATIC_DIR = path.join(VERCEL_OUTPUT_DIR, 'static');
const VERCEL_CONFIG_PATH = path.join(VERCEL_OUTPUT_DIR, 'config.json');

function normaliseRoute(route) {
  if (!route) {
    return '/';
  }
  if (route.startsWith('http')) {
    try {
      const url = new URL(route);
      return url.pathname.endsWith('/') && url.pathname !== '/' ? url.pathname.slice(0, -1) : url.pathname;
    } catch (error) {
      return '/';
    }
  }
  return route.startsWith('/') ? route : `/${route}`;
}

async function readTemplate() {
  try {
    return await fs.readFile(TEMPLATE_PATH, 'utf8');
  } catch (error) {
    throw new Error(`Impossibile leggere il template generato in ${TEMPLATE_PATH}: ${error.message}`);
  }
}

async function collectRoutes() {
  const routes = new Set(['/']);

  try {
    const appSource = await fs.readFile(APP_FILE, 'utf8');
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    let match;
    while ((match = routeRegex.exec(appSource)) !== null) {
      const raw = match[1];
      if (raw === '*') {
        continue;
      }
      if (!raw.includes(':')) {
        routes.add(normaliseRoute(raw));
      }
    }
  } catch (error) {
    console.warn(`⚠️  Impossibile analizzare le rotte statiche da App.tsx: ${error.message}`);
  }

  try {
    const blogRaw = await fs.readFile(BLOG_POSTS_FILE, 'utf8');
    const posts = JSON.parse(blogRaw);
    posts
      .filter((post) => post?.slug)
      .forEach((post) => routes.add(normaliseRoute(`/blog/${post.slug}`)));
  } catch (error) {
    console.warn(`⚠️  Impossibile leggere i post del blog per la pre-renderizzazione: ${error.message}`);
  }

  try {
    const sitemapRaw = await fs.readFile(SITEMAP_PATH, 'utf8');
    const locRegex = /<loc>([^<]+)<\/loc>/g;
    let match;
    while ((match = locRegex.exec(sitemapRaw)) !== null) {
      const loc = match[1].trim();
      if (!loc) continue;
      const parsed = normaliseRoute(loc);
      if (parsed) {
        routes.add(parsed);
      }
    }
  } catch (error) {
    console.warn(`⚠️  Nessuna sitemap disponibile per la pre-renderizzazione estesa: ${error.message}`);
  }

  return Array.from(routes)
    .filter(Boolean)
    .filter((route) => route !== '/*')
    .filter((route) => !route.includes(':'))
    .sort((a, b) => a.localeCompare(b));
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

function injectAttributes(html, htmlAttributes, bodyAttributes) {
  let processed = html;
  if (htmlAttributes) {
    if (htmlAttributes.includes('lang=')) {
      processed = processed.replace('<html lang="it">', `<html ${htmlAttributes}>`);
    } else {
      processed = processed.replace('<html lang="it">', `<html lang="it" ${htmlAttributes}>`);
    }
  }
  if (bodyAttributes) {
    processed = processed.replace('<body>', `<body ${bodyAttributes}>`);
  }
  return processed;
}

async function prepareVercelOutput() {
  try {
    await fs.rm(VERCEL_STATIC_DIR, { recursive: true, force: true });
  } catch {}

  await fs.mkdir(VERCEL_STATIC_DIR, { recursive: true });
  await fs.cp(DIST_CLIENT, VERCEL_STATIC_DIR, { recursive: true });

  const config = {
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/servizi/[^/]+/[^/]+', dest: '/index.html' },
      { src: '/.*', status: 404, dest: '/404.html' }
    ],
    cleanUrls: true,
    trailingSlash: false
  };

  await fs.mkdir(VERCEL_OUTPUT_DIR, { recursive: true });
  await fs.writeFile(VERCEL_CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`, 'utf8');
}

async function main() {
  const template = await readTemplate();
  const { render } = await import(pathToFileURL(SERVER_ENTRY).href);
  const routes = await collectRoutes();

  if (!routes.length) {
    throw new Error('Nessuna rotta trovata da pre-renderizzare.');
  }

  console.log(`🛠️  Avvio pre-rendering di ${routes.length} percorsi...`);

  for (const route of routes) {
    try {
      const { appHtml, headTags, htmlAttributes, bodyAttributes } = render(route);
      let html = template.replace('<!--app-html-->', appHtml);
      html = html.replace('<!--app-head-->', headTags ?? '');
      html = injectAttributes(html, htmlAttributes, bodyAttributes);

      const outputPath = route === '/'
        ? path.join(DIST_CLIENT, 'index.html')
        : path.join(DIST_CLIENT, route.replace(/^\//, ''), 'index.html');

      await ensureDir(outputPath);
      await fs.writeFile(outputPath, html, 'utf8');
      console.log(`✅  Prerender completato per ${route}`);
    } catch (error) {
      console.error(`❌  Errore durante il prerender di ${route}:`, error);
    }
  }

  console.log('🏁  Pre-rendering completato.');

  await prepareVercelOutput();
  console.log(`📦  Static bundle copiato in ${path.relative(process.cwd(), VERCEL_STATIC_DIR)} per il deploy su Vercel.`);
}

main().catch((error) => {
  console.error('Errore fatale durante il processo di pre-rendering:', error);
  process.exit(1);
});
