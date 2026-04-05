import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteProgramAssessmentsPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Program Assessments & Roadmaps"
      serviceDescription="Build a structured waste strategy across your portfolio. We assess current operations, vendor performance, and cost drivers, then deliver a clear roadmap for more efficient, scalable waste programs."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Conduct an operational waste audit to identify hidden expenses.",
        "Secure a multi-site waste roadmap for long-term scalability.",
        "Develop a portfolio-wide waste strategy for procurement.",
        "Implement emergency waste management for risk mitigation.",
      ]}
      aboutDescription="Tenth Rock delivers cost-control waste optimization and emergency junk removal planning. We create a multi-site waste roadmap providing actionable recommendations for financial efficiency and reliability."
      processSubtitle="A structured approach to evaluating and improving your waste operations:"
      processSteps={[
        { num: "01", title: "Discovery & Assessment", desc: "We review your current waste operations, vendor structure, and service data across locations." },
        { num: "02", title: "Analysis & Strategy Development", desc: "We identify inefficiencies, gaps, and opportunities, then build a tailored roadmap aligned to your operational goals." },
        { num: "03", title: "Recommendations & Implementation Planning", desc: "You receive clear, actionable recommendations, along with a structured plan to standardize and improve performance across your portfolio." },
      ]}
    />
  );
}

export const metadata = {
  title: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
  description: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
};
