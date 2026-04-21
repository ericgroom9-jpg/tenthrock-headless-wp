import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OngoingAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Ongoing Advisory & Program Implementation"
      heroTitle="Ongoing Advisory & Implementation"
      serviceDescription="Support and evolve your waste program with ongoing advisory. We work alongside your team to refine operations, improve performance, and ensure consistent execution across your portfolio."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Provide ongoing guidance to support waste program performance across locations.",
        "Refine vendor structures, workflows, and service levels as your business grows.",
        "Support implementation of standards and initiatives across your portfolio.",
        "Maintain visibility into operations to drive consistency and continuous improvement.",
      ]}
      aboutDescription="Tenth Rock delivers ongoing advisory support designed to strengthen and sustain waste programs at scale. We work alongside your team to ensure your strategy is executed effectively and continues to evolve with your operations."
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
  title: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
  description: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
};
