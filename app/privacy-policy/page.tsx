"use client";

import { useState } from "react";
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
  const [iframeHeight, setIframeHeight] = useState(2000);

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
            className="w-full"
            data-testid="content-privacy-policy"
          >
            <iframe
              src="https://policies.termageddon.com/api/policy/TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09?h-align=left&table-style=accordion"
              title="Privacy Policy"
              width="100%"
              height={iframeHeight}
              style={{ border: "none", overflow: "hidden" }}
              data-testid="iframe-privacy-policy"
            />
            <p className="text-sm text-[#042940]/60 mt-6">
              If the policy does not display,{" "}
              <a
                rel="nofollow"
                href="https://policies.termageddon.com/api/policy/TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09"
                target="_blank"
                className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors"
                data-testid="link-privacy-fallback"
              >
                click here to view it directly
              </a>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
