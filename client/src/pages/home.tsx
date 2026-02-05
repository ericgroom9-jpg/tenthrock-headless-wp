import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  ChevronDown,
  Mail,
  GraduationCap,
  Trophy,
  Heart,
  Landmark,
  Utensils,
  Siren,
  Home as HomeIcon,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/seo/SeoHead";

import imgServiceEmergencyOverflow from "@/assets/stock_images/service-emergency-overflow.jpg";
import imgServiceStoreDecommissioning from "@/assets/stock_images/service-store-decommissioning.jpg";
import imgServiceEventStadium from "@/assets/stock_images/service-event-stadium.jpg";
import imgServiceDumpsterRental from "@/assets/stock_images/service-dumpster-rental.jpg";
import imgServiceCentralizedProgram from "@/assets/stock_images/service-centralized-program.jpg";
import imgServiceMaintenance from "@/assets/stock_images/service-maintenance.jpg";
import imgIndustryEducational from "@/assets/stock_images/industry-educational.jpg";
import imgIndustryStadiumsEvents from "@/assets/stock_images/industry-stadiums-events.jpg";
import imgIndustryFaithBased from "@/assets/stock_images/industry-faith-based.jpg";
import imgIndustryMunicipalities from "@/assets/stock_images/industry-municipalities.jpg";
import imgIndustryHospitality from "@/assets/stock_images/industry-hospitality.jpg";
import imgIndustryNaturalDisasters from "@/assets/stock_images/industry-natural-disasters.jpg";
import imgIndustryRealEstate from "@/assets/stock_images/industry-real-estate.jpg";
import imgIndustryRetail from "@/assets/stock_images/industry-retail.jpg";

const Logo = ({ className = "", variant = "main" }: { className?: string, variant?: "main" | "white" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`text-xl md:text-2xl font-bold tracking-tight ${variant === "white" ? "text-white" : "text-primary"}`}>
        Tenth Rock
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="container mx-auto max-w-[92rem] bg-white rounded-[5px] shadow-lg px-6 py-3 flex items-center justify-between relative">
        <Link href="/" data-testid="link-logo-home" className="hover:opacity-90 transition-opacity">
          <Logo variant="main" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              data-testid="button-nav-services"
              className="inline-flex items-center gap-2 text-[13px] xl:text-sm font-bold text-primary hover:text-secondary transition-colors tracking-normal"
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((v) => !v)}
            >
              <span>Commercial Waste Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-[420px] rounded-[5px] bg-white shadow-2xl border border-primary/10 overflow-hidden"
                  role="menu"
                  data-testid="menu-nav-services"
                >
                  <div className="p-3">
                    <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/50 px-3 py-2">
                      Services
                    </div>
                    <div className="grid gap-1">
                      {[ 
                        "Emergency & Overflow Waste Response",
                        "Store Decommissioning & Remodel Support",
                        "Event & Stadium Waste Logistics",
                        "Dumpster Rental & Temporary Containers",
                        "Centralized Waste Program Management",
                        "Environmental & Compactor Maintenance Services",
                      ].map((label) => (
                        <a
                          key={label}
                          href="#services"
                          data-testid={`link-nav-services-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="flex items-center justify-between rounded-[5px] px-3 py-2 text-sm font-bold text-primary hover:bg-muted hover:text-primary transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="pr-3">{label}</span>
                          <ChevronRight className="w-4 h-4 text-primary/40" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#emergency" data-testid="link-nav-emergency" className="text-[13px] xl:text-sm font-bold text-primary hover:text-secondary transition-colors tracking-normal">Emergency Waste Removal</a>
          <a href="#sectors" data-testid="link-nav-sectors" className="text-[13px] xl:text-sm font-bold text-primary hover:text-secondary transition-colors tracking-normal">Who We Serve</a>
          <a href="#process" data-testid="link-nav-process" className="text-[13px] xl:text-sm font-bold text-primary hover:text-secondary transition-colors tracking-normal">Our Process</a>
          <a href="#about" data-testid="link-nav-about" className="text-[13px] xl:text-sm font-bold text-primary hover:text-secondary transition-colors tracking-normal">About Us</a>
        </nav>

        <div className="flex items-center gap-0">
          <Button size="lg" variant="ghost" data-testid="button-nav-login" className="hidden lg:flex text-primary font-extrabold uppercase tracking-wide text-sm px-2">
            Login
          </Button>
          <Button size="lg" data-testid="button-nav-quote" className="hidden lg:flex bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20">
            Request a Quote
          </Button>
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-white rounded-[5px] shadow-xl p-6 border border-gray-100"
          >
            <div className="flex flex-col space-y-4 text-center">
              <a href="#services" data-testid="link-mobile-services" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#sectors" data-testid="link-mobile-sectors" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Industries</a>
              <a href="#about" data-testid="link-mobile-about" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</a>
              <a href="#contact" data-testid="link-mobile-contact" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <Button size="lg" variant="ghost" data-testid="button-mobile-login" className="w-full text-primary font-bold uppercase tracking-wide text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Button>
              <Button size="lg" data-testid="button-mobile-quote" className="w-full bg-secondary text-secondary-foreground mt-2">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary font-bold text-sm backdrop-blur-md shadow-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Nationwide Commercial Waste Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white leading-[1.05] tracking-tighter mb-5 drop-shadow-lg" style={{ textWrap: "balance" } as React.CSSProperties}>
            Fast, Reliable Waste Solutions—Anywhere You Need Them
          </h1>
          
          <p className="text-[18px] text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-normal tracking-tight drop-shadow-md" style={{ textWrap: "balance" } as React.CSSProperties}>
            Emergency pickups, dumpster rentals, and site cleanouts. We respond in hours — not days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" data-testid="button-hero-service" className="bg-secondary text-secondary-foreground shadow-[0_0_40px_rgba(197,213,32,0.3)] border-2 border-secondary">
              Request A Service
            </Button>
            <Button size="lg" variant="outline" data-testid="button-hero-how-it-works" className="backdrop-blur-md bg-white/5 border-white/20 text-white shadow-lg" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
              How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-20%" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={nodeRef} className="flex items-center justify-center">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const SimpleNumbers = () => {
  return (
    <section className="py-20 bg-white border-b border-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary/10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-8 pt-8 md:pt-0">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
              <Counter to={48} duration={2.5} />
            </div>
            <div className="text-lg text-primary/60">States Serviced</div>
          </div>
          <div className="flex flex-col items-center text-center px-8 pt-8 md:pt-0">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
              <Counter to={5} suffix="K+" duration={2.5} />
            </div>
            <div className="text-lg text-primary/60">Jobs Completed</div>
          </div>
          <div className="flex flex-col items-center text-center px-8 pt-8 md:pt-0">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center">
              <Counter to={24} suffix="/7" duration={2.5} />
            </div>
            <div className="text-lg text-primary/60">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoReel = () => {
  const logos = [
    "McDonald's", "Best Buy", "Chipotle", "Dollar General", "KFC",
    "Kroger", "7-Eleven", "Circle K", "Dunkin'", "Five Below",
    "H-E-B", "Arby's", "GNC", "Goodyear", "Red Lobster",
    "BP", "DoorDash", "Food Lion", "Bonefish Grill", "Maggiano's"
  ];

  return (
    <section className="py-12 bg-white border-b border-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div data-testid="text-logo-reel-headline" className="text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-primary/70">
            Supporting these leading national brands
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex overflow-hidden group"
      >
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8">
          {logos.map((logo, i) => (
            <div key={`logo-1-${i}`} className="h-12 px-6 flex items-center justify-center bg-muted rounded-lg text-primary/50 font-bold text-sm">
              {logo}
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8">
          {logos.map((logo, i) => (
            <div key={`logo-2-${i}`} className="h-12 px-6 flex items-center justify-center bg-muted rounded-lg text-primary/50 font-bold text-sm">
              {logo}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    {
      title: "Emergency & Overflow Waste Response",
      desc: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can't wait. Built for retail, industrial, and multi-site emergencies.",
      img: imgServiceEmergencyOverflow,
      features: ["24/7 Dispatch", "Overflow & Surge Capacity", "Nationwide Network"]
    },
    {
      title: "Store Decommissioning & Remodel Support",
      desc: "Cleanouts, roll-offs, and coordinated haul schedules for remodels, closures, and fixture swaps—without disrupting day-to-day operations.",
      img: imgServiceStoreDecommissioning,
      features: ["Project Scheduling", "Site Cleanouts", "Multi-location Coordination"]
    },
    {
      title: "Event & Stadium Waste Logistics",
      desc: "End-to-end waste plans for venues and large events—placement, swaps, post-event sweeps, and recycling streams managed on tight timelines.",
      img: imgServiceEventStadium,
      features: ["Venue Routing", "High-volume Support", "Diversion Planning"]
    },
    {
      title: "Dumpster Rental & Temporary Containers",
      desc: "Temporary containers and compactor solutions for projects and peaks. Transparent sizing, delivery windows, and swap schedules.",
      img: imgServiceDumpsterRental,
      features: ["Roll-offs & Front-load", "Fast Delivery", "Flexible Terms"]
    },
    {
      title: "Centralized Waste Program Management",
      desc: "One partner to standardize vendors, pricing, reporting, and service levels across all your locations—improving control and visibility.",
      img: imgServiceCentralizedProgram,
      features: ["Standardized SLAs", "Spend Visibility", "Single Point of Contact"]
    },
    {
      title: "Environmental & Compactor Maintenance Services",
      desc: "Preventative maintenance and service for compactors and waste equipment, plus environmental support to keep sites compliant and running.",
      img: imgServiceMaintenance,
      features: ["PM Schedules", "On-site Repairs", "Compliance Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-primary leading-tight mb-4 tracking-tighter">
            Commercial Waste Services
          </h2>
          <p className="text-lg text-primary/60">
            Comprehensive solutions for businesses of all sizes, available nationwide.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 flex flex-col space-y-[6px]">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                data-testid={`button-service-${i}`}
                className={`text-left px-8 py-6 rounded-[5px] transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                  activeService === i 
                    ? "bg-white shadow-lg text-primary border border-primary/5" 
                    : "text-primary/40 hover:text-primary hover:bg-white/50"
                }`}
              >
                <span className="relative z-10 flex items-center justify-between font-bold">
                  {service.title}
                  {activeService === i && (
                    <motion.span layoutId="active-indicator" className="w-2 h-2 rounded-full bg-secondary ml-2" />
                  )}
                </span>
                {activeService === i && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 h-full" data-testid="panel-service-display">
            <div className="relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={services[activeService].img} 
                    alt={services[activeService].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90"></div>
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {services[activeService].title}
                      </h3>
                      <p className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8">
                        {services[activeService].desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-8">
                        {services[activeService].features.map((feature, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                        Learn More <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeHelp = () => {
  const sectors = [
    { title: "Educational", img: imgIndustryEducational, icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Stadiums & Events", img: imgIndustryStadiumsEvents, icon: <Trophy className="w-6 h-6" /> },
    { title: "Faith Based", img: imgIndustryFaithBased, icon: <Heart className="w-6 h-6" /> },
    { title: "Municipalities", img: imgIndustryMunicipalities, icon: <Landmark className="w-6 h-6" /> },
    { title: "Hospitality", img: imgIndustryHospitality, icon: <Utensils className="w-6 h-6" /> },
    { title: "Natural Disasters", img: imgIndustryNaturalDisasters, icon: <Siren className="w-6 h-6" /> },
    { title: "Real Estate", img: imgIndustryRealEstate, icon: <HomeIcon className="w-6 h-6" /> },
    { title: "Retail", img: imgIndustryRetail, icon: <Store className="w-6 h-6" /> }
  ];

  return (
    <section id="sectors" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Industries
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter">Who We Help</h2>
          <p className="text-lg text-primary/60">
            From local businesses to enterprise operations, we serve industries that demand reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <motion.div 
              key={i} 
              className="group relative h-[320px] rounded-[5px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              data-testid={`card-industry-${i}`}
            >
              <img 
                src={sector.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={sector.title} 
              />
              <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight mb-2">{sector.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/80 text-sm mt-2">
                      Tailored solutions for {sector.title.toLowerCase()}.
                    </p>
                    <div className="flex items-center gap-2 text-secondary text-sm font-bold mt-4">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach out via phone, email, or our online form. We're available 24/7 for emergencies."
    },
    {
      number: "02", 
      title: "Get a Custom Quote",
      description: "We assess your needs and provide transparent pricing within hours."
    },
    {
      number: "03",
      title: "Schedule Service",
      description: "Choose your preferred time. We work around your schedule, not the other way around."
    },
    {
      number: "04",
      title: "We Handle the Rest",
      description: "Our certified team arrives on time, completes the job, and leaves your site clean."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter">Simple, Fast, Reliable</h2>
          <p className="text-lg text-primary/60">
            Getting started is easy. Here's how we work with you.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              data-testid={`process-step-${i}`}
            >
              <div className="text-6xl font-extrabold text-secondary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-primary/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Request a quote today and see why leading brands trust Tenth Rock for their waste management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-cta-quote" className="bg-secondary text-secondary-foreground shadow-lg">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" data-testid="button-cta-call" className="border-white/20 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo variant="white" className="mb-4" />
            <p className="text-white/60 text-sm">
              Nationwide commercial waste solutions for businesses that demand reliability.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#services" data-testid="link-footer-emergency" className="hover:text-secondary transition-colors">Emergency Response</a></li>
              <li><a href="#services" data-testid="link-footer-dumpster" className="hover:text-secondary transition-colors">Dumpster Rental</a></li>
              <li><a href="#services" data-testid="link-footer-events" className="hover:text-secondary transition-colors">Event Logistics</a></li>
              <li><a href="#services" data-testid="link-footer-program" className="hover:text-secondary transition-colors">Program Management</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#about" data-testid="link-footer-about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#sectors" data-testid="link-footer-industries" className="hover:text-secondary transition-colors">Industries</a></li>
              <li><a href="#process" data-testid="link-footer-process" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#contact" data-testid="link-footer-contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1-800-WASTE-GO
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@tenthrock.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Serving 48 States
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Tenth Rock Waste Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" data-testid="link-footer-privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" data-testid="link-footer-terms" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <SeoHead 
        title="Tenth Rock Waste Solutions | Nationwide Commercial Waste Services"
        description="Fast, reliable commercial waste solutions anywhere you need them. Emergency pickups, dumpster rentals, and site cleanouts. We respond in hours — not days. Serving 48 states."
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <SimpleNumbers />
        <LogoReel />
        <ServicesSection />
        <WhoWeHelp />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
