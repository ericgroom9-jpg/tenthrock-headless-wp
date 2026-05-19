"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FadeIn from "@/components/shared/FadeIn";
import { 
 ArrowRight, 
 Phone, 
 Clock, 
 MapPin, 
 ChevronRight,
 ChevronDown,
 Plus,
 Minus,
 Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LocationSection from "@/components/shared/LocationSection";
import Logo from "@/components/shared/Logo";
import { submitGravityForm } from "@/lib/gf/submit-client";
import { GF_FORM_IDS } from "@/lib/gf/form-ids";
import CommercialWasteServices from "@/components/shared/CommercialWasteServices";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import StatsSection from "@/components/shared/StatsSection";
import ZipCheckForm from "@/components/shared/ZipCheckForm";

const logoWhite = "/images/logos/Green-White-Logo.png";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgParkWater = "/images/stock/sustainability-park-skyline.jpg";

interface ParagraphSection {
 badge: string;
 heading: string;
 body: string;
 image?: string;
 imageAlt?: string;
 bulletPoints?: string[];
}

interface ServiceTemplateProps {
 serviceName: string;
 heroTitle?: string;
 serviceDescription: string;
 heroImage?: string;
 subServices?: {
 title: string;
 description: string;
 image: string;
 link: string;
 features?: string[];
 }[];
 processSteps?: {
 num: string;
 title: string;
 desc: string;
 }[];
 processSubtitle?: string;
 faqs?: {
 question: string;
 answer: string;
 }[];
 stats?: {
 label: string;
 value: string;
 description: string;
 }[];
 paragraphSection1?: ParagraphSection;
 paragraphSection2?: ParagraphSection;
 aboutBullets?: string[];
 aboutDescription?: string;
 howItWorksIntro?: string;
 howItWorksSteps?: { title: string; desc: string }[];
 ctaImage?: string;
 ctaImageAlt?: string;
}

const defaultProcessSteps = [
 { num: "01", title: "You Call Us", desc: "Our experts are on standby 24/7 to solve it immediately." },
 { num: "02", title: "We Scope the Job", desc: "A dedicated project manager is assigned to your account. They assess the situation and build a plan." },
 { num: "03", title: "You Get a Flat Rate", desc: "One price, upfront, in writing. No hourly surprises, no fuel surcharges, no hidden line items. You approve it before anything moves." },
 { num: "04", title: "Crews Are Dispatched", desc: "Our team is deployed to your site. Your project manager coordinates every detail and sends real-time updates until the job is done." },
 { num: "05", title: "Problem Solved", desc: "Waste is removed, the site is clean, and you get photo documentation confirming completion. One invoice. Done." },
];

const defaultFaqs = [
 {
 question: "What types of commercial waste do you handle?",
 answer: "General trash, recyclables, construction debris, bulk cleanouts, compactor loads, and e-waste. We also coordinate certified hazmat disposal through licensed partners when needed.",
 },
 {
 question: "How quickly can you respond to an emergency?",
 answer: "Our dispatch center is staffed 24/7. For emergencies, crews are typically on-site within 2-4 hours. For scheduled service, we start within 24-48 hours of account setup.",
 },
 {
 question: "Do you provide documentation for every job?",
 answer: "Yes. Every completed job includes before-and-after photos, weight tickets when applicable, and a single consolidated invoice.",
 },
 {
 question: "What areas do you service?",
 answer: "We operate across 48 states through our vetted network of service partners. Whether your locations are in major metros or rural markets, we have crews who can reach them.",
 },
 {
 question: "Can you manage waste across hundreds of locations?",
 answer: "That's what we're built for. Multi-location businesses get one point of contact, one invoice, and consistent service at every site.",
 },
];

const defaultStats = [
 { label: "RESPONSE TIME", value: "2-4hr", description: "Average on-site arrival for emergency waste calls." },
 { label: "LOCATIONS MANAGED", value: "5K+", description: "Commercial sites serviced across 48 states." },
 { label: "ON-TIME RATE", value: "98%", description: "Dispatched crews arrive when promised, every time." },
];

const defaultParagraphSection1: ParagraphSection = {
 badge: "Why It Matters",
 heading: "Built for the Demands of Modern Business",
 body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
 image: "/images/stock/built-for-business-aerial-city.jpg",
 imageAlt: "Aerial view of a sprawling modern city with commercial districts",
 bulletPoints: [
 "Reduce waste management overhead by up to 30%",
 "Eliminate multi-vendor coordination headaches",
 "Real-time job status and documentation",
 "Scalable solutions that grow with your business",
 ],
};

const defaultParagraphSection2: ParagraphSection = {
 badge: "Our Commitment",
 heading: "Sustainability Without Compromise",
 body: "Environmental responsibility and operational efficiency go hand in hand. Our approach supports waste diversion efforts without disrupting your service or adding unnecessary complexity. We work with recovery and processing facilities across the country to help reduce landfill use while maintaining the reliable operations your business depends on.",
 image: imgParkWater,
 imageAlt: "Open green park with city skyline in the background, representing sustainable urban operations",
 bulletPoints: [
 "Practical waste diversion and recovery",
 "Clear insights into site activity and service history",
 "Direct access to a nationwide network of facilities",
 "Expert support for streamlining your waste process",
 ],
};

function renderDescWithPhoneLinks(desc: string, stepIdx: number) {
 if (!desc) return desc;
 const phoneRegex = /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
 const parts: (string | JSX.Element)[] = [];
 let lastIndex = 0;
 let matchIdx = 0;
 let match: RegExpExecArray | null;
 while ((match = phoneRegex.exec(desc)) !== null) {
 if (match.index > lastIndex) {
 parts.push(desc.slice(lastIndex, match.index));
 }
 const raw = match[0];
 const digits = raw.replace(/\D/g, "");
 const tel = digits.length === 10 ? `+1${digits}` : `+${digits}`;
 parts.push(
 <a
 key={`phone-${stepIdx}-${matchIdx}`}
 href={`tel:${tel}`}
 className="text-[#042940] hover:text-[#c5d520] transition-colors"
 data-testid={`link-how-it-works-phone-${stepIdx}-${matchIdx}`}
 >
 {raw}
 </a>
 );
 lastIndex = match.index + raw.length;
 matchIdx++;
 }
 if (lastIndex < desc.length) {
 parts.push(desc.slice(lastIndex));
 }
 return parts.length > 0 ? parts : desc;
}

export default function ServiceTemplate({
 serviceName,
 heroTitle,
 serviceDescription,
 heroImage = imgServiceDumpsterRental,
 subServices,
 processSteps = defaultProcessSteps,
 processSubtitle,
 faqs = defaultFaqs,
 stats = defaultStats,
 paragraphSection1 = defaultParagraphSection1,
 paragraphSection2 = defaultParagraphSection2,
 aboutBullets = [
 "Nationwide coverage with local vendor expertise",
 "24/7 emergency dispatch and rapid response",
 "One point of contact, one invoice, zero hassle",
 ],
 aboutDescription = "Our local crews handle everything from emergency overflow pickups to scheduled dumpster service. We coordinate directly with vetted vendors in your area so you get fast, reliable waste removal without managing multiple provider relationships.",
 howItWorksIntro,
 howItWorksSteps,
 ctaImage,
 ctaImageAlt,
}: ServiceTemplateProps) {
 const router = useRouter();
 const [activeStep, setActiveStep] = useState(0);
 const [openItem, setOpenItem] = useState("item-0");
 const [activeService, setActiveService] = useState(0);
 const [openAccordion, setOpenAccordion] = useState<string | null>("about");

 const [submitting, setSubmitting] = useState(false);
 const [submitError, setSubmitError] = useState<string | null>(null);

 const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setSubmitError(null);
 setSubmitting(true);
 const result = await submitGravityForm(e.currentTarget, GF_FORM_IDS.serviceInquiry);
 setSubmitting(false);
 if (!result.ok) {
 setSubmitError(result.error || "Submission failed. Please try again.");
 return;
 }
 router.push(result.redirectUrl || "/");
 };

 return (
 <div className="flex flex-col min-h-screen bg-white">
 <a href="#main-content" className="skip-link" data-testid="skip-link">
 Skip to main content
 </a>

 <Navbar variant="floating" />

 <main id="main-content" className="flex-1">
 {/* Hero Section with Background Image */}
 <section className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden">
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
 <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
 </div>
 <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24">
 <div className="max-w-2xl">
 <FadeIn
 >
 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6 max-w-[800px] lg:max-w-[950px] whitespace-pre-line">
 {heroTitle || serviceName}
 </h1>
 <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed">
 {serviceDescription}
 </p>
 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button 
 asChild
 size="lg"
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-hero-cta"
 >
 <Link href="/request-a-service">Request A Service</Link>
 </Button>
 <Button 
 size="lg"
 variant="outline"
 className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-hero-phone"
 asChild
 >
 <a href="tel:+17275105454">
 <Phone className="mr-2 h-5 w-5" />
 727.510.5454
 </a>
 </Button>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 {/* About Service + Form Section */}
 <section className="relative bg-white">
 <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-16">
 <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-start">
 {/* Left - About Service */}
 <FadeIn
 >
 {/* About Service - Accordion Item */}
 <div className="border-b border-[#042940]/10">
 <button 
 onClick={() => setOpenAccordion(openAccordion === "about" ? null : "about")}
 className="w-full flex items-center justify-between py-6 group cursor-pointer"
 data-testid="accordion-about-service"
 >
 <h2 className="text-2xl md:text-3xl font-medium text-[#042940] leading-tight tracking-tighter text-left">About {serviceName}</h2>
 <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
 openAccordion === "about" 
 ? "border-2 border-[#042940] bg-transparent" 
 : "bg-[#042940] group-hover:bg-[#c5d520]"
 }`}>
 <ArrowRight className={`w-5 h-5 transition-transform ${
 openAccordion === "about" 
 ? "text-[#042940] -rotate-45" 
 : "text-white group-hover:text-[#042940]"
 }`} />
 </div>
 </button>
 
 {openAccordion === "about" && (
 <FadeIn
 className="overflow-hidden"
 >
 <div className="pb-8">
 <ul className="space-y-3 mb-6">
 {aboutBullets.map((bullet, bIdx) => (
 <li key={bIdx} className="flex items-center gap-3 text-[#042940]">
 <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0">
 <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span>{bullet}</span>
 </li>
 ))}
 </ul>
 <p className="text-[#042940]/70 leading-relaxed">
 {aboutDescription}
 </p>
 </div>
 </FadeIn>
 )}
 
 </div>

 {/* How Service Works - Accordion Item */}
 <div className="border-b border-[#042940]/10">
 <button 
 onClick={() => setOpenAccordion(openAccordion === "how" ? null : "how")}
 className="w-full flex items-center justify-between py-6 group cursor-pointer"
 data-testid="accordion-how-service-works"
 >
 <h2 className="text-2xl md:text-3xl font-medium text-[#042940] leading-tight tracking-tighter text-left">How Service Works</h2>
 <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
 openAccordion === "how" 
 ? "border-2 border-[#042940] bg-transparent" 
 : "bg-[#042940] group-hover:bg-[#c5d520]"
 }`}>
 <ArrowRight className={`w-5 h-5 transition-transform ${
 openAccordion === "how" 
 ? "text-[#042940] -rotate-45" 
 : "text-white group-hover:text-[#042940]"
 }`} />
 </div>
 </button>
 
 {openAccordion === "how" && (
 <FadeIn
 className="overflow-hidden"
 >
 <div className="pb-8">
 <p className="text-[#042940]/70 leading-relaxed mb-4">
 {howItWorksIntro || "You call, we handle it. No back-and-forth, no guesswork. Here's how every job runs:"}
 </p>
 <ul className="space-y-3">
 {(howItWorksSteps || [
 { title: "", desc: "Call 727.510.5454 or submit a request online. We respond within the hour." },
 { title: "", desc: "Your project manager scopes the job and sends you a flat-rate quote." },
 { title: "", desc: "Crews arrive on schedule. You get real-time updates and photo documentation when the job is done." },
 ]).map((step, sIdx) => (
 <li key={sIdx} className="flex items-start gap-3 text-[#042940]">
 <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
 <span className="text-xs font-bold text-[#042940]">{sIdx + 1}</span>
 </div>
 <span>
 {step.title && <strong>{step.title}: </strong>}
 {renderDescWithPhoneLinks(step.desc, sIdx)}
 </span>
 </li>
 ))}
 </ul>
 </div>
 </FadeIn>
 )}
 
 </div>

 {/* Other Services - Accordion Item */}
 <div>
 <button 
 onClick={() => setOpenAccordion(openAccordion === "other" ? null : "other")}
 className="w-full flex items-center justify-between py-6 group cursor-pointer"
 data-testid="accordion-other-services"
 >
 <h2 className="text-2xl md:text-3xl font-medium text-[#042940] leading-tight tracking-tighter text-left">Other Services</h2>
 <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
 openAccordion === "other" 
 ? "border-2 border-[#042940] bg-transparent" 
 : "bg-[#042940] group-hover:bg-[#c5d520]"
 }`}>
 <ArrowRight className={`w-5 h-5 transition-transform ${
 openAccordion === "other" 
 ? "text-[#042940] -rotate-45" 
 : "text-white group-hover:text-[#042940]"
 }`} />
 </div>
 </button>
 
 {openAccordion === "other" && (
 <FadeIn
 className="overflow-hidden"
 >
 <div className="pb-8">
 <p className="text-[#042940]/70 leading-relaxed mb-4">
 Need more than one service? Most of our clients use multiple offerings. Here's what else we do:
 </p>
 <ul className="space-y-3">
 {[
 { label: "Emergency Waste Removal", href: "/emergency-waste-removal" },
 { label: "Specialized Project Logistics", href: "/specialized-project-logistics" },
 { label: "Dumpster Rentals", href: "/dumpsters-containers" },
 { label: "Waste Advisory", href: "/waste-operations-advisory" },
 ].filter((s) => s.label !== serviceName).map((s) => (
 <li key={s.label} className="flex items-center gap-3 text-[#042940]">
 <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0">
 <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <Link href={s.href} className="hover:text-[#c5d520] transition-colors" data-testid={`link-other-service-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{s.label}</Link>
 </li>
 ))}
 </ul>
 </div>
 </FadeIn>
 )}
 
 </div>
 </FadeIn>

 {/* Right - Contact Form */}
 <FadeIn
 className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8 lg:-mt-32 relative z-10"
 >
 <div className="mb-6">
 <h2 className="text-xl md:text-2xl font-bold text-[#042940] mb-2">Request a Quote</h2>
 <p className="text-[#042940]/70 text-sm">Fill out the form below and we'll get back to you shortly.</p>
 </div>
 <form className="space-y-5" onSubmit={handleFormSubmit}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label htmlFor="firstName" className="block text-sm font-medium text-[#042940] mb-2">
 First name
 </label>
 <Input 
 id="firstName"
 name="input_1"
 type="text"
 required
 placeholder="Enter your first name"
 className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
 data-testid="input-first-name"
 />
 </div>
 <div>
 <label htmlFor="lastName" className="block text-sm font-medium text-[#042940] mb-2">
 Last name
 </label>
 <Input 
 id="lastName"
 name="input_2"
 type="text"
 required
 placeholder="Enter your last name"
 className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
 data-testid="input-last-name"
 />
 </div>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-[#042940] mb-2">
 Email
 </label>
 <Input 
 id="email"
 name="input_3"
 type="email"
 required
 placeholder="Enter your email"
 className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
 data-testid="input-email"
 />
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-[#042940] mb-2">
 Phone number
 </label>
 <PhoneInput 
 id="phone"
 name="input_4"
 required
 className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
 data-testid="input-phone"
 />
 </div>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label htmlFor="company" className="block text-sm font-medium text-[#042940] mb-2">
 Company
 </label>
 <Input 
 id="company"
 name="input_5"
 type="text"
 required
 placeholder="Enter your company name"
 className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
 data-testid="input-company"
 />
 </div>
 <div>
 <label htmlFor="interest" className="block text-sm font-medium text-[#042940] mb-2">
 I'm interested in help with:
 </label>
 <select 
 id="interest"
 name="input_6"
 required
 className="w-full h-12 pl-4 pr-10 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
 data-testid="select-interest"
 defaultValue=""
 >
 <option value="" disabled>Select one...</option>
 <option value="emergency-waste-removal">Emergency Waste Removal</option>
 <option value="specialized-project-logistics">Specialized Project Logistics</option>
 <option value="dumpsters-containers">Dumpster Rentals</option>
 <option value="waste-operations-advisory">Waste Advisory</option>
 <option value="other">Other</option>
 </select>
 </div>
 </div>
 
 <div>
 <label htmlFor="message" className="block text-sm font-medium text-[#042940] mb-2">
 Message
 </label>
 <textarea 
 id="message"
 name="input_7"
 required
 rows={4}
 placeholder="Type your message..."
 className="w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors"
 data-testid="textarea-message"
 />
 </div>
 
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
 <label className="flex items-center gap-3 cursor-pointer">
 <input 
 type="checkbox" 
 name="input_8.1"
 value="1"
 required
 className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]"
 data-testid="checkbox-terms"
 />
 <span className="text-sm text-[#042940]/80">
 I accept the <a href="/privacy-policy" className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-service-privacy-policy">Privacy Policy</a>
 </span>
 </label>
 <Button 
 type="submit"
 size="lg"
 disabled={submitting}
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] hover:shadow-[0_0_30px_rgba(197,213,32,0.5)] transition-all whitespace-nowrap"
 data-testid="button-form-submit"
 >
 {submitting ? "Submitting…" : "Submit Request"}
 </Button>
 </div>
 {submitError && (
 <p className="text-red-600 text-sm" data-testid="text-service-form-error">{submitError}</p>
 )}
 </form>
 </FadeIn>
 </div>
 </div>
 </section>

 {/* Paragraph Section 1 */}
 <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="paragraph-section-1-heading" data-testid="section-paragraph-1">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
 <FadeIn
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-paragraph-1">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 {paragraphSection1.badge}
 </div>
 <h2 id="paragraph-section-1-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter" data-testid="heading-paragraph-1">
 {paragraphSection1.heading}
 </h2>
 <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-8" data-testid="text-paragraph-1-body">
 {paragraphSection1.body}
 </p>
 {paragraphSection1.bulletPoints && paragraphSection1.bulletPoints.length > 0 && (
 <ul className="space-y-3 mb-8">
 {paragraphSection1.bulletPoints.map((point, i) => (
 <li key={i} className="flex items-start gap-3 text-[#042940]">
 <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
 <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span className="text-[#042940]/80" data-testid={`text-paragraph-1-bullet-${i}`}>{point}</span>
 </li>
 ))}
 </ul>
 )}
 <Button 
 asChild 
 size="lg" 
 className="hidden xl:inline-flex w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
 data-testid="button-paragraph-1-cta"
 >
 <Link href="/request-a-service">Request A Service</Link>
 </Button>
 </FadeIn>
 {paragraphSection1.image && (
 <FadeIn
 className="relative rounded-[5px] overflow-hidden aspect-[4/3]"
 >
 <Image 
 src={paragraphSection1.image} 
 alt={paragraphSection1.imageAlt || ""} 
 fill 
 sizes="(max-width: 1280px) 100vw, 50vw" 
 className="object-cover" 
 loading="lazy" 
 />
 </FadeIn>
 )}
 <Button
 asChild
 size="lg"
 className="xl:hidden w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
 data-testid="button-paragraph-1-cta-mobile"
 >
 <Link href="/request-a-service">Request A Service</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Commercial Waste Services - Shared Component */}
 <CommercialWasteServices />

 {/* How It Works Section - Matching Homepage Design Exactly */}
 <section id="process" aria-labelledby="process-heading" className="py-16 md:py-24 bg-white relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-8">
 <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 Our Process
 </div>
 <h2 id="process-heading" className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
 How It Works
 </h2>
 <p className="text-lg text-[#042940]/70">
 {processSubtitle || "A simple, transparent process designed to get your problem solved fast."}
 </p>
 </div>

 <div className={`grid md:grid-cols-2 ${processSteps.length <= 3 ? 'lg:grid-cols-3 max-w-5xl mx-auto' : 'lg:grid-cols-5'} gap-3`}>
 {processSteps.map((step, i) => (
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

 {/* Paragraph Section 2 */}
 <section className="py-16 md:py-24 bg-white" aria-labelledby="paragraph-section-2-heading" data-testid="section-paragraph-2">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
 {paragraphSection2.image && (
 <FadeIn
 className="order-2 xl:order-1 relative rounded-[5px] overflow-hidden aspect-[4/3]"
 >
 <Image 
 src={paragraphSection2.image} 
 alt={paragraphSection2.imageAlt || ""} 
 fill 
 sizes="(max-width: 1280px) 100vw, 50vw" 
 className="object-cover" 
 loading="lazy" 
 />
 </FadeIn>
 )}
 <FadeIn
 className="order-1 xl:order-2"
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-paragraph-2">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 {paragraphSection2.badge}
 </div>
 <h2 id="paragraph-section-2-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter" data-testid="heading-paragraph-2">
 {paragraphSection2.heading}
 </h2>
 <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-8" data-testid="text-paragraph-2-body">
 {paragraphSection2.body}
 </p>
 {paragraphSection2.bulletPoints && paragraphSection2.bulletPoints.length > 0 && (
 <ul className="space-y-3 mb-8">
 {paragraphSection2.bulletPoints.map((point, i) => (
 <li key={i} className="flex items-start gap-3 text-[#042940]">
 <div className="w-6 h-6 rounded-full bg-[#c5d520] flex items-center justify-center flex-shrink-0 mt-0.5">
 <svg className="w-3.5 h-3.5 text-[#042940]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span className="text-[#042940]/80" data-testid={`text-paragraph-2-bullet-${i}`}>{point}</span>
 </li>
 ))}
 </ul>
 )}
 <Button 
 asChild 
 size="lg" 
 className="hidden xl:inline-flex w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
 data-testid="button-paragraph-2-cta"
 >
 <Link href="/request-a-service">Request A Service</Link>
 </Button>
 </FadeIn>
 <Button
 asChild
 size="lg"
 className="order-3 xl:hidden w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full shadow-[0_0_20px_rgba(197,213,32,0.3)]"
 data-testid="button-paragraph-2-cta-mobile"
 >
 <Link href="/request-a-service">Request A Service</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Zipcode Checker Section - Matching Homepage Design Exactly */}
 <section className="py-16 md:py-24 bg-white relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-8 relative z-10">
 <FadeIn
 className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
 >
 {/* Background Grid & Glow */}
 <div 
 className="absolute inset-0 opacity-10 mix-blend-overlay" 
 style={{ 
 backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.png)`, 
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
 {/* Center Glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
 <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></div>
 Service Availability
 </div>
 
 <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter">
 Check If We Service <span className="text-[#c5d520]">Your Area.</span>
 </h2>
 <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10">
 Enter your zip code below to instantly see if our network of local vendors covers your location.
 </p>
 
 <ZipCheckForm />
 </div>
 </FadeIn>
 </div>
 </section>

 {/* Stats Section - shared with homepage */}
 <StatsSection />


 {/* FAQ Section - Matching Homepage Design Exactly */}
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
 <FadeIn
 key={i}
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
 </FadeIn>
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

 {/* Location Section - Shared (matches homepage) */}
 <LocationSection />

 {/* Final CTA Banner - Uses shared FinalCtaSection (matches homepage) */}
 <FinalCtaSection image={ctaImage} imageAlt={ctaImageAlt} />
 </main>

 {/* Footer - Shared Component */}
 <Footer />
 </div>
 );
}
