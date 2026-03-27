import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteProgramAssessmentsPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Program Assessments & Roadmaps"
      serviceDescription="Implement a portfolio-wide waste strategy through comprehensive operational waste audits. Specialized teams provide emergency waste management oversight to evaluate vendor structures and cost drivers across your entire portfolio."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Analyze vendor contracts and service frequencies to identify immediate savings.",
        "Develop customized optimization plans for multi-location retail and hospitality.",
        "Secure risk mitigation strategies to ensure long-term regulatory compliance.",
        "Receive detailed portfolio-wide recommendations for procurement and financial teams.",
      ]}
      aboutDescription="Tenth Rock delivers cost-control waste optimization and emergency junk removal planning. We create a multi-site waste roadmap providing actionable recommendations for financial efficiency and reliability."
    />
  );
}

export const metadata = {
  title: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
  description: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
};
