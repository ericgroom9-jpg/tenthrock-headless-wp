"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, ArrowRight, ChevronLeft, ChevronRight, CheckSquare } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StatsSection from "@/components/shared/StatsSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FaqSection from "@/components/shared/FaqSection";
import LocationSection from "@/components/shared/LocationSection";
import FinalCtaSection from "@/components/shared/FinalCtaSection";
import { useState } from "react";

const heroImage = "/images/stock/hero-aerial.jpg";
const zipcodeImage = "/images/stock/zipcode-mockup.jpg";

const cities = [
  ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  ["Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
  ["Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte"],
  ["Indianapolis", "Seattle", "Denver", "Washington DC", "Boston"]
];

const services = [
  {
    title: "Dumpster Rental",
    description: "Flexible rental options for construction, renovation, and cleanout projects of any size.",
    image: "/images/stock/service-dumpster.jpg"
  },
  {
    title: "Commercial Waste",
    description: "Reliable scheduled pickups and customized waste management solutions for businesses.",
    image: "/images/stock/service-commercial.jpg"
  },
  {
    title: "Emergency Removal",
    description: "24/7 rapid response for storm debris, disaster cleanup, and urgent waste situations.",
    image: "/images/stock/service-emergency.jpg"
  }
];

export default function LocationsPage() {
  const [zipcode, setZipcode] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Interior Hero Section */}
      <section 
        className="relative pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 bg-[#042940] overflow-hidden"
        aria-labelledby="locations-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#042940]/90 to-[#042940]/70" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 
              id="locations-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-4"
            >
              WHENEVER YOU NEED US
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold"
                data-testid="button-locations-cta"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white rounded-full font-bold min-h-[52px] whitespace-nowrap"
                data-testid="button-locations-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                (888) 555-0123
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-[#F9F9F6]"
        aria-labelledby="areas-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 
              id="areas-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter mb-6 leading-[1.1]"
            >
              Nationwide Coverage. Local Support.
            </h2>
            <p className="text-base md:text-lg text-primary/70 max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cities.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                className={`space-y-3 sm:space-y-4 ${columnIndex < cities.length - 1 ? 'lg:border-r lg:border-primary/10 lg:pr-6 xl:pr-8' : ''}`}
              >
                {column.map((city, cityIndex) => (
                  <div 
                    key={cityIndex}
                    className="flex items-center gap-2 sm:gap-3"
                    data-testid={`city-${columnIndex}-${cityIndex}`}
                  >
                    <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5d520] flex-shrink-0" />
                    <span className="font-bold text-primary text-sm sm:text-base">{city}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start CTA Section */}
      <section 
        className="py-16 md:py-24 bg-[#F9F9F6]"
        aria-labelledby="ready-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="ready-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter mb-6 leading-[1.1]"
              >
                Ready<br />to start?
              </h2>
              <p className="text-base md:text-lg text-primary/70 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              {/* Zipcode Form */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <label htmlFor="zipcode-input" className="sr-only">Enter your zipcode</label>
                <Input
                  id="zipcode-input"
                  type="text"
                  placeholder="Enter your zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  className="flex-1 rounded-full border-primary/20 focus-visible:ring-[#c5d520] focus-visible:border-[#c5d520]"
                  data-testid="input-zipcode"
                  aria-label="Zipcode"
                />
                <Button 
                  size="lg"
                  className="bg-[#c5d520] text-primary shadow-[0_0_40px_rgba(197,213,32,0.3)] rounded-full font-bold focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2"
                  data-testid="button-check-zipcode"
                >
                  Check Availability
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[5px] overflow-hidden aspect-[4/3] bg-[#e5e5e5]"
            >
              <img 
                src={zipcodeImage} 
                alt="Zipcode availability checker" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section 
        className="py-16 md:py-24 lg:py-32 bg-[#F5F5F5]"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter leading-[1.1]"
            >
              Our Services
            </h2>
          </motion.div>

          {/* Desktop Grid / Mobile Slider */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#d2d2d2] rounded-[5px] overflow-hidden aspect-[4/5]"
                data-testid={`service-card-${index}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm mb-4">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-white/20 text-white bg-white/10 backdrop-blur-sm rounded-[5px]"
                    data-testid={`button-service-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-[5px]">
              <div 
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="w-full flex-shrink-0 bg-[#d2d2d2] aspect-[4/5] relative"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/90 text-sm mb-4">{service.description}</p>
                      <Button 
                        variant="outline"
                        className="w-full border-white/20 text-white bg-white/10 backdrop-blur-sm rounded-[5px]"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider Controls */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Previous service"
                data-testid="button-prev-slide"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Next service"
                data-testid="button-next-slide"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (same as homepage) */}
      <StatsSection />

      {/* Case Study Section (same as homepage) */}
      <CaseStudySection />

      {/* FAQ Section (same as homepage) */}
      <FaqSection />

      {/* Location Section (same as homepage) */}
      <LocationSection />

      {/* Final CTA Section (same as homepage) */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
