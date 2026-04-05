import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function StandardsSopsTrainingPage() {
  return (
    <ServiceTemplate
      serviceName="Standards & Vendor Training"
      serviceDescription="Establish clear standards and workflows across your waste operations. We develop SOPs, define expectations, and provide vendor training resources to ensure consistent execution across every location."
      heroImage="/images/stock/city-nature.jpg"
      aboutBullets={[
        "Establish waste management SOP development for rapid response.",
        "Secure vendor performance protocols for accountability.",
        "Deploy a multi-site vendor training framework for consistency.",
        "Implement emergency waste management for risk mitigation.",
      ]}
      aboutDescription="Tenth Rock delivers a multi-site vendor training framework focused on vendor performance protocols. We provide emergency junk removal workflows to maintain high-visibility site standards."
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
  title: "Standards & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};
