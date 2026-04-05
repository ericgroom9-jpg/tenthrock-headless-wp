import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OngoingAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Ongoing Advisory & Program Implementation"
      heroTitle="Ongoing Advisory & Implementation"
      serviceDescription="Support and evolve your waste program with ongoing advisory. We work alongside your team to refine operations, improve performance, and ensure consistent execution across your portfolio."
      heroImage="/images/stock/service-commercial.jpg"
      aboutBullets={[
        "Conduct waste management oversight services for portfolio efficiency.",
        "Secure ongoing waste program optimization for scalable growth.",
        "Deploy a multi-site waste execution strategy for vendor oversight.",
        "Implement operational waste risk mitigation for continuous reliability.",
      ]}
      aboutDescription="Tenth Rock delivers waste workflow optimization and ongoing waste program optimization. We manage operational waste risk mitigation and emergency junk removal to maintain high-visibility site standards."
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
  title: "Ongoing Advisory & Program Implementation | Waste Management Oversight | Tenth Rock",
  description: "Waste workflow optimization, multi-site waste execution strategy, and ongoing waste program optimization. Waste management oversight services and operational waste risk mitigation for enterprise operators.",
};
