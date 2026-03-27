import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyProductRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Product & Perishable Removal"
      serviceDescription="Rapidly mobilize for a refrigeration failure event or cold storage failure. Specialized teams coordinate perishable bulk pickup and damaged inventory disposal to restore site safety."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Rapid removal of temperature-compromised and spoiled product",
        "Cold storage failure and refrigeration failure event response",
        "Damaged and unsellable inventory disposed with compliance documentation",
        "After-hours and weekend perishable bulk pickup available",
      ]}
      aboutDescription="Refrigeration failure creates immediate health and pest risks that require documented, compliant disposal. Tenth Rock provides specialized logistics to stabilize your site and secure insurance-ready reporting for the entire loss."
    />
  );
}

export const metadata = {
  title: "Emergency Product & Perishable Removal | Spoiled Product Disposal | Tenth Rock",
  description: "Perishable bulk pickup and spoiled product disposal for cold storage failure and refrigeration failure events. Damaged inventory disposal and after-hours waste removal at commercial locations across 48 states.",
};
