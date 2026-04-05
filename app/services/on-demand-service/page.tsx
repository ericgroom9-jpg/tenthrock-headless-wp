import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Deploy emergency dumpster rental and same day dumpster rental for commercial projects. Specialized teams coordinate emergency roll-off service to resolve waste overflow and support site transitions."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      aboutBullets={[
        "Access roll-off and open top dumpsters for remodels, cleanouts, and ongoing operations.",
        "Coordinate same-day delivery and on-demand swaps to keep sites moving without delays.",
        "Scale container capacity up or down based on real-time site needs.",
        "Support multi-location portfolios with responsive, flexible dumpster logistics.",
      ]}
      aboutDescription="Tenth Rock delivers on-demand dumpster rental and container management. We handle rapid dispatch, same-day swaps, and ongoing service coordination, keeping projects on schedule and sites running efficiently."
    />
  );
}

export const metadata = {
  title: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
  description: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
};
