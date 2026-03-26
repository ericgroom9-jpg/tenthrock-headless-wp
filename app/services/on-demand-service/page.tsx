import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Deploy short-term roll-off and open-top containers for commercial projects, cleanouts, and overflow needs. Specialized teams coordinate emergency and planned rentals to keep your site clear and operational."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      aboutBullets={[
        "Access high-capacity containers for roofing, remodeling, and construction debris.",
        "Secure emergency roll-off deployment for unexpected waste overflows and cleanouts.",
        "Utilize a single point of contact for nationwide temporary waste logistics.",
        "Receive consolidated invoicing and service documentation for all project sites.",
      ]}
      aboutDescription="Tenth Rock provides rapid container mobilization for general contractors and facilities managers. We manage the entire rental lifecycle from sourcing and scheduling to final haul-off to eliminate project delays."
    />
  );
}

export const metadata = {
  title: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
  description: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
};
