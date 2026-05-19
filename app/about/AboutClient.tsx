"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { AboutTemplateData, GlobalSectionsData } from "@/lib/wordpress";

const StatsSection = dynamic(() => import("@/components/shared/StatsSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));

const defaultCoreValues = [
  {
    title: "Innovative Problem Solving",
    description: "We move beyond one-size-fits-all mentalities. Creative problem solving is in our DNA, allowing us to tackle the complex challenges other providers avoid. If a traditional path to resolution does not exist, we develop one."
  },
  {
    title: "Partnership and Transparent Communication",
    description: "Built on professional respect and family values, we treat your operations as our own. We eliminate friction with a single point of contact and real-time updates to ensure every stakeholder thrives through total accountability."
  },
  {
    title: "Operational Leadership and Responsibility",
    description: "Leading is about getting the job done. Our team approaches every challenge with a front-row mentality, mobilizing rapidly to maintain your facility's uptime. Responsibility is our baseline, utilizing streamlined logistics to support a circular economy."
  }
];

const defaultAssociationLogos = [
  { logo: "/images/associations/swana.png", altText: "SWANA - Solid Waste Association of North America" },
  { logo: "/images/associations/nawbo.png", altText: "NAWBO - National Association of Women Business Owners" },
  { logo: "/images/associations/ifma.png", altText: "IFMA - International Facility Management Association" },
  { logo: "/images/associations/icsc.png", altText: "ICSC" },
];

const defaultStoryBody = `Tenth Rock is a nationwide commercial waste logistics and advisory company built specifically for the complexity of multi-location operations.

Founded by operators who have seen firsthand where waste coordination breaks down, we were built to solve the inefficiencies that occur when too many moving pieces go unmanaged. That boots-on-the-ground experience positions us as both an execution partner and a trusted advisor for organizations that need a team that has experienced these breakdowns from the inside.

We work through a vetted network of certified service partners across 48 states, delivering consistent execution and single-point accountability across every location, scope, and timeline. Emergency waste removal, specialized project logistics, container management, and waste operations advisory, all handled with the precision that enterprise teams depend on to maintain operational continuity.

Our network provides the infrastructure, and the expertise behind it drives the outcome. We are built to respond when urgency demands it and plan ahead when the opportunity exists, giving clients a partner capable of both. This range enables organizations to move beyond reactive waste management and into a more strategic posture, identifying inefficiencies, increasing cost visibility, and building waste operations that scale with their business.`;

const defaultCommunityBody = `Real change begins at the local level. As a nationwide company, Tenth Rock is committed to sustainability and protecting the natural resources of the communities where we live and work. We believe our responsibility extends beyond the job site to include the health and longevity of the neighborhoods we serve.

We are proud to support organizations that drive meaningful impact and foster environmental awareness. By providing waste management expertise and logistical resources for local initiatives, we help reduce litter, restore natural habitats, and educate the community on sustainable practices. Tenth Rock provides more than just waste solutions; we provide the support and visibility needed to build more inclusive and supportive communities.`;

interface Props {
  acf: AboutTemplateData | null;
  globalSections: GlobalSectionsData | null;
}

export default function AboutClient({ acf, globalSections }: Props) {
  const gs = globalSections;

  const storyTagline = acf?.storyTagline || "Our Story";
  const storyHeading = acf?.storyHeading || "Built From the Ground Up to Fix a Broken Industry";
  const storyBody = acf?.storyBody || defaultStoryBody;
  const storyImage = acf?.storyImage || "/images/stock/about-our-story-clearwater-beach.jpg";
  const storyImageAlt = acf?.storyImageAlt || "Aerial view of Clearwater Beach with white sand, turquoise water, hotels, and marina, near Tenth Rock headquarters";
  const coreHeading = acf?.coreHeading || "At Our Core";
  const coreValues = acf?.coreValues || defaultCoreValues;
  const coreImage = acf?.coreImage || "/images/stock/about-tampa-skyline.jpg";
  const coreImageAlt = acf?.coreImageAlt || "Downtown Tampa, Florida skyline along the waterway near Tenth Rock headquarters";
  const coreCtaLabel = acf?.coreCtaLabel || "Book a Call";
  const coreCtaLink = acf?.coreCtaLink || "/book-a-call";
  const coreSecondaryLabel = acf?.coreSecondaryLabel || "View Our Services";
  const coreSecondaryLink = acf?.coreSecondaryLink || "/commercial-waste";
  const associationsHeading = acf?.associationsHeading || "Associations";
  const associationsLogos = acf?.associationsLogos || defaultAssociationLogos;
  const communityHeading = acf?.communityHeading || "In The Community";
  const communityBody = acf?.communityBody || defaultCommunityBody;
  const communityImage = acf?.communityImage || "/images/stock/community-park-sunset.jpg";
  const communityImageAlt = acf?.communityImageAlt || "Families enjoying a sunny afternoon at a community park";
  const communityCtaLabel = acf?.communityCtaLabel || "Learn More";
  const communityCtaLink = acf?.communityCtaLink || "/contact";
  const communitySecondaryLabel = acf?.communitySecondaryLabel || "727.510.5454";
  const communitySecondaryLink = acf?.communitySecondaryLink || "tel:+17275105454";

  const storyHasHtml = /<\/?[a-z][\s\S]*?>/i.test(storyBody);
  const storyParagraphs = storyHasHtml ? [] : storyBody.split("\n").filter(p => p.trim());

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section 
        className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-12 md:mb-16">
            <FadeIn>
              <span className="inline-block text-sm font-bold text-[#c5d520] uppercase tracking-wider mb-4">
                {storyTagline}
              </span>
              <h1 
                id="our-story-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary leading-[1.05] tracking-tighter"
              >
                {storyHeading}
              </h1>
            </FadeIn>
            
            <FadeIn className="lg:pt-8">
              {storyHasHtml ? (
                <div
                  className="text-base text-primary/70 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: storyBody }}
                />
              ) : (
                <div className="text-base text-primary/70 leading-relaxed space-y-6">
                  {storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}
            </FadeIn>
          </div>
          
          <FadeIn className="relative rounded-[5px] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src={storyImage} 
              alt={storyImageAlt} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="core-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <h2 
                id="core-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-10 leading-tight"
              >
                {coreHeading}
              </h2>
              
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {coreValues.map((value, index) => (
                  <AccordionItem 
                    key={value.title} 
                    value={`item-${index}`}
                    className="border-0"
                    data-testid={`accordion-item-${index}`}
                  >
                    <AccordionTrigger 
                      className="text-xl md:text-2xl font-semibold text-primary text-left py-4 px-0 sm:px-6 rounded-[5px] hover:no-underline data-[state=open]:bg-[#c5d520]/10 transition-colors"
                      data-testid={`accordion-trigger-${index}`}
                    >
                      {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 sm:px-6 pb-4 pt-0">
                      <p className="text-base text-primary/70 leading-relaxed">
                        {value.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold min-h-[52px] whitespace-nowrap"
                  data-testid="button-schedule-demo"
                  asChild
                >
                  <Link href={coreCtaLink}>
                    <Calendar className="w-5 h-5 mr-2" />
                    {coreCtaLabel}
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold min-h-[52px] whitespace-nowrap"
                  data-testid="button-more-solutions"
                  asChild
                >
                  <Link href={coreSecondaryLink}>{coreSecondaryLabel}</Link>
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn className="relative rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square">
              <Image 
                src={coreImage} 
                alt={coreImageAlt} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>

            <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-schedule-demo-mobile"
                asChild
              >
                <Link href={coreCtaLink}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {coreCtaLabel}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-more-solutions-mobile"
                asChild
              >
                <Link href={coreSecondaryLink}>{coreSecondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F9F6]" aria-labelledby="associations-heading">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-left sm:text-center mb-10 md:mb-14">
            <h2 id="associations-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight">
              {associationsHeading}
            </h2>
          </FadeIn>
          <FadeIn className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
            {associationsLogos.map((item, i) => (
              <Image
                key={i}
                src={item.logo}
                alt={item.altText}
                width={128}
                height={64}
                className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                data-testid={`img-association-logo-${i}`}
              />
            ))}
          </FadeIn>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="community-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="relative rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square order-2 lg:order-1">
              <Image 
                src={communityImage} 
                alt={communityImageAlt} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>
            
            <FadeIn className="order-1 lg:order-2">
              <h2 
                id="community-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
              >
                {communityHeading}
              </h2>
              {communityBody.split("\n").filter(p => p.trim()).map((p, i) => (
                <p key={i} className="text-base text-primary/70 leading-relaxed mb-8">
                  {p}
                </p>
              ))}
              
              <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold min-h-[52px] whitespace-nowrap"
                  data-testid="button-community-cta"
                  asChild
                >
                  <Link href={communityCtaLink}>{communityCtaLabel}</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold min-h-[52px] whitespace-nowrap"
                  data-testid="button-community-phone"
                  asChild
                >
                  <a href={communitySecondaryLink}>
                    <Phone className="w-5 h-5 mr-2" />
                    {communitySecondaryLabel}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-community-cta-mobile"
                asChild
              >
                <Link href={communityCtaLink}>{communityCtaLabel}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-community-phone-mobile"
                asChild
              >
                <a href={communitySecondaryLink}>
                  <Phone className="w-5 h-5 mr-2" />
                  {communitySecondaryLabel}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
