"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";

const services = [
  {
    title: "Emergency & Overflow Waste Response",
    desc: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can't wait. Built for retail, industrial, and multi-site emergencies.",
    img: imgServiceEmergencyOverflow,
    features: ["24/7 Dispatch", "Overflow & Surge Capacity", "Nationwide Network"]
  },
  {
    title: "Store Decommissioning & Remodel Support",
    desc: "Cleanouts, roll-offs, and coordinated haul schedules for remodels, closures, and fixture swaps—without disrupting day-to-day operations.",
    img: imgServiceStoreDecommissioning,
    features: ["Project Scheduling", "Site Cleanouts", "Multi-location Coordination"]
  },
  {
    title: "Event & Stadium Waste Logistics",
    desc: "End-to-end waste plans for venues and large events—placement, swaps, post-event sweeps, and recycling streams managed on tight timelines.",
    img: imgServiceEventStadium,
    features: ["Venue Routing", "High-volume Support", "Diversion Planning"]
  },
  {
    title: "Dumpster Rental & Temporary Containers",
    desc: "Temporary containers and compactor solutions for projects and peaks. Transparent sizing, delivery windows, and swap schedules.",
    img: imgServiceDumpsterRental,
    features: ["Roll-offs & Front-load", "Fast Delivery", "Flexible Terms"]
  },
  {
    title: "Centralized Waste Program Management",
    desc: "One partner to standardize vendors, pricing, reporting, and service levels across all your locations—improving control and visibility.",
    img: imgServiceCentralizedProgram,
    features: ["Standardized SLAs", "Spend Visibility", "Single Point of Contact"]
  },
  {
    title: "Environmental & Compactor Maintenance Services",
    desc: "Preventative maintenance and service for compactors and waste equipment, plus environmental support to keep sites compliant and running.",
    img: imgServiceMaintenance,
    features: ["PM Schedules", "On-site Repairs", "Compliance Support"]
  }
];

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
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
           {/* Navigation List */}
           <div className="lg:col-span-4 flex flex-col space-y-[6px]">
             {services.map((service, i) => (
               <button
                 key={i}
                 onClick={() => setActiveService(i)}
                 onMouseEnter={() => setActiveService(i)}
                 className={`text-left px-6 md:px-8 py-4 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                   activeService === i 
                     ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" 
                     : "text-[#042940]/40 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"
                 }`}
                 data-testid={`button-service-${i}`}
               >
                 <span className="relative z-10 flex items-center justify-between">
                   {service.title}
                   {activeService === i && (
                     <motion.span layoutId="services-active-indicator" className="w-2 h-2 rounded-full bg-[#c5d520]" />
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

           {/* Content Display */}
           <div className="lg:col-span-8 cursor-pointer h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-[5px]" role="button" tabIndex={0} aria-label="View service details" onClick={() => console.log('Navigate to service details')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && console.log('Navigate to service details')} data-testid="button-service-details">
             <div className="relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeService}
                   initial={{ opacity: 0, scale: 1.05 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="absolute inset-0"
                 >
                   <img 
                     src={services[activeService].img} 
                     alt={services[activeService].title} 
                     className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/70 md:via-[#042940]/60 to-transparent opacity-95 md:opacity-90"></div>
                   
                   <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.2 }}
                     >
                       <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
                         {services[activeService].title}
                       </h3>
                       <p className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8">
                         {services[activeService].desc}
                       </p>
                       
                       <div className="flex flex-wrap gap-4 mb-8">
                         {services[activeService].features.map((feature, idx) => (
                           <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors">
                             {feature}
                           </span>
                         ))}
                       </div>

                       <div className="flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                         Learn More <ArrowRight className="w-5 h-5" />
                       </div>
                     </motion.div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
