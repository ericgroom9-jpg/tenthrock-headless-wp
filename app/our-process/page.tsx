"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProcessSection from "@/components/shared/ProcessSection";
import CommercialWasteServices from "@/components/shared/CommercialWasteServices";
import StatsSection from "@/components/shared/StatsSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import CtaBannerSection from "@/components/shared/CtaBannerSection";

const heroImage = "/images/stock/hero-skyscrapers.jpg";

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-start overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/90 to-[#042940]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042940]/80 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 
              id="hero-heading" 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6"
            >
              Our Process
            </h1>
            <p className="text-base text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              A transparent, efficient approach to waste management. From first contact to final cleanup, we handle everything with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                data-testid="button-hero-primary"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white/50 text-white backdrop-blur-md bg-white/10 rounded-full font-bold"
                data-testid="button-hero-secondary"
              >
                <Phone className="w-5 h-5 mr-2" />
                (888) 555-0123
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works / Process Section (same as homepage) */}
      <ProcessSection />

      {/* Zipcode Checker CTA Section (same as homepage) */}
      <CtaBannerSection />

      {/* Commercial Waste Services Section (same as homepage) */}
      <CommercialWasteServices />

      {/* Stats/Credibility Section (same as homepage) */}
      <StatsSection />

      {/* Case Study Section (same as homepage) */}
      <CaseStudySection />

      {/* FAQ Section (same as homepage) */}
      <FaqSection />

      {/* Location Section (same as homepage) */}
      <LocationSection />

      {/* Final CTA Section (same as homepage) */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
