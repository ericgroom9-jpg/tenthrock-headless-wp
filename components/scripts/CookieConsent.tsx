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
      <link
        rel="preconnect"
        href="https://termageddon.ams3.cdn.digitaloceanspaces.com"
        crossOrigin="anonymous"
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
       * Hide the floating Usercentrics privacy trigger ("fingerprint" button).
       * The CMP (browser-ui) renders it as <button data-testid="uc-privacy-button">
       * INSIDE the #usercentrics-root Shadow DOM, so page-level CSS cannot reach
       * it. We inject a scoped <style> into that shadow root once it exists, and
       * keep re-checking for ~20s so it survives the CMP's initial re-renders.
       * The consent banner and the footer "Privacy Settings" link (which calls
       * UC_UI.showSecondLayer) remain fully functional.
       */}
      <Script id="usercentrics-hide-privacy-button" strategy="afterInteractive">
        {`(function(){function inject(){var r=document.getElementById('usercentrics-root');if(!(r&&r.shadowRoot))return;if(!r.shadowRoot.getElementById('uc-hide-privacy-btn')){var s=document.createElement('style');s.id='uc-hide-privacy-btn';s.textContent='[data-testid="uc-privacy-button"]{display:none !important;}';r.shadowRoot.appendChild(s);}}var n=0,iv=setInterval(function(){inject();if(++n>100)clearInterval(iv);},200);})();`}
      </Script>
    </>
  );
}
