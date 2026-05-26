"use client";

import dynamic from "next/dynamic";
import FadeIn from "@/components/shared/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

// Heavy framer-motion + SVG map — defer to client only so it doesn't ship
// with the initial JS for every page that embeds the location footer block.
const UsMapPinsAnimation = dynamic(
  () => import("@/components/shared/UsMapPinsAnimation"),
  { ssr: false }
);

interface LocationSectionProps {
  heading?: string;
  subtitle?: string;
  address?: string;
  addressLink?: string;
  phoneNote?: string;
  phone?: string;
  phoneLink?: string;
  email?: string;
  emailLink?: string;
}

export default function LocationSection({
  heading = "Where to Find Us",
  subtitle = "Headquartered in Clearwater Beach, FL. Dispatching crews across 48 states, 24/7.",
  address = "140 Island Way Ste. 159, Clearwater Beach, FL 33767",
  addressLink = "https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767",
  phoneNote = "Available 24/7 for emergencies",
  phone = "727.510.5454",
  phoneLink = "tel:+17275105454",
  email = "hello@tenthrock.com",
  emailLink = "mailto:hello@tenthrock.com",
}: LocationSectionProps = {}) {
  return (
    <section className="py-10 md:py-24 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="text-left sm:text-center mb-8 sm:mb-12"
        >
          <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <FadeIn
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
              </div>
              <a href={addressLink} target="_blank" rel="noopener noreferrer" className="block text-gray-600 pl-9 hover:underline">{address}</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
              </div>
              <p className="text-gray-600 pl-9">{phoneNote}</p>
              <a href={phoneLink} className="block text-[#042940] font-semibold pl-9 hover:underline">{phone}</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Email</h3>
              </div>
              <a href={emailLink} className="block text-gray-600 pl-9 hover:underline">{email}</a>
            </div>
          </FadeIn>

          <FadeIn
            className="lg:col-span-2 relative rounded-[5px] overflow-hidden"
          >
            <div className="w-full">
              <UsMapPinsAnimation />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
