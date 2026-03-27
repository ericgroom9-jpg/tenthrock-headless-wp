import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteOperationsAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Operations Advisory & Enablement"
      serviceDescription="Retained waste management advisory providing hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management. Designed to give multi-site operators structured control, accountability, and long-term waste management consistency."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Hands-on program rollout and portfolio-wide execution management",
        "Vendor training, oversight, and performance optimization",
        "Structured control and accountability for multi-site operators",
        "Long-term waste management consistency across your portfolio",
      ]}
      aboutDescription="Most waste problems are not about the waste itself. They are about inconsistent execution, undertrained vendors, and a lack of visibility across locations. Tenth Rock provides retained waste management advisory that goes beyond audits and reports. We embed in your operations to manage program rollout, train vendors on-site, enforce performance standards, and deliver portfolio-wide execution management that produces measurable, sustained results."
      subServices={[
        {
          title: "Waste Program Assessments & Roadmaps",
          description: "Portfolio-wide waste strategy and operational waste audit of existing programs, vendor structures, workflows, and cost drivers. Deliverables include a multi-site waste roadmap, cost-control waste optimization plans, and portfolio-wide recommendations that drive measurable cost reduction.",
          image: "/images/stock/service-centralized-program.jpg",
          link: "/services/waste-program-assessments",
        },
        {
          title: "Standards, SOPs & Vendor Training",
          description: "Waste management SOP development and multi-site vendor training framework covering vendor performance protocols, site-level execution standards, escalation procedures, and documentation systems designed to prevent costly execution errors and inconsistencies.",
          image: "/images/stock/service-maintenance.jpg",
          link: "/services/standards-sops-training",
        },
        {
          title: "Ongoing Advisory & Program Implementation",
          description: "Waste workflow optimization and multi-site waste execution strategy. Ongoing waste program optimization with waste management oversight services, operational waste risk mitigation, and retained advisory support embedded in your waste operations.",
          image: "/images/stock/service-commercial.jpg",
          link: "/services/ongoing-advisory",
        },
      ]}
    />
  );
}

export const metadata = {
  title: "Waste Operations Advisory & Enablement | Tenth Rock",
  description: "Retained waste management advisory for multi-site operators. Hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management across 48 states.",
};
