import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Deploy emergency dumpster rental and same day dumpster rental for commercial projects. Specialized teams coordinate emergency roll-off service to resolve waste overflow and support site transitions."
      heroImage="/images/stock/dumpster-blue-2.png"
      aboutBullets={[
        "Access roll-off and open top dumpsters for remodels, cleanouts, and ongoing operations.",
        "Coordinate same-day delivery and on-demand swaps to keep sites moving without delays.",
        "Scale container capacity up or down based on real-time site needs.",
        "Support multi-location portfolios with responsive, flexible dumpster logistics.",
      ]}
      aboutDescription="Tenth Rock delivers on-demand dumpster rental and container management. We handle rapid dispatch, same-day swaps, and ongoing service coordination, keeping projects on schedule and sites running efficiently."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/dumpster-blue-3.png",
        imageAlt: "Roll-off dumpsters lined up on site ready for service",
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
        image: "/images/stock/dumpster-large-green.png",
        imageAlt: "Large green roll-off container staged for pickup",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/dumpster-blue-1.png"
      statsImageAlt="Blue roll-off dumpster filled with construction debris"
    />
  );
}

export const metadata = {
  title: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
  description: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
};
