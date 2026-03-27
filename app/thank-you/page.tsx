"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ThankYouPage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <ThankYouSection />
      <Footer />
    </main>
  );
}

const nextSteps = [
  "A team member will review your request and reach out within 1 business day.",
  "We'll schedule a brief discovery call to understand your needs in detail.",
  "You'll receive a customized waste management proposal with transparent pricing.",
];

function ThankYouSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white" data-testid="section-thank-you">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn className="mb-8"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c5d520]/15 flex items-center justify-center mx-auto"
              data-testid="icon-thank-you-check"
            >
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#c5d520]" aria-hidden="true" />
            </div>
          </FadeIn>

          <FadeIn>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6"
              data-testid="text-thank-you-heading"
            >
              Thank You
            </h1>
            <p
              className="text-lg sm:text-xl text-[#042940]/90 leading-relaxed mb-12"
              data-testid="text-thank-you-subtitle"
            >
              Your request has been received. We're excited to help streamline your waste management.
            </p>
          </FadeIn>

          <FadeIn className="text-left mb-12"
          >
            <h2
              className="text-xl sm:text-2xl font-bold text-[#042940] mb-6 text-center"
              data-testid="text-next-steps-heading"
            >
              What Happens Next
            </h2>
            <ul className="space-y-4 max-w-lg mx-auto" aria-label="Next steps">
              {nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3" data-testid={`list-item-next-step-${i}`}>
                  <span
                    className="w-7 h-7 rounded-full bg-[#042940] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base text-[#042940] leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)]"
              data-testid="button-thank-you-home"
            >
              <Link href="/">
                Back to Home
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-[#042940]/20 text-[#042940] font-bold min-h-[52px] rounded-full px-10"
              data-testid="button-thank-you-services"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
