import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Waste Management | Property Management | Tenth Rock",
  description: "Professional waste management for property managers, apartment communities, and commercial real estate. Enhance property value with reliable waste services.",
};

const bulletPoints = [
  {
    title: "Multi-Unit Property Services",
    description: "Comprehensive waste solutions for apartment complexes, condominiums, and residential communities. We keep your common areas clean and residents happy."
  },
  {
    title: "Tenant Turnover Support",
    description: "Fast cleanout services for unit turnovers, abandoned property, and eviction cleanups. We help you get units back on the market quickly."
  },
  {
    title: "Commercial Property Management",
    description: "Waste services for office buildings, shopping centers, and mixed-use developments. Coordinated service that meets the needs of diverse tenant mixes."
  },
  {
    title: "Property Value Protection",
    description: "Clean, well-maintained waste areas enhance curb appeal and property values. We provide equipment and service that reflects well on your properties."
  }
];

const faqs = [
  {
    question: "Can you handle multiple properties under one contract?",
    answer: "Yes, we specialize in portfolio management for property managers and real estate companies. One contract, one invoice, one point of contact for all your properties."
  },
  {
    question: "How quickly can you do unit cleanouts?",
    answer: "For standard unit turnovers, we typically complete cleanouts within 24-48 hours. For emergency situations or evictions, we can often respond same-day with advance notice."
  },
  {
    question: "Do you provide recycling for apartment communities?",
    answer: "Yes, we design and implement recycling programs that work for multi-family communities. This includes resident education, proper container placement, and contamination management."
  },
  {
    question: "How do you handle large item disposal for residents?",
    answer: "We offer bulk pickup services for furniture, appliances, and other large items. This can be scheduled on a regular basis or as-needed to keep your property clean and prevent illegal dumping."
  },
  {
    question: "Can you customize service for different properties?",
    answer: "Absolutely. Each property is different, and we tailor service frequency, container sizes, and placement to meet the specific needs of each community in your portfolio."
  }
];

export default function RealEstatePage() {
  return (
    <IndustryTemplate
      industryName="Real Estate"
      heroImage="/assets_export/stock_images/industry-real-estate.jpg"
      heroDescription="Professional waste management that protects property values and keeps tenants satisfied. Reliable service for property managers and real estate portfolios."
      aboutTitle="Supporting Property Excellence"
      aboutImage="/assets_export/stock_images/industry-real-estate.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
