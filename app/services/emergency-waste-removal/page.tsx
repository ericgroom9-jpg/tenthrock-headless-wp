import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function EmergencyWasteRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency Waste Removal"
      serviceDescription="Same-day junk removal and emergency waste management for commercial locations. We handle spoiled product disposal, overflowing dumpsters, damaged inventory disposal, and urgent bulk waste removal with after-hours waste removal available 24/7 across 48 states."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Same-day and after-hours waste removal for urgent situations",
        "Spoiled product disposal, compactor failures, and overflow crises",
        "Crews dispatched within hours, not days",
        "Full documentation included with every job",
      ]}
      aboutDescription="When waste becomes an emergency, you need a partner who picks up the phone and deploys crews fast. Tenth Rock provides 24/7 emergency waste management for commercial locations dealing with spoiled product, refrigeration failures, overflowing dumpsters, broken compactors, and unplanned cleanouts. One call gets your dedicated project manager on the line, a crew dispatched to your site, and the problem resolved with full photo documentation and a single invoice."
      subServices={[
        {
          title: "Emergency Product & Perishable Removal",
          description: "Perishable bulk pickup and spoiled product disposal for cold storage failure, refrigeration failure events, and perishable inventory loss. Unsellable product disposal and damaged inventory disposal handled with speed and full documentation.",
          image: "/images/stock/service-emergency.jpg",
          link: "/services/emergency-product-removal",
        },
        {
          title: "Temporary Capacity & Site Stabilization",
          description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal. We deploy temporary capacity for missed pickups, waste overflow situations, and broken compactor emergencies to stabilize your site fast.",
          image: "/images/stock/service-dumpster.jpg",
          link: "/services/site-stabilization",
        },
        {
          title: "Unplanned Cleanouts & Debris Removal",
          description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, emergency site cleanout situations, and code violation cleanup support. Large-scale waste clearing with fast mobilization and minimal disruption.",
          image: "/images/stock/service-commercial.jpg",
          link: "/services/unplanned-cleanouts",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Emergency Waste Removal | Same-Day Junk Removal | Tenth Rock",
  description: "Same-day emergency waste management for spoiled product disposal, overflowing dumpsters, and commercial site cleanouts. After-hours waste removal, damaged inventory disposal, and urgent bulk pickup across 48 states.",
};
