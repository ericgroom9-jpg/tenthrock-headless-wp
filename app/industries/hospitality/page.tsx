import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Waste Management | Hotels & Resorts | Tenth Rock",
  description: "Premium waste management services for hotels, resorts, and hospitality venues. Discreet, reliable service that protects your guest experience.",
};

const bulletPoints = [
  {
    title: "Guest Experience Protection",
    description: "Discreet service scheduling and equipment placement that keeps waste operations invisible to guests. We protect the ambiance you've worked hard to create."
  },
  {
    title: "High-Volume Kitchen Support",
    description: "Specialized logistics for back-of-house solid waste and cardboard recycling. We maintain kitchen flow by coordinating debris removal."
  },
  {
    title: "Multi-Property Coordination",
    description: "Centralized management for hotel groups and resort portfolios. Consistent service standards across all your properties with unified reporting."
  },
  {
    title: "Resource Efficiency Support",
    description: "Streamlined logistics to support your internal sustainability goals. We provide detailed material tracking and recovery data to help you measure environmental impact."
  }
];

const faqs = [
  {
    question: "How do you ensure service doesn't disrupt guests?",
    answer: "We schedule pickups during low-traffic hours and position equipment in service areas away from guest sightlines. Our crews are trained in hospitality environment protocols and maintain a professional, unobtrusive presence."
  },
  {
    question: "Can you handle conference and banquet waste?",
    answer: "Yes, we provide additional capacity for large events, conferences, and banquets. We work with your events team to pre-position resources and ensure rapid cleanup that supports quick room turnovers."
  },
  {
    question: "Do you offer cooking oil recycling?",
    answer: "Absolutely. We provide dedicated cooking oil collection and recycling services for hotel kitchens and restaurants. This keeps grease out of your waste stream and supports sustainable practices."
  },
  {
    question: "How do you support our sustainability initiatives?",
    answer: "We help hotels implement recycling programs and improve diversion rates. Many of our hotel partners have achieved significant improvements in their environmental metrics."
  },
  {
    question: "Can you service multiple properties under one agreement?",
    answer: "Yes, we specialize in multi-property management for hotel groups. You get consistent service standards, unified billing, and a single point of contact for all your properties."
  }
];

export default function HospitalityPage() {
  return (
    <IndustryTemplate
      industryName="Hospitality"
      heroImage="/assets_export/stock_images/industry-hospitality.jpg"
      heroDescription="Discreet, reliable waste management that protects your guest experience. We help hotels and resorts maintain impeccable standards while advancing sustainability goals."
      aboutTitle="Invisible Service, Visible Results"
      aboutImage="/assets_export/stock_images/industry-hospitality.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
