"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { Snowflake, AlertTriangle, Trash2, Building2, Calendar, CloudLightning, Clock, Ruler, Recycle, ClipboardList, BookOpenCheck, Handshake, ArrowRight, type LucideIcon } from "lucide-react";
import type { ServiceCategory } from "@/lib/wordpress";

const defaultServices = [
  {
    title: "Emergency Waste Removal",
    desc: "Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.",
    items: [
      { label: "Emergency Product & Perishable Removal", desc: "Perishable bulk pickup and spoiled product disposal after cold storage failure or refrigeration failure events. After-hours waste removal available 24/7.", img: "/images/stock/service-emergency-overflow.jpg", href: "/services/emergency-product-removal" },
      { label: "Site Stabilization", desc: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal when missed pickups or waste overflow disrupts your operations.", img: "/images/stock/site-stabilization-1.webp", href: "/services/site-stabilization" },
      { label: "Unplanned Cleanouts & Debris Removal", desc: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations.", img: "/images/stock/unplanned-cleanouts-1.webp", href: "/services/unplanned-cleanouts" },
    ],
  },
  {
    title: "Specialized Project Logistics",
    desc: "End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.",
    items: [
      { label: "Site Closures & Remodels", desc: "Site decommissioning, post-construction cleanout, and retail remodel waste management. Portfolio-wide site turnover and store closings handled start to finish.", img: "/images/stock/site-closures-1.webp", href: "/services/site-closure-remodels" },
      { label: "Events & Stadiums", desc: "Event waste logistics and stadium waste coordination for multi-day event waste support. Fairs, festivals, and temporary activations managed on tight timelines.", img: "/images/stock/service-event-stadium.webp", href: "/services/stadium-event-cleanup" },
      { label: "Natural Disasters", desc: "Rapid response for storm debris removal and hurricane debris cleanup. Emergency roll-off rental and open-top dumpsters deployed for multi-site recovery across affected regions.", img: "/images/stock/industry-natural-disasters-storm.jpg", href: "/services/natural-disaster-cleanup" },
    ],
  },
  {
    title: "Dumpster Rentals",
    desc: "Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow needs.",
    items: [
      { label: "On-Demand Service", desc: "Same-day dumpster rental and emergency roll-off service. Temporary dumpster deployment for commercial projects with same-day swaps available.", img: "/images/stock/dumpster-blue-2.webp", href: "/services/on-demand-dumpster-rental" },
      { label: "Multiple Sizes", desc: "Commercial-grade open-top dumpsters in 20 yard, 30 yard, and 40 yard roll-off sizes. Matched to your project scope from small cleanouts to large-scale construction debris.", img: "/images/stock/dumpster-large-red.webp", href: "/services/multiple-size-dumpsters" },
      { label: "Recycling Dumpsters", desc: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support included.", img: "/images/stock/recycling-2.webp", href: "/services/recycling-dumpster-containers" },
    ],
  },
  {
    title: "Waste Advisory",
    desc: "Retained waste management advisory providing hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management for multi-site operators.",
    items: [
      { label: "Waste Program Assessments & Roadmaps", desc: "Portfolio-wide waste strategy and operational waste audit to identify cost-control waste optimization opportunities across your multi-site waste roadmap.", img: "/images/stock/hero-skyscrapers.jpg", href: "/services/waste-program-assessments" },
      { label: "Standards & Vendor Training", desc: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards that prevent costly errors.", img: "/images/stock/training-1.webp", href: "/services/waste-program-standards-and-sops" },
      { label: "Ongoing Advisory & Program Implementation", desc: "Retained advisory for waste workflow optimization, multi-site execution strategy, and ongoing program improvement with oversight services built for scale.", img: "/images/stock/advisory-1.webp", href: "/services/waste-program-advisory" },
    ],
  },
];

const defaultSubItemIcons: LucideIcon[][] = [
  [Snowflake, AlertTriangle, Trash2],
  [Building2, Calendar, CloudLightning],
  [Clock, Ruler, Recycle],
  [ClipboardList, BookOpenCheck, Handshake],
];

interface CWSProps {
  servicesTagline?: string;
  servicesHeading?: string;
  servicesSubtitle?: string;
  servicesCategories?: ServiceCategory[] | null;
  activeServiceTitle?: string;
}

export default function CommercialWasteServices({
  servicesTagline,
  servicesHeading,
  servicesSubtitle,
  servicesCategories,
  activeServiceTitle,
}: CWSProps = {}) {
  const services = (servicesCategories && servicesCategories.length > 0)
    ? servicesCategories.map((cat, i) => {
        const fallback = defaultServices[i] || defaultServices[0];
        return {
          title: cat.title || fallback.title,
          desc: cat.description || fallback.desc,
          items: (cat.subItems || []).map((sub, j) => {
            const fbItem = fallback.items[j] || fallback.items[0];
            return {
              label: sub.label || fbItem.label,
              desc: sub.description || fbItem.desc,
              img: fbItem.img,
              href: fbItem.href,
            };
          }),
        };
      })
    : defaultServices;

  const initialActive = activeServiceTitle
    ? Math.max(0, services.findIndex((s) => s.title.toLowerCase() === activeServiceTitle.toLowerCase()))
    : 0;
  const [activeService, setActiveService] = useState(initialActive);

  return (
    <section id="services" aria-labelledby="services-heading" className="py-8 md:py-16 bg-[#F9F9F6]">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="mb-6 md:mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              {servicesTagline || "Our Services"}
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-4 tracking-tighter">
            {servicesHeading || "Waste Management Services"}
          </h2>
          <p className="text-lg text-[#042940]/70">
            {servicesSubtitle || "Four core capabilities. One point of contact. Dispatched across 48 states."}
          </p>
        </FadeIn>
        
        <div className="grid xl:grid-cols-12 gap-6 xl:gap-8 items-stretch">
           <div className="xl:col-span-4 flex flex-col space-y-[6px]">
             {services.map((service, i) => (
               <button
                 key={i}
                 onMouseEnter={() => setActiveService(i)}
                 onClick={() => setActiveService(i)}
                 data-testid={`button-service-category-${i}`}
                 className={`text-left px-6 md:px-8 py-5 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                   activeService === i 
                     ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" 
                     : "text-[#042940]/60 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"
                 }`}
               >
                 <span className="relative z-10 flex items-center justify-between gap-3">
                   {service.title}
                   {activeService === i && (
                     <FadeIn as="span" className="w-2 h-2 rounded-full bg-[#c5d520] flex-shrink-0" />
                   )}
                 </span>
                 {activeService === i && (
                   <FadeIn
                     className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5d520]"
                   />
                 )}
               </button>
             ))}
           </div>

           <div className="xl:col-span-8">
             
               <FadeIn
                 key={activeService}
                 className="grid sm:grid-cols-3 gap-4 h-full"
               >
                 {services[activeService].items.map((item, idx) => {
                   const categoryIcons = defaultSubItemIcons[activeService] || defaultSubItemIcons[0];
                   const Icon = categoryIcons[idx] || categoryIcons[categoryIcons.length - 1] || defaultSubItemIcons[0][0];
                   return (
                     <Link
                       key={idx}
                       href={item.href}
                       className="relative rounded-[5px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[420px] group cursor-pointer block ring-0 hover:ring-2 hover:ring-[#c5d520]/40"
                       data-testid={`card-service-feature-${activeService}-${idx}`}
                     >
                       <Image
                         src={item.img}
                         alt={item.label}
                         fill
                         sizes="(min-width: 1280px) 280px, (min-width: 640px) 33vw, 100vw"
                         className="object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/80 to-[#042940]/30 group-hover:via-[#042940]/70 group-hover:to-[#042940]/20 transition-all duration-300"></div>
                       <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                         <div className="w-10 h-10 rounded-full bg-[#c5d520]/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/10">
                           <Icon className="w-5 h-5 text-[#c5d520]" />
                         </div>
                         <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-[#c5d520] transition-colors">
                           {item.label}
                         </h3>
                         <p className="text-white/75 text-base leading-relaxed">
                           {item.desc}
                         </p>
                         <span
                           className="flex sm:inline-flex items-center justify-center sm:justify-start gap-2 mt-4 text-sm font-bold text-[#c5d520] w-full sm:w-auto border border-[#c5d520]/50 sm:border-0 rounded-full sm:rounded-none px-4 sm:px-0 py-2.5 sm:py-0 min-h-[44px] sm:min-h-0 opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300"
                           aria-hidden="true"
                         >
                           Learn More <ArrowRight className="w-4 h-4" />
                         </span>
                       </div>
                     </Link>
                   );
                 })}
               </FadeIn>
             

           </div>
        </div>
      </div>
    </section>
  );
}
