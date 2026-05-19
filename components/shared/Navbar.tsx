"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

interface NavbarProps {
 variant?: "floating" | "sticky";
}

interface MenuNode {
 id: number;
 label: string;
 href: string;
 target?: string;
 children: MenuNode[];
}

const DEFAULT_SERVICE_CATEGORIES = [
 {
 label: "Emergency Waste Removal",
 href: "/emergency-waste-removal",
 subServices: [
 { label: "Emergency Product & Perishable Removal", href: "/emergency-product-removal" },
 { label: "Site Stabilization", href: "/site-stabilization" },
 { label: "Unplanned Cleanouts & Debris Removal", href: "/unplanned-cleanouts" },
 ],
 },
 {
 label: "Specialized Project Logistics",
 href: "/specialized-project-logistics",
 subServices: [
 { label: "Site Closures & Remodels", href: "/site-closures-remodels" },
 { label: "Events & Stadiums", href: "/events-stadiums" },
 { label: "Natural Disasters", href: "/natural-disaster-mobilization" },
 ],
 },
 {
 label: "Dumpster Rentals",
 href: "/dumpsters-containers",
 subServices: [
 { label: "On-Demand Service", href: "/on-demand-service" },
 { label: "Multiple Sizes", href: "/multiple-sizes" },
 { label: "Recycling Dumpsters", href: "/recycling-specialty-containers" },
 ],
 },
 {
 label: "Waste Advisory",
 href: "/waste-operations-advisory",
 subServices: [
 { label: "Waste Program Assessments & Roadmaps", href: "/waste-program-assessments" },
 { label: "Standards & Vendor Training", href: "/standards-sops-training" },
 { label: "Ongoing Advisory & Program Implementation", href: "/ongoing-advisory" },
 ],
 },
];

const DEFAULT_SECTOR_LINKS = [
 { label: "Retail", href: "/retail" },
 { label: "Stadiums & Events", href: "/stadiums-events" },
 { label: "Faith Based", href: "/faith-based" },
 { label: "Real Estate", href: "/real-estate" },
 { label: "Natural Disasters", href: "/natural-disasters" },
 { label: "Hospitality", href: "/hospitality" },
 { label: "Educational", href: "/educational" },
 { label: "Municipalities", href: "/municipalities" },
];

const DEFAULT_LOCATION_LINKS = [
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

const DEFAULT_ABOUT_LINKS = [
 { label: "About Us", href: "/about-us" },
 { label: "Join Our Network", href: "/join-our-network" },
 { label: "FAQ", href: "/faq" },
 { label: "Contact Us", href: "/contact-us" },
];

const DEFAULT_HEADER_CTAS = [
 { label: "Login", href: "#" },
 { label: "Request A Service", href: "/request-a-service" },
];

const DEFAULT_TOP_LABELS = {
 services: { label: "Waste Management Services", href: "/services" },
 sectors: { label: "Who We Serve", href: "/industries" },
 locations: { label: "Locations", href: "/locations" },
 about: { label: "About Us", href: "/about-us" },
};

export default function Navbar({ variant = "floating" }: NavbarProps) {
 const [isNavExpanded, setIsNavExpanded] = useState(false);
 const [isServicesOpen, setIsServicesOpen] = useState(false);
 const [isSectorsOpen, setIsSectorsOpen] = useState(false);
 const [isLocationsOpen, setIsLocationsOpen] = useState(false);
 const [isAboutOpen, setIsAboutOpen] = useState(false);

 // Menus from WordPress (with hardcoded fallbacks while loading or if WP unreachable)
 const [serviceCategories, setServiceCategories] = useState(DEFAULT_SERVICE_CATEGORIES);
 const [sectorLinks, setSectorLinks] = useState(DEFAULT_SECTOR_LINKS);
 const [locationLinks, setLocationLinks] = useState(DEFAULT_LOCATION_LINKS);
 const [aboutLinks, setAboutLinks] = useState(DEFAULT_ABOUT_LINKS);
 const [headerCtas, setHeaderCtas] = useState(DEFAULT_HEADER_CTAS);
 // Top-level dropdown trigger labels & hrefs (so editor renames flow through)
 const [topLabels, setTopLabels] = useState(DEFAULT_TOP_LABELS);
 // Any top-level WP menu items that don't map to one of the 4 known dropdowns
 // (Services / Who We Serve / Locations / About). Rendered as plain links
 // after About Us, in document order.
 const [extraTopLinks, setExtraTopLinks] = useState<{ label: string; href: string }[]>([]);

 useEffect(() => {
 let cancelled = false;
 const load = async () => {
 try {
 const [primaryRes, ctasRes, locsRes] = await Promise.all([
 fetch("/api/menus/primary").then(r => r.ok ? r.json() : null).catch(() => null),
 fetch("/api/menus/header-ctas").then(r => r.ok ? r.json() : null).catch(() => null),
 fetch("/api/menus/locations-dropdown").then(r => r.ok ? r.json() : null).catch(() => null),
 ]);
 if (cancelled) return;

 const primary: MenuNode[] | null = primaryRes?.tree ?? null;
 if (primary && primary.length) {
 // Match by label (case-insensitive contains) so editors can rename freely.
 const byLabel = (needle: string) => primary.find(n =>
 n.label.toLowerCase().includes(needle.toLowerCase())
 );
 const services = byLabel("service") || byLabel("waste management");
 const sectors = byLabel("who we serve") || byLabel("industries") || byLabel("sectors");
 const locations = byLabel("location");
 const about = byLabel("about");

 // Update trigger label + href for each top-level group present in WP
 setTopLabels({
 services: services ? { label: services.label, href: services.href || DEFAULT_TOP_LABELS.services.href } : DEFAULT_TOP_LABELS.services,
 sectors: sectors ? { label: sectors.label, href: sectors.href || DEFAULT_TOP_LABELS.sectors.href } : DEFAULT_TOP_LABELS.sectors,
 locations: locations ? { label: locations.label, href: locations.href || DEFAULT_TOP_LABELS.locations.href } : DEFAULT_TOP_LABELS.locations,
 about: about ? { label: about.label, href: about.href || DEFAULT_TOP_LABELS.about.href } : DEFAULT_TOP_LABELS.about,
 });

 if (services && services.children.length) {
 setServiceCategories(services.children.map(cat => ({
 label: cat.label,
 href: cat.href,
 subServices: cat.children.map(s => ({ label: s.label, href: s.href })),
 })));
 }
 if (sectors && sectors.children.length) {
 setSectorLinks(sectors.children.map(s => ({ label: s.label, href: s.href })));
 }
 if (about && about.children.length) {
 setAboutLinks(about.children.map(s => ({ label: s.label, href: s.href })));
 }

 // Anything not matched to one of the 4 known groups becomes an extra link.
 const matched = new Set([services?.id, sectors?.id, locations?.id, about?.id].filter(Boolean));
 setExtraTopLinks(
 primary
 .filter(n => !matched.has(n.id))
 .map(n => ({ label: n.label, href: n.href || "#" }))
 );
 }

 const ctas: MenuNode[] | null = ctasRes?.tree ?? null;
 if (ctas && ctas.length) {
 setHeaderCtas(ctas.map(c => ({ label: c.label, href: c.href })));
 }

 const locs: MenuNode[] | null = locsRes?.tree ?? null;
 if (locs && locs.length) {
 setLocationLinks(locs.map(l => ({ label: l.label, href: l.href })));
 }
 } catch {
 // keep defaults on error
 }
 };
 load();
 return () => { cancelled = true; };
 }, []);

 // If WP has only 1 header CTA, treat it as the primary action and keep
 // Login from the defaults so we never render two identical buttons.
 const loginCta = headerCtas.length >= 2 ? headerCtas[0] : DEFAULT_HEADER_CTAS[0];
 const primaryCta = headerCtas[headerCtas.length - 1] ?? DEFAULT_HEADER_CTAS[1];

 const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

 const clearCloseTimer = useCallback(() => {
 if (closeTimerRef.current) {
 clearTimeout(closeTimerRef.current);
 closeTimerRef.current = null;
 }
 }, []);

 const delayedClose = useCallback((setter: (v: boolean) => void) => {
 clearCloseTimer();
 closeTimerRef.current = setTimeout(() => setter(false), 150);
 }, [clearCloseTimer]);

 const openDropdown = useCallback((setter: (v: boolean) => void, closers: ((v: boolean) => void)[]) => {
 clearCloseTimer();
 setter(true);
 closers.forEach(c => c(false));
 }, [clearCloseTimer]);

 const isFloating = variant === "floating";

 return (
 <header className={isFloating 
 ? "fixed top-6 left-0 right-0 z-50 px-4 md:px-8" 
 : "sticky top-0 z-50 px-4 md:px-8 py-3 bg-white/95 backdrop-blur-sm"
 }>
 <div className={`container mx-auto ${isFloating ? "bg-white rounded-[5px] shadow-lg px-3 sm:px-6 py-3" : "px-0"}`}>
 <div className="flex items-center justify-between gap-1 sm:gap-4">
 <Link href="/" className="hover:opacity-90 transition-opacity inline-flex items-center min-h-[44px] min-w-0" data-testid="link-nav-home">
 <Logo variant="main" />
 </Link>

 {/* Mobile: Primary CTA + Hamburger visible in top bar */}
 <div className="flex items-center gap-1 sm:gap-2 xl:hidden shrink-0">
 <Button
 asChild
 size="sm"
 className="bg-[#c5d520] text-[#042940] font-bold rounded-full px-2.5 sm:px-4 min-h-[44px] whitespace-nowrap text-xs sm:text-sm shadow-md shadow-[#c5d520]/20"
 data-testid="button-mobile-cta"
 >
 <Link href={primaryCta.href}>
 <span className="sm:hidden" aria-hidden="true">{primaryCta.label.length > 11 ? "Get Service" : primaryCta.label}</span>
 <span className="hidden sm:inline">{primaryCta.label}</span>
 <span className="sr-only sm:hidden">{primaryCta.label}</span>
 </Link>
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
 <nav className="hidden xl:flex flex-nowrap items-center gap-4 2xl:gap-6 flex-1 justify-center">
 <div
 className="relative"
 onMouseEnter={() => openDropdown(setIsServicesOpen, [setIsSectorsOpen, setIsLocationsOpen, setIsAboutOpen])}
 onMouseLeave={() => delayedClose(setIsServicesOpen)}
 >
 <div
 className="inline-flex items-center gap-1 min-h-[44px]"
 data-testid="button-nav-services"
 >
 <Link
 href={topLabels.services.href}
 className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors whitespace-nowrap"
 data-testid="link-nav-services"
 >
 {topLabels.services.label}
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

 
 {isServicesOpen && (
 <div
 className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8" style={{animation:"fadeIn 0.18s ease-out"}}
 role="menu"
 data-testid="menu-nav-services"
 onMouseEnter={clearCloseTimer}
 onMouseLeave={() => delayedClose(setIsServicesOpen)}
 >
 <div className="container mx-auto bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
 <div className="grid grid-cols-4 gap-8">
 {serviceCategories.map((category) => (
 <div key={category.label} className="space-y-1">
 <div
 className="flex items-center gap-3 px-3 py-3 text-sm font-bold text-white min-h-[44px]"
 data-testid={`label-nav-services-${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
 >
 <ChevronRight className="w-3.5 h-3.5 text-[#c5d520] flex-shrink-0" />
 <span>{category.label}</span>
 </div>
 {category.subServices.map((sub) => (
 <Link
 key={sub.label}
 href={sub.href}
 data-testid={`link-nav-services-${sub.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
 className="group flex items-center gap-3 rounded-[5px] pl-7 pr-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[40px]"
 onClick={() => setIsServicesOpen(false)}
 >
 <span>{sub.label}</span>
 </Link>
 ))}
 </div>
 ))}
 </div>
 </div>
 </div>
 )}
 
 </div>

 {/* Who We Serve Dropdown */}
 <div
 className="relative"
 onMouseEnter={() => openDropdown(setIsSectorsOpen, [setIsServicesOpen, setIsLocationsOpen, setIsAboutOpen])}
 onMouseLeave={() => delayedClose(setIsSectorsOpen)}
 >
 <div
 className="inline-flex items-center gap-1 min-h-[44px]"
 data-testid="button-nav-sectors"
 >
 <a
 href={topLabels.sectors.href}
 className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors whitespace-nowrap"
 data-testid="link-nav-who-we-serve"
 >
 {topLabels.sectors.label}
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

 
 {isSectorsOpen && (
 <div
 className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8" style={{animation:"fadeIn 0.18s ease-out"}}
 role="menu"
 data-testid="menu-nav-sectors"
 onMouseEnter={clearCloseTimer}
 onMouseLeave={() => delayedClose(setIsSectorsOpen)}
 >
 <div className="container mx-auto bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
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
 </div>
 )}
 
 </div>

 {/* Locations Dropdown */}
 <div
 className="relative"
 onMouseEnter={() => openDropdown(setIsLocationsOpen, [setIsServicesOpen, setIsSectorsOpen, setIsAboutOpen])}
 onMouseLeave={() => delayedClose(setIsLocationsOpen)}
 >
 <div
 className="inline-flex items-center gap-1 min-h-[44px]"
 data-testid="button-nav-locations"
 >
 <Link
 href={topLabels.locations.href}
 className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors whitespace-nowrap"
 data-testid="link-nav-locations"
 >
 {topLabels.locations.label}
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

 
 {isLocationsOpen && (
 <div
 className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8" style={{animation:"fadeIn 0.18s ease-out"}}
 role="menu"
 data-testid="menu-nav-locations"
 onMouseEnter={clearCloseTimer}
 onMouseLeave={() => delayedClose(setIsLocationsOpen)}
 >
 <div className="container mx-auto bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
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
 </div>
 )}
 
 </div>

 {/* About Us Dropdown */}
 <div
 className="relative"
 onMouseEnter={() => openDropdown(setIsAboutOpen, [setIsServicesOpen, setIsSectorsOpen, setIsLocationsOpen])}
 onMouseLeave={() => delayedClose(setIsAboutOpen)}
 >
 <div
 className="inline-flex items-center gap-1 min-h-[44px]"
 data-testid="button-nav-about"
 >
 <a
 href={topLabels.about.href}
 className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors whitespace-nowrap"
 data-testid="link-nav-about"
 >
 {topLabels.about.label}
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

 
 {isAboutOpen && (
 <div
 className="fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8" style={{animation:"fadeIn 0.18s ease-out"}}
 role="menu"
 data-testid="menu-nav-about"
 onMouseEnter={clearCloseTimer}
 onMouseLeave={() => delayedClose(setIsAboutOpen)}
 >
 <div className="container mx-auto bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10">
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
 </div>
 )}
 
 </div>

 {/* Extra top-level menu items added in WP (no dropdown) */}
 {extraTopLinks.map((item) => (
 <Link
 key={`extra-${item.label}-${item.href}`}
 href={item.href}
 className="text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[44px] inline-flex items-center whitespace-nowrap"
 data-testid={`link-nav-extra-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "item"}`}
 >
 {item.label}
 </Link>
 ))}
 </nav>

 {/* Right Side Actions - desktop only */}
 <div className="hidden xl:flex items-center gap-3 shrink-0">
 <Button asChild size="lg" variant="ghost" className="text-primary font-extrabold transition-colors uppercase tracking-wide text-sm px-2 min-h-[52px] whitespace-nowrap" data-testid="button-desktop-login">
 <Link href={loginCta.href}>{loginCta.label}</Link>
 </Button>
 <Button asChild size="lg" className="bg-[#c5d520] text-[#042940] shadow-lg shadow-[#c5d520]/20 min-h-[52px] whitespace-nowrap" data-testid="button-desktop-cta">
 <Link href={primaryCta.href}>{primaryCta.label}</Link>
 </Button>
 </div>
 </div>

 {/* Mobile Accordion Menu */}
 
 {isNavExpanded && (
 <nav
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
 href={topLabels.services.href}
 className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
 onClick={() => setIsNavExpanded(false)}
 >
 {topLabels.services.label}
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
 
 {isServicesOpen && (
 <div
 className="overflow-hidden"
 >
 <div className="pl-4 pb-3 space-y-1">
 {serviceCategories.map((category) => (
 <div key={category.label}>
 <div
 className="font-bold text-primary text-[15px] py-3 px-4 min-h-[48px] flex items-center"
 data-testid={`label-mobile-services-${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
 >
 {category.label}
 </div>
 {category.subServices.map((sub) => (
 <Link
 key={sub.label}
 href={sub.href}
 className="font-medium text-primary/60 text-[14px] py-2.5 pl-8 pr-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[44px] flex items-center"
 onClick={() => { setIsNavExpanded(false); setIsServicesOpen(false); }}
 data-testid={`link-mobile-services-${sub.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
 >
 {sub.label}
 </Link>
 ))}
 </div>
 ))}
 </div>
 </div>
 )}
 
 </div>

 {/* Who We Serve Accordion */}
 <div className="border-b border-gray-100">
 <div
 className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
 data-testid="button-mobile-sectors"
 >
 <a
 href={topLabels.sectors.href}
 className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
 onClick={() => setIsNavExpanded(false)}
 >
 {topLabels.sectors.label}
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
 
 {isSectorsOpen && (
 <div
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
 </div>
 )}
 
 </div>

 {/* Locations Accordion */}
 <div className="border-b border-gray-100">
 <div
 className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
 data-testid="button-mobile-locations"
 >
 <Link
 href={topLabels.locations.href}
 className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
 onClick={() => setIsNavExpanded(false)}
 >
 {topLabels.locations.label}
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
 
 {isLocationsOpen && (
 <div
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
 </div>
 )}
 
 </div>

 {/* About Us Accordion */}
 <div className="border-b border-gray-100">
 <div
 className="flex items-center justify-between w-full py-3 px-4 min-h-[52px]"
 data-testid="button-mobile-about"
 >
 <a
 href={topLabels.about.href}
 className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1"
 onClick={() => setIsNavExpanded(false)}
 >
 {topLabels.about.label}
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
 
 {isAboutOpen && (
 <div
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
 </div>
 )}
 
 </div>

 {/* Extra top-level menu items added in WP (no submenu) */}
 {extraTopLinks.map((item) => (
 <div key={`m-extra-${item.label}-${item.href}`} className="border-b border-gray-100">
 <Link
 href={item.href}
 className="font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex items-center w-full py-3 px-4 min-h-[52px]"
 onClick={() => setIsNavExpanded(false)}
 data-testid={`link-mobile-extra-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "item"}`}
 >
 {item.label}
 </Link>
 </div>
 ))}

 <div className="pt-4 px-4 space-y-3">
 <Button asChild variant="ghost" className="w-full justify-center font-extrabold text-primary uppercase tracking-wide min-h-[52px] whitespace-nowrap" data-testid="button-mobile-login">
 <Link href={loginCta.href} onClick={() => setIsNavExpanded(false)}>{loginCta.label}</Link>
 </Button>
 <Button 
 asChild 
 size="lg" 
 className="w-full bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full"
 data-testid="button-mobile-menu-cta"
 >
 <Link href={primaryCta.href} onClick={() => setIsNavExpanded(false)}>{primaryCta.label}</Link>
 </Button>
 </div>
 </div>
 </nav>
 )}
 
 </div>
 </header>
 );
}
