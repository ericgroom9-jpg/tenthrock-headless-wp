"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";

const stats = [
  { value: "32%", label: "Cost Reduction" },
  { value: "98%", label: "Recycling Rate" },
  { value: "12hr", label: "Response Time" },
  { value: "0", label: "Compliance Issues" }
];

export default function CaseStudySection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-primary/5" aria-label="Case studies">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images (order-2 on mobile, order-1 on lg) */}
          <div className="space-y-4 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[5px] overflow-hidden h-[400px]"
            >
              <Image 
                src={imgCaseStudyMain} 
                alt="Case Study Main" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
                loading="lazy"
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[imgCaseStudyThumb1, imgCaseStudyThumb2, imgCaseStudyThumb3].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  className="relative rounded-[5px] overflow-hidden aspect-square"
                >
                  <Image 
                    src={img} 
                    alt={`Case Study Detail ${i + 1}`} 
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover" 
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content (order-1 on mobile, order-2 on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter leading-tight">
              Case Study: <br/>Urban Redevelopment
            </h2>
            <p className="text-lg text-primary/70 mb-8 md:mb-12 leading-relaxed">
              When a major metropolitan development needed a complete waste management overhaul for a 3-year project, they turned to Tenth Rock. We implemented a comprehensive diversion strategy that saved costs and exceeded sustainability goals.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-extrabold text-[#c5d520] mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-primary uppercase tracking-wide">{stat.label}</div>
                  <div className="h-1 w-12 bg-primary/10 mt-3"></div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary active:bg-primary hover:text-white active:text-white text-primary transition-all duration-300 shadow-sm hover:shadow-lg active:shadow-lg min-w-[44px] min-h-[44px]"
                aria-label="Previous case study"
                data-testid="button-case-study-prev"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                className="w-14 h-14 rounded-full bg-[#042940] text-white flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] hover:text-[#042940] active:text-[#042940] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]"
                aria-label="Next case study"
                data-testid="button-case-study-next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
