"use client";

import Script from "next/script";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// Termageddon policy key (the `<id>.js` segment of the embed URL). The live
// embed script injects the policy HTML into `getElementById(<POLICY_KEY>)`, so
// the placeholder container MUST use the policy key as its id (a generic
// `policy_embed_div` would never be found and the policy would not render).
const TERMAGEDDON_POLICY_KEY = "UzA5cVlURmhUMk0zUm01QmRVRTlQUT09";
const TERMAGEDDON_EMBED_SRC = `https://policies.termageddon.com/api/embed/${TERMAGEDDON_POLICY_KEY}.js`;
const TERMAGEDDON_FALLBACK_URL = `https://embed.termageddon.com/api/policy/${TERMAGEDDON_POLICY_KEY}`;

export default function CookiePolicyClient() {
  return (
    <main>
      <Navbar variant="sticky" />
      <section
        className="py-8 md:py-16 lg:py-20 bg-white"
        data-testid="section-cookie-policy"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-12"
              data-testid="text-cookie-heading"
            >
              Cookie Policy
            </h1>

            <div
              className="prose prose-lg max-w-none text-[#042940] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#042940]/90 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_a]:text-[#042940] [&_a]:underline [&_a]:font-medium hover:[&_a]:text-[#c5d520]"
              data-testid="content-cookie-policy"
            >
              <div
                id={TERMAGEDDON_POLICY_KEY}
                aria-busy="true"
                suppressHydrationWarning
              >
                <a
                  href={TERMAGEDDON_FALLBACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Please wait while the policy is loaded. If it does not load,
                  please click here.
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />

      {/*
        Termageddon embed. Its logic is wrapped in window's "load" event, which
        is already gone by the time next/script injects the tag on a client
        route — leaving the policy stuck on the fallback. When the script
        finishes loading we therefore re-fire "load" once (only if the document
        has already finished loading) so the embed's listener runs and renders
        the policy.
      */}
      <Script
        id="termageddon-cookie-policy-embed"
        src={TERMAGEDDON_EMBED_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          if (document.readyState === "complete") {
            window.dispatchEvent(new Event("load"));
          }
        }}
      />
    </main>
  );
}
