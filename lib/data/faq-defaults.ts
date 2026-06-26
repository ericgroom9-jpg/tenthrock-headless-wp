export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  description?: string;
  faqs: FaqItem[];
}

/**
 * Hardcoded FAQ content used as the fallback when WordPress returns no FAQs.
 * Lives in a plain (non-"use client") module so it can be imported as real
 * data by both the FAQ server page (for JSON-LD) and the client FaqPage
 * component. Importing it from a "use client" module would turn it into a
 * client-reference stub on the server, not the actual array.
 */
export const defaultFaqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    description: "Get answers to the most common questions about Tenth Rock, our services, and how we operate across the nation.",
    faqs: [
      {
        question: "What is Tenth Rock?",
        answer: "Tenth Rock is a nationwide commercial waste management company that provides centralized waste services across 48 states. We simplify waste management for multi-location businesses through a single point of contact and consolidated billing."
      },
      {
        question: "What areas do you service?",
        answer: "We provide waste management services across 48 states. Our extensive network of vetted provider partners ensures consistent, reliable coverage whether your locations are in major metropolitan areas or rural communities."
      },
      {
        question: "How quickly can you arrange a pickup?",
        answer: "For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night."
      },
      {
        question: "What types of waste do you handle?",
        answer: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request through certified partners."
      },
      {
        question: "How do I get started with Tenth Rock?",
        answer: "Getting started is simple. Request a service through our website or call us directly. We'll conduct an assessment of your needs, provide a customized proposal, and can typically have service running within days of agreement."
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Billing",
    description: "Understand our transparent pricing model, flexible billing options, and how we help you optimize waste management spend.",
    faqs: [
      {
        question: "How does your pricing work?",
        answer: "Our pricing is transparent and competitive. We negotiate rates directly with providers on your behalf, leveraging our national volume to secure the best pricing. You receive one consolidated invoice regardless of how many locations or providers are involved."
      },
      {
        question: "Are there long-term contracts?",
        answer: "We believe in earning your business every day. While we offer contract savings for longer commitments, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."
      },
      {
        question: "Can you help reduce our waste management costs?",
        answer: "Absolutely. Clients typically save up to 30% on waste management costs. We achieve this through vendor consolidation, rate negotiation, right-sizing containers, optimizing pickup frequencies, and identifying recycling rebate opportunities."
      },
      {
        question: "Do you offer consolidated billing?",
        answer: "Yes, consolidated billing is one of our core offerings. Instead of managing dozens of invoices from different providers, you receive a single, detailed invoice from Tenth Rock that covers all your locations and services."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees, ever. Our upfront pricing model means you always know exactly what you're paying for. We clearly outline all costs in our proposals and flag any potential surcharges before they occur."
      },
    ],
  },
  {
    id: "services",
    label: "Services & Capabilities",
    description: "Learn more about our full range of commercial waste management services and how they can be tailored to your business needs.",
    faqs: [
      {
        question: "Do you handle emergency waste removal?",
        answer: "Yes, emergency waste response is one of our specialties. Whether it's a natural disaster, unexpected overflow, or urgent site cleanup, our team can mobilize resources quickly to get the situation under control."
      },
      {
        question: "Can you manage waste for events and stadiums?",
        answer: "Absolutely. We provide comprehensive waste logistics for events of all sizes, from local festivals to major stadium events. This includes pre-event planning, on-site container placement, real-time monitoring, and post-event cleanup."
      },
      {
        question: "Do you offer dumpster rentals?",
        answer: "Yes, we offer a full range of dumpster sizes and types for temporary and ongoing needs. From small 10-yard containers for office cleanouts to large 40-yard roll-offs for construction sites, we match the right container to your specific requirements."
      },
      {
        question: "What is centralized waste management?",
        answer: "Centralized waste management means having a single partner handle all waste-related services across all your locations. This includes vendor management, billing consolidation, and service coordination, all through one dedicated account manager."
      },
      {
        question: "Can you help with store closures and remodels?",
        answer: "Yes, we specialize in project-based waste logistics for store closures, remodels, and relocations. We handle everything from container placement and scheduling to final site cleanup, ensuring your project stays on timeline and on budget."
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    description: "Discover how we help businesses meet their environmental goals through waste diversion and recycling programs.",
    faqs: [
      {
        question: "How do you help with sustainability goals?",
        answer: "We get the operation right the first time: optimized container setup for material separation and vendors who execute properly. The result: less landfill debris, better material recovery, and fewer unnecessary hauls."
      },
      {
        question: "Do you provide recycling services?",
        answer: "Yes, we offer comprehensive recycling programs for cardboard, plastics, metals, organics, and more. We work with certified recycling partners to maximize your diversion rates."
      },
      {
        question: "Can you help us improve landfill diversion rates?",
        answer: "We partner with businesses to improve landfill diversion through operational waste audits and targeted source-separated recycling programs tailored to your portfolio."
      },
      {
        question: "Do you handle composting services?",
        answer: "Yes, we coordinate organic waste composting for businesses that generate food waste, yard waste, or other compostable materials. We connect you with local composting facilities to maximize diversion."
      },
    ],
  },
];
