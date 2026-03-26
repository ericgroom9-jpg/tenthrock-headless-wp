import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Deploy short-term roll-off and open-top containers for commercial projects, cleanouts, and overflow needs. Specialized teams coordinate emergency and planned rentals to keep your site clear and operational."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      aboutBullets={[
        "Same-day dumpster rental with no long-term contracts",
        "Emergency dumpster rental and emergency roll-off service",
        "Same-day swaps when your container fills up",
        "Temporary dumpster deployment for short-term projects",
      ]}
      aboutDescription="You need a dumpster today, not next week. Tenth Rock provides same-day dumpster rental and emergency roll-off service for commercial projects, cleanouts, and overflow situations. When your container fills up, we arrange same-day swaps so your project keeps moving. No long-term commitments, no minimum terms. Just a temporary dumpster when and where you need it."
    />
  );
}

export const metadata = {
  title: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
  description: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
};
