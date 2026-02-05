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
    description: "Specialized handling of storm debris, flood-damaged materials, and disaster waste. We sort, process, and dispose of materials according to regulatory requirements."
  },
  {
    title: "FEMA Documentation Support",
    description: "Detailed record-keeping and documentation that meets FEMA requirements for disaster reimbursement. We help you recover eligible costs."
  },
  {
    title: "Community Recovery Partnership",
    description: "We work alongside emergency management agencies, utilities, and contractors to support comprehensive community recovery efforts."
  }
];

const faqs = [
  {
    question: "How quickly can you respond to a disaster?",
    answer: "We maintain emergency response teams and equipment staged in strategic locations. For predicted events like hurricanes, we pre-position resources. For sudden disasters, we typically mobilize within 24-48 hours."
  },
  {
    question: "Do you handle hazardous materials from disasters?",
    answer: "Yes, we're equipped to handle household hazardous waste, construction debris with asbestos concerns, and other regulated materials that commonly appear in disaster cleanup. All disposal follows proper regulatory protocols."
  },
  {
    question: "Can you help with FEMA reimbursement documentation?",
    answer: "Absolutely. We provide detailed documentation of all work performed, including load tickets, tonnage reports, GPS tracking, and photo documentation that meets FEMA eligibility requirements."
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
      heroImage="/assets_export/stock_images/industry-natural-disasters.jpg"
      heroDescription="When disaster strikes, we're ready. Rapid-response debris removal and cleanup services that help communities recover and rebuild."
      aboutTitle="First Responders for Waste Recovery"
      aboutImage="/assets_export/stock_images/industry-natural-disasters.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
