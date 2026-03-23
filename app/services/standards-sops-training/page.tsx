import ServiceTemplate from "@/components/services/ServiceTemplate";

export default function StandardsSopsTrainingPage() {
  return (
    <ServiceTemplate
      serviceName="Standards, SOPs & Vendor Training"
      serviceDescription="Waste management SOP development, multi-site vendor training framework, vendor performance protocols, and site-level execution standards. Designed to prevent costly execution errors and inconsistencies across your portfolio with structured escalation procedures and documentation systems."
      heroImage="/images/stock/city-nature.jpg"
      aboutBullets={[
        "Waste management SOP development for site-level consistency",
        "Multi-site vendor training framework with on-site delivery",
        "Vendor performance protocols and escalation procedures",
        "Site-level execution standards that prevent costly errors",
      ]}
      aboutDescription="Inconsistent vendor execution is the most expensive problem in multi-site waste management. Tenth Rock develops waste management SOPs, vendor performance protocols, and site-level execution standards tailored to your portfolio. We then deliver a multi-site vendor training framework directly to your vendors on-site, ensuring every crew at every location follows the same standards, escalation procedures, and documentation requirements."
    />
  );
}

export const metadata = {
  title: "Standards, SOPs & Vendor Training | Waste Management SOP Development | Tenth Rock",
  description: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards for national retail brands and franchise systems.",
};
