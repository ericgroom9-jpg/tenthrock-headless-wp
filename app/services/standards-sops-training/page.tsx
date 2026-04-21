import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function StandardsSopsTrainingPage() {
  return (
    <ServiceTemplate
      serviceName="Standards & Vendor Training"
      serviceDescription="Establish clear standards and workflows across your waste operations. We develop SOPs, define expectations, and provide vendor training resources to ensure consistent execution across every location."
      heroImage="/images/stock/city-nature.jpg"
      aboutBullets={[
        "Define standardized workflows and service expectations across your portfolio.",
        "Establish vendor performance protocols to drive accountability and consistency.",
        "Develop training frameworks to align vendors with operational standards.",
        "Create structured systems for execution, communication, and oversight.",
      ]}
      aboutDescription="Tenth Rock delivers advisory-led standards, SOPs, and vendor training programs designed for multi-location operations. We bring consistency and control to vendor execution, ensuring every site operates to the same standard."
      processSubtitle="A structured approach to evaluating and improving your waste operations:"
      processSteps={[
        { num: "01", title: "Discovery & Assessment", desc: "We review your current waste operations, vendor structure, and service data across locations." },
        { num: "02", title: "Analysis & Strategy Development", desc: "We identify inefficiencies, gaps, and opportunities, then build a tailored roadmap aligned with your operational goals." },
        { num: "03", title: "Recommendations & Implementation Planning", desc: "You receive clear, actionable recommendations and a structured plan to standardize and improve performance across your entire portfolio." },
      ]}
    />
  );
}

export const metadata = {
  title: "Standards & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};
