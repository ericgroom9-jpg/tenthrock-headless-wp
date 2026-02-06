"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <ContactSection />
      <Footer />
    </main>
  );
}

function ContactSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-16 xl:pr-24"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6" data-testid="text-contact-heading">
              Contact Us
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-base sm:text-lg text-[#042940]/70 leading-relaxed">
                If you are experiencing a trash emergency and need immediate assistance, please call us at{" "}
                <a href="tel:7275105454" className="font-bold text-[#042940] hover:text-[#c5d520] transition-colors" data-testid="link-emergency-phone">727.510.5454</a>.
              </p>
              <p className="text-base sm:text-lg text-[#042940]/70 leading-relaxed">
                If you are interested in becoming a Preferred Vendor,{" "}
                <a href="/join-our-network" className="font-bold text-[#042940] underline hover:text-[#c5d520] transition-colors" data-testid="link-vendor">visit here</a>!
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#042940] mb-6" data-testid="text-contact-subheading">
                Contact
              </h2>
              <div className="space-y-5">
                <a href="tel:1234567890" className="flex items-center gap-4 group" data-testid="link-phone">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Phone className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">(123) 456-7890</span>
                </a>
                <a href="mailto:info@domain.com" className="flex items-center gap-4 group" data-testid="link-email">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Mail className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">info@domain.com</span>
                </a>
                <div className="flex items-start gap-4" data-testid="text-hours">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <div className="text-[#042940]/70 leading-relaxed">
                    <p>Monday - Friday: 7am - 6pm PST</p>
                    <p>Saturday: 7am - 3pm PST</p>
                    <p>Sunday: 9am - 5pm PST</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border-t border-[#042940]/10 pt-12 lg:border-t-0 lg:pt-0 lg:pl-16 xl:pl-24 lg:border-l lg:border-[#042940]/10"
          >
            <form className="space-y-6" data-testid="form-contact">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold text-[#042940] mb-2">Name</label>
                <Input
                  id="contact-name"
                  placeholder=""
                  className="border-[#042940]/15 focus-visible:ring-[#c5d520]"
                  data-testid="input-contact-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-[#042940] mb-2">Email</label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder=""
                  className="border-[#042940]/15 focus-visible:ring-[#c5d520]"
                  data-testid="input-contact-email"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-bold text-[#042940] mb-2">+1 Phone Number</label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder=""
                  className="border-[#042940]/15 focus-visible:ring-[#c5d520]"
                  data-testid="input-contact-phone"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold text-[#042940] mb-2">What can we help you with?</label>
                <Textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Type your message..."
                  className="border-[#042940]/15 focus-visible:ring-[#c5d520] resize-vertical"
                  data-testid="input-contact-message"
                />
              </div>

              <div className="flex items-center gap-3" data-testid="label-contact-terms">
                <Checkbox
                  id="contact-terms"
                  className="border-[#042940]/20 data-[state=checked]:bg-[#c5d520] data-[state=checked]:border-[#c5d520] data-[state=checked]:text-[#042940]"
                  data-testid="input-contact-terms"
                />
                <label htmlFor="contact-terms" className="text-sm text-[#042940]/60 cursor-pointer">
                  I accept the{" "}
                  <a href="#" className="text-[#042940] underline font-bold" data-testid="link-terms">Terms</a>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-[#c5d520] text-[#042940] shadow-lg min-h-[52px] whitespace-nowrap font-bold"
                data-testid="button-contact-submit"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
