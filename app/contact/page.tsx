"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
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
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/contact/thank-you");
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6" data-testid="text-contact-heading">
              Contact Us
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-base text-[#042940]/70 leading-relaxed">
                If you are experiencing a trash emergency and need immediate assistance, please call us at{" "}
                <a href="tel:7275105454" className="font-bold text-[#042940] hover:text-[#c5d520] transition-colors" data-testid="link-emergency-phone">727.510.5454</a>.
              </p>
              <p className="text-base text-[#042940]/70 leading-relaxed">
                If you are interested in becoming a Preferred Vendor,{" "}
                <a href="/join-our-network" className="font-bold text-[#042940] underline hover:text-[#c5d520] transition-colors" data-testid="link-vendor">visit here</a>!
              </p>
            </div>

            <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8">
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 tracking-tighter leading-tight" data-testid="text-contact-subheading">
                Contact
              </h2>
              <div className="space-y-5">
                <a href="tel:7275105454" className="flex items-center gap-4 group" data-testid="link-phone">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Phone className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">727.510.5454</span>
                </a>
                <a href="mailto:hello@tenthrock.com" className="flex items-center gap-4 group" data-testid="link-email">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Mail className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">hello@tenthrock.com</span>
                </a>
                <div className="flex items-start gap-4" data-testid="text-hours">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <div className="text-[#042940]/70 leading-relaxed">
                    <p>Monday - Friday: 7am - 6pm ET</p>
                    <p>Saturday: 7am - 3pm ET</p>
                    <p>Sunday: 9am - 5pm ET</p>
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
            <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#042940] mb-2" data-testid="text-form-heading">Request a Quote</h3>
                <p className="text-[#042940]/70 text-sm">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <form className="space-y-5" data-testid="form-contact" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm font-medium text-[#042940] mb-2">
                      First name
                    </label>
                    <Input
                      id="contact-first-name"
                      type="text"
                      className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
                      data-testid="input-contact-first-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm font-medium text-[#042940] mb-2">
                      Last name
                    </label>
                    <Input
                      id="contact-last-name"
                      type="text"
                      className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
                      data-testid="input-contact-last-name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#042940] mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-[#042940] mb-2">
                      Phone number
                    </label>
                    <PhoneInput
                      id="contact-phone"
                      className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-[#042940] mb-2">
                      Company
                    </label>
                    <Input
                      id="contact-company"
                      type="text"
                      className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors"
                      data-testid="input-contact-company"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-interest" className="block text-sm font-medium text-[#042940] mb-2">
                      I'm interested in help with:
                    </label>
                    <select
                      id="contact-interest"
                      className="w-full h-12 pl-4 pr-10 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                      data-testid="select-contact-interest"
                      defaultValue=""
                    >
                      <option value="" disabled>Select one...</option>
                      <option value="emergency-waste-removal">Emergency Waste Removal</option>
                      <option value="specialized-project-logistics">Specialized Project Logistics</option>
                      <option value="dumpsters-containers">Dumpsters & Temporary Containers</option>
                      <option value="waste-operations-advisory">Waste Operations Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#042940] mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors"
                    data-testid="textarea-contact-message"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]"
                      data-testid="checkbox-contact-terms"
                    />
                    <span className="text-sm text-[#042940]/80">
                      I accept the <a href="/privacy-policy" className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-contact-privacy-policy">Privacy Policy</a>
                    </span>
                  </label>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)]"
                    data-testid="button-contact-submit"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
