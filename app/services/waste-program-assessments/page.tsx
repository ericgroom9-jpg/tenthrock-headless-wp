import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteProgramAssessmentsPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Program Assessments & Roadmaps"
      serviceDescription="Conduct an operational waste audit of existing programs, vendor structures, and cost drivers. Specialized teams deliver cost-control waste optimization plans and risk mitigation strategies to streamline management across your entire footprint."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Operational waste audit of vendor structures, workflows, and cost drivers",
        "Portfolio-wide waste strategy with prioritized action items",
        "Multi-site waste roadmap for phased implementation",
        "Cost-control optimization plans that produce measurable savings",
      ]}
      aboutDescription="You cannot optimize what you have not measured. Tenth Rock conducts operational waste audits across your portfolio to map vendor structures, service frequencies, cost drivers, and compliance gaps. The output is a multi-site waste roadmap with a prioritized list of cost-control optimization opportunities, recommended vendor changes, and a phased implementation plan designed to produce measurable cost reduction."
    />
  );
}

export const metadata = {
  title: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
  description: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
};
