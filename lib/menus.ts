/**
 * Headless WordPress nav menus.
 *
 * Fetches menus assigned to one of 8 registered locations via the custom
 * REST endpoint /wp-json/headless/v1/menus/<location> (registered in
 * scripts/register-nav-menus-snippet.php) and shapes them for use by the
 * Navbar and Footer components.
 *
 * Cache: tagged 'wordpress' so menu edits in WP propagate within seconds
 * via the existing /api/revalidate webhook.
 */
import { unstable_cache } from 'next/cache';
import { WP_CACHE_TAG } from './wordpress';
import { rewriteLegacyHref } from './config/url-redirects';

// 30-min ISR window matching WP_REVALIDATE_SECONDS. Editor edits propagate
// instantly via the `wordpress` cache tag fired by the /api/revalidate
// webhook (snippet #14), so a short polling interval is unnecessary and
// would flood WP with redundant menu fetches on every cold render.
const MENU_REVALIDATE_SECONDS = 1800;

export type MenuLocation =
  | 'primary'
  | 'header-ctas'
  | 'locations-dropdown'
  | 'footer-services'
  | 'footer-industries'
  | 'footer-company'
  | 'footer-legal'
  | 'footer-social';

export interface RawMenuItem {
  id: number;
  parent: number;
  order: number;
  label: string;
  url: string;
  target: string;
  classes: string[];
}

export interface MenuNode {
  id: number;
  label: string;
  href: string;
  target?: string;
  children: MenuNode[];
}

export interface FlatLink {
  label: string;
  href: string;
}

function getWpRestBase(): string | null {
  const fromRest = process.env.WORDPRESS_REST_URL;
  if (fromRest) return fromRest.replace(/\/$/, '');
  const fromGql = process.env.WORDPRESS_GRAPHQL_URL || process.env.WP_API_URL;
  if (!fromGql) return null;
  return fromGql.replace(/\/graphql\/?$/, '').replace(/\/$/, '');
}

// The headless REST endpoint is public (`__return_true`). The staging-gate
// basic-auth on tenthrock.sherstaging.com accepts unauthenticated requests
// for /wp-json/* — and passing WP_AUTH_USER/WP_AUTH_PASSWORD is actively
// rejected (those are GraphQL-only creds). So we try no-auth first and
// only fall back to PREVIEW credentials if we hit 401.
function buildPreviewAuthHeader(): Record<string, string> {
  const u = process.env.PREVIEW_USER_UN || process.env.preview_user_un;
  const p = process.env.PREVIEW_USER_PASS || process.env.preview_user_pass;
  if (!u || !p) return {};
  return { Authorization: 'Basic ' + Buffer.from(`${u}:${p}`).toString('base64') };
}

/** Build a tree of MenuNodes from the flat REST response. */
function toTree(items: RawMenuItem[]): MenuNode[] {
  const byId = new Map<number, MenuNode>();
  const roots: MenuNode[] = [];
  // First pass — create nodes
  for (const it of items) {
    byId.set(it.id, {
      id: it.id,
      label: it.label,
      href: rewriteLegacyHref(it.url || '#'),
      target: it.target || undefined,
      children: [],
    });
  }
  // Sort items by `order` so parents are not assumed-first
  const sorted = [...items].sort((a, b) => a.order - b.order);
  for (const it of sorted) {
    const node = byId.get(it.id)!;
    if (it.parent && byId.has(it.parent)) {
      byId.get(it.parent)!.children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

/**
 * Network fetch for one menu location. Returns `[]` when no menu is
 * assigned (a valid, cacheable "empty" state) and THROWS on any network /
 * HTTP failure so the unstable_cache wrapper never caches a failure — the
 * next request retries instead of pinning defaults for the whole window.
 */
async function fetchMenuFromWp(location: MenuLocation): Promise<MenuNode[]> {
  const base = getWpRestBase();
  if (!base) return [];

  const url = `${base}/wp-json/headless/v1/menus/${encodeURIComponent(location)}`;
  // Per-menu timeout: never let one slow WP REST call block the response.
  const MENU_FETCH_TIMEOUT_MS = 1500;
  const fetchOnce = (extra: Record<string, string>) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), MENU_FETCH_TIMEOUT_MS);
    return fetch(url, {
      headers: { Accept: 'application/json', ...extra },
      signal: ctrl.signal,
      next: { revalidate: MENU_REVALIDATE_SECONDS, tags: [WP_CACHE_TAG] },
    } as RequestInit).finally(() => clearTimeout(timer));
  };

  let res = await fetchOnce({});
  if (res.status === 401) {
    // Staging gate kicked in — retry with preview creds.
    res = await fetchOnce(buildPreviewAuthHeader());
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const data = (await res.json()) as { items?: RawMenuItem[] };
  if (!data || !Array.isArray(data.items) || data.items.length === 0) return [];
  return toTree(data.items);
}

// Cache each location's menu for 30 minutes so WordPress's REST API is hit
// at most once per location per window — even though MenuProvider requests
// all 8 locations on every page view (client-side, outside the page ISR
// cache). A plain `next: { revalidate }` is unreliable here because the
// per-menu AbortSignal opts the fetch out of Next's Data Cache; unstable_cache
// caches the function RESULT regardless. It's tagged `wordpress`, so an editor
// menu edit still propagates the instant /api/revalidate fires
// revalidateTag('wordpress') — no waiting out the 30-min window.
const getCachedMenu = unstable_cache(
  (location: MenuLocation) => fetchMenuFromWp(location),
  ['nav-menu'],
  { revalidate: MENU_REVALIDATE_SECONDS, tags: [WP_CACHE_TAG] },
);

/**
 * Fetch a menu by location. Returns a tree of nodes, or `null` if no menu
 * is assigned / the fetch failed (callers fall back to built-in defaults).
 */
export async function fetchMenu(location: MenuLocation): Promise<MenuNode[] | null> {
  try {
    const nodes = await getCachedMenu(location);
    return nodes.length > 0 ? nodes : null;
  } catch (e) {
    console.warn(`[menus] ${location} fetch failed:`, (e as Error).message);
    return null;
  }
}

/** Flatten a menu tree to {label, href}[] (useful for simple lists). */
export function flatten(nodes: MenuNode[] | null): FlatLink[] | null {
  if (!nodes) return null;
  return nodes.map(n => ({ label: n.label, href: n.href }));
}
