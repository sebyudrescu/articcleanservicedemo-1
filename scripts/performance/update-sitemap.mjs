#!/usr/bin/env node

/**
 * Genera/aggiorna il file public/sitemap.xml estraendo i percorsi statici
 * dichiarati in src/App.tsx e arricchendoli con i dati reali di blog e
 * pagine locali pubblicate su Supabase.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';

const APP_FILE = path.resolve('src/App.tsx');
const OUTPUT_FILE = path.resolve('public/sitemap.xml');
const BLOG_POSTS_FILE = path.resolve('content/blog/posts.json');
const BASE_URL = 'https://articpulizie.it';
const TODAY = new Date().toISOString().split('T')[0];

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        },
        global: {
          headers: {
            'X-Client-Environment': 'sitemap-script'
          }
        }
      })
    : null;

const ROUTE_METADATA = new Map(
  Object.entries({
    '/': { changefreq: 'daily', priority: '1.0' },
    '/chi-siamo': { changefreq: 'monthly', priority: '0.8' },
    '/come-lavoriamo': { changefreq: 'monthly', priority: '0.8' },
    '/recensioni': { changefreq: 'weekly', priority: '0.7' },
    '/servizi': { changefreq: 'weekly', priority: '0.9' },
    '/dove-operiamo': { changefreq: 'monthly', priority: '0.8' },
    '/faq': { changefreq: 'monthly', priority: '0.7' },
    '/blog': { changefreq: 'weekly', priority: '0.7' },
    '/privacy-policy': { changefreq: 'yearly', priority: '0.3' },
    '/richiedi-preventivo': { changefreq: 'monthly', priority: '0.9' }
  })
);

const buildUrl = (route) => {
  if (route === '/') return BASE_URL;
  return `${BASE_URL}${route.startsWith('/') ? route : `/${route}`}`;
};

const toDateString = (value, fallback = TODAY) => {
  if (!value) return fallback;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return fallback;
  }
  return parsed.toISOString().split('T')[0];
};

const getStaticRoutes = async () => {
  const content = await fs.readFile(APP_FILE, 'utf8');
  const regex = /<Route\s+path="([^"]+)"/g;
  const routes = new Set(['/']);
  let match;

  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    if (raw === '*' || raw.includes(':')) {
      // Ignora percorsi dinamici che verranno gestiti separatamente
      continue;
    }
    routes.add(raw.startsWith('/') ? raw : `/${raw}`);
  }

  return Array.from(routes).sort();
};

const getBlogPosts = async () => {
  try {
    const blogRaw = await fs.readFile(BLOG_POSTS_FILE, 'utf8');
    const blogPosts = JSON.parse(blogRaw);
    return blogPosts
      .filter((post) => post.slug)
      .map((post) => ({
        slug: post.slug,
        publishedAt: toDateString(post.publishedAt),
        lastUpdated: toDateString(post.lastUpdated ?? post.publishedAt)
      }));
  } catch (error) {
    console.warn('⚠️  Impossibile leggere i post del blog per la sitemap:', error.message);
    return [];
  }
};

const fetchLocalServicePages = async () => {
  if (!supabaseClient) {
    console.warn('ℹ️  Variabili Supabase assenti: le pagine locali non verranno incluse nella sitemap.');
    return [];
  }

  try {
    const { data, error } = await supabaseClient
      .from('local_service_pages')
      .select('slug, updated_at, created_at, published')
      .eq('published', true);

    if (error) {
      console.error('⚠️  Errore durante il recupero delle pagine locali pubblicate:', error.message);
      return [];
    }

    return (data ?? [])
      .filter((page) => page.slug)
      .map((page) => ({
        slug: page.slug,
        lastUpdated: toDateString(page.updated_at ?? page.created_at)
      }));
  } catch (error) {
    console.error('⚠️  Errore imprevisto durante la lettura delle pagine locali:', error.message);
    return [];
  }
};

const buildStaticEntries = (routes, latestBlogUpdate) =>
  routes.map((route) => {
    const meta = ROUTE_METADATA.get(route) ?? { changefreq: 'monthly', priority: '0.6' };
    const lastmod = route === '/blog' && latestBlogUpdate ? latestBlogUpdate : TODAY;

    return {
      loc: buildUrl(route),
      lastmod,
      changefreq: meta.changefreq,
      priority: meta.priority
    };
  });

const buildBlogEntries = (posts) =>
  posts.map((post) => ({
    loc: buildUrl(`/blog/${post.slug}`),
    lastmod: post.lastUpdated,
    changefreq: 'weekly',
    priority: '0.6'
  }));

const buildLocalEntries = (pages) =>
  pages.map((page) => ({
    loc: buildUrl(`/servizi/${page.slug}`),
    lastmod: page.lastUpdated,
    changefreq: 'monthly',
    priority: '0.7'
  }));

const generateSitemapXml = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const main = async () => {
  const [routes, blogPosts, localPages] = await Promise.all([
    getStaticRoutes(),
    getBlogPosts(),
    fetchLocalServicePages()
  ]);

  const latestBlogUpdate = blogPosts.reduce((latest, post) => {
    return post.lastUpdated > latest ? post.lastUpdated : latest;
  }, '');

  const staticEntries = buildStaticEntries(routes, latestBlogUpdate || null);
  const blogEntries = buildBlogEntries(blogPosts);
  const localEntries = buildLocalEntries(localPages);

  const uniqueEntries = Array.from(
    [...staticEntries, ...blogEntries, ...localEntries].reduce((map, entry) => {
      return map.set(entry.loc, entry);
    }, new Map())
  )
    .map(([, entry]) => entry)
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const xml = generateSitemapXml(uniqueEntries);
  await fs.writeFile(OUTPUT_FILE, xml.trim() + '\n', 'utf8');

  console.log(
    `🗺️  sitemap.xml aggiornato con ${uniqueEntries.length} percorsi (statici: ${routes.length}, blog: ${blogEntries.length}, local: ${localEntries.length}).`
  );
};

main().catch((error) => {
  console.error('Errore durante la generazione della sitemap:', error);
  process.exit(1);
});
