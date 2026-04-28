import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function MultipleSizesPage() {
  return (
    <ServiceTemplate
      serviceName="Multiple Sizes"
      serviceDescription="Deploy the right roll-off dumpster for any project. Our open top containers are available in 20, 30, and 40 yard sizes, ensuring the right capacity for efficient, uninterrupted operations."
      heroImage="/images/stock/dumpster-large-red.png"
      aboutBullets={[
        "Access 20, 30, and 40 yard roll-off dumpsters to match the scale and demands of your project.",
        "Use 20 yard containers for tighter spaces and heavier, denser materials.",
        "Deploy 30 yard dumpsters for standard commercial projects and ongoing site needs.",
        "Leverage 40 yard containers for high-volume debris and large-scale operations.",
      ]}
      aboutDescription="Tenth Rock offers a full range of roll-off and open top dumpster sizes, with guidance on the right fit for each job. From compact placements to high-capacity containers, we ensure your site has the right equipment to stay efficient and on schedule."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/dumpster-large-green.png",
        imageAlt: "Large green roll-off dumpster sized for high-volume debris",
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
        image: "/images/stock/dumpster-blue-2.png",
        imageAlt: "Mid-size blue roll-off dumpster filled with mixed debris",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/dumpster-blue-3.png"
      statsImageAlt="Multiple blue roll-off dumpsters staged for delivery"
    />
  );
}

export const metadata = {
  title: "Multiple Dumpster Sizes | 20, 30 & 40 Yard Roll-Off Dumpster Rental | Tenth Rock",
  description: "20 yard dumpster rental, 30 yard roll-off, 30 yard dumpster rental, and 40 yard roll-off containers for commercial projects. Open-top dumpsters matched to your job scope.",
};
