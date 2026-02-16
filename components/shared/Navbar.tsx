"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

interface NavbarProps {
  variant?: "floating" | "sticky";
}

const serviceCategories = [
  {
    category: "Emergency Waste Response",
    items: [
      { label: "Site Stabilization", href: "/services/site-stabilization" },
      { label: "Compliance Support", href: "/services/compliance-support" },
      { label: "Brand Protection", href: "/services/brand-protection" },
    ],
  },
  {
    category: "Specialized Project Logistics",
    items: [
      { label: "Site Closures & Remodels", href: "/services/site-closures-remodels" },
      { label: "Events & Stadiums", href: "/services/events-stadiums" },
      { label: "Natural Disaster Mobilization", href: "/services/natural-disaster-mobilization" },
    ],
  },
  {
    category: "Dumpsters & Temporary Containers",
    items: [
      { label: "On-Demand Service", href: "/services/on-demand-service" },
      { label: "Multiple Sizes & Types", href: "/services/multiple-sizes-types" },
      { label: "Flexible Terms", href: "/services/flexible-terms" },
    ],
  },
  {
    category: "Centralized Waste Management",
    items: [
      { label: "Single Point of Contact", href: "/services/single-point-of-contact" },
      { label: "Performance Tracking", href: "/services/performance-tracking" },
      { label: "Spend Optimization", href: "/services/spend-optimization" },
    ],
  },
];

const sectorLinks = [
  { label: "Educational Institutions", href: "/industries/educational" },
  { label: "Stadiums & Events", href: "/industries/stadiums-events" },
  { label: "Faith Based", href: "/industries/faith-based" },
  { label: "Municipalities", href: "/industries/municipalities" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Natural Disasters", href: "/industries/natural-disasters" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail", href: "/industries/retail" },
];

const locationLinks = [
  "Alabama", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"
].map(state => ({
  label: state,
  href: `/locations/${state.toLowerCase().replace(/\s+/g, "-")}`,
}));

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Join Our Network", href: "/join-our-network" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ variant = "floating" }: NavbarProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const isFloating = variant === "floating";

  return (
    <header className={isFloating 
      ? "fixed top-6 left-0 right-0 z-50 px-4 md:px-8" 
      : "sticky top-0 z-50 px-4 md:px-8 py-3 bg-white/95 backdrop-blur-sm"
    }>
      <div className={`container mx-auto max-w-[92rem] ${isFloating ? "bg-white rounded-[5px] shadow-lg px-3 sm:px-6 py-3" : "px-0"}`}>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="hover:opacity-90 transition-opacity shrink-0" data-testid="link-nav-home">
            <Logo variant="main" />
          </Link>

          {/* Mobile: CTA + Hamburger visible in top bar */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <Button 
              asChild
              size="sm" 
              className="bg-[#c5d520] text-[#042940] font-bold text-xs whitespace-nowrap rounded-full px-3 sm:px-4"
              data-testid="button-mobile-cta"
            >
              <Link href="/request-a-service">Request a Service</Link>
            </Button>
            <button 
              className="p-3 text-primary rounded-[5px] transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              aria-expanded={isNavExpanded}
              aria-label="Toggle navigation menu"
              data-testid="button-nav-toggle"
            >
              {isNavExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop inline nav - visible on xl+ */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            <div
              className="relative"
              onMouseEnter={() => { setIsServicesOpen(true); setIsSectorsOpen(false); setIsLocationsOpen(false); setIsAboutOpen(false); }}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-services"
              >
                <Link
                  href="/services/commercial-waste"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
                  data-testid="link-nav-services"
                >
                  Commercial Waste Services
                </Link>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="p-1 hover:text-[#c5d520] transition-colors"
                  aria-label="Toggle services menu"
                  data-testid="button-nav-services-toggle"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8"
                    role="menu"
                    data-testid="menu-nav-services"
                  >
                    <div className="container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
                      <div className="grid grid-cols-4 gap-8">
                        {serviceCategories.map((cat, catIdx) => (
                          <div key={catIdx} className="space-y-3">
                            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></div>
                              <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80">
                                {cat.category}
                              </span>
                            </div>
                            <div className="grid gap-0.5">
                              {cat.items.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  data-testid={`link-nav-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="group flex items-center gap-3 rounded-[5px] px-3 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[44px]"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <ChevronRight className="w-3.5 h-3.5 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0" />
                                  <span>{service.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Who We Serve Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsSectorsOpen(true); setIsServicesOpen(false); setIsLocationsOpen(false); setIsAboutOpen(false); }}
              onMouseLeave={() => setIsSectorsOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-sectors"
              >
                <a
                  href="/who-we-serve"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
                  data-testid="link-nav-who-we-serve"
                >
                  Who We Serve
                </a>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isSectorsOpen}
                  onClick={() => setIsSectorsOpen((v) => !v)}
                  className="p-1 hover:text-[#c5d520] transition-colors"
                  aria-label="Toggle sectors menu"
                  data-testid="button-nav-sectors-toggle"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isSectorsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8"
                    role="menu"
                    data-testid="menu-nav-sectors"
                  >
                    <div className="container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
                      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></div>
                        <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80">
                          Industries We Serve
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-x-8 gap-y-1">
                        {sectorLinks.map((sector) => (
                          <a
                            key={sector.label}
                            href={sector.href}
                            data-testid={`link-nav-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="group flex items-center gap-3 rounded-[5px] px-3 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[44px]"
                            onClick={() => setIsSectorsOpen(false)}
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0" />
                            <span>{sector.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsLocationsOpen(true); setIsServicesOpen(false); setIsSectorsOpen(false); setIsAboutOpen(false); }}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-locations"
              >
                <Link
                  href="/locations"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
                  data-testid="link-nav-locations"
                >
                  Locations
                </Link>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isLocationsOpen}
                  onClick={() => setIsLocationsOpen((v) => !v)}
                  className="p-1 hover:text-[#c5d520] transition-colors"
                  aria-label="Toggle locations menu"
                  data-testid="button-nav-locations-toggle"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isLocationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8"
                    role="menu"
                    data-testid="menu-nav-locations"
                  >
                    <div className="container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></div>
                          <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80">
                            Service Locations
                          </span>
                        </div>
                        <Link
                          href="/locations"
                          className="text-xs font-bold text-[#c5d520] hover:text-[#c5d520]/80 transition-colors"
                          onClick={() => setIsLocationsOpen(false)}
                          data-testid="link-nav-locations-view-all"
                        >
                          View All Locations
                        </Link>
                      </div>
                      <div className="grid grid-cols-4 gap-x-8">
                        {(() => {
                          const colSize = Math.ceil(locationLinks.length / 4);
                          return Array.from({ length: 4 }, (_, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-0.5">
                              {locationLinks.slice(colIdx * colSize, (colIdx + 1) * colSize).map((loc) => (
                                <Link
                                  key={loc.label}
                                  href={loc.href}
                                  data-testid={`link-nav-locations-${loc.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="group flex items-center gap-3 rounded-[5px] px-3 py-2 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors"
                                  onClick={() => setIsLocationsOpen(false)}
                                >
                                  <ChevronRight className="w-3 h-3 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0" />
                                  <span>{loc.label}</span>
                                </Link>
                              ))}
                            </div>
                          ));
                        })()}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsAboutOpen(true); setIsServicesOpen(false); setIsSectorsOpen(false); setIsLocationsOpen(false); }}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-about"
              >
                <a
                  href="/about"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
                  data-testid="link-nav-about"
                >
                  About Us
                </a>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isAboutOpen}
                  onClick={() => setIsAboutOpen((v) => !v)}
                  className="p-1 hover:text-[#c5d520] transition-colors"
                  aria-label="Toggle about menu"
                  data-testid="button-nav-about-toggle"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8"
                    role="menu"
                    data-testid="menu-nav-about"
                  >
                    <div className="container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
                      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c5d520]"></div>
                        <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80">
                          About Tenth Rock
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-x-8 gap-y-1">
                        {aboutLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            data-testid={`link-nav-about-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="group flex items-center gap-3 rounded-[5px] px-3 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[44px]"
                            onClick={() => setIsAboutOpen(false)}
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0" />
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Side Actions - desktop only */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Button size="lg" variant="ghost" className="text-primary font-extrabold transition-colors uppercase tracking-wide text-sm px-2 min-h-[52px] whitespace-nowrap" data-testid="button-desktop-login">
              Login
            </Button>
            <Button asChild size="lg" className="bg-[#c5d520] text-[#042940] shadow-lg shadow-[#c5d520]/20 min-h-[52px] whitespace-nowrap" data-testid="button-desktop-cta">
              <Link href="/request-a-service">Request a Service</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        <AnimatePresence>
          {isNavExpanded && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden border-t border-gray-100 mt-3"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col pb-4 max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain">
                {/* Services Accordion */}
                <div className="border-b border-gray-100">
                  <div
                    className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
                    data-testid="button-mobile-services"
                  >
                    <Link
                      href="/services/commercial-waste"
                      className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      Commercial Waste Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-expanded={isServicesOpen}
                      className="p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label="Toggle services submenu"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-2">
                          {serviceCategories.map((cat, catIdx) => (
                            <div key={catIdx}>
                              <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/70 px-4 pb-1 pt-3">
                                {cat.category}
                              </div>
                              {cat.items.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  className="font-medium text-primary/80 text-[15px] py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[48px] flex items-center"
                                  onClick={() => { setIsNavExpanded(false); setIsServicesOpen(false); }}
                                  data-testid={`link-mobile-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Who We Serve Accordion */}
                <div className="border-b border-gray-100">
                  <div
                    className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
                    data-testid="button-mobile-sectors"
                  >
                    <a
                      href="/who-we-serve"
                      className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      Who We Serve
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSectorsOpen(!isSectorsOpen)}
                      aria-expanded={isSectorsOpen}
                      className="p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label="Toggle sectors submenu"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isSectorsOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3">
                          {sectorLinks.map((sector) => (
                            <a
                              key={sector.label}
                              href={sector.href}
                              className="font-medium text-primary/80 text-[15px] py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[48px] flex items-center"
                              onClick={() => { setIsNavExpanded(false); setIsSectorsOpen(false); }}
                              data-testid={`link-mobile-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            >
                              {sector.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Locations Accordion */}
                <div className="border-b border-gray-100">
                  <div
                    className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
                    data-testid="button-mobile-locations"
                  >
                    <Link
                      href="/locations"
                      className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      Locations
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                      aria-expanded={isLocationsOpen}
                      className="p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label="Toggle locations submenu"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isLocationsOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 grid grid-cols-2 gap-x-2">
                          {locationLinks.map((loc) => (
                            <Link
                              key={loc.label}
                              href={loc.href}
                              className="font-medium text-primary/80 py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors text-sm min-h-[44px] flex items-center"
                              onClick={() => { setIsNavExpanded(false); setIsLocationsOpen(false); }}
                              data-testid={`link-mobile-locations-${loc.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            >
                              {loc.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us Accordion */}
                <div className="border-b border-gray-100">
                  <div
                    className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
                    data-testid="button-mobile-about"
                  >
                    <a
                      href="/about"
                      className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      About Us
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      aria-expanded={isAboutOpen}
                      className="p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label="Toggle about submenu"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3">
                          {aboutLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="font-medium text-primary/80 text-[15px] py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[48px] flex items-center"
                              onClick={() => { setIsNavExpanded(false); setIsAboutOpen(false); }}
                              data-testid={`link-mobile-about-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 px-4">
                  <Button variant="ghost" className="w-full justify-center font-extrabold text-primary uppercase tracking-wide min-h-[52px]" data-testid="button-mobile-login">
                    Login
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
