"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Siren, Truck, Building2, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Waste Removal",
    desc: "Emergency disposal, bulk removal, live loads, and illegal dumping cleanup for commercial properties nationwide.",
    items: [
      { label: "Emergency Disposal", desc: "24/7 rapid-response teams for urgent waste situations at any commercial location.", img: "/images/stock/service-emergency-overflow.jpg", href: "/services/waste-removal" },
      { label: "Bulk Waste Removal", desc: "Large-scale cleanouts for damaged, discontinued, or unsellable products and materials.", img: "/images/stock/service-emergency.jpg", href: "/services/waste-removal" },
      { label: "Illegal Dumping Cleanup", desc: "Fast removal of mattresses, furniture, and construction debris from parking lots and properties.", img: "/images/stock/clean-city.jpg", href: "/services/waste-removal" },
    ],
  },
  {
    title: "Pressure Washing",
    desc: "Commercial pressure washing for storefronts, stadiums, compactor pads, and post-waste cleanup.",
    items: [
      { label: "Storefront Cleaning", desc: "Restore curb appeal with professional pressure washing for entrances, sidewalks, and facades.", img: "/images/stock/service-commercial.jpg", href: "/services/pressure-washing" },
      { label: "Compactor Pad Cleaning", desc: "Odor and grime removal for compactor areas, loading docks, and waste staging zones.", img: "/images/stock/service-event-stadium.jpg", href: "/services/pressure-washing" },
      { label: "Post-Waste Cleanup", desc: "Deep cleaning after waste removal to leave your site spotless and ready for business.", img: "/images/stock/service-maintenance.jpg", href: "/services/pressure-washing" },
    ],
  },
  {
    title: "Dumpster Rental",
    desc: "Roll-off dumpsters in 10, 20, 30, and 40-yard sizes with flat-rate pricing and prompt delivery.",
    items: [
      { label: "Multiple Sizes", desc: "10, 20, 30, and 40-yard roll-off containers matched to your specific project needs.", img: "/images/stock/service-dumpster-rental.jpg", href: "/services/dumpster-rental" },
      { label: "Flat-Rate Pricing", desc: "Transparent, all-inclusive pricing with no hidden fees or surprise charges.", img: "/images/stock/service-dumpster.jpg", href: "/services/dumpster-rental" },
      { label: "Prompt Delivery", desc: "Same-day or next-day delivery for construction projects, remodels, and cleanouts.", img: "/images/stock/service-centralized-program.jpg", href: "/services/dumpster-rental" },
    ],
  },
  {
    title: "Hauling Services",
    desc: "Compactor transport, bulk hauling, and specialty waste logistics with nationwide reach.",
    items: [
      { label: "Compactor Transport", desc: "Safe, compliant transport of compactors and heavy waste equipment to any location.", img: "/images/stock/hero-skyscrapers.jpg", href: "/services/hauling-services" },
      { label: "Bulk Hauling", desc: "High-volume hauling for large-scale commercial projects and multi-site operations.", img: "/images/stock/city-nature.jpg", href: "/services/hauling-services" },
      { label: "Nationwide Logistics", desc: "Scalable hauling solutions coordinated across 48 states through our vendor network.", img: "/images/stock/service-commercial.jpg", href: "/services/hauling-services" },
    ],
  },
];

const categoryIcons = [Truck, Building2, Siren, ClipboardCheck];

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
            Four core services. One point of contact. Dispatched across 48 states.
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
