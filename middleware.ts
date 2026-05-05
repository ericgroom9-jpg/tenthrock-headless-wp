import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
