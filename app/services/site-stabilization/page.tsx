import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SiteStabilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Temporary Capacity & Site Stabilization"
      serviceDescription="We provide rapid compactor failure response and bulk waste removal to stabilize operations fast. Our crews deploy temporary capacity to eliminate overflows and prevent further disruption."
      heroImage="/images/stock/service-emergency-overflow.jpg"
      aboutBullets={[
        "Broken compactor and compactor failure response",
        "Overflowing dumpster and waste overflow stabilization",
        "Temporary containers deployed for missed pickups and service gaps",
        "Illegal dumping cleanup and urgent bulk waste removal",
      ]}
      aboutDescription="When your compactor breaks down, your hauler misses a pickup, or waste is overflowing into customer-facing areas, you need temporary capacity deployed fast. Tenth Rock dispatches stabilization crews and temporary containers to your site to stop the problem from getting worse, then coordinates with vendors to restore normal service. We handle broken compactors, overflowing dumpsters, peak-season overflow, and illegal dumping situations."
    />
  );
}

export const metadata = {
  title: "Temporary Capacity & Site Stabilization | Compactor Failure Response | Tenth Rock",
  description: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal for commercial sites. Fast deployment for missed pickups, waste overflow, and broken compactor emergencies across 48 states.",
};
