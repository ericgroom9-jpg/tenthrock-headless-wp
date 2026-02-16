"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CtaBannerSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" aria-label="Check service availability">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
        >
           {/* Background Grid & Glow */}
           <div 
             className="absolute inset-0 opacity-10 mix-blend-overlay" 
             style={{ 
               backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.png)`, 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }} 
           />
           <div 
             className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }} 
           />
           {/* Center Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

           <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></div>
                Service Availability
             </div>
             
             <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter">
               Check If We Service <span className="text-[#c5d520]">Your Area.</span>
             </h2>
             <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10">
               Enter your zip code below to instantly see if our network of local vendors covers your location.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center items-center">
               <Input 
                 placeholder="Enter Zip Code" 
                 className="!bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 rounded-full px-6 text-lg focus-visible:ring-[#c5d520] flex-1 w-full" 
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
               />
               <Button size="lg" className="bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-[0_0_30px_rgba(197,213,32,0.3)] hover:shadow-[0_0_50px_rgba(197,213,32,0.5)] active:shadow-[0_0_50px_rgba(197,213,32,0.5)] transition-all duration-300 w-full sm:w-auto min-h-[52px] whitespace-nowrap rounded-full">
                 Check Now
               </Button>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
