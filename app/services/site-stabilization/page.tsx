import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Site Stabilization"
      heroTitle="Temporary Capacity & Site Stabilization"
      serviceDescription="Deploy immediate containers, coordinated waste removal, and pressure washing to stabilize compromised sites. Our teams respond to compactor failures, overflow conditions, and service disruptions to restore safe, functional environments fast."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Deploy on demand dumpster solutions for compactor failures and capacity breakdowns.",
        "Coordinate bulk waste removal to clear overflow and restore site conditions.",
        "Support multi-location rollouts with rapid response and prioritized scheduling.",
        "Provide pressure washing to clean and reset impacted areas after waste removal.",
      ]}
      aboutDescription="Tenth Rock delivers rapid site stabilization when systems fail. From container deployment and waste removal to final site cleanup, we restore order, safety, and operational continuity fast."
    />
  );
}

export const metadata = {
  title: "Site Stabilization | Compactor Failure Response | Tenth Rock",
  description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
};
