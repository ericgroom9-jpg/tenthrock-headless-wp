"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Play,
  User,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";

const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";

const imgCyclist = "/images/stock/cyclist.jpg";
const imgParkWater = "/images/stock/floor-park.jpg";

const usMapVideo = "/assets_export/videos/us-map-pins-loop.mp4";

const Logo = ({ variant = "main", className = "" }: { variant?: "main" | "white"; className?: string }) => {
  const logoSrc = variant === "white" ? logoWhite : logoMain;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoSrc} 
        alt="Tenth Rock Waste Solutions" 
        className="h-8 md:h-10 w-auto object-contain" 
      />
    </div>
  );
};

const services = [
  {
    title: "Emergency Overflow",
    desc: "Rapid response teams available 24/7 for unexpected waste emergencies and overflow situations.",
    img: imgServiceEmergencyOverflow,
    features: ["24/7 Response", "Rapid Deployment", "Emergency Cleanup"],
  },
  {
    title: "Dumpster Rentals",
    desc: "Flexible dumpster rental solutions for construction, renovation, and commercial cleanouts.",
    img: imgServiceDumpsterRental,
    features: ["Multiple Sizes", "Flexible Terms", "Quick Delivery"],
  },
  {
    title: "Event & Stadium",
    desc: "Comprehensive waste management for large-scale events, concerts, and sporting venues.",
    img: imgServiceEventStadium,
    features: ["Large Events", "Venue Support", "Post-Event Cleanup"],
  },
  {
    title: "Maintenance Services",
    desc: "Regular maintenance and cleaning services to keep your facilities spotless and compliant.",
    img: imgServiceMaintenance,
    features: ["Scheduled Service", "Compliance Ready", "Full Reporting"],
  },
  {
    title: "Store Decommissioning",
    desc: "Complete store closure and decommissioning services with responsible disposal practices.",
    img: imgServiceStoreDecommissioning,
    features: ["Full Removal", "Asset Recovery", "Eco-Friendly"],
  },
  {
    title: "Centralized Programs",
    desc: "Enterprise-wide waste management programs for multi-location businesses.",
    img: imgServiceCentralizedProgram,
    features: ["Multi-Location", "Single Invoice", "Dedicated Support"],
  },
];

const processSteps = [
  {
    number: 1,
    title: "Get In Touch",
    description: "Contact our team to discuss your waste management needs and get a customized quote.",
  },
  {
    number: 2,
    title: "We Dispatch Your Team",
    description: "Our trained professionals are dispatched to your location with the right equipment.",
  },
  {
    number: 3,
    title: "We Execute The Job",
    description: "Efficient and thorough waste removal following all environmental regulations.",
  },
  {
    number: 4,
    title: "Follow-Up & Reporting",
    description: "Detailed documentation and follow-up to ensure complete satisfaction.",
  },
];

const faqs = [
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

export default function CommercialWasteServices() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="shrink-0">
              <Logo variant="main" />
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/services/commercial-waste" className="text-sm font-bold text-[#042940] hover:text-[#c5d520] transition-colors py-2">
                Commercial Waste Services
              </Link>
              <Link href="/#emergency" className="text-sm font-bold text-[#042940] hover:text-[#c5d520] transition-colors py-2">
                Emergency Waste Removal
              </Link>
              <Link href="/#sectors" className="text-sm font-bold text-[#042940] hover:text-[#c5d520] transition-colors py-2">
                Who We Serve
              </Link>
              <Link href="/#process" className="text-sm font-bold text-[#042940] hover:text-[#c5d520] transition-colors py-2">
                Our Process
              </Link>
              <Link href="/#about" className="text-sm font-bold text-[#042940] hover:text-[#c5d520] transition-colors py-2">
                About Us
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button 
                size="sm" 
                className="hidden sm:flex bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
                data-testid="button-nav-cta"
              >
                Get a Quote
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden min-h-[52px] min-w-[52px]"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                aria-label={isNavExpanded ? "Close menu" : "Open menu"}
                data-testid="button-mobile-menu"
              >
                {isNavExpanded ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isNavExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 flex flex-col gap-2">
                  <Link href="/services/commercial-waste" className="text-lg font-bold text-[#042940] py-3 px-2 hover:text-[#c5d520] hover:bg-gray-50 rounded-[5px] min-h-[52px] flex items-center" onClick={() => setIsNavExpanded(false)}>
                    Commercial Waste Services
                  </Link>
                  <Link href="/#emergency" className="text-lg font-bold text-[#042940] py-3 px-2 hover:text-[#c5d520] hover:bg-gray-50 rounded-[5px] min-h-[52px] flex items-center" onClick={() => setIsNavExpanded(false)}>
                    Emergency Waste Removal
                  </Link>
                  <Link href="/#sectors" className="text-lg font-bold text-[#042940] py-3 px-2 hover:text-[#c5d520] hover:bg-gray-50 rounded-[5px] min-h-[52px] flex items-center" onClick={() => setIsNavExpanded(false)}>
                    Who We Serve
                  </Link>
                  <Link href="/#process" className="text-lg font-bold text-[#042940] py-3 px-2 hover:text-[#c5d520] hover:bg-gray-50 rounded-[5px] min-h-[52px] flex items-center" onClick={() => setIsNavExpanded(false)}>
                    Our Process
                  </Link>
                  <Link href="/#about" className="text-lg font-bold text-[#042940] py-3 px-2 hover:text-[#c5d520] hover:bg-gray-50 rounded-[5px] min-h-[52px] flex items-center" onClick={() => setIsNavExpanded(false)}>
                    About Us
                  </Link>
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Button className="w-full bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full" onClick={() => setIsNavExpanded(false)}>
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#042940] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={imgServiceCentralizedProgram}
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
                Commercial Waste Services
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl">
                Comprehensive waste management solutions for businesses of all sizes. From routine collection to emergency response, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                  data-testid="button-hero-cta"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-[#042940] min-h-[52px] rounded-full whitespace-nowrap backdrop-blur-sm bg-white/5"
                  data-testid="button-hero-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (123) 456-7890
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Matching Homepage Design */}
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
                <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
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
              <div className="lg:col-span-4 flex flex-col space-y-[6px]">
                {services.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    onMouseEnter={() => setActiveService(i)}
                    className={`text-left px-6 md:px-8 py-4 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${
                      activeService === i 
                        ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" 
                        : "text-[#042940]/40 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"
                    }`}
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

              <div className="lg:col-span-8 cursor-pointer h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-[5px]" role="button" tabIndex={0} aria-label="View service details" onClick={() => console.log('Navigate to service details')} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && console.log('Navigate to service details')}>
                <div className="relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group">
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
                        src={services[activeService].img} 
                        alt={services[activeService].title} 
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/70 md:via-[#042940]/60 to-transparent opacity-95 md:opacity-90" />
                      
                      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
                            {services[activeService].title}
                          </h3>
                          <p className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8">
                            {services[activeService].desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 mb-8">
                            {services[activeService].features.map((feature, idx) => (
                              <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors">
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                            Learn More <ArrowRight className="w-5 h-5" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Matching Homepage Design */}
        <section id="process" aria-labelledby="process-heading" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
                Our Process
              </div>
              <h2 id="process-heading" className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
                How It Works
              </h2>
              <p className="text-lg text-[#042940]/60">
                A simple, transparent process designed to get your problem solved fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#042940] mb-4 group-hover:text-[#c5d520] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#042940]/70 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Check If We Service Your Area - Matching Homepage Design */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center"
            >
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#c5d520] animate-pulse" />
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

        {/* Stats Section - Matching Homepage Design */}
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
                    Key Metrics
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
                    Why Clients Call Us Again and Again.
                  </h2>
                  <p className="text-lg text-[#042940]/60 mb-8">
                    We've built our reputation on reliability, efficiency, and exceptional customer service. Our clients trust us to handle their waste management needs because we consistently deliver results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="w-full sm:w-auto bg-[#042940] text-white min-h-[52px] whitespace-nowrap">
                      Request a Service
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full sm:w-auto text-[#042940] hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap">
                      <Phone className="w-5 h-5 text-[#c5d520]" /> (888) 555-0123
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
                  className="border border-[#042940]/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="font-semibold text-xl text-[#042940] mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">30%</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/60">Average cost savings for our clients</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border border-[#042940]/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="h-64 w-full rounded-[5px] overflow-hidden mb-8">
                    <img src={imgParkWater} className="w-full h-full object-cover" alt="Stats Visual" />
                  </div>
                  <div className="font-semibold text-xl text-[#042940] mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">70K</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/60">Tons of waste processed annually</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border border-[#042940]/10 p-8 rounded-[5px] bg-white"
                >
                  <div className="font-semibold text-xl text-[#042940] mb-4">Case / Stat Here</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">80%</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/60">Waste diverted from landfills</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="case-study-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden">
                  <img 
                    src={imgCaseStudyMain} 
                    alt="Case study main"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[imgCaseStudyThumb1, imgCaseStudyThumb2, imgCaseStudyThumb3].map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-[5px] overflow-hidden">
                      <img 
                        src={img} 
                        alt={`Case study thumbnail ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 id="case-study-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-6">
                  Case Study Title
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  {[
                    { value: "32%", label: "Reduction in waste costs" },
                    { value: "32%", label: "Improvement in efficiency" },
                    { value: "32%", label: "Increase in recycling" },
                    { value: "32%", label: "Customer satisfaction" },
                  ].map((item, index) => (
                    <div key={index} className="py-2">
                      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940]">{item.value}</p>
                      <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
                >
                  View Full Case Study
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Matching Homepage Design */}
        <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#042940]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <div className="text-left sm:text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
                Common Questions
              </div>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-[#042940] tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-lg text-[#042940]/60 max-w-2xl mx-auto">
                Everything you need to know about our commercial waste services. Can't find the answer you're looking for? Reach out to our team.
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
                      openFaq === i 
                        ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" 
                        : "bg-white border-transparent hover:border-[#042940]/10 shadow-sm hover:shadow-md"
                    }`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <button className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none min-h-[52px]">
                      <span className={`text-xl font-bold transition-colors duration-300 ${
                        openFaq === i ? "text-white" : "text-[#042940]"
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === i 
                          ? "bg-[#c5d520] rotate-180" 
                          : "bg-[#042940]/5 group-hover:bg-[#042940]/10"
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                          openFaq === i ? "text-[#042940]" : "text-[#042940]"
                        }`} />
                      </div>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
              <p className="text-[#042940]/60 mb-4 font-medium">Still Have Questions?</p>
              <Button size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="location-heading">
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
                  <Button variant="link" className="ml-9 p-0 h-auto text-[#042940] hover:text-[#c5d520]">
                    Get Directions <ChevronRight className="h-4 w-4" />
                  </Button>
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

        {/* Final CTA - Matching Homepage Design */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#042940] rounded-[5px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5d520]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-[1.1] tracking-tighter">
                  Streamline Your <span className="text-[#c5d520]">Waste Management</span>&nbsp;Today
                </h2>
                <p className="text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed">
                  Join thousands of businesses optimizing their disposal costs and sustainability with Tenth Rock. One partner, zero headaches.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full">
                    Request a Service
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                <img src={imgCyclist} alt="Ready to start" className="absolute inset-0 w-full h-full object-cover object-center lg:object-right" />
                <div className="absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent" />
                
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

      {/* Footer - Matching Homepage Design */}
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
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
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
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Waste Removal</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Dumpster Rentals</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Recycling Programs</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Emergency Cleanups</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Compliance Audits</a></li>
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
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">About Us</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Careers</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Success Stories</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Partner Program</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Contact</a></li>
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
                <Button size="lg" className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full">
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
