"use client";

import Image from "next/image";
import Link from "next/link";
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
import type { LocationsPageTemplateData, GlobalSectionsData } from "@/lib/wordpress";

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

interface Props {
  acf: LocationsPageTemplateData | null;
  globalSections: GlobalSectionsData | null;
}

export default function LocationsClient({ acf, globalSections }: Props) {
  const gs = globalSections;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section
        className="relative pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-[#042940] overflow-hidden"
        aria-labelledby="locations-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src={acf?.heroImage || "/images/stock/locations-hero-modern-city.webp"}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
            priority
          />
          <div className="absolute inset-0 bg-[#042940]/85 md:bg-transparent md:bg-gradient-to-r md:from-[#042940] md:via-[#042940]/80 md:via-60% md:to-[#042940]/15" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn className="max-w-2xl">
            <h1
              id="locations-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-5 drop-shadow-lg whitespace-nowrap"
            >
              {acf?.heroHeading || "Whenever You Need Us"}
            </h1>
            <p className="text-base text-white/90 mb-8 max-w-xl leading-relaxed font-normal tracking-tight drop-shadow-md">
              {acf?.heroSubheading || "Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full min-h-[52px] whitespace-nowrap"
                data-testid="button-locations-cta"
                asChild
              >
                <Link href={acf?.heroCtaLink || "/request-a-service"}>{acf?.heroCtaLabel || "Request A Service"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-locations-phone"
                asChild
              >
                <a href={acf?.heroPhoneLink || "tel:+17275105454"}>
                  <Phone className="w-5 h-5 mr-2" />
                  {acf?.heroPhoneLabel || "727.510.5454"}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className="py-8 md:py-16 lg:py-20 bg-[#F9F9F6]"
        aria-labelledby="areas-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-left sm:text-center mb-6 md:mb-16">
            <h2
              id="areas-heading"
              className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
            >
              {acf?.areasHeading || "Nationwide Coverage. Local Support."}
            </h2>
            <p className="text-base md:text-lg text-primary/70 max-w-lg sm:mx-auto">
              {acf?.areasSubtitle || "Select a state to see available services and local coverage in your area."}
            </p>
          </FadeIn>

          {/* Mobile/tablet: flat 2-column grid so every row has uniform spacing */}
          <FadeIn className="lg:hidden grid grid-cols-2 gap-x-4 gap-y-3 max-w-4xl mx-auto">
            {states.map((state, stateIndex) => (
              <a
                key={stateIndex}
                href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex items-center gap-2 sm:gap-3 py-1 rounded-md hover:text-[#c5d520] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2"
                data-testid={`state-mobile-${stateIndex}`}
              >
                <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5d520] flex-shrink-0" />
                <span className="font-bold text-primary text-sm sm:text-base group-hover:text-[#c5d520] group-hover:underline underline-offset-4 transition-colors">{state}</span>
              </a>
            ))}
          </FadeIn>

          {/* Desktop: 4 visually-separated columns */}
          <div className="hidden lg:grid grid-cols-4 max-w-4xl mx-auto">
            {stateColumns.map((column, columnIndex) => (
              <FadeIn
                key={columnIndex}
                className={`space-y-4 px-6 ${columnIndex < stateColumns.length - 1 ? 'border-r border-primary/10' : ''}`}
              >
                {column.map((state, stateIndex) => (
                  <a
                    key={stateIndex}
                    href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center gap-3 py-1 rounded-md hover:text-[#c5d520] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2"
                    data-testid={`state-${columnIndex}-${stateIndex}`}
                  >
                    <CheckSquare className="w-6 h-6 text-[#c5d520] flex-shrink-0" />
                    <span className="font-bold text-primary text-base group-hover:text-[#c5d520] group-hover:underline underline-offset-4 transition-colors">{state}</span>
                  </a>
                ))}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBannerSection
        tagline={gs?.ctaBanner?.tagline}
        heading={gs?.ctaBanner?.heading}
        subtitle={gs?.ctaBanner?.subtitle}
        placeholder={gs?.ctaBanner?.placeholder}
        buttonLabel={gs?.ctaBanner?.button}
      />
      <CommercialWasteServices />
      <StatsSection
        tagline={gs?.stats?.tagline}
        heading={gs?.stats?.heading}
        subtitle={gs?.stats?.subtitle}
        ctaLabel={gs?.stats?.ctaLabel}
        ctaLink={gs?.stats?.ctaLink}
        phoneLabel={gs?.stats?.phoneLabel}
        phoneLink={gs?.stats?.phoneLink}
        cards={gs?.stats?.cards}
      />
      <CaseStudySection />
      <FaqSection
        tagline={gs?.faq?.tagline}
        heading={gs?.faq?.heading}
        subtitle={gs?.faq?.subtitle}
        faqs={gs?.faq?.faqs}
        ctaText={gs?.faq?.ctaText}
        ctaLabel={gs?.faq?.ctaLabel}
        ctaLink={gs?.faq?.ctaLink}
      />
      <LocationSection
        heading={gs?.location?.heading}
        subtitle={gs?.location?.subtitle}
        address={gs?.location?.address}
        addressLink={gs?.location?.addressLink}
        phoneNote={gs?.location?.phoneNote}
        phone={gs?.location?.phone}
        phoneLink={gs?.location?.phoneLink}
        email={gs?.location?.email}
        emailLink={gs?.location?.emailLink}
      />
      <FinalCtaSection
        heading={gs?.finalCta?.heading}
        subtitle={gs?.finalCta?.subtitle}
        ctaLabel={gs?.finalCta?.label}
        ctaLink={gs?.finalCta?.link}
        image={gs?.finalCta?.image}
        imageAlt={gs?.finalCta?.imageAlt}
        phone={gs?.finalCta?.phone}
        phoneLink={gs?.finalCta?.phoneLink}
      />
      <Footer />
    </main>
  );
}
