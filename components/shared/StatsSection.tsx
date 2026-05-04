"use client";

import Link from "next/link";

import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const imgParkWater = "/images/stock/why-clients-nyc-sunrise.jpg";

interface StatsSectionProps {
  tagline?: string;
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  phoneLabel?: string;
  phoneLink?: string;
  image?: string;
  imageAlt?: string;
  cards?: { title: string; value: string; description: string }[];
}

const defaultCards = [
  { title: "Average Cost Savings", value: "30%", description: "Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization." },
  { title: "Locations Managed", value: "5K+", description: "Commercial locations across 48 states have trusted Tenth Rock for consistent, reliable waste service." },
  { title: "Rapid Response Rate", value: "98%", description: "When we commit to a timeline, we hit it. Delays cost money and can damage your brand. We move fast to stabilize your site, keep operations running, and protect your business." },
];

export default function StatsSection({
  tagline = "Key Metrics",
  heading = "Why Clients Call Us Again and Again.",
  subtitle = "Numbers tell the story. Our clients stick with us because we deliver measurable results: lower costs, faster response, and fewer headaches managing waste across multiple locations.",
  ctaLabel = "Request A Service",
  ctaLink = "/request-a-service",
  phoneLabel = "727.510.5454",
  phoneLink = "tel:+17275105454",
  image,
  imageAlt,
  cards = defaultCards,
}: StatsSectionProps) {
  const statsImage = imgParkWater;
  const statsImageAlt = image ? (imageAlt || "Tenth Rock nationwide waste operations") : "Tenth Rock nationwide waste operations";
  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD]" aria-label="Key metrics and statistics">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <FadeIn
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  {tagline}
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter">
                {heading}
              </h2>
              <p className="text-lg text-primary/70 mb-8">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap rounded-full" asChild>
                  <Link href={ctaLink}>{ctaLabel}</Link>
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap rounded-full" asChild>
                   <a href={phoneLink}><Phone className="w-5 h-5 text-secondary" /> {phoneLabel}</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-8">
             {cards.map((card, i) => (
               <div key={i} className="border border-primary/10 p-8 rounded-[5px] bg-white">
                  {i === 1 && (
                    <div className="relative h-64 w-full rounded-[5px] overflow-hidden mb-8">
                      <Image src={statsImage} alt={statsImageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
                    </div>
                  )}
                  <h3 className="font-semibold text-xl text-primary mb-4">{card.title}</h3>
                  <div className="text-7xl font-extrabold text-primary mb-4">{card.value}</div>
                  <Separator className="bg-primary/10 mb-4" />
                  <p className="text-primary/70">{card.description}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
