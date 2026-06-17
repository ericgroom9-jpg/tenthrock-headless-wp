---
name: WordPress slug quirks (tenthrock headless)
description: Non-obvious WP-origin slug facts that drive the front-end URL restructure and redirect logic
---

# WP origin slug quirks

These are facts about the WordPress origin (tenthrock.sherstaging.com) that are
NOT discoverable from the Next.js code alone — they come from how content was
authored in WP.

## WP REST write access (how to rename/patch CPT posts)

- WP REST writes DO work, but only with the lowercase env creds
  `preview_user_un` / `preview_user_pass` (user `headless_sync`, full caps),
  Basic-auth'd against the REST base `${WP_API_URL origin}/wp-json/wp/v2`.
- `WP_ADMIN_*` and `WP_AUTH_*` both return 401 `invalid_username` for REST — do
  NOT use them (WP_AUTH_* are GraphQL-only). `WP_API_URL` itself is the GraphQL
  endpoint, not REST — derive REST from its origin.
- Rename a CPT slug: `POST /wp-json/wp/v2/tr_service/<id>` with `{"slug":"..."}`,
  then flush Next data cache via `POST /api/revalidate {secret:WP_PREVIEW_SECRET,
  type:"all"}`.

## Service WP slugs now == public slugs (alias layer collapsed)

- The 8 `tr_service` posts whose WP slug differed from the public URL were renamed
  in WP so `SERVICE_PUBLIC_TO_WP` is now identity for them. `SERVICE_RENAMED_WP_SLUGS`
  (public → previous WP slug) is a TRANSITION bridge in `url-redirects.ts` +
  `app/services/[slug]/page.tsx` (resolver falls back to old slug) so the system is
  deploy/rename-order-independent. **Safe to delete that bridge once the renamed
  build is live everywhere and no old-slug sitemap `<loc>` can still be cached.**

## Misspelled shared slug: `natrual-disaster-cleanup` (now industry-only)

- The typo slug **`natrual-disaster-cleanup`** ("natrual") USED to be shared by
  both the service and industry CPT. The **service** (id 117) was renamed to the
  correct `natural-disaster-cleanup`; the **industry** (id 138) still carries the
  typo (out of scope). The collision is resolved — the service no longer shares it.
- Redirect resolution still has the **service win** for the public slug
  `natural-disaster-cleanup` (legacy `/natural-disasters` → `/services/natural-disaster-cleanup`).

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
