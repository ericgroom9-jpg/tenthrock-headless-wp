import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Rapidly mobilize for an emergency site cleanout or commercial site cleanout. Specialized teams coordinate bulk debris removal and emergency junk removal for fast asset recovery and transitions."
      heroImage="/images/stock/clean-city.jpg"
      aboutBullets={[
        "Deploy professional crews for immediate removal of bulk debris and abandoned fixtures.",
        "Resolve illegal dumping and tenant transitions with minimal operational disruption.",
        "Secure fast site recovery to avoid municipal fines and safety hazards.",
        "Utilize a single point of contact for nationwide on-demand service.",
      ]}
      aboutDescription="Tenth Rock clears abandoned spaces and resolves code violations to ensure rapid property turnover and site safety. Specialized crews manage the entire removal process for facilities managers and real estate investors facing sudden tenant departures or illegal dumping."
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};
