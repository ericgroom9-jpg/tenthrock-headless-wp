"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
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
  Play,
  User,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Logo from "@/components/shared/Logo";
import SharedCommercialWasteServices from "@/components/shared/CommercialWasteServices";

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


const services = [
  {
    title: "Emergency Waste Removal",
    desc: "Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.",
    img: imgServiceEmergencyOverflow,
    features: ["Product & Perishable Removal", "Site Stabilization", "Unplanned Cleanouts"],
  },
  {
    title: "Specialized Project Logistics",
    desc: "End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.",
    img: imgServiceStoreDecommissioning,
    features: ["Site Closures & Remodels", "Events & Stadiums", "Disaster Mobilization"],
  },
  {
    title: "Dumpster Rentals",
    desc: "Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow needs.",
    img: imgServiceDumpsterRental,
    features: ["On-Demand Service", "Multiple Sizes", "Recycling & Specialty"],
  },
  {
    title: "Waste Advisory",
    desc: "Retained waste management advisory providing hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management.",
    img: imgServiceCentralizedProgram,
    features: ["Assessments & Roadmaps", "SOPs & Vendor Training", "Ongoing Advisory"],
  },
];

const processSteps = [
  { num: "01", title: "You Call Us", desc: "When your business faces a waste crisis, call us. Our team of experts is on standby, ready to help 24/7." },
  { num: "02", title: "We Assemble Your Team", desc: "You get a dedicated project manager as your single point of contact who will assess the situation, coordinate resources, and keep you informed every step of the way." },
  { num: "03", title: "We Quote the Job", desc: "Your project manager provides a prompt, no-obligation quote. No hidden fees or unexpected charges, just a single flat rate for the entire project." },
  { num: "04", title: "We Handle the Rest", desc: "Once you give the green light, our team springs into action. Your project manager stays on call with real-time updates whenever you need them." },
  { num: "05", title: "Problem Solved", desc: "We resolve your waste issue quickly and efficiently so you can avoid costly fines, downtime, and negative attention. Your business stays on track." },
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
    question: "Do you provide documentation for every job?",
    answer: "Yes, we provide comprehensive documentation for every completed job.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="skip-link" data-testid="skip-link">
        Skip to main content
      </a>

      {/* Navigation - Use shared Navbar component */}
      <Navbar variant="floating" />

      <main id="main-content" className="flex-1">
        {/* Hero Section - with top padding for floating navbar */}
        <section className="relative bg-[#042940] overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0">
            <Image 
              src={imgServiceCentralizedProgram}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/90 to-[#042940]/60" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-28">
            <FadeIn
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
                Waste Management Services
              </h1>
              <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                Emergency response, project logistics, container rentals, and waste program advisory for multi-location operators. One point of contact, 48 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full whitespace-nowrap"
                  data-testid="button-hero-cta"
                >
                  Request A Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-[#042940] min-h-[52px] rounded-full whitespace-nowrap backdrop-blur-sm bg-white/5"
                  data-testid="button-hero-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  727.510.5454
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <SharedCommercialWasteServices />

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
              <p className="text-lg text-[#042940]/70">
                A simple, transparent process designed to get your problem solved fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              {processSteps.map((step, i) => (
                <FadeIn 
                  key={i}
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Check If We Service Your Area - Matching Homepage Design */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <FadeIn
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
                  Check If We Service <span className="text-[#c5d520]">Your Area</span>
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
            </FadeIn>
          </div>
        </section>

        {/* Stats Section - Matching Homepage Design */}
        <section className="py-16 md:py-24 bg-[#FDFDFD]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <FadeIn
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
                    Key Metrics
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter">
                    Why Clients Call Us Again and Again.
                  </h2>
                  <p className="text-lg text-[#042940]/70 mb-8">
                    We've built our reputation on reliability, efficiency, and exceptional customer service. Our clients trust us to handle their waste management needs because we consistently deliver results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                    <Button size="lg" className="w-full sm:w-auto bg-[#042940] text-white min-h-[52px] whitespace-nowrap rounded-full">
                      Request A Service
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full sm:w-auto text-[#042940] hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap rounded-full">
                      <Phone className="w-5 h-5 text-[#c5d520]" /> 727.510.5454
                    </Button>
                  </div>
                </FadeIn>
              </div>

              <div className="grid gap-8">
                <div className="border border-[#042940]/10 p-8 rounded-[5px] bg-white">
                  <div className="font-semibold text-xl text-[#042940] mb-4">Average Cost Savings</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">30%</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/70">Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization.</p>
                </div>
                
                <div className="border border-[#042940]/10 p-8 rounded-[5px] bg-white">
                  <div className="h-64 w-full rounded-[5px] overflow-hidden mb-8 relative">
                    <Image src={imgParkWater} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" alt="Tenth Rock nationwide waste operations" loading="lazy" />
                  </div>
                  <div className="font-semibold text-xl text-[#042940] mb-4">Locations Managed</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">5K+</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/70">Commercial locations across 48 states trust Tenth Rock for consistent, reliable waste service.</p>
                </div>

                <div className="border border-[#042940]/10 p-8 rounded-[5px] bg-white">
                  <div className="font-semibold text-xl text-[#042940] mb-4">On-Time Service Rate</div>
                  <div className="text-7xl font-extrabold text-[#042940] mb-4">98%</div>
                  <Separator className="bg-[#042940]/10 mb-4" />
                  <p className="text-[#042940]/70">Our dispatched crews arrive when promised. Missed pickups cost you money. We don't let that happen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section - Matching Homepage Design */}
        <section className="py-16 md:py-24 bg-white border-b border-[#042940]/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <FadeIn
                  className="rounded-[5px] overflow-hidden h-[400px] relative"
                >
                  <Image 
                    src={imgCaseStudyMain} 
                    alt="Commercial waste management case study by Tenth Rock" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover md:hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </FadeIn>
                <div className="grid grid-cols-3 gap-4">
                  {[imgCaseStudyThumb1, imgCaseStudyThumb2, imgCaseStudyThumb3].map((img, i) => (
                    <FadeIn
                      key={i}
                      className="rounded-[5px] overflow-hidden aspect-square relative"
                    >
                      <Image 
                        src={img} 
                        alt={`Commercial waste operations detail ${i + 1}`} 
                        fill
                        sizes="(max-width: 1024px) 33vw, 16vw"
                        className="object-cover md:hover:scale-110 transition-transform duration-500" 
                        loading="lazy"
                      />
                    </FadeIn>
                  ))}
                </div>
              </div>

              <FadeIn
                className="lg:pl-8 order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5d520]/10 text-[#042940] font-bold text-xs uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></span>
                  Speed
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 tracking-tighter leading-tight">
                  National Coffee Chain <br/><span className="text-3xl md:text-4xl">Missed Pickup, Same-Day Stabilization</span>
                </h2>
                <p className="text-lg text-[#042940]/70 mb-8 md:mb-12 leading-relaxed">
                  A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a local crew on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                  {[
                    { value: "10 min", label: "Response Time" },
                    { value: "4 hrs", label: "Total Stabilization" },
                    { value: "0", label: "Customer Impact" },
                    { value: "1", label: "Call to Resolution" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-extrabold text-[#c5d520] mb-1">{stat.value}</div>
                      <div className="text-sm font-bold text-[#042940] uppercase tracking-wide">{stat.label}</div>
                      <div className="h-1 w-12 bg-[#042940]/10 mt-3" />
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] min-h-[52px] rounded-full w-full sm:w-auto"
                  asChild
                >
                  <a href="/request-a-service">Request A Service</a>
                </Button>
              </FadeIn>
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
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-[#042940] tracking-tighter leading-tight">Frequently Asked Questions</h2>
              <p className="text-lg text-[#042940]/70 max-w-2xl mx-auto">
                Everything you need to know about our commercial waste services. Can't find the answer you're looking for? Reach out to our team.
              </p>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq, i) => (
                <FadeIn
                  key={i}
                >
                  <div 
                    className={`group rounded-[5px] border transition-all duration-300 overflow-hidden ${
                      openFaq === i 
                        ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" 
                        : "bg-white border-transparent hover:border-[#042940]/10 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <button 
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none min-h-[52px]"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      data-testid={`button-faq-${i}`}
                    >
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
                </FadeIn>
              ))}
            </div>
            
            <div className="mt-16 text-left sm:text-center">
              <p className="text-[#042940]/70 mb-4 font-medium">Still Have Questions?</p>
              <Button size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="location-heading">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn
              className="text-left sm:text-center mb-8 sm:mb-12"
            >
              <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
                Where to Find Us
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl sm:mx-auto">
                Serving businesses nationwide.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <FadeIn
                className="space-y-6 lg:space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
                  </div>
                  <p className="text-gray-600 ml-9">140 Island Way Ste. 159, Clearwater Beach, FL 33767</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
                  </div>
                  <p className="text-gray-600 ml-9">Available 24/7 for emergencies</p>
                  <p className="text-[#042940] font-semibold ml-9">727.510.5454</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-6 w-6 text-[#c5d520]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Email</h3>
                  </div>
                  <p className="text-gray-600 ml-9">hello@tenthrock.com</p>
                </div>
              </FadeIn>

              <FadeIn
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
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Final CTA - Matching Homepage Design */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn
              className="relative bg-[#042940] rounded-[5px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5d520]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight tracking-tighter">
                  Streamline Your <span className="text-[#c5d520]">Waste Management</span>&nbsp;Today
                </h2>
                <p className="text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed">
                  Join thousands of businesses optimizing their disposal costs and sustainability with Tenth Rock. One partner, zero headaches.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full">
                    Request A Service
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                <Image src={imgCyclist} alt="Tenth Rock service crew ready to dispatch" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center lg:object-right" loading="lazy" />
                <div className="absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent" />
                
                <FadeIn
                  className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-[5px] max-w-[200px] sm:max-w-xs transform md:hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#c5d520] rounded-full flex items-center justify-center text-[#042940] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[#c5d520] text-xl font-bold">727.510.5454</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
