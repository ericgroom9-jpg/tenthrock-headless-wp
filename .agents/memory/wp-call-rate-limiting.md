---
name: WP call rate-limiting (cap WordPress at ~once/30min per path)
description: Why per-visit code paths flood WordPress and which caching pattern fixes each (route handler vs middleware).
---

# Capping WordPress calls to ~once per 30 minutes

**Rule:** WordPress (GraphQL + headless REST) must be hit at most ~once per 30 min
per code path, not per visitor. Page data is already safe via ISR
(`revalidate = 1800` on every page → Full Route Cache). The leaks are the paths
that run *outside* the route cache on every visit: middleware, and the
client-side nav-menu proxy (fetched ~8x per page view).

**Two non-obvious Next.js facts that make this subtle:**
1. **Next's `fetch` Data Cache only caches `GET`.** A `POST` is never cached, so
   `next:{revalidate}` on a POST is a silent no-op. All WPGraphQL traffic is POST.
2. **Passing an `AbortSignal` opts a `fetch` out of the Data Cache** — so a
   timeout-guarded GET also ignores `next:{revalidate}`.

**Which pattern to use where:**
- **Route handler / server component** (esp. POST or signal-bearing fetch):
  use `unstable_cache` with `tags:['wordpress']`. It caches the function *result*
  regardless of method/signal, AND `revalidateTag('wordpress')` still purges it,
  so editor edits stay instant (no 30-min lag).
- **Middleware**: `unstable_cache` is NOT available (edge runtime). Use a
  module-level in-memory TTL. Consequence: it can't be tag-purged, so changes lag
  up to 30 min. This staleness was an explicit, user-accepted trade to stop the flood.

**Cache-poisoning guards (learned the hard way):**
- Inside `unstable_cache`, THROW on failure (rejections aren't cached) and return
  an empty value for legitimately-empty results — otherwise a transient outage
  caches "empty" for the whole window and pins fallbacks.
- A proxy/route that collapses "failure" and "legitimately empty" into the same
  response must NOT send a long `Cache-Control` on that response, or the
  browser/CDN re-introduces the poisoning the server-side guard prevented. Send
  `no-store` on the null/failure path; long-cache only confirmed data.

**How to apply:** before adding any new WP fetch, ask "does this run per-visit
outside ISR?" If yes, pick the pattern above by runtime, and never trust
`next:{revalidate}` alone for POST or signal-bearing fetches.
