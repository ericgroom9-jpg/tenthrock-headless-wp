"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StatsSection from "@/components/shared/StatsSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";

const imgOurStory = "/images/stock/clean-city-hero.jpg";
const imgAtOurCore = "/images/stock/city-nature.jpg";
const imgCommunity = "/images/stock/cyclist.jpg";

const coreValues = [
  {
    title: "Reliability You Can Count On",
    description: "We show up when we say we will, every time. Our nationwide network ensures consistent service quality across all 50 states."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. Our upfront pricing model means you always know exactly what you're paying for."
  },
  {
    title: "Environmental Responsibility",
    description: "We prioritize sustainable disposal methods and maximize recycling rates to minimize environmental impact."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Our Story Hero Section */}
      <section 
        className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-12 md:mb-16">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-bold text-[#c5d520] uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 
                id="our-story-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary leading-[1.05] tracking-tighter"
              >
                Tell the Story of How Your Company Came About
              </h1>
            </motion.div>
            
            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pt-8"
            >
              <div className="text-base text-primary/70 leading-relaxed space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                </p>
                <p>
                  Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus.
                </p>
                <p>
                  Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Full Width Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-[5px] overflow-hidden aspect-[16/9] md:aspect-[21/9]"
          >
            <img 
              src={imgOurStory} 
              alt="Tenth Rock company story" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* At Our Core Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="core-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="core-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-10 leading-tight"
              >
                AT OUR CORE
              </h2>
              
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {coreValues.map((value, index) => (
                  <AccordionItem 
                    key={value.title} 
                    value={`item-${index}`}
                    className="border-0"
                    data-testid={`accordion-item-${index}`}
                  >
                    <AccordionTrigger 
                      className="text-xl md:text-2xl font-semibold text-primary py-4 px-6 rounded-[5px] hover:no-underline data-[state=open]:bg-[#c5d520]/10 transition-colors"
                      data-testid={`accordion-trigger-${index}`}
                    >
                      {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-base text-primary/70 leading-relaxed">
                        {value.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                  data-testid="button-schedule-demo"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold"
                  data-testid="button-more-solutions"
                >
                  More Solutions
                </Button>
              </div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square"
            >
              <img 
                src={imgAtOurCore} 
                alt="Our core values" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-16 md:py-20 bg-[#F9F9F6]" aria-labelledby="associations-heading">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 id="associations-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight">
              Associations
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20"
          >
            {[
              { src: "/images/associations/swana.png", alt: "SWANA - Solid Waste Association of North America" },
              { src: "/images/associations/nawbo.png", alt: "NAWBO - National Association of Women Business Owners" },
              { src: "/images/associations/ifma.png", alt: "IFMA - International Facility Management Association" },
              { src: "/images/associations/icsc.png", alt: "ICSC" },
            ].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                data-testid={`img-association-logo-${i}`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* In The Community Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-white"
        aria-labelledby="community-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image (order-2 on mobile, order-1 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[5px] overflow-hidden aspect-[4/5] lg:aspect-square order-2 lg:order-1"
            >
              <img 
                src={imgCommunity} 
                alt="In the community" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Right Column - Content (order-1 on mobile, order-2 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 
                id="community-heading"
                className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight"
              >
                IN THE COMMUNITY
              </h2>
              <p className="text-base text-primary/70 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                  data-testid="button-community-cta"
                >
                  Learn More
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary rounded-full font-bold"
                  data-testid="button-community-phone"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (888) 555-0123
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (same as homepage) */}
      <StatsSection />

      {/* Case Study Section (same as homepage) */}
      <CaseStudySection />

      {/* FAQ Section (same as homepage) */}
      <FaqSection />

      {/* Location Section (same as homepage) */}
      <LocationSection />

      {/* Final CTA Section (same as homepage) */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
