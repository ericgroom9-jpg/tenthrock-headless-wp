"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function BookACallPage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <BookACallSection />
      <Footer />
    </main>
  );
}

const expectations = [
  "Personalized waste strategy review for your business",
  "Transparent pricing with no hidden fees",
  "A dedicated account manager assigned to your project",
];

function BookACallSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" data-testid="section-book-a-call">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-8"
              data-testid="text-book-call-heading"
            >
              Book A Call
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
              Schedule a quick call with one of our waste management consultants. We'll learn about your
              specific needs and put together a customized plan that saves you time and money, with no
              obligation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            data-testid="calendar-embed-container"
          >
            <div className="bg-[#f5f5f5] rounded-[5px] w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#042940]/70 text-center px-6">
                Calendar Embed
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#042940]/70" data-testid="text-book-call-skip-note">
                Already booked or prefer to skip?
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)]"
                data-testid="button-book-call-continue"
              >
                <Link href="/thank-you">
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
