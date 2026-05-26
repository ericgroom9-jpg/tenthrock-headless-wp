"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import AnimatedStatValue from "@/components/shared/AnimatedStatValue";
import { ArrowRight } from "lucide-react";

export interface CaseStudy {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  thumbImages: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
}

const defaultCaseStudies: CaseStudy[] = [
  {
    title: "National Coffee Chain",
    subtitle: "Missed Pickup, Same-Day Stabilization",
    tag: "Speed",
    description:
      "A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a team on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.",
    mainImage: "/images/stock/coffee-case-1.webp",
    mainImageAlt: "National coffee chain interior with customers and barista at the counter",
    thumbImages: [
      { src: "/images/stock/coffee-case-2.jpg", alt: "Stacked bags of commercial waste piled up after a missed pickup" },
      { src: "/images/stock/coffee-case-3.webp", alt: "Quiet city street at night where the response was dispatched" },
      { src: "/images/stock/coffee-case-4.webp", alt: "Brick storefront with large windows after stabilization" },
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
      { src: "/images/stock/hurricane-dumpster-blue.webp", alt: "Blue roll-off dumpster filled with hurricane debris staged for deployment" },
      { src: "/images/stock/service-maintenance.jpg", alt: "Multi-site debris coordination" },
      { src: "/images/stock/hurricane-damage-mobile-homes.webp", alt: "Aerial view of a Florida mobile home community heavily damaged by hurricane debris" },
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
    mainImage: "/images/stock/closures-1.webp",
    mainImageAlt: "Closed retail storefront with windows papered over during decommissioning",
    thumbImages: [
      { src: "/images/stock/closures-2.webp", alt: "Vacated retail interior cleared and ready for broom-clean turnover" },
      { src: "/images/stock/closures-3.webp", alt: "Hauling truck transporting debris across state lines" },
      { src: "/images/stock/closures-4.webp", alt: "Aerial view of a multi-site commercial coordination effort" },
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
    mainImage: "/images/stock/holiday-1.webp",
    mainImageAlt: "Modern retail center lit up at dusk during a high-traffic holiday season",
    thumbImages: [
      { src: "/images/stock/holiday-2.webp", alt: "Crowds of holiday shoppers moving through a store entrance with shopping bags" },
      { src: "/images/stock/holiday-3.webp", alt: "Back-of-house loading area where overflow waste was staged overnight" },
      { src: "/images/stock/holiday-4.webp", alt: "Clean 30-yard open-top roll-off dumpster delivered for next morning" },
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
    mainImage: "/images/stock/outage-1.webp",
    mainImageAlt: "Severe storm clouds and lightning rolling over a retail shopping center before a power outage",
    thumbImages: [
      { src: "/images/stock/outage-2.webp", alt: "Darkened commercial storefront at night during a regional power outage" },
      { src: "/images/stock/outage-3.webp", alt: "Long-haul trailer backed up to a commercial loading dock for live-load hauling" },
      { src: "/images/stock/outage-4.webp", alt: "Wide shot of a rain-slicked commercial shopping center after the storm" },
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
    mainImage: "/images/stock/compactor-1.webp",
    mainImageAlt: "Overfilled retail compactor with door jammed open by trapped debris",
    thumbImages: [
      { src: "/images/stock/compactor-2.webp", alt: "Same-day open-top dumpster deployed to relieve compactor overflow" },
      { src: "/images/stock/compactor-3.webp", alt: "Loading dock and trailer staged for vendor coordination" },
      { src: "/images/stock/compactor-4.jpg", alt: "Big-box retail warehouse exterior at sunset where stabilization took place" },
    ],
    stats: [
      { value: "4", label: "Vendors Sequenced" },
      { value: "1", label: "Point of Contact" },
      { value: "0", label: "Health Violations" },
      { value: "100%", label: "Real-Time Visibility" },
    ],
  },
];

interface CaseStudySectionProps {
  caseStudies?: CaseStudy[];
}

export default function CaseStudySection({ caseStudies }: CaseStudySectionProps) {
  const studies = caseStudies && caseStudies.length > 0 ? caseStudies : defaultCaseStudies;
  const [currentIndex, setCurrentIndex] = useState(0);
  // 0 = featured/main image; 1..N = thumbImages[i-1]. Reset when the carousel slide changes.
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrev = () => {
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev === 0 ? studies.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev === studies.length - 1 ? 0 : prev + 1));
  };

  const study = studies[currentIndex];
  // Flat list of all 4 images for this study: [main, thumb0, thumb1, thumb2].
  const allImages = [
    { src: study.mainImage, alt: study.mainImageAlt },
    ...study.thumbImages,
  ];
  const featured = allImages[activeImageIndex] ?? allImages[0];
  // Thumbnail row keeps 3 fixed slots. Slot i normally shows allImages[i+1];
  // when allImages[i+1] is the currently-featured one, that slot instead
  // shows the originally-main image — so the previously-featured image
  // always rotates into the empty slot and nothing ever disappears.
  const thumbSlots = [0, 1, 2].map((i) => {
    const naturalIndex = i + 1;
    const imageIndex = naturalIndex === activeImageIndex ? 0 : naturalIndex;
    return { imageIndex, image: allImages[imageIndex] };
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-primary/5" aria-label="Case studies" data-testid="section-case-studies">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 xl:order-1">
            
              <FadeIn
                key={`main-${currentIndex}-${activeImageIndex}`}
                className="relative rounded-[5px] overflow-hidden h-[400px]"
              >
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-500"
                  loading="lazy"
                  data-testid="img-case-study-featured"
                />
              </FadeIn>
            
            <div className="grid grid-cols-3 gap-4">
              
                {thumbSlots.map((slot, i) => (
                  <FadeIn
                    key={`thumb-${currentIndex}-${i}-${slot.imageIndex}`}
                    className="relative aspect-square"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex(slot.imageIndex)}
                      aria-label={`Show image: ${slot.image.alt}`}
                      data-testid={`button-case-study-thumb-${i}`}
                      className="group relative block w-full h-full rounded-[5px] overflow-hidden cursor-pointer ring-1 ring-transparent hover:ring-2 hover:ring-[#c5d520]/60 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 transition-all duration-300"
                    >
                      <Image
                        src={slot.image.src}
                        alt={slot.image.alt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 16vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-[#042940]/20 transition-colors duration-300 group-hover:bg-[#042940]/0"
                        aria-hidden="true"
                      />
                    </button>
                  </FadeIn>
                ))}
              
            </div>

            {/* Mobile-only carousel controls (sit below the images on small screens) */}
            <div className="flex xl:hidden items-center gap-4 pt-2">
              <button
                onClick={goToPrev}
                className="w-14 h-14 rounded-full bg-white text-[#042940] flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Previous case study"
                data-testid="button-case-study-prev-mobile"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={goToNext}
                className="w-14 h-14 rounded-full bg-white text-[#042940] flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Next case study"
                data-testid="button-case-study-next-mobile"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-primary/40 ml-2" data-testid="text-case-study-counter-mobile">
                {currentIndex + 1} / {studies.length}
              </span>
            </div>
          </div>

          <div className="xl:pl-8 order-1 xl:order-2">
            
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
                      <div className="text-4xl font-extrabold text-[#c5d520] mb-1 tabular-nums">
                        <AnimatedStatValue value={stat.value} duration={1000} />
                      </div>
                      <div className="text-sm font-bold text-primary uppercase tracking-wide">{stat.label}</div>
                      <div className="h-1 w-12 bg-primary/10 mt-3"></div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            

            <div className="hidden xl:flex items-center gap-4">
              <button
                onClick={goToPrev}
                className="w-14 h-14 rounded-full bg-white text-[#042940] flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Previous case study"
                data-testid="button-case-study-prev"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={goToNext}
                className="w-14 h-14 rounded-full bg-white text-[#042940] flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Next case study"
                data-testid="button-case-study-next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-primary/40 ml-2" data-testid="text-case-study-counter">
                {currentIndex + 1} / {studies.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
