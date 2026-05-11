"use client";

import FadeIn from "@/components/shared/FadeIn";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

interface ProcessSectionProps {
  tagline?: string;
  heading?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  testIdPrefix?: string;
}

const defaultSteps: ProcessStep[] = [
  { num: "01", title: "You Call Us", desc: "Our experts are on standby 24/7 to solve it immediately." },
  { num: "02", title: "We Scope the Job", desc: "A dedicated project manager is assigned to your account. They assess the situation and build a plan." },
  { num: "03", title: "You Get a Flat Rate", desc: "One price, upfront, in writing. No hourly surprises, no fuel surcharges, no hidden line items. You approve it before anything moves." },
  { num: "04", title: "Crews Are Dispatched", desc: "Our team is deployed to your site. Your project manager coordinates every detail and sends real-time updates until the job is done." },
  { num: "05", title: "Problem Solved", desc: "Waste is removed, the site is clean, and you get photo documentation confirming completion. One invoice. Done." },
];

export default function ProcessSection({
  tagline = "Our Process",
  heading = "How It Works",
  subtitle = "From first call to job complete, here's exactly what happens.",
  steps = defaultSteps,
  testIdPrefix = "process",
}: ProcessSectionProps) {
  return (
    <section id="process" aria-labelledby={`${testIdPrefix}-heading`} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
              {tagline}
          </div>
          <h2 id={`${testIdPrefix}-heading`} className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
            {heading}
          </h2>
          <p className="text-lg text-[#042940]/70">
            {subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 ${steps.length === 5 ? "xl:grid-cols-5" : steps.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-5"} gap-3`}>
          {steps.map((step, i) => (
            <FadeIn 
              key={i}
              className="group bg-white p-6 md:p-10 rounded-[5px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] active:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col items-start sm:items-center text-left sm:text-center md:hover:-translate-y-1"
              data-testid={`${testIdPrefix}-step-${i}`}
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
