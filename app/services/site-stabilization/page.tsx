import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Temporary Capacity & Site Stabilization"
      serviceDescription="Deploy emergency junk removal and urgent bulk waste removal to manage a compactor failure response. Specialized teams provide emergency waste management for a broken compactor or missed pickups."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Deploy temporary dumpsters and crews for peak season or vendor gaps.",
        "Access immediate hauling for compactors and unexpected overflows.",
        "Secure fast site stabilization to avoid city fines and safety hazards.",
        "Utilize a single point of contact for nationwide on-demand service.",
      ]}
      aboutDescription="Tenth Rock offers same-day junk removal to resolve a waste overflow or overflowing dumpster. We provide rapid recovery to clear illegal dumping and maintain site standards."
    />
  );
}

export const metadata = {
  title: "Temporary Capacity & Site Stabilization | Compactor Failure Response | Tenth Rock",
  description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
};
