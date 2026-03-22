"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Siren, HardHat, Container, LineChart } from "lucide-react";

const services = [
  {
    title: "Emergency Waste Removal",
    desc: "24/7 rapid response for product spoilage, overflow crises, and unplanned cleanouts at commercial locations nationwide.",
    items: [
      { label: "Emergency Product & Perishable Removal", desc: "Rapid removal of expired, recalled, or temperature-compromised product. Speed, compliance, and documentation handled.", img: "/images/stock/service-emergency-overflow.jpg", href: "/services/emergency-product-removal" },
      { label: "Temporary Capacity & Site Stabilization", desc: "Surge dumpsters, hauling crews, and overflow support deployed fast when your site exceeds normal waste limits.", img: "/images/stock/service-emergency.jpg", href: "/services/site-stabilization" },
      { label: "Unplanned Cleanouts & Debris Removal", desc: "Tenant abandonment, sudden closures, illegal dumping. Fast mobilization, minimal disruption, bulk debris cleared.", img: "/images/stock/clean-city.jpg", href: "/services/unplanned-cleanouts" },
    ],
  },
  {
    title: "Specialized Project Logistics",
    desc: "End-to-end waste coordination for closures, remodels, events, and disaster mobilization across multiple sites.",
    items: [
      { label: "Site Closures & Remodels", desc: "Full-scope waste coordination for store closures, remodels, decommissions, and multi-site transitions.", img: "/images/stock/service-commercial.jpg", href: "/services/site-closures-remodels" },
      { label: "Events & Stadiums", desc: "Waste planning and execution for stadiums, fairs, festivals, and high-volume temporary activations.", img: "/images/stock/service-event-stadium.jpg", href: "/services/events-stadiums" },
      { label: "Natural Disaster Mobilization", desc: "Rapid multi-site mobilization for debris removal, damaged product disposal, and container deployment after storms.", img: "/images/stock/service-maintenance.jpg", href: "/services/natural-disaster-mobilization" },
    ],
  },
  {
    title: "Dumpsters & Temporary Containers",
    desc: "Commercial-grade roll-off containers deployed quickly for projects, cleanouts, overflow, and recycling needs.",
    items: [
      { label: "On-Demand Service", desc: "Short-term roll-off and open-top containers deployed fast for commercial projects, cleanouts, and overflow.", img: "/images/stock/service-dumpster-rental.jpg", href: "/services/on-demand-service" },
      { label: "Multiple Sizes", desc: "Commercial-grade open-top roll-off containers in various sizes to match different project scopes.", img: "/images/stock/service-dumpster.jpg", href: "/services/multiple-sizes" },
      { label: "Recycling & Specialty Containers", desc: "Specialized containers for cardboard, metals, and recyclable materials tied to projects or temporary capacity.", img: "/images/stock/service-centralized-program.jpg", href: "/services/recycling-specialty-containers" },
    ],
  },
  {
    title: "Waste Operations Advisory & Enablement",
    desc: "Operational audits, standardized processes, and retained advisory support for portfolio-wide waste programs.",
    items: [
      { label: "Waste Program Assessments & Roadmaps", desc: "Operational audits of existing waste programs, vendor structures, and cost drivers with optimization plans.", img: "/images/stock/hero-skyscrapers.jpg", href: "/services/waste-program-assessments" },
      { label: "Standards, SOPs & Vendor Training", desc: "Standardized processes, escalation protocols, and vendor performance guidelines to prevent costly errors.", img: "/images/stock/city-nature.jpg", href: "/services/standards-sops-training" },
      { label: "Ongoing Advisory & Program Implementation", desc: "Retained advisory for program rollout, vendor oversight, and portfolio-wide execution strategy.", img: "/images/stock/service-commercial.jpg", href: "/services/ongoing-advisory" },
    ],
  },
];

const categoryIcons = [Siren, HardHat, Container, LineChart];

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
          <p className="text-lg text-[#042940]/70">
            Four core capabilities. One point of contact. Dispatched across 48 states.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
           <div className="lg:col-span-4 flex flex-col space-y-[6px]">
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
                       className="relative rounded-[5px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[420px] group cursor-pointer block ring-0 hover:ring-2 hover:ring-[#c5d520]/40"
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
                         <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-[#c5d520] transition-colors">
                           {item.label}
                         </h3>
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
