---
name: WordPress slug quirks (tenthrock headless)
description: Non-obvious WP-origin slug facts that drive the front-end URL restructure and redirect logic
---

# WP origin slug quirks

These are facts about the WordPress origin (tenthrock.sherstaging.com) that are
NOT discoverable from the Next.js code alone — they come from how content was
authored in WP. WP write access is not available, so all routing/redirect work
is front-end only.

## Misspelled shared slug: `natrual-disaster-cleanup`

- The WP slug is literally **`natrual-disaster-cleanup`** (typo: "natrual"), and
  it is shared by BOTH a service CPT and an industry CPT.
- In redirect resolution the **service wins** (legacy `/natrual-disaster-cleanup`
  and `/natural-disasters` → `/services/natural-disaster-cleanup`). The industry
  is reachable only via its renamed public slug `/industries/natural-disaster-junk-removal`.
- **Consequence:** the industry Yoast child sitemap entry for this page rewrites
  to the *service* URL (path-based rewriting can't tell the two CPTs apart). This
  is accepted/consistent with prior root behaviour, not a bug to chase.

## Legacy marketing-alias root slugs chain through canonical service roots

- `/dumpster-rental`, `/hauling-services`, `/pressure-washing`, `/waste-removal`
  are marketing-alias landing roots that historically 301'd to a *different*
  canonical service root (e.g. `/dumpster-rental` → `/commercial-dumpster-rental`).
  After the restructure those canonical roots themselves 301 to `/services/*`,
  so without direct aliases you get a double-hop. They're mapped directly in
  `LEGACY_ALIASES` to collapse to a single 301.

## Yoast sitemaps are an index of child sitemaps

- `/sitemap.xml` (and `/sitemap_index.xml`) is only an INDEX listing children
  (`page-sitemap.xml`, `tr_service-sitemap.xml`, `tr_industry-sitemap.xml`,
  `tr_location-sitemap.xml`). The actual content `<loc>` URLs live in the
  children, so URL rewriting must be applied to the *child* proxies, not the index.
- The root `app/[slug]/page.tsx` catches `*-sitemap.xml` and 404s them, so each
  child needs its own explicit proxy route (a catch-all/`[sitemap]` route would
  collide with `app/[slug]`).
