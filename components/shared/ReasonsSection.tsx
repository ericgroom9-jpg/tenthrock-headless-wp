"use client";

import Link from "next/link";

import FadeIn from "@/components/shared/FadeIn";
import { Headset, CheckCircle2, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface ReasonFeature {
  title: string;
  icon: ReactNode;
  desc: string;
}

interface ReasonsSectionProps {
  tagline?: string;
  heading?: string;
  subtitle?: string;
  buttonText?: string;
  features?: ReasonFeature[];
  testIdPrefix?: string;
}

const defaultFeatures: ReasonFeature[] = [
  { title: "Dedicated Point of Contact", icon: <Headset className="w-6 h-6" />, desc: "One person to handle everything. No call centers, no runarounds, just answers." },
  { title: "Job Completion Proof", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Visual confirmation for every job we complete, available instantly." },
  { title: "Local Crews, National Reach", icon: <MapPin className="w-6 h-6" />, desc: "Vetted local crews across 48 states. You get the responsiveness of a local provider with the accountability of a national partner." },
  { title: "Real Cost Savings", icon: <Truck className="w-6 h-6" />, desc: "Clients typically save up to 30% through vendor consolidation, rate negotiation, and right-sized service." }
];

export default function ReasonsSection({
  tagline = "Benefits",
  heading = "More Reasons You'll Love Us",
  subtitle = "We rebuilt waste management from the ground up to serve businesses with multiple locations. No hidden fees, no confusing contracts, no operational gaps.",
  buttonText = "Request A Service",
  features = defaultFeatures,
  testIdPrefix = "reasons",
}: ReasonsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8]" aria-label="Reasons to choose us" data-testid={`section-${testIdPrefix}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <FadeIn
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  {tagline}
               </div>
               <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter" data-testid={`text-${testIdPrefix}-heading`}>
                 {heading}
               </h2>
               <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                 {subtitle}
               </p>
               <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full" data-testid={`button-${testIdPrefix}-cta`} asChild>
                  <Link href="/request-a-service">{buttonText}</Link>
               </Button>
             </FadeIn>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <FadeIn 
                key={i} 
                className="group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-secondary/20 active:border-secondary/20 hover:shadow-xl active:shadow-xl transition-all duration-300"
                data-testid={`${testIdPrefix}-card-${i}`}
              >
                <div className="w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed group-hover:text-primary/80 transition-colors duration-300">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
