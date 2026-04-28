import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OngoingAdvisoryPage() {
  return (
    <ServiceTemplate
      serviceName="Ongoing Advisory & Program Implementation"
      heroTitle="Ongoing Advisory & Implementation"
      serviceDescription="Support and evolve your waste program with ongoing advisory. We work alongside your team to refine operations, improve performance, and ensure consistent execution across your portfolio."
      heroImage="/images/stock/advisory-1.jpg"
      aboutBullets={[
        "Provide ongoing guidance to support waste program performance across locations.",
        "Refine vendor structures, workflows, and service levels as your business grows.",
        "Support implementation of standards and initiatives across your portfolio.",
        "Maintain visibility into operations to drive consistency and continuous improvement.",
      ]}
      aboutDescription="Tenth Rock delivers ongoing advisory support designed to strengthen and sustain waste programs at scale. We work alongside your team to ensure your strategy is executed effectively and continues to evolve with your operations."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/advisory-2.png",
        imageAlt: "Aerial view of a multi-location retail and commercial portfolio",
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
        image: "/images/stock/advisory-3.jpg",
        imageAlt: "Aerial view of a master-planned commercial campus surrounded by green space",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/advisory-4.jpg"
      statsImageAlt="Top-down aerial view of an urban plaza framed by mixed-use buildings"
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
