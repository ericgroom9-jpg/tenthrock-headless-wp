import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function UnplannedCleanutsPage() {
  return (
    <ServiceTemplate
      serviceName="Unplanned Cleanouts & Debris Removal"
      serviceDescription="Rapidly clear commercial sites and bulk debris from foreclosures or code violations. Deploy specialized crews for unexpected cleanouts with minimal operational disruption."
      heroImage="/images/stock/clean-city.jpg"
      aboutBullets={[
        "Deploy professional crews for immediate removal of bulk debris and abandoned fixtures.",
        "Resolve illegal dumping and tenant transitions with minimal operational disruption.",
        "Secure fast site recovery to avoid municipal fines and safety hazards.",
        "Utilize a single point of contact for nationwide on-demand service.",
      ]}
      aboutDescription="Tenth Rock deploys crews on short notice to clear abandoned spaces or code violations. Rapidly remove fixtures and debris to ensure fast property turnover."
    />
  );
}

export const metadata = {
  title: "Unplanned Cleanouts & Debris Removal | Commercial Site Cleanout | Tenth Rock",
  description: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations. Large-scale waste clearing across 48 states.",
};
