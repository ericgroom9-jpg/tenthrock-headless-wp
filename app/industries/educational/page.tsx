import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Waste Management | Universities & Schools | Tenth Rock",
  description: "Specialized waste management solutions for universities, colleges, and K-12 schools. Sustainable campus waste programs, recycling initiatives, and event cleanup services.",
};

const bulletPoints = [
  {
    title: "Campus-Wide Waste Programs",
    description: "Comprehensive waste management covering dormitories, dining halls, academic buildings, and athletic facilities. We handle the complexity of multi-building campuses with ease."
  },
  {
    title: "Campus Recycling Programs",
    description: "Robust recycling solutions tailored to high-traffic academic and residential environments. We coordinate the collection and hauling of campus-wide recyclables to support your institution's internal goals."
  },
  {
    title: "Event & Move-Out Support",
    description: "Specialized services for high-volume periods like graduation ceremonies, sporting events, and end-of-semester move-outs when waste volumes spike dramatically."
  },
  {
    title: "Campus Safety & Aesthetics",
    description: "We prioritize discreet equipment placement and timely debris removal to maintain a clean, professional campus environment. Our logistics focus on keeping pedestrian pathways clear and waste operations invisible to students and faculty."
  }
];

const faqs = [
  {
    question: "How do you handle waste during move-in and move-out periods?",
    answer: "We provide additional containers and increased pickup frequency during high-volume periods like semester start/end, graduation, and major campus events. Our team works with your facilities department to pre-position resources and ensure quick turnaround."
  },
  {
    question: "Can you help us improve our campus recycling rates?",
    answer: "Absolutely. We conduct waste audits to identify contamination issues and recycling opportunities, provide educational materials for students and staff, and implement best practices that have helped campuses increase diversion rates by 30% or more."
  },
  {
    question: "Do you offer specialized containers for different campus areas?",
    answer: "Yes, we provide a range of container sizes and types appropriate for different campus environments - from compact bins for academic buildings to large compactors for dining facilities and roll-offs for construction projects."
  },
  {
    question: "How does reporting work for sustainability certifications?",
    answer: "We provide detailed monthly and annual reports that align with common sustainability frameworks like AASHE STARS, including waste volumes, diversion rates, and environmental impact metrics that can be directly incorporated into your certification submissions."
  },
  {
    question: "Can you coordinate with multiple campus departments?",
    answer: "Yes, we work with facilities, sustainability offices, housing, athletics, and events teams to ensure coordinated service delivery across your entire campus. You'll have a single point of contact who manages all relationships."
  }
];

export default function EducationalPage() {
  return (
    <IndustryTemplate
      industryName="Educational Institutions"
      heroImage="/assets_export/stock_images/harvard-university-cambridge-usa_1768502414325.jpg"
      heroDescription="Comprehensive waste management solutions designed for the unique needs of universities, colleges, and K-12 schools. From daily operations to major campus events."
      aboutTitle="Waste Solutions Built for Campus Life"
      aboutImage="/assets_export/stock_images/harvard-university-cambridge-usa_1768502414325.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
