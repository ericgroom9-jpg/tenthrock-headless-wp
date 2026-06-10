"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
// NOTE: framer-motion intentionally NOT imported here. The Hero uses pure
// CSS animations (`hero-fade-up`, `hero-video-zoom`) and every motion-using
// section is dynamically imported below — keeping framer-motion out of this
// chunk shaves ~30KB off the initial homepage JS bundle.
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LogoReelSection from "@/components/shared/LogoReelSection";

const SectionSkeleton = () => (
 <div className="py-8 md:py-16 animate-pulse">
 <div className="container mx-auto px-4 md:px-8">
 <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
 <div className="h-4 bg-gray-100 rounded w-2/3 mb-8" />
 <div className="grid md:grid-cols-3 gap-6">
 {[1,2,3].map(i => <div key={i} className="h-48 bg-gray-100 rounded-[5px]" />)}
 </div>
 </div>
 </div>
);

const CommercialWasteServices = dynamic(() => import("@/components/shared/CommercialWasteServices"), { ssr: true, loading: () => <SectionSkeleton /> });
const ReasonsSection = dynamic(() => import("@/components/shared/ReasonsSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const StatsSection = dynamic(() => import("@/components/shared/StatsSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const CtaBannerSection = dynamic(() => import("@/components/shared/CtaBannerSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const ProcessSection = dynamic(() => import("@/components/shared/ProcessSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"), { ssr: true, loading: () => <SectionSkeleton /> });
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"), { ssr: true, loading: () => <SectionSkeleton /> });
const WhoWeHelpSection = dynamic(() => import("@/components/shared/WhoWeHelpSection"), { ssr: false, loading: () => <SectionSkeleton /> });
const TestimonialsSection = dynamic(() => import("@/components/shared/TestimonialsSection"), { ssr: true, loading: () => <SectionSkeleton /> });

// Assets - Main Logos
const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";

// Stock images for services
const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.webp";
const imgServiceEventStadium = "/images/stock/service-event-stadium.webp";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.webp";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";

// Stock images for industries
const imgIndustryEducational = "/images/stock/university.webp";
const imgIndustryStadiumsEvents = "/images/industries/industry-stadiums-events.webp";
const imgIndustryFaithBased = "/images/stock/industry-faith-based.webp";
const imgIndustryMunicipalities = "/images/stock/clean-city.webp";
const imgIndustryHospitality = "/images/stock/industry-hospitality.webp";
const imgIndustryNaturalDisasters = "/images/stock/industry-natural-disasters-storm.jpg";
const imgIndustryRealEstate = "/images/stock/industry-real-estate-balconies.jpg";
const imgIndustryRetail = "/images/stock/hotel.webp";

// Decorative/Section-specific images
const imgTruck = "/images/stock/white-truck.webp";
const imgCleanCity = "/images/stock/clean-city.webp";
const imgHeroSkyscrapers = "/images/stock/hero-skyscrapers.jpg";
const imgUSMap = "/images/generated/3d-usa-map.png";

// Case study images
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";

// Hero video
const heroVideo = "/videos/hero-bg.mp4";
const heroPoster = "/videos/hero-poster.webp";

// Homepage testimonials
const homeTestimonials = [
 {
 quote: "We cut waste spend by 30% in 90 days. One invoice, one contact, 200 locations handled.",
 author: "Sarah Jenkins",
 role: "Director of Operations",
 company: "National Retail Chain",
 img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
 },
 {
 quote: "No more chasing providers across 15 states. Tenth Rock picks up the phone and the problem is solved.",
 author: "Michael Ross",
 role: "Facility Manager",
 company: "Multi-Site Property Group",
 img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
 },
 {
 quote: "They showed up same-day after a storm knocked out our compactor. That kind of response is why we stay.",
 author: "David Chen",
 role: "Regional VP",
 company: "Hospitality Management Co.",
 img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
 }
];

const Logo = ({ className = "", variant = "main" }: { className?: string, variant?: "main" | "white" }) => {
 const logoSrc = variant === "main" ? logoMain : logoWhite;
 
 return (
 <div className={`flex items-center gap-2 ${className}`}>
 <div className="relative h-8 md:h-10 w-[140px] md:w-[180px]">
 <Image 
 src={logoSrc} 
 alt="Tenth Rock Waste Solutions" 
 fill
 sizes="360px"
 className="object-contain object-left" 
 priority
 />
 </div>
 </div>
 );
};

const LOADER_FADE_START_MS = 2000;
const LOADER_FADE_MS = 600;
const LOADER_TOTAL_MS = LOADER_FADE_START_MS + LOADER_FADE_MS;

// Mobile shortens the intro to ~1s. The visual fade is driven by the CSS
// `.loader-overlay` animation (see globals.css) so it is NOT gated on JS
// hydration — this lets the high-priority hero poster become the LCP element
// quickly. JS only removes the already-hidden node afterwards. Keep this total
// in sync with the loaderMobileFade timing (0.6s hold + 0.4s fade).
const MOBILE_LOADER_TOTAL_MS = 1000;

// Module-level flag: the loading animation should play exactly once per page
// load. In dev, Next.js Fast Refresh unmounts/remounts components on every hot
// reload, which would otherwise restart the 2s timer indefinitely and leave the
// overlay stuck. Module state survives Fast Refresh re-executions within the
// same session but resets on a hard reload — so the first visit still plays the
// animation, and subsequent remounts are no-ops.
let alreadyShown = false;

const LoadingScreen = () => {
 // Decide once per mount whether this instance plays the intro. Captured in a
 // ref so the value is stable for the instance's entire lifetime — this keeps
 // it safe under React Strict Mode (which double-invokes effects in dev) and
 // safe across re-renders (an early `return null` keyed off the mutable module
 // flag would change the hook count once the flag flips, crashing the rules of
 // hooks). The first mount of a page load sees `alreadyShown === false` and
 // plays; any later remount (Fast Refresh) sees it `true` and no-ops.
 const playRef = useRef(!alreadyShown);
 const [hiding, setHiding] = useState(false);
 const [removed, setRemoved] = useState(false);

 useEffect(() => {
 if (!playRef.current) return;
 alreadyShown = true;
 const isMobile = window.matchMedia("(max-width: 767px)").matches;
 if (isMobile) {
 // Mobile: the overlay fades purely via the CSS `.loader-overlay` animation
 // (not gated on hydration) so the hero poster can win LCP at ~1s. We skip
 // the scroll-lock here — the fixed overlay already hides the page, and a
 // JS lock that fires late (slow hydration) would lock scroll after the
 // overlay has visually gone. JS only removes the already-hidden node.
 const removeTimer = setTimeout(() => setRemoved(true), MOBILE_LOADER_TOTAL_MS + 150);
 return () => clearTimeout(removeTimer);
 }
 const prevBodyOverflow = document.body.style.overflow;
 const prevHtmlOverflow = document.documentElement.style.overflow;
 document.body.style.overflow = "hidden";
 document.documentElement.style.overflow = "hidden";
 window.scrollTo(0, 0);
 const fadeTimer = setTimeout(() => {
 setHiding(true);
 document.body.style.overflow = prevBodyOverflow;
 document.documentElement.style.overflow = prevHtmlOverflow;
 }, LOADER_FADE_START_MS);
 const removeTimer = setTimeout(() => setRemoved(true), LOADER_TOTAL_MS);
 return () => {
 clearTimeout(fadeTimer);
 clearTimeout(removeTimer);
 document.body.style.overflow = prevBodyOverflow;
 document.documentElement.style.overflow = prevHtmlOverflow;
 };
 }, []);

 if (!playRef.current || removed) return null;

 return (
 <div
 style={{ transitionDuration: `${LOADER_FADE_MS}ms` }}
 className={`loader-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#042940] transition-opacity ease-in-out ${hiding ? "opacity-0 pointer-events-none" : "opacity-100"}`}
 data-testid="loading-screen"
 >
 <div className="flex flex-col items-center gap-6">
 <div className="loading-logo-reveal">
 <div className="relative w-44 md:w-56 h-11 md:h-14">
 <Image
 src={logoWhite}
 alt="Tenth Rock Waste Solutions"
 fill
 sizes="(max-width: 768px) 352px, 448px"
 className="object-contain"
 priority
 />
 </div>
 </div>
 <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden loading-bar-container">
 <div className="h-full bg-[#c5d520] rounded-full loading-bar-fill" />
 </div>
 </div>
 </div>
 );
};

// Hero entrance delays are driven by the `--hero-anim-delay` CSS variable
// (globals.css), which is 2.7s on desktop (waits for the intro) and 0s on
// mobile (intro is shortened). The per-element stagger is added with calc().
const Hero = ({
 heroTagline,
 heroHeading,
 heroSubheading,
 heroCtaLabel,
 heroCtaLink,
 heroSecondaryLabel,
 heroSecondaryLink,
 heroVideoSrc,
}: {
 heroTagline?: string;
 heroHeading?: string;
 heroSubheading?: string;
 heroCtaLabel?: string;
 heroCtaLink?: string;
 heroSecondaryLabel?: string;
 heroSecondaryLink?: string;
 heroVideoSrc?: string;
} = {}) => {
 const videoSrc = heroVideoSrc || heroVideo;
 const videoWebmSrc = !heroVideoSrc ? "/videos/hero-bg.webm" : null;
 const [videoMounted, setVideoMounted] = useState(false);
 useEffect(() => {
 // Respect Reduced Motion: keep the poster as the hero and skip the video.
 if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
 return;
 }
 // Defer video load until the browser is idle so the optimized poster
 // becomes the LCP element and the video downloads off the critical path.
 let done = false;
 const mount = () => { if (!done) { done = true; setVideoMounted(true); } };
 const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number; cancelIdleCallback?: (id: number) => void };
 let idleId: number | undefined;
 if (typeof w.requestIdleCallback === "function") {
 idleId = w.requestIdleCallback(mount, { timeout: 1500 });
 }
 const t = setTimeout(mount, idleId !== undefined ? 2000 : 800);
 return () => {
 done = true;
 clearTimeout(t);
 if (idleId !== undefined && typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(idleId);
 };
 }, []);
 return (
 <section aria-labelledby="hero-heading" className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-[#042940]">
 {/* Background Video */}
 <div className="absolute inset-0 z-0">
 <div className="relative w-full h-full hero-video-zoom">
 <Image
 src={heroPoster}
 alt=""
 fill
 sizes="100vw"
 priority
 fetchPriority="high"
 quality={60}
 className="object-cover opacity-80"
 />
 {videoMounted && (
 <video
 autoPlay
 loop
 muted
 playsInline
 preload="none"
 poster={heroPoster}
 disablePictureInPicture
 disableRemotePlayback
 className="absolute inset-0 w-full h-full object-cover opacity-80"
 >
 {videoWebmSrc && <source src={videoWebmSrc} type="video/webm" />}
 <source src={videoSrc} type="video/mp4" />
 </video>
 )}
 </div>
 <div className="absolute inset-0 bg-[#042940]/70 md:bg-[#042940]/60 mix-blend-multiply"></div>
 <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/20 md:via-transparent to-[#042940]/40 md:to-[#042940]/30"></div>
 <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
 </div>

 <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12">
 <div className="max-w-5xl mx-auto text-left sm:text-center">
 <div
 className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-md shadow-sm mb-8"
 style={{ animationDelay: "var(--hero-anim-delay)" }}
 >
 <span className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></span>
 {heroTagline || "Nationwide Commercial Waste Management"}
 </div>

 <h1
 id="hero-heading"
 className="hero-fade-up text-[48px] sm:text-[64px] xl:text-7xl font-medium text-white leading-[1.05] tracking-[-0.04em] mb-5"
 style={{ textWrap: "balance", animationDelay: "calc(var(--hero-anim-delay) + 0.15s)" }}
 >
 {heroHeading || "Centralized Waste Logistics for Businesses at Scale"}
 </h1>
 
 <p
 className="hero-fade-up text-base text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-normal tracking-tight drop-shadow-md"
 style={{ animationDelay: "calc(var(--hero-anim-delay) + 0.3s)" }}
 >
 {heroSubheading || "Coordinated execution for complex projects, multi-site operations, and urgent demands across 48 states."}
 </p>
 
 <div
 className="hero-fade-up flex flex-col sm:flex-row gap-4 sm:justify-center sm:items-center max-w-md sm:max-w-none mx-auto sm:mx-0 w-full"
 style={{ animationDelay: "calc(var(--hero-anim-delay) + 0.45s)" }}
 >
 <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] active:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap rounded-full" aria-label="Request a waste removal service" data-testid="button-hero-cta" asChild>
 <Link href={heroCtaLink || "/request-a-service"}>{heroCtaLabel || "Request A Service"}</Link>
 </Button>
 <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap rounded-full" asChild aria-label="Secondary call to action" data-testid="button-hero-secondary">
 <Link href={heroSecondaryLink || "#process"}>{heroSecondaryLabel || "See How It Works"}</Link>
 </Button>
 </div>
 </div>
 </div>
 </section>
 );
};

import type { HomepageTemplateData, GlobalSectionsData } from "@/lib/wordpress";
import { resolveReasonIcon } from "@/components/shared/ReasonsSection";

interface HomeProps {
 acf?: HomepageTemplateData | null;
 globalSections?: GlobalSectionsData | null;
 testimonials?: import("@/lib/wordpress").TestimonialData[];
 caseStudies?: import("@/lib/wordpress").CaseStudyData[];
 partnerLogos?: import("@/lib/wordpress").PartnerLogoData[];
}

export default function Home({ acf, globalSections, testimonials, caseStudies, partnerLogos }: HomeProps) {
 const gs = globalSections;
 return (
 <div className="min-h-screen bg-[#F9F9F6] font-sans text-primary selection:bg-secondary selection:text-primary">
 <LoadingScreen />
 <a href="#main-content" className="skip-link" data-testid="skip-link">
 Skip to main content
 </a>
 <Navbar />
 <Hero
 heroTagline={acf?.heroTagline}
 heroHeading={acf?.heroHeading}
 heroSubheading={acf?.heroSubheading}
 heroCtaLabel={acf?.heroCtaLabel}
 heroCtaLink={acf?.heroCtaLink}
 heroSecondaryLabel={acf?.heroSecondaryLabel}
 heroSecondaryLink={acf?.heroSecondaryLink}
 heroVideoSrc={acf?.heroVideo}
 />
 <main id="main-content" role="main">
 <LogoReelSection
 headline={gs?.logoReel?.headline}
 logos={partnerLogos && partnerLogos.length > 0 ? partnerLogos : undefined}
 />
 <CommercialWasteServices
 servicesTagline={acf?.servicesTagline}
 servicesHeading={acf?.servicesHeading}
 servicesSubtitle={acf?.servicesSubtitle}
 servicesCategories={acf?.servicesCategories}
 />
 <WhoWeHelpSection
 tagline={gs?.whoHelp?.tagline}
 heading={gs?.whoHelp?.heading}
 subtitle={gs?.whoHelp?.subtitle}
 />
 <CtaBannerSection
 tagline={gs?.ctaBanner?.tagline}
 heading={gs?.ctaBanner?.heading}
 subtitle={gs?.ctaBanner?.subtitle}
 placeholder={gs?.ctaBanner?.placeholder}
 buttonLabel={gs?.ctaBanner?.button}
 />
 <ProcessSection
 tagline={gs?.process?.tagline}
 heading={gs?.process?.heading}
 subtitle={gs?.process?.subtitle}
 steps={gs?.process?.steps?.map(s => ({ num: s.number, title: s.title, desc: s.description }))}
 />
 <CaseStudySection caseStudies={caseStudies && caseStudies.length > 0 ? caseStudies : undefined} />
 <ReasonsSection
 tagline={gs?.reasons?.tagline}
 heading={acf?.whyUsHeading || gs?.reasons?.heading}
 subtitle={gs?.reasons?.subtitle}
 buttonText={acf?.whyUsCtaLabel || gs?.reasons?.ctaLabel}
 buttonLink={acf?.whyUsCtaLink || gs?.reasons?.ctaLink}
 features={
 acf?.whyUsFeatures && acf.whyUsFeatures.length > 0
 ? acf.whyUsFeatures.map(f => ({
 title: f.title,
 icon: resolveReasonIcon(f.iconName),
 desc: f.content,
 }))
 : gs?.reasons?.features?.map(f => ({
 title: f.title,
 icon: resolveReasonIcon(f.iconName),
 desc: f.description,
 }))
 }
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
 <FaqSection
 tagline={acf?.faqTagline || gs?.faq?.tagline}
 heading={acf?.faqHeading || gs?.faq?.heading}
 subtitle={acf?.faqSubtitle || gs?.faq?.subtitle}
 faqs={gs?.faq?.faqs}
 ctaText={acf?.faqCtaText || gs?.faq?.ctaText}
 ctaLabel={acf?.faqCtaLabel || gs?.faq?.ctaLabel}
 ctaLink={acf?.faqCtaLink || gs?.faq?.ctaLink}
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
 </main>
 <Footer />
 </div>
 );
}
