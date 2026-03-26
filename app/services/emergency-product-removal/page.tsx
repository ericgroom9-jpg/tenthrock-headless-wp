import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyProductRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Product & Perishable Removal"
      serviceDescription="Rapid removal of spoiled or damaged inventory from cold storage or refrigeration failures. We ensure compliant, documented disposal with 24/7 speed."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Rapid removal of temperature-compromised and spoiled product",
        "Cold storage failure and refrigeration failure event response",
        "Damaged and unsellable inventory disposed with compliance documentation",
        "After-hours and weekend perishable bulk pickup available",
      ]}
      aboutDescription="When refrigeration fails or product is compromised, every hour increases health code risk, odor issues, and pest exposure. Tenth Rock mobilizes perishable bulk pickup crews to remove spoiled product, damaged inventory, and unsellable goods fast. We coordinate disposal logistics, provide full documentation for insurance and compliance, and deliver a single invoice for the entire job."
    />
  );
}

export const metadata = {
  title: "Emergency Product & Perishable Removal | Spoiled Product Disposal | Tenth Rock",
  description: "Perishable bulk pickup and spoiled product disposal for cold storage failure and refrigeration failure events. Damaged inventory disposal and after-hours waste removal at commercial locations across 48 states.",
};
