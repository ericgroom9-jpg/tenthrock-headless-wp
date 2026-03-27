"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight, Star } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  img: string;
}

interface TestimonialsSectionProps {
  tagline?: string;
  testimonials: Testimonial[];
  testIdPrefix?: string;
}

export default function TestimonialsSection({
  tagline = "Client Stories",
  testimonials,
  testIdPrefix = "testimonials",
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#042940] text-white relative overflow-hidden" aria-label="Client testimonials" data-testid={`section-${testIdPrefix}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#042940] to-[#0a3a55]"></div>
      
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#c5d520]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeIn
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-md shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
            {tagline}
          </div>

          <div className="flex gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#c5d520] text-[#c5d520]" />)}
          </div>
           
          <div className="relative min-h-[300px]">
            
              <FadeIn
                key={currentIndex}
              >
                <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-10 tracking-tight" data-testid={`text-${testIdPrefix}-quote`}>
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>
                 
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                    <Image src={testimonials[currentIndex].img} alt={testimonials[currentIndex].author} width={64} height={64} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white" data-testid={`text-${testIdPrefix}-author`}>{testimonials[currentIndex].author}</div>
                    <div className="text-white/70 font-medium">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </FadeIn>
            
          </div>

          <div className="flex gap-4 pt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:bg-white/10 text-white transition-all duration-300 min-w-[44px] min-h-[44px]"
              aria-label="Previous testimonial"
              data-testid={`button-${testIdPrefix}-prev`}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#c5d520] text-[#042940] flex items-center justify-center hover:bg-[#d6d98b] active:bg-[#d6d98b] transition-all duration-300 shadow-lg md:hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px]"
              aria-label="Next testimonial"
              data-testid={`button-${testIdPrefix}-next`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
