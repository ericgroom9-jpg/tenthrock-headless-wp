"use client";

import { useEffect } from "react";

/**
 * Forces internal link clicks to perform a full-document navigation
 * (`window.location.assign`) instead of letting Next.js do a client-side
 * route swap. This is the only way to make the browser's native tab
 * loading spinner appear on every in-app navigation — the browser only
 * shows that indicator while it's actually loading a top-level document.
 *
 * Trade-off: every click re-downloads the page and re-hydrates from
 * scratch, which is slower than Next.js's default SPA navigation. Per
 * user direction (task #35), the native browser loading indicator is
 * preferred over SPA speed.
 *
 * Coverage:
 *  - Capture-phase click handler runs before Next.js <Link>'s own
 *    handler, so `preventDefault()` + `window.location.assign(href)`
 *    wins.
 *  - Skips external links, target=_blank, mailto/tel/sms/javascript,
 *    download, modifier-key clicks, and pure same-URL/hash clicks
 *    (those let the browser handle scrolling itself).
 *  - Programmatic `router.push`/`router.replace` are intercepted via
 *    `history.pushState`/`replaceState` wrappers so they also become
 *    full-document loads (Gravity Forms newsletter post-submit
 *    redirect goes through this path).
 */

function isModifiedClick(e: MouseEvent): boolean {
  return e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
}

function shouldForceFullLoad(anchor: HTMLAnchorElement): URL | null {
  const href = anchor.getAttribute("href");
  if (!href) return null;
  if (anchor.target && anchor.target !== "" && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;
  if (/^(mailto:|tel:|sms:|javascript:)/i.test(href)) return null;
  if (href.startsWith("#")) return null;

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;

  // Pure hash change on the same path → let the browser scroll.
  if (
    url.pathname === window.location.pathname &&
    url.search === window.location.search &&
    url.hash &&
    url.hash !== window.location.hash
  ) {
    return null;
  }
  // Exact same URL → nothing to do.
  if (url.href === window.location.href) return null;

  return url;
}

export default function NavigationProgress() {
  useEffect(() => {
    // ── Link click interception ──────────────────────────────────
    const onClick = (e: MouseEvent) => {
      if (isModifiedClick(e)) return;
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const url = shouldForceFullLoad(anchor);
      if (!url) return;

      // Beat Next.js <Link>'s own click handler.
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(url.href);
    };
    document.addEventListener("click", onClick, { capture: true });

    // ── Programmatic navigation (router.push / router.replace) ───
    // Next.js routes through history.pushState / replaceState. Swap those
    // for full-document loads so the native tab spinner shows up there
    // too (e.g. Gravity Forms newsletter post-submit redirect).
    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;
    const intercept = (replace: boolean) =>
      function (this: History, ...args: Parameters<typeof window.history.pushState>) {
        const [, , url] = args;
        if (url != null) {
          try {
            const next = new URL(String(url), window.location.href);
            if (next.origin === window.location.origin && next.href !== window.location.href) {
              if (replace) window.location.replace(next.href);
              else window.location.assign(next.href);
              return;
            }
          } catch {
            /* fall through to native */
          }
        }
        const orig = replace ? origReplace : origPush;
        return orig.apply(this, args);
      };
    window.history.pushState = intercept(false) as typeof window.history.pushState;
    window.history.replaceState = intercept(true) as typeof window.history.replaceState;

    return () => {
      document.removeEventListener("click", onClick, true);
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
    };
  }, []);

  return null;
}
