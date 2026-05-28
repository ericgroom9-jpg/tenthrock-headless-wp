"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitGravityForm } from "@/lib/gf/submit-client";
import { GF_FORM_IDS } from "@/lib/gf/form-ids";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { ContactFormTemplateData } from "@/lib/wordpress";

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

export default function RequestAServiceClient({ data }: Props) {
  return (
    <main>
      <Navbar variant="sticky" />
      <RequestAServiceSection data={data} />
      <Footer />
    </main>
  );
}

function RequestAServiceSection({ data }: { data: ContactFormTemplateData | null }) {
  const router = useRouter();

  const pageHeading = data?.pageHeading || "Request A Service";
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
  const formHeading = data?.formHeading || "Request A Service";
  const formSubtitle = data?.formSubtitle || "Fill out the form below and we'll get back to you shortly.";
  const interestOptions = data?.interestOptions || defaultInterestOptions;
  const messageLabel = data?.messageLabel || "What can we help you with?";
  const submitLabel = data?.submitLabel || "Submit";
  const privacyText = data?.privacyText || "I accept the";
  const privacyLinkText = data?.privacyLinkText || "Privacy Policy";
  const privacyLinkUrl = data?.privacyLinkUrl || "/privacy-policy";

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    const result = await submitGravityForm(e.currentTarget, GF_FORM_IDS.requestAService);
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error || "Submission failed. Please try again.");
      return;
    }
    router.push(result.redirectUrl || "/");
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white" data-testid="section-request-service">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start">

          <FadeIn className="lg:pr-16 xl:pr-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-6" data-testid="text-request-heading">
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
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-6 tracking-tighter leading-tight" data-testid="text-request-contact-subheading">
                {cardHeading}
              </h2>
              <div className="space-y-5">
                <a href={phoneLink} className="flex items-center gap-4 group" data-testid="link-request-phone">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Phone className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">{phone}</span>
                </a>
                <a href={emailLink} className="flex items-center gap-4 group" data-testid="link-request-email">
                  <div className="w-10 h-10 rounded-full bg-[#042940]/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5d520]/20 transition-colors">
                    <Mail className="w-[18px] h-[18px] text-[#042940]" />
                  </div>
                  <span className="text-[#042940]/70 group-hover:text-[#042940] transition-colors">{email}</span>
                </a>
                <div className="flex items-start gap-4" data-testid="text-request-hours">
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

          <FadeIn className="border-t border-[#042940]/10 pt-12 lg:border-t-0 lg:pt-0 lg:pl-16 xl:pl-24 lg:border-l lg:border-[#042940]/10">
            <div className="bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#042940] mb-2" data-testid="text-request-form-heading">{formHeading}</h3>
                <p className="text-[#042940]/70 text-sm">{formSubtitle}</p>
              </div>
              <form className="space-y-5" data-testid="form-request-service" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="request-first-name" className="block text-sm font-medium text-[#042940] mb-2">First name</label>
                    <Input id="request-first-name" name="input_1" type="text" required placeholder="Enter your first name" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-request-first-name" />
                  </div>
                  <div>
                    <label htmlFor="request-last-name" className="block text-sm font-medium text-[#042940] mb-2">Last name</label>
                    <Input id="request-last-name" name="input_2" type="text" required placeholder="Enter your last name" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-request-last-name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="request-email" className="block text-sm font-medium text-[#042940] mb-2">Email</label>
                  <Input id="request-email" name="input_3" type="email" required placeholder="Enter your email" className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-request-email" />
                </div>
                <div>
                  <label htmlFor="request-phone" className="block text-sm font-medium text-[#042940] mb-2">Phone Number</label>
                  <PhoneInput id="request-phone" name="input_4" required className="w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors" data-testid="input-request-phone" />
                </div>
                <div>
                  <label htmlFor="request-interest" className="block text-sm font-medium text-[#042940] mb-2">I&apos;m interested in help with:</label>
                  <select id="request-interest" name="input_5" required className="w-full h-12 pl-4 pr-10 border border-[#042940]/20 rounded-[5px] bg-white text-base md:text-sm text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat" data-testid="select-request-interest" defaultValue="">
                    <option value="" disabled>Select one...</option>
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="request-message" className="block text-sm font-medium text-[#042940] mb-2">{messageLabel}</label>
                  <textarea id="request-message" name="input_6" required rows={5} placeholder="Type your message..." className="w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors" data-testid="textarea-request-message" />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="input_7.1" value="1" required className="w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]" data-testid="checkbox-request-terms" />
                    <span className="text-sm text-[#042940]/80">
                      {privacyText} <a href={privacyLinkUrl} className="text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors" data-testid="link-request-privacy-policy">{privacyLinkText}</a>
                    </span>
                  </label>
                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto bg-[#c5d520] text-[#042940] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] whitespace-nowrap" data-testid="button-request-submit">
                    {submitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</>) : submitLabel}
                  </Button>
                </div>
                {submitError && (
                  <p className="text-red-600 text-sm" data-testid="text-request-error">{submitError}</p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
