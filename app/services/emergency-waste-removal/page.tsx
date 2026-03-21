import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyWasteRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Waste Removal"
      serviceDescription="24/7 rapid response for product spoilage, overflow crises, and unplanned cleanouts at commercial locations. We deploy crews within hours, not days."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      subServices={[
        {
          title: "Emergency Product & Perishable Removal",
          description: "Rapid removal of expired, unsellable, recalled, or temperature-compromised product. Covers food spoilage, refrigerated failure events, health-code risks, and urgent bulk disposal.",
          href: "/services/emergency-product-removal",
        },
        {
          title: "Temporary Capacity & Site Stabilization",
          description: "Deployment of temporary dumpsters, hauling crews, or surge capacity when sites exceed normal waste limits. Compactor failures, overflow situations, peak seasons, and vendor service gaps.",
          href: "/services/site-stabilization",
        },
        {
          title: "Unplanned Cleanouts & Debris Removal",
          description: "Unexpected cleanouts caused by tenant abandonment, sudden closures, illegal dumping, or operational transitions. Bulk debris, fixtures, shelving, and mixed commercial waste cleared fast.",
          href: "/services/unplanned-cleanouts",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Emergency Waste Removal | 24/7 Rapid Response | Tenth Rock",
  description: "24/7 emergency waste removal for product spoilage, overflow crises, and unplanned cleanouts at commercial locations. Crews deployed within hours across 48 states.",
};
