import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Based Waste Management | Churches & Religious Organizations | Tenth Rock",
  description: "Respectful and reliable waste management services for churches, temples, mosques, and religious organizations. Supporting your community with sustainable solutions.",
};

const bulletPoints = [
  {
    title: "Flexible Service Scheduling",
    description: "Service schedules that respect your worship times and community events. We work around your calendar to ensure unobtrusive pickups that don't disrupt services."
  },
  {
    title: "Community Event Support",
    description: "Additional capacity for festivals, fundraisers, food drives, and seasonal celebrations. We scale up when your community gathers and scale back during quieter periods."
  },
  {
    title: "Multi-Facility Management",
    description: "Coordinated waste services across your main worship space, fellowship halls, schools, and outreach centers under one streamlined program."
  },
  {
    title: "Budget-Conscious Solutions",
    description: "Transparent pricing designed for nonprofit organizations. We help you maximize your stewardship of resources while maintaining a welcoming, clean environment."
  }
];

const faqs = [
  {
    question: "Can you adjust service for our seasonal events?",
    answer: "Absolutely. We understand that religious organizations have fluctuating needs throughout the year. We can increase service for holidays, festivals, and special events, then return to regular schedules afterward."
  },
  {
    question: "Do you offer nonprofit pricing?",
    answer: "Yes, we offer competitive rates for faith-based and nonprofit organizations. We're committed to helping you be good stewards of your community's resources while maintaining excellent service."
  },
  {
    question: "How do you handle food donation programs?",
    answer: "We can coordinate with your food pantry or donation programs to ensure usable food goes to those in need while managing food waste sustainably. We've helped many organizations reduce waste while increasing community impact."
  },
  {
    question: "Can you service multiple buildings on our campus?",
    answer: "Yes, we specialize in multi-building campuses. Whether you have a sanctuary, school, community center, or administrative offices, we create a unified waste management plan that serves all your facilities."
  },
  {
    question: "What about waste from renovation or construction projects?",
    answer: "We provide roll-off containers and construction debris removal for building projects. Our team works with your contractors to ensure proper waste handling throughout the project lifecycle."
  }
];

export default function FaithBasedPage() {
  return (
    <IndustryTemplate
      industryName="Faith Based"
      heroImage="/assets_export/stock_images/panoramic-view-church-building_1768502470001.jpg"
      heroDescription="Dependable waste management services that support your mission. We help churches and religious organizations maintain welcoming, clean spaces for worship and community."
      aboutTitle="Supporting Your Sacred Spaces"
      aboutImage="/assets_export/stock_images/panoramic-view-church-building_1768502470001.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
