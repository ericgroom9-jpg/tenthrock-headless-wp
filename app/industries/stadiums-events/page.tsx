import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadium & Event Waste Management | Tenth Rock",
  description: "Professional waste management for stadiums, arenas, and large-scale events. High-volume waste solutions, recycling programs, and rapid post-event cleanup services.",
};

const bulletPoints = [
  {
    title: "High-Volume Event Support",
    description: "Scalable waste solutions designed for crowds of any size. From intimate concerts to 100,000+ stadium events, we deploy the right resources at the right time."
  },
  {
    title: "Rapid Turnaround Cleanup",
    description: "Post-event cleanup crews ready to restore your venue to pristine condition. We work through the night so you're ready for the next event or business day."
  },
  {
    title: "Fan-Facing Recycling Programs",
    description: "Branded recycling stations and clear signage that encourage proper waste sorting. Help your fans be part of your sustainability story."
  },
  {
    title: "Vendor & Concession Coordination",
    description: "Direct coordination of back-of-house solid waste and high-volume hauling for concession operators (note: excludes grease or liquid disposal)."
  }
];

const faqs = [
  {
    question: "How quickly can you mobilize for an unplanned event?",
    answer: "We maintain standby capacity in major markets and can typically deploy additional resources within 24-48 hours for unexpected needs. For regular clients, we build surge capacity into your service plan."
  },
  {
    question: "Do you handle specialty waste from events?",
    answer: "Yes, we manage high-volume solid waste streams including cardboard recycling, vendor debris, and bulk hauling. Our teams coordinate the logistics for all event-related solid materials; please note we do not handle liquid waste, cooking oil, or grease disposal."
  },
  {
    question: "Do you support waste diversion for events?",
    answer: "Absolutely. We coordinate recycling and diversion programs for events of all sizes. Many of our venue partners have improved their diversion rates significantly through our managed programs."
  },
  {
    question: "How do you handle waste during multi-day festivals?",
    answer: "For multi-day events, we establish on-site command centers and maintain continuous service. We perform rolling cleanups, manage overflow, and ensure facilities remain clean throughout the entire event duration."
  },
  {
    question: "What's your approach to fan-facing waste stations?",
    answer: "We design and deploy clear, intuitive waste stations that make it easy for fans to sort correctly. This includes color-coded bins, clear signage, and strategic placement based on traffic flow analysis."
  }
];

export default function StadiumsEventsPage() {
  return (
    <IndustryTemplate
      industryName="Stadiums & Events"
      heroImage="/assets_export/stock_images/industry-stadiums-events.jpg"
      heroDescription="Expert waste management for stadiums, arenas, concert venues, and major events. We handle the logistics so you can focus on delivering unforgettable experiences."
      aboutTitle="Event-Ready Waste Solutions"
      aboutImage="/assets_export/stock_images/industry-stadiums-events.jpg"
      bulletPoints={bulletPoints}
      faqs={faqs}
    />
  );
}
