# Headless WordPress Boilerplate

## Overview
This project delivers a modern headless WordPress boilerplate using Next.js App Router and PostgreSQL. It focuses on providing a high-performance, SEO-friendly, and robust solution for decoupled WordPress sites, specifically targeting the default "Posts" content type with full taxonomy support. The system aims to enhance the developer experience while offering advanced features like content caching, real-time previewing, and dynamic content revalidation.

## User Preferences
I want to interact with the agent in an iterative development approach. I prefer detailed explanations of changes and potential impacts. The agent should ask for confirmation before making major architectural changes or introducing new dependencies.

## System Architecture
The system employs a Next.js 16 App Router frontend, utilizing TypeScript and Next.js API Routes. Content is fetched from WordPress via WPGraphQL and cached in a PostgreSQL database managed by Drizzle ORM.

**Key Architectural Decisions:**

- **Server-Side Rendering (SSR):** All pages are SSR for enhanced SEO and performance.
- **Content Caching:** WordPress content is synced to PostgreSQL for fast retrieval, supporting taxonomies (categories, tags) embedded as JSON.
- **SEO Integration:** Leverages Next.js Metadata API with Yoast SEO integration and proxies SEO files (sitemaps, robots.txt) from WordPress, remapping URLs to the frontend domain.
- **Preview Mode:** Enables previewing draft WordPress content via Next.js Draft Mode, supporting authenticated GraphQL requests and basic authentication for staging environments. It allows administrators to review content changes before publishing.
- **301 Redirects:** Next.js middleware dynamically applies 301/302 redirects fetched from WordPress.
- **On-Demand Revalidation:** A dedicated API endpoint (`/api/revalidate`) allows for purging cached content based on specific paths, content types, or the entire site.
- **ACF Global Scripts:** Supports injection of custom `<head>` and `<body>` scripts configured in WordPress via Advanced Custom Fields.
- **Gravity Forms Integration:** Provides a reusable headless module for Gravity Forms, handling multi-page forms, conditional logic, client-side validation, spam protection, and file uploads using WPGraphQL for schema and Gravity Forms REST API for submissions.
- **US Map Pins Animation:** Self-contained animated SVG (`components/shared/UsMapPinsAnimation.tsx`) used in the "Where to Find Us" section instead of a video. State paths and centroids in `components/shared/us-map-data.ts` (sourced from the public-domain Wikimedia "Blank US Map (states only)" SVG, with Alaska, Hawaii, and DC removed for a contiguous-48-states view). Map is fully static; one green (#BAD656) teardrop pin per state pops in sequentially west-to-east as a one-time reveal, then stays. Triggered by `IntersectionObserver` and respects `prefers-reduced-motion`. Pacing controlled by `PIN_INTERVAL_S` and `POP_DURATION_S` constants.
- **Loading Screen & Hero Animation:** The homepage features a CSS-driven loading screen with logo reveal and progress bar, followed by staggered hero entrance animations using framer-motion.
- **Design System:** A comprehensive design system is implemented using CSS variables for consistent styling, with a `/style-guide` page providing a visual reference.
- **Modular Component Architecture:** Emphasizes modular React components for maintainability.
- **Shared "Why Clients Call Us" Stats Section:** A single shared component (`components/shared/StatsSection.tsx`) renders the "Why Clients Call Us Again and Again" section identically across the homepage, the Who We Serve page, the Commercial Waste Services page, and every Service Template page. Image is hardcoded to `/images/stock/why-clients-nyc-sunrise.jpg` (the homepage hero of the section). Per-page `statsImage`/`statsImageAlt` overrides on `ServiceTemplate` were removed; do not reintroduce them — the picture must always match the homepage.
- **Landing Page Builder (Feature Flag):** An optional module that allows self-service landing page creation using ACF Flexible Content blocks, with various pre-defined content sections (Hero, Feature Grid, CTA Banner, Form Section, Rich Text, Testimonials). It integrates with the global style guide.
- **Service Categories:** The project defines four main service categories, each with three subcategories, structured with SEO-friendly URLs.
- **Custom Post Types (CPT):** Seven CPTs registered via Code Snippets plugin on WordPress (mbstest1.sherstaging.com): `tr_service` (Services), `tr_industry` (Industries), `tr_location` (Locations), `tr_testimonial` (Testimonials), `tr_case_study` (Case Studies), `tr_faq` (FAQs), `tr_partner_logo` (Partner Logos). All exposed via WPGraphQL with Yoast SEO support. Services, Industries, and Locations have single pages; Testimonials, Case Studies, FAQs, and Partner Logos are list-only (no single page views). PHP snippet ID 5 in Code Snippets plugin.
- **Page Templates:** 15 page templates registered in WordPress via Code Snippets plugin (snippet ID 6) using the `theme_page_templates` filter. Templates are selectable in the WordPress page editor and exposed via REST API (`headless_template` field) and GraphQL (`headlessTemplate` field). Template slugs use the `template-*` prefix (e.g., `template-homepage`, `template-about`).
- **Post Type & Template Registry:** `lib/config/post-types.ts` is the central registry mapping WordPress post types and page templates to Next.js frontend routes. It contains `POST_TYPE_CONFIG` (7 CPTs + post + page) and `PAGE_TEMPLATE_CONFIG` (15 templates). The preview API (`app/api/preview/route.ts`) consumes the registry for preview routing. List-only CPTs correctly return 400 when previewed.
- **Dynamic CPT Routes:** `app/services/[slug]/page.tsx` and `app/industries/[slug]/page.tsx` provide dynamic server-rendered pages for WordPress-managed services and industries. These use `ServiceTemplate` and `IndustryTemplate` components respectively. Static routes (33 service folders, 8 industry folders) take priority over dynamic `[slug]` routes per Next.js App Router convention.

**Core Features:**
- Full taxonomy support (categories and tags) for posts.
- SEO-friendly URL structure and meta-data handling.
- Development tooling for database schema pushing.
- GraphQL queries for CPTs in `lib/wordpress.ts`: `fetchServiceBySlug`, `fetchIndustryBySlug`, `fetchAllServiceSlugs`, `fetchAllIndustrySlugs`.

## External Dependencies
- **WordPress:** Content Management System.
- **WPGraphQL Plugin:** GraphQL API for WordPress.
- **WPGraphQL Yoast SEO Plugin:** Integrates Yoast SEO data into WPGraphQL.
- **WPGraphQL for ACF Plugin:** Enables ACF fields within WPGraphQL.
- **Redirection Plugin:** Manages 301 redirects in WordPress.
- **Gravity Forms Plugin:** For building and managing forms.
- **WPGraphQL for Gravity Forms Plugin (AxeWP):** Integrates Gravity Forms with WPGraphQL.
- **PostgreSQL:** Primary database for cached content.
- **Drizzle ORM:** TypeScript ORM for interacting with PostgreSQL.
- **Next.js:** React framework for frontend and API routes.
- **graphql-request:** GraphQL client.
- **Shadcn UI:** UI component library.