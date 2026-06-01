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
 * `uc.setCustomTranslations(...)` depends on. We therefore load the block
 * bundle and the CMP loader with `beforeInteractive` so they are present in
 * the initial document, and guard the translations call so it never throws if
 * `uc` is not yet defined (avoids console errors / hydration warnings).
 *
 * URLs/IDs are the customer-provided snippet verbatim.
 */
export function CookieConsent() {
  return (
    <>
      <link rel="preconnect" href="https://privacy-proxy.usercentrics.eu" />
      <link
        rel="preload"
        as="script"
        href="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
      />

      <Script
        id="usercentrics-uc-block"
        src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
        strategy="beforeInteractive"
      />

      <Script
        id="usercentrics-cmp"
        src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
        data-settings-id="VSh7S8F0CRv14Q"
        strategy="beforeInteractive"
        async
      />

      <Script id="usercentrics-custom-translations" strategy="beforeInteractive">
        {`(function(){var t=0;function s(){if(typeof uc!=='undefined'&&typeof uc.setCustomTranslations==='function'){uc.setCustomTranslations('https://termageddon.ams3.cdn.digitaloceanspaces.com/translations/');}else if(t++<60){setTimeout(s,50);}}s();})();`}
      </Script>
    </>
  );
}
