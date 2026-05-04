"use client";

import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
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
import type { HeroPageTemplateData, GlobalSectionsData } from "@/lib/wordpress";
import { resolveReasonIcon } from "@/components/shared/ReasonsSection";

const imgHero = "/images/stock/hero-skyscrapers.jpg";

interface Props {
  acf: HeroPageTemplateData | null;
  globalSections: GlobalSectionsData | null;
}

export default function WhoWeServeClient({ acf, globalSections }: Props) {
  const gs = globalSections;
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-[#042940] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${acf?.heroImage || imgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />

        <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-28 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
              {acf?.heroHeading || "Who We Serve"}
            </h1>
            <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md">
              {acf?.heroSubheading || "From retail chains to stadiums, we partner with businesses that need reliable, scalable waste solutions across multiple locations."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] active:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap"
                data-testid="button-hero-cta"
                asChild
              >
                <Link href={acf?.heroCtaLink || "/request-a-service"}>
                  {acf?.heroCtaLabel || "Request A Service"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap gap-2"
                data-testid="button-hero-phone"
                asChild
              >
                <a href={acf?.heroPhoneLink || "tel:+17275105454"}>
                  <Phone className="w-4 h-4" />
                  {acf?.heroPhoneLabel || "727.510.5454"}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <WhoWeHelpSection
        tagline={gs?.whoHelp?.tagline}
        heading={gs?.whoHelp?.heading}
        subtitle={gs?.whoHelp?.subtitle}
      />
      <ReasonsSection
        tagline={gs?.reasons?.tagline}
        heading={gs?.reasons?.heading}
        subtitle={gs?.reasons?.subtitle}
        buttonText={gs?.reasons?.ctaLabel}
        buttonLink={gs?.reasons?.ctaLink}
        features={gs?.reasons?.features?.map(f => ({
          title: f.title,
          icon: resolveReasonIcon(f.iconName),
          desc: f.description,
        }))}
      />
      <ProcessSection
        tagline={gs?.process?.tagline}
        heading={gs?.process?.heading}
        subtitle={gs?.process?.subtitle}
        steps={gs?.process?.steps?.map(s => ({ num: s.number, title: s.title, desc: s.description }))}
      />
      <CtaBannerSection
        tagline={gs?.ctaBanner?.tagline}
        heading={gs?.ctaBanner?.heading}
        subtitle={gs?.ctaBanner?.subtitle}
        placeholder={gs?.ctaBanner?.placeholder}
        buttonLabel={gs?.ctaBanner?.button}
      />
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
        hqImage={gs?.location?.hqImage}
        hqImageAlt={gs?.location?.hqImageAlt}
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
