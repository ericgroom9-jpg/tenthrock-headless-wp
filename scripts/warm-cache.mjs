#!/usr/bin/env node
/**
 * Cache-warming pass for the headless site.
 *
 * Fetches every URL in the WP sitemaps + a handful of well-known paths
 * against the local Next.js dev server so the ISR data-cache is populated.
 * After this runs, subsequent visits will be served from cache for the
 * next 30 minutes without touching WordPress.
 *
 * Usage:
 *   node scripts/warm-cache.mjs [baseUrl]
 *
 * Default baseUrl is http://localhost:5000.
 */

const BASE = (process.argv[2] || 'http://localhost:5000').replace(/\/$/, '');
// WP_API_URL points at the GraphQL endpoint (…/graphql). The sitemap files
// live at the site origin, so strip any path suffix down to scheme + host.
const WP = (() => {
  const raw = process.env.WP_API_URL || 'https://tenthrock.sherstaging.com';
  try {
    const u = new URL(raw);
    return `${u.protocol}//${u.host}`;
  } catch {
    return raw.replace(/\/$/, '');
  }
})();
const CONCURRENCY = 6;

const MENU_LOCATIONS = [
  'primary',
  'header-ctas',
  'locations-dropdown',
  'footer-services',
  'footer-industries',
  'footer-company',
  'footer-legal',
  'footer-social',
];

const SEO_FILES = [
  '/sitemap.xml',
  '/sitemap_index.xml',
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
];

const STATIC_PAGES = ['/', '/blog'];

async function fetchSitemap(path) {
  try {
    const r = await fetch(WP + path, { redirect: 'follow' });
    if (!r.ok) return [];
    const xml = await r.text();
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => {
      const u = m[1];
      const p = u.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
      return p || '/';
    });
  } catch {
    return [];
  }
}

async function collectUrls() {
  const sitemaps = [
    '/page-sitemap.xml',
    '/tr_service-sitemap.xml',
    '/tr_industry-sitemap.xml',
    '/tr_location-sitemap.xml',
    '/post-sitemap.xml',
  ];
  const all = new Set(STATIC_PAGES);
  for (const sm of sitemaps) {
    const urls = await fetchSitemap(sm);
    for (const u of urls) all.add(u);
  }
  for (const f of SEO_FILES) all.add(f);
  for (const loc of MENU_LOCATIONS) all.add(`/api/menus/${loc}`);
  return [...all];
}

async function warm(path) {
  const start = Date.now();
  try {
    const r = await fetch(BASE + path, { redirect: 'manual' });
    return { path, status: r.status, ms: Date.now() - start };
  } catch (e) {
    return { path, status: 0, ms: Date.now() - start, err: e.message };
  }
}

async function runBatched(items, fn, concurrency) {
  const out = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= items.length) return;
      out[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return out;
}

(async () => {
  console.log(`[warm-cache] Base: ${BASE}`);
  console.log(`[warm-cache] WP origin: ${WP}`);
  console.log(`[warm-cache] Collecting URLs from sitemaps...`);

  const urls = await collectUrls();
  console.log(`[warm-cache] ${urls.length} URLs to warm (concurrency=${CONCURRENCY})\n`);

  const t0 = Date.now();
  const results = await runBatched(urls, warm, CONCURRENCY);
  const totalMs = Date.now() - t0;

  const byBucket = { ok: 0, redirect: 0, broken: 0 };
  for (const r of results) {
    if (r.status >= 200 && r.status < 300) byBucket.ok++;
    else if (r.status >= 300 && r.status < 400) byBucket.redirect++;
    else byBucket.broken++;
  }

  const widest = Math.max(...results.map(r => r.path.length));
  for (const r of results) {
    const tag = r.status >= 200 && r.status < 300 ? 'OK ' : r.status >= 300 && r.status < 400 ? 'RDR' : 'ERR';
    console.log(`  ${tag} ${String(r.status).padStart(3)}  ${r.path.padEnd(widest)}  ${String(r.ms).padStart(5)}ms`);
  }

  console.log(`\n[warm-cache] Done in ${(totalMs / 1000).toFixed(1)}s`);
  console.log(`[warm-cache] ${byBucket.ok} ok, ${byBucket.redirect} redirects, ${byBucket.broken} errors`);

  if (byBucket.broken > 0) {
    console.log(`\n[warm-cache] Errors:`);
    for (const r of results.filter(r => r.status === 0 || r.status >= 400)) {
      console.log(`  ${r.status}  ${r.path}  ${r.err || ''}`);
    }
    process.exit(1);
  }
})();
