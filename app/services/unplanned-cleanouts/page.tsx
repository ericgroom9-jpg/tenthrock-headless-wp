import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Rapidly clear commercial sites and bulk debris from foreclosures or code violations. Deploy specialized crews for unexpected cleanouts with minimal operational disruption."
      heroImage="/images/stock/clean-city.jpg"
      aboutBullets={[
        "Commercial site cleanout for tenant abandonment and sudden closures",
        "Foreclosure cleanouts and code violation cleanup support",
        "Bulk debris removal including fixtures, shelving, and mixed waste",
        "Large-scale waste clearing with fast mobilization",
      ]}
      aboutDescription="Unexpected cleanouts happen without warning. A tenant abandons a space, a store closes suddenly, or code enforcement flags an overloaded site. Tenth Rock deploys crews for commercial site cleanout and bulk debris removal on short notice. We handle foreclosure cleanouts, emergency site cleanout situations, and code violation cleanup support. Fixtures, shelving, signage, and mixed commercial waste are cleared fast so your property is ready for turnover."
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};
