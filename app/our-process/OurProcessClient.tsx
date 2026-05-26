"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { Phone } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProcessSection from "@/components/shared/ProcessSection";
import type { HeroPageTemplateData, GlobalSectionsData } from "@/lib/wordpress";

const CommercialWasteServices = dynamic(() => import("@/components/shared/CommercialWasteServices"));
const StatsSection = dynamic(() => import("@/components/shared/StatsSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));
const CtaBannerSection = dynamic(() => import("@/components/shared/CtaBannerSection"));

interface Props {
  acf: HeroPageTemplateData | null;
  globalSections: GlobalSectionsData | null;
}

export default function OurProcessClient({ acf, globalSections }: Props) {
  const gs = globalSections;
  const heroImage = acf?.heroImage || "/images/stock/hero-skyscrapers.jpg";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-start overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
            priority
          />
          <div className="absolute inset-0 bg-[#042940]/85 md:bg-transparent md:bg-gradient-to-r md:from-[#042940] md:via-[#042940]/80 md:via-60% md:to-[#042940]/15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042940]/40 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20">
          <FadeIn className="max-w-2xl">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6"
            >
              {acf?.heroHeading || "Our Process"}
            </h1>
            <p className="text-base text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              {acf?.heroSubheading || "Five steps from first call to job complete. No runarounds, no surprises. Here's exactly how every Tenth Rock project runs."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full min-h-[52px] whitespace-nowrap"
                data-testid="button-hero-primary"
                asChild
              >
                <Link href={acf?.heroCtaLink || "/request-a-service"}>{acf?.heroCtaLabel || "Request A Service"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/50 text-white backdrop-blur-md bg-white/10 rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-hero-secondary"
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
