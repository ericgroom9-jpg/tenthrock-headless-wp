"use client";

import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

const defaultPartnerLogos = [
  { src: "/images/logos/7-eleven.png", alt: "7-Eleven" },
  { src: "/images/logos/arbys.png", alt: "Arby's" },
  { src: "/images/logos/best-buy.png", alt: "Best Buy" },
  { src: "/images/logos/bonefish.png", alt: "Bonefish Grill" },
  { src: "/images/logos/bp.png", alt: "BP" },
  { src: "/images/logos/chipotle.png", alt: "Chipotle" },
  { src: "/images/logos/circle-k.png", alt: "Circle K" },
  { src: "/images/logos/dollar-general.png", alt: "Dollar General" },
  { src: "/images/logos/doordash.png", alt: "DoorDash" },
  { src: "/images/logos/dunkin.png", alt: "Dunkin'" },
  { src: "/images/logos/five-below.png", alt: "Five Below" },
  { src: "/images/logos/food-lion.png", alt: "Food Lion" },
  { src: "/images/logos/gnc.png", alt: "GNC" },
  { src: "/images/logos/goodyear.png", alt: "Goodyear" },
  { src: "/images/logos/heb.png", alt: "H-E-B" },
  { src: "/images/logos/kfc.png", alt: "KFC" },
  { src: "/images/logos/kroger.png", alt: "Kroger" },
  { src: "/images/logos/maggianos.png", alt: "Maggiano's" },
  { src: "/images/logos/mcdonalds.png", alt: "McDonald's" },
  { src: "/images/logos/red-lobster.png", alt: "Red Lobster" },
];

interface LogoReelSectionProps {
  headline?: string;
  testIdPrefix?: string;
  logos?: { src: string; alt: string }[];
}

export default function LogoReelSection({ 
  headline = "Supporting these leading national brands",
  testIdPrefix = "logo-reel",
  logos,
}: LogoReelSectionProps) {
  const partnerLogos = logos && logos.length > 0 ? logos : defaultPartnerLogos;
  return (
    <section className="py-12 bg-white border-b border-primary/5 overflow-hidden" data-testid={`section-${testIdPrefix}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div data-testid={`text-${testIdPrefix}-headline`} className="text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-primary/70 [text-wrap:balance] sm:[text-wrap:normal]">
            {headline}
          </div>
        </div>
      </div>

      <FadeIn
        className="relative flex overflow-hidden group"
      >
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8">
          {partnerLogos.map((logo, i) => (
            <div key={`logo-1-${i}`} className="relative h-16 w-32 flex items-center justify-center grayscale md:grayscale opacity-60 md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} fill sizes="128px" quality={80} className="object-contain" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8">
          {partnerLogos.map((logo, i) => (
            <div key={`logo-2-${i}`} className="relative h-16 w-32 flex items-center justify-center grayscale md:grayscale opacity-60 md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} fill sizes="128px" quality={80} className="object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
