"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronDown,
  Plus,
  Minus,
  Mail,
  Users,
  FileCheck,
  Globe,
  PiggyBank
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CommercialWasteServices from "@/components/shared/CommercialWasteServices";

const imgHero = "/images/stock/hero-skyscrapers.jpg";
const imgHowItWorks = "/images/stock/service-emergency-overflow.jpg";
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";
const imgPhoneForm = "/images/stock/service-dumpster-rental.jpg";
const imgCredibility = "/images/stock/service-maintenance.jpg";
const usMapVideo = "/assets_export/videos/us-map-pins-loop.mp4";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Point of Contact",
    description: "Your single go-to expert who knows your business, coordinates services, and ensures seamless communication across all locations."
  },
  {
    icon: FileCheck,
    title: "Job Completion Proof",
    description: "Full digital documentation with photos, timestamps, and audit trails for every service—giving you complete visibility and accountability."
  },
  {
    icon: Globe,
    title: "Local Crews, National Reach",
    description: "Access to vetted local haulers nationwide, all managed through one central platform with consistent service standards."
  },
  {
    icon: PiggyBank,
    title: "Price Savings Just for You",
    description: "Leverage our buying power and vendor relationships to secure competitive rates across all your locations."
  }
];

const processSteps = [
  { num: "1", title: "Get In Touch", desc: "Call us or submit a request online. Our team is ready 24/7 to understand your waste management needs.", active: true },
  { num: "2", title: "We Dispatch Your Team", desc: "Local crews are deployed within hours, ensuring your project stays on schedule.", active: false },
  { num: "3", title: "We Execute The Job", desc: "Professional removal, haulage, and site clearing with full safety compliance.", active: false },
  { num: "4", title: "Documentation Provided", desc: "Complete digital records and audit trails for every completed job.", active: false }
];

const stats = [
  { value: "30%", label: "Case / Stat Here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { value: "70K", label: "Case / Stat Here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { value: "80%", label: "Case / Stat Here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve retail chains, hospitality, healthcare, educational institutions, municipalities, event venues, and commercial real estate across the nation."
  },
  {
    question: "How quickly can you respond to emergency requests?",
    answer: "Our 24/7 dispatch team can coordinate emergency pickups within hours, not days. We have local crews nationwide ready to respond."
  },
  {
    question: "Do you provide documentation for compliance purposes?",
    answer: "Yes, we provide full digital documentation including photos, timestamps, weight tickets, and disposal manifests for every job."
  },
  {
    question: "Can you manage waste services across multiple locations?",
    answer: "Absolutely. Our centralized program management handles vendors, pricing, reporting, and service levels across all your locations through a single point of contact."
  },
  {
    question: "What types of waste do you handle?",
    answer: "We handle general commercial waste, construction debris, recyclables, organic waste, and specialty waste streams. Contact us for specific requirements."
  }
];

export default function WhoWeServePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const statsRef = useRef(null);
  const caseStudyRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const caseStudyInView = useInView(caseStudyRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="sticky" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-[#042940] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
        
        <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
              Who We Serve
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-md">
              From retail chains to stadiums, we partner with businesses that need reliable, scalable waste solutions across multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full shadow-[0_0_40px_rgba(197,213,32,0.3)] min-h-[52px]"
                data-testid="button-hero-cta"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-full min-h-[52px]"
                data-testid="button-hero-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial Waste Services - Shared Component */}
      <CommercialWasteServices />

      {/* More Reasons You'll Love Us */}
      <section 
        ref={benefitsRef}
        className="bg-[#F9F9F6] py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-4">
              More Reasons You'll Love Us
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Beyond reliable service, we bring transparency, accountability, and cost savings to every partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#042940] rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#c5d520]" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-primary tracking-tight mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary/70 text-sm md:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={processRef}
        className="bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={processInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] lg:aspect-square rounded-[5px] overflow-hidden">
                <img 
                  src={imgHowItWorks} 
                  alt="How it works" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={processInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-8 lg:mb-12">
                How It Works
              </h2>

              <div className="space-y-0">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.num}
                    className="cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex gap-4 md:gap-6 py-4">
                      <span className="text-2xl md:text-3xl font-semibold text-primary/40">
                        {step.num}
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors ${
                          activeStep === index ? "text-primary" : "text-primary/60"
                        }`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {activeStep === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-primary/70 mt-2"
                            >
                              {step.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    {/* Progress bar for active step */}
                    <div className="h-0.5 bg-gray-200 overflow-hidden">
                      {activeStep === index && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3 }}
                          className="h-full bg-primary"
                          onAnimationComplete={() => {
                            if (index < processSteps.length - 1) {
                              setActiveStep(index + 1);
                            } else {
                              setActiveStep(0);
                            }
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  size="lg"
                  className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full min-h-[52px]"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 rounded-full min-h-[52px]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (123) 456-7890
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="bg-[#F9F9F6] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-4">
                Ready<br />to start?
              </h2>
              <p className="text-primary/70 max-w-xs">
                Get in touch today and discover how we can streamline your waste management operations.
              </p>
            </div>
            <div className="relative">
              <div className="w-64 md:w-80 h-80 md:h-96 bg-[#042940] rounded-[5px] overflow-hidden relative">
                <div className="absolute inset-4 bg-white rounded-[5px] shadow-xl p-4">
                  <div className="text-xs font-bold text-primary/50 uppercase tracking-wider mb-3">
                    We're closer than you think!
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-100 rounded-[5px]" />
                    <div className="h-8 bg-gray-100 rounded-[5px]" />
                    <div className="h-8 bg-gray-100 rounded-[5px]" />
                    <div className="h-10 bg-[#c5d520] rounded-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Why Clients Call Us */}
      <section 
        ref={statsRef}
        className="bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter">
                Why Clients Call Us Again And Again
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-1/2"
            >
              <p className="text-primary/70 mb-6">
                Our track record speaks for itself. From cost savings to reliability, here's why businesses trust us with their waste management needs year after year.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg"
                  className="bg-[#042940] hover:bg-[#042940]/90 text-white rounded-full min-h-[52px]"
                >
                  See Our Results
                </Button>
                <Button 
                  size="lg"
                  variant="ghost"
                  className="text-primary hover:text-[#c5d520]"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-primary/20 p-6 md:p-8"
            >
              <p className="text-sm font-semibold text-primary/60 mb-4">Average Cost Savings</p>
              <p className="text-5xl md:text-6xl font-bold text-primary text-right mb-2">30%</p>
              <div className="h-px bg-primary/20 my-4" />
              <p className="text-primary/70 text-sm text-right">
                Clients save an average of 30% on waste management costs through our vendor network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="h-48 md:h-56 rounded-[5px] overflow-hidden">
                <img src={imgCredibility} alt="Credibility" className="w-full h-full object-cover" />
              </div>
              <div className="border border-primary/20 p-6 flex-1">
                <p className="text-sm font-semibold text-primary/60 mb-4">Jobs Completed</p>
                <p className="text-5xl md:text-6xl font-bold text-primary text-right mb-2">70K</p>
                <div className="h-px bg-primary/20 my-4" />
                <p className="text-primary/70 text-sm text-right">
                  Over 70,000 successful waste pickups and projects completed nationwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-primary/20 p-6 md:p-8"
            >
              <p className="text-sm font-semibold text-primary/60 mb-4">Client Retention Rate</p>
              <p className="text-5xl md:text-6xl font-bold text-primary text-right mb-2">80%</p>
              <div className="h-px bg-primary/20 my-4" />
              <p className="text-primary/70 text-sm text-right">
                80% of our clients continue partnering with us year after year.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section 
        ref={caseStudyRef}
        className="bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={caseStudyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="grid gap-4">
                <div className="aspect-video rounded-[5px] overflow-hidden">
                  <img src={imgCaseStudyMain} alt="Case study" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-video rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb1} alt="Case study" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb2} alt="Case study" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video rounded-[5px] overflow-hidden">
                    <img src={imgCaseStudyThumb3} alt="Case study" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={caseStudyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6">
                Case Study Title
              </h2>
              <p className="text-primary/70 mb-8">
                Learn how we helped a national retail chain streamline their waste management operations across 500+ locations, reducing costs by 32% while improving service reliability.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">32%</p>
                  <p className="text-primary/70 text-sm mt-1">Cost reduction achieved</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">32%</p>
                  <p className="text-primary/70 text-sm mt-1">Faster response times</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">32%</p>
                  <p className="text-primary/70 text-sm mt-1">Waste diversion rate</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">32%</p>
                  <p className="text-primary/70 text-sm mt-1">Client satisfaction score</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-[#042940] hover:bg-[#042940]/90 text-white rounded-full min-h-[52px]"
              >
                Read Full Case Study
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className="bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-4">
              FAQs
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Have questions? Find answers to common inquiries about our services and how we can help your business.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-t border-primary/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  data-testid={`faq-trigger-${index}`}
                >
                  <span className="text-lg font-medium text-primary pr-4">{faq.question}</span>
                  <span className="shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-6 h-6 text-primary" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-primary/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-primary/20" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-12">
            <Button 
              size="lg"
              className="bg-[#042940] hover:bg-[#042940]/90 text-white rounded-full min-h-[52px]"
            >
              Contact Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-full min-h-[52px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              (123) 456-7890
            </Button>
          </div>
        </div>
      </section>

      {/* Where to Find Us */}
      <section 
        ref={contactRef}
        className="bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-4">
              Where to Find Us
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              With local crews nationwide, we're always close by when you need us.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3 space-y-8"
            >
              <div>
                <div className="w-10 h-10 mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Office</h3>
                <p className="text-primary/70">
                  123 Business Ave, Suite 100<br />
                  Dallas, TX 75001
                </p>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-[#c5d520] mt-2">
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div>
                <div className="w-10 h-10 mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                <p className="text-primary/70">
                  Available 24/7 for emergencies
                </p>
                <p className="text-primary font-medium">+1 (555) 000-0000</p>
              </div>

              <div>
                <div className="w-10 h-10 mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Business Hours</h3>
                <p className="text-primary/70">
                  Monday-Friday: 8:00am – 6:00pm<br />
                  Emergency: 24/7
                </p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-2/3"
            >
              <div className="relative aspect-[16/9] lg:aspect-[4/3] bg-gray-100 rounded-[5px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={usMapVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#042940] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tighter mb-4">
                Ready to streamline your waste management?
              </h2>
              <p className="text-white/70 max-w-xl">
                Get in touch today for a free consultation and custom quote for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button 
                size="lg"
                className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full min-h-[52px]"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full min-h-[52px]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
