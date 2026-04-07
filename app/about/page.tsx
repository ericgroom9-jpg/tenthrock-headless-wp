"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const StatsSection = dynamic(() => import("@/components/shared/StatsSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));

const imgOurStory = "/images/stock/clean-city-hero.jpg";
const imgAtOurCore = "/images/stock/city-nature.jpg";
const imgCommunity = "/images/stock/cyclist.jpg";

const coreValues = [
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Our Story Hero Section */}
      <section 
        className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-12 md:mb-16">
            {/* Left Column - Title */}
            <FadeIn
            >
              <span className="inline-block text-sm font-bold text-[#c5d520] uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 
                id="our-story-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary leading-[1.05] tracking-tighter"
              >
                Built From the Ground Up to Fix a Broken Industry
              </h1>
            </FadeIn>
            
            {/* Right Column - Description */}
            <FadeIn
              className="lg:pt-8"
            >
              <div className="text-base text-primary/70 leading-relaxed space-y-6">
                <p>
                  Tenth Rock is a nationwide commercial waste logistics and advisory company built specifically for the complexity of multi-location operations.
                </p>
                <p>
                  Founded by operators who have seen firsthand where waste coordination breaks down, we were built to solve the inefficiencies that occur when too many moving pieces go unmanaged. That boots-on-the-ground experience positions us as both an execution partner and a trusted advisor for organizations that need a team that has experienced these breakdowns from the inside.
                </p>
                <p>
                  We work through a vetted network of certified service partners across 48 states, delivering consistent execution and single-point accountability across every location, scope, and timeline. Emergency waste removal, specialized project logistics, container management, and waste operations advisory, all handled with the precision that enterprise teams depend on to maintain operational continuity.
                </p>
                <p>
                  Our network provides the infrastructure, and the expertise behind it drives the outcome. We are built to respond when urgency demands it and plan ahead when the opportunity exists, giving clients a partner capable of both. This range enables organizations to move beyond reactive waste management and into a more strategic posture, identifying inefficiencies, increasing cost visibility, and building waste operations that scale with their business.
                </p>
              </div>
            </FadeIn>
          </div>
          
          {/* Full Width Image */}
          <FadeIn
            className="relative rounded-[5px] overflow-hidden aspect-[16/9] md:aspect-[21/9]"
          >
            <Image 
              src={imgOurStory} 
              alt="Tenth Rock company story" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* At Our Core Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="core-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <FadeIn
            >
              <h2 
                id="core-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-10 leading-tight"
              >
                AT OUR CORE
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
                      className="text-xl md:text-2xl font-semibold text-primary py-4 px-6 rounded-[5px] hover:no-underline data-[state=open]:bg-[#c5d520]/10 transition-colors"
                      data-testid={`accordion-trigger-${index}`}
                    >
                      {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-base text-primary/70 leading-relaxed">
                        {value.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                  data-testid="button-schedule-demo"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold"
                  data-testid="button-more-solutions"
                >
                  View Our Services
                </Button>
              </div>
            </FadeIn>
            
            {/* Right Column - Image */}
            <FadeIn
              className="relative rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square"
            >
              <Image 
                src={imgAtOurCore} 
                alt="Tenth Rock team members collaborating on waste management solutions" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-16 md:py-20 bg-[#F9F9F6]" aria-labelledby="associations-heading">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn
            className="text-left sm:text-center mb-10 md:mb-14"
          >
            <h2 id="associations-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight">
              Associations
            </h2>
          </FadeIn>
          <FadeIn
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20"
          >
            {[
              { src: "/images/associations/swana.png", alt: "SWANA - Solid Waste Association of North America" },
              { src: "/images/associations/nawbo.png", alt: "NAWBO - National Association of Women Business Owners" },
              { src: "/images/associations/ifma.png", alt: "IFMA - International Facility Management Association" },
              { src: "/images/associations/icsc.png", alt: "ICSC" },
            ].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
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

      {/* In The Community Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="community-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image (order-2 on mobile, order-1 on lg) */}
            <FadeIn
              className="relative rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square order-2 lg:order-1"
            >
              <Image 
                src={imgCommunity} 
                alt="Tenth Rock team participating in a local community cleanup event" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>
            
            {/* Right Column - Content (order-1 on mobile, order-2 on lg) */}
            <FadeIn
              className="order-1 lg:order-2"
            >
              <h2 
                id="community-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
              >
                IN THE COMMUNITY
              </h2>
              <p className="text-base text-primary/70 leading-relaxed mb-8">
                Real change begins at the local level. As a nationwide company, Tenth Rock is committed to sustainability and protecting the natural resources of the communities where we live and work. We believe our responsibility extends beyond the job site to include the health and longevity of the neighborhoods we serve.
              </p>
              <p className="text-base text-primary/70 leading-relaxed mb-8">
                We are proud to support organizations that drive meaningful impact and foster environmental awareness. By providing waste management expertise and logistical resources for local initiatives, we help reduce litter, restore natural habitats, and educate the community on sustainable practices. Tenth Rock provides more than just waste solutions; we provide the support and visibility needed to build more inclusive and supportive communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                  data-testid="button-community-cta"
                >
                  Learn More
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold"
                  data-testid="button-community-phone"
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
        </div>
      </section>

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
