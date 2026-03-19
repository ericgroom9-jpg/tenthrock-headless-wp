"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const imgParkWater = "/images/stock/floor-park.jpg";

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD]" aria-label="Key metrics and statistics">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Key Metrics
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter">
                Why Clients Call Us Again and Again.
              </h2>
              <p className="text-lg text-primary/70 mb-8">
                Numbers tell the story. Our clients stick with us because we deliver measurable results: lower costs, faster response, and fewer headaches managing waste across multiple locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap rounded-full">
                  Request a Service
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap rounded-full">
                   <Phone className="w-5 h-5 text-secondary" /> 727.510.5454
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-8">
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">Average Cost Savings</div>
                <div className="text-7xl font-extrabold text-primary mb-4">30%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization.</p>
             </div>
             
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="relative h-64 w-full rounded-[5px] overflow-hidden mb-8">
                  <Image src={imgParkWater} alt="Tenth Rock nationwide waste operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
                </div>
                <div className="font-semibold text-xl text-primary mb-4">Locations Managed</div>
                <div className="text-7xl font-extrabold text-primary mb-4">5K+</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Commercial locations across 48 states trust Tenth Rock for consistent, reliable waste service.</p>
             </div>

             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">On-Time Service Rate</div>
                <div className="text-7xl font-extrabold text-primary mb-4">98%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/70">Our dispatched crews arrive when promised. Missed pickups cost you money. We don't let that happen.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
