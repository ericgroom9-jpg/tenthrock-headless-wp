---
name: Mobile LCP vs loading overlay
description: Why the homepage loading-intro overlay fades via CSS (not JS) on mobile, and how hero entrance timing is viewport-switched.
---

# Loading overlay must not gate LCP on hydration (mobile)

A full-screen branded loading overlay that is SSR'd opaque and only faded by a
JS timer (`useEffect` setTimeout) **gates LCP on hydration**: the priority hero
poster is painted but stays covered until JS hydrates and drops the overlay
opacity. On the Tenth Rock homepage this made the slow Usercentrics consent
banner win LCP (mobile LCP ~7.4s).

**Rule:** On mobile, fade the overlay with a **pure CSS animation** (media-query
scoped `.loader-overlay { animation: loaderMobileFade ... forwards }` whose end
state is `opacity:0; visibility:hidden; pointer-events:none`). CSS animations run
from first paint, independent of hydration, so the hero poster can become LCP at
~1s. The JS `useEffect` on mobile then ONLY schedules DOM removal and **skips the
scroll-lock** (a late JS lock under slow hydration would lock scroll after the
overlay already visually cleared). Desktop keeps the JS-timed (~2.6s) path.

**Why CSS animation overrides Tailwind `opacity-100`:** an active/forwards CSS
animation composites the animated property over class-level declarations, so the
`opacity-100` class on the same element is correctly overridden.

**Hero entrance timing is viewport-switched via CSS vars, not JS:** delays use
`--hero-anim-delay` (2.7s desktop / 0s mobile via `@media (max-width:767px)`),
applied inline as `calc(var(--hero-anim-delay) + Ns)`. Pure-CSS so there is no
hydration flash and it is reliable under Lighthouse mobile emulation. Avoid
computing animation delays from JS state — that flashes the desktop delay before
hydration switches it.

**How to apply:** when a perf change must change LCP-blocking visuals per
viewport, prefer CSS media queries / CSS animations over JS `matchMedia`+state.
Keep `MOBILE_LOADER_TOTAL_MS` in `TenthRockHome.tsx` in sync with the
`loaderMobileFade` hold+fade timing in `globals.css`.

**Still-open PageSpeed items (deferred, risky):** render-blocking CSS chunk
(~22KB) and Next/Turbopack legacy JS polyfills (~13KB); browserslist tweaks did
not remove the polyfills in prior attempts.
