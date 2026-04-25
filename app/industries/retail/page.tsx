import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Waste Management | Stores & Shopping Centers | Tenth Rock",
  description: "Efficient waste management for retail stores, shopping centers, and commercial establishments. Keep your business clean and customers happy.",
};

const bulletPoints = [
  {
    title: "Store Operations Support",
    description: "Reliable waste and recycling services that fit your store's schedule. We work around your operating hours to ensure minimal disruption to customers and staff."
  },
  {
    title: "Cardboard & Packaging Recycling",
    description: "High-volume cardboard and packaging material recycling that turns your waste stream into a sustainability story. We help retailers reduce costs and environmental impact."
  },
  {
    title: "Multi-Location Consistency",
    description: "Uniform service standards across all your retail locations. Whether you have 10 stores or 1,000, we deliver consistent quality and reporting."
  },
  {
    title: "Seasonal Flexibility",
    description: "Scalable service that adjusts to holiday rushes, sales events, and seasonal inventory changes. More capacity when you need it, right-sized service when you don't."
  }
];

const faqs = [
  {
    question: "Can you service our stores after hours?",
    answer: "Absolutely. We schedule most retail pickups during early morning or late evening hours to avoid customer interference. Our crews are trained to work quickly and quietly around retail environments."
  },
  {
    question: "How do you handle holiday and seasonal volume increases?",
    answer: "We proactively increase service frequency and container capacity during peak retail seasons. We work with your operations team to anticipate needs and prevent overflow situations."
  },
  {
    question: "Do you offer compactor services for high-volume locations?",
    answer: "Yes, we provide and service compactors for retail locations with significant cardboard and waste volumes. Compactors reduce pickup frequency and can significantly lower your waste management costs."
  },
  {
    question: "Can you help with store remodels or closures?",
    answer: "We provide roll-off containers and cleanout services for store renovations, fixture changes, and store closures. We handle everything from construction debris to old inventory disposal."
  },
  {
    question: "How do you handle nationwide retail chains?",
    answer: "We manage waste programs for national retailers with hundreds of locations. Our centralized management platform provides visibility across all locations with local service quality."
  }
];

export default function RetailPage() {
  return (
    <IndustryTemplate
      industryName="Retail"
      heroImage="/images/stock/retail-modern-office-building.jpg"
      heroDescription="Keep your stores clean and operations running smoothly. Waste management solutions designed for the unique demands of retail environments."
      aboutTitle="Retail-Ready Waste Solutions"
      aboutImage="/images/stock/retail-modern-office-building.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
