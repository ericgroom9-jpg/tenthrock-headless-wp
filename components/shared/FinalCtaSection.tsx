"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE = "/images/stock/final-cta-highway-sunset.jpg";
const DEFAULT_IMAGE_ALT = "Aerial view of an open highway at sunset symbolizing nationwide waste logistics";

interface FinalCtaSectionProps {
 heading?: string;
 subtitle?: string;
 ctaLabel?: string;
 ctaLink?: string;
 image?: string;
 imageAlt?: string;
 phone?: string;
 phoneLink?: string;
}

export default function FinalCtaSection({
 heading,
 subtitle,
 ctaLabel = "Request A Service",
 ctaLink = "/request-a-service",
 image,
 imageAlt,
 phone = "727.510.5454",
 phoneLink = "tel:+17275105454",
}: FinalCtaSectionProps = {}) {
 const src = image || DEFAULT_IMAGE;
 const alt = imageAlt || DEFAULT_IMAGE_ALT;
 return (
 <section className="py-16 bg-white" aria-label="Get started with waste management">
 <div className="container mx-auto px-4 md:px-8">
 <FadeIn
 className="relative bg-[#042940] rounded-[5px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
 >
 <div className="lg:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center relative z-10">
 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5d520]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
 
 <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight tracking-tighter">
 {heading || <>Streamline Your <span className="text-[#c5d520]">Waste Management</span>&nbsp;Today</>}
 </h2>
 <p className="text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed">
 {subtitle || "One call. One partner. Every location covered. Stop juggling providers and start saving up to 30% on waste spend."}
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full" asChild>
 <Link href={ctaLink}>{ctaLabel}</Link>
 </Button>
 </div>
 </div>

 <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
 <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center lg:object-right" loading="lazy" />
 <div className="absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply"></div>
 <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent"></div>
 
 <FadeIn
 className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-[5px] transform md:hover:scale-105 transition-transform duration-300"
 >
 <a href={phoneLink} className="flex items-center justify-center sm:justify-start gap-3 hover:underline" data-testid="link-cta-phone-card">
 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c5d520] rounded-full flex items-center justify-center text-[#042940] shrink-0">
 <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
 </div>
 <span className="text-[#c5d520] text-base sm:text-xl font-bold whitespace-nowrap">{phone}</span>
 </a>
 </FadeIn>
 </div>
 </FadeIn>
 </div>
 </section>
 );
}
