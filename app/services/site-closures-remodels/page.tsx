import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteClosuresRemodelsPage() {
  return (
    <ServiceTemplate
      serviceName="Site Closures & Remodels"
      serviceDescription="Implement a retail portfolio decommissioning strategy for store decommissions and renovations. Specialized teams provide retail remodel waste management and commercial cleanout for complex project work."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Execute store decommissioning for fixtures, flooring, and displays.",
        "Secure post-construction cleanout to ensure a broom-clean finish.",
        "Access same-day junk removal for store closings and rapid clearing.",
        "Receive detailed reporting for retail portfolio decommissioning.",
      ]}
      aboutDescription="Tenth Rock delivers site decommissioning and D&D (Deactivation and Demolition) support. We manage the commercial closeout lifecycle, providing portfolio-wide site turnover to keep projects on track."
    />
  );
}

export const metadata = {
  title: "Site Closures & Remodels | Site Decommissioning & Store Closings | Tenth Rock",
  description: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial closeout, and D&D across 48 states.",
};
