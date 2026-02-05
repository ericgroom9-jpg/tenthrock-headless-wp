"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronRight,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
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
    features?: string[];
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
  const [openItem, setOpenItem] = useState("item-0");
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>

      <Navbar variant="floating" />

      <main id="main-content" className="flex-1">
        {/* Interior Hero Section with Form */}
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
                  {serviceName}
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8">
                  {serviceDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#042940] min-h-[52px] rounded-[5px] whitespace-nowrap"
                    data-testid="button-hero-cta"
                  >
                    Call To Action
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-[#042940] border border-white text-white min-h-[52px] rounded-[5px] whitespace-nowrap"
                    data-testid="button-hero-phone"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </div>
              </motion.div>

              {/* Right Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[5px] p-6 md:p-8 shadow-2xl"
              >
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                        First name
                      </label>
                      <Input 
                        id="firstName"
                        type="text"
                        className="w-full h-12 border-primary/20 rounded-[5px] focus:border-primary focus:ring-primary"
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                        Last name
                      </label>
                      <Input 
                        id="lastName"
                        type="text"
                        className="w-full h-12 border-primary/20 rounded-[5px] focus:border-primary focus:ring-primary"
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        className="w-full h-12 border-primary/20 rounded-[5px] focus:border-primary focus:ring-primary"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone number
                      </label>
                      <Input 
                        id="phone"
                        type="tel"
                        className="w-full h-12 border-primary/20 rounded-[5px] focus:border-primary focus:ring-primary"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                        Company
                      </label>
                      <Input 
                        id="company"
                        type="text"
                        className="w-full h-12 border-primary/20 rounded-[5px] focus:border-primary focus:ring-primary"
                        data-testid="input-company"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-primary mb-2">
                        I'm interested in help with:
                      </label>
                      <select 
                        id="interest"
                        className="w-full h-12 px-3 border border-primary/20 rounded-[5px] bg-white text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        data-testid="select-interest"
                        defaultValue=""
                      >
                        <option value="" disabled>Select one...</option>
                        <option value="waste-removal">Waste Removal</option>
                        <option value="dumpster-rental">Dumpster Rental</option>
                        <option value="emergency">Emergency Services</option>
                        <option value="consulting">Waste Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Type your message..."
                      className="w-full px-3 py-3 border border-primary/20 rounded-[5px] bg-white text-primary placeholder:text-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary"
                        data-testid="checkbox-terms"
                      />
                      <span className="text-sm text-primary">
                        I accept the <a href="/terms" className="underline hover:text-secondary">Terms</a>
                      </span>
                    </label>
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 min-h-[52px] rounded-[5px] px-8"
                      data-testid="button-form-submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services Section - Matching Homepage Design Exactly */}
        <section id="services" aria-labelledby="services-heading" className="py-16 md:py-24 bg-[#F9F9F6]">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-16 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                Our Services
              </div>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-4 tracking-tighter">
                Commercial Waste Services
              </h2>
              <p className="text-lg text-[#042940]/60">
                Comprehensive solutions for businesses of all sizes, available nationwide.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Navigation List */}
              <div className="lg:col-span-4 flex flex-col space-y-[6px]">
                {subServices.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    onMouseEnter={() => setActiveService(i)}
                    className={`text-left px-6 md:px-8 py-4 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                      activeService === i 
                        ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" 
                        : "text-[#042940]/40 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"
                    }`}
                    data-testid={`button-service-${i}`}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {service.title}
                      {activeService === i && (
                        <motion.span layoutId="active-indicator" className="w-2 h-2 rounded-full bg-[#c5d520]" />
                      )}
                    </span>
                    {activeService === i && (
                      <motion.div
                        layoutId="active-bg"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5d520]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Display */}
              <div className="lg:col-span-8 h-full">
                <Link 
                  href={subServices[activeService]?.link || "#"} 
                  className="block relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2"
                  data-testid={`link-service-detail-${activeService}`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={subServices[activeService]?.image} 
                        alt={subServices[activeService]?.title} 
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/70 md:via-[#042940]/60 to-transparent opacity-95 md:opacity-90"></div>
                      
                      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
                            {subServices[activeService]?.title}
                          </h3>
                          <p className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8">
                            {subServices[activeService]?.description}
                          </p>
                          
                          {subServices[activeService]?.features && (
                            <div className="flex flex-wrap gap-4 mb-8">
                              {subServices[activeService].features.map((feature, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                            Learn More <ArrowRight className="w-5 h-5" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Matching Homepage Design Exactly */}
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
              {processSteps.map((step, i) => (
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

        {/* Zipcode Checker Section - Matching Homepage Design Exactly */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
            >
              {/* Background Grid & Glow */}
              <div 
                className="absolute inset-0 opacity-10 mix-blend-overlay" 
                style={{ 
                  backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.png)`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }} 
              />
              <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
                }} 
              />
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"></div>
                  Service Availability
                </div>
                
                <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter">
                  Check If We Service <span className="text-[#c5d520]">Your Area.</span>
                </h2>
                <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10">
                  Enter your zip code below to instantly see if our network of local vendors covers your location.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center items-center">
                  <Input 
                    placeholder="Enter Zip Code" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 rounded-full px-6 text-lg focus-visible:ring-[#c5d520] flex-1 w-full" 
                  />
                  <Button size="lg" className="bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-[0_0_30px_rgba(197,213,32,0.3)] hover:shadow-[0_0_50px_rgba(197,213,32,0.5)] active:shadow-[0_0_50px_rgba(197,213,32,0.5)] transition-all duration-300 w-full sm:w-auto min-h-[52px] whitespace-nowrap">
                    Check Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Matching Homepage Design Exactly */}
        <section className="py-16 md:py-24 bg-[#FDFDFD]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap">
                      Request a Service
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap">
                      <Phone className="w-5 h-5 text-secondary" /> (888) 555-0123
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="grid gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="border border-primary/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-primary mb-4">30%</div>
                  <Separator className="bg-primary/10 mb-4" />
                  <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border border-primary/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="h-64 w-full rounded-[5px] overflow-hidden mb-8">
                    <img src={imgParkWater} className="w-full h-full object-cover" alt="Stats Visual" />
                  </div>
                  <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-primary mb-4">70K</div>
                  <Separator className="bg-primary/10 mb-4" />
                  <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border border-primary/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="font-semibold text-xl text-primary mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-primary mb-4">80%</div>
                  <Separator className="bg-primary/10 mb-4" />
                  <p className="text-primary/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section - Matching Homepage Design Exactly */}
        <section className="py-16 md:py-24 bg-white border-b border-primary/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Images (order-2 on mobile, order-1 on lg) */}
              <div className="space-y-4 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[5px] overflow-hidden h-[400px]"
                >
                  <img 
                    src={caseStudy.image} 
                    alt="Case Study Main" 
                    className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700" 
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
                      className="rounded-[5px] overflow-hidden aspect-square"
                    >
                      <img 
                        src={img} 
                        alt={`Case Study Detail ${i + 1}`} 
                        className="w-full h-full object-cover md:hover:scale-110 transition-transform duration-500" 
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
                <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter">
                  {caseStudy.title}
                </h2>
                <p className="text-lg text-primary/70 mb-8 md:mb-12 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                  {caseStudy.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-extrabold text-[#c5d520] mb-1">{stat.value}</div>
                      <div className="text-sm font-bold text-primary uppercase tracking-wide">{stat.label}</div>
                      <div className="h-1 w-12 bg-primary/10 mt-3"></div>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="bg-primary text-white min-h-[52px] rounded-full"
                  data-testid="button-case-study-cta"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Matching Homepage Design Exactly */}
        <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <div className="text-left sm:text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Common Questions
              </div>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-primary tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-lg text-primary/60 max-w-2xl mx-auto">
                Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.
              </p>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`group rounded-[5px] border transition-all duration-300 overflow-hidden ${
                      openItem === `item-${i}` 
                        ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" 
                        : "bg-white border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"
                    }`}
                    onClick={() => setOpenItem(openItem === `item-${i}` ? "" : `item-${i}`)}
                  >
                    <button className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none">
                      <span className={`text-xl font-bold transition-colors duration-300 ${
                        openItem === `item-${i}` ? "text-white" : "text-primary"
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItem === `item-${i}` 
                          ? "bg-[#c5d520] rotate-180" 
                          : "bg-primary/5 group-hover:bg-primary/10"
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                          openItem === `item-${i}` ? "text-[#042940]" : "text-primary"
                        }`} />
                      </div>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openItem === `item-${i}` ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <p className="text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-left sm:text-center">
              <p className="text-primary/60 mb-4 font-medium">Still Have Questions?</p>
              <Button size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap">
                Contact Us
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
              className="relative bg-[#042940] rounded-[5px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Content Side */}
              <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5d520]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-[1.1] tracking-tighter">
                  Streamline Your <span className="text-[#c5d520]">Waste Management</span>&nbsp;Today
                </h2>
                <p className="text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed">
                  Join thousands of businesses optimizing their disposal costs and sustainability with Tenth Rock. One partner, zero headaches.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap">
                    Request a Service
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                <img src={imgCyclist} alt="Ready to start" className="absolute inset-0 w-full h-full object-cover object-center lg:object-right" />
                <div className="absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent"></div>
                
                {/* Floating Stat Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-[5px] max-w-[200px] sm:max-w-xs transform md:hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#c5d520] rounded-full flex items-center justify-center text-[#042940] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[#c5d520] text-xl font-bold">(888) 555-0123</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer - Shared Component */}
      <Footer />
    </div>
  );
}
