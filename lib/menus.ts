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
import { WP_CACHE_TAG } from './wordpress';

// Menus are tiny and editors expect instant feedback after saving in WP
// Appearance → Menus. We rely on the `wordpress` cache tag for invalidation,
// but if the WP→Next revalidate webhook isn't reachable (e.g. on a dev
// preview whose URL doesn't match TR_REVALIDATE_URLS), we'd be stuck on a
// stale copy. So: short 30s window AND tagged for explicit invalidation.
const MENU_REVALIDATE_SECONDS = 30;

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
      href: it.url || '#',
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
 * Fetch a menu by location. Returns a tree of nodes, or `null` if no menu
 * is assigned (callers should fall back to their built-in defaults).
 */
export async function fetchMenu(location: MenuLocation): Promise<MenuNode[] | null> {
  const base = getWpRestBase();
  if (!base) return null;

  const url = `${base}/wp-json/headless/v1/menus/${encodeURIComponent(location)}`;
  const fetchOnce = (extra: Record<string, string>) =>
    fetch(url, {
      headers: { Accept: 'application/json', ...extra },
      next: { revalidate: MENU_REVALIDATE_SECONDS, tags: [WP_CACHE_TAG] },
    } as RequestInit);

  try {
    let res = await fetchOnce({});
    if (res.status === 401) {
      // Staging gate kicked in — retry with preview creds.
      res = await fetchOnce(buildPreviewAuthHeader());
    }
    if (!res.ok) {
      console.warn(`[menus] ${location} → HTTP ${res.status}`);
      return null;
    }
    const data = (await res.json()) as { items?: RawMenuItem[] };
    if (!data || !Array.isArray(data.items) || data.items.length === 0) return null;
    return toTree(data.items);
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
