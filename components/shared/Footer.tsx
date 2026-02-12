"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/shared/Logo";

const serviceLinks = [
  { label: "Emergency & Overflow Waste Response", href: "/services/emergency-waste-removal" },
  { label: "Store Decommissioning & Remodel Support", href: "/services/store-decommissioning" },
  { label: "Event & Stadium Waste Logistics", href: "/services/event-stadium" },
  { label: "Dumpster Rental & Temporary Containers", href: "/services/dumpster-rentals" },
  { label: "Centralized Waste Program Management", href: "/services/centralized-programs" },
];

const industryLinks = [
  { label: "Educational", href: "/industries/educational" },
  { label: "Stadiums & Events", href: "/industries/stadiums-events" },
  { label: "Faith Based", href: "/industries/faith-based" },
  { label: "Municipalities", href: "/industries/municipalities" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Natural Disasters", href: "/industries/natural-disasters" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail", href: "/industries/retail" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-[#042940] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-12 lg:gap-10 mb-16">
          
          {/* Brand Column */}
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
              <a href="#" aria-label="LinkedIn" data-testid="link-social-linkedin" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" data-testid="link-social-twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" data-testid="link-social-instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" data-testid="link-social-facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid={`link-footer-service-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Industries</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {industryLinks.map((industry) => (
                <li key={industry.href}>
                  <Link href={industry.href} className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid={`link-footer-industry-${industry.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link href="/about" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/our-process" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-process">Our Process</Link></li>
              <li><Link href="/who-we-serve" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-who-we-serve">Who We Serve</Link></li>
              <li><Link href="/locations" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-locations">Locations</Link></li>
              <li><Link href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-success-stories">Success Stories</Link></li>
              <li><Link href="/join-our-network" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-join-network">Join Our Network</Link></li>
              <li><Link href="/contact" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><Link href="/request-a-service" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors" data-testid="link-footer-request-service">Request a Service</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter/Contact Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
                data-testid="input-footer-newsletter"
              />
              <Button size="lg" className="bg-[#c5d520] text-[#042940] min-h-[52px] no-default-hover-elevate no-default-active-elevate hover:bg-[#d4e232] active:bg-[#b3c11c]" data-testid="button-footer-newsletter">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-sm font-bold text-white mb-2">Need Immediate Help?</p>
              <a href="tel:8885550123" className="text-xl font-bold text-[#c5d520] hover:underline" data-testid="link-footer-phone">
                (888) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2026 Tenth Rock Solutions. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-cookies">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
