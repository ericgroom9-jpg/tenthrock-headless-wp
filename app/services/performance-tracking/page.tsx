import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function PerformanceTrackingPage() {
  return (
    <ServiceTemplate
      serviceName="Performance Tracking"
      serviceDescription="Real-time dashboards and reporting to monitor service levels across every site. Data-driven insights to optimize your waste management operations."
      heroImage="/images/stock/hero-skyscrapers.jpg"
    />
  );
}

export const metadata = {
  title: "Performance Tracking | Tenth Rock",
  description: "Real-time dashboards and reporting to monitor service levels across every site.",
};
