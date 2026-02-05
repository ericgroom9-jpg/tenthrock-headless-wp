import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgCentralized = "/images/stock/service-dumpster-rental.jpg";

const subServices = [
  {
    title: "Multi-Location Management",
    description: "Unified waste management across all your locations with centralized reporting and billing.",
    image: "/images/stock/service-dumpster-rental.jpg",
    link: "/services/centralized-programs",
  },
  {
    title: "Vendor Consolidation",
    description: "Reduce complexity by consolidating multiple waste vendors into one managed program.",
    image: "/images/stock/service-event-stadium.jpg",
    link: "/services/centralized-programs",
  },
  {
    title: "Compliance & Reporting",
    description: "Automated compliance tracking and sustainability reporting across your portfolio.",
    image: "/images/stock/service-emergency-overflow.jpg",
    link: "/services/centralized-programs",
  },
];

export default function CentralizedProgramsPage() {
  return (
    <ServiceTemplate
      serviceName="Centralized Waste Program Management"
      serviceDescription="Streamline waste operations across your entire organization with our centralized management platform. One partner, one invoice, complete visibility."
      heroImage={imgCentralized}
      subServices={subServices}
    />
  );
}
