import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function NaturalDisasterMobilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Natural Disaster Mobilization"
      serviceDescription="Emergency mobilization of haulers and equipment to disaster-affected areas nationwide. Rapid response when communities need it most."
      heroImage="/images/stock/industry-natural-disasters-storm.jpg"
    />
  );
}

export const metadata = {
  title: "Natural Disaster Mobilization | Tenth Rock",
  description: "Emergency mobilization of haulers and equipment to disaster-affected areas nationwide.",
};
