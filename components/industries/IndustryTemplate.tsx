"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import ProcessSection from "@/components/shared/ProcessSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";

interface BulletPoint {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface IndustryTemplateProps {
  industryName: string;
  heroImage: string;
  heroDescription: string;
  aboutTitle: string;
  aboutImage: string;
  bulletPoints: BulletPoint[];
  faqs?: FaqItem[];
}

export default function IndustryTemplate({
  industryName,
  heroImage,
  heroDescription,
  aboutTitle,
  aboutImage,
  bulletPoints,
  faqs,
}: IndustryTemplateProps) {
  const [activeBullet, setActiveBullet] = useState(0);

  return (
    <div className="min-h-screen bg-[#F9F9F6] font-sans text-primary selection:bg-secondary selection:text-primary">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(4, 41, 64, 0.9), rgba(4, 41, 64, 0.7)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 sm:mb-6 tracking-tighter leading-[1.05]">
                {industryName}
              </h1>
              <p className="text-base text-white mb-6 sm:mb-8 max-w-xl leading-relaxed">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] active:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap"
                  data-testid="button-hero-cta"
                >
                  Request a Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap gap-2"
                  data-testid="button-hero-phone"
                >
                  <Phone className="w-5 h-5" />
                  (888) 555-0123
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Industry Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-8 md:mb-12 tracking-tighter leading-tight">
                  {aboutTitle}
                </h2>

                <div className="space-y-0" role="region" aria-label="About services accordion">
                  {bulletPoints.map((point, i) => (
                    <div key={i}>
                      <button
                        onClick={() => setActiveBullet(activeBullet === i ? -1 : i)}
                        className="w-full text-left py-4 sm:py-5 md:py-6 flex items-start gap-4 sm:gap-5 md:gap-6 group"
                        data-testid={`bullet-${i}`}
                        aria-expanded={activeBullet === i}
                        aria-controls={`bullet-panel-${i}`}
                        id={`bullet-button-${i}`}
                      >
                        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#042940] shrink-0 w-6 sm:w-8" aria-hidden="true">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                            activeBullet === i ? "text-[#042940]" : "text-[#042940]"
                          }`}>
                            {point.title}
                          </h3>
                          <motion.div
                            id={`bullet-panel-${i}`}
                            role="region"
                            aria-labelledby={`bullet-button-${i}`}
                            initial={false}
                            animate={{ 
                              height: activeBullet === i ? "auto" : 0,
                              opacity: activeBullet === i ? 1 : 0,
                              marginTop: activeBullet === i ? 12 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#042940]/80 leading-relaxed text-sm sm:text-base">
                              {point.description}
                            </p>
                          </motion.div>
                        </div>
                      </button>
                      {/* Progress bar */}
                      <div className="h-0.5 bg-gray-200 ml-10 sm:ml-12 md:ml-14" aria-hidden="true">
                        <motion.div
                          className="h-full bg-[#042940]"
                          initial={{ width: "0%" }}
                          animate={{ width: activeBullet === i ? "60%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10">
                  <Button 
                    size="lg" 
                    className="bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] font-bold rounded-full min-h-[52px] w-full sm:w-auto"
                    data-testid="button-about-cta"
                  >
                    Get Started
                  </Button>
                  <button className="flex items-center justify-center sm:justify-start gap-2 text-[#042940] font-semibold hover:text-[#c5d520] transition-colors group w-full sm:w-auto py-3 sm:py-0">
                    Learn More
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-first md:order-last"
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-[4/5] rounded-[5px] overflow-hidden shadow-2xl">
                  <img 
                    src={aboutImage} 
                    alt={`${industryName} services`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Uses shared ProcessSection */}
        <ProcessSection />

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && <FaqSection faqs={faqs} />}

        {/* Location Section */}
        <LocationSection />

        {/* Final CTA Banner - Uses shared FinalCtaSection */}
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
