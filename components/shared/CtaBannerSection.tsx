"use client";

import FadeIn from "@/components/shared/FadeIn";
import ZipCheckForm from "@/components/shared/ZipCheckForm";

interface CtaBannerSectionProps {
  tagline?: string;
  heading?: string;
  subtitle?: string;
  placeholder?: string;
  buttonLabel?: string;
}

export default function CtaBannerSection({
  tagline = "Service Availability",
  heading,
  subtitle = "Enter your zip code to get started.",
  placeholder = "Enter Zip Code",
  buttonLabel = "Check Now",
}: CtaBannerSectionProps = {}) {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" aria-label="Check service availability">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeIn
          className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
        >
           <div 
             className="absolute inset-0 opacity-10 mix-blend-overlay" 
             style={{ 
               backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.webp)`, 
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
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

           <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></div>
                {tagline}
             </div>
             
             <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter">
               {heading || <>Check If We Service <span className="text-[#c5d520]">Your Area</span></>}
             </h2>
             <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10">
               {subtitle}
             </p>
             
             <ZipCheckForm placeholder={placeholder} buttonLabel={buttonLabel} />
           </div>
        </FadeIn>
      </div>
    </section>
  );
}
