import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Site Stabilization"
      serviceDescription="Deploy emergency junk removal and urgent bulk waste removal to manage a compactor failure response. Specialized teams provide emergency waste management for a broken compactor or missed pickups."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Access immediate containers for broken compactor events.",
        "Secure emergency junk removal for waste overflow.",
        "Utilize urgent bulk waste removal for missed pickups.",
        "Clear illegal dumping with priority multi-site scheduling.",
      ]}
      aboutDescription="Tenth Rock offers same-day junk removal to resolve a waste overflow or overflowing dumpster. We provide rapid recovery to clear illegal dumping and maintain site standards."
    />
  );
}

export const metadata = {
  title: "Site Stabilization | Compactor Failure Response | Tenth Rock",
  description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
};
