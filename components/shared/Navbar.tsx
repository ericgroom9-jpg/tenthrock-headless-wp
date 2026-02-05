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

const serviceLinks = [
  { label: "Emergency & Overflow Waste Response", href: "/services/emergency-waste-removal" },
  { label: "Store Decommissioning & Remodel Support", href: "/services/store-decommissioning" },
  { label: "Event & Stadium Waste Logistics", href: "/services/event-stadium" },
  { label: "Dumpster Rental & Temporary Containers", href: "/services/dumpster-rentals" },
  { label: "Centralized Waste Program Management", href: "/services/centralized-programs" },
  { label: "Environmental & Compactor Maintenance Services", href: "/services/environmental-maintenance" },
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

export default function Navbar({ variant = "floating" }: NavbarProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  const isFloating = variant === "floating";

  return (
    <header className={isFloating 
      ? "fixed top-6 left-0 right-0 z-50 px-4 md:px-8" 
      : "sticky top-0 z-50 px-4 md:px-8 py-3 bg-white/95 backdrop-blur-sm"
    }>
      <div className={`container mx-auto max-w-[92rem] ${isFloating ? "bg-white rounded-[5px] shadow-lg px-4 sm:px-6 py-3" : "px-0"}`}>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-90 transition-opacity shrink-0">
            <Logo variant="main" />
          </Link>

          {/* Mobile: CTA + Hamburger visible in top bar */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button 
              size="sm" 
              className="bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] font-bold text-xs whitespace-nowrap min-h-[52px] px-4"
              data-testid="button-mobile-cta"
            >
              Get a Quote
            </Button>
            <button 
              className="p-3 text-primary rounded-[5px] hover:bg-gray-100 active:bg-gray-100 transition-colors min-w-[52px] min-h-[52px] flex items-center justify-center"
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
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-services"
              >
                <Link
                  href="/services/commercial-waste"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
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
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-0 top-[calc(100%+14px)] w-[420px] rounded-[5px] bg-white shadow-2xl border border-primary/10 overflow-hidden"
                    role="menu"
                    data-testid="menu-nav-services"
                  >
                    <div className="p-3">
                      <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/50 px-3 py-2">
                        Services
                      </div>
                      <div className="grid gap-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            data-testid={`link-nav-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="flex items-center justify-between rounded-[5px] px-3 py-3 text-sm font-bold text-primary hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#042940] active:text-[#042940] transition-colors min-h-[44px]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span className="pr-3">{service.label}</span>
                            <ChevronRight className="w-4 h-4 text-primary/40" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/services/emergency-waste-removal" className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2">Emergency Waste Removal</a>
            
            {/* Who We Serve Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSectorsOpen(true)}
              onMouseLeave={() => setIsSectorsOpen(false)}
            >
              <div
                className="inline-flex items-center gap-1 min-h-[44px]"
                data-testid="button-nav-sectors"
              >
                <a
                  href="/who-we-serve"
                  className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors"
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
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {isSectorsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-0 top-[calc(100%+14px)] w-[320px] rounded-[5px] bg-white shadow-2xl border border-primary/10 overflow-hidden"
                    role="menu"
                    data-testid="menu-nav-sectors"
                  >
                    <div className="p-3">
                      <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/50 px-3 py-2">
                        Industries
                      </div>
                      <div className="grid gap-1">
                        {sectorLinks.map((sector) => (
                          <a
                            key={sector.label}
                            href={sector.href}
                            data-testid={`link-nav-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="flex items-center justify-between rounded-[5px] px-3 py-3 text-sm font-bold text-primary hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#042940] active:text-[#042940] transition-colors min-h-[44px]"
                            onClick={() => setIsSectorsOpen(false)}
                          >
                            <span className="pr-3">{sector.label}</span>
                            <ChevronRight className="w-4 h-4 text-primary/40" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/our-process" className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2">Our Process</a>
            <a href="/about" className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2">About Us</a>
          </nav>

          {/* Right Side Actions - desktop only */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Button size="lg" variant="ghost" className="text-primary font-extrabold hover:bg-transparent hover:text-[#c5d520] transition-colors uppercase tracking-wide text-sm px-2 min-h-[52px] whitespace-nowrap">
              Login
            </Button>
            <Button size="lg" className="bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] shadow-lg shadow-[#c5d520]/20 min-h-[52px] whitespace-nowrap">
              Get a Quote
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
              className="xl:hidden overflow-hidden mt-4"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 pb-4">
                {/* Services Accordion */}
                <div>
                  <div
                    className="flex items-center justify-between w-full py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] transition-colors min-h-[52px]"
                    data-testid="button-mobile-services"
                  >
                    <Link
                      href="/services/commercial-waste"
                      className="font-bold text-primary hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      Commercial Waste Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-expanded={isServicesOpen}
                      className="p-2 hover:text-[#c5d520] transition-colors"
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
                        <div className="pl-4 pb-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="block font-medium text-primary/80 py-3 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[52px] flex items-center"
                              onClick={() => { setIsNavExpanded(false); setIsServicesOpen(false); }}
                              data-testid={`link-mobile-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="/services/emergency-waste-removal" 
                  className="font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center"
                  onClick={() => setIsNavExpanded(false)}
                >
                  Emergency Waste Removal
                </a>
                
                {/* Who We Serve Accordion */}
                <div>
                  <div
                    className="flex items-center justify-between w-full py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] transition-colors min-h-[52px]"
                    data-testid="button-mobile-sectors"
                  >
                    <a
                      href="/who-we-serve"
                      className="font-bold text-primary hover:text-[#c5d520] transition-colors flex-1"
                      onClick={() => setIsNavExpanded(false)}
                    >
                      Who We Serve
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSectorsOpen(!isSectorsOpen)}
                      aria-expanded={isSectorsOpen}
                      className="p-2 hover:text-[#c5d520] transition-colors"
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
                        <div className="pl-4 pb-2">
                          {sectorLinks.map((sector) => (
                            <a
                              key={sector.label}
                              href={sector.href}
                              className="block font-medium text-primary/80 py-3 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[52px] flex items-center"
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

                <a 
                  href="/our-process" 
                  className="font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center"
                  onClick={() => setIsNavExpanded(false)}
                >
                  Our Process
                </a>
                <a 
                  href="/about" 
                  className="font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center"
                  onClick={() => setIsNavExpanded(false)}
                >
                  About Us
                </a>

                <div className="pt-3 mt-2 border-t border-gray-100">
                  <Button variant="ghost" className="w-full justify-center font-extrabold text-primary uppercase tracking-wide min-h-[52px] mb-2">
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
