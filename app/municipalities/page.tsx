import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Municipal Waste Management | Government & Public Sector | Tenth Rock",
  description: "Comprehensive waste management solutions for municipalities, government facilities, and public sector organizations. Reliable service that serves your community.",
};

const bulletPoints = [
  {
    title: "Public Facility Coverage",
    description: "Complete waste services for city halls, libraries, parks, recreation centers, and public works facilities. One partner for all your municipal waste needs."
  },
  {
    title: "Special Event & Festival Support",
    description: "Scalable solutions for community events, parades, farmers markets, and public celebrations. We help keep your public spaces clean and welcoming."
  },
  {
    title: "Unified Logistics Management",
    description: "One point of contact for all public works and facility waste. We eliminate the administrative burden of managing multiple vendors, providing a professional approach to city-wide coordination."
  },
  {
    title: "Emergency Response Ready",
    description: "Rapid mobilization for storm cleanup, emergency debris removal, and disaster response. We're ready when your community needs us most."
  }
];

const faqs = [
  {
    question: "How do you manage waste for community festivals?",
    answer: "We provide scalable equipment and rapid hauling for high-volume public events. Our teams coordinate with city officials to clear streets and parks immediately, ensuring public spaces remain welcoming."
  },
  {
    question: "How do you handle seasonal variations in park usage?",
    answer: "We adjust service frequency based on seasonal patterns - increasing pickups during summer months and special events, then scaling back during quieter periods to optimize your budget."
  },
  {
    question: "Can you support our community recycling goals?",
    answer: "Absolutely. We help municipalities design and implement recycling programs that engage residents and support waste diversion goals."
  },
  {
    question: "What's your response time for emergency cleanup?",
    answer: "We maintain emergency response protocols with 24-48 hour mobilization for most situations. We prioritize public safety and rapid restoration of services."
  },
  {
    question: "Do you provide service to all municipal facilities?",
    answer: "Yes, we can service all municipal buildings and facilities under a single contract - from administrative offices to public works yards, parks, and community centers."
  }
];

export default function MunicipalitiesPage() {
  return (
    <IndustryTemplate
      industryName="Municipalities"
      heroImage="/images/stock/municipalities-american-flag.jpg"
      heroDescription="Professional waste management for cities, towns, and public agencies. We help you serve your community with reliable, cost-effective solutions."
      aboutTitle="Serving Those Who Serve the Public"
      aboutImage="/images/stock/municipalities-american-flag.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
