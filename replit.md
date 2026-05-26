# Headless WordPress Boilerplate

A high-performance, SEO-friendly headless WordPress site using Next.js and PostgreSQL, focusing on posts and taxonomy support.

## Run & Operate

- **Run Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Typecheck:** `npm run check`
- **Codegen (GraphQL types):** `npm run codegen`
- **DB Push (Drizzle schema):** `drizzle-kit push:pg`

**Required Environment Variables:**
- `WORDPRESS_GRAPHQL_URL`
- `WORDPRESS_REST_URL`
- `WP_PREVIEW_SECRET`
- `WP_REVALIDATE_SECRET`
- `DATABASE_URL`
- `PREVIEW_USER_UN`
- `PREVIEW_USER_PASS`

## Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** Node.js
- **Language:** TypeScript
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL
- **UI:** Shadcn UI
- **Build Tool:** Next.js

## Where things live

- **WordPress Content Sync/Caching:** `lib/wordpress.ts`, `drizzle/schema.ts`
- **WordPress Nav Menus:** `lib/menus.ts` (fetch + tree builder), `app/api/menus/[location]/route.ts` (client proxy), `scripts/register-nav-menus-snippet.php` (WP side: 8 locations + REST), `scripts/seed-nav-menus.mjs` (initial seed). Consumed by `components/shared/Navbar.tsx` and `components/shared/Footer.tsx` via client-side fetch with hardcoded defaults as FOUC fallback.
- **Dynamic Routes Configuration:** `lib/config/post-types.ts`
- **Middleware:** `middleware.ts`
- **API Routes:** `app/api/*`
- **Custom Post Types & Taxonomies:** Defined in WordPress via Code Snippets (`scripts/`)
- **ACF Field Groups:** Defined in WordPress via Code Snippets (`scripts/`)
- **Gravity Forms Integration:** `components/gravity-forms/*` (legacy generic renderer); the 6 native forms (Contact, Request A Service, Join Our Network, Service Inquiry, Location Inquiry, Newsletter footer signup) post to `/api/forms/submit-rest` via `lib/gf/submit-client.ts`. Form IDs in `lib/gf/form-ids.ts`. Seeded by `scripts/seed-gravity-forms.mjs`. Newsletter form (id 6) is wired in `components/shared/Footer.tsx`.
- **US Map Data:** `components/shared/us-map-data.ts`
- **Global CSS Variables:** `styles/globals.css`
- **Storybook:** _Populate as you build_

## Architecture decisions

- **Server-Side Rendering (SSR):** All pages are SSR for SEO and performance benefits.
- **Content Caching:** WordPress content is mirrored to PostgreSQL via Drizzle ORM for fast retrieval, including taxonomies as JSON.
- **SEO & Preview Mode:** Integrates with Yoast SEO, proxies SEO files, and supports Next.js Draft Mode for real-time content preview.
- **Dynamic Routing & CPTs:** Custom Post Types (`tr_service`, `tr_industry`, `tr_location`, etc.) are dynamically routed with services and industries prioritized at the root (`/[slug]`).
- **WordPress Backend Management:** All CPTs, taxonomies, and ACF field groups are registered and managed via WordPress Code Snippets.

## Product

- **Decoupled WordPress Site:** High-performance, SEO-friendly frontend for WordPress content.
- **Content Types:** Supports WordPress "Posts" and custom post types (Services, Industries, Locations, Testimonials, Case Studies, FAQs, Partner Logos).
- **Page Templates:** 14 distinct page templates with ACF-driven content.
- **Preview Functionality:** Allows content editors to preview draft WordPress content.
- **Gravity Forms Integration:** Headless module for complex forms with validation and spam protection.
- **Global Sections:** Reusable content sections configured via ACF options pages.

## User preferences
I want to interact with the agent in an iterative development approach. I prefer detailed explanations of changes and potential impacts. The agent should ask for confirmation before making major architectural changes or introducing new dependencies.

## Gotchas

- **GF REST auth uses GF_CONSUMER_KEY/SECRET (NOT WP_AUTH_USER):** The site's `WP_AUTH_USER`/`WP_AUTH_PASSWORD` are GraphQL-only and the GF REST endpoint rejects them with 401. `app/api/forms/submit-rest/route.ts` Basic-auths with the GF consumer creds (issued in WP → Forms → Settings → REST API).
- **GF redirect confirmations live at `data.form.confirmation`:** The submissions endpoint nests the resolved confirmation under `data.form.confirmation` (with the *relative* `url`) and also exposes a top-level `confirmation_redirect` (which is an absolute URL but with an empty host like `http:///foo` because GF can't determine a base). The proxy returns `data.form.confirmation` so editor-managed relative redirects pass through unchanged. `submit-client.ts` reads `confirmation.url` and falls back to `/` if missing.
- **GF phone fields default to `phoneFormat:"standard"` (US-only):** Standard format rejects E.164 (`+15555550123`) and most non-(xxx)xxx-xxxx inputs. All 3 lead forms with phone (Contact #1, Service Inquiry #4, Location Inquiry #5) have `phoneFormat:"international"` so any non-empty value passes.

- **Shared Stats Section Image:** The "Why Clients Call Us" stats section (`StatsSection.tsx`) hardcodes its image; do not attempt to override it per page.
- **ACF REST writes require BOTH `show_in_graphql` AND `show_in_rest`:** ACF Pro 6.7+ silently drops the REST `acf` payload unless both flags are set on the field group and every field.
- **Content injection scripts:** `scripts/inject-content.mjs` is **not idempotent**; re-running creates duplicates. Use `scripts/cleanup-empty-cpts.mjs` to clean up.
- **ACF field names must match the PHP schema exactly:** When adding entries, keys must match the `name` arg in corresponding `_tr_f()` calls. WP silently drops unknown keys.
- **WP → Next.js cache invalidation on save:** Editor edits require `revalidateTag('wordpress')` called via a webhook to appear on the frontend within seconds.
- **CPT pages must `notFound()` on missing data:** Returning null produces an empty 200, which is bad for SEO.
- **Homepage hardcoded fallback pattern:** Components use `acfValue || hardcodedFallback` for content. For repeaters, the hardcoded array acts as a per-index fallback for missing fields.
- **Seed/backfill scripts must reference files that actually exist in `public/`:** `scripts/backfill-empty-acf.mjs` and `scripts/inject-content.mjs` previously hardcoded `/images/stock/*.jpg|.png` paths whose only on-disk counterpart was the `.webp` variant — production `/_next/image` returned 400 (upstream 404) for every such ACF value. Backfill only fills empty fields via `pickEmpty`, so re-running it CANNOT repair an already-seeded bad value; you must PATCH the existing ACF directly. `scripts/fix-acf-image-paths.mjs` is the generic walker that does this (idempotent, rewrites `.jpg|.jpeg|.png` → existing `.webp` across every CPT + pages + posts), then call `/api/revalidate` with `type:"all"` (auth: `WP_PREVIEW_SECRET` is accepted as the revalidate secret) to flush the Next data cache. When adding new seed entries, every image path must match a real file in `public/images/stock/` exactly — there is no `.jpg → .webp` rewrite at request time.
- **Nav menu auth quirk (staging):** The headless REST endpoint `/wp-json/headless/v1/menus/<location>` is `__return_true` (public). On `tenthrock.sherstaging.com` the staging gate accepts unauthenticated requests for `/wp-json/*` but **rejects** `WP_AUTH_USER:WP_AUTH_PASSWORD` (those are GraphQL-only creds). `lib/menus.ts` therefore tries no-auth first and falls back to `PREVIEW_USER_UN/PASS` only on 401 — never sends `WP_AUTH_*`.
- **Nav menus use client-side fetch with hardcoded defaults:** `Navbar.tsx`/`Footer.tsx` are imported by 21+ "use client" page files. To avoid converting them all to async server components, they hold static `DEFAULT_*` arrays matching the WP seed 1:1 (no FOUC) and `useEffect`-fetch from the proxy on mount. Editor changes propagate within seconds via the existing `revalidateTag('wordpress')` webhook (snippet #14 fires it on `wp_update_nav_menu`/create/delete). Primary menu uses **label-substring matching** ("service"/"who we serve"/"about") so editors can rename top-level items freely; renaming requires snake-case keywords to remain in the label.
- **Page-template slug renames propagate from WP:** Each of the 14 page-template pages is identified internally by its `headlessTemplate` value (e.g. `template-about`), exposed on `Page` over WPGraphQL via `scripts/register-page-templates-snippet.php`. `lib/wordpress.ts` exports `fetchPageTemplateSlugMap()` which returns `{ [wpTemplate]: currentSlug }`; every `fetchXxxAcf()` for a page template resolves the slug through this map before calling `GET_PAGE_TEMPLATE_ACF_QUERY`, so editor slug renames don't disconnect ACF data. `middleware.ts` does its own combined fetch (`getSlugRoutingData()` — page template slugs **plus** all `services`+`industries` slugs as a collision guard) and on each request: (a) rewrites `/<wpSlug>` → the canonical folder route from `PAGE_TEMPLATE_CONFIG` so the existing `app/<canonical>/page.tsx` renders, and (b) 301-redirects `/<canonical>` → `/<wpSlug>` so the public URL follows the editor's slug change. Homepage `/` is exempt from the redirect leg, but `/home` (or whatever the homepage's WP slug is) rewrites to `/`. Templates with `[slug]` in their route (e.g. `template-location`) are skipped. **Collision guard:** if the WP slug matches an existing service/industry CPT slug, middleware logs a warning and skips both legs — never hijacks a CPT URL. **No process-memory TTL** in middleware for this fetch: it's tagged `wordpress` and snippet #11 fires `revalidateTag('wordpress')` on every WP save, so the Next data cache is the single source of freshness.

## Pointers

- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Drizzle ORM Documentation:** [https://orm.drizzle.team/docs/overview](https://orm.drizzle.team/docs/overview)
- **WPGraphQL Documentation:** [https://www.wpgraphql.com/docs/](https://www.wpgraphql.com/docs/)
- **Shadcn UI Documentation:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
- **Framer Motion Documentation:** [https://www.framer.com/motion/](https://www.framer.com/motion/)