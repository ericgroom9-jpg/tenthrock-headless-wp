"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const POLICY_KEY = "TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09";

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
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://embed.termageddon.com/api/render/${POLICY_KEY}?origin=${encodeURIComponent(window.location.href)}`
    )
      .then((res) => res.text())
      .then((html) => setContent(html))
      .catch(() => setError(true));
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

          <div className="w-full" data-testid="content-privacy-policy">
            {content ? (
              <div
                className="prose prose-lg max-w-none text-[#042940] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#042940]/90 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-[#042940] [&_a]:underline [&_a]:font-medium hover:[&_a]:text-[#c5d520] [&_table]:w-full [&_td]:p-2 [&_td]:border [&_td]:border-gray-200 [&_th]:p-2 [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-50 [&_th]:font-semibold"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : error ? (
              <p className="text-base text-[#042940]/80">
                The policy could not be loaded.{" "}
                <a
                  rel="nofollow"
                  href={`https://policies.termageddon.com/api/policy/${POLICY_KEY}`}
                  target="_blank"
                  className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors"
                  data-testid="link-privacy-fallback"
                >
                  Click here to view it directly
                </a>
                .
              </p>
            ) : (
              <div className="flex items-center gap-3 text-[#042940]/60">
                <div className="w-5 h-5 border-2 border-[#042940]/30 border-t-[#042940] rounded-full animate-spin" />
                Loading policy...
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
