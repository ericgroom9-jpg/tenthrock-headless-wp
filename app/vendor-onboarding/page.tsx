"use client";

import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import FaqSection from "@/components/shared/FaqSection";

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

const processSteps = [
  { title: "Complete the Form Below", desc: "Provide your company details, service area, equipment capabilities, and insurance documentation." },
  { title: "We Review Your Application", desc: "Our vendor relations team reviews your submission and verifies documentation. This typically takes 3-5 business days." },
  { title: "Onboarding Call", desc: "A brief call to walk through our dispatch system, job acceptance process, and payment terms." },
  { title: "Start Receiving Jobs", desc: "Once approved, job alerts start flowing based on your service area and equipment profile." },
];

export default function VendorOnboardingPage() {
  return (
    <main>
      <Navbar variant="floating" />
      <HeroSection />
      <ProcessStepsSection />
      <FormSection />
      <TestimonialsSection testimonials={vendorTestimonials} tagline="Vendor Stories" testIdPrefix="onboard-testimonials" />
      <FaqSection faqs={vendorFaqs} />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden" data-testid="section-onboard-hero">
      <div className="absolute inset-0">
        <Image 
          src={heroImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <FadeIn
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
              Welcome to Tenth Rock! Let's Get You Set Up.
            </h1>
            <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Thank you for your interest in joining the Tenth Rock team. As a Certified Service Partner, your role is at the heart of everything we do -- delivering swift, professional waste management solutions to our clients nationwide. Before you begin your application, please review what you'll need below. Having everything ready will make the process quick and straightforward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
                data-testid="button-onboard-hero-cta"
                onClick={() => document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Application
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
                data-testid="button-onboard-hero-phone"
              >
                <Phone className="w-4 h-4 mr-2" />
                727.510.5454
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProcessStepsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F9F6]" data-testid="section-onboard-process">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            From Application to First Job
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <FadeIn
              key={i}
              className="bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-[#042940]/5"
              data-testid={`card-onboard-step-${i}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#042940] flex items-center justify-center text-white font-bold text-lg mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#042940] mb-2">{step.title}</h3>
              <p className="text-[#042940]/70 text-sm leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="onboarding-form" className="py-16 md:py-24 bg-white" data-testid="section-onboard-form">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9F9F6] border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
            Application
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[#042940] tracking-tighter mb-4">
            Complete Your Vendor Application
          </h2>
          <p className="text-lg text-[#042940]/70 max-w-lg mx-auto">
            Fill out the form below with your company information, service capabilities, and documentation. Our team will review and respond within 3-5 business days.
          </p>
        </FadeIn>

        <FadeIn
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-[5px] overflow-hidden shadow-xl border border-[#042940]/5" data-testid="onboard-form-iframe-container">
            <iframe
              src="https://vendor-onboarding-hub.lovable.app"
              title="Vendor Onboarding Form"
              className="w-full border-0"
              style={{ minHeight: "1200px" }}
              allow="clipboard-write"
              data-testid="iframe-vendor-onboarding"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
