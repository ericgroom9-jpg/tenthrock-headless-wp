"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { PhoneInput } from "@/components/ui/phone-input";
import { Phone, Check, ArrowUpRight, ArrowDown, ArrowRight, MapPin, Loader2 } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { stateOutlines } from "@/lib/data/state-outlines";
import { cityToSlug } from "@/lib/data/state-cities";
import { submitGravityForm } from "@/lib/gf/submit-client";
import { GF_FORM_IDS } from "@/lib/gf/form-ids";
import { scrollToRequestForm } from "@/lib/utils/scroll-to-request-form";

const CommercialWasteServices = dynamic(() => import("@/components/shared/CommercialWasteServices"));
const CtaBannerSection = dynamic(() => import("@/components/shared/CtaBannerSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));
const ProcessSection = dynamic(() => import("@/components/shared/ProcessSection"));

const imgInfoBlock = "/images/stock/service-dumpster-rental-v2.webp";

interface LocationTemplateClientProps {
 slug: string;
 locationName: string;
 heroSubtitle: string;
 heroImage: string;
 aboutDescription: string;
 aboutBullets: string[];
 trustedDescription: string;
 infoHeading: string;
 infoBody: string;
 abbreviation: string;
 cities: string[];
 faqs: { question: string; answer: string }[];
}

export default function LocationTemplateClient({
 slug,
 locationName,
 heroSubtitle,
 heroImage,
 aboutDescription,
 aboutBullets,
 trustedDescription,
 infoHeading,
 infoBody,
 cities,
 faqs,
}: LocationTemplateClientProps) {
 const router = useRouter();

 const aboutAccordions = [
 {
 title: `About ${locationName} Waste Solutions`,
 benefits: aboutBullets,
 description: aboutDescription,
 },
 {
 title: `Trusted by ${locationName} Businesses`,
 benefits: [] as string[],
 description: trustedDescription,
 },
 ];

 const [openAccordion, setOpenAccordion] = useState<number>(0);
 const [formData, setFormData] = useState({
 firstName: "",
 lastName: "",
 email: "",
 phone: "",
 company: "",
 interest: "",
 message: "",
 consent: false,
 });
 const [submitting, setSubmitting] = useState(false);
 const [submitError, setSubmitError] = useState<string | null>(null);

 const handleInputChange = (field: string, value: string | boolean) => {
 setFormData((prev) => ({ ...prev, [field]: value }));
 };

 const handleLocationFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setSubmitError(null);
 setSubmitting(true);
 const result = await submitGravityForm(e.currentTarget, GF_FORM_IDS.locationInquiry);
 setSubmitting(false);
 if (!result.ok) {
 setSubmitError(result.error || "Submission failed. Please try again.");
 return;
 }
 router.push(result.redirectUrl || "/");
 };

 return (
 <main className="min-h-screen bg-white">
 <Navbar />

 <section
 className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden"
 aria-labelledby="location-hero-heading"
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
 <div className="absolute inset-0 bg-[#042940]/85 md:bg-transparent md:bg-gradient-to-r md:from-[#042940] md:via-[#042940]/80 md:via-60% md:to-[#042940]/15" />
 </div>
 <div className="relative container mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20">
 <div className="max-w-2xl lg:max-w-5xl">
 <FadeIn>
 <h1
 id="location-hero-heading"
 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6 max-w-[800px] lg:max-w-none [text-wrap:balance]"
 >
 Waste Management Services in&nbsp;{locationName}
 </h1>
 <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md lg:max-w-4xl leading-relaxed [text-wrap:balance]">
 {heroSubtitle}
 </p>
 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button
 size="lg"
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-location-cta"
 asChild
 >
 <a href="#request-a-service" onClick={scrollToRequestForm}>Request A Service</a>
 </Button>
 <Button
 size="lg"
 variant="outline"
 className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-location-phone"
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

 <section className="relative bg-white" aria-labelledby="about-location-heading">
 <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-16">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
 <FadeIn className="space-y-0">
 {aboutAccordions.map((section, idx) => (
 <div key={idx}>
 {idx > 0 && <div className="h-px bg-primary/10 my-6" />}
 <button
 onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
 className="w-full flex items-center justify-between gap-4 group py-2"
 aria-expanded={openAccordion === idx}
 data-testid={`accordion-about-${idx}`}
 >
 <h2
 id={idx === 0 ? "about-location-heading" : undefined}
 className="text-3xl font-medium text-primary tracking-tighter leading-tight text-left"
 >
 {section.title}
 </h2>
 <div
 className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
 openAccordion === idx
 ? "border-2 border-[#042940] bg-transparent"
 : "bg-[#042940] group-hover:bg-[#c5d520]"
 }`}
 >
 <ArrowRight
 className={`w-5 h-5 transition-transform ${
 openAccordion === idx
 ? "text-[#042940] -rotate-45"
 : "text-white group-hover:text-[#042940]"
 }`}
 />
 </div>
 </button>

 {openAccordion === idx && (
 <div
 className="overflow-hidden"
 style={{ animation: "fadeIn 0.3s ease-out" }}
 >
 <div className="pt-4 pb-2 space-y-5">
 {section.benefits.length > 0 && (
 <div className="space-y-3">
 {section.benefits.map((benefit, bIdx) => (
 <div key={bIdx} className="flex items-start gap-3">
 <Check className="w-5 h-5 text-[#c5d520] mt-0.5 shrink-0" />
 <span className="text-primary/80 font-medium">{benefit}</span>
 </div>
 ))}
 </div>
 )}
 <p className="text-primary/70 leading-relaxed">{section.description}</p>
 </div>
 </div>
 )}
 </div>
 ))}
 </FadeIn>

 <FadeIn id="request-a-service" className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 sm:p-8 lg:-mt-32 relative z-10 scroll-mt-24">
 <div className="mb-6">
 <h3 className="text-xl md:text-2xl font-bold text-[#042940] mb-2">Request a Service</h3>
 <p className="text-[#042940]/70 text-sm">Fill out the form below and we'll get back to you shortly.</p>
 </div>
 <form
 className="space-y-5"
 onSubmit={handleLocationFormSubmit}
 data-testid="form-location-quote"
 >
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label htmlFor="firstName" className="block text-sm font-medium text-[#042940] mb-2">
 First name
 </label>
 <input
 type="text"
 id="firstName"
 name="input_1"
 required
 placeholder="Enter your first name"
 value={formData.firstName}
 onChange={(e) => handleInputChange("firstName", e.target.value)}
 className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
 data-testid="input-firstName"
 />
 </div>
 <div>
 <label htmlFor="lastName" className="block text-sm font-medium text-[#042940] mb-2">
 Last name
 </label>
 <input
 type="text"
 id="lastName"
 name="input_2"
 required
 placeholder="Enter your last name"
 value={formData.lastName}
 onChange={(e) => handleInputChange("lastName", e.target.value)}
 className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
 data-testid="input-lastName"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-[#042940] mb-2">
 Email
 </label>
 <input
 type="email"
 id="email"
 name="input_3"
 required
 placeholder="Enter your email"
 value={formData.email}
 onChange={(e) => handleInputChange("email", e.target.value)}
 className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
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
 value={formData.phone}
 onChange={(value) => handleInputChange("phone", value)}
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
 <input
 type="text"
 id="company"
 name="input_5"
 required
 placeholder="Enter your company name"
 value={formData.company}
 onChange={(e) => handleInputChange("company", e.target.value)}
 className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
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
 value={formData.interest}
 onChange={(e) => handleInputChange("interest", e.target.value)}
 className={`w-full h-12 pl-4 pr-10 text-sm border border-[#042940]/20 rounded-[5px] bg-white ${formData.interest ? "text-[#042940]" : "text-[#042940]/40"} focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat`}
 data-testid="select-interest"
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
 value={formData.message}
 onChange={(e) => handleInputChange("message", e.target.value)}
 placeholder="Type your message..."
 className="w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors"
 data-testid="textarea-message"
 />
 </div>

 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
 <label className="flex items-center gap-3 cursor-pointer" data-testid="checkbox-consent">
 <input
 type="checkbox"
 name="input_8.1"
 value="1"
 required
 checked={formData.consent}
 onChange={(e) => handleInputChange("consent", e.target.checked)}
 className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]"
 />
 <span className="text-sm text-[#042940]/80">
 I accept the <a href="/privacy-policy" className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-location-privacy-policy">Privacy Policy</a>
 </span>
 </label>
 <Button
 type="submit"
 size="lg"
 disabled={submitting}
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] hover:shadow-[0_0_30px_rgba(197,213,32,0.5)] transition-all whitespace-nowrap"
 data-testid="button-form-submit"
 >
 {submitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</>) : "Submit Request"}
 </Button>
 </div>
 {submitError && (
 <p className="text-red-600 text-sm" data-testid="text-location-form-error">{submitError}</p>
 )}
 </form>
 </FadeIn>
 </div>
 </div>
 </section>

 <section className="py-8 md:py-16 bg-white overflow-hidden" aria-labelledby="info-block-heading">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
 <FadeIn>
 <h2
 id="info-block-heading"
 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
 >
 {infoHeading}
 </h2>
 <p className="text-primary/70 leading-relaxed mb-8">
 {infoBody}
 </p>
 <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button
 size="lg"
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-info-cta"
 asChild
 >
 <a href="#request-a-service" onClick={scrollToRequestForm}>Request A Service</a>
 </Button>
 <Button
 size="lg"
 variant="outline"
 className="w-full sm:w-auto border-[#042940]/20 text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-info-phone"
 asChild
 >
 <a href="tel:+17275105454">
 <Phone className="mr-2 h-5 w-5" />
 727.510.5454
 </a>
 </Button>
 </div>
 </FadeIn>

 <FadeIn className="relative rounded-[5px] overflow-hidden h-[350px] md:h-[480px] lg:h-[640px]">
 <Image
 src={imgInfoBlock}
 alt="Commercial waste services in action"
 fill
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
 className="object-cover"
 loading="lazy"
 />
 </FadeIn>

 <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button
 size="lg"
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-info-cta-mobile"
 asChild
 >
 <a href="#request-a-service" onClick={scrollToRequestForm}>Request A Service</a>
 </Button>
 <Button
 size="lg"
 variant="outline"
 className="w-full sm:w-auto border-[#042940]/20 text-[#042940] active:bg-[#042940] active:text-white transition-all transform active:scale-95 min-h-[52px] whitespace-nowrap"
 data-testid="button-info-phone-mobile"
 asChild
 >
 <a href="tel:+17275105454">
 <Phone className="mr-2 h-5 w-5" />
 727.510.5454
 </a>
 </Button>
 </div>
 </div>
 </div>
 </section>

 <CommercialWasteServices />

 <ProcessSection />

 <CtaBannerSection />

 {cities.length > 0 && (
 <section className="py-8 md:py-16 bg-[#F9F9F6]" aria-labelledby="cities-we-serve-heading" data-testid="section-cities-we-serve">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-stretch">
 <FadeIn className="lg:h-full">
 <figure className="relative bg-[#042940] rounded-[5px] overflow-hidden aspect-square lg:aspect-auto lg:h-full max-w-md mx-auto lg:mx-0 lg:max-w-none shadow-2xl" data-testid="map-state-visual" role="img" aria-label={`Service coverage map for ${locationName}`}>
 <div className="absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
 {stateOutlines[slug] && (
 <svg
 className="absolute inset-0 w-full h-full pointer-events-none"
 viewBox={stateOutlines[slug].viewBox}
 preserveAspectRatio="xMidYMid meet"
 aria-hidden="true"
 >
 <defs>
 <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#c5d520" stopOpacity="0.15" />
 <stop offset="100%" stopColor="#c5d520" stopOpacity="0.05" />
 </linearGradient>
 </defs>
 <path
 d={stateOutlines[slug].path}
 fill="url(#stateGradient)"
 stroke="#c5d520"
 strokeWidth="1.5"
 strokeOpacity="0.25"
 />
 </svg>
 )}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c5d520]/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
 <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
 <div className="w-20 h-20 rounded-full bg-[#c5d520]/20 border-2 border-[#c5d520]/40 flex items-center justify-center mb-6" aria-hidden="true">
 <MapPin className="w-10 h-10 text-[#c5d520]" />
 </div>
 <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tighter" data-testid="text-state-name">
 {locationName}
 </h3>
 <p className="text-white/70 text-sm mb-6 max-w-xs">
 Serving {cities.length}+ cities across {locationName} with local vendor networks and dedicated support.
 </p>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5d520]/10 border border-[#c5d520]/30 text-[#c5d520] font-bold text-sm" data-testid="text-cities-count">
 <span className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse" aria-hidden="true"></span>
 {cities.length} Cities Covered
 </div>
 </div>
 </figure>
 </FadeIn>

 <FadeIn>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-cities-we-serve">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 Service Areas
 </div>
 <h2 id="cities-we-serve-heading" className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 leading-tight tracking-tighter" data-testid="heading-cities-we-serve">
 Cities We Serve in {locationName}
 </h2>
 <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-10" data-testid="text-cities-description">
 Our network of vetted local vendors ensures fast, reliable waste management services across {locationName}. Select a city below to learn more about coverage in your area.
 </p>

 <ul className="columns-1 sm:columns-2 gap-x-8 list-none p-0 m-0" role="list" aria-label={`Cities served in ${locationName}`} data-testid="list-cities">
 {cities
 .slice()
 .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
 .map((city, i) => (
 <li
 key={i}
 className="border-b border-[#042940]/5 break-inside-avoid"
 data-testid={`city-item-${i}`}
 >
 <Link
 href={`/locations/${slug}/${cityToSlug(city)}`}
 className="flex items-center gap-3 py-3 group min-h-[44px]"
 data-testid={`link-city-${i}`}
 >
 <div className="w-5 h-5 rounded-full bg-[#c5d520]/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
 <svg className="w-3 h-3 text-[#c5d520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span className="text-[#042940] font-medium text-sm md:text-base group-hover:text-[#c5d520] group-active:text-[#c5d520] transition-colors" data-testid={`text-city-name-${i}`}>{city}</span>
 <ArrowUpRight className="w-3.5 h-3.5 text-[#042940]/30 group-hover:text-[#c5d520] transition-colors ml-auto flex-shrink-0" aria-hidden="true" />
 </Link>
 </li>
 ))}
 </ul>
 </FadeIn>
 </div>
 </div>
 </section>
 )}

 <CaseStudySection />

 <FaqSection faqs={faqs.length > 0 ? faqs : undefined} />

 <LocationSection />

 <FinalCtaSection scrollToForm />

 <Footer />
 </main>
 );
}
