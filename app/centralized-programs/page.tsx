import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgCentralized = "/images/stock/service-centralized-program.jpg";

export default function CentralizedProgramsPage() {
  return (
    <ServiceTemplate
      serviceName="Centralized Waste Programs"
      serviceDescription="Streamline waste operations across your entire organization with our centralized management platform. One partner, one invoice, complete visibility."
      heroImage={imgCentralized}
    />
  );
}
