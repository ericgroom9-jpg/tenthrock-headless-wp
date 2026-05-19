"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitGravityForm } from "@/lib/gf/submit-client";
import { GF_FORM_IDS } from "@/lib/gf/form-ids";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/shared/Logo";

interface FlatLink { label: string; href: string }

const DEFAULT_SERVICE_LINKS: FlatLink[] = [
  { label: "Emergency Waste Removal", href: "/emergency-waste-removal" },
  { label: "Specialized Project Logistics", href: "/specialized-project-logistics" },
  { label: "Dumpster Rentals", href: "/dumpsters-containers" },
  { label: "Waste Advisory", href: "/waste-operations-advisory" },
];

const DEFAULT_INDUSTRY_LINKS: FlatLink[] = [
  { label: "Retail", href: "/retail" },
  { label: "Stadiums & Events", href: "/stadiums-events" },
  { label: "Faith Based", href: "/faith-based" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Natural Disasters", href: "/natural-disasters" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "Educational", href: "/educational" },
  { label: "Municipalities", href: "/municipalities" },
];

const DEFAULT_COMPANY_LINKS: FlatLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Process", href: "/waste-management-process" },
  { label: "Who We Serve", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Join Our Network", href: "/join-our-network" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Request A Service", href: "/request-a-service" },
];

const DEFAULT_LEGAL_LINKS: FlatLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

// Match WP social menu items to their lucide icon by label substring.
const SOCIAL_ICONS: Array<{ match: RegExp; Icon: typeof Linkedin }> = [
  { match: /linkedin/i,  Icon: Linkedin },
  { match: /twitter|^x$|x\.com/i, Icon: Twitter },
  { match: /instagram/i, Icon: Instagram },
  { match: /facebook/i,  Icon: Facebook },
];

const DEFAULT_SOCIAL_LINKS: FlatLink[] = [
  { label: "LinkedIn",  href: "#" },
  { label: "Twitter",   href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook",  href: "#" },
];

function pickIcon(label: string): typeof Linkedin {
  return SOCIAL_ICONS.find(s => s.match.test(label))?.Icon ?? Linkedin;
}

export default function Footer() {
  const [serviceLinks, setServiceLinks]   = useState<FlatLink[]>(DEFAULT_SERVICE_LINKS);
  const [industryLinks, setIndustryLinks] = useState<FlatLink[]>(DEFAULT_INDUSTRY_LINKS);
  const [companyLinks, setCompanyLinks]   = useState<FlatLink[]>(DEFAULT_COMPANY_LINKS);
  const [legalLinks, setLegalLinks]       = useState<FlatLink[]>(DEFAULT_LEGAL_LINKS);
  const [socialLinks, setSocialLinks]     = useState<FlatLink[]>(DEFAULT_SOCIAL_LINKS);

  useEffect(() => {
    let cancelled = false;
    const fetchOne = async (loc: string): Promise<FlatLink[] | null> => {
      try {
        const res = await fetch(`/api/menus/${loc}`);
        if (!res.ok) return null;
        const data = await res.json();
        if (!Array.isArray(data?.flat) || data.flat.length === 0) return null;
        return data.flat as FlatLink[];
      } catch { return null; }
    };
    (async () => {
      const [svc, ind, comp, leg, soc] = await Promise.all([
        fetchOne("footer-services"),
        fetchOne("footer-industries"),
        fetchOne("footer-company"),
        fetchOne("footer-legal"),
        fetchOne("footer-social"),
      ]);
      if (cancelled) return;
      if (svc)  setServiceLinks(svc);
      if (ind)  setIndustryLinks(ind);
      if (comp) setCompanyLinks(comp.filter(l => !/success\s*stories/i.test(l.label)));
      if (leg)  setLegalLinks(leg);
      if (soc)  setSocialLinks(soc);
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-[#042940] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-12 lg:gap-14 xl:gap-10 mb-16">
          
          {/* Brand Column */}
          <FadeIn
            className="space-y-8"
          >
            <Link
              href="/"
              aria-label="Tenth Rock — Home"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5d520]"
              data-testid="link-footer-logo"
            >
              <Logo variant="white" />
            </Link>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Redefining commercial waste management with speed, transparency, and reliability across 48 states.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = pickIcon(social.label);
                const slug = social.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                const isExternal = /^https?:\/\//i.test(social.href);
                return (
                  <a
                    key={`${social.label}-${social.href}`}
                    href={social.href}
                    aria-label={social.label}
                    data-testid={`link-social-${slug}`}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </FadeIn>
          
          {/* Services Column */}
          <FadeIn
          >
            <p className="font-bold text-lg mb-6 text-white">Services</p>
            <ul className="space-y-1 text-white/60 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center w-fit py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px]" data-testid={`link-footer-service-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Industries Column */}
          <FadeIn
          >
            <p className="font-bold text-lg mb-6 text-white">Industries</p>
            <ul className="space-y-1 text-white/60 text-sm">
              {industryLinks.map((industry) => (
                <li key={industry.href}>
                  <Link href={industry.href} className="inline-flex items-center w-fit py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px]" data-testid={`link-footer-industry-${industry.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Company Column */}
          <FadeIn
          >
            <p className="font-bold text-lg mb-6 text-white">Company</p>
            <ul className="space-y-1 text-white/60 text-sm">
              {companyLinks.map((item) => {
                const slug = item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center w-fit py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px]"
                      data-testid={`link-footer-company-${slug}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          {/* Newsletter/Contact Column */}
          <FadeIn
            className="space-y-6"
          >
            <p className="font-bold text-lg text-white">Stay Updated</p>
            <p className="text-white/60">
              Get service updates, industry news, and waste management tips for multi-location businesses.
            </p>
            <NewsletterForm />
            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-sm font-bold text-white mb-2">Need Immediate Help?</p>
              <a href="tel:7275105454" className="text-xl font-bold text-[#c5d520] hover:underline" data-testid="link-footer-phone">
                727.510.5454
              </a>
            </div>
          </FadeIn>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/70" suppressHydrationWarning>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap items-center gap-1 sm:gap-2" suppressHydrationWarning>
            <p className="whitespace-nowrap" data-testid="text-footer-copyright" suppressHydrationWarning>© 2026 Tenth Rock. All rights reserved.</p>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-white/50 hover:underline" data-testid="text-footer-address">140 Island Way Ste. 159, Clearwater Beach, FL 33767</a>
          </div>
          <div className="flex flex-nowrap gap-6 mt-2 md:mt-0">
            {legalLinks.map((item) => {
              const slug = item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="py-2 whitespace-nowrap hover:text-white transition-colors min-h-[44px] flex items-center"
                  data-testid={`link-footer-legal-${slug}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
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
      const result = await submitGravityForm(formEl, GF_FORM_IDS.newsletter);
      if (!result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      router.push(result.redirectUrl || "/thank-you/");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form-footer-newsletter" noValidate>
      <div className="flex gap-2">
        <Input
          type="email"
          name="input_1"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 focus-visible:ring-[#c5d520] rounded-full px-6"
          data-testid="input-footer-newsletter"
        />
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap no-default-hover-elevate no-default-active-elevate hover:bg-[#d4e232] active:bg-[#b3c11c]"
          data-testid="button-footer-newsletter"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
      {error && (
        <p className="text-red-300 text-sm mt-2" data-testid="text-footer-newsletter-error">{error}</p>
      )}
    </form>
  );
}
