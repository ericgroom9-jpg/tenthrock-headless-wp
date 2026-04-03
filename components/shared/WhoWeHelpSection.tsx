"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Trophy, Heart, Landmark, Utensils, Siren, Home as HomeIcon, Store } from "lucide-react";

const sectors = [
  { title: "Retail", desc: "Overflow pickups, compactor service, and store cleanouts for chains with 5 to 5,000 locations.", img: "/images/stock/hotel.jpg", icon: <Store className="w-6 h-6" />, href: "/industries/retail" },
  { title: "Stadiums & Events", desc: "Pre-event container placement, real-time monitoring, and post-event haul-off for venues of any size.", img: "/images/industries/industry-stadiums-events.jpg", icon: <Trophy className="w-6 h-6" />, href: "/industries/stadiums-events" },
  { title: "Faith Based", desc: "Scheduled and on-demand waste service for churches, campuses, and community event cleanup.", img: "/images/stock/industry-faith-based.jpg", icon: <Heart className="w-6 h-6" />, href: "/industries/faith-based" },
  { title: "Real Estate", desc: "Tenant turnover cleanouts, construction debris removal, and ongoing service for managed properties.", img: "/images/stock/industry-real-estate-balconies.jpg", icon: <HomeIcon className="w-6 h-6" />, href: "/industries/real-estate" },
  { title: "Natural Disasters", desc: "Rapid debris removal, emergency roll-offs, and storm damage cleanup deployed within hours.", img: "/images/stock/industry-natural-disasters-storm.jpg", icon: <Siren className="w-6 h-6" />, href: "/industries/natural-disasters" },
  { title: "Hospitality", desc: "Daily waste pickup, grease trap service, and pressure washing to keep guest-facing areas spotless.", img: "/images/stock/industry-hospitality.jpg", icon: <Utensils className="w-6 h-6" />, href: "/industries/hospitality" },
  { title: "Educational", desc: "Campus-wide waste programs, recycling coordination, and event cleanup for schools and universities.", img: "/images/stock/university.jpg", icon: <GraduationCap className="w-6 h-6" />, href: "/industries/educational" },
  { title: "Municipalities", desc: "Illegal dumping cleanup, public space maintenance, and disaster response for local governments.", img: "/images/stock/clean-city.jpg", icon: <Landmark className="w-6 h-6" />, href: "/industries/municipalities" },
];

function IndustryCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  return (
    <Link href={sector.href}>
      <div
        className="ind-card group relative h-[280px] md:h-[320px] rounded-[5px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl active:shadow-xl transition-shadow duration-300"
        data-testid={`industry-card-${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Image
          src={sector.img}
          alt={sector.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[rgba(4,41,64,0.82)] transition-colors duration-300 group-hover:bg-[rgba(4,41,64,0.6)] group-focus-within:bg-[rgba(4,41,64,0.6)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/40 md:via-transparent to-transparent opacity-90" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div>
            <div className="ind-card-icon w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center mb-4 transition-colors duration-300 bg-white/10 text-white group-hover:bg-[#c5d520] group-hover:text-[#042940] group-focus-within:bg-[#c5d520] group-focus-within:text-[#042940]">
              {sector.icon}
            </div>
            <h3 className="text-white font-bold text-xl leading-tight">{sector.title}</h3>
            <p className="ind-card-body text-white/90 text-sm mt-2">
              {sector.desc}
            </p>
            <div className="ind-card-cta flex items-center gap-2 text-[#c5d520] text-sm font-bold mt-3">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function WhoWeHelpSection() {
  return (
    <section id="sectors" aria-labelledby="sectors-heading" className="py-16 md:py-24 bg-[#F9F9F6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-left sm:text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Industries
          </div>
          <h2 id="sectors-heading" className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter leading-tight">Who We Help</h2>
          <p className="text-lg text-primary/70">
            From single-site operators to national brands, we support businesses that require reliable, consistent waste operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <IndustryCard key={i} sector={sector} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
