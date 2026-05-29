"use client";

import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function JoinThankYouClient() {
  return (
    <main>
      <Navbar variant="sticky" />
      <section className="py-8 md:py-16 lg:py-20 bg-white" data-testid="section-join-thank-you">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn className="mb-8">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c5d520]/15 flex items-center justify-center mx-auto"
                data-testid="icon-join-thank-you-check"
              >
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#c5d520]" aria-hidden="true" />
              </div>
            </FadeIn>

            <FadeIn>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6"
                data-testid="text-join-thank-you-heading"
              >
                Thank You
              </h1>
              <p
                className="text-lg sm:text-xl text-[#042940]/90 leading-relaxed"
                data-testid="text-join-thank-you-subtitle"
              >
                Check your inbox to start your onboarding process.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
