import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function OnDemandServicePage() {
  return (
    <ServiceTemplate
      serviceName="On-Demand Service"
      serviceDescription="Deploy emergency dumpster rental and same day dumpster rental for commercial projects. Specialized teams coordinate emergency roll-off service to resolve waste overflow and support site transitions."
      heroImage="/images/stock/service-dumpster-rental.jpg"
      aboutBullets={[
        "Access roll off dumpsters and open top dumpsters for remodels.",
        "Secure same-day junk removal for sudden waste overflow.",
        "Utilize temporary dumpster units for commercial cleanouts.",
        "Receive priority emergency roll-off service across your portfolio.",
      ]}
      aboutDescription="Tenth Rock provides emergency waste management and same day swaps. We offer emergency junk removal using a variety of sizes, including 30 yard dumpster rental, to keep projects on schedule."
    />
  );
}

export const metadata = {
  title: "On-Demand Dumpster Rental | Same-Day Roll-Off Service | Tenth Rock",
  description: "Same-day dumpster rental, emergency dumpster rental, and emergency roll-off service for commercial projects. Roll-off dumpsters and open-top dumpsters with same-day swaps across 48 states.",
};
