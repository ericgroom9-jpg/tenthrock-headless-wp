import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgEnvironmental = "/images/stock/service-maintenance.jpg";

export default function EnvironmentalMaintenancePage() {
  return (
    <ServiceTemplate
      serviceName="Environmental & Compactor Maintenance Services"
      serviceDescription="Keep your waste handling equipment running efficiently with our maintenance and environmental consulting services."
      heroImage={imgEnvironmental}
    />
  );
}
