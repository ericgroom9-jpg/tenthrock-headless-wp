"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left sm:text-center mb-8 sm:mb-12"
        >
          <h2 id="location-heading" className="text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4">
            Where to Find Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Serving businesses nationwide with regional offices for local support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Office</h3>
              </div>
              <p className="text-gray-600 ml-9">140 Island Way Ste.159, Clearwater Beach, FL 33767</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Phone</h3>
              </div>
              <p className="text-gray-600 ml-9">Available 24/7 for emergencies</p>
              <p className="text-[#042940] font-semibold ml-9">727.510.5454</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-[#c5d520]" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#042940]">Email</h3>
              </div>
              <p className="text-gray-600 ml-9">hello@tenthrock.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative aspect-video rounded-[5px] overflow-hidden bg-gray-100"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets_export/videos/us-map-pins-loop.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
