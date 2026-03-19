"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  description: string;
  faqs: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    description: "Get answers to the most common questions about Tenth Rock, our services, and how we operate across the nation.",
    faqs: [
      {
        question: "What is Tenth Rock Solutions?",
        answer: "Tenth Rock Solutions is a nationwide commercial waste management company that provides centralized waste services across 48 states. We simplify waste management for multi-location businesses through a single point of contact, consolidated billing, and transparent performance tracking."
      },
      {
        question: "What areas do you service?",
        answer: "We provide waste management services across 48 states. Our extensive network of vetted hauler partners ensures consistent, reliable coverage whether your locations are in major metropolitan areas or rural communities."
      },
      {
        question: "How quickly can you arrange a pickup?",
        answer: "For emergency requests, we can often be on-site within hours. For standard scheduled services, we can typically start within 24-48 hours of account setup. Our rapid response capability is one of our core differentiators."
      },
      {
        question: "What types of waste do you handle?",
        answer: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request through certified partners."
      },
      {
        question: "How do I get started with Tenth Rock?",
        answer: "Getting started is simple. Request a service through our website or call us directly. We'll conduct an assessment of your needs, provide a customized proposal, and can typically have service running within days of agreement."
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Billing",
    description: "Understand our transparent pricing model, flexible billing options, and how we help you optimize waste management spend.",
    faqs: [
      {
        question: "How does your pricing work?",
        answer: "Our pricing is transparent and competitive. We negotiate rates directly with haulers on your behalf, leveraging our national volume to secure the best pricing. You receive one consolidated invoice regardless of how many locations or haulers are involved."
      },
      {
        question: "Are there long-term contracts?",
        answer: "We believe in earning your business every day. While we offer contract savings for longer commitments, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."
      },
      {
        question: "Can you help reduce our waste management costs?",
        answer: "Absolutely. On average, our clients see 15-30% savings on waste management costs. We achieve this through competitive bidding, right-sizing containers, optimizing pickup frequencies, and identifying recycling rebate opportunities."
      },
      {
        question: "Do you offer consolidated billing?",
        answer: "Yes, consolidated billing is one of our core offerings. Instead of managing dozens of invoices from different haulers, you receive a single, detailed invoice from Tenth Rock that covers all your locations and services."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees, ever. Our upfront pricing model means you always know exactly what you're paying for. We clearly outline all costs in our proposals and flag any potential surcharges before they occur."
      },
    ],
  },
  {
    id: "services",
    label: "Services & Capabilities",
    description: "Learn more about our full range of commercial waste management services and how they can be tailored to your business needs.",
    faqs: [
      {
        question: "Do you handle emergency waste removal?",
        answer: "Yes, emergency waste response is one of our specialties. Whether it's a natural disaster, unexpected overflow, or urgent site cleanup, our team can mobilize resources quickly to get the situation under control."
      },
      {
        question: "Can you manage waste for events and stadiums?",
        answer: "Absolutely. We provide comprehensive waste logistics for events of all sizes, from local festivals to major stadium events. This includes pre-event planning, on-site container placement, real-time monitoring, and post-event cleanup."
      },
      {
        question: "Do you offer dumpster rentals?",
        answer: "Yes, we offer a full range of dumpster sizes and types for temporary and ongoing needs. From small 10-yard containers for office cleanouts to large 40-yard roll-offs for construction sites, we match the right container to your specific requirements."
      },
      {
        question: "What is centralized waste management?",
        answer: "Centralized waste management means having a single partner handle all waste-related services across all your locations. This includes vendor management, performance tracking, billing consolidation, and compliance monitoring, all through one dedicated account manager."
      },
      {
        question: "Can you help with store closures and remodels?",
        answer: "Yes, we specialize in project-based waste logistics for store closures, remodels, and relocations. We handle everything from container placement and scheduling to final site cleanup, ensuring your project stays on timeline and on budget."
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    description: "Discover how we help businesses meet their environmental goals through waste diversion, recycling programs, and detailed reporting.",
    faqs: [
      {
        question: "How do you help with sustainability goals?",
        answer: "We provide detailed diversion reporting and waste audits to identify recycling opportunities. Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials. We track and report on diversion rates across all your locations."
      },
      {
        question: "Do you provide recycling services?",
        answer: "Yes, we offer comprehensive recycling programs for cardboard, plastics, metals, organics, and more. We work with certified recycling partners and provide detailed reporting on your recycling volumes and diversion rates."
      },
      {
        question: "Can you help us achieve zero-waste goals?",
        answer: "We partner with businesses on their zero-waste journey by conducting waste audits, implementing targeted diversion programs, and providing the data and reporting needed to track progress toward zero-waste certifications."
      },
      {
        question: "What kind of sustainability reporting do you offer?",
        answer: "We provide comprehensive sustainability dashboards that include waste diversion rates, recycling volumes, CO2 offset calculations, and trend analysis. Reports can be generated monthly, quarterly, or annually to support your ESG reporting needs."
      },
      {
        question: "Do you handle composting services?",
        answer: "Yes, we coordinate organic waste composting for businesses that generate food waste, yard waste, or other compostable materials. We connect you with local composting facilities and track your diversion impact."
      },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItem, setOpenItem] = useState<string>("item-0");
  const accordionRef = useRef<HTMLDivElement>(null);

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory) || faqCategories[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenItem("");
    if (accordionRef.current) {
      const top = accordionRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar variant="floating" />

      {/* Hero Section */}
      <section aria-labelledby="faq-hero-heading" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#042940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stock/clean-city-hero.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#042940]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-md shadow-sm mb-6" data-testid="text-faq-tagline">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              Support Center
            </div>
            <h1 id="faq-hero-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.05] text-white mb-6" data-testid="text-faq-heading">
              Frequently Asked{" "}
              <span className="text-[#c5d520]">Questions</span>
            </h1>
            <p className="text-base text-white/70 max-w-2xl sm:mx-auto leading-relaxed" data-testid="text-faq-description">
              Find answers to common questions about our waste management services, pricing, sustainability initiatives, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <nav aria-label="FAQ categories" className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-[96px] z-40" role="tablist" data-testid="nav-faq-categories">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center gap-2 md:gap-3 py-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-faq-${cat.id}`}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`faq-panel-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                data-testid={`button-faq-category-${cat.id}`}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 outline-none min-h-[44px] ${
                  activeCategory === cat.id
                    ? "bg-[#042940] text-white shadow-md"
                    : "bg-gray-100 text-[#042940]/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* FAQ Content */}
      <section ref={accordionRef} aria-labelledby="faq-section-heading" className="py-16 md:py-24 lg:py-28 bg-[#F9F9F6]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
            id={`faq-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`tab-faq-${activeCategory}`}
          >
            {/* Section Header */}
            <div className="text-left sm:text-center mb-12 md:mb-16">
              <h2 id="faq-section-heading" className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-[#042940] mb-4" data-testid="text-faq-section-heading">
                {currentCategory.label}{" "}
                <span className="text-[#c5d520]">FAQs</span>
              </h2>
              <p className="text-[#042940]/70 text-base md:text-lg max-w-2xl sm:mx-auto leading-relaxed" data-testid="text-faq-section-description">
                {currentCategory.description}
              </p>
            </div>

            {/* Accordion - matches FaqSection.tsx pattern */}
            <div className="grid gap-4">
              {currentCategory.faqs.map((faq, i) => {
                const isOpen = openItem === `item-${i}`;

                return (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`group rounded-[5px] border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]"
                          : "bg-white border-transparent shadow-sm"
                      }`}
                    >
                      <button
                        id={`faq-trigger-${activeCategory}-${i}`}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-[5px]"
                        onClick={() => setOpenItem(isOpen ? "" : `item-${i}`)}
                        data-testid={`button-faq-item-${activeCategory}-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${activeCategory}-${i}`}
                      >
                        <span className={`text-xl font-bold transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-[#042940]"
                        }`}>
                          {faq.question}
                        </span>
                        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#c5d520] rotate-180"
                            : "bg-[#042940]/5"
                        }`}>
                          <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                            isOpen ? "text-[#042940]" : "text-[#042940]"
                          }`} />
                        </div>
                      </button>
                      <div
                        id={`faq-answer-${activeCategory}-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${activeCategory}-${i}`}
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0">
                          <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6" data-testid={`text-faq-answer-${activeCategory}-${i}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-16 md:mt-20"
          >
            <p className="text-[#042940]/70 mb-4 font-medium" data-testid="text-faq-still-questions">
              Still have questions?
            </p>
            <Link href="/contact" data-testid="link-faq-contact-us">
              <Button
                size="lg"
                className="shadow-lg min-h-[52px] whitespace-nowrap rounded-full px-8"
                data-testid="button-faq-contact-us"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
