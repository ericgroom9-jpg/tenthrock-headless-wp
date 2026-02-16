"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Shield,
  Zap,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FaqSection from "@/components/shared/FaqSection";
import LogoReelSection from "@/components/shared/LogoReelSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ProcessSection from "@/components/shared/ProcessSection";
import ReasonsSection from "@/components/shared/ReasonsSection";

const heroImage = "/images/stock/hero-skyscrapers.jpg";


const vendorTestimonials = [
  {
    quote: "Partnering with Tenth Rock gave our business a steady stream of contracts across multiple states. The onboarding was seamless.",
    author: "James Hartley",
    role: "Owner",
    company: "Hartley Waste Services",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Their dispatch system is top-notch. We get job alerts instantly and the payment process is reliable and transparent.",
    author: "Maria Gonzalez",
    role: "Operations Manager",
    company: "Southwest Hauling Co.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Joining the Tenth Rock network was the best business decision we made. Volume is up 40% and growing every quarter.",
    author: "Robert Chen",
    role: "VP of Business Development",
    company: "Pacific Disposal Group",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "The support team is incredible. Any issue we've had was resolved within the hour. True partners in every sense.",
    author: "Lisa Thompson",
    role: "Fleet Manager",
    company: "Greenway Environmental",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "We've expanded into three new states since joining. Tenth Rock handles the client relationships so we can focus on operations.",
    author: "David Park",
    role: "CEO",
    company: "Atlas Waste Solutions",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const vendorFaqs = [
  {
    question: "What are the requirements to join the network?",
    answer: "We look for licensed, insured waste hauling companies with reliable equipment and a track record of professional service. You'll need valid business insurance, proper licensing for your service area, and the capacity to handle commercial-scale jobs."
  },
  {
    question: "How quickly can I start receiving jobs?",
    answer: "Once your application is approved and onboarding is complete, you can start receiving job alerts within 48 hours. The onboarding process typically takes 3-5 business days depending on documentation review."
  },
  {
    question: "How does payment work?",
    answer: "We offer transparent, reliable payment terms. Invoices are processed bi-weekly with direct deposit. You'll have full visibility into all completed jobs and payments through our vendor portal."
  },
  {
    question: "Can I choose which jobs to accept?",
    answer: "Yes. You receive job alerts based on your service area, equipment capabilities, and availability preferences. You have full control over which jobs you accept or decline."
  },
  {
    question: "Is there a fee to join the network?",
    answer: "There is no upfront fee to join our vendor network. We operate on a partnership model where we handle client acquisition, billing, and account management while you focus on service delivery."
  }
];

const vendorProcessSteps = [
  {
    num: "01",
    title: "Get In Touch",
    desc: "Fill out the form or call us directly. Our vendor relations team will review your application and reach out within 24 hours."
  },
  {
    num: "02",
    title: "We Dispatch Your Team",
    desc: "Once onboarded, you'll receive real-time job alerts matched to your service area, equipment, and availability."
  },
  {
    num: "03",
    title: "We Execute The Job",
    desc: "Complete the job to our quality standards. Our team provides support every step of the way."
  },
  {
    num: "04",
    title: "Get Paid Reliably",
    desc: "Transparent invoicing and reliable bi-weekly payments deposited directly to your account."
  },
  {
    num: "05",
    title: "Grow Your Business",
    desc: "As you build a track record, receive more jobs and expand into new service areas across the country."
  }
];

const vendorFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Job Alerts",
    desc: "Receive real-time notifications for jobs in your service area. Never miss an opportunity with our smart dispatch system."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliable Payments",
    desc: "Transparent billing and bi-weekly direct deposits. No chasing invoices or dealing with payment delays."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Scheduling",
    desc: "You control your availability. Accept jobs that fit your capacity and turn down the rest, no penalties."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    desc: "Your vendor relations manager is one call away. We handle client relationships so you can focus on operations."
  }
];

export default function JoinOurNetworkPage() {
  return (
    <main>
      <Navbar variant="floating" />
      <HeroSection />
      <LogoReelSection headline="Trusted by leading national brands we serve" testIdPrefix="join-logos" />
      <FormSection />
      <ReasonsSection 
        tagline="Vendor Benefits"
        heading="More Reasons You'll Love Us"
        subtitle="We've built the tools and support system to help your waste hauling business grow faster and operate smoother."
        buttonText="Apply Today"
        features={vendorFeatures}
        testIdPrefix="join-reasons"
      />
      <ProcessSection 
        tagline="Vendor Process"
        heading="How It Works"
        subtitle="A straightforward path from application to your first job. We make onboarding simple."
        steps={vendorProcessSteps}
        testIdPrefix="join-process"
      />
      <TestimonialsSection testimonials={vendorTestimonials} tagline="Vendor Stories" testIdPrefix="join-testimonials" />
      <FaqSection faqs={vendorFaqs} />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden" data-testid="section-join-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
              JOIN OUR NETWORK
            </h1>
            <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed">
              Partner with the fastest-growing commercial waste network in America. Grow your business with steady contracts, reliable payments, and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                data-testid="button-join-hero-cta"
              >
                Request a Service
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap"
                data-testid="button-join-hero-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                (123) 456 - 7890
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function FormSection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-join-form">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 sm:p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] tracking-tighter leading-tight mb-2" data-testid="text-join-form-heading">
                Personal + Company Information
              </h2>
              <p className="text-[#042940]/60">
                Tell us about your business and we'll get you started.
              </p>
            </div>

            <form className="space-y-6" data-testid="form-join-network">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-[#042940] mb-2">First Name *</label>
                  <Input 
                    id="firstName"
                    placeholder="First Name" 
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-first-name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-[#042940] mb-2">Last Name *</label>
                  <Input 
                    id="lastName"
                    placeholder="Last Name" 
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-last-name"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#042940] mb-2">Email *</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="you@company.com" 
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#042940] mb-2">Phone *</label>
                  <PhoneInput
                    id="phone"
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-[#042940] mb-2">Company Name *</label>
                <Input 
                  id="companyName"
                  placeholder="Your Company Name" 
                  className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                  data-testid="input-company"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceArea" className="block text-sm font-bold text-[#042940] mb-2">Service Area / State(s)</label>
                  <Input 
                    id="serviceArea"
                    placeholder="e.g. Texas, Oklahoma" 
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-service-area"
                  />
                </div>
                <div>
                  <label htmlFor="fleetSize" className="block text-sm font-bold text-[#042940] mb-2">Fleet Size</label>
                  <Input 
                    id="fleetSize"
                    placeholder="Number of trucks" 
                    className="h-12 border-[#042940]/10 focus-visible:ring-[#c5d520]" 
                    data-testid="input-fleet-size"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#042940] mb-2">Additional Information</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your services, equipment, and capabilities..."
                  className="w-full rounded-md border border-[#042940]/10 px-3 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 resize-none"
                  data-testid="input-message"
                />
              </div>

              <div className="border-t border-[#042940]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <label className="flex items-start gap-3 cursor-pointer" data-testid="label-terms">
                  <input type="checkbox" className="mt-1 rounded border-[#042940]/20 text-[#c5d520] focus:ring-[#c5d520]" data-testid="input-terms" />
                  <span className="text-sm text-[#042940]/60">
                    I accept the{" "}
                    <a href="/privacy-policy" className="text-[#042940] underline font-bold hover:text-[#c5d520] transition-colors" data-testid="link-join-privacy-policy">Privacy Policy</a>
                  </span>
                </label>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] rounded-full px-10 shadow-lg hover:shadow-[0_0_40px_rgba(197,213,32,0.3)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap font-bold"
                  data-testid="button-submit-form"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


