"use client";

import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { LegalPageTemplateData } from "@/lib/wordpress";

interface Props {
  data: LegalPageTemplateData | null;
  content: string;
}

export default function TermsOfServiceClient({ data, content }: Props) {
  const heading = data?.heading || "Terms of Service";

  return (
    <main>
      <Navbar variant="sticky" />
      <section
        className="py-8 md:py-16 lg:py-20 bg-white"
        data-testid="section-terms-of-service"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-12"
              data-testid="text-terms-heading"
            >
              {heading}
            </h1>

            <div
              className="prose prose-lg max-w-none text-[#042940] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#042940]/90 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_a]:text-[#042940] [&_a]:underline [&_a]:font-medium hover:[&_a]:text-[#c5d520]"
              data-testid="content-terms-of-service"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
