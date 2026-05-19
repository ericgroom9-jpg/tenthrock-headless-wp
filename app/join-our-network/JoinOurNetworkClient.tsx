"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { 
 Phone, 
 ArrowRight,
 CheckCircle2,
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
import type { JoinNetworkTemplateData, BenefitCard, HowStep, StatBullet, StatNumber } from "@/lib/wordpress";

const iconMap: Record<string, React.ReactNode> = {
 DollarSign: <DollarSign className="w-6 h-6" />,
 Globe: <Globe className="w-6 h-6" />,
 Headphones: <Headphones className="w-6 h-6" />,
 Ban: <Ban className="w-6 h-6" />,
 Monitor: <Monitor className="w-6 h-6" />,
 TrendingUp: <TrendingUp className="w-6 h-6" />,
};

const defaultBenefits: BenefitCard[] = [
 { iconName: "DollarSign", title: "Same-Day Payment", description: "Complete a job, get paid the same day. No net-30 terms. No invoice follow-ups. No waiting to get what you've earned." },
 { iconName: "Globe", title: "Access the Network", description: "We work with hotel chains, national retailers, property managers, and multi-location operators nationwide. No pitching, no selling. Just show up, execute, and get paid." },
 { iconName: "Headphones", title: "A Team in Your Corner", description: "From dispatch to documentation, your dedicated Success Manager is there every step of the way. No matter what comes up on a project, you're never navigating it alone." },
 { iconName: "Ban", title: "No Sales. Ever.", description: "Inside the Tenth Rock ecosystem, the selling is already done. No proposals, no follow-ups, no client-facing anything, just real work without the overhead of chasing it." },
 { iconName: "Monitor", title: "Powered by TRAC\u2122", description: "Tenth Rock's proprietary platform automates every step of the job process; tracking, documentation, and photo management all in one place, so every job closes clean, and your work speaks for itself." },
 { iconName: "TrendingUp", title: "Grow Locally. Backed Nationally.", description: "Your community is your territory. Rock brings the national relationships, the operational backbone, and an industry reputation that opens doors in your local market." },
];

const defaultHowSteps: HowStep[] = [
 { number: "01", title: "Submit Your Email", description: "Enter your email below, and we'll send your full onboarding application straight to your inbox." },
 { number: "02", title: "Complete Your Application", description: "Tell us about your operation, what you do, where you work, and what you're equipped to handle." },
 { number: "03", title: "Get Reviewed & Approved", description: "Our team reviews your application and reaches out to finalize your Certified Service Partner status." },
 { number: "04", title: "Start Receiving Jobs", description: "Once approved, you're in the network, and your dedicated Success Manager will reach out when opportunities arise in your area." },
];

const defaultStatsBullets: StatBullet[] = [
 { text: "Vetted vendor partners across 48 states providing local service with national accountability." },
 { text: "Commercial waste, roll-off hauling, junk removal, and specialty disposal jobs dispatched daily." },
 { text: "Expanding into new markets every month. Early partners in underserved areas get first priority on incoming work." },
];

const defaultStatsNumbers: StatNumber[] = [
 { value: "48", label: "States Covered" },
 { value: "5K+", label: "Locations Managed" },
 { value: "24/7", label: "Dispatch Center" },
];

interface Props {
 acf: JoinNetworkTemplateData | null;
}

function AnimatedStatNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
 const ref = useRef<HTMLSpanElement>(null);
 const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
 const target = match ? parseFloat(match[1]) : null;
 const suffix = match ? match[2] : "";
 const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
 const [display, setDisplay] = useState<string>(target !== null ? (decimals ? (0).toFixed(decimals) : "0") : value);
 const hasAnimated = useRef(false);

 useEffect(() => {
 if (target === null) return;
 const node = ref.current;
 if (!node) return;
 const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
 if (prefersReducedMotion) {
 setDisplay(decimals ? target.toFixed(decimals) : String(target));
 hasAnimated.current = true;
 return;
 }
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting && !hasAnimated.current) {
 hasAnimated.current = true;
 const start = performance.now();
 const tick = (now: number) => {
 const elapsed = now - start;
 const progress = Math.min(elapsed / duration, 1);
 const eased = 1 - Math.pow(1 - progress, 3);
 const current = target * eased;
 setDisplay(decimals ? current.toFixed(decimals) : String(Math.floor(current)));
 if (progress < 1) requestAnimationFrame(tick);
 else setDisplay(decimals ? target.toFixed(decimals) : String(target));
 };
 requestAnimationFrame(tick);
 }
 });
 },
 { threshold: 0.3 }
 );
 observer.observe(node);
 return () => observer.disconnect();
 }, [target, duration, decimals]);

 if (target === null) {
 return <span ref={ref}>{value}</span>;
 }
 return (
 <span ref={ref}>
 {display}
 {suffix}
 </span>
 );
}

export default function JoinOurNetworkClient({ acf }: Props) {
 const heroHeading = acf?.heroHeading || "Join Our Network";
 const heroSubheading = acf?.heroSubheading || "We partner with experienced haulers and service providers to support commercial waste operations nationwide. Access opportunities backed by organized workflows, clear communication, and fast, reliable payment.";
 const heroImage = acf?.heroImage || "/images/stock/hero-skyscrapers.jpg";
 const heroCtaLabel = acf?.heroCtaLabel || "Get Started";
 const heroPhoneLabel = acf?.heroPhoneLabel || "727.510.5454";
 const heroPhoneLink = acf?.heroPhoneLink || "tel:+17275105454";
 const logosHeadline = acf?.logosHeadline || "Trusted by leading national brands we serve";
 const benefitsTagline = acf?.benefitsTagline || "Vendor Benefits";
 const benefitsHeading = acf?.benefitsHeading || "Why Providers Partner With Us";
 const benefitsSubtitle = acf?.benefitsSubtitle || "Access a reliable, high-volume stream of commercial projects with a dedicated logistics partner that prioritizes clear communication and efficient site coordination.";
 const benefitsCards = acf?.benefitsCards || defaultBenefits;
 const howHeading = acf?.howHeading || "How It Works";
 const howSubtitle = acf?.howSubtitle || "Four Steps To Your First Opportunity";
 const howSteps = acf?.howSteps || defaultHowSteps;
 const statsHeading = acf?.statsHeading || "A Growing Network Built on Performance";
 const statsBullets = acf?.statsBullets || defaultStatsBullets;
 const statsNumbers = acf?.statsNumbers || defaultStatsNumbers;
 const emailTagline = acf?.emailTagline || "Get Started";
 const emailHeading = acf?.emailHeading || "Ready to Join?";
 const emailSubtitle = acf?.emailSubtitle || "Enter your email below and we will send you the vendor onboarding form. It takes about 10 minutes to complete.";
 const emailPlaceholder = acf?.emailPlaceholder || "Your business email";
 const emailSubmitLabel = acf?.emailSubmitLabel || "Send Me the Form";
 const emailDisclaimer = acf?.emailDisclaimer || "No spam. We will only send you the onboarding link.";

 return (
 <main>
 <Navbar variant="floating" />

 <section className="relative bg-[#042940] pt-24 md:pt-28 overflow-hidden" data-testid="section-join-hero">
 <div className="absolute inset-0">
 <Image src={heroImage} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" priority />
 <div className="absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/80 via-60% to-[#042940]/15" />
 </div>
 <div className="relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24">
 <div className="max-w-2xl">
 <FadeIn>
 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6">
 {heroHeading}
 </h1>
 <p className="text-base text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
 {heroSubheading}
 </p>
 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
 <Button 
 size="lg"
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
 data-testid="button-join-hero-cta"
 onClick={() => document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })}
 >
 {heroCtaLabel}
 <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 <Button 
 size="lg"
 variant="outline"
 className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
 data-testid="button-join-hero-phone"
 asChild
 >
 <a href={heroPhoneLink}>
 <Phone className="w-4 h-4 mr-2" />
 {heroPhoneLabel}
 </a>
 </Button>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 <LogoReelSection headline={logosHeadline} testIdPrefix="join-logos" />

 <section className="py-16 md:py-24 bg-[#F9F9F6]" data-testid="section-join-benefits">
 <div className="container mx-auto px-4 md:px-8">
 <FadeIn className="max-w-2xl mb-12 md:mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 {benefitsTagline}
 </div>
 <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
 {benefitsHeading}
 </h2>
 <p className="text-lg text-[#042940]/70">
 {benefitsSubtitle}
 </p>
 </FadeIn>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {benefitsCards.map((benefit, i) => (
 <FadeIn
 key={i}
 className="group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-[#c5d520]/20 active:border-[#c5d520]/20 hover:shadow-xl active:shadow-xl transition-all duration-300"
 data-testid={`card-join-benefit-${i}`}
 >
 <div className="w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-[#c5d520] group-hover:text-[#042940] transition-colors duration-300 flex items-center justify-center text-[#042940] mb-6">
 {iconMap[benefit.iconName] || <Globe className="w-6 h-6" />}
 </div>
 <h3 className="text-xl font-bold text-[#042940] mb-3">{benefit.title}</h3>
 <p className="text-[#042940]/70 leading-relaxed">{benefit.description}</p>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 md:py-24 bg-white" data-testid="section-join-how-it-works">
 <div className="container mx-auto px-4 md:px-8">
 <FadeIn className="text-left sm:text-center max-w-2xl mx-auto mb-12 md:mb-16">
 <h2 className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
 {howHeading}
 </h2>
 <p className="text-lg text-[#042940]/70">
 {howSubtitle}
 </p>
 </FadeIn>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
 {howSteps.map((step, i) => (
 <FadeIn
 key={i}
 className="relative bg-[#F9F9F6] p-6 md:p-8 rounded-[5px] border border-[#042940]/5"
 data-testid={`join-how-step-${i}`}
 >
 <div className="text-[#c5d520] font-bold text-sm mb-4">{step.number}</div>
 <h3 className="text-lg font-semibold text-[#042940] mb-3">{step.title}</h3>
 <p className="text-sm text-[#042940]/70 leading-relaxed">{step.description}</p>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-[#042940]" data-testid="section-join-stats">
 <div className="container mx-auto px-4 md:px-8">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 <FadeIn>
 <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tighter mb-6">
 {statsHeading}
 </h2>
 <div className="space-y-4 mb-8">
 {statsBullets.map((bullet, i) => (
 <div key={i} className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[#c5d520] mt-0.5 flex-shrink-0" />
 <p className="text-white/80">{bullet.text}</p>
 </div>
 ))}
 </div>
 </FadeIn>

 <FadeIn className="grid grid-cols-3 gap-2 sm:gap-4">
 {statsNumbers.map((stat, i) => (
 <div key={i} className="text-center p-3 sm:p-6 rounded-[5px] bg-white/5 border border-white/10 min-w-0 overflow-hidden" data-testid={`stat-join-${i}`}>
 <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#c5d520] mb-2 leading-tight break-words">
 <AnimatedStatNumber value={stat.value} />
 </div>
 <div className="text-xs sm:text-sm text-white/60 font-medium">{stat.label}</div>
 </div>
 ))}
 </FadeIn>
 </div>
 </div>
 </section>

 <EmailCaptureSection
 tagline={emailTagline}
 heading={emailHeading}
 subtitle={emailSubtitle}
 placeholder={emailPlaceholder}
 submitLabel={emailSubmitLabel}
 disclaimer={emailDisclaimer}
 />

 <Footer />
 </main>
 );
}

function EmailCaptureSection({
 tagline, heading, subtitle, placeholder, submitLabel, disclaimer,
}: {
 tagline: string; heading: string; subtitle: string; placeholder: string;
 submitLabel: string; disclaimer: string;
}) {
 const router = useRouter();
 const [email, setEmail] = useState("");
 const [submitting, setSubmitting] = useState(false);
 const [error, setError] = useState("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setError("");

 if (!email || !email.includes("@") || !email.includes(".")) {
 setError("Please enter a valid email address.");
 return;
 }

 const formEl = e.currentTarget;
 setSubmitting(true);
 try {
 const { submitGravityForm } = await import("@/lib/gf/submit-client");
 const { GF_FORM_IDS } = await import("@/lib/gf/form-ids");
 const result = await submitGravityForm(formEl, GF_FORM_IDS.joinOurNetwork);
 if (!result.ok) {
 throw new Error(result.error || "Something went wrong. Please try again.");
 }
 router.push(result.redirectUrl || "/");
 } catch (err: any) {
 setError(err.message || "Something went wrong. Please try again.");
 setSubmitting(false);
 }
 };

 return (
 <section id="email-capture" className="py-16 md:py-24 bg-white" data-testid="section-join-email">
 <div className="container mx-auto px-4 md:px-8">
 <FadeIn className="max-w-2xl mx-auto text-left sm:text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9F9F6] border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6">
 <span className="w-2 h-2 rounded-full bg-[#c5d520]"></span>
 {tagline}
 </div>
 <h2 className="text-3xl md:text-4xl font-medium text-[#042940] tracking-tighter mb-4">
 {heading}
 </h2>
 <p className="text-lg text-[#042940]/70 mb-8 max-w-lg mx-auto">
 {subtitle}
 </p>
 <form onSubmit={handleSubmit} className="max-w-lg mx-auto" data-testid="form-join-email">
 <div className="flex flex-col sm:flex-row gap-3 items-stretch">
 <div className="relative w-full sm:flex-1 h-[52px]">
 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#042940]/40 pointer-events-none" />
 <input
 type="email"
 name="input_1"
 placeholder={placeholder}
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full h-full pl-12 pr-4 rounded-full border border-[#042940]/20 text-[#042940] placeholder:text-[#042940]/40 focus:outline-none focus:ring-2 focus:ring-[#c5d520] focus:border-transparent text-base leading-none"
 required
 data-testid="input-join-email"
 />
 </div>
 <Button
 type="submit"
 size="lg"
 disabled={submitting}
 className="w-full sm:w-auto bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full px-8"
 data-testid="button-join-submit"
 >
 {submitting ? "Submitting…" : submitLabel}
 </Button>
 </div>
 {error && (
 <p className="text-red-600 text-sm mt-3" data-testid="text-join-email-error">{error}</p>
 )}
 <p className="text-sm text-[#042940]/50 mt-4">
 {disclaimer}
 </p>
 </form>
 </FadeIn>
 </div>
 </section>
 );
}
