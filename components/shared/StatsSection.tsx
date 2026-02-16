"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const imgParkWater = "/images/stock/floor-park.jpg";

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD]">
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
              <p className="text-lg text-primary/60 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap rounded-full">
                  Request a Service
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap rounded-full">
                   <Phone className="w-5 h-5 text-secondary" /> (888) 555-0123
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-8">
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                <div className="text-7xl font-extrabold text-primary mb-4">30%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
             
             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="h-64 w-full rounded-[5px] overflow-hidden mb-8">
                  <img src={imgParkWater} className="w-full h-full object-cover" alt="Stats Visual" />
                </div>
                <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                <div className="text-7xl font-extrabold text-primary mb-4">70K</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>

             <div className="border border-primary/10 p-8 rounded-[5px] bg-white">
                <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                <div className="text-7xl font-extrabold text-primary mb-4">80%</div>
                <Separator className="bg-primary/10 mb-4" />
                <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
