import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Site Stabilization"
      heroTitle="Temporary Capacity & Site Stabilization"
      serviceDescription="Deploy immediate containers, coordinated waste removal, and pressure washing to stabilize compromised sites. Our teams respond to compactor failures, overflow conditions, and service disruptions to restore safe, functional environments fast."
      heroImage="/images/stock/site-stabilization-1.png"
      aboutBullets={[
        "Deploy on demand dumpster solutions for compactor failures and capacity breakdowns.",
        "Coordinate bulk waste removal to clear overflow and restore site conditions.",
        "Support multi-location rollouts with rapid response and prioritized scheduling.",
        "Provide pressure washing to clean and reset impacted areas after waste removal.",
      ]}
      aboutDescription="Tenth Rock delivers rapid site stabilization when systems fail. From container deployment and waste removal to final site cleanup, we restore order, safety, and operational continuity fast."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/site-stabilization-2.png",
        imageAlt: "Aerial view of large commercial facility",
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
        image: "/images/stock/site-stabilization-3.png",
        imageAlt: "Aerial view of distribution center complex",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/site-stabilization-4.png"
      statsImageAlt="Aerial view of commercial parking and rooftops"
      ctaImage="/images/stock/site-stabilization-5.png"
      ctaImageAlt="Aerial view of industrial complex with logistics infrastructure"
    />
  );
}

export const metadata = {
  title: "Site Stabilization | Compactor Failure Response | Tenth Rock",
  description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
};
