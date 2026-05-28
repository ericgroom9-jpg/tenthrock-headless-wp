"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { ContactFormTemplateData } from "@/lib/wordpress";
import { submitGravityForm } from "@/lib/gf/submit-client";
import { GF_FORM_IDS } from "@/lib/gf/form-ids";

interface Props {
  data: ContactFormTemplateData | null;
}

const defaultHours = [
  "Monday - Friday: 7am - 6pm ET",
  "Saturday: 7am - 3pm ET",
  "Sunday: 9am - 5pm ET",
];

const defaultInterestOptions = [
  { value: "emergency-waste-removal", label: "Emergency Waste Removal" },
  { value: "specialized-project-logistics", label: "Specialized Project Logistics" },
  { value: "dumpsters-containers", label: "Dumpster Rentals" },
  { value: "waste-operations-advisory", label: "Waste Advisory" },
  { value: "other", label: "Other" },
];

export default function ContactClient({ data }: Props) {
  return (
    <main>
      <Navbar variant="sticky" />
      <ContactSection data={data} />
      <Footer />
    </main>
  );
}

function ContactSection({ data }: { data: ContactFormTemplateData | null }) {
  const router = useRouter();

  const pageHeading = data?.pageHeading || "Contact Us";
  const emergencyText = data?.emergencyText || "If you are experiencing a trash emergency and need immediate assistance, please call us at";
  const emergencyPhone = data?.emergencyPhone || "727.510.5454";
  const emergencyPhoneLink = data?.emergencyPhoneLink || "tel:7275105454";
  const vendorText = data?.vendorText || "If you are interested in becoming a Preferred Vendor,";
  const vendorLinkText = data?.vendorLinkText || "visit here";
  const vendorLinkUrl = data?.vendorLinkUrl || "/join-our-network";
  const cardHeading = data?.cardHeading || "Contact";
  const phone = data?.phone || "727.510.5454";
  const phoneLink = data?.phoneLink || "tel:7275105454";
  const email = data?.email || "hello@tenthrock.com";
  const emailLink = data?.emailLink || "mailto:hello@tenthrock.com";
  const hours = data?.hours?.map(h => h.line) || defaultHours;
  const formHeading = data?.formHeading || "Request a Quote";
  const formSubtitle = data?.formSubtitle || "Fill out the form below and we'll get back to you shortly.";
  const interestOptions = data?.interestOptions || defaultInterestOptions;
  const messageLabel = data?.messageLabel || "Message";
  const submitLabel = data?.submitLabel || "Submit Request";
  const privacyText = data?.privacyText || "I accept the";
  const privacyLinkText = data?.privacyLinkText || "Privacy Policy";
  const privacyLinkUrl = data?.privacyLinkUrl || "/privacy-policy";

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    const result = await submitGravityForm(e.currentTarget, GF_FORM_IDS.contact);
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error || "Submission failed. Please try again.");
      return;
    }
    router.push(result.redirectUrl || "/");
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-0 items-start">

          <FadeIn className="xl:pr-16 2xl:pr-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6" data-testid="text-contact-heading">
              {pageHeading}
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-base text-[#042940]/70 leading-relaxed">
                {emergencyText}{" "}
                <a href={emergencyPhoneLink} className="font-bold text-[#042940] hover:text-[#c5d520] transition-colors" data-testid="link-emergency-phone">{emergencyPhone}</a>.
              </p>
              <p className="text-base text-[#042940]/70 leading-relaxed">
                {vendorText}{" "}
                <a href={vendorLinkUrl} className="font-bold text-[#042940] underline hover:text-[#c5d520] transition-colors" data-testid="link-vendor">{vendorLinkText}</a>!
              </p>
            </div>

            <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8">
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 tracking-tighter leading-tight" data-testid="text-contact-subheading">
                {cardHeading}
              </h2>
              <div className="space-y-5">
                <a href={phoneLink} className="flex items-center gap-4 group" data-testid="link-phone">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Phone className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">{phone}</span>
                </a>
                <a href={emailLink} className="flex items-center gap-4 group" data-testid="link-email">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Mail className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">{email}</span>
                </a>
                <div className="flex items-start gap-4" data-testid="text-hours">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <div className="text-[#042940]/70 leading-relaxed">
                    {hours.map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="border-t border-[#042940]/10 pt-12 xl:border-t-0 xl:pt-0 xl:pl-16 2xl:pl-24 xl:border-l xl:border-[#042940]/10">
            <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#042940] mb-2" data-testid="text-form-heading">{formHeading}</h3>
                <p className="text-[#042940]/70 text-sm">{formSubtitle}</p>
              </div>
              <form className="space-y-5" data-testid="form-contact" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm font-medium text-[#042940] mb-2">First name</label>
                    <Input id="contact-first-name" name="input_1" type="text" required placeholder="Enter your first name" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-contact-first-name" />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm font-medium text-[#042940] mb-2">Last name</label>
                    <Input id="contact-last-name" name="input_2" type="text" required placeholder="Enter your last name" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-contact-last-name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#042940] mb-2">Email</label>
                    <Input id="contact-email" name="input_3" type="email" required placeholder="Enter your email" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-contact-email" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-[#042940] mb-2">Phone number</label>
                    <PhoneInput id="contact-phone" name="input_4" required className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-contact-phone" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-[#042940] mb-2">Company</label>
                  <Input id="contact-company" name="input_5" type="text" required placeholder="Enter your company name" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-contact-company" />
                  {/* Interest field hidden from this form per design; submitting a default so GF validation passes. */}
                  <input type="hidden" name="input_6" value="other" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#042940] mb-2">{messageLabel}</label>
                  <textarea id="contact-message" name="input_7" required rows={4} placeholder="Type your message..." className="w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors" data-testid="textarea-contact-message" />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="input_8.1" value="1" required className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]" data-testid="checkbox-contact-terms" />
                    <span className="text-sm text-[#042940]/80">
                      {privacyText} <a href={privacyLinkUrl} className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-contact-privacy-policy">{privacyLinkText}</a>
                    </span>
                  </label>
                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] whitespace-nowrap" data-testid="button-contact-submit">
                    {submitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</>) : submitLabel}
                  </Button>
                </div>
                {submitError && (
                  <p className="text-red-600 text-sm" data-testid="text-contact-error">{submitError}</p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
