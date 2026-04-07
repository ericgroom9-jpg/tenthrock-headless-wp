"use client";

import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, CheckSquare } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CtaBannerSection from "@/components/shared/CtaBannerSection";
import CommercialWasteServices from "@/components/shared/CommercialWasteServices";
import StatsSection from "@/components/shared/StatsSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";


const states = [
  "Alabama", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const columnCount = 4;
const perColumn = Math.ceil(states.length / columnCount);
const stateColumns = Array.from({ length: columnCount }, (_, i) =>
  states.slice(i * perColumn, (i + 1) * perColumn)
);

export default function LocationsPage() {

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Interior Hero Section */}
      <section 
        className="relative pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-[#042940] overflow-hidden"
        aria-labelledby="locations-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940]/90 to-[#042940]/70" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn
            className="max-w-2xl"
          >
            <h1 
              id="locations-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-5 drop-shadow-lg whitespace-nowrap"
            >
              Whenever You Need Us
            </h1>
            <p className="text-base text-white/90 mb-8 max-w-xl leading-relaxed font-normal tracking-tight drop-shadow-md">
              Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full"
                data-testid="button-locations-cta"
              >
                Request A Service
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-locations-phone"
                asChild
              >
                <a href="tel:+17275105454">
                  <Phone className="w-5 h-5 mr-2" />
                  727.510.5454
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-[#F9F9F6]"
        aria-labelledby="areas-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn
            className="text-left sm:text-center mb-12 md:mb-16"
          >
            <h2 
              id="areas-heading"
              className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
            >
              Nationwide Coverage. Local Support.
            </h2>
            <p className="text-base md:text-lg text-primary/70 max-w-lg sm:mx-auto">
              Select a state to see available services and local coverage in your area.
            </p>
          </FadeIn>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 max-w-4xl mx-auto">
            {stateColumns.map((column, columnIndex) => (
              <FadeIn
                key={columnIndex}
                className={`space-y-3 sm:space-y-4 lg:px-6 ${columnIndex < stateColumns.length - 1 ? 'lg:border-r lg:border-primary/10' : ''}`}
              >
                {column.map((state, stateIndex) => (
                  <a 
                    key={stateIndex}
                    href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 sm:gap-3 py-1 rounded-md hover:text-[#c5d520] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2"
                    data-testid={`state-${columnIndex}-${stateIndex}`}
                  >
                    <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5d520] flex-shrink-0" />
                    <span className="font-bold text-primary text-sm sm:text-base group-hover:text-[#c5d520] hover:text-[#c5d520] transition-colors">{state}</span>
                  </a>
                ))}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section (same as homepage) */}
      <CtaBannerSection />

      {/* Commercial Waste Services (same as homepage) */}
      <CommercialWasteServices />

      {/* Stats Section (same as homepage) */}
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
