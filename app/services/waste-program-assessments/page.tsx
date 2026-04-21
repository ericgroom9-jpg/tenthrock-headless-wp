import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function WasteProgramAssessmentsPage() {
  return (
    <ServiceTemplate
      serviceName="Waste Program Assessments & Roadmaps"
      serviceDescription="Build a structured waste strategy across your portfolio. We assess current operations, vendor performance, and cost drivers, then deliver a clear roadmap for more efficient, scalable waste programs."
      heroImage="/images/stock/hero-skyscrapers.jpg"
      aboutBullets={[
        "Evaluate existing waste operations to identify inefficiencies and gaps.",
        "Develop a multi-site roadmap aligned to your operational and financial objectives.",
        "Standardize vendor structures, service levels, and workflows across your portfolio.",
        "Establish systems for visibility, consistency, and long-term performance.",
      ]}
      aboutDescription="Tenth Rock delivers advisory-led waste program assessments designed for multi-location operations. We bring structure, clarity, and control to fragmented waste services, creating a foundation for smarter decision-making and scalable execution."
      processSubtitle="A structured approach to evaluating and improving your waste operations:"
      processSteps={[
        { num: "01", title: "Discovery & Assessment", desc: "We review your current waste operations, vendor structure, and service data across locations." },
        { num: "02", title: "Analysis & Strategy Development", desc: "We identify inefficiencies, gaps, and opportunities, then build a tailored roadmap aligned with your operational goals." },
        { num: "03", title: "Recommendations & Implementation Planning", desc: "You receive clear, actionable recommendations and a structured plan to standardize and improve performance across your entire portfolio." },
      ]}
      howItWorksIntro="A structured approach to evaluating and improving your waste operations:"
      howItWorksSteps={[
        { title: "Discovery & Assessment", desc: "We review your current waste operations, vendor structure, and service data across locations." },
        { title: "Analysis & Strategy Development", desc: "We identify inefficiencies, gaps, and opportunities, then build a tailored roadmap aligned with your operational goals." },
        { title: "Recommendations & Implementation Planning", desc: "You receive clear, actionable recommendations and a structured plan to standardize and improve performance across your entire portfolio." },
      ]}
    />
  );
}

export const metadata = {
  title: "Waste Program Assessments & Roadmaps | Portfolio-Wide Waste Strategy | Tenth Rock",
  description: "Portfolio-wide waste strategy and operational waste audit with cost-control waste optimization. Multi-site waste roadmap and portfolio-wide recommendations for multi-location operators.",
};
