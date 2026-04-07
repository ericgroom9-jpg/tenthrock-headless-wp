"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Truck, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  ClipboardCheck,
  Headset,
  Building2,
  Factory,
  Store,
  HardHat,
  ChevronDown,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Play,
  GraduationCap,
  Trophy,
  Heart,
  Landmark,
  Utensils,
  Siren,
  Home as HomeIcon,
  User,
  Container,
  LineChart
} from "lucide-react";
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
  <div className="py-16 md:py-24 animate-pulse">
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
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";

// Stock images for industries
const imgIndustryEducational = "/images/stock/university.jpg";
const imgIndustryStadiumsEvents = "/images/industries/industry-stadiums-events.jpg";
const imgIndustryFaithBased = "/images/stock/industry-faith-based.jpg";
const imgIndustryMunicipalities = "/images/stock/clean-city.jpg";
const imgIndustryHospitality = "/images/stock/industry-hospitality.jpg";
const imgIndustryNaturalDisasters = "/images/stock/industry-natural-disasters-storm.jpg";
const imgIndustryRealEstate = "/images/stock/industry-real-estate-balconies.jpg";
const imgIndustryRetail = "/images/stock/hotel.jpg";

// Decorative/Section-specific images
const imgTruck = "/images/stock/white-truck.jpg";
const imgCleanCity = "/images/stock/clean-city.jpg";
const imgCyclist = "/images/stock/cyclist.jpg";
const imgParkWater = "/images/stock/floor-park.jpg";
const imgHeroSkyscrapers = "/images/stock/hero-skyscrapers.jpg";
const imgUSMap = "/images/generated/3d-usa-map.png";

// Case study images
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";

// Hero video
const heroVideo = "/videos/hero-bg.mp4";

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
      <Image 
        src={logoSrc} 
        alt="Tenth Rock Waste Solutions" 
        width={160}
        height={40}
        className="h-8 md:h-10 w-auto object-contain" 
        priority
      />
    </div>
  );
};

const LOADER_FADE_START_MS = 2000;
const LOADER_FADE_MS = 600;
const LOADER_TOTAL_MS = LOADER_FADE_START_MS + LOADER_FADE_MS;

const LoadingScreen = () => {
  const [hiding, setHiding] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setHiding(true), LOADER_FADE_START_MS);
    const removeTimer = setTimeout(() => setRemoved(true), LOADER_TOTAL_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      style={{ transitionDuration: `${LOADER_FADE_MS}ms` }}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#042940] transition-opacity ease-in-out ${hiding ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      data-testid="loading-screen"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loading-logo-reveal">
          <Image
            src={logoWhite}
            alt="Tenth Rock Waste Solutions"
            width={220}
            height={55}
            className="w-44 md:w-56 h-auto"
            priority
          />
        </div>
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden loading-bar-container">
          <div className="h-full bg-[#c5d520] rounded-full loading-bar-fill" />
        </div>
      </div>
    </div>
  );
};

const HERO_BASE_DELAY = `${(LOADER_TOTAL_MS / 1000) + 0.1}s`;
const HERO_STAGGER = 0.15;

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-[#042940]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full hero-video-zoom">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover opacity-80"
            src={heroVideo}
          />
        </div>
        <div className="absolute inset-0 bg-[#042940]/70 md:bg-[#042940]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/20 md:via-transparent to-[#042940]/40 md:to-[#042940]/30"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12">
        <div className="max-w-5xl mx-auto text-left sm:text-center">
          <div
            className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-md shadow-sm mb-8"
            style={{ animationDelay: HERO_BASE_DELAY }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></span>
            Comprehensive Waste Logistics for Commercial Facilities
          </div>

          <h1
            id="hero-heading"
            className="hero-fade-up text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-5"
            style={{ textWrap: "balance", animationDelay: `${(LOADER_TOTAL_MS / 1000) + 0.1 + HERO_STAGGER}s` }}
          >
            One Dedicated Partner, Coast to Coast Commercial Cleanup &amp; Waste Solutions
          </h1>
          
          <p
            className="hero-fade-up text-base text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-normal tracking-tight drop-shadow-md"
            style={{ textWrap: "balance", animationDelay: `${(LOADER_TOTAL_MS / 1000) + 0.1 + HERO_STAGGER * 2}s` }}
          >
            Reliable on demand support for the toughest property challenges.
          </p>
          
          <div
            className="hero-fade-up flex flex-col sm:flex-row gap-4 sm:justify-center sm:items-center max-w-md sm:max-w-none mx-auto sm:mx-0 w-full"
            style={{ animationDelay: `${(LOADER_TOTAL_MS / 1000) + 0.1 + HERO_STAGGER * 3}s` }}
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] active:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap rounded-full" aria-label="Request a waste removal service" data-testid="button-hero-cta" asChild>
              <Link href="/request-a-service">Request A Service</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap rounded-full" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} aria-label="See how our process works" data-testid="button-hero-secondary">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Counter Component
const Counter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-20%" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={nodeRef} className="flex items-center justify-center">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// Simple Numbers 2
const SimpleNumbers = () => {
  return (
    <section aria-label="Company statistics" className="py-12 md:py-20 bg-white border-b border-primary/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-primary/10 max-w-5xl mx-auto">
           <div className="flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
                 <Counter to={48} duration={2.5} />
              </div>
              <div className="text-lg text-primary/70">States Serviced</div>
           </div>
           <div className="flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
                 <Counter to={5} suffix="K+" duration={2.5} />
              </div>
              <div className="text-lg text-primary/70">Locations Managed</div>
           </div>
           <div className="flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
                 <Counter to={24} suffix="/7" duration={2.5} />
              </div>
              <div className="text-lg text-primary/70">Emergency Support</div>
           </div>
        </div>
      </div>
    </section>
  );
};


// ServicesSection
const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Emergency Waste Removal",
      desc: "Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.",
      href: "/services/emergency-waste-removal",
      items: [
        { label: "Product & Perishable Removal", desc: "Perishable bulk pickup and spoiled product disposal after cold storage failure or refrigeration failure events. After-hours waste removal available." },
        { label: "Temporary Capacity & Stabilization", desc: "Compactor failure response and urgent bulk waste removal when missed pickups or waste overflow disrupts operations." },
        { label: "Unplanned Cleanouts & Debris", desc: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency situations." },
      ],
    },
    {
      title: "Specialized Project Logistics",
      desc: "End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.",
      href: "/services/specialized-project-logistics",
      items: [
        { label: "Site Closures & Remodels", desc: "Site decommissioning, post-construction cleanout, and retail remodel waste management for portfolio-wide site turnover." },
        { label: "Events & Stadiums", desc: "Event waste logistics and stadium waste coordination for multi-day event waste support at fairs, festivals, and venues." },
        { label: "Natural Disasters", desc: "Rapid response for storm debris removal and hurricane debris cleanup with emergency roll-off rental and multi-site recovery support." },
      ],
    },
    {
      title: "Dumpster Rentals",
      desc: "Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow.",
      href: "/services/dumpsters-containers",
      items: [
        { label: "On-Demand Service", desc: "Same-day dumpster rental and emergency roll-off service with same-day swaps. Temporary dumpster deployment, no long-term commitments." },
        { label: "Multiple Sizes", desc: "Commercial-grade open-top dumpsters in 20 yard, 30 yard, and 40 yard roll-off sizes matched to your project scope." },
        { label: "Recycling & Specialty", desc: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling." },
      ],
    },
    {
      title: "Waste Advisory",
      desc: "Retained waste management advisory providing hands-on program rollout, vendor training, performance optimization, and portfolio-wide execution management.",
      href: "/services/waste-operations-advisory",
      items: [
        { label: "Assessments & Roadmaps", desc: "Portfolio-wide waste strategy and operational waste audit with cost-control optimization across your multi-site waste roadmap." },
        { label: "Standards, SOPs & Training", desc: "Waste management SOP development and multi-site vendor training framework with vendor performance protocols." },
        { label: "Ongoing Advisory", desc: "Retained advisory for waste workflow optimization, multi-site execution strategy, and ongoing program improvement built for scale." },
      ],
    },
  ];

  const categoryIcons = [Siren, HardHat, Container, LineChart];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 md:py-24 bg-[#F9F9F6]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Our Services
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-medium text-primary leading-tight mb-4 tracking-tighter">
            Waste Management Services
          </h2>
          <p className="text-lg text-primary/70">
            Four core services. One point of contact. Dispatched across 48 states.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
           {/* Category Sidebar */}
           <div className="lg:col-span-4 flex flex-col space-y-[6px]">
             {services.map((service, i) => (
               <button
                 key={i}
                 onClick={() => setActiveService(i)}
                 data-testid={`button-service-category-${i}`}
                 className={`text-left px-6 md:px-8 py-5 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                   activeService === i 
                     ? "bg-white shadow-lg text-primary border border-primary/5" 
                     : "text-primary/60 hover:text-primary active:text-primary hover:bg-white/50 active:bg-white/50"
                 }`}
                 aria-pressed={activeService === i}
               >
                 <span className="relative z-10 flex items-center justify-between gap-3">
                   {service.title}
                   {activeService === i && (
                     <motion.span layoutId="active-indicator" className="w-2 h-2 rounded-full bg-[#c5d520] flex-shrink-0" />
                   )}
                 </span>
                 {activeService === i && (
                   <motion.div
                     layoutId="active-bg"
                     className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5d520]"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                   />
                 )}
               </button>
             ))}
           </div>

           {/* Feature Boxes */}
           <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeService}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.35 }}
                 className="grid sm:grid-cols-3 gap-4"
               >
                 {services[activeService].items.map((item, idx) => {
                   const Icon = categoryIcons[activeService];
                   return (
                     <div
                       key={idx}
                       className="bg-white rounded-[5px] border border-primary/5 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                       data-testid={`card-service-feature-${activeService}-${idx}`}
                     >
                       <div className="w-10 h-10 rounded-full bg-[#c5d520]/15 flex items-center justify-center flex-shrink-0">
                         <Icon className="w-5 h-5 text-[#c5d520]" />
                       </div>
                       <h3 className="font-bold text-primary text-base leading-snug">
                         {item.label}
                       </h3>
                       <p className="text-primary/70 text-sm leading-relaxed">
                         {item.desc}
                       </p>
                     </div>
                   );
                 })}
               </motion.div>
             </AnimatePresence>

             <div className="mt-6">
               <Link
                 href={services[activeService].href}
                 className="inline-flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide text-sm hover:gap-3 transition-all"
                 data-testid={`link-service-learn-more-${activeService}`}
               >
                 Learn More <ArrowRight className="w-4 h-4" />
               </Link>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// Feature 3 (Sectors / Who We Help)
// Why You'll Love Tenth Rock (Simple Accordion 1)
const WhyUs = () => {
  const [activeItem, setActiveItem] = useState("item-0");

  const items = [
    { 
      title: "Speed You Can Count On", 
      content: "Emergency pickups within hours, scheduled service within 24-48 hours. Our 24/7 dispatch center means your call is never waiting until Monday.",
      icon: <Clock className="w-5 h-5 text-[#c5d520]" />
    },
    { 
      title: "Nationwide, Local Execution", 
      content: "One contract, one point of contact, serviced by vetted local crews who know the disposal requirements in your area.",
      icon: <MapPin className="w-5 h-5 text-[#c5d520]" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="About Tenth Rock">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
           {/* Left Image Side (order-2 on mobile) */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="h-[350px] lg:h-[600px] relative rounded-[5px] overflow-hidden order-2 lg:order-1"
           >
              <Image src={imgTruck} alt="Tenth Rock Operations" fill sizes="100vw" className="object-cover" loading="lazy" />
           </motion.div>
           
           {/* Right Content Side (order-1 on mobile) */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col justify-center order-1 lg:order-2"
           >
             <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-8 md:mb-12 tracking-tighter">
               Why You’ll Love Tenth Rock
             </h2>
             
             <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
               {items.map((item, i) => (
                 <div key={i} className="p-4 md:p-6 rounded-[5px] border border-gray-100 shadow-sm active:shadow-md md:hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                       <div className="mt-1">
                          {item.icon}
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-[#042940] mb-2">{item.title}</h3>
                          <p className="text-[#042940]/70 leading-relaxed">
                            {item.content}
                          </p>
                       </div>
                    </div>
                 </div>
               ))}
             </div>

             <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full" asChild>
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#042940] text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white min-h-[52px] whitespace-nowrap rounded-full" asChild>
                  <Link href="/services/commercial-waste-services">View Our Services</Link>
                </Button>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reasons Section (Grid with Sticky Feature)
const Reasons = () => {
  const features = [
    { title: "Dedicated Point of Contact", icon: <Headset className="w-6 h-6" />, desc: "One person to handle everything. No call centers, no runarounds, just answers." },
    { title: "Job Completion Proof", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Visual confirmation for every job we complete, available instantly." },
    { title: "Local Crews, National Reach", icon: <MapPin className="w-6 h-6" />, desc: "Vetted local crews across 48 states. You get the responsiveness of a local provider with the accountability of a national partner." },
    { title: "Real Cost Savings", icon: <Truck className="w-6 h-6" />, desc: "Clients typically save up to 30% through vendor consolidation, rate negotiation, and right-sized service." }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8]" aria-label="Reasons to choose Tenth Rock">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Benefits
               </div>
               <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter">
                 More Reasons You’ll Love Us
               </h2>
               <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                 We've rebuilt waste management from the ground up to serve modern businesses. Say goodbye to hidden fees and confusing contracts.
               </p>
               <Button size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 min-h-[52px] whitespace-nowrap" asChild>
                  <Link href="/request-a-service">Request A Service</Link>
               </Button>
             </motion.div>
          </div>

          {/* Right Grid Content */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div 
                key={i} 
                className="group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-secondary/20 active:border-secondary/20 hover:shadow-xl active:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed group-hover:text-primary/80 transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section (Numbers and Media 1)
const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD]" aria-label="Key metrics">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Key Metrics
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter">
                Why Clients Call Us Again and Again.
              </h2>
              <p className="text-lg text-primary/70 mb-8">
                Numbers tell the story. Our clients stick with us because we deliver measurable results: lower costs, faster response, and fewer headaches managing waste across multiple locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap rounded-full" asChild>
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap rounded-full" asChild>
                   <a href="tel:+17275105454"><Phone className="w-5 h-5 text-secondary" /> 727.510.5454</a>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-8">
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">Average Cost Savings</div>
                <div className="text-7xl font-extrabold text-primary mb-4">30%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization.</p>
             </div>
             
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="h-64 w-full rounded-[5px] overflow-hidden mb-8 relative">
                  <Image src={imgParkWater} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" alt="Tenth Rock nationwide waste operations" loading="lazy" />
                </div>
                <div className="font-semibold text-xl text-primary mb-4">Locations Managed</div>
                <div className="text-7xl font-extrabold text-primary mb-4">5K+</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Commercial locations across 48 states trust Tenth Rock for consistent, reliable waste service.</p>
             </div>

             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">On-Time Service Rate</div>
                <div className="text-7xl font-extrabold text-primary mb-4">98%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Our dispatched crews arrive when promised. Missed pickups cost you money. We don't let that happen.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// FAQ (FAQ 1)
const Faq = () => {
  const [openItem, setOpenItem] = useState("item-0");

  const faqs = [
    {
      question: "How Quickly Can You Arrange a Pickup?",
      answer: "For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night."
    },
    {
      question: "Do You Service Multiple Locations Nationwide?",
      answer: "Yes, we operate across 48 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice."
    },
    {
      question: "What Types of Waste Do You Handle?",
      answer: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request."
    },
    {
      question: "Are There Long-Term Contracts?",
      answer: "We believe in earning your business every day. While we offer contract savings, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."
    },
    {
      question: "How Do You Help With Sustainability Goals?",
      answer: "Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials."
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-left sm:text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Common Questions
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className={`group rounded-[5px] border transition-all duration-300 overflow-hidden ${
                  openItem === `item-${i}` 
                    ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" 
                    : "bg-white border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"
                }`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                  onClick={() => setOpenItem(openItem === `item-${i}` ? "" : `item-${i}`)}
                  aria-expanded={openItem === `item-${i}`}
                  data-testid={`button-faq-${i}`}
                >
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    openItem === `item-${i}` ? "text-white" : "text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openItem === `item-${i}` 
                      ? "bg-[#c5d520] rotate-180" 
                      : "bg-primary/5 group-hover:bg-primary/10"
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                      openItem === `item-${i}` ? "text-[#042940]" : "text-primary"
                    }`} />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openItem === `item-${i}` ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-0">
                    <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-left sm:text-center">
           <p className="text-primary/70 mb-4 font-medium">Still Have Questions?</p>
           <Button size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap" asChild>
              <Link href="/contact">Contact Us</Link>
           </Button>
        </div>
      </div>
    </section>
  );
};

// One Location 2 - Matching Services Page Design
const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left sm:text-center mb-8 sm:mb-12"
        >
          <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            Where to Find Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl sm:mx-auto">
            Serving businesses nationwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767" target="_blank" rel="noopener noreferrer" className="text-gray-600 ml-9 hover:underline">140 Island Way Ste. 159, Clearwater Beach, FL 33767</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
              </div>
              <p className="text-gray-600 ml-9">Available 24/7 for emergencies</p>
              <a href="tel:+17275105454" className="text-[#042940] font-semibold ml-9 hover:underline">727.510.5454</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Email</h3>
              </div>
              <a href="mailto:hello@tenthrock.com" className="text-gray-600 ml-9 hover:underline">hello@tenthrock.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative rounded-[5px] overflow-hidden bg-gray-100"
            suppressHydrationWarning
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              style={{ aspectRatio: "768 / 512" }}
              suppressHydrationWarning
            >
              <source src="/assets_export/videos/us-map-pins-loop.mp4?v=2" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F6] font-sans text-primary selection:bg-secondary selection:text-primary">
      <LoadingScreen />
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <Hero />
      <main id="main-content" role="main">
      <LogoReelSection />
      <CommercialWasteServices />
      <WhoWeHelpSection />
      <CtaBannerSection />
      <ProcessSection />
      <CaseStudySection />
      <ReasonsSection />
      <StatsSection />
      <FaqSection />
      <LocationSection />
      <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
