---
name: Mobile LCP vs loading overlay
description: Why a full-screen intro overlay must fade independently of JS hydration on mobile, or it becomes the LCP bottleneck.
---

# A loading overlay faded by a JS timer gates LCP on hydration

A full-screen branded intro overlay that is server-rendered opaque and only
dismissed by a client-side timer (`useEffect` setTimeout) keeps the priority
hero image covered until JS hydrates. Under mobile emulation that delayed LCP
badly (the slow third-party consent banner won LCP at ~7s instead of the hero).

**Rule:** fade the overlay with a CSS animation whose end state is fully
non-blocking (transparent + hidden + non-interactive). CSS animations run from
first paint, independent of hydration, so the hero can become LCP early.

**Why:** LCP is gated by *when the largest element becomes visible*, not by when
JS runs. Anything covering it must clear via a mechanism that doesn't wait on
hydration.

**Corollary — scroll-lock:** don't apply a JS scroll-lock alongside a
hydration-independent fade; under slow hydration the lock can land after the
overlay has already visually cleared, freezing a usable page.

**Corollary — per-viewport timing:** when intro/animation timing must differ by
viewport, drive it from CSS (media queries / CSS custom properties) rather than
JS `matchMedia` + state, to avoid a pre-hydration flash of the wrong timing and
to stay reliable under Lighthouse emulation.

**How to apply:** any perf change that alters LCP-blocking visuals per viewport
should prefer CSS media queries / CSS animations over JS-driven visibility.

**Deferred PageSpeed items (need owner sign-off, not done here):** render-blocking
global CSS — `optimizeCss` only inlines critical CSS if its engine dependency is
actually installed; it is a silent no-op otherwise, so confirm the dep is present
before assuming critical-CSS inlining works. Legacy JS polyfills are governed by
the browserslist target (a modern target is already configured).
