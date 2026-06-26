"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { defaultFaqCategories, type FaqCategory } from "@/lib/data/faq-defaults";

import type { FaqPageTemplateData, GlobalSectionsData } from "@/lib/wordpress";

interface FaqPageProps {
  categories?: FaqCategory[];
  acf?: FaqPageTemplateData | null;
  globalSections?: GlobalSectionsData | null;
}

export default function FaqPage({ categories, acf, globalSections }: FaqPageProps) {
  const faqCategories = categories && categories.length > 0 ? categories : defaultFaqCategories;
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]?.id || "general");
  const [openItem, setOpenItem] = useState<string>("item-0");
  const accordionRef = useRef<HTMLDivElement>(null);
  const answerContentRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const [answerHeights, setAnswerHeights] = useState<number[]>([]);

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory) || faqCategories[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenItem("item-0");
    if (accordionRef.current) {
      const top = accordionRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const measure = () => {
      const heights = currentCategory.faqs.map((_, i) => {
        const el = answerContentRefs.current.get(i);
        return el ? el.scrollHeight : 0;
      });
      setAnswerHeights((prev) =>
        prev.length === heights.length && prev.every((h, i) => h === heights[i]) ? prev : heights
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeCategory, currentCategory.faqs]);

  const maxAnswerHeight = answerHeights.length > 0 ? Math.max(...answerHeights, 0) : 0;
  const openIndex = openItem ? parseInt(openItem.replace("item-", ""), 10) : -1;
  const openHeight = openIndex >= 0 ? answerHeights[openIndex] || 0 : 0;
  const gridPaddingBottom = Math.max(maxAnswerHeight - openHeight, 0);

  return (
    <>
      <Navbar variant="floating" />

      {/* Hero Section */}
      <section aria-labelledby="faq-hero-heading" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#042940]">
        <div className="absolute inset-0 z-0">
          <Image
            src={acf?.heroImage || "/images/stock/clean-city-hero.webp"}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#042940]/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042940]/80 via-[#042940]/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left sm:text-center">
          <FadeIn
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-md shadow-sm mb-6" data-testid="text-faq-tagline">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              {acf?.heroTagline || "Support Center"}
            </div>
            <h1 id="faq-hero-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.05] text-white mb-6" data-testid="text-faq-heading">
              {acf?.heroHeading || "Frequently Asked"}{" "}
              <span className="text-[#c5d520]">{acf?.heroHeadingHighlight || "Questions"}</span>
            </h1>
            <p className="text-base text-white/70 max-w-2xl sm:mx-auto leading-relaxed" data-testid="text-faq-description">
              {acf?.heroSubtitle || "Find answers to common questions about our waste management services, pricing, sustainability initiatives, and more."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Navigation */}
      <nav aria-label="FAQ categories" className="bg-white/95 backdrop-blur-sm border-b border-gray-100 xl:sticky xl:top-[96px] xl:z-40" role="tablist" data-testid="nav-faq-categories">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex flex-col md:flex-row md:overflow-x-auto md:scrollbar-hide md:-mx-0 md:px-0 md:justify-center gap-2 md:gap-3 py-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-faq-${cat.id}`}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`faq-panel-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                data-testid={`button-faq-category-${cat.id}`}
                className={`w-full md:w-auto md:whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 md:shrink-0 focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 outline-none min-h-[44px] ${
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
      <section ref={accordionRef} aria-labelledby="faq-section-heading" className="pt-8 pb-6 md:py-16 lg:py-20 bg-[#F9F9F6]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn
            key={activeCategory}
            className="max-w-3xl mx-auto"
            id={`faq-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`tab-faq-${activeCategory}`}
          >
            {/* Section Header */}
            <div className="text-left sm:text-center mb-6 md:mb-16">
              <h2 id="faq-section-heading" className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-[#042940] mb-4" data-testid="text-faq-section-heading">
                {currentCategory.label}{" "}
                <span className="text-[#c5d520]">FAQs</span>
              </h2>
              <p className="text-[#042940]/70 text-base md:text-lg max-w-2xl sm:mx-auto leading-relaxed" data-testid="text-faq-section-description">
                {currentCategory.description}
              </p>
            </div>

            {/* Accordion - matches FaqSection.tsx pattern */}
            <div
              className="grid gap-4 transition-[padding] duration-300 ease-in-out"
              style={{ paddingBottom: `${gridPaddingBottom}px` }}
            >
              {currentCategory.faqs.map((faq, i) => {
                const isOpen = openItem === `item-${i}`;

                return (
                  <FadeIn
                    key={`${activeCategory}-${i}`}
                  >
                    <div
                      className={`group rounded-[5px] border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-[#042940] border-[#042940] shadow-xl"
                          : "bg-white border-transparent shadow-sm"
                      }`}
                    >
                      <h3 className="m-0">
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
                      </h3>
                      <div
                        id={`faq-answer-${activeCategory}-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${activeCategory}-${i}`}
                        className="transition-[height,opacity] duration-300 ease-in-out overflow-hidden"
                        style={{
                          height: isOpen ? `${answerHeights[i] ?? 0}px` : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div
                          ref={(el) => {
                            if (el) answerContentRefs.current.set(i, el);
                            else answerContentRefs.current.delete(i);
                          }}
                          className="px-6 md:px-8 pb-8 pt-0"
                        >
                          <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6" data-testid={`text-faq-answer-${activeCategory}-${i}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          {/* Contact CTA */}
          <FadeIn
            className="text-center mt-8 md:mt-20"
          >
            <p className="text-[#042940]/70 mb-4 font-medium" data-testid="text-faq-still-questions">
              {acf?.ctaText || "Still have questions?"}
            </p>
            <Link href={acf?.ctaLink || "/contact"} className="block sm:inline-block w-full sm:w-auto" data-testid="link-faq-contact-us">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap rounded-full px-8"
                data-testid="button-faq-contact-us"
              >
                {acf?.ctaLabel || "Contact Us"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
