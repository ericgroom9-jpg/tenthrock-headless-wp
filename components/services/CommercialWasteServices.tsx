"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { 
 ArrowRight, 
 Phone, 
 CheckCircle2, 
 Clock, 
 MapPin, 
 ChevronRight,
 ChevronDown,
 ChevronLeft,
 Mail,
 Instagram,
 Twitter,
 Facebook,
 Linkedin,
 Play,
 User,
 Plus,
 Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LocationSection from "@/components/shared/LocationSection";
import Logo from "@/components/shared/Logo";
import SharedCommercialWasteServices from "@/components/shared/CommercialWasteServices";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import FaqSection from "@/components/shared/FaqSection";
import StatsSection from "@/components/shared/StatsSection";
import ZipCheckForm from "@/components/shared/ZipCheckForm";

const logoWhite = "/images/logos/Green-White-Logo.png";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.webp";
const imgServiceEventStadium = "/images/stock/service-event-stadium.webp";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.webp";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";

const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";




const services = [
 {
 title: "Emergency Waste Removal",
 desc: "Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.",
 img: imgServiceEmergencyOverflow,
 features: ["Product & Perishable Removal", "Site Stabilization", "Unplanned Cleanouts"],
 },
 {
 title: "Specialized Project Logistics",
 desc: "End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.",
 img: imgServiceStoreDecommissioning,
 features: ["Site Closures & Remodels", "Events & Stadiums", "Disaster Mobilization"],
 },
 {
 title: "Dumpster Rentals",
 desc: "Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow needs.",
 img: imgServiceDumpsterRental,
 features: ["On-Demand Service", "Multiple Sizes", "Recycling & Specialty"],
 },
 {
 title: "Waste Advisory",
 desc: "Retained waste management advisory providing hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management.",
 img: imgServiceCentralizedProgram,
 features: ["Assessments & Roadmaps", "SOPs & Vendor Training", "Ongoing Advisory"],
 },
];

const processSteps = [
 { num: "01", title: "You Call Us", desc: "When your business faces a waste crisis, call us. Our team of experts is on standby, ready to help 24/7." },
 { num: "02", title: "We Assemble Your Team", desc: "You get a dedicated project manager as your single point of contact who will assess the situation, coordinate resources, and keep you informed every step of the way." },
 { num: "03", title: "We Quote the Job", desc: "Your project manager provides a prompt, no-obligation quote. No hidden fees or unexpected charges, just a single flat rate for the entire project." },
 { num: "04", title: "We Handle the Rest", desc: "Once you give the green light, our team springs into action. Your project manager stays on call with real-time updates whenever you need them." },
 { num: "05", title: "Problem Solved", desc: "We resolve your waste issue quickly and efficiently so you can avoid costly fines, downtime, and negative attention. Your business stays on track." },
];

const faqs = [
 {
 question: "What types of commercial waste do you handle?",
 answer: "We handle all types of commercial waste including general refuse, recyclables, construction debris, hazardous materials (with proper certification), and specialized industry waste streams.",
 },
 {
 question: "How quickly can you respond to an emergency?",
 answer: "Our emergency response team is available 24/7 and can typically arrive on-site within 2-4 hours for urgent situations in our service areas.",
 },
 {
 question: "Do you provide documentation for every job?",
 answer: "Yes, we provide comprehensive documentation for every completed job.",
 },
 {
 question: "What areas do you service?",
 answer: "We provide nationwide coverage with regional hubs strategically located to serve major metropolitan areas and surrounding regions efficiently.",
 },
 {
 question: "Can you handle multi-location contracts?",
 answer: "Absolutely. We specialize in enterprise-wide waste management programs and can coordinate services across multiple locations with centralized reporting and billing.",
 },
];

import type { CommercialWasteTemplateData, GlobalSectionsData } from "@/lib/wordpress";
import { resolveReasonIcon } from "@/components/shared/ReasonsSection";

interface CommercialWasteServicesProps {
 acf?: CommercialWasteTemplateData | null;
 globalSections?: GlobalSectionsData | null;
}

export default function CommercialWasteServices({ acf, globalSections }: CommercialWasteServicesProps) {
 const gs = globalSections;
 const procSteps = (acf?.processSteps && acf.processSteps.length > 0)
 ? acf.processSteps.map((s) => ({ num: s.number || "", title: s.title || "", desc: s.description || "" }))
 : processSteps;
 const csThumbs = (acf?.caseStudyThumbs && acf.caseStudyThumbs.length > 0)
 ? acf.caseStudyThumbs.map((t, i) => ({ src: t.image || [imgCaseStudyThumb1, imgCaseStudyThumb2, imgCaseStudyThumb3][i] || imgCaseStudyThumb1, alt: t.alt || `Commercial waste operations detail ${i + 1}` }))
 : [imgCaseStudyThumb1, imgCaseStudyThumb2, imgCaseStudyThumb3].map((src, i) => ({ src, alt: `Commercial waste operations detail ${i + 1}` }));
 const csStats = (acf?.caseStudyStats && acf.caseStudyStats.length > 0)
 ? acf.caseStudyStats.map((s) => ({ value: s.value || "", label: s.label || "" }))
 : [
 { value: "10 min", label: "Response Time" },
 { value: "4 hrs", label: "Total Stabilization" },
 { value: "0", label: "Customer Impact" },
 { value: "1", label: "Call to Resolution" },
 ];
 const cwFaqs = (acf?.faqs && acf.faqs.length > 0)
 ? acf.faqs.map((f) => ({ question: f.question || "", answer: f.answer || "" }))
 : faqs;

 return (
 <div className="flex flex-col min-h-screen bg-white">
 <a href="#main-content" className="skip-link" data-testid="skip-link">
 Skip to main content
 </a>

 <Navbar variant="floating" />

 <main id="main-content" className="flex-1">
 <section className="relative bg-[#042940] overflow-hidden pt-24 md:pt-28">
 <div className="absolute inset-0">
 <Image 
 src={acf?.heroImage || imgServiceCentralizedProgram}
 alt=""
 fill
 sizes="100vw"
 className="object-cover"
 aria-hidden="true"
 priority
 />
 <div className="absolute inset-0 bg-[#042940]/85 md:bg-transparent md:bg-gradient-to-r md:from-[#042940] md:via-[#042940]/80 md:via-60% md:to-[#042940]/15" />
 </div>
 <div className="relative container mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20">
 <FadeIn
 className="max-w-2xl"
 >
 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
 {acf?.heroHeading || "Waste Management Services"}
 </h1>
 <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
 {acf?.heroSubheading || "Emergency response, project logistics, container rentals, and waste program advisory for multi-location operators. One point of contact, 48 states."}
 </p>
 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button 
 size="lg" 
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
 data-testid="button-hero-cta"
 asChild
 >
 <Link href={acf?.heroCtaLink || "/request-a-service"}>
 {acf?.heroCtaLabel || "Request A Service"}
 <ArrowRight className="ml-2 h-5 w-5" />
 </Link>
 </Button>
 <Button 
 size="lg" 
 variant="outline" 
 className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-[#042940] min-h-[52px] rounded-full whitespace-nowrap backdrop-blur-sm bg-white/5"
 data-testid="button-hero-phone"
 asChild
 >
 <a href={acf?.heroPhoneLink || "tel:+17275105454"}>
 <Phone className="mr-2 h-5 w-5" />
 {acf?.heroPhoneLabel || "727.510.5454"}
 </a>
 </Button>
 </div>
 </FadeIn>
 </div>
 </section>

 <SharedCommercialWasteServices />

 {/* How It Works Section - Matching Homepage Design */}
 <section id="process" aria-labelledby="process-heading" className="py-8 md:py-16 bg-white relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-8">
 <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
 {acf?.processTagline || "Our Process"}
 </div>
 <h2 id="process-heading" className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
 {acf?.processHeading || "How It Works"}
 </h2>
 <p className="text-lg text-[#042940]/70 [text-wrap:balance]">
 {"A simple, transparent process designed to get your problem solved fast."}
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
 {procSteps.map((step, i) => (
 <FadeIn 
 key={i}
 className="group bg-white p-6 md:p-10 rounded-[5px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] active:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col items-start sm:items-center text-left sm:text-center md:hover:-translate-y-1"
 >
 <div className="w-16 h-16 rounded-full bg-[#F9F9F6] group-hover:bg-[#c5d520] transition-colors duration-300 flex items-center justify-center text-lg font-bold text-[#042940] mb-8 shrink-0">
 {step.num}
 </div>
 <h3 className="text-xl font-bold text-[#042940] mb-4 group-hover:text-[#c5d520] transition-colors duration-300">
 {step.title}
 </h3>
 <p className="text-[#042940]/70 leading-relaxed text-sm">
 {step.desc}
 </p>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* Check If We Service Your Area - Matching Homepage Design */}
 <section className="py-8 md:py-16 bg-white relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-8 relative z-10">
 <FadeIn
 className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
 >
 <div 
 className="absolute inset-0 opacity-10 mix-blend-overlay" 
 style={{ 
 backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.webp)`, 
 backgroundSize: 'cover', 
 backgroundPosition: 'center' 
 }} 
 />
 <div 
 className="absolute inset-0 opacity-20" 
 style={{ 
 backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', 
 backgroundSize: '30px 30px' 
 }} 
 />
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
 <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse" />
 {acf?.zipTagline || "Service Availability"}
 </div>
 
 <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter">
 {acf?.zipHeading || "Check If We Service "}<span className="text-[#c5d520]">{acf?.zipHeadingHighlight || "Your Area"}</span>
 </h2>
 <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10">
 {acf?.zipSubtitle || "Enter your zip code below to instantly see if our network of local vendors covers your location."}
 </p>
 
 <ZipCheckForm
 placeholder={acf?.zipPlaceholder || "Enter Zip Code"}
 buttonLabel={acf?.zipButton || "Check Now"}
 />
 </div>
 </FadeIn>
 </div>
 </section>

 {/* Stats Section - shared with homepage */}
 <StatsSection />

 {/* Case Study Section - Matching Homepage Design */}
 <section className="py-8 md:py-16 bg-white border-b border-[#042940]/5">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
 <div className="space-y-4 order-2 lg:order-1">
 <FadeIn
 className="rounded-[5px] overflow-hidden h-[400px] relative"
 >
 <Image 
 src={acf?.caseStudyMainImage || imgCaseStudyMain} 
 alt="Commercial waste management case study by Tenth Rock" 
 fill
 sizes="(max-width: 1024px) 100vw, 50vw"
 className="object-cover md:hover:scale-105 transition-transform duration-700" 
 loading="lazy"
 />
 </FadeIn>
 <div className="grid grid-cols-3 gap-4">
 {csThumbs.map((thumb, i) => (
 <FadeIn
 key={i}
 className="rounded-[5px] overflow-hidden aspect-square relative"
 >
 <Image 
 src={thumb.src} 
 alt={thumb.alt} 
 fill
 sizes="(max-width: 1024px) 33vw, 16vw"
 className="object-cover md:hover:scale-110 transition-transform duration-500" 
 loading="lazy"
 />
 </FadeIn>
 ))}
 </div>
 </div>

 <FadeIn
 className="lg:pl-8 order-1 lg:order-2"
 >
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5d520]/10 text-[#042940] font-bold text-xs uppercase tracking-wider mb-4">
 <span className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></span>
 {acf?.caseStudyTag || "Speed"}
 </div>
 <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 tracking-tighter leading-tight">
 {acf?.caseStudyHeading || "National Coffee Chain"} <br/><span className="text-3xl md:text-4xl">{acf?.caseStudySubheading || "Missed Pickup, Same-Day Stabilization"}</span>
 </h2>
 <p className="text-lg text-[#042940]/70 mb-6 md:mb-12 leading-relaxed">
 {acf?.caseStudyBody || "A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a local crew on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours."}
 </p>

 <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
 {csStats.map((stat, i) => (
 <div key={i}>
 <div className="text-4xl font-extrabold text-[#c5d520] mb-1">{stat.value}</div>
 <div className="text-sm font-bold text-[#042940] uppercase tracking-wide">{stat.label}</div>
 <div className="h-1 w-12 bg-[#042940]/10 mt-3" />
 </div>
 ))}
 </div>

 <Button 
 size="lg"
 className="hidden lg:inline-flex bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto whitespace-nowrap"
 asChild
 >
 <a href={acf?.caseStudyCtaLink || "/request-a-service"}>{acf?.caseStudyCtaLabel || "Request A Service"}</a>
 </Button>
 </FadeIn>

 <Button
 size="lg"
 className="order-3 lg:hidden bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto whitespace-nowrap"
 asChild
 >
 <a href={acf?.caseStudyCtaLink || "/request-a-service"}>{acf?.caseStudyCtaLabel || "Request A Service"}</a>
 </Button>
 </div>
 </div>
 </section>

 {/* FAQ Section - Shared (matches homepage) */}
 <FaqSection
 faqs={cwFaqs}
 tagline={acf?.faqTagline}
 heading={acf?.faqHeading}
 subtitle={acf?.faqSubtitle}
 ctaText={acf?.faqCtaText}
 ctaLabel={acf?.faqCtaLabel}
 ctaLink={acf?.faqCtaLink}
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
