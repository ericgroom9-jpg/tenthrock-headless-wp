"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  thumbImages: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "National Coffee Chain",
    subtitle: "Missed Pickup, Same-Day Stabilization",
    tag: "Speed",
    description:
      "A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a team on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.",
    mainImage: "/images/stock/coffee-case-1.jpg",
    mainImageAlt: "National coffee chain interior with customers and barista at the counter",
    thumbImages: [
      { src: "/images/stock/coffee-case-2.png", alt: "Clock face showing 6:15 PM, the time the call came in" },
      { src: "/images/stock/coffee-case-3.jpg", alt: "Quiet city street at night where the response was dispatched" },
      { src: "/images/stock/coffee-case-4.jpg", alt: "Brick storefront with large windows after stabilization" },
    ],
    stats: [
      { value: "10 min", label: "Response Time" },
      { value: "4 hrs", label: "Total Stabilization" },
      { value: "0", label: "Customer Impact" },
      { value: "1", label: "Call to Resolution" },
    ],
  },
  {
    title: "2024 Florida Hurricanes",
    subtitle: "Statewide Container Deployment",
    tag: "Scale",
    description:
      "Following 2 major hurricanes 13 days apart, open-top dumpsters became unavailable statewide as debris volumes overwhelmed local providers. Tenth Rock activated its nationwide network to source containers from out-of-state markets. Inventory was secured and mobilized across state lines, allowing dumpsters to be strategically deployed throughout affected regions while legacy companies were out of inventory.",
    mainImage: "/images/stock/industry-natural-disasters-storm.jpg",
    mainImageAlt: "Florida hurricane emergency dumpster deployment by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/hurricane-dumpster-blue.png", alt: "Blue roll-off dumpster filled with hurricane debris staged for deployment" },
      { src: "/images/stock/service-maintenance.jpg", alt: "Multi-site debris coordination" },
      { src: "/images/stock/hurricane-damage-mobile-homes.jpg", alt: "Aerial view of a Florida mobile home community heavily damaged by hurricane debris" },
    ],
    stats: [
      { value: "36M+", label: "Cubic Yards of Debris" },
      { value: "5", label: "State Inventory Sourcing" },
      { value: "60+", label: "Days Sustained" },
      { value: "67", label: "Counties Impacted" },
    ],
  },
  {
    title: "Portfolio-Wide",
    subtitle: "Store Closures Across 8 States",
    tag: "Multi-Site Execution",
    description:
      "During a multi-location retail transition, stores required a full cleanout after asset recovery teams completed their work. Remaining fixtures, shelving, signage, and debris still needed to be removed for broom-clean turnover. Tenth Rock coordinated labor crews, hauling, and dumpster deployment across multiple locations, handling minor demolition and final punch-list items that had fallen between vendors.",
    mainImage: "/images/stock/closures-1.jpg",
    mainImageAlt: "Closed retail storefront with windows papered over during decommissioning",
    thumbImages: [
      { src: "/images/stock/closures-2.jpg", alt: "Vacated retail interior cleared and ready for broom-clean turnover" },
      { src: "/images/stock/closures-3.jpg", alt: "Hauling truck transporting debris across state lines" },
      { src: "/images/stock/closures-4.jpg", alt: "Aerial view of a multi-site commercial coordination effort" },
    ],
    stats: [
      { value: "20+", label: "Stores Delivered Broom-Clean" },
      { value: "1", label: "Point of Contact" },
      { value: "3", label: "Vendor Types Managed" },
      { value: "8", label: "State Deployment" },
    ],
  },
  {
    title: "National Retailer",
    subtitle: "Holiday Overflow Resolution",
    tag: "Creative Solutions",
    description:
      "During a high-traffic holiday period, a national retail location experienced packaging overflow spilling into public areas, creating immediate safety and reputational risk. The store requested a 30-yard open-top dumpster late in the evening, but no containers were available. Tenth Rock deployed a stabilization crew within the hour, consolidated overflowing waste into a controlled staging area, and secured a 30-yard roll-off for 7:00 AM delivery. The store opened safely and on schedule.",
    mainImage: "/images/stock/holiday-1.jpg",
    mainImageAlt: "Modern retail center lit up at dusk during a high-traffic holiday season",
    thumbImages: [
      { src: "/images/stock/holiday-2.jpg", alt: "Crowds of holiday shoppers moving through a store entrance with shopping bags" },
      { src: "/images/stock/holiday-3.jpg", alt: "Back-of-house loading area where overflow waste was staged overnight" },
      { src: "/images/stock/holiday-4.png", alt: "Clean 30-yard open-top roll-off dumpster delivered for next morning" },
    ],
    stats: [
      { value: "0", label: "Overtime Staff Required" },
      { value: "100%", label: "Risk Mitigated" },
      { value: "8 hrs", label: "Total Resolution" },
      { value: "$0", label: "Surge Pricing" },
    ],
  },
  {
    title: "Regional Power Outage",
    subtitle: "Perishable Removal Across Multiple Sites",
    tag: "Cost Savings",
    description:
      "Following a regional power outage caused by severe storms, multiple retail locations were left with large volumes of temperature-sensitive products requiring immediate removal to prevent odor, pest activity, and potential health code violations. Tenth Rock mobilized live-load hauling providers, allowing trailers to be staged and loaded immediately as product was removed from refrigeration areas, eliminating the wait for roll-off containers.",
    mainImage: "/images/stock/outage-1.png",
    mainImageAlt: "Severe storm clouds and lightning rolling over a retail shopping center before a power outage",
    thumbImages: [
      { src: "/images/stock/outage-2.png", alt: "Darkened commercial storefront at night during a regional power outage" },
      { src: "/images/stock/outage-3.png", alt: "Long-haul trailer backed up to a commercial loading dock for live-load hauling" },
      { src: "/images/stock/outage-4.png", alt: "Wide shot of a rain-slicked commercial shopping center after the storm" },
    ],
    stats: [
      { value: "1", label: "Point of Contact" },
      { value: "0", label: "Health Code Violations" },
      { value: "45%", label: "Cost Reduction via Live Loads" },
      { value: "1", label: "Consolidated Invoice" },
    ],
  },
  {
    title: "Compactor Failure",
    subtitle: "Emergency Site Stabilization",
    tag: "Project Management",
    description:
      "A big-box retail location experienced a compactor failure after the unit became overfilled, forcing the door open and preventing the provider from safely transporting it. Tenth Rock deployed a stabilization crew to reduce the load, secured the compactor door for safe transport, arranged a same-day open-top dumpster, and coordinated vendors to clean and prepare the compactor area for repair upon return.",
    mainImage: "/images/stock/case-study-main.jpg",
    mainImageAlt: "Compactor failure emergency stabilization by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/service-dumpster.jpg", alt: "Emergency dumpster deployed on site" },
      { src: "/images/stock/case-study-thumb2.jpg", alt: "Compactor area cleaned for repair" },
      { src: "/images/stock/case-study-thumb3.jpg", alt: "Vendor coordination at site" },
    ],
    stats: [
      { value: "4", label: "Vendors Sequenced" },
      { value: "1", label: "Point of Contact" },
      { value: "0", label: "Health Violations" },
      { value: "100%", label: "Real-Time Visibility" },
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
            
              <FadeIn
                key={`main-${currentIndex}`}
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
              </FadeIn>
            
            <div className="grid grid-cols-3 gap-4">
              
                {study.thumbImages.map((img, i) => (
                  <FadeIn
                    key={`thumb-${currentIndex}-${i}`}
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
                  </FadeIn>
                ))}
              
            </div>
          </div>

          <div className="lg:pl-8 order-1 lg:order-2">
            
              <FadeIn
                key={`content-${currentIndex}`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5d520]/10 text-[#042940] font-bold text-xs uppercase tracking-wider mb-4" data-testid="badge-case-study-tag">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></span>
                  {study.tag}
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter leading-tight">
                  {study.title} <br />
                  <span className="text-3xl md:text-4xl">{study.subtitle}</span>
                </h2>
                <p className="text-base text-primary/70 mb-8 md:mb-12 leading-relaxed">
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
              </FadeIn>
            

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
