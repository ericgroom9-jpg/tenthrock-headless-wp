import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disaster Response Waste Management | Emergency Cleanup | Tenth Rock",
  description: "Rapid-response waste management for natural disasters and emergencies. Storm debris removal, flood cleanup, and disaster recovery support when you need it most.",
};

const bulletPoints = [
  {
    title: "Rapid Emergency Deployment",
    description: "24/7 emergency response teams ready to mobilize within hours. We pre-position resources in advance of predicted storms to minimize response time."
  },
  {
    title: "Debris Management Expertise",
    description: "Coordinated handling of storm debris, flood-damaged materials, and large-volume waste to restore safe, functional environments."
  },
  {
    title: "Comprehensive Site Records",
    description: "Detailed activity logs and photo documentation are provided for every service. We ensure you have organized records of all recovery efforts for internal project tracking."
  },
  {
    title: "Recovery Coordination",
    description: "We provide the logistical horsepower needed to support large-scale recovery. Our teams work alongside site managers and contractors to keep your business moving forward."
  }
];

const faqs = [
  {
    question: "How quickly can you respond to a disaster?",
    answer: "We maintain emergency response teams and equipment staged in strategic locations. For predicted events like hurricanes, we pre-position resources. For sudden disasters, we typically mobilize within 24-48 hours."
  },
  {
    question: "What types of storm debris do you remove?",
    answer: "We handle construction debris, damaged product, waterlogged inventory, and mixed commercial waste that commonly appears after hurricanes, floods, and storms."
  },
  {
    question: "Do you provide documentation for insurance and reimbursement?",
    answer: "Yes. We provide detailed documentation of all work performed, including load tickets, tonnage reports, GPS tracking, and photo documentation that supports insurance claims and reimbursement eligibility."
  },
  {
    question: "What types of disasters do you respond to?",
    answer: "We respond to hurricanes, tornadoes, floods, ice storms, wildfires, and other natural disasters. We also support cleanup from man-made emergencies and industrial incidents."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we provide documentation and work directly with insurance adjusters when needed. Our detailed records support claims processing and help expedite settlements."
  }
];

export default function NaturalDisastersPage() {
  return (
    <IndustryTemplate
      industryName="Natural Disasters"
      heroImage="/images/stock/industry-natural-disasters-storm.jpg"
      heroDescription="When disaster strikes, we're ready. Rapid-response debris removal and cleanup services that help communities recover and rebuild."
      aboutTitle="First Responders for Waste Recovery"
      aboutImage="/images/stock/industry-natural-disasters-storm.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
