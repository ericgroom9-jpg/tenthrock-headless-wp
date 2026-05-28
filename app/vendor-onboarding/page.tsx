"use client";

import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import FaqSection from "@/components/shared/FaqSection";

const heroImage = "/images/stock/hero-skyscrapers.jpg";

const vendorTestimonials = [
 {
 quote: "We have worked with Tenth Rock for several years. They have consistently provided outstanding communication, job turnaround, and assistance in any of the unique situations that come up in this industry. If you are looking for a great partner, Tenth Rock is it!",
 author: "Lane J.",
 role: "",
 company: "Sewickley, PA",
 img: ""
 },
 {
 quote: "Working with Tenth Rock is organized and efficient. They don't waste your time with dry runs. They provide clear communication and solid work. They pay when the job is done, unlike other companies that I have to chase down for payment. When they call, I'm ready because I know it will be a smooth process, and they'll take care of me, and I'm proud to do the same for them.",
 author: "Kenneth L.",
 role: "",
 company: "Bel Air, MD",
 img: ""
 },
 {
 quote: "They know how to treat their vendors! I've had my share of headaches with other companies, but Tenth Rock provides everything upfront, and if I have questions mid-job, they're always available to help guide me through things that come up. I'm looking forward to working with them for many years to come.",
 author: "Jason M.",
 role: "",
 company: "Adairsville, GA",
 img: ""
 },
 {
 quote: "Working with Tenth Rock has been great. They truly value their vendors and treat us with the respect we deserve, which is rare with the bigger companies in this industry. It's refreshing to work with a company that appreciates the hard work we put in.",
 author: "Brian L.",
 role: "",
 company: "Spring Hill, FL",
 img: ""
 },
 {
 quote: "Tenth Rock is my top company to work with. As soon as I get a call from them, I immediately am ready to get to work. They make the entire process so simple on the vendor side, making everything run very smoothly from the very first call to completion. They are on point with communication on both vendor and retail sides, which makes it hassle- and stress-free for both parties, making it as smooth as butter. Definitely looking forward to continuing our partnership.",
 author: "Michael R.",
 role: "",
 company: "Chester, VA",
 img: ""
 },
 {
 quote: "Working with Tenth Rock LLC has been an awesome experience. They are easy to work with, maintain great communication, and provide quick payouts. I highly recommend them!",
 author: "Gustavo M.",
 role: "",
 company: "Irving, TX",
 img: ""
 },
 {
 quote: "Working with Tenth Rock has been a highly positive experience. My rep streamlines the process effectively, providing photographs of the required work, which simplifies the bidding process. Upon completion of the work, submitting proof of completion and the invoice leads to prompt payment. I truly appreciate the collaboration with Tenth Rock in addressing their clients' needs.",
 author: "Katie M.",
 role: "",
 company: "House Springs, MO",
 img: ""
 },
 {
 quote: "Tenth Rock is solid. They don't mess around. Jobs are straight to the point. I don't have to guess what they need or chase them down for payment like with other companies. They respect me and my time, and that makes a big difference.",
 author: "Hector J.",
 role: "",
 company: "Chandler, AZ",
 img: ""
 },
 {
 quote: "Tenth Rock makes it easy to do good work. They set you up for success and give you the support you need. Once the job's done, I send proof, and they pay on the same day. Glad to be working with them.",
 author: "Arvin T.",
 role: "",
 company: "Novato, CA",
 img: ""
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
 answer: "We pay invoices by credit card upon job completion."
 },
 {
 question: "Can I choose which jobs to accept?",
 answer: "Yes. You receive job alerts based on your service area, equipment capabilities, and availability preferences. You have full control over which jobs you accept or decline."
 },
 {
 question: "Is there a fee to join the network?",
 answer: "There is no fee to join our vendor network. We operate on a partnership model where we handle client acquisition, billing, and account management while you focus on service delivery."
 }
];


export default function VendorOnboardingPage() {
 return (
 <main>
 <Navbar variant="floating" />
 <HeroSection />
 <WhatYouNeedSection />
 <FormSection />
 <HelpSection />
 <TestimonialsSection testimonials={vendorTestimonials} tagline="What Our Partners Are Saying" testIdPrefix="onboard-testimonials" />
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
 <div className="absolute inset-0 bg-[#042940]/85 md:bg-transparent md:bg-gradient-to-r md:from-[#042940] md:via-[#042940]/80 md:via-60% md:to-[#042940]/15" />
 </div>
 <div className="relative container mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20">
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
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
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
 asChild
 >
 <a href="tel:+17275105454">
 <Phone className="w-4 h-4 mr-2" />
 727.510.5454
 </a>
 </Button>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>
 );
}

function WhatYouNeedSection() {
 return (
 <section className="py-8 md:py-16 bg-[#F9F9F6]" data-testid="section-onboard-process">
 <div className="container mx-auto px-4 md:px-8">
 <FadeIn
 className="max-w-2xl mb-12"
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 Before You Begin
 </div>
 <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
 What You'll Need
 </h2>
 </FadeIn>

 <div className="grid md:grid-cols-2 gap-6">
 <FadeIn
 className="bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-[#042940]/5"
 data-testid="card-onboard-step-0"
 >
 <div className="w-12 h-12 rounded-full bg-[#042940] flex items-center justify-center text-white font-bold text-lg mb-5">
 01
 </div>
 <h3 className="text-xl font-bold text-[#042940] mb-4">Certificate of Insurance (COI)</h3>
 <div className="space-y-4 text-[#042940]/70 text-base leading-relaxed">
 <p>
 Before starting your application, you'll need a Certificate of Insurance (COI) listing Tenth Rock as the certificate holder. This simply ensures your insurance provider notifies us if your coverage changes or lapses and does not affect your coverage.
 </p>
 <p>
 To obtain it, contact your insurance carrier and request an updated certificate with Tenth Rock listed as the certificate holder at the address shown. This is a quick, routine request they handle regularly.
 </p>
 <p>
 Please have your COI ready before beginning, as you'll be asked to upload it as part of the application.
 </p>
 <div className="bg-[#F9F9F6] rounded-[5px] p-5 mt-4 border border-[#042940]/5">
 <p className="font-bold text-[#042940] text-sm mb-2">Certificate Holder Information</p>
 <p className="text-[#042940]/80 text-sm leading-relaxed">
 Tenth Rock<br />
 <a href="https://www.google.com/maps/search/?api=1&query=140+Island+Way+Suite+149+Clearwater+Beach+FL+33767" target="_blank" rel="noopener noreferrer" className="hover:underline">140 Island Way, Suite 149<br />
 Clearwater Beach, FL 33767</a><br /><br />
 Contact: Mandy Groom<br />
 Email: <a href="mailto:onboarding@tenthrock.com" className="text-[#042940] underline" data-testid="link-onboard-email">onboarding@tenthrock.com</a>
 </p>
 </div>
 </div>
 </FadeIn>

 <FadeIn
 className="bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-[#042940]/5"
 data-testid="card-onboard-step-1"
 >
 <div className="w-12 h-12 rounded-full bg-[#042940] flex items-center justify-center text-white font-bold text-lg mb-5">
 02
 </div>
 <h3 className="text-xl font-bold text-[#042940] mb-4">Service Area Map</h3>
 <div className="space-y-4 text-[#042940]/70 text-base leading-relaxed">
 <p>
 You'll be asked to drop up to six pins on a map to define your service area. Each pin represents a 30-mile radius. Please utilize as many pins as possible to accurately reflect where you operate. We only reach out for opportunities inside your pinned areas, so the more coverage you define, the more opportunities we can send your way.
 </p>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>
 );
}

function FormSection() {
 return (
 <section id="onboarding-form" className="py-8 md:py-16 bg-white" data-testid="section-onboard-form">
 <div className="container mx-auto px-4 md:px-8">
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

function HelpSection() {
 return (
 <section className="py-10 md:py-12 bg-[#F9F9F6]" data-testid="section-onboard-help">
 <div className="container mx-auto px-4 md:px-8 text-center">
 <p className="text-base md:text-lg text-[#042940]/70" data-testid="text-onboard-help">
 Questions? Call or text{" "}
 <a href="tel:+17275105454" className="text-[#042940] font-semibold underline" data-testid="link-onboard-help-phone">727-510-5454</a>
 {" | "}
 <a href="mailto:onboarding@tenthrock.com" className="text-[#042940] font-semibold underline" data-testid="link-onboard-help-email">onboarding@tenthrock.com</a>
 </p>
 </div>
 </section>
 );
}
