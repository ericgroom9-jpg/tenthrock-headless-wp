import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function NaturalDisasterMobilizationPage() {
  return (
    <ServiceTemplate
      serviceName="Natural Disaster Mobilization"
      serviceDescription="Rapid multi-site mobilization following hurricanes, floods, storms, and other disasters. We handle debris removal, damaged product disposal, temporary container deployment, and coordination across affected regions."
      heroImage="/images/stock/industry-natural-disasters-storm.jpg"
    />
  );
}

export const metadata = {
  title: "Natural Disaster Mobilization | Tenth Rock",
  description: "Rapid multi-site mobilization for debris removal, product disposal, and container deployment after hurricanes, floods, and storms. Nationwide coordination across affected regions.",
};
