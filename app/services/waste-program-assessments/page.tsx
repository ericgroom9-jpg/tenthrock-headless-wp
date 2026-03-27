import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteProgramAssessmentsPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Program Assessments & Roadmaps"
      serviceDescription="Conduct an operational waste audit of existing programs, vendor structures, and cost drivers. Specialized teams deliver cost-control waste optimization plans and risk mitigation strategies to streamline management across your entire footprint."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Analyze vendor contracts and service frequencies to identify immediate savings.",
        "Develop customized optimization plans for multi-location retail and hospitality.",
        "Secure risk mitigation strategies to ensure long-term regulatory compliance.",
        "Receive detailed portfolio-wide recommendations for procurement and financial teams.",
      ]}
      aboutDescription="Tenth Rock provides a high-level multi-site waste roadmap for private equity firms and corporate facilities leaders. We identify inefficiencies in your current workflows to build a portfolio-wide waste strategy focused on immediate savings and operational excellence."
    />
  );
}

export const metadata = {
  title: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
  description: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
};
