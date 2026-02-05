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

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-[#042940] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
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
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
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
            <ul className="space-y-2 text-white/60">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">
                    {service.label}
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/#about" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">About Us</Link></li>
              <li><Link href="/who-we-serve" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Who We Serve</Link></li>
              <li><Link href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Success Stories</Link></li>
              <li><Link href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Partner Program</Link></li>
              <li><Link href="#" className="block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter/Contact Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
              />
              <Button size="lg" className="bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] min-h-[52px]">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-sm font-bold text-white mb-2">Need Immediate Help?</p>
              <a href="tel:8885550123" className="text-xl font-bold text-[#c5d520] hover:underline">
                (888) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2026 Tenth Rock Solutions. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
