import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteClosuresRemodelsPage() {
  return (
    <ServiceTemplate
      serviceName="Site Closures & Remodels"
      serviceDescription="Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. We handle portfolio-wide site turnover, commercial cleanout, commercial closeout, retail portfolio decommissioning, and D&D (Deactivation and Demolition) with vendor sourcing, scheduling, and close-out reporting."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Source specialized vendors and schedule logistics for complex asset recovery.",
        "Deploy high-capacity dumpsters and crews for fixtures and construction debris.",
        "Secure detailed documentation and compliance reporting for corporate audit requirements.",
        "Maintain aggressive timelines to minimize site downtime and lease-end penalties.",
      ]}
      aboutDescription="Streamline waste coordination for store decommissions, multi-site transitions, and large-scale remodel projects. Specialized teams manage the entire removal process to ensure on-time project completion and accurate close-out reporting."
    />
  );
}

export const metadata = {
  title: "Site Closures & Remodels | Site Decommissioning & Store Closings | Tenth Rock",
  description: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial closeout, and D&D across 48 states.",
};
