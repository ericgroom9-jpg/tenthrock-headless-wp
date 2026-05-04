import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function PerformanceTrackingPage() {
  return (
    <ServiceTemplate
      serviceName="Service Oversight"
      serviceDescription="Dedicated account management and vendor coordination to maintain service levels across every site. Hands-on oversight to keep your waste operations running smoothly."
      heroImage="/images/stock/hero-skyscrapers.jpg"
    />
  );
}

export const metadata = {
  title: "Service Oversight | Tenth Rock",
  description: "Dedicated account management and vendor coordination to maintain service levels across every site.",
};
