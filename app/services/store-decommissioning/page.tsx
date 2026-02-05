import ServiceTemplate from "@/components/services/ServiceTemplate";

const imgStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";

export default function StoreDecommissioningPage() {
  return (
    <ServiceTemplate
      serviceName="Store Decommissioning & Remodel"
      serviceDescription="Professional decommissioning services for retail closures, renovations, and remodels. We handle everything from fixture removal to final site cleanup."
      heroImage={imgStoreDecommissioning}
    />
  );
}
