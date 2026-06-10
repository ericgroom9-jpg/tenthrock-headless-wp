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

**The "Legacy JavaScript" PSI audit here is Next's `nomodule` polyfill bundle**
(`build-manifest.json` → `polyfillFiles`, ~112KB raw). Modern Chrome (which PSI
mobile uses) does NOT download `nomodule` scripts, so this audit is *Unscored*
and has ~zero impact on the measured mobile LCP/TBT. Do not spend effort
"removing legacy polyfills" for the metric — refreshing caniuse-lite changed no
resolved targets, and Next gives no supported knob to drop the nomodule bundle.

**Hero `<video poster>` was a redundant duplicate fetch of the priority hero
`<Image>`.** The background `<video>` carried `poster={heroPoster}` pointing at
the RAW `/videos/hero-poster.webp` (~80KB, NOT Next-optimized) — that is exactly
what PSI's "Improve image delivery" flagged, not the optimized `<Image>`. The
priority `<Image>` (always rendered, same src, same `opacity-80`, sitting behind
the idle-mounted video) already paints the identical frame, so the `poster` attr
just double-downloaded the raw file. **Rule:** when a priority `<Image>` already
renders the same poster frame behind a deferred background `<video>`, drop the
video's `poster` attribute — the Image shows through until the first video frame
decodes (no flash, and it stays as a graceful fallback if the video never loads).
