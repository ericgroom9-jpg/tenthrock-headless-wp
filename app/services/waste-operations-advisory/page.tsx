import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteOperationsAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Operations Advisory"
      serviceDescription="Operational audits, standardized processes, and retained advisory support for portfolio-wide waste programs. We position as a strategic partner, not just a service provider."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      subServices={[
        {
          title: "Waste Program Assessments & Roadmaps",
          description: "Operational audits of existing waste programs, vendor structures, workflows, and cost drivers. Deliverables include optimization plans, risk mitigation strategies, and portfolio-wide recommendations.",
          href: "/services/waste-program-assessments",
        },
        {
          title: "Standards, SOPs & Vendor Training",
          description: "Development of standardized processes, escalation protocols, documentation systems, and vendor performance guidelines designed to prevent costly execution errors and inconsistencies.",
          href: "/services/standards-sops-training",
        },
        {
          title: "Ongoing Advisory & Program Implementation",
          description: "Retained advisory support for program rollout, vendor oversight, performance optimization, and portfolio-wide execution strategy.",
          href: "/services/ongoing-advisory",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Waste Operations Advisory & Enablement | Tenth Rock",
  description: "Operational audits, standardized processes, and retained advisory for portfolio-wide waste programs. Strategic waste management consulting across 48 states.",
};
