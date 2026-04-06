"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { 
  Phone, 
  Zap,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Mail,
  DollarSign,
  Globe,
  Headphones,
  Ban,
  Monitor,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LogoReelSection from "@/components/shared/LogoReelSection";

const heroImage = "/images/stock/hero-skyscrapers.jpg";

const networkBenefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Same-Day Payment",
    desc: "Complete a job, get paid the same day. No net-30 terms. No invoice follow-ups. No waiting to get what you've earned."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Access the Network",
    desc: "We work with hotel chains, national retailers, property managers, and multi-location operators nationwide. No pitching, no selling. Just show up, execute, and get paid."
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "A Team in Your Corner",
    desc: "From dispatch to documentation, your dedicated Success Manager is there every step of the way. No matter what comes up on a project, you're never navigating it alone."
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: "No Sales. Ever.",
    desc: "Inside the Tenth Rock ecosystem, the selling is already done. No proposals, no follow-ups, no client-facing anything, just real work without the overhead of chasing it."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Powered by TRAC\u2122",
    desc: "Tenth Rock's proprietary platform automates every step of the job process; tracking, documentation, and photo management all in one place, so every job closes clean, and your work speaks for itself."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Grow Locally. Backed Nationally.",
    desc: "Your community is your territory. Rock brings the national relationships, the operational backbone, and an industry reputation that opens doors in your local market."
  }
];

const networkStats = [
  { value: "48", label: "States Covered" },
  { value: "5K+", label: "Locations Managed" },
  { value: "24/7", label: "Dispatch Center" },
];

export default function JoinOurNetworkPage() {
  return (
    <main>
      <Navbar variant="floating" />
      <HeroSection />
      <LogoReelSection headline="Trusted by leading national brands we serve" testIdPrefix="join-logos" />
      <WhyJoinSection />
      <HowItWorksSection />
      <NetworkStatsSection />
      <EmailCaptureSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden" data-testid="section-join-hero">
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
              Join Our Network
            </h1>
            <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              We partner with experienced haulers and service providers to support commercial waste operations nationwide. Access opportunities backed by organized workflows, clear communication, and fast, reliable payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
                data-testid="button-join-hero-cta"
                onClick={() => document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
                data-testid="button-join-hero-phone"
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

function WhyJoinSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F9F6]" data-testid="section-join-benefits">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
            Vendor Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            Why Providers Partner With Us
          </h2>
          <p className="text-lg text-[#042940]/70">
            Access a reliable, high-volume stream of commercial projects with a dedicated logistics partner that prioritizes clear communication and efficient site coordination.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkBenefits.map((benefit, i) => (
            <FadeIn
              key={i}
              className="group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-[#c5d520]/20 active:border-[#c5d520]/20 hover:shadow-xl active:shadow-xl transition-all duration-300"
              data-testid={`card-join-benefit-${i}`}
            >
              <div className="w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-[#c5d520] group-hover:text-[#042940] transition-colors duration-300 flex items-center justify-center text-[#042940] mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#042940] mb-3">{benefit.title}</h3>
              <p className="text-[#042940]/70 leading-relaxed">{benefit.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const howItWorksSteps = [
  {
    num: "01",
    title: "Submit Your Email",
    desc: "Enter your email below, and we'll send your full onboarding application straight to your inbox."
  },
  {
    num: "02",
    title: "Complete Your Application",
    desc: "Tell us about your operation, what you do, where you work, and what you're equipped to handle."
  },
  {
    num: "03",
    title: "Get Reviewed & Approved",
    desc: "Our team reviews your application and reaches out to finalize your Certified Service Partner status."
  },
  {
    num: "04",
    title: "Start Receiving Jobs",
    desc: "Once approved, you're in the network, and your dedicated Success Manager will reach out when opportunities arise in your area."
  }
];

function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-join-how-it-works">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#042940]/70">
            Four Steps To Your First Opportunity
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {howItWorksSteps.map((step, i) => (
            <FadeIn
              key={i}
              className="relative bg-[#F9F9F6] p-6 md:p-8 rounded-[5px] border border-[#042940]/5"
              data-testid={`join-how-step-${i}`}
            >
              <div className="text-[#c5d520] font-bold text-sm mb-4">{step.num}</div>
              <h3 className="text-lg font-semibold text-[#042940] mb-3">{step.title}</h3>
              <p className="text-sm text-[#042940]/70 leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function NetworkStatsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#042940]" data-testid="section-join-stats">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tighter mb-6">
              A Growing Network Built on Performance
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#c5d520] mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Vetted vendor partners across 48 states providing local service with national accountability.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#c5d520] mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Commercial waste, roll-off hauling, junk removal, and specialty disposal jobs dispatched daily.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#c5d520] mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Expanding into new markets every month. Early partners in underserved areas get first priority on incoming work.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            className="grid grid-cols-3 gap-4"
          >
            {networkStats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-[5px] bg-white/5 border border-white/10" data-testid={`stat-join-${i}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#c5d520] mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function EmailCaptureSection() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/vendor-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      router.push("/vendor-onboarding");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="email-capture" className="py-16 md:py-24 bg-white" data-testid="section-join-email">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="max-w-2xl mx-auto text-center"
        >
          {submitted ? (
            <div className="py-12" data-testid="join-email-success">
              <div className="w-16 h-16 rounded-full bg-[#c5d520]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#c5d520]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#042940] tracking-tighter mb-4">
                Check Your Inbox
              </h2>
              <p className="text-lg text-[#042940]/70 max-w-md mx-auto">
                We sent the vendor onboarding link to <strong className="text-[#042940]">{email}</strong>. Follow the link to complete your application and start receiving jobs.
              </p>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9F9F6] border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
                Get Started
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#042940] tracking-tighter mb-4">
                Ready to Join?
              </h2>
              <p className="text-lg text-[#042940]/70 mb-8 max-w-lg mx-auto">
                Enter your email below and we will send you the vendor onboarding form. It takes about 10 minutes to complete.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-testid="form-join-email">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#042940]/40 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Your business email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-full border border-[#042940]/20 text-[#042940] placeholder:text-[#042940]/40 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-base"
                      required
                      data-testid="input-join-email"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full px-8"
                    data-testid="button-join-submit"
                  >
                    Send Me the Form
                  </Button>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-3" data-testid="text-join-email-error">{error}</p>
                )}
                <p className="text-sm text-[#042940]/50 mt-4">
                  No spam. We will only send you the onboarding link.
                </p>
              </form>
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
