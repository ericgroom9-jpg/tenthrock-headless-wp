"use client";

import { useEffect, useRef } from "react";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <TermsOfServiceSection />
      <Footer />
    </main>
  );
}

function TermsOfServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = containerRef.current.querySelector("script");
    if (existing) return;

    const script = document.createElement("script");
    script.src =
      "https://policies.termageddon.com/api/embed/Wlc5NU4ySTVhMmRJVEcxcFUxRTlQUT09.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-white"
      data-testid="section-terms-of-service"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-12"
            data-testid="text-terms-heading"
          >
            Terms of Service
          </h1>

          <div ref={containerRef} className="w-full" data-testid="content-terms-of-service">
            <div
              id="Wlc5NU4ySTVhMmRJVEcxcFUxRTlQUT09"
              className="policy_embed_div"
              style={{ width: "100%", minHeight: "480px" }}
            >
              Please wait while the policy is loaded. If it does not load,
              please{" "}
              <a
                rel="nofollow"
                href="https://policies.termageddon.com/api/policy/Wlc5NU4ySTVhMmRJVEcxcFUxRTlQUT09"
                target="_blank"
                className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors"
                data-testid="link-terms-fallback"
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
