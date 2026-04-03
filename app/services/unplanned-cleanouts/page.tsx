import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Rapidly mobilize for an emergency site cleanout or commercial site cleanout. Specialized teams coordinate bulk debris removal and emergency junk removal for fast asset recovery and transitions."
      heroImage="/images/stock/clean-city.jpg"
      aboutBullets={[
        "Access urgent bulk pickup for foreclosure cleanouts.",
        "Secure same-day junk removal for retail fixtures and debris.",
        "Deploy emergency junk removal for large-scale waste.",
        "Receive code violation cleanup support for property management.",
      ]}
      aboutDescription="Tenth Rock provides emergency waste management and code violation cleanup support. We deliver same-day junk removal for large-scale waste clearing with minimal operational disruption."
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};
