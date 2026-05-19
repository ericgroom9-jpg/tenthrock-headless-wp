"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { BookCallTemplateData } from "@/lib/wordpress";

const CALENDLY_URL = "https://calendly.com/mandy-tenthrock/30min";

const defaultExpectations = [
  "Personalized waste strategy review for your business",
  "Transparent pricing with no hidden fees",
  "A dedicated account manager assigned to your project",
];

interface Props {
  data: BookCallTemplateData | null;
}

export default function BookACallClient({ data }: Props) {
  const heading = data?.heading || "Book A Call";
  const expectations = data?.expectations?.map(e => e.text) || defaultExpectations;
  const description = data?.description || "Schedule a quick call with one of our waste management consultants. We'll learn about your specific needs and put together a customized plan that saves you time and money, with no obligation.";
  const skipText = data?.skipText || "Already booked or prefer to skip?";
  const continueLabel = data?.continueLabel || "Continue";
  const continueLink = data?.continueLink || "/thank-you";

  return (
    <main>
      <Navbar variant="sticky" />
      <section className="py-16 sm:py-20 lg:py-28 bg-white" data-testid="section-book-a-call">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <FadeIn>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-8"
                data-testid="text-book-call-heading"
              >
                {heading}
              </h1>

              <ul className="space-y-4 mb-8" aria-label="What to expect">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`list-item-expectation-${i}`}>
                    <CheckCircle2 className="w-6 h-6 text-[#c5d520] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base text-[#042940] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base text-[#042940]/90 leading-relaxed max-w-lg" data-testid="text-book-call-description">
                {description}
              </p>
            </FadeIn>

            <FadeIn data-testid="calendar-embed-container">
              {data?.calendarEmbed ? (
                <div
                  className="w-full min-h-[480px]"
                  dangerouslySetInnerHTML={{ __html: data.calendarEmbed }}
                />
              ) : (
                <>
                  <div
                    className="calendly-inline-widget w-full"
                    data-url={CALENDLY_URL}
                    style={{ minWidth: 320, height: 1000 }}
                    data-testid="calendly-widget"
                  />
                  <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                  />
                </>
              )}

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#042940]/70" data-testid="text-book-call-skip-note">
                  {skipText}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] whitespace-nowrap"
                  data-testid="button-book-call-continue"
                >
                  <Link href={continueLink}>
                    {continueLabel}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
