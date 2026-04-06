"use client";

import { useEffect } from "react";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <PrivacyPolicySection />
      <Footer />
    </main>
  );
}

function PrivacyPolicySection() {
  useEffect(() => {
    const scriptId = "termageddon-privacy-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://policies.termageddon.com/api/embed/TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-white"
      data-testid="section-privacy-policy"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-12"
            data-testid="text-privacy-heading"
          >
            Privacy Policy
          </h1>

          <div
            className="prose prose-lg max-w-none text-[#042940]"
            data-testid="content-privacy-policy"
          >
            <div
              id="TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09"
              className="policy_embed_div"
              style={{ width: "100%", minHeight: "480px" }}
            >
              Please wait while the policy is loaded. If it does not load,
              please{" "}
              <a
                rel="nofollow"
                href="https://policies.termageddon.com/api/policy/TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09"
                target="_blank"
                className="text-[#042940] font-bold underline hover:text-[#c5d520] transition-colors"
                data-testid="link-privacy-fallback"
              >
                click here
              </a>{" "}
              to view the policy.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
