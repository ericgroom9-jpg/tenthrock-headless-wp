import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function StandardsSopsTrainingPage() {
  return (
    <ServiceTemplate
      serviceName="Standards & Vendor Training"
      serviceDescription="Establish clear standards and workflows across your waste operations. We develop SOPs, define expectations, and provide vendor training resources to ensure consistent execution across every location."
      heroImage="/images/stock/training-1.jpg"
      aboutBullets={[
        "Define standardized workflows and service expectations across your portfolio.",
        "Establish vendor performance protocols to drive accountability and consistency.",
        "Develop training frameworks to align vendors with operational standards.",
        "Create structured systems for execution, communication, and oversight.",
      ]}
      aboutDescription="Tenth Rock delivers advisory-led standards, SOPs, and vendor training programs designed for multi-location operations. We bring consistency and control to vendor execution, ensuring every site operates to the same standard."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/training-2.jpg",
        imageAlt: "Modern conference room with interactive table for executive planning sessions",
        bulletPoints: [
          "Reduce waste management overhead by up to 30%",
          "Eliminate multi-vendor coordination headaches",
          "Real-time job status and documentation",
          "Scalable solutions that grow with your business",
        ],
      }}
      paragraphSection2={{
        badge: "Our Commitment",
        heading: "Sustainability Without Compromise",
        body: "Environmental responsibility and operational efficiency go hand in hand. Our approach supports waste diversion efforts without disrupting your service or adding unnecessary complexity. We work with recovery and processing facilities across the country to help reduce landfill use while maintaining the reliable operations your business depends on.",
        image: "/images/stock/training-3.jpg",
        imageAlt: "Boardroom overlooking a waterfront city skyline",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/training-4.jpg"
      statsImageAlt="Conference room set up for vendor training session"
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
  title: "Standards & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};
