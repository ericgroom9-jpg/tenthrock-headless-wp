import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PAGE_TEMPLATE_CONFIG } from '@/lib/config/post-types';

type Redirect = {
  origin: string;
  target: string;
  type: 301 | 302;
};

let redirectsCache: Redirect[] = [];
let lastFetch = 0;
// Cache redirects for 30 minutes — same window as page ISR — so the
// middleware never re-queries WordPress more than twice per hour per instance.
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutes

// ─────────────────────────────────────────────────────────────
// Page-template → current WP slug map (for slug-rename handling)
// Plus CPT slug set used as a collision guard so a renamed template
// slug never hijacks an existing service / industry URL.
//
// We deliberately DO NOT keep a process-memory TTL here. Both fetches
// are tagged `wordpress`, and snippet #11 fires `revalidateTag('wordpress')`
// on every WP save — so the Next data cache is the single source of
// truth for freshness. Each middleware invocation does a fetch() that's
// served from the data cache (cheap) until the tag is invalidated.
// ─────────────────────────────────────────────────────────────
type SlugRoutingData = {
  templateSlugMap: Record<string, string>;
  reservedCptSlugs: Set<string>;
};

const EMPTY_SLUG_DATA: SlugRoutingData = {
  templateSlugMap: {},
  reservedCptSlugs: new Set(),
};

function buildAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (process.env.WP_AUTH_USER && process.env.WP_AUTH_PASSWORD) {
    headers['Authorization'] = `Basic ${btoa(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`)}`;
  }
  return headers;
}

async function getSlugRoutingData(): Promise<SlugRoutingData> {
  const wpApiUrl = process.env.WP_API_URL;
  if (!wpApiUrl) return EMPTY_SLUG_DATA;
  try {
    const res = await fetch(wpApiUrl, {
      method: 'POST',
      headers: buildAuthHeaders(),
      body: JSON.stringify({
        query: `{
          pages(first: 100, where: { status: PUBLISH }) { nodes { slug headlessTemplate } }
          services(first: 200) { nodes { slug } }
          industries(first: 200) { nodes { slug } }
        }`,
      }),
      // @ts-ignore - Next.js extends RequestInit with `next`
      next: { revalidate: 1800, tags: ['wordpress'] },
    });
    if (!res.ok) return EMPTY_SLUG_DATA;
    const json = await res.json();
    const templateSlugMap: Record<string, string> = {};
    for (const node of json?.data?.pages?.nodes || []) {
      if (node?.headlessTemplate && node?.slug) {
        templateSlugMap[node.headlessTemplate] = node.slug;
      }
    }
    const reservedCptSlugs = new Set<string>();
    for (const node of json?.data?.services?.nodes || []) {
      if (node?.slug) reservedCptSlugs.add(node.slug);
    }
    for (const node of json?.data?.industries?.nodes || []) {
      if (node?.slug) reservedCptSlugs.add(node.slug);
    }
    return { templateSlugMap, reservedCptSlugs };
  } catch (error) {
    console.error('[TemplateSlugs] Failed to fetch slug routing data:', error);
    return EMPTY_SLUG_DATA;
  }
}

async function getRedirects(): Promise<Redirect[]> {
  const now = Date.now();

  // Honor cache window even when empty/fail, so we don't hammer WP on every request
  if (lastFetch > 0 && now - lastFetch < CACHE_DURATION_MS) {
    return redirectsCache;
  }

  const wpApiUrl = process.env.WP_API_URL;
  if (!wpApiUrl) {
    lastFetch = now;
    return redirectsCache;
  }

  // Get WordPress base URL (without /graphql)
  const wpBaseUrl = wpApiUrl.replace(/\/graphql\/?$/, '');
  const redirectsEndpoint = `${wpBaseUrl}/wp-json/headless/v1/redirects`;

  try {
    // Build request headers with Basic Auth for staging environment
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (process.env.WP_AUTH_USER && process.env.WP_AUTH_PASSWORD) {
      const credentials = btoa(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`);
      headers['Authorization'] = `Basic ${credentials}`;
    }

    // Next.js fetch cache: also dedupes redirects across instances behind the
    // same data cache, with the same 30-minute TTL.
    const response = await fetch(redirectsEndpoint, {
      headers,
      // @ts-ignore - Next.js extends RequestInit with `next`
      next: { revalidate: 1800, tags: ['wordpress-redirects'] },
    });

    if (!response.ok) {
      console.warn(`[Redirects] API returned ${response.status}`);
      lastFetch = now;
      return redirectsCache;
    }

    const data = await response.json();
    
    // Support both formats:
    // 1. Headless Tools plugin format: { from_path, to_url, status }
    // 2. Redirection plugin format: { items: [{ url, action_data: { url }, action_code, enabled }] }
    let items: Redirect[] = [];
    
    if (Array.isArray(data)) {
      // Headless Tools plugin format - direct array
      items = data.map((r: { from_path: string; to_url: string; status: number }) => ({
        origin: r.from_path.startsWith('/') ? r.from_path : `/${r.from_path}`,
        target: r.to_url,
        type: (r.status || 301) as 301 | 302,
      }));
    } else if (data.items && Array.isArray(data.items)) {
      // Redirection plugin format - { items: [...] }
      items = data.items
        .filter((r: { enabled: boolean }) => r.enabled)
        .map((r: { url: string; action_data: { url?: string }; action_code: number }) => ({
          origin: r.url.startsWith('/') ? r.url : `/${r.url}`,
          target: r.action_data?.url || '/',
          type: (r.action_code || 301) as 301 | 302,
        }));
    }
    
    redirectsCache = items;
    
    lastFetch = now;
    console.log(`[Redirects] Fetched ${redirectsCache.length} redirects from WordPress`);
  } catch (error) {
    console.error('[Redirects] Failed to fetch redirects:', error);
    lastFetch = now;
  }
  
  return redirectsCache;
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const redirects = await getRedirects();

  // Check for exact match or match without trailing slash
  const match = redirects.find(r => 
    r.origin === path || 
    r.origin === path.replace(/\/$/, '') ||
    r.origin + '/' === path
  );

  if (match) {
    const destination = match.target.startsWith('http')
      ? match.target
      : new URL(match.target, request.url).toString();
    
    console.log(`[Redirects] ${path} -> ${destination} (${match.type})`);
    return NextResponse.redirect(destination, match.type);
  }

  // ─────────────────────────────────────────────────────────────
  // Page-template slug rename handling.
  // For each registered page template, compare the WP slug against the
  // canonical front-end folder route. If they differ:
  //   • Visiting the WP slug   → rewrite to the canonical folder so the
  //                              existing route renders (URL stays as WP slug).
  //   • Visiting the canonical → 301 redirect to the WP slug, so the public
  //                              URL follows what the editor set in WP.
  //                              (Skipped when canonical is "/" — homepage
  //                               must always remain at root.)
  // Templates with dynamic routes (containing "[slug]") are skipped.
  // Collision guard: if the WP slug matches an existing service or
  // industry CPT slug, we skip — never hijack a CPT URL.
  // ─────────────────────────────────────────────────────────────
  const { templateSlugMap, reservedCptSlugs } = await getSlugRoutingData();
  if (Object.keys(templateSlugMap).length > 0) {
    const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);
    const reqPath = normalize(path);

    for (const config of Object.values(PAGE_TEMPLATE_CONFIG)) {
      if (config.route.includes('[slug]')) continue;
      const wpSlug = templateSlugMap[config.wpTemplate];
      if (!wpSlug) continue;

      const canonical = normalize(config.route);
      const wpPath = `/${wpSlug}`;
      if (wpPath === canonical) continue; // no rename, nothing to do

      if (reservedCptSlugs.has(wpSlug)) {
        console.warn(`[TemplateSlugs] Skip ${config.wpTemplate}: WP slug "${wpSlug}" collides with an existing service/industry CPT slug.`);
        continue;
      }

      // Request hits the WP slug → rewrite to the canonical folder route.
      if (reqPath === wpPath) {
        const url = request.nextUrl.clone();
        url.pathname = canonical;
        console.log(`[TemplateSlugs] rewrite ${path} -> ${canonical} (template ${config.wpTemplate})`);
        return NextResponse.rewrite(url);
      }

      // Request hits the canonical folder route → 301 to the new WP slug,
      // so the public URL reflects the editor's slug change.
      // (Don't redirect away from the homepage.)
      if (canonical !== '/' && reqPath === canonical) {
        const url = request.nextUrl.clone();
        url.pathname = wpPath;
        console.log(`[TemplateSlugs] redirect ${path} -> ${wpPath} (template ${config.wpTemplate})`);
        return NextResponse.redirect(url, 301);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
