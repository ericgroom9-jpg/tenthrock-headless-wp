"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import { Phone } from "lucide-react";
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

interface ParagraphSection {
  badge: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  bulletPoints?: string[];
}

interface IndustryTemplateProps {
  industryName: string;
  heroImage: string;
  heroDescription: string;
  aboutTitle: string;
  aboutImage: string;
  bulletPoints: BulletPoint[];
  faqs?: FaqItem[];
  paragraphSection1?: ParagraphSection;
  paragraphSection2?: ParagraphSection;
  paragraphSection3?: ParagraphSection;
}

const defaultParagraphSection1: ParagraphSection = {
  badge: "Industry Expertise",
  heading: "Programs Built Around How You Operate",
  body: "Every industry has unique waste challenges. From volume fluctuations to tight timelines, our team understands the nuances that generic providers miss. We design custom waste programs that align with your operational rhythm, reduce costs, and keep your facilities clean without disrupting the work that matters most.",
  image: "/images/stock/service-dumpster-rental.jpg",
  imageAlt: "Tenth Rock crew managing waste at a commercial facility",
  bulletPoints: [
    "Custom programs designed around your operational schedule",
    "Industry-specific service programs",
    "Dedicated account manager with sector expertise",
    "Flexible service scaling for seasonal demands",
  ],
};

const defaultParagraphSection2: ParagraphSection = {
  badge: "Operational Excellence",
  heading: "One Partner, Complete Coverage",
  body: "Managing waste across multiple locations shouldn't mean managing multiple vendors. Tenth Rock consolidates your waste operations under a single point of contact, giving you consistent service standards and predictable costs. Our national network of vetted local vendors means you get the responsiveness of a local provider with the accountability of an enterprise partner.",
  image: "/images/stock/service-emergency-overflow.jpg",
  imageAlt: "Tenth Rock coordinating multi-location waste services",
  bulletPoints: [
    "Single point of contact for all locations",
    "Unified billing and centralized coordination",
    "Vetted local vendors across 48 states",
    "Consistent service standards at every site",
  ],
};

const defaultParagraphSection3: ParagraphSection = {
  badge: "Sustainability Focus",
  heading: "Environmental Responsibility Built In",
  body: "Responsibility is the baseline for every project we manage. By utilizing local recovery and processing facilities across the country, we move waste more effectively to keep your sites clear and materials out of landfills. We provide the visibility you need to understand your property's waste flow without adding a single step to your daily operations.",
  image: "/images/stock/floor-park.jpg",
  imageAlt: "Recycling and waste diversion at a Tenth Rock partner facility",
  bulletPoints: [
    "Waste diversion and recycling solutions",
    "Direct access to local processing facilities",
    "Logistics tailored to reduce landfill use",
    "Straightforward insights into your waste stream",
  ],
};

export default function IndustryTemplate({
  industryName,
  heroImage,
  heroDescription,
  aboutTitle,
  aboutImage,
  bulletPoints,
  faqs,
  paragraphSection1 = defaultParagraphSection1,
  paragraphSection2 = defaultParagraphSection2,
  paragraphSection3 = defaultParagraphSection3,
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
            <FadeIn
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
                  asChild
                >
                  <Link href="/request-a-service">Request a Quote</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap gap-2"
                  data-testid="button-hero-phone"
                  asChild
                >
                  <a href="tel:+17275105454">
                    <Phone className="w-5 h-5" />
                    727.510.5454
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Industry Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <FadeIn
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
                          <FadeIn
                            id={`bullet-panel-${i}`}
                            role="region"
                            aria-labelledby={`bullet-button-${i}`}
                            className="overflow-hidden"
                          >
                            <p className="text-[#042940]/80 leading-relaxed text-sm sm:text-base">
                              {point.description}
                            </p>
                          </FadeIn>
                        </div>
                      </button>
                      {/* Progress bar */}
                      <div className="h-0.5 bg-gray-200 ml-10 sm:ml-12 md:ml-14" aria-hidden="true">
                        <div className="h-full bg-[#042940]" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] rounded-full min-h-[52px] w-full sm:w-auto whitespace-nowrap"
                    data-testid="button-about-cta"
                  >
                    <Link href="/request-a-service">Request A Service</Link>
                  </Button>
                </div>
              </FadeIn>

              {/* Right Image */}
              <FadeIn
                className="relative order-first md:order-last"
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-[4/5] rounded-[5px] overflow-hidden shadow-2xl relative">
                  <Image 
                    src={aboutImage} 
                    alt={`${industryName} services`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Paragraph Section 1 - Text Left, Image Right */}
        <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="industry-paragraph-1-heading" data-testid="section-industry-paragraph-1">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-industry-paragraph-1">
                  <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                  {paragraphSection1.badge}
                </div>
                <h2 id="industry-paragraph-1-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter" data-testid="heading-industry-paragraph-1">
                  {paragraphSection1.heading}
                </h2>
                <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-8" data-testid="text-industry-paragraph-1-body">
                  {paragraphSection1.body}
                </p>
                {paragraphSection1.bulletPoints && paragraphSection1.bulletPoints.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {paragraphSection1.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#042940]">
                        <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#042940]/80" data-testid={`text-industry-p1-bullet-${i}`}>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button 
                  asChild
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
                  data-testid="button-industry-paragraph-1-cta"
                >
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
              </FadeIn>
              {paragraphSection1.image && (
                <FadeIn
                  className="order-1 lg:order-2 relative rounded-[5px] overflow-hidden aspect-[4/3]"
                >
                  <Image 
                    src={paragraphSection1.image} 
                    alt={paragraphSection1.imageAlt || ""} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover" 
                    loading="lazy" 
                  />
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* How It Works Section - Uses shared ProcessSection */}
        <ProcessSection />

        {/* Paragraph Section 2 - Image Left, Text Right */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="industry-paragraph-2-heading" data-testid="section-industry-paragraph-2">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {paragraphSection2.image && (
                <FadeIn
                  className="relative rounded-[5px] overflow-hidden aspect-[4/3]"
                >
                  <Image 
                    src={paragraphSection2.image} 
                    alt={paragraphSection2.imageAlt || ""} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover" 
                    loading="lazy" 
                  />
                </FadeIn>
              )}
              <FadeIn
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-industry-paragraph-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                  {paragraphSection2.badge}
                </div>
                <h2 id="industry-paragraph-2-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter" data-testid="heading-industry-paragraph-2">
                  {paragraphSection2.heading}
                </h2>
                <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-8" data-testid="text-industry-paragraph-2-body">
                  {paragraphSection2.body}
                </p>
                {paragraphSection2.bulletPoints && paragraphSection2.bulletPoints.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {paragraphSection2.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#042940]">
                        <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#042940]/80" data-testid={`text-industry-p2-bullet-${i}`}>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
                  data-testid="button-industry-paragraph-2-cta"
                  asChild
                >
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && <FaqSection faqs={faqs} />}

        {/* Paragraph Section 3 - Text Left, Image Right (alternating) */}
        <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="industry-paragraph-3-heading" data-testid="section-industry-paragraph-3">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-industry-paragraph-3">
                  <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                  {paragraphSection3.badge}
                </div>
                <h2 id="industry-paragraph-3-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter" data-testid="heading-industry-paragraph-3">
                  {paragraphSection3.heading}
                </h2>
                <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-8" data-testid="text-industry-paragraph-3-body">
                  {paragraphSection3.body}
                </p>
                {paragraphSection3.bulletPoints && paragraphSection3.bulletPoints.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {paragraphSection3.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#042940]">
                        <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#042940]/80" data-testid={`text-industry-p3-bullet-${i}`}>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button 
                  asChild
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
                  data-testid="button-industry-paragraph-3-cta"
                >
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
              </FadeIn>
              {paragraphSection3.image && (
                <FadeIn
                  className="order-1 lg:order-2 relative rounded-[5px] overflow-hidden aspect-[4/3]"
                >
                  <Image 
                    src={paragraphSection3.image} 
                    alt={paragraphSection3.imageAlt || ""} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover" 
                    loading="lazy" 
                  />
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <LocationSection />

        {/* Final CTA Banner - Uses shared FinalCtaSection */}
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
