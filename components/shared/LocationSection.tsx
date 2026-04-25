"use client";

import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn
          className="text-left sm:text-center mb-8 sm:mb-12"
        >
          <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            Where to Find Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Headquartered in Clearwater Beach, FL. Dispatching crews across 48 states, 24/7.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <FadeIn
            className="space-y-6 lg:space-y-8"
          >
            <div className="relative rounded-[5px] overflow-hidden aspect-[4/3]">
              <Image
                src="/images/stock/location-clearwater-beach.jpg"
                alt="Aerial view of Clearwater Beach shoreline near Tenth Rock headquarters"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                loading="lazy"
                data-testid="img-location-clearwater-beach"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767" target="_blank" rel="noopener noreferrer" className="block text-gray-600 pl-9 hover:underline">140 Island Way Ste. 159, Clearwater Beach, FL 33767</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
              </div>
              <p className="text-gray-600 pl-9">Available 24/7 for emergencies</p>
              <a href="tel:+17275105454" className="block text-[#042940] font-semibold pl-9 hover:underline">727.510.5454</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Email</h3>
              </div>
              <a href="mailto:hello@tenthrock.com" className="block text-gray-600 pl-9 hover:underline">hello@tenthrock.com</a>
            </div>
          </FadeIn>

          <FadeIn
            className="lg:col-span-2 relative rounded-[5px] overflow-hidden self-start"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto"
              style={{ aspectRatio: "768 / 512" }}
              suppressHydrationWarning
            >
              <source src="/assets_export/videos/us-map-pins-loop.mp4?v=2" type="video/mp4" />
            </video>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
