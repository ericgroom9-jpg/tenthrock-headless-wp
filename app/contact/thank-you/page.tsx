"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ContactThankYouPage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <ThankYouSection />
      <Footer />
    </main>
  );
}

function ThankYouSection() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 lg:py-48 bg-white"
      data-testid="section-thank-you"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#042940] leading-[1.1] mb-6"
            data-testid="text-thank-you-heading"
          >
            Thank You.
          </h1>

          <p
            className="text-base sm:text-lg text-[#042940]/70 leading-relaxed max-w-md mb-10"
            data-testid="text-thank-you-subtitle"
          >
            We've received your submission and will be in touch with you shortly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold"
              data-testid="button-back-to-home"
            >
              <Link href="/">Back To Home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#042940] text-[#042940] font-bold"
              data-testid="button-thank-you-phone"
            >
              <a href="tel:1234567890">
                <Phone className="w-4 h-4 mr-2" />
                (123) 456 - 7890
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
