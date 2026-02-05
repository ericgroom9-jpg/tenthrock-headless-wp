"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Logo from "@/components/shared/Logo";

const logoWhite = "/images/logos/Green-White-Logo.png";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";
const imgCyclist = "/images/stock/cyclist.jpg";
const imgParkWater = "/images/stock/floor-park.jpg";
const usMapVideo = "/assets_export/videos/us-map-pins-loop.mp4";

interface ServiceTemplateProps {
  serviceName: string;
  serviceDescription: string;
  heroImage?: string;
  subServices: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  processSteps?: {
    num: string;
    title: string;
    desc: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  stats?: {
    label: string;
    value: string;
    description: string;
  }[];
  caseStudy?: {
    title: string;
    description: string;
    image: string;
    stats: { value: string; label: string }[];
  };
}

const defaultProcessSteps = [
  { num: "01", title: "You Request Service", desc: "Call us or book online. We are ready 24/7 to handle your waste needs immediately." },
  { num: "02", title: "We Dispatch Your Team", desc: "Local crews are deployed within hours, not days, ensuring your project stays on schedule." },
  { num: "03", title: "We Execute The Job", desc: "Professional removal, haulage, and site clearing with full safety compliance." },
  { num: "04", title: "Documentation Provided", desc: "We provide full digital documentation and audit trails for every job completed." },
  { num: "05", title: "Satisfaction Guaranteed", desc: "We ensure your site is spotless and follow up to confirm you are 100% satisfied with our service." },
];

const defaultFaqs = [
  {
    question: "What types of commercial waste do you handle?",
    answer: "We handle all types of commercial waste including general refuse, recyclables, construction debris, hazardous materials (with proper certification), and specialized industry waste streams.",
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "Our emergency response team is available 24/7 and can typically arrive on-site within 2-4 hours for urgent situations in our service areas.",
  },
  {
    question: "Do you provide documentation for compliance?",
    answer: "Yes, we provide comprehensive documentation including waste manifests, certificates of destruction, recycling reports, and compliance documentation for regulatory requirements.",
  },
  {
    question: "What areas do you service?",
    answer: "We provide nationwide coverage with regional hubs strategically located to serve major metropolitan areas and surrounding regions efficiently.",
  },
  {
    question: "Can you handle multi-location contracts?",
    answer: "Absolutely. We specialize in enterprise-wide waste management programs and can coordinate services across multiple locations with centralized reporting and billing.",
  },
];

const defaultStats = [
  { label: "RESPONSE TIME", value: "30%", description: "Faster than industry average response times." },
  { label: "CLIENTS SERVED", value: "70K+", description: "Happy commercial clients nationwide." },
  { label: "SATISFACTION", value: "80%", description: "First-time resolution rate for all requests." },
];

const defaultCaseStudy = {
  title: "Case Study Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: imgCaseStudyMain,
  stats: [
    { value: "32%", label: "Cost reduction achieved" },
    { value: "32%", label: "Time saved on logistics" },
    { value: "32%", label: "Waste diverted from landfill" },
    { value: "32%", label: "Carbon footprint reduced" },
  ],
};

export default function ServiceTemplate({
  serviceName,
  serviceDescription,
  heroImage = imgServiceDumpsterRental,
  subServices,
  processSteps = defaultProcessSteps,
  faqs = defaultFaqs,
  stats = defaultStats,
  caseStudy = defaultCaseStudy,
}: ServiceTemplateProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    setCanScrollPrev(slider.scrollLeft > 10);
    setCanScrollNext(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    updateScrollButtons();
    slider.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    
    return () => {
      slider.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollSlider = (direction: 'prev' | 'next') => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const card = slider.querySelector('.service-card') as HTMLElement;
    if (!card) return;
    
    const cardWidth = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(slider).gap) || 24;
    const scrollAmount = cardWidth + gap;
    
    slider.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>

      <Navbar variant="floating" />

      <main id="main-content" className="flex-1">
        {/* Interior Hero Section */}
        <section className="relative bg-[#042940] overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/90 to-[#042940]/60" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
                {serviceName}
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl">
                {serviceDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                  data-testid="button-hero-cta"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 text-white min-h-[52px] rounded-full whitespace-nowrap backdrop-blur-sm bg-white/5"
                  data-testid="button-hero-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (123) 456-7890
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Slider Section */}
        <section className="py-16 md:py-24 bg-[#F9F9F6]" aria-labelledby="sub-services-heading">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-12"
            >
              <h2 id="sub-services-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter">
                Our Services
              </h2>
            </motion.div>

            {/* Slider Container with CSS scroll-snap */}
            <div className="relative">
              <div 
                ref={sliderRef}
                className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {subServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="service-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                  >
                    <div className="relative h-[480px] sm:h-[450px] lg:h-[560px] rounded-[5px] overflow-hidden bg-[#d2d2d2]">
                      <img 
                        src={service.image} 
                        alt={`${service.title} service`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/60 to-transparent" />
                      
                      {/* Content - Always visible for accessibility */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                          {service.title}
                        </h3>
                        
                        <div className="space-y-4">
                          <p className="text-white/90 text-sm sm:text-base">
                            {service.description}
                          </p>
                          <Link 
                            href={service.link}
                            className="inline-flex items-center justify-center w-full border border-white/30 text-white min-h-[52px] rounded-[5px] font-medium transition-colors backdrop-blur-sm bg-white/10 hover-elevate"
                            data-testid={`link-service-${i}`}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Slider Controls - 52px touch targets with scroll bounds */}
              {subServices.length > 1 && (
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => scrollSlider('prev')}
                    disabled={!canScrollPrev}
                    className="w-[52px] h-[52px] rounded-full bg-[#042940] border border-[#042940] flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover-elevate"
                    aria-label="Previous slide"
                    data-testid="button-slider-prev"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => scrollSlider('next')}
                    disabled={!canScrollNext}
                    className="w-[52px] h-[52px] rounded-full bg-[#042940] border border-[#042940] flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover-elevate"
                    aria-label="Next slide"
                    data-testid="button-slider-next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works Accordion Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-[5px] overflow-hidden"
              >
                <img 
                  src={imgCaseStudyMain} 
                  alt="How it works"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Accordion Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-10 md:mb-16">
                  How it Works
                </h2>

                <div className="space-y-0">
                  {processSteps.map((step, i) => (
                    <div key={i} className="border-b border-[#bcbcbc] last:border-b-0">
                      <button
                        onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                        className="w-full min-h-[52px] py-6 flex items-start gap-6 text-left"
                        aria-expanded={activeStep === i}
                        data-testid={`button-step-${i}`}
                      >
                        <span className="text-2xl md:text-3xl font-semibold text-[#042940]">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#042940]">
                            {step.title}
                          </h3>
                          <AnimatePresence>
                            {activeStep === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-[#042940]/80 mt-3 text-base md:text-lg">
                                  {step.desc}
                                </p>
                                {/* Progress Bar */}
                                <div className="mt-4 h-[2px] bg-[#bcbcbc] w-full">
                                  <motion.div
                                    className="h-full bg-[#042940]"
                                    initial={{ width: 0 }}
                                    animate={{ width: "60%" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button 
                    size="lg" 
                    className="bg-[#042940] text-white min-h-[52px] rounded-full"
                    data-testid="button-process-cta"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ready to Start CTA Section */}
        <section className="py-16 md:py-24 bg-[#f8f8f8]" aria-labelledby="ready-cta-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left max-w-sm"
              >
                <h2 id="ready-cta-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
                  Ready<br />to start?
                </h2>
                <p className="text-[#042940]/80 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>

              {/* Phone Mockup Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[3/5]">
                  <img 
                    src={imgCyclist} 
                    alt="Mobile app preview"
                    className="w-full h-full object-cover rounded-[20px] shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042940]/40 to-transparent rounded-[20px]" />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-white text-lg font-bold">We're closer</p>
                    <p className="text-white/80 text-sm">than you think!</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Why Clients Call Us */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="stats-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter">
                  Why Clients Call Us Again and Again.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <p className="text-[#042940]/80 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-[#042940] text-white min-h-[52px] rounded-full whitespace-nowrap"
                    data-testid="button-stats-cta"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-[#042940] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                    data-testid="button-stats-phone"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-[#042940] p-6 md:p-8 flex flex-col justify-between min-h-[280px]"
                >
                  <p className="text-[#042940] font-semibold text-lg">
                    {stat.label}
                  </p>
                  <div className="space-y-4">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#c5d520] text-right">
                      {stat.value}
                    </p>
                    <div className="h-px bg-[#042940]" />
                    <p className="text-[#042940]/80 text-right text-sm md:text-base">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="case-study-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Images Grid */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="aspect-[4/3] rounded-[5px] overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  <div className="aspect-square rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb1} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb2} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb3} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h2 id="case-study-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-6">
                  {caseStudy.title}
                </h2>
                <p className="text-[#042940]/80 text-base md:text-lg mb-8">
                  {caseStudy.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {caseStudy.stats.map((stat, i) => (
                    <div key={i} className="py-4">
                      <p className="text-4xl md:text-5xl font-bold text-[#042940]">{stat.value}</p>
                      <p className="text-[#042940]/80 text-sm md:text-base mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-fit bg-[#042940] text-white min-h-[52px] rounded-full"
                  data-testid="button-case-study-cta"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-[#042940] tracking-tighter mb-4">
                FAQs
              </h2>
              <p className="text-[#042940]/80 text-base md:text-lg max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </motion.div>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-t border-[#042940] last:border-b"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full min-h-[52px] py-5 md:py-6 flex items-center justify-between text-left gap-4"
                    aria-expanded={openFaq === i}
                    data-testid={`button-faq-${i}`}
                  >
                    <span className="text-lg md:text-xl font-bold text-[#042940]">
                      {faq.question}
                    </span>
                    <div className="shrink-0 w-[52px] h-[52px] rounded-full border border-[#042940] flex items-center justify-center">
                      {openFaq === i ? (
                        <Minus className="w-5 h-5 text-[#042940]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#042940]" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[#042940]/80 text-base md:text-lg pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#042940] text-white min-h-[52px] rounded-full whitespace-nowrap"
                data-testid="button-faq-cta"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[#042940] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                data-testid="button-faq-phone"
              >
                <Phone className="mr-2 h-5 w-5" />
                (123) 456-7890
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="location-heading">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
                Where to Find Us
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Serving businesses nationwide with regional offices for local support.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6 lg:space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
                  </div>
                  <p className="text-gray-600 ml-9">123 Sample St, Sydney NSW 2000 AU</p>
                  <Link 
                    href="#"
                    className="ml-9 inline-flex items-center min-h-[52px] text-[#042940] font-medium"
                    data-testid="link-directions"
                  >
                    Get Directions <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
                  </div>
                  <p className="text-gray-600 ml-9">Available 24/7 for emergencies</p>
                  <p className="text-[#042940] font-semibold ml-9">+1 (555) 000-0000</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Business Hours</h3>
                  </div>
                  <p className="text-gray-600 ml-9">Monday-Friday: 9:00am – 4:30pm</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 relative aspect-video rounded-[5px] overflow-hidden bg-gray-100"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={usMapVideo} type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#042940] rounded-[5px] overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-[1.1] tracking-tighter">
                    CTA Banner
                  </h2>
                  <p className="text-white/80 text-base md:text-lg max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                    data-testid="button-final-cta"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-white/30 text-white min-h-[52px] rounded-full whitespace-nowrap"
                    data-testid="button-final-phone"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" aria-label="Site footer" className="bg-[#042940] text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Logo variant="white" />
              <p className="text-white/60 leading-relaxed max-w-xs">
                Redefining commercial waste management with speed, transparency, and reliability across all 50 states.
              </p>
              <div className="flex gap-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white/5 flex items-center justify-center transition-colors cursor-pointer hover-elevate">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-[52px] h-[52px] rounded-full bg-white/5 flex items-center justify-center transition-colors cursor-pointer hover-elevate">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-[52px] h-[52px] rounded-full bg-white/5 flex items-center justify-center transition-colors cursor-pointer hover-elevate">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-[52px] h-[52px] rounded-full bg-white/5 flex items-center justify-center transition-colors cursor-pointer hover-elevate">
                  <Facebook className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/services/waste-removal" className="block py-2 hover:text-[#c5d520] transition-colors">Waste Removal</Link></li>
                <li><Link href="/services/dumpster-rentals" className="block py-2 hover:text-[#c5d520] transition-colors">Dumpster Rentals</Link></li>
                <li><Link href="/services/emergency-waste-removal" className="block py-2 hover:text-[#c5d520] transition-colors">Emergency Waste Removal</Link></li>
                <li><Link href="/services/commercial-waste" className="block py-2 hover:text-[#c5d520] transition-colors">Commercial Waste Services</Link></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="block py-2 hover:text-[#c5d520] transition-colors">About Us</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] transition-colors">Careers</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] transition-colors">Success Stories</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-bold text-lg text-white">Stay Updated</h3>
              <p className="text-white/60">
                Get the latest industry insights and compliance updates.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 focus-visible:ring-[#c5d520] rounded-full px-6" 
                />
                <Button size="lg" className="bg-[#c5d520] text-[#042940] min-h-[52px] rounded-full">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="pt-4 border-t border-white/10 mt-6">
                <p className="text-sm font-bold text-white mb-2">Need Immediate Help?</p>
                <a href="tel:8885550123" className="text-xl font-bold text-[#c5d520] hover:underline">
                  (888) 555-0123
                </a>
              </div>
            </motion.div>
          </div>
          
          <Separator className="bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>© 2026 Tenth Rock Solutions. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
