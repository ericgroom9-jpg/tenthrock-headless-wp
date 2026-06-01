import { stateCitiesMap } from "@/lib/data/state-cities";
import { LOCATION_URL_SUFFIX, stripLocationSuffix } from "@/lib/data/state-cities";

/**
 * Site-wide URL slug restructure (front-end only — WP slugs are unchanged).
 *
 *  - Services moved root → /services/<public-slug>
 *  - Industries moved root → /industries/<public-slug>
 *  - Locations gained a "-junk-removal" suffix on the state segment
 *
 * This module is the single source of truth for:
 *   1. public-slug → WP-fetch-slug maps (used by the new route handlers), and
 *   2. legacy-URL → new-URL redirects (used by middleware + sitemap rewriting +
 *      menu href rewriting), so every old link 301s to its new home instead of
 *      404ing.
 */

// ---------------------------------------------------------------------------
// 1. Public slug -> WP fetch slug
// ---------------------------------------------------------------------------

/** Services: public URL slug -> the slug WordPress actually stores (32). */
export const SERVICE_PUBLIC_TO_WP: Record<string, string> = {
  // renamed (public differs from WP)
  "stadium-event-cleanup": "events-stadiums",
  "multiple-size-dumpsters": "multiple-sizes",
  "natural-disaster-cleanup": "natrual-disaster-cleanup",
  "on-demand-dumpster-rental": "on-demand-service",
  "waste-program-advisory": "ongoing-advisory",
  "recycling-dumpster-containers": "recycling-specialty-containers",
  "site-closure-remodels": "site-closures-remodels",
  "waste-program-standards-and-sops": "standards-sops-training",
  // unchanged (public === WP)
  "brand-protection": "brand-protection",
  "centralized-programs": "centralized-programs",
  "commercial-dumpster-rental": "commercial-dumpster-rental",
  "compliance-support": "compliance-support",
  "dumpster-rentals": "dumpster-rentals",
  "dumpsters-containers": "dumpsters-containers",
  "emergency-product-removal": "emergency-product-removal",
  "emergency-waste-removal": "emergency-waste-removal",
  "environmental-maintenance": "environmental-maintenance",
  "event-stadium": "event-stadium",
  "flexible-terms": "flexible-terms",
  "multiple-sizes-types": "multiple-sizes-types",
  "performance-tracking": "performance-tracking",
  "pressure-washing-services": "pressure-washing-services",
  "single-point-of-contact": "single-point-of-contact",
  "site-stabilization": "site-stabilization",
  "specialized-project-logistics": "specialized-project-logistics",
  "spend-optimization": "spend-optimization",
  "store-decommissioning": "store-decommissioning",
  "unplanned-cleanouts": "unplanned-cleanouts",
  "waste-equipment-hauling-services": "waste-equipment-hauling-services",
  "waste-operations-advisory": "waste-operations-advisory",
  "waste-program-assessments": "waste-program-assessments",
  "waste-removal-services": "waste-removal-services",
};

/** Industries: public URL slug -> the slug WordPress actually stores (8). */
export const INDUSTRY_PUBLIC_TO_WP: Record<string, string> = {
  "church-junk-removal": "church-junk-removal",
  "hospitality-junk-removal": "hospitality-junk-removal",
  "retail-store-junk-removal": "retail-store-junk-removal",
  "natural-disaster-junk-removal": "natrual-disaster-cleanup",
  "real-estate-junk-removal": "property-management-junk-removal",
  "community-junk-removal": "public-space-junk-removal",
  "school-junk-and-trash-removal": "school-junk-management",
  "stadium-and-event-junk-removal": "stadiums-events-junk-removal",
};

// ---------------------------------------------------------------------------
// 2. Legacy URL -> new URL redirects
// ---------------------------------------------------------------------------

/**
 * Old "clean" root slugs that historically appeared in menus / nav defaults but
 * are NOT the WP slug. These take precedence over the auto-generated WP-slug
 * entries below.
 */
const LEGACY_ALIASES: Record<string, string> = {
  // Service: the clean natural-disaster root used in the primary menu.
  "/natural-disaster-cleanup": "/services/natural-disaster-cleanup",
  // Service marketing-alias roots. These previously 301'd to a canonical
  // service *root* slug (e.g. /dumpster-rental -> /commercial-dumpster-rental),
  // which itself now 301s to /services/*. Mapping them directly collapses the
  // double-hop into a single 301 to the final canonical.
  "/dumpster-rental": "/services/commercial-dumpster-rental",
  "/hauling-services": "/services/waste-equipment-hauling-services",
  "/pressure-washing": "/services/pressure-washing-services",
  "/waste-removal": "/services/waste-removal-services",
  "/natural-disasters": "/services/natural-disaster-cleanup",
  // Industries: clean nav/footer slugs.
  "/retail": "/industries/retail-store-junk-removal",
  "/stadiums-events": "/industries/stadium-and-event-junk-removal",
  "/faith-based": "/industries/church-junk-removal",
  "/real-estate": "/industries/real-estate-junk-removal",
  "/hospitality": "/industries/hospitality-junk-removal",
  "/educational": "/industries/school-junk-and-trash-removal",
  "/municipalities": "/industries/community-junk-removal",
};

function buildLegacyRedirects(): Record<string, string> {
  const map: Record<string, string> = {};

  // Services: every WP slug -> /services/<public>
  for (const [pub, wp] of Object.entries(SERVICE_PUBLIC_TO_WP)) {
    map[`/${wp}`] = `/services/${pub}`;
  }

  // Industries: every WP slug -> /industries/<public>, but never clobber a
  // service mapping (the natrual-disaster-cleanup WP slug is shared and the
  // service wins, matching prior root behaviour).
  for (const [pub, wp] of Object.entries(INDUSTRY_PUBLIC_TO_WP)) {
    const key = `/${wp}`;
    if (!(key in map)) map[key] = `/industries/${pub}`;
  }

  // Clean aliases win over everything.
  for (const [from, to] of Object.entries(LEGACY_ALIASES)) {
    map[from] = to;
  }

  return map;
}

/** Static map of legacy paths (no trailing slash) -> new canonical paths. */
export const LEGACY_REDIRECTS: Record<string, string> = buildLegacyRedirects();

// Known historical misspellings of state segments -> correct bare key.
const LOCATION_TYPO_FIXES: Record<string, string> = {
  missisippi: "mississippi",
};

/**
 * Rewrite a legacy /locations/<bareState>[/...] path to the suffixed form
 * /locations/<state>-junk-removal[/...]. Returns null when the path is already
 * suffixed, isn't a locations path, or the state segment is unknown.
 */
export function rewriteLegacyLocationPath(pathname: string): string | null {
  const m = pathname.match(/^\/locations\/([^/]+)(\/.*)?$/);
  if (!m) return null;

  const seg = m[1];
  const rest = m[2] || "";
  if (seg.endsWith(LOCATION_URL_SUFFIX)) return null; // already new

  const corrected = LOCATION_TYPO_FIXES[seg] || seg;
  if (!(corrected in stateCitiesMap)) return null; // unknown — leave alone

  return `/locations/${corrected}${LOCATION_URL_SUFFIX}${rest}`;
}

/**
 * Given a request pathname, return the new path it should 301 to, or null if no
 * redirect applies. Trailing slashes are tolerated.
 */
export function getLegacyRedirectTarget(pathname: string): string | null {
  const hadTrailing = pathname.length > 1 && pathname.endsWith("/");
  const clean = hadTrailing ? pathname.slice(0, -1) : pathname;

  if (LEGACY_REDIRECTS[clean]) return LEGACY_REDIRECTS[clean];

  const loc = rewriteLegacyLocationPath(clean);
  if (loc) return loc;

  return null;
}

/**
 * Rewrite any href (absolute or root-relative) so legacy links point at their
 * new URLs. Used to map live WP menu hrefs. Leaves hash/mailto/tel/relative and
 * already-correct links untouched.
 */
export function rewriteLegacyHref(href: string): string {
  if (!href) return href;
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  let origin = "";
  let path = href;
  let suffix = "";

  if (/^https?:\/\//i.test(href)) {
    try {
      const u = new URL(href);
      origin = u.origin;
      path = u.pathname;
      suffix = u.search + u.hash;
    } catch {
      return href;
    }
  } else if (href.startsWith("/")) {
    const i = href.search(/[?#]/);
    if (i >= 0) {
      path = href.slice(0, i);
      suffix = href.slice(i);
    }
  } else {
    return href; // relative or unknown scheme — leave untouched
  }

  const hadTrailing = path.length > 1 && path.endsWith("/");
  const lookup = hadTrailing ? path.slice(0, -1) : path;
  const target = getLegacyRedirectTarget(lookup);
  if (!target) return href;

  return `${origin}${target}${hadTrailing ? "/" : ""}${suffix}`;
}

// Re-export for convenience so consumers can import suffix helpers from here.
export { LOCATION_URL_SUFFIX, stripLocationSuffix };
