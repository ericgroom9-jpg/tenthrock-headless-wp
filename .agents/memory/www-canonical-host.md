---
name: www canonical host
description: Single canonical host is www.tenthrock.com — how host redirect + canonical normalization are wired and why.
---

# www is the single canonical host

The site's one canonical host is **https://www.tenthrock.com** (user-confirmed). Everything else 301s to it.

**Rule:**
- The Replit deployment serves BOTH the apex `tenthrock.com` and `www.tenthrock.com` with HTTP 200 — the platform does NOT redirect between attached custom domains, so the redirect must happen in app code.
- `middleware.ts` 301s the non-www apex → www at the very top of `middleware()` (before legacy redirects and WP fetches), keyed off `x-forwarded-host || host`.
- Canonical tags are normalized to the www origin via `toCanonicalUrl()` in `lib/seo-metadata.ts`; `CANONICAL_ORIGIN = FRONTEND_URL || https://www.tenthrock.com`.
- `FRONTEND_URL` is set **production-only** (not shared): in dev `getFrontendUrl()` derives the host from the request, but `toCanonicalUrl()` still rewrites canonicals to www regardless.

**Why:** Before this, both hosts returned 200 with no redirect (site-wide duplicate content), and canonicals were inconsistent — homepage canonical came from Yoast as the apex, CPT pages self-canonicalized to whatever host was visited (reinforcing both copies), and page-template/blog pages emitted no canonical. The apex/non-www version is the non-canonical one because www is the published production domain.

**How to apply:** If the canonical host ever changes, update the `CANONICAL_HOST` constant in `middleware.ts`, the `FRONTEND_URL` production env, and the `CANONICAL_ORIGIN` fallback together. Canonicals should always point at a 200 URL on the canonical host — never at a path that itself 301/308-redirects (toCanonicalUrl strips non-root trailing slashes for this reason, since the site normalizes to no-trailing-slash).
