"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  tagline?: string;
  heading?: string;
  subtitle?: string;
  faqs?: FaqItem[];
  ctaText?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const defaultFaqs: FaqItem[] = [
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

export default function FaqSection({
  tagline = "Common Questions",
  heading = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.",
  faqs = defaultFaqs,
  ctaText = "Still Have Questions?",
  ctaLabel = "Contact Us",
  ctaLink = "/contact",
}: FaqSectionProps) {
  const [openItem, setOpenItem] = useState<string>("item-0");

  const handleToggle = (key: string) => {
    if (openItem === key) return;
    setOpenItem(key);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-left sm:text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {tagline}
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight">{heading}</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <FadeIn
              key={i}
            >
              <div 
                className={`group rounded-[5px] border transition-colors duration-300 overflow-hidden ${
                  openItem === `item-${i}` 
                    ? "bg-[#042940] border-[#042940] shadow-xl" 
                    : "bg-white border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"
                }`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                  onClick={() => handleToggle(`item-${i}`)}
                  aria-expanded={openItem === `item-${i}`}
                  data-testid={`faq-trigger-${i}`}
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
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openItem === `item-${i}` ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  aria-hidden={openItem !== `item-${i}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 pt-0 min-h-[180px] md:min-h-[160px]">
                      <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-16 text-left sm:text-center">
           <p className="text-primary/70 mb-4 font-medium">{ctaText}</p>
           <Button size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap rounded-full" asChild>
              <Link href={ctaLink}>{ctaLabel}</Link>
           </Button>
        </div>
      </div>
    </section>
  );
}
