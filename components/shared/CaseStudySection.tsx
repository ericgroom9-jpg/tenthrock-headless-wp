"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  thumbImages: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Case Study:",
    subtitle: "National Retail Rollout",
    description:
      "A national retail chain with 200+ locations was managing waste through dozens of local haulers, each with different pricing, schedules, and service levels. Tenth Rock consolidated every location under a single program, cut costs by 30%, and eliminated missed pickups within 90 days.",
    mainImage: "/images/stock/case-study-main.jpg",
    mainImageAlt: "National retail chain waste management rollout by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/case-study-thumb1.jpg", alt: "Retail waste management operations detail 1" },
      { src: "/images/stock/case-study-thumb2.jpg", alt: "Retail waste management operations detail 2" },
      { src: "/images/stock/case-study-thumb3.jpg", alt: "Retail waste management operations detail 3" },
    ],
    stats: [
      { value: "30%", label: "Cost Savings" },
      { value: "200+", label: "Locations Covered" },
      { value: "4hr", label: "Avg. Response Time" },
      { value: "0", label: "Missed Pickups" },
    ],
  },
  {
    title: "Case Study:",
    subtitle: "Stadium Event Cleanup",
    description:
      "A major sports venue hosting 80+ events per year needed a partner who could scale crews up for game days and back down for off-weeks. Tenth Rock deployed dedicated post-event teams, cutting cleanup time by 40% and diverting 55% of event waste from landfills.",
    mainImage: "/images/stock/service-event-stadium.jpg",
    mainImageAlt: "Stadium event cleanup managed by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/service-dumpster-rental.jpg", alt: "Stadium dumpster staging area" },
      { src: "/images/stock/service-emergency-overflow.jpg", alt: "Post-event waste removal crew" },
      { src: "/images/stock/service-centralized-program.jpg", alt: "Centralized event waste coordination" },
    ],
    stats: [
      { value: "40%", label: "Faster Cleanup" },
      { value: "80+", label: "Events Per Year" },
      { value: "55%", label: "Waste Diverted" },
      { value: "24hr", label: "Turnaround Time" },
    ],
  },
  {
    title: "Case Study:",
    subtitle: "Multi-State Property Portfolio",
    description:
      "A real estate management company with 350 properties across 12 states was juggling 40+ vendor relationships. Tenth Rock replaced the entire vendor network with a single program, reduced monthly waste spend by 25%, and delivered one consolidated invoice per billing cycle.",
    mainImage: "/images/stock/floor-park.jpg",
    mainImageAlt: "Multi-state property waste management by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/case-study-thumb1.jpg", alt: "Property waste management operations 1" },
      { src: "/images/stock/case-study-thumb3.jpg", alt: "Property waste management operations 2" },
      { src: "/images/stock/case-study-thumb2.jpg", alt: "Property waste management operations 3" },
    ],
    stats: [
      { value: "25%", label: "Cost Reduction" },
      { value: "350", label: "Properties Managed" },
      { value: "12", label: "States Covered" },
      { value: "1", label: "Invoice Per Cycle" },
    ],
  },
];

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const study = caseStudies[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-primary/5" aria-label="Case studies" data-testid="section-case-studies">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`main-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[5px] overflow-hidden h-[400px]"
              >
                <Image
                  src={study.mainImage}
                  alt={study.mainImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
            <div className="grid grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {study.thumbImages.map((img, i) => (
                  <motion.div
                    key={`thumb-${currentIndex}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="relative rounded-[5px] overflow-hidden aspect-square"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 33vw, 16vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:pl-8 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter leading-tight">
                  {study.title} <br />
                  {study.subtitle}
                </h2>
                <p className="text-lg text-primary/70 mb-8 md:mb-12 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                  {study.stats.map((stat, i) => (
                    <div key={i} data-testid={`stat-case-study-${i}`}>
                      <div className="text-4xl font-extrabold text-[#c5d520] mb-1">{stat.value}</div>
                      <div className="text-sm font-bold text-primary uppercase tracking-wide">{stat.label}</div>
                      <div className="h-1 w-12 bg-primary/10 mt-3"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <button
                onClick={goToPrev}
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary active:bg-primary hover:text-white active:text-white text-primary transition-all duration-300 shadow-sm hover:shadow-lg active:shadow-lg min-w-[44px] min-h-[44px]"
                aria-label="Previous case study"
                data-testid="button-case-study-prev"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={goToNext}
                className="w-14 h-14 rounded-full bg-[#042940] text-white flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] hover:text-[#042940] active:text-[#042940] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Next case study"
                data-testid="button-case-study-next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-primary/40 ml-2" data-testid="text-case-study-counter">
                {currentIndex + 1} / {caseStudies.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
