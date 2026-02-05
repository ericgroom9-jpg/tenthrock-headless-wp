import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgEnvironmental = "/images/stock/service-emergency-overflow.jpg";

const subServices = [
  {
    title: "Compactor Maintenance",
    description: "Regular maintenance and repair services for commercial compactors and balers.",
    image: "/images/stock/service-emergency-overflow.jpg",
    link: "/services/environmental-maintenance",
  },
  {
    title: "Equipment Installation",
    description: "Professional installation of waste handling equipment and compaction systems.",
    image: "/images/stock/service-dumpster-rental.jpg",
    link: "/services/environmental-maintenance",
  },
  {
    title: "Environmental Consulting",
    description: "Expert guidance on waste reduction, recycling optimization, and sustainability goals.",
    image: "/images/stock/service-event-stadium.jpg",
    link: "/services/environmental-maintenance",
  },
];

export default function EnvironmentalMaintenancePage() {
  return (
    <ServiceTemplate
      serviceName="Environmental & Compactor Maintenance Services"
      serviceDescription="Keep your waste handling equipment running efficiently with our maintenance and environmental consulting services."
      heroImage={imgEnvironmental}
      subServices={subServices}
    />
  );
}
