import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";

export default function EmergencyWasteRemovalPage() {
  return (
    <ServiceTemplate
      serviceName="Emergency & Overflow Waste Response"
      serviceDescription="24/7 rapid response for unexpected waste emergencies and overflow situations. Our teams are deployed within hours, not days."
      heroImage={imgServiceEmergencyOverflow}
    />
  );
}

export const metadata = {
  title: "Emergency Waste Removal | Tenth Rock",
  description: "24/7 emergency waste removal services. Rapid response teams available for urgent situations with nationwide coverage.",
};
