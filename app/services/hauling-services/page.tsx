import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgHeroSkyscrapers = "/images/stock/hero-skyscrapers.jpg";
const imgCityNature = "/images/stock/city-nature.jpg";
const imgServiceCommercial = "/images/stock/service-commercial.jpg";

const subServices = [
  {
    title: "Compactor Transport",
    description: "Safe, compliant transport of compactors and heavy waste equipment to any location. Licensed carriers, proper permitting, and real-time tracking for every shipment.",
    image: imgHeroSkyscrapers,
    link: "/services/hauling-services",
    features: ["Licensed & Insured Carriers", "Proper Permitting", "Real-Time Tracking"],
  },
  {
    title: "Bulk Hauling",
    description: "High-volume hauling for large-scale commercial projects and multi-site operations. Coordinated logistics to keep your project on schedule and under budget.",
    image: imgCityNature,
    link: "/services/hauling-services",
    features: ["High-Volume Capacity", "Multi-Site Coordination", "Project Scheduling"],
  },
  {
    title: "Specialty Waste Logistics",
    description: "Scalable hauling solutions coordinated across 48 states through our vetted vendor network. From one-time projects to ongoing logistics programs.",
    image: imgServiceCommercial,
    link: "/services/hauling-services",
    features: ["48-State Coverage", "Vetted Vendor Network", "Scalable Programs"],
  },
];

export default function HaulingServicesPage() {
  return (
    <ServiceTemplate
      serviceName="Hauling Services"
      serviceDescription="Compactor transport, bulk hauling, and specialty waste logistics with nationwide reach. Licensed carriers, real-time tracking, and coordinated multi-site operations."
      heroImage={imgHeroSkyscrapers}
      subServices={subServices}
    />
  );
}

export const metadata = {
  title: "Hauling Services | Tenth Rock",
  description: "Commercial hauling services including compactor transport, bulk hauling, and specialty waste logistics. Nationwide coverage across 48 states. Call 727.510.5454.",
};
