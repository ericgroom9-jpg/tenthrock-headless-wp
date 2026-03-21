import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyProductRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Product & Perishable Removal"
      serviceDescription="Rapid removal of expired, unsellable, recalled, or temperature-compromised product. We handle food spoilage, refrigerated failure events, health-code risks, and urgent bulk disposal with speed, compliance, and full documentation."
      heroImage="/images/stock/service-emergency-overflow.jpg"
    />
  );
}

export const metadata = {
  title: "Emergency Product & Perishable Removal | Tenth Rock",
  description: "Rapid removal of expired, recalled, or temperature-compromised product at commercial locations. 24/7 response with compliance documentation across 48 states.",
};
