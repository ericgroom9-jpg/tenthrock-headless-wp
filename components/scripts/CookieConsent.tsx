import Script from "next/script";

/**
 * Usercentrics Cookie Consent Tool (CMP).
 *
 * Loaded once in the root layout — intentionally NOT routed through
 * `GlobalScripts`, which only re-emits inline editor snippets and drops
 * external `src` scripts plus custom attributes (`id`, `data-settings-id`,
 * `async`) that Usercentrics requires.
 *
 * Order matters: the `uc-block` bundle must load before any tag it is meant
 * to gate, and it also defines the global `uc` object that
 * `uc.setCustomTranslations(...)` depends on. The translations call is guarded
 * with a polling check so it never throws if `uc` is not yet defined.
 *
 * Strategy = `afterInteractive` (NOT `beforeInteractive`): the Usercentrics
 * "Smart Data Protector" (`uc-block`) mutates the document DOM (rewrites/adds
 * script and head nodes) as soon as it executes. Running it `beforeInteractive`
 * meant it mutated the server-rendered HTML *before* React hydrated, so the
 * client tree no longer matched the server tree — producing recoverable
 * "Hydration failed" runtime errors (surfaced as the dev error overlay).
 * Loading `afterInteractive` defers execution until React has hydrated and owns
 * the DOM, so the later mutations are tolerated. The scripts still load in
 * source order and the CMP banner appears normally.
 *
 * URLs/IDs are the customer-provided snippet verbatim.
 */
export function CookieConsent() {
  return (
    <>
      <link rel="preconnect" href="https://privacy-proxy.usercentrics.eu" />
      <link rel="preconnect" href="https://app.usercentrics.eu" />
      {/*
        No crossOrigin here: the custom-translations JSON is fetched WITHOUT
        CORS, so a crossorigin preconnect opens a connection that the actual
        request can't reuse (Lighthouse flags it "Unused preconnect").
      */}
      <link
        rel="preconnect"
        href="https://termageddon.ams3.cdn.digitaloceanspaces.com"
      />
      <link
        rel="preload"
        as="script"
        href="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
      />
      <link
        rel="preload"
        as="script"
        href="https://app.usercentrics.eu/browser-ui/latest/loader.js"
      />

      <Script
        id="usercentrics-uc-block"
        src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
        strategy="afterInteractive"
      />

      <Script
        id="usercentrics-cmp"
        src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
        data-settings-id="VSh7S8F0CRv14Q"
        strategy="afterInteractive"
        async
      />

      <Script id="usercentrics-custom-translations" strategy="afterInteractive">
        {`(function(){var t=0;function s(){if(typeof uc!=='undefined'&&typeof uc.setCustomTranslations==='function'){uc.setCustomTranslations('https://termageddon.ams3.cdn.digitaloceanspaces.com/translations/');}else if(t++<60){setTimeout(s,50);}}s();})();`}
      </Script>

      {/*
       * Scoped CSS injected into the CMP's #usercentrics-root Shadow DOM.
       * The Usercentrics browser-ui renders entirely inside that shadow root, so
       * page-level CSS cannot reach it — we inject a <style> once the root exists
       * and keep re-checking for ~20s so it survives the CMP's initial re-renders.
       *
       * Two customizations:
       *   1. Hide the floating privacy trigger ("fingerprint" button,
       *      [data-testid="uc-privacy-button"]). The footer "Privacy Settings"
       *      link (UC_UI.showSecondLayer) remains fully functional.
       *   2. Shrink the default consent banner into a compact card pinned to the
       *      bottom-right corner ([data-testid="uc-banner-content"]). The banner's
       *      outer layer ([data-testid="uc-default-banner"]) is a transparent,
       *      full-viewport flex layer that centers the bar; rather than fight its
       *      flex alignment we position the content box itself `position:fixed` in
       *      the corner. width:calc(100% - 32px) + max-width keeps it edge-to-edge
       *      on small screens. All consent controls remain intact and functional.
       */}
      <Script id="usercentrics-cmp-styles" strategy="afterInteractive">
        {`(function(){var css='[data-testid="uc-privacy-button"]{display:none !important;}[data-testid="uc-banner-content"]{position:fixed !important;right:16px !important;bottom:16px !important;left:auto !important;top:auto !important;max-width:420px !important;width:calc(100% - 32px) !important;max-height:calc(100vh - 32px) !important;border-radius:12px !important;box-shadow:0 10px 34px rgba(0,0,0,.25) !important;}';function inject(){var r=document.getElementById('usercentrics-root');if(!(r&&r.shadowRoot))return;var s=r.shadowRoot.getElementById('uc-custom-styles');if(!s){s=document.createElement('style');s.id='uc-custom-styles';s.textContent=css;r.shadowRoot.appendChild(s);}}var n=0,iv=setInterval(function(){inject();if(++n>100)clearInterval(iv);},200);})();`}
      </Script>
    </>
  );
}
