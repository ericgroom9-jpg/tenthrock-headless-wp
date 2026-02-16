"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { Phone, Check, ArrowUpRight, ArrowDown } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CommercialWasteServices from "@/components/shared/CommercialWasteServices";
import CtaBannerSection from "@/components/shared/CtaBannerSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import ProcessSection from "@/components/shared/ProcessSection";

const imgPlaceholder = "/images/stock/service-centralized-program.jpg";
const imgInfoBlock = "/images/stock/service-dumpster-rental.jpg";
const aboutAccordions = [
  {
    title: "About Location",
    benefits: [
      "Fully licensed and insured local crews",
      "Same-day emergency response available",
      "Dedicated account manager for your region",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "History in Location",
    benefits: [],
    description:
      "Our operations in this area date back over a decade. We've served hundreds of commercial clients and have deep relationships with local waste facilities, ensuring efficient routing and competitive pricing for your business.",
  },
];


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
          <img
            src={imgPlaceholder}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                id="location-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6 max-w-[800px] lg:max-w-[950px]"
              >
                {locationName}
              </h1>
              <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-location-cta"
                >
                  Request a Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-location-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (888) 555-0123
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Location + Contact Form */}
      <section className="relative bg-white" aria-labelledby="about-location-heading">
        <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - About Location Accordions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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

                  <AnimatePresence initial={false}>
                    {openAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                      <option value="emergency">Emergency Waste Removal</option>
                      <option value="dumpster">Dumpster Rental</option>
                      <option value="decommission">Store Decommissioning</option>
                      <option value="event">Event Waste Logistics</option>
                      <option value="centralized">Centralized Program</option>
                      <option value="maintenance">Compactor Maintenance</option>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Another Informational Block */}
      <section className="py-16 md:py-24 bg-white overflow-hidden" aria-labelledby="info-block-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                id="info-block-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
              >
                Another Informational Block
              </h2>
              <p className="text-primary/70 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-info-cta"
                >
                  Call to Action
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#042940]/20 text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                  data-testid="button-info-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (123) 456 - 7890
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[5px] overflow-hidden h-[350px] md:h-[480px] lg:h-[640px]"
            >
              <img
                src={imgInfoBlock}
                alt="Commercial waste services in action"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Waste Services (same as homepage) */}
      <CommercialWasteServices />

      {/* How It Works (same as homepage) */}
      <ProcessSection />

      {/* CTA Banner (same as homepage) */}
      <CtaBannerSection />

      {/* Case Study (same as homepage) */}
      <CaseStudySection />

      {/* FAQ (same as homepage) */}
      <FaqSection />

      {/* Where to Find Us (same as homepage) */}
      <LocationSection />

      {/* Final CTA (same as homepage) */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
