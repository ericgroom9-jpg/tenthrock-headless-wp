import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function StandardsSopsTrainingPage() {
  return (
    <ServiceTemplate
      serviceName="Standards, SOPs & Vendor Training"
      serviceDescription="Implement site-level execution standards and waste management SOP development for consistent operations. Specialized teams create vendor performance protocols to prevent execution errors and service inconsistencies."
      heroImage="/images/stock/city-nature.jpg"
      aboutBullets={[
        "Waste management SOP development for site-level consistency",
        "Multi-site vendor training framework with on-site delivery",
        "Vendor performance protocols and escalation procedures",
        "Site-level execution standards that prevent costly errors",
      ]}
      aboutDescription="Tenth Rock builds a multi-site vendor training framework for national retail brands and franchise systems. We establish clear documentation and escalation protocols to streamline onsite management and corporate oversight."
    />
  );
}

export const metadata = {
  title: "Standards, SOPs & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};
