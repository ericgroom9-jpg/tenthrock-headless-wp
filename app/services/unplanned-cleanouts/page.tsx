import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Rapidly mobilize for an emergency site cleanout or commercial site cleanout. Specialized teams coordinate bulk debris removal and on demand junk removal for fast property transitions."
      heroImage="/images/stock/unplanned-cleanouts-1.png"
      aboutBullets={[
        "Access urgent bulk pickup for foreclosure cleanouts.",
        "Secure same-day junk removal for retail fixtures and debris.",
        "Deploy emergency junk removal for large-scale waste.",
        "Receive code violation cleanup support for property management.",
      ]}
      aboutDescription="Tenth Rock provides emergency waste management and code violation cleanup support. We deliver same-day junk removal for large-scale waste clearing with minimal operational disruption."
      paragraphSection1={{
        badge: "Why It Matters",
        heading: "Built for the Demands of Modern Business",
        body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
        image: "/images/stock/unplanned-cleanouts-2.png",
        imageAlt: "Multifamily residential property exterior",
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
        image: "/images/stock/unplanned-cleanouts-3.png",
        imageAlt: "Apartment complex exterior",
        bulletPoints: [
          "Practical waste diversion and recovery",
          "Clear insights into site activity and service history",
          "Direct access to a nationwide network of facilities",
          "Reporting that supports your sustainability goals",
        ],
      }}
      statsImage="/images/stock/unplanned-cleanouts-4.png"
      statsImageAlt="Multifamily property exterior with landscaped grounds"
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};
