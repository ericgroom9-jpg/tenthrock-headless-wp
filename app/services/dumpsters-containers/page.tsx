import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function DumpstersContainersPage() {
  return (
    <ServiceTemplate
      serviceName="Dumpsters & Temporary Containers"
      serviceDescription="Commercial-grade roll-off containers deployed quickly for projects, cleanouts, overflow, and recycling needs. Short-term and project-based rentals with fast delivery and pickup across 48 states."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      subServices={[
        {
          title: "On-Demand Service",
          description: "Short-term roll-off and open-top container rentals deployed quickly for commercial projects, cleanouts, and overflow. Supports both emergency and planned services with no long-term commitments.",
          href: "/services/on-demand-service",
        },
        {
          title: "Multiple Sizes",
          description: "Commercial-grade open-top roll-off containers in various sizes to support different project scopes. Clear differentiation from permanent front-load services.",
          href: "/services/multiple-sizes",
        },
        {
          title: "Recycling & Specialty Containers",
          description: "Specialized containers for cardboard, metals, and recyclable materials tied to projects or temporary capacity needs. Commercial only, not residential.",
          href: "/services/recycling-specialty-containers",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Dumpsters & Temporary Containers | Tenth Rock",
  description: "Commercial-grade roll-off containers for projects, cleanouts, overflow, and recycling. Fast deployment and pickup across 48 states.",
};
