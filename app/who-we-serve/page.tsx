"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReasonsSection from "@/components/shared/ReasonsSection";
import StatsSection from "@/components/shared/StatsSection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import CtaBannerSection from "@/components/shared/CtaBannerSection";
import ProcessSection from "@/components/shared/ProcessSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import WhoWeHelpSection from "@/components/shared/WhoWeHelpSection";

const imgHero = "/images/stock/hero-skyscrapers.jpg";

export default function WhoWeServePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="sticky" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-[#042940] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
        
        <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
              Who We Serve
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-md">
              From retail chains to stadiums, we partner with businesses that need reliable, scalable waste solutions across multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full shadow-[0_0_40px_rgba(197,213,32,0.3)] min-h-[52px]"
                data-testid="button-hero-cta"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-full min-h-[52px]"
                data-testid="button-hero-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help - Shared Component (same as homepage) */}
      <WhoWeHelpSection />

      {/* More Reasons You'll Love Us - Shared Component (same as homepage) */}
      <ReasonsSection />

      {/* How It Works - Shared Component (same as homepage) */}
      <ProcessSection />

      {/* CTA Banner - Shared Component (same as homepage) */}
      <CtaBannerSection />

      {/* Stats / Why Clients Call Us - Shared Component (same as homepage) */}
      <StatsSection />

      {/* Case Study Section - Shared Component (same as homepage) */}
      <CaseStudySection />

      {/* FAQ Section - Shared Component (same as homepage) */}
      <FaqSection />

      {/* Where to Find Us - Shared Component (same as homepage) */}
      <LocationSection />

      {/* Final CTA - Shared Component (same as homepage) */}
      <FinalCtaSection />

      <Footer />
    </main>
  );
}
