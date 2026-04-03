import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyProductRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Product & Perishable Removal"
      serviceDescription="Rapidly mobilize for a refrigeration failure event or cold storage failure. Specialized teams coordinate perishable bulk pickup and damaged inventory disposal to restore site safety."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Deploy immediate hauling for unsellable product disposal and spoilage.",
        "Secure emergency waste management for bulk recalls across multiple sites.",
        "Maintain rigorous documentation for loss prevention.",
        "Access 24/7 rapid response to mitigate odors and site-level risks.",
      ]}
      aboutDescription="Tenth Rock provides spoiled product disposal and after-hours waste removal for urgent needs. We deliver the documentation required for perishable inventory loss disposal and insurance claims."
    />
  );
}

export const metadata = {
  title: "Emergency Product & Perishable Removal | Spoiled Product Disposal | Tenth Rock",
  description: "Perishable bulk pickup and spoiled product disposal for cold storage failure and refrigeration failure events. Damaged inventory disposal and after-hours waste removal at commercial locations across 48 states.",
};
