import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function SinglePointOfContactPage() {
  return (
    <ServiceTemplate
      serviceName="Single Point of Contact"
      serviceDescription="One dedicated account manager for all your locations—simplifying communication and ensuring consistent service quality across your entire portfolio."
      heroImage="/images/stock/service-centralized-program.jpg"
    />
  );
}

export const metadata = {
  title: "Single Point of Contact | Tenth Rock",
  description: "One dedicated account manager for all your locations—simplifying communication and ensuring consistent service quality.",
};
