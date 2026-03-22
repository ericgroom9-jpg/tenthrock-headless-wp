import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function DumpstersContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpsters & Temporary Containers"
      serviceDescription="Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow. We offer 20 yard, 30 yard, and 40 yard roll-off containers with same-day swaps and emergency roll-off service across 48 states."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      subServices={[
        {
          title: "On-Demand Service",
          description: "Same-day dumpster rental and emergency roll-off service for commercial projects, cleanouts, and overflow. Temporary dumpster deployment with same-day swaps, no long-term commitments, and emergency dumpster rental available around the clock.",
          href: "/services/on-demand-service",
        },
        {
          title: "Multiple Sizes",
          description: "20 yard dumpster rental, 30 yard roll-off, 30 yard open-top, and 40 yard roll-off containers matched to your project scope. Commercial-grade 20 yard rolloff and 30 yard dumpster rental for every size job.",
          href: "/services/multiple-sizes",
        },
        {
          title: "Recycling & Specialty Containers",
          description: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support, specialty waste containers, temporary recycling capacity, and C&D (Construction Debris) solutions.",
          href: "/services/recycling-specialty-containers",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Dumpsters & Temporary Containers | Same-Day Roll-Off Dumpster Rental | Tenth Rock",
  description: "Same-day dumpster rental with roll-off dumpsters and open-top dumpsters in 20, 30, and 40 yard sizes. Emergency roll-off service and commercial recycling containers across 48 states.",
};
