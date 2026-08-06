---
name: RSC CDN cache poisoning
description: Cloudflare ignores Vary, so publicly-cacheable RSC flight responses can replace HTML pages at the edge; fixed via header-rewriting proxy in the server wrapper
---

Live pages can render as raw flight text (`:HL[...]` / `self.__next_f.push`) when the CDN caches a `text/x-component` RSC response under the plain page URL.

**Why:** Next.js distinguishes RSC vs HTML only via `Vary: rsc, next-router-state-tree, ...`, which Cloudflare ignores for HTML. RSC responses carry the same public `s-maxage` cache-control as HTML, so the edge can cache a client-navigation RSC fetch (most likely on middleware-rewritten routes) and serve it as the document to everyone.

**How to apply:** `next start` overwrites Cache-Control set from middleware OR next.config headers for ISR routes — neither works. The reliable fix: the production server wrapper runs Next on a loopback-only internal port and fronts it with a minimal Node http proxy that rewrites Cache-Control to `private, no-store, must-revalidate` whenever upstream Content-Type is `text/x-component`. The internal port must stay bound to 127.0.0.1 and never be exposed, or direct hits bypass the guard. After deploying, the poisoned Cloudflare copies must be purged manually. Verify with `curl <url>?_rsc=abc -H "rsc: 1"` — `text/x-component` must not be shared-cacheable.

Related gotcha (fixed Aug 2026 with loop guards in middleware): three redirect sources — WP-managed redirects, hardcoded legacy aliases, and the template slug-rename legs — can pair up into infinite 301 loops (/locations, /services, /about-us). Rule: before emitting any redirect, resolve its destination through the other redirect sources; if it bounces straight back, skip and serve the canonical route. Normalize targets (absolute/relative, query, trailing slash) to a bare local pathname before comparing; external-origin targets can't loop.
