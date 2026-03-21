import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SpecializedProjectLogisticsPage() {
  return (
    <ServiceTemplate
      serviceName="Specialized Project Logistics"
      serviceDescription="End-to-end waste coordination for store closures, remodels, events, and disaster mobilization across multiple sites. Structured project work with vendor sourcing, scheduling logistics, documentation, and close-out reporting."
      heroImage="/images/stock/service-commercial.jpg"
      subServices={[
        {
          title: "Site Closures & Remodels",
          description: "Full-scope waste coordination for store closures, remodels, decommissions, and multi-site transitions. Vendor sourcing, scheduling, documentation, and close-out reporting included.",
          href: "/services/site-closures-remodels",
        },
        {
          title: "Events & Stadiums",
          description: "Waste planning and execution for stadiums, fairs, festivals, and temporary activations. Coordination, contingency planning, and rapid response during live events.",
          href: "/services/events-stadiums",
        },
        {
          title: "Natural Disaster Mobilization",
          description: "Rapid multi-site mobilization following hurricanes, floods, storms, and other disasters. Debris removal, damaged product disposal, temporary container deployment, and regional coordination.",
          href: "/services/natural-disaster-mobilization",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Specialized Project Logistics | Tenth Rock",
  description: "End-to-end waste coordination for site closures, remodels, events, and disaster mobilization. Structured project work across multiple sites nationwide.",
};
