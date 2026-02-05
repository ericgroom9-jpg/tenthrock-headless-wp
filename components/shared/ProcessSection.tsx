"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "You Request Service", desc: "Call us or book online. We are ready 24/7 to handle your waste needs immediately." },
  { num: "02", title: "We Dispatch Your Team", desc: "Local crews are deployed within hours, not days, ensuring your project stays on schedule." },
  { num: "03", title: "We Execute The Job", desc: "Professional removal, haulage, and site clearing with full safety compliance." },
  { num: "04", title: "Documentation Provided", desc: "We provide full digital documentation and audit trails for every job completed." },
  { num: "05", title: "Satisfaction Guaranteed", desc: "We ensure your site is spotless and follow up to confirm you are 100% satisfied with our service." },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              Our Process
          </div>
          <h2 id="process-heading" className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
            How It Works
          </h2>
          <p className="text-lg text-[#042940]/60">
            A simple, transparent process designed to get your problem solved fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-6 md:p-10 rounded-[5px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] active:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col items-start sm:items-center text-left sm:text-center md:hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-[#F9F9F6] group-hover:bg-[#c5d520] transition-colors duration-300 flex items-center justify-center text-lg font-bold text-[#042940] mb-8 shrink-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-[#042940] mb-4 group-hover:text-[#c5d520] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#042940]/70 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
