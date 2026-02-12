"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Siren, Truck, Building2, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Emergency Waste Response",
    desc: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can\u2019t wait.",
    items: [
      { label: "Site Stabilization", desc: "Fast deployment teams to stabilize overflowing sites and restore normal operations within hours.", img: "/images/stock/service-emergency-overflow.jpg", href: "/services/site-stabilization" },
      { label: "Compliance Support", desc: "Stay ahead of local and federal waste regulations with our compliance-first approach.", img: "/images/stock/service-emergency.jpg", href: "/services/compliance-support" },
      { label: "Brand Protection", desc: "Protect your brand reputation with discreet, rapid waste removal before it becomes visible.", img: "/images/stock/clean-city.jpg", href: "/services/brand-protection" },
    ],
  },
  {
    title: "Specialized Project Logistics",
    desc: "Coordinated waste logistics for complex projects, closures, events, and disaster response.",
    items: [
      { label: "Site Closures & Remodels", desc: "Cleanouts, roll-offs, and coordinated haul schedules for remodels and fixture swaps.", img: "/images/stock/service-commercial.jpg", href: "/services/site-closures-remodels" },
      { label: "Events & Stadiums", desc: "End-to-end waste plans for venues\u2014placement, swaps, post-event sweeps, and recycling.", img: "/images/stock/service-event-stadium.jpg", href: "/services/events-stadiums" },
      { label: "Natural Disaster Mobilization", desc: "Emergency mobilization of haulers and equipment to disaster-affected areas nationwide.", img: "/images/stock/industry-natural-disasters-storm.jpg", href: "/services/natural-disaster-mobilization" },
    ],
  },
  {
    title: "Dumpsters & Temporary Containers",
    desc: "Temporary containers and compactor solutions for projects and peaks.",
    items: [
      { label: "On-Demand Service", desc: "Same-day or next-day delivery for urgent container needs at any location.", img: "/images/stock/service-dumpster-rental.jpg", href: "/services/on-demand-service" },
      { label: "Multiple Sizes & Types", desc: "From 2-yard front-load to 40-yard roll-offs\u2014the right container for every job.", img: "/images/stock/service-dumpster.jpg", href: "/services/multiple-sizes-types" },
      { label: "Flexible Terms", desc: "Short-term rentals, long-term contracts, or project-based agreements that fit your budget.", img: "/images/stock/service-maintenance.jpg", href: "/services/flexible-terms" },
    ],
  },
  {
    title: "Centralized Waste Management",
    desc: "One partner to standardize vendors, pricing, and service levels across all your locations.",
    items: [
      { label: "Single Point of Contact", desc: "One dedicated account manager for all your locations\u2014simplifying communication.", img: "/images/stock/service-centralized-program.jpg", href: "/services/single-point-of-contact" },
      { label: "Performance Tracking", desc: "Real-time dashboards and reporting to monitor service levels across every site.", img: "/images/stock/hero-skyscrapers.jpg", href: "/services/performance-tracking" },
      { label: "Spend Optimization", desc: "Consolidate vendors and negotiate better rates to reduce your total waste spend.", img: "/images/stock/city-nature.jpg", href: "/services/spend-optimization" },
    ],
  },
];

const categoryIcons = [Siren, Truck, Building2, ClipboardCheck];

export default function CommercialWasteServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 md:py-24 bg-[#F9F9F6]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              Our Services
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-4 tracking-tighter">
            Commercial Waste Services
          </h2>
          <p className="text-lg text-[#042940]/60">
            Comprehensive solutions for businesses of all sizes, available nationwide.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
           <div className="lg:col-span-4 flex flex-col space-y-[6px]">
             {services.map((service, i) => (
               <button
                 key={i}
                 onClick={() => setActiveService(i)}
                 data-testid={`button-service-category-${i}`}
                 className={`text-left px-6 md:px-8 py-5 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                   activeService === i 
                     ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" 
                     : "text-[#042940]/40 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"
                 }`}
               >
                 <span className="relative z-10 flex items-center justify-between gap-3">
                   {service.title}
                   {activeService === i && (
                     <motion.span layoutId="services-active-indicator" className="w-2 h-2 rounded-full bg-[#c5d520] flex-shrink-0" />
                   )}
                 </span>
                 {activeService === i && (
                   <motion.div
                     layoutId="services-active-bg"
                     className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5d520]"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                   />
                 )}
               </button>
             ))}
           </div>

           <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeService}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.35 }}
                 className="grid sm:grid-cols-3 gap-4 h-full"
               >
                 {services[activeService].items.map((item, idx) => {
                   const Icon = categoryIcons[activeService];
                   return (
                     <Link
                       key={idx}
                       href={item.href}
                       className="relative rounded-[5px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer block ring-0 hover:ring-2 hover:ring-[#c5d520]/40"
                       data-testid={`card-service-feature-${activeService}-${idx}`}
                     >
                       <img
                         src={item.img}
                         alt={item.label}
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/80 to-[#042940]/30 group-hover:via-[#042940]/70 group-hover:to-[#042940]/20 transition-all duration-300"></div>
                       <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                         <div className="w-10 h-10 rounded-full bg-[#c5d520]/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/10">
                           <Icon className="w-5 h-5 text-[#c5d520]" />
                         </div>
                         <h4 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-[#c5d520] transition-colors">
                           {item.label}
                         </h4>
                         <p className="text-white/75 text-sm leading-relaxed">
                           {item.desc}
                         </p>
                       </div>
                     </Link>
                   );
                 })}
               </motion.div>
             </AnimatePresence>

           </div>
        </div>
      </div>
    </section>
  );
}
