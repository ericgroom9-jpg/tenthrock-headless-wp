import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function DumpstersContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpster Rentals"
      serviceDescription="Deploy short-term roll-off and open-top containers for commercial projects, cleanouts, and overflow needs. Specialized teams coordinate emergency and planned rentals to keep your site clear and operational."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      aboutBullets={[
        "Same-day dumpster rental with same-day swaps available",
        "Roll-off dumpsters and open-top dumpsters in 20, 30, and 40 yard sizes",
        "Emergency dumpster rental and emergency roll-off service",
        "Commercial recycling dumpsters and specialty containers",
      ]}
      aboutDescription="Whether you need a temporary dumpster for a weekend cleanout or a fleet of roll-off containers for a multi-site project, Tenth Rock delivers same-day dumpster rental across 48 states. We source containers through our nationwide vendor network, so when local providers are out of inventory, we pull from neighboring markets. No long-term commitments, no surge pricing, and same-day swaps when your container fills up."
      subServices={[
        {
          title: "On-Demand Service",
          description: "Same-day dumpster rental and emergency roll-off service for commercial projects, cleanouts, and overflow. Temporary dumpster deployment with same-day swaps, no long-term commitments, and emergency dumpster rental available around the clock.",
          image: "/images/stock/service-dumpster-rental.jpg",
          link: "/on-demand-service",
        },
        {
          title: "Multiple Sizes",
          description: "20 yard dumpster rental, 30 yard roll-off, 30 yard open-top, and 40 yard roll-off containers matched to your project scope. Commercial-grade 20 yard rolloff and 30 yard dumpster rental for every size job.",
          image: "/images/stock/service-dumpster.jpg",
          link: "/multiple-sizes",
        },
        {
          title: "Recycling Dumpsters",
          description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, temporary recycling capacity, and C&D (Construction Debris) solutions.",
          image: "/images/stock/service-centralized-program.jpg",
          link: "/recycling-specialty-containers",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Dumpster Rentals | Same-Day Roll-Off Dumpster Rental | Tenth Rock",
  description: "Same-day dumpster rental with roll-off dumpsters and open-top dumpsters in 20, 30, and 40 yard sizes. Emergency roll-off service and commercial recycling containers across 48 states.",
};
