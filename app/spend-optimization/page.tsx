import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SpendOptimizationPage() {
  return (
    <ServiceTemplate
      serviceName="Spend Optimization"
      serviceDescription="Consolidate vendors and negotiate better rates to reduce your total waste spend. Our procurement expertise saves clients up to 30% on waste costs."
      heroImage="/images/stock/city-nature.jpg"
    />
  );
}

export const metadata = {
  title: "Spend Optimization | Tenth Rock",
  description: "Consolidate vendors and negotiate better rates to reduce your total waste spend.",
};
