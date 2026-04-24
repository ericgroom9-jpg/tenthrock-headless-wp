import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteClosuresRemodelsPage() {
  return (
    <ServiceTemplate
      serviceName="Site Closures & Remodels"
      serviceDescription="Implement a retail portfolio decommissioning strategy for store decommissions and renovations. Specialized teams provide retail remodel waste management and commercial cleanout for complex project work."
      heroImage="/images/stock/site-closures-1.jpg"
      aboutBullets={[
        "Execute store decommissioning for fixtures, flooring, and displays.",
        "Secure post-construction cleanout to ensure a broom-clean finish.",
        "Access same-day junk removal for store closings and rapid clearing.",
        "Receive detailed reporting for retail portfolio decommissioning.",
      ]}
      aboutDescription="Tenth Rock delivers site decommissioning and D&D (Deactivation and Demolition) support. We manage the commercial closeout lifecycle, providing portfolio-wide site turnover to keep projects on track."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/site-closures-2.png",
        imageAlt: "Vacant retail storefront with Coming Soon and For Lease signs",
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
        image: "/images/stock/site-closures-3.jpg",
        imageAlt: "Modern commercial building exterior with glass facade",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/site-closures-4.png"
      statsImageAlt="Vacant retail storefront with for lease and coming soon signage"
      ctaImage="/images/stock/site-closures-5.jpg"
      ctaImageAlt="Coming soon sign on a modern retail space interior"
    />
  );
}

export const metadata = {
  title: "Site Closures & Remodels | Site Decommissioning & Store Closings | Tenth Rock",
  description: "Site decommissioning, post-construction cleanout, store closings, and retail remodel waste management. Portfolio-wide site turnover, commercial closeout, and D&D across 48 states.",
};
