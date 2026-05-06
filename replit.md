# Headless WordPress Boilerplate

This application provides a high-performance, SEO-friendly headless WordPress site using Next.js and PostgreSQL, focusing on posts and taxonomy support.

## Run & Operate

- **Run Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Typecheck:** `npm run typecheck`
- **Codegen (GraphQL types):** `npm run codegen`
- **DB Push (Drizzle schema):** `drizzle-kit push:pg`

**Required Environment Variables:**
- `WORDPRESS_GRAPHQL_URL`
- `WORDPRESS_REST_URL`
- `WP_PREVIEW_SECRET`
- `WP_REVALIDATE_SECRET`
- `DATABASE_URL`
- `PREVIEW_USER_UN` (for snippet installation)
- `PREVIEW_USER_PASS` (for snippet installation)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** Node.js (version specified in `package.json`)
- **Language:** TypeScript
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL
- **UI:** Shadcn UI
- **Build Tool:** Next.js

## Where things live

- **WordPress Content Sync/Caching:** `lib/wordpress.ts`, `drizzle/schema.ts`
- **Dynamic Routes Configuration:** `lib/config/post-types.ts` (source of truth for WP post types and page templates to Next.js routes)
- **Middleware:** `middleware.ts` (handles 301 redirects)
- **API Routes:** `app/api/*` (e.g., `app/api/revalidate/route.ts` for on-demand revalidation)
- **Custom Post Types & Taxonomies:** Defined in WordPress via Code Snippets (see PHP files in `scripts/`)
- **ACF Field Groups:** Defined in WordPress via Code Snippets (see PHP files in `scripts/`)
- **Gravity Forms Integration:** `components/gravity-forms/*`
- **US Map Data:** `components/shared/us-map-data.ts`
- **Global CSS Variables:** `styles/globals.css`
- **Storybook:** `_Populate as you build_`

## Architecture decisions

- **Server-Side Rendering (SSR):** All pages are SSR for SEO and performance.
- **Content Caching:** WordPress content is mirrored to PostgreSQL via Drizzle ORM for fast retrieval, including taxonomies as JSON.
- **SEO & Preview Mode:** Integrates with Yoast SEO, proxies SEO files, and supports Next.js Draft Mode for real-time content preview.
- **Dynamic Routing & CPTs:** Custom Post Types (`tr_service`, `tr_industry`, `tr_location`, etc.) are dynamically routed. Services and industries are served at the root (`/[slug]`), taking priority over regular pages.
- **WordPress Backend Management:** All CPTs, taxonomies, and ACF field groups are registered and managed via WordPress Code Snippets.

## Product

- **Decoupled WordPress Site:** High-performance, SEO-friendly frontend for WordPress content.
- **Content Types:** Supports WordPress "Posts" and several Custom Post Types (Services, Industries, Locations, Testimonials, Case Studies, FAQs, Partner Logos).
- **Page Templates:** 14 distinct page templates with ACF-driven content.
- **Preview Functionality:** Allows content editors to preview draft WordPress content before publishing.
- **Gravity Forms Integration:** Headless module for complex forms with validation and spam protection.
- **Global Sections:** Reusable content sections configured via ACF options pages.

## User preferences
I want to interact with the agent in an iterative development approach. I prefer detailed explanations of changes and potential impacts. The agent should ask for confirmation before making major architectural changes or introducing new dependencies.

## Gotchas

- **Shared Stats Section Image:** The "Why Clients Call Us" stats section (`StatsSection.tsx`) hardcodes its image; do not attempt to override it per page.
- **ACF REST API Caching:** Location page info (third heading/description) is stored in the WordPress `content` field as JSON due to ACF REST API caching limitations.
- **Snippet Installation:** Use `node scripts/install-snippet.mjs <id-or-name> <php-file>` for re-installing/re-deploying WordPress snippets.
- **ACF REST writes require BOTH `show_in_graphql` AND `show_in_rest`:** ACF Pro 6.7+ silently drops the REST `acf` payload (returns `acf: []`) unless `show_in_rest => 1` is set on the field group AND every field. The helpers in `scripts/register-cpt-acf-snippet.php` (`tr_acf_field`, `tr_acf_repeater`, `tr_acf_group`) all set both. If you add new field types, propagate this flag.
- **Content injection scripts:** `scripts/inject-content.mjs` (testimonials/case-studies/FAQs/partner-logos), `scripts/recover-and-inject-services.mjs` (services + industries, sources from git commit `ea2eb3ca`), `scripts/inject-locations.mjs` (47 state location pages from `lib/data/state-location-content.ts`). `inject-content.mjs` is **not idempotent** — re-running creates duplicates; use `scripts/cleanup-empty-cpts.mjs` to delete posts with empty critical ACF fields after re-runs.
- **CPT pages must `notFound()` on missing data:** the 40+ hardcoded CPT routes under `app/*/page.tsx` must call `notFound()` (not `return null`) when their `fetchServiceWithAcf`/`fetchIndustryWithAcf` returns null. Returning null produces an empty 200 that gets indexed as thin content.
- **SEO heading audit:** `node scripts/audit-headings.mjs` fetches every page template + representative CPT, parses H1–H6, and prints a unified pass/fail table. Run after template or content changes.
- **Deeper semantic heading audit:** `node scripts/audit-headings-semantic.mjs` additionally flags sr-only / hidden H1s and visually-styled large text (`text-3xl..text-7xl`) on non-heading tags. Numeric stat displays (e.g. `30%`, `5K+`, `10 min`) are excluded automatically — they are data, not headings.
- **Homepage SSR:** `components/home/HomeClient.tsx` must dynamically import `TenthRockHome` WITHOUT `ssr: false` — disabling SSR strips the real `<h1>`/`<h2>`/`<h3>` from the initial HTML and crawlers / screen readers only see the loading fallback. The hero `<h1 id="hero-heading">` is the single visible H1; do not re-add an `sr-only` H1 alongside it.

## Pointers

- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Drizzle ORM Documentation:** [https://orm.drizzle.team/docs/overview](https://orm.drizzle.team/docs/overview)
- **WPGraphQL Documentation:** [https://www.wpgraphql.com/docs/](https://www.wpgraphql.com/docs/)
- **Shadcn UI Documentation:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
- **Framer Motion Documentation:** [https://www.framer.com/motion/](https://www.framer.com/motion/)