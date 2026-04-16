"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { PhoneInput } from "@/components/ui/phone-input";
import { Phone, Check, ArrowUpRight, ArrowDown, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const CommercialWasteServices = dynamic(() => import("@/components/shared/CommercialWasteServices"));
const CtaBannerSection = dynamic(() => import("@/components/shared/CtaBannerSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));
const ProcessSection = dynamic(() => import("@/components/shared/ProcessSection"));
import { getStateData, getStateName, getCityFromSlug, cityToSlug } from "@/lib/data/state-cities";
import { stateOutlines } from "@/lib/data/state-outlines";

const imgPlaceholder = "/images/stock/service-centralized-program.jpg";
const imgInfoBlock = "/images/stock/service-dumpster-rental.jpg";

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CityLocationPage() {
  const params = useParams();
  const stateSlug = (params?.slug as string) || "new-york";
  const citySlug = (params?.city as string) || "";
  const stateName = formatSlug(stateSlug);
  const stateData = getStateData(stateSlug);
  const cityName = getCityFromSlug(stateSlug, citySlug);

  if (!stateData || !cityName) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-medium text-[#042940] mb-4">City Not Found</h1>
          <p className="text-[#042940]/70 mb-8">We could not find that city in our service areas.</p>
          <Button asChild className="bg-[#c5d520] text-[#042940] min-h-[52px]">
            <Link href="/locations">Browse All Locations</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const aboutAccordions = [
    {
      title: `About ${cityName} Waste Solutions`,
      benefits: [
        `Emergency waste removal for ${cityName} businesses`,
        "Rapid response for compactor failures and waste overflow",
        "Perishable inventory disposal and bulk debris removal",
      ],
      description: `Businesses in ${cityName}, ${stateName} rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates fast, reliable waste removal to keep your ${cityName} facility safe, compliant, and operational.`,
    },
    {
      title: `Trusted by ${cityName} Businesses`,
      benefits: [],
      description: `Our operations in ${cityName} are backed by deep relationships with local waste facilities and hauling partners across ${stateName}. We've served commercial clients throughout the area for years, ensuring efficient routing and competitive pricing for your business.`,
    },
  ];

  const faqs = [
    { question: `How quickly can you arrange a waste pickup in ${cityName}?`, answer: `We specialize in rapid response waste services. For emergency requests in ${cityName}, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours of account setup.` },
    { question: `Do you service multiple locations outside ${cityName}?`, answer: `Yes. Tenth Rock provides commercial waste management services in all 48 states, including throughout ${stateName}. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice.` },
    { question: `What types of commercial waste do you handle in ${cityName}?`, answer: `We handle most non-hazardous commercial waste streams in ${cityName}, including general trash, recycling materials like cardboard, plastic, and metal, construction debris, organic waste, and e-waste.` },
    { question: `Are there long-term contracts for waste services in ${cityName}?`, answer: `We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in ${cityName} are available with flexible terms.` },
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const otherCities = stateData?.cities.filter((c) => cityToSlug(c) !== citySlug).slice(0, 16) || [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section
        className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden"
        aria-labelledby="city-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src={imgPlaceholder}
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
            <FadeIn>
              <nav aria-label="Breadcrumb" className="mb-6" data-testid="nav-breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-white/60">
                  <li><Link href="/locations" className="hover:text-white transition-colors" data-testid="link-breadcrumb-locations">Locations</Link></li>
                  <li><ChevronRight className="w-3 h-3" aria-hidden="true" /></li>
                  <li><Link href={`/locations/${stateSlug}`} className="hover:text-white transition-colors" data-testid="link-breadcrumb-state">{stateName}</Link></li>
                  <li><ChevronRight className="w-3 h-3" aria-hidden="true" /></li>
                  <li className="text-white font-medium" aria-current="page">{cityName}</li>
                </ol>
              </nav>

              <h1
                id="city-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6"
                data-testid="heading-city-hero"
              >
                Waste Solutions in {cityName}, {stateData?.abbreviation || stateName}
              </h1>
              <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed" data-testid="text-city-hero-subtitle">
                Commercial waste removal services for businesses in {cityName}. From large cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps companies keep sites clear, compliant, and operating smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-city-cta"
                  asChild
                >
                  <Link href="/request-a-service">Request A Service</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-city-phone"
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

      {/* About Accordion Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="about-city-heading" data-testid="section-city-about">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              {aboutAccordions.map((section, idx) => (
                <div key={idx} className={`${idx > 0 ? "mt-8 pt-8 border-t border-[#042940]/10" : ""}`}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 group py-2"
                    aria-expanded={openAccordion === idx}
                    data-testid={`accordion-about-${idx}`}
                  >
                    <h2
                      id={idx === 0 ? "about-city-heading" : undefined}
                      className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight text-left"
                    >
                      {section.title}
                    </h2>
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        openAccordion === idx
                          ? "bg-[#c5d520] border-[#c5d520] text-[#042940] rotate-180"
                          : "border-[#042940]/20 text-[#042940]/50 group-hover:border-[#c5d520] group-hover:text-[#c5d520]"
                      }`}
                    >
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </button>
                  {openAccordion === idx && (
                    <FadeIn className="mt-6">
                      {section.benefits.length > 0 && (
                        <ul className="space-y-3 mb-8" role="list">
                          {section.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#c5d520]/20 flex items-center justify-center mt-0.5 flex-shrink-0" aria-hidden="true">
                                <Check className="w-3 h-3 text-[#c5d520]" />
                              </div>
                              <span className="text-primary/80 text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className="text-primary/70 text-base leading-relaxed">
                        {section.description}
                      </p>
                    </FadeIn>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <FadeIn>
              <div className="bg-[#F9F9F6] rounded-[5px] p-6 md:p-10 lg:p-12" data-testid="form-city-contact">
                <h2 className="text-2xl md:text-3xl font-medium text-[#042940] mb-2 tracking-tight" data-testid="heading-city-form">
                  Get a Quote for {cityName}
                </h2>
                <p className="text-[#042940]/60 text-sm mb-8">
                  Fill out the form below and we'll connect you with a local representative.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city-firstName" className="block text-sm font-medium text-[#042940] mb-1.5">First Name</label>
                      <input id="city-firstName" type="text" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white" data-testid="input-city-first-name" />
                    </div>
                    <div>
                      <label htmlFor="city-lastName" className="block text-sm font-medium text-[#042940] mb-1.5">Last Name</label>
                      <input id="city-lastName" type="text" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white" data-testid="input-city-last-name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city-email" className="block text-sm font-medium text-[#042940] mb-1.5">Email</label>
                    <input id="city-email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white" data-testid="input-city-email" />
                  </div>
                  <div>
                    <label htmlFor="city-phone" className="block text-sm font-medium text-[#042940] mb-1.5">Phone</label>
                    <PhoneInput id="city-phone" value={formData.phone} onChange={(val) => handleInputChange("phone", val || "")} className="w-full" data-testid="input-city-phone" />
                  </div>
                  <div>
                    <label htmlFor="city-company" className="block text-sm font-medium text-[#042940] mb-1.5">Company</label>
                    <input id="city-company" type="text" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white" data-testid="input-city-company" />
                  </div>
                  <div>
                    <label htmlFor="city-interest" className="block text-sm font-medium text-[#042940] mb-1.5">Service Interest</label>
                    <select id="city-interest" value={formData.interest} onChange={(e) => handleInputChange("interest", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white" data-testid="select-city-interest">
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Waste Removal</option>
                      <option value="dumpster">Dumpster Rental</option>
                      <option value="recurring">Recurring Waste Service</option>
                      <option value="cleanout">Commercial Cleanout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city-message" className="block text-sm font-medium text-[#042940] mb-1.5">Message (Optional)</label>
                    <textarea id="city-message" rows={3} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full px-4 py-3 rounded-[5px] border border-[#042940]/15 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-sm bg-white resize-none" data-testid="textarea-city-message" />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
                    <label className="flex items-start gap-3 cursor-pointer" data-testid="label-city-consent">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]"
                      />
                      <span className="text-sm text-[#042940]/80">
                        I accept the <a href="/privacy-policy" className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-city-privacy-policy">Privacy Policy</a>
                      </span>
                    </label>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] hover:shadow-[0_0_30px_rgba(197,213,32,0.5)] transition-all whitespace-nowrap"
                      data-testid="button-city-form-submit"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info Block Section */}
      <section className="py-16 md:py-24 bg-[#F9F9F6]" data-testid="section-city-info">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-city-info">
                <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                Local Coverage
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] tracking-tighter mb-6 leading-tight" data-testid="heading-city-info">
                Waste Solutions Built for {cityName} Operations
              </h2>
              <p className="text-[#042940]/70 leading-relaxed mb-8" data-testid="text-city-info-desc">
                Managing waste across commercial sites in {cityName} requires reliable coordination and experienced service partners. Tenth Rock Waste Solutions works directly with local waste facilities and hauling partners throughout {stateName} to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-city-info-cta"
                  asChild
                >
                  <Link href="/request-a-service">Get a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#042940]/20 text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-city-info-phone"
                  asChild
                >
                  <a href="tel:+17275105454">
                    <Phone className="mr-2 h-5 w-5" />
                    727.510.5454
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn
              className="relative rounded-[5px] overflow-hidden h-[350px] md:h-[480px] lg:h-[640px]"
            >
              <Image
                src={imgInfoBlock}
                alt={`Commercial waste services in ${cityName}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <CommercialWasteServices />

      <ProcessSection />

      <CtaBannerSection />

      {/* Other Cities in This State */}
      {otherCities.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="other-cities-heading" data-testid="section-other-cities">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left - State Map Visual */}
              <FadeIn className="lg:sticky lg:top-32">
                <figure className="relative bg-[#042940] rounded-[5px] overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 shadow-2xl" data-testid="map-city-state-visual" role="img" aria-label={`Other service areas in ${stateName}`}>
                  <div className="absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  {stateOutlines[stateSlug] && (
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox={stateOutlines[stateSlug].viewBox}
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="cityStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#c5d520" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#c5d520" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path
                        d={stateOutlines[stateSlug].path}
                        fill="url(#cityStateGradient)"
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
                    <span className="text-7xl md:text-8xl font-bold text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
                      {stateData?.abbreviation}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tighter" data-testid="text-city-state-name">
                      {stateName}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 max-w-xs">
                      Explore other cities we serve across {stateName}.
                    </p>
                    <Link
                      href={`/locations/${stateSlug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5d520]/10 border border-[#c5d520]/30 text-[#c5d520] font-bold text-sm hover:bg-[#c5d520]/20 transition-colors min-h-[44px]"
                      data-testid="link-back-to-state"
                    >
                      View All {stateName} Cities
                    </Link>
                  </div>
                </figure>
              </FadeIn>

              {/* Right - Other Cities List */}
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-other-cities">
                  <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                  Nearby Service Areas
                </div>
                <h2 id="other-cities-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-4 leading-tight tracking-tighter" data-testid="heading-other-cities">
                  Other Cities in {stateName}
                </h2>
                <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-10" data-testid="text-other-cities-description">
                  We serve businesses across {stateName}. Explore waste management services in other cities near {cityName}.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 list-none p-0 m-0" role="list" aria-label={`Other cities served in ${stateName}`} data-testid="list-other-cities">
                  {otherCities.map((city, i) => (
                    <li
                      key={i}
                      className="border-b border-[#042940]/5"
                      data-testid={`other-city-item-${i}`}
                    >
                      <Link
                        href={`/locations/${stateSlug}/${cityToSlug(city)}`}
                        className="flex items-center gap-3 py-3 group min-h-[44px]"
                        data-testid={`link-other-city-${i}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-[#c5d520]/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <svg className="w-3 h-3 text-[#c5d520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#042940] font-medium text-sm md:text-base group-hover:text-[#c5d520] group-active:text-[#c5d520] transition-colors" data-testid={`text-other-city-name-${i}`}>{city}</span>
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

      <FaqSection faqs={faqs} />

      <LocationSection />

      <FinalCtaSection />

      <Footer />
    </main>
  );
}
