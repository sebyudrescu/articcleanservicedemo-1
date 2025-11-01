import fs from 'fs';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { siteMetadata } from '../src/data/siteMetadata';
import { services } from '../src/data/servicesData';
import blogPosts from '../content/blog/posts.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type SitemapUrl = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
};

type BlogPost = {
  slug: string;
  publishedAt?: string;
};

type LocalServiceRow = {
  slug: string;
  updated_at?: string;
  service?: { slug: string | null } | null;
  location?: { slug: string | null } | null;
};

const DOMAIN = siteMetadata.baseUrl.replace(/\/$/, '');
const today = new Date().toISOString().split('T')[0];

const buildStaticPages = (): SitemapUrl[] => ([
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/chi-siamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/come-lavoriamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/recensioni', changefreq: 'weekly', priority: '0.7' },
  { path: '/servizi', changefreq: 'weekly', priority: '0.9' },
  { path: '/dove-operiamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/richiedi-preventivo', changefreq: 'monthly', priority: '0.9' }
]).map((item) => ({
  loc: `${DOMAIN}${item.path}`,
  lastmod: today,
  changefreq: item.changefreq,
  priority: item.priority
}));

const buildServicePages = (): SitemapUrl[] =>
  services.map((service) => ({
    loc: `${DOMAIN}/servizi/${service.slug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8'
  }));

const buildBlogPages = (): SitemapUrl[] =>
  (blogPosts as BlogPost[]).map((post) => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: (post.publishedAt ?? today).split('T')[0],
    changefreq: 'weekly',
    priority: '0.6'
  }));

const createSupabaseClient = () => {
  const url = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
};

const buildLocalServicePages = async (): Promise<SitemapUrl[]> => {
  const supabase = createSupabaseClient();

  if (!supabase) {
    console.warn('ℹ️  Supabase credentials not provided: skipping local service URLs in sitemap.');
    return [];
  }

  const { data, error } = await supabase
    .from('local_service_pages')
    .select('slug, updated_at, service:services(slug), location:locations(slug)')
    .eq('published', true)
    .returns<LocalServiceRow[]>();

  if (error) {
    console.warn(`⚠️  Unable to fetch local service pages from Supabase (${error.message}). Skipping these URLs.`);
    return [];
  }

  const seen = new Set<string>();

  return data
    .map((row) => {
      const serviceSlug = row.service?.slug ?? null;
      const locationSlug = row.location?.slug ?? null;

      if (!serviceSlug || !locationSlug) {
        return null;
      }

      const fullSlug = row.slug || `${serviceSlug}/${locationSlug}`;

      if (seen.has(fullSlug)) {
        return null;
      }

      seen.add(fullSlug);

      return {
        loc: `${DOMAIN}/servizi/${fullSlug}`,
        lastmod: (row.updated_at ?? today).split('T')[0],
        changefreq: 'monthly',
        priority: '0.7'
      };
    })
    .filter((entry): entry is SitemapUrl => Boolean(entry));
};

const generateSitemap = async () => {
  console.log('📍 Generating sitemap.xml...');

  const urls = [
    ...buildStaticPages(),
    ...buildServicePages(),
    ...buildBlogPages(),
    ...(await buildLocalServicePages())
  ];

  const uniqueUrls = Array.from(
    urls.reduce((map, url) => map.set(url.loc, url), new Map<string, SitemapUrl>()).values()
  ).sort((a, b) => a.loc.localeCompare(b.loc));

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${uniqueUrls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  const publicDir = resolve(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

  console.log(`✅ Sitemap generated successfully: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${uniqueUrls.length}`);
};

await generateSitemap();
