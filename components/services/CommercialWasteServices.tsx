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
    description: "Rapid response teams available 24/7 for unexpected waste emergencies and overflow situations.",
    img: imgServiceEmergencyOverflow,
  },
  {
    title: "Dumpster Rentals",
    description: "Flexible dumpster rental solutions for construction, renovation, and commercial cleanouts.",
    img: imgServiceDumpsterRental,
  },
  {
    title: "Event & Stadium",
    description: "Comprehensive waste management for large-scale events, concerts, and sporting venues.",
    img: imgServiceEventStadium,
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance and cleaning services to keep your facilities spotless and compliant.",
    img: imgServiceMaintenance,
  },
  {
    title: "Store Decommissioning",
    description: "Complete store closure and decommissioning services with responsible disposal practices.",
    img: imgServiceStoreDecommissioning,
  },
  {
    title: "Centralized Programs",
    description: "Enterprise-wide waste management programs for multi-location businesses.",
    img: imgServiceCentralizedProgram,
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

const stats = [
  { value: "30%", label: "Average cost savings for our clients" },
  { value: "70K", label: "Tons of waste processed annually" },
  { value: "80%", label: "Waste diverted from landfills" },
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
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/90 to-[#042940]/70" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-4 sm:mb-6">
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

        {/* Services Slider Section */}
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" aria-labelledby="services-heading">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter">
                Our Services
              </h2>
            </motion.div>

            <div className="relative">
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] snap-start"
                  >
                    <div className="relative h-[400px] sm:h-[480px] lg:h-[560px] rounded-[5px] overflow-hidden group cursor-pointer">
                      <img 
                        src={service.img} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {service.description}
                        </p>
                        <Button 
                          className="mt-4 bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevService}
                  className="rounded-full border-[#042940] text-[#042940] hover:bg-[#042940] hover:text-white min-h-[52px] min-w-[52px]"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextService}
                  className="rounded-full border-[#042940] text-[#042940] hover:bg-[#042940] hover:text-white min-h-[52px] min-w-[52px]"
                  aria-label="Next service"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="process-heading">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-[4/3] lg:aspect-square rounded-[5px] overflow-hidden">
                  <img 
                    src={imgParkWater} 
                    alt="How our process works"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter mb-8 lg:mb-12">
                  How It Works
                </h2>

                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`border-l-2 pl-4 sm:pl-6 py-3 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-r-[5px] ${
                        activeStep === index 
                          ? "border-[#c5d520] bg-gray-50" 
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      onClick={() => setActiveStep(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveStep(index)}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="text-xl sm:text-2xl font-semibold text-[#042940]">{step.number}</span>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#042940]">{step.title}</h3>
                          <AnimatePresence>
                            {activeStep === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-gray-600 mt-2 text-sm sm:text-base"
                              >
                                {step.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      {activeStep === index && (
                        <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-[#042940]"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="mt-8 bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ready to Start CTA */}
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-left md:text-left"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter mb-4">
                  Ready<br />to Start?
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  Get a free consultation and customized quote for your business waste management needs.
                </p>
                <Button 
                  size="lg"
                  className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-[5px] overflow-hidden"
              >
                <img 
                  src={imgCyclist} 
                  alt="Clean environment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="stats-heading">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 id="stats-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter">
                  Why Clients Call Us Again and Again.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  We've built our reputation on reliability, efficiency, and exceptional customer service. Our clients trust us to handle their waste management needs because we consistently deliver results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-[#042940] text-[#042940] hover:bg-[#042940] hover:text-white min-h-[52px] rounded-full w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-[#042940] p-6 sm:p-8"
                >
                  <p className="text-sm font-semibold text-[#042940] mb-4">Case / Stat Here</p>
                  <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#042940] text-right mb-4">
                    {stat.value}
                  </p>
                  <div className="h-px bg-[#042940] mb-4" />
                  <p className="text-gray-600 text-right text-sm sm:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="case-study-heading">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <h2 id="case-study-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter mb-6">
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

        {/* FAQ Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter mb-4">
                FAQs
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Common questions about our commercial waste services.
              </p>
            </motion.div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-t border-[#042940]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left min-h-[60px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520]"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-bold text-[#042940] text-base sm:text-lg pr-4">{faq.question}</span>
                    <span className="shrink-0">
                      {openFaq === index ? (
                        <Minus className="h-6 w-6 text-[#042940]" />
                      ) : (
                        <Plus className="h-6 w-6 text-[#042940]" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <div className="border-t border-[#042940]" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <Button 
                size="lg"
                className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
              >
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#042940] text-[#042940] hover:bg-[#042940] hover:text-white min-h-[52px] rounded-full w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                (123) 456-7890
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="location-heading">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 id="location-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042940] tracking-tighter mb-4">
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

        {/* Final CTA Banner */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#042940] rounded-[5px] p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tighter mb-2 sm:mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                    Contact us today for a free consultation and quote.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto whitespace-nowrap"
                  >
                    Get a Quote
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto whitespace-nowrap backdrop-blur-sm bg-white/5"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#042940] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo variant="white" className="mb-6" />
              <div className="space-y-4 text-white/60">
                <div>
                  <p className="font-semibold text-white text-sm">Address:</p>
                  <p className="text-sm">Level 1, 12 Sample St, Sydney NSW 2000</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Contact:</p>
                  <p className="text-sm">1800 123 4567</p>
                  <p className="text-sm">info@tenthrock.com</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="text-white/60 hover:text-[#c5d520] transition-colors p-2" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-[#c5d520] transition-colors p-2" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-[#c5d520] transition-colors p-2" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-[#c5d520] transition-colors p-2" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 sm:mb-6 text-white">Services</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Waste Removal</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Dumpster Rentals</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Recycling Programs</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Emergency Cleanups</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Compliance Audits</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 sm:mb-6 text-white">Company</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Success Stories</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Partner Program</a></li>
                <li><a href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 sm:mb-6 text-white">Stay Updated</h3>
              <p className="text-white/60 text-sm mb-4">
                Get the latest industry insights and updates.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-full px-4 focus-visible:ring-[#c5d520] flex-1" 
                />
                <Button className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] h-12 px-4 rounded-full">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© 2024 Tenth Rock. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-white/60 hover:text-[#c5d520] text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-[#c5d520] text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
