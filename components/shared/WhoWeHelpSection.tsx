"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Trophy, Heart, Landmark, Utensils, Siren, Home as HomeIcon, Store } from "lucide-react";

const sectors = [
  { title: "Educational", img: "/images/stock/university.jpg", icon: <GraduationCap className="w-6 h-6" />, href: "/industries/educational" },
  { title: "Stadiums & Events", img: "/images/industries/industry-stadiums-events.jpg", icon: <Trophy className="w-6 h-6" />, href: "/industries/stadiums-events" },
  { title: "Faith Based", img: "/images/stock/church.jpg", icon: <Heart className="w-6 h-6" />, href: "/industries/faith-based" },
  { title: "Municipalities", img: "/images/stock/clean-city.jpg", icon: <Landmark className="w-6 h-6" />, href: "/industries/municipalities" },
  { title: "Hospitality", img: "/images/industries/industry-hospitality.jpg", icon: <Utensils className="w-6 h-6" />, href: "/industries/hospitality" },
  { title: "Natural Disasters", img: "/images/industries/industry-natural-disasters.jpg", icon: <Siren className="w-6 h-6" />, href: "/industries/natural-disasters" },
  { title: "Real Estate", img: "/images/industries/industry-real-estate.jpg", icon: <HomeIcon className="w-6 h-6" />, href: "/industries/real-estate" },
  { title: "Retail", img: "/images/stock/hotel.jpg", icon: <Store className="w-6 h-6" />, href: "/industries/retail" }
];

export default function WhoWeHelpSection() {
  return (
    <section id="sectors" aria-labelledby="sectors-heading" className="py-16 md:py-24 bg-[#F9F9F6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-left sm:text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Industries
          </div>
          <h2 id="sectors-heading" className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter">Who We Help</h2>
          <p className="text-lg text-primary/60">
            From local businesses to enterprise operations, we serve industries that demand reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <Link href={sector.href} key={i}>
              <motion.div 
                className="group relative h-[280px] md:h-[320px] rounded-[5px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-300 md:hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                data-testid={`industry-card-${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img 
                  src={sector.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110" 
                  alt={sector.title} 
                />
                <div className="absolute inset-0 bg-[#042940]/85 md:bg-[#042940]/80 group-hover:bg-[#042940]/60 group-active:bg-[#042940]/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/40 md:via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <div className="transform transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:bg-[#c5d520] group-hover:text-[#042940] group-focus-within:bg-[#c5d520] group-focus-within:text-[#042940] transition-colors duration-300">
                         {sector.icon}
                      </div>
                      <h3 className="text-white font-bold text-xl leading-tight mb-2">{sector.title}</h3>
                      <p className="text-white text-sm mt-2">
                        Tailored solutions for {sector.title}.
                      </p>
                      <div className="flex items-center gap-2 text-[#c5d520] text-sm font-bold mt-4 group-hover:translate-x-1 transition-transform duration-200">
                         Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
