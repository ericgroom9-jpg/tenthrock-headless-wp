"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";
import { PhoneInput } from "@/components/ui/phone-input";
import { Phone, Check, ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const CommercialWasteServices = dynamic(() => import("@/components/shared/CommercialWasteServices"));
const CtaBannerSection = dynamic(() => import("@/components/shared/CtaBannerSection"));
const CaseStudySection = dynamic(() => import("@/components/shared/CaseStudySection"));
const FaqSection = dynamic(() => import("@/components/shared/FaqSection"));
const LocationSection = dynamic(() => import("@/components/shared/LocationSection"));
const FinalCtaSection = dynamic(() => import("@/components/shared/FinalCtaSection"));
const ProcessSection = dynamic(() => import("@/components/shared/ProcessSection"));
import { getStateData, getStateName } from "@/lib/data/state-cities";
import { stateOutlines } from "@/lib/data/state-outlines";
import { getStateLocationContent } from "@/lib/data/state-location-content";

const imgPlaceholder = "/images/stock/service-centralized-program.jpg";
const imgInfoBlock = "/images/stock/service-dumpster-rental.jpg";


function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function LocationTemplatePage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "new-york";
  const locationName = formatSlug(slug);
  const stateData = getStateData(slug);
  const stateContent = getStateLocationContent(slug);

  const aboutAccordions = [
    {
      title: `About ${locationName} Waste Solutions`,
      benefits: stateContent?.bullets || [
        "Emergency waste removal for local businesses",
        "Rapid response for compactor failures and waste overflow",
        "Perishable inventory disposal and bulk debris removal",
      ],
      description: stateContent?.aboutDesc || "Our local crews are fully licensed, insured, and trained to handle commercial waste for businesses of all sizes. From emergency overflow pickups to scheduled dumpster service, we deliver fast, reliable waste solutions backed by our nationwide infrastructure.",
    },
    {
      title: `Trusted by ${locationName} Businesses`,
      benefits: [],
      description: stateContent?.trustedDesc || "Our operations in this area date back over a decade. We've served hundreds of commercial clients and have deep relationships with local waste facilities, ensuring efficient routing and competitive pricing for your business.",
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Interior Hero */}
      <section
        className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden"
        aria-labelledby="location-hero-heading"
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
            <FadeIn
            >
              <h1
                id="location-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6 max-w-[800px] lg:max-w-[950px]"
              >
                Waste Management Services in {locationName}
              </h1>
              <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed">
                {stateContent?.subtitle || "On-demand waste removal, dumpster rentals, and managed programs for businesses across the region. Local crews, nationwide support."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-location-cta"
                >
                  Request A Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-location-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  727.510.5454
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Location + Contact Form */}
      <section className="relative bg-white" aria-labelledby="about-location-heading">
        <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - About Location Accordions */}
            <FadeIn
              className="space-y-0"
            >
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
                      className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight text-left"
                    >
                      {section.title}
                    </h2>
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        openAccordion === idx
                          ? "bg-primary border-primary"
                          : "border-primary/20 group-hover:border-primary/40"
                      }`}
                    >
                      {openAccordion === idx ? (
                        <ArrowDown className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      )}
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

            {/* Right Column - Contact Form */}
            <FadeIn
              className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 sm:p-8 lg:-mt-32 relative z-10"
            >
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#042940] mb-2">Request a Quote</h3>
                <p className="text-[#042940]/70 text-sm">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/book-a-call");
                }}
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
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
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
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
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
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#042940] mb-2">
                      Phone number
                    </label>
                    <PhoneInput
                      id="phone"
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
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors"
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-[#042940] mb-2">
                      I'm interested in help with:
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => handleInputChange("interest", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                      data-testid="select-interest"
                    >
                      <option value="" disabled>Select one...</option>
                      <option value="emergency-waste-removal">Emergency Waste Removal</option>
                      <option value="specialized-project-logistics">Specialized Project Logistics</option>
                      <option value="dumpsters-containers">Dumpsters & Temporary Containers</option>
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
                    className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] hover:shadow-[0_0_30px_rgba(197,213,32,0.5)] transition-all"
                    data-testid="button-form-submit"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Another Informational Block */}
      <section className="py-16 md:py-24 bg-white overflow-hidden" aria-labelledby="info-block-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <FadeIn
            >
              <h2
                id="info-block-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
              >
                {stateContent?.thirdHeading || "Why Local Businesses Choose Us"}
              </h2>
              <p className="text-primary/70 leading-relaxed mb-8">
                {stateContent?.thirdDesc || "Managing waste across multiple locations means dealing with different haulers, inconsistent pricing, and service gaps. Tenth Rock eliminates all of that. We vet and manage local vendors so you get reliable pickups, transparent invoicing, and one number to call when something goes wrong. Whether you need a one-time cleanout or ongoing scheduled service, our team handles the coordination so yours doesn't have to."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-info-cta"
                >
                  Get a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#042940]/20 text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-info-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  727.510.5454
                </Button>
              </div>
            </FadeIn>

            <FadeIn
              className="relative rounded-[5px] overflow-hidden h-[350px] md:h-[480px] lg:h-[640px]"
            >
              <Image
                src={imgInfoBlock}
                alt="Commercial waste services in action"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commercial Waste Services (same as homepage) */}
      <CommercialWasteServices />

      {/* How It Works (same as homepage) */}
      <ProcessSection />

      {/* CTA Banner (same as homepage) */}
      <CtaBannerSection />

      {/* Cities We Serve Section */}
      {stateData && (
        <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="cities-we-serve-heading" data-testid="section-cities-we-serve">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left - State Map Visual */}
              <FadeIn
                className="lg:sticky lg:top-32"
              >
                <figure className="relative bg-[#042940] rounded-[5px] overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 shadow-2xl" data-testid="map-state-visual" role="img" aria-label={`Service coverage map for ${locationName}`}>
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
                    <span className="text-7xl md:text-8xl font-bold text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
                      {stateData.abbreviation}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tighter" data-testid="text-state-name">
                      {locationName}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 max-w-xs">
                      Serving {stateData.cities.length}+ cities across {locationName} with local vendor networks and dedicated support.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5d520]/10 border border-[#c5d520]/30 text-[#c5d520] font-bold text-sm" data-testid="text-cities-count">
                      <span className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse" aria-hidden="true"></span>
                      {stateData.cities.length} Cities Covered
                    </div>
                  </div>
                </figure>
              </FadeIn>

              {/* Right - Cities List */}
              <FadeIn
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6" data-testid="badge-cities-we-serve">
                  <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                  Service Areas
                </div>
                <h2 id="cities-we-serve-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-4 leading-tight tracking-tighter" data-testid="heading-cities-we-serve">
                  Cities We Serve in {locationName}
                </h2>
                <p className="text-[#042940]/70 text-base md:text-lg leading-relaxed mb-10" data-testid="text-cities-description">
                  Our network of vetted local vendors ensures fast, reliable waste management services across {locationName}. Select a city below to learn more about coverage in your area.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 list-none p-0 m-0" role="list" aria-label={`Cities served in ${locationName}`} data-testid="list-cities">
                  {stateData.cities.map((city, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 py-3 border-b border-[#042940]/5"
                      data-testid={`city-item-${i}`}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#c5d520]/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <svg className="w-3 h-3 text-[#c5d520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#042940] font-medium text-sm md:text-base" data-testid={`text-city-name-${i}`}>{city}</span>
                    </li>
                  ))}
                </ul>

              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Case Study (same as homepage) */}
      <CaseStudySection />

      {/* FAQ */}
      <FaqSection faqs={stateContent?.faqs} />

      {/* Where to Find Us (same as homepage) */}
      <LocationSection />

      {/* Final CTA (same as homepage) */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
