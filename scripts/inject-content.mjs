#!/usr/bin/env node
/**
 * Inject hardcoded frontend content into WordPress as CPT posts with ACF fields.
 * Run: node scripts/inject-content.mjs
 */

const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpPost(endpoint, data) {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${AUTH}` },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`WP API error ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

async function createTaxTerms(taxonomy, terms) {
  const created = {};
  for (const term of terms) {
    try {
      const res = await fetch(`${WP_URL}/wp-json/wp/v2/${taxonomy}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${AUTH}` },
        body: JSON.stringify(term),
      });
      const json = await res.json();
      if (json.id) {
        created[term.slug || term.name] = json.id;
        console.log(`  Tax term: ${term.name} => ID ${json.id}`);
      } else if (json.code === 'term_exists') {
        created[term.slug || term.name] = json.data?.term_id || 0;
        console.log(`  Tax term exists: ${term.name}`);
      }
    } catch (e) {
      console.error(`  Failed tax term ${term.name}: ${e.message}`);
    }
  }
  return created;
}

// ============================================================
// TESTIMONIALS
// ============================================================
const testimonials = [
  { quote: "We cut waste spend by 30% in 90 days. One invoice, one contact, 200 locations handled.", author: "Sarah Jenkins", role: "Director of Operations", company: "National Retail Chain", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", context: "homepage" },
  { quote: "No more chasing providers across 15 states. Tenth Rock picks up the phone and the problem is solved.", author: "Michael Ross", role: "Facility Manager", company: "Multi-Site Property Group", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", context: "homepage" },
  { quote: "They showed up same-day after a storm knocked out our compactor. That kind of response is why we stay.", author: "David Chen", role: "Regional VP", company: "Hospitality Management Co.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200", context: "homepage" },
  { quote: "We have worked with Tenth Rock for several years. They have consistently provided outstanding communication, job turnaround, and assistance in any of the unique situations that come up in this industry. If you are looking for a great partner, Tenth Rock is it!", author: "Lane J.", role: "", company: "Sewickley, PA", img: "", context: "vendor-onboarding" },
  { quote: "Working with Tenth Rock is organized and efficient. They don't waste your time with dry runs. They provide clear communication and solid work. They pay when the job is done, unlike other companies that I have to chase down for payment. When they call, I'm ready because I know it will be a smooth process, and they'll take care of me, and I'm proud to do the same for them.", author: "Kenneth L.", role: "", company: "Bel Air, MD", img: "", context: "vendor-onboarding" },
  { quote: "They know how to treat their vendors! I've had my share of headaches with other companies, but Tenth Rock provides everything upfront, and if I have questions mid-job, they're always available to help guide me through things that come up. I'm looking forward to working with them for many years to come.", author: "Jason M.", role: "", company: "Adairsville, GA", img: "", context: "vendor-onboarding" },
  { quote: "Working with Tenth Rock has been great. They truly value their vendors and treat us with the respect we deserve, which is rare with the bigger companies in this industry. It's refreshing to work with a company that appreciates the hard work we put in.", author: "Brian L.", role: "", company: "Spring Hill, FL", img: "", context: "vendor-onboarding" },
  { quote: "Tenth Rock is my top company to work with. As soon as I get a call from them, I immediately am ready to get to work. They make the entire process so simple on the vendor side, making everything run very smoothly from the very first call to completion. They are on point with communication on both vendor and retail sides, which makes it hassle- and stress-free for both parties, making it as smooth as butter. Definitely looking forward to continuing our partnership.", author: "Michael R.", role: "", company: "Chester, VA", img: "", context: "vendor-onboarding" },
  { quote: "Working with Tenth Rock LLC has been an awesome experience. They are easy to work with, maintain great communication, and provide quick payouts. I highly recommend them!", author: "Gustavo M.", role: "", company: "Irving, TX", img: "", context: "vendor-onboarding" },
  { quote: "Working with Tenth Rock has been a highly positive experience. My rep streamlines the process effectively, providing photographs of the required work, which simplifies the bidding process. Upon completion of the work, submitting proof of completion and the invoice leads to prompt payment. I truly appreciate the collaboration with Tenth Rock in addressing their clients' needs.", author: "Katie M.", role: "", company: "House Springs, MO", img: "", context: "vendor-onboarding" },
  { quote: "Tenth Rock is solid. They don't mess around. Jobs are straight to the point. I don't have to guess what they need or chase them down for payment like with other companies. They respect me and my time, and that makes a big difference.", author: "Hector J.", role: "", company: "Chandler, AZ", img: "", context: "vendor-onboarding" },
  { quote: "Tenth Rock makes it easy to do good work. They set you up for success and give you the support you need. Once the job's done, I send proof, and they pay on the same day. Glad to be working with them.", author: "Arvin T.", role: "", company: "Novato, CA", img: "", context: "vendor-onboarding" },
];

// ============================================================
// CASE STUDIES
// ============================================================
const caseStudies = [
  {
    title: "National Coffee Chain", subtitle: "Missed Pickup, Same-Day Stabilization", tag: "Speed",
    description: "A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a team on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.",
    mainImage: "/images/stock/coffee-case-1.jpg", mainImageAlt: "National coffee chain interior with customers and barista at the counter",
    thumbImages: [
      { src: "/images/stock/coffee-case-2.jpg", alt: "Stacked bags of commercial waste piled up after a missed pickup" },
      { src: "/images/stock/coffee-case-3.jpg", alt: "Quiet city street at night where the response was dispatched" },
      { src: "/images/stock/coffee-case-4.jpg", alt: "Brick storefront with large windows after stabilization" },
    ],
    stats: [{ value: "10 min", label: "Response Time" }, { value: "4 hrs", label: "Total Stabilization" }, { value: "0", label: "Customer Impact" }, { value: "1", label: "Call to Resolution" }],
  },
  {
    title: "2024 Florida Hurricanes", subtitle: "Statewide Container Deployment", tag: "Scale",
    description: "Following 2 major hurricanes 13 days apart, open-top dumpsters became unavailable statewide as debris volumes overwhelmed local providers. Tenth Rock activated its nationwide network to source containers from out-of-state markets. Inventory was secured and mobilized across state lines, allowing dumpsters to be strategically deployed throughout affected regions while legacy companies were out of inventory.",
    mainImage: "/images/stock/industry-natural-disasters-storm.jpg", mainImageAlt: "Florida hurricane emergency dumpster deployment by Tenth Rock",
    thumbImages: [
      { src: "/images/stock/hurricane-dumpster-blue.png", alt: "Blue roll-off dumpster filled with hurricane debris staged for deployment" },
      { src: "/images/stock/service-maintenance.jpg", alt: "Multi-site debris coordination" },
      { src: "/images/stock/hurricane-damage-mobile-homes.jpg", alt: "Aerial view of a Florida mobile home community heavily damaged by hurricane debris" },
    ],
    stats: [{ value: "36M+", label: "Cubic Yards of Debris" }, { value: "5", label: "State Inventory Sourcing" }, { value: "60+", label: "Days Sustained" }, { value: "67", label: "Counties Impacted" }],
  },
  {
    title: "Portfolio-Wide", subtitle: "Store Closures Across 8 States", tag: "Multi-Site Execution",
    description: "During a multi-location retail transition, stores required a full cleanout after asset recovery teams completed their work. Remaining fixtures, shelving, signage, and debris still needed to be removed for broom-clean turnover. Tenth Rock coordinated labor crews, hauling, and dumpster deployment across multiple locations, handling minor demolition and final punch-list items that had fallen between vendors.",
    mainImage: "/images/stock/closures-1.jpg", mainImageAlt: "Closed retail storefront with windows papered over during decommissioning",
    thumbImages: [
      { src: "/images/stock/closures-2.jpg", alt: "Vacated retail interior cleared and ready for broom-clean turnover" },
      { src: "/images/stock/closures-3.jpg", alt: "Hauling truck transporting debris across state lines" },
      { src: "/images/stock/closures-4.jpg", alt: "Aerial view of a multi-site commercial coordination effort" },
    ],
    stats: [{ value: "20+", label: "Stores Delivered Broom-Clean" }, { value: "1", label: "Point of Contact" }, { value: "3", label: "Vendor Types Managed" }, { value: "8", label: "State Deployment" }],
  },
  {
    title: "National Retailer", subtitle: "Holiday Overflow Resolution", tag: "Creative Solutions",
    description: "During a high-traffic holiday period, a national retail location experienced packaging overflow spilling into public areas, creating immediate safety and reputational risk. The store requested a 30-yard open-top dumpster late in the evening, but no containers were available. Tenth Rock deployed a stabilization crew within the hour, consolidated overflowing waste into a controlled staging area, and secured a 30-yard roll-off for 7:00 AM delivery. The store opened safely and on schedule.",
    mainImage: "/images/stock/holiday-1.jpg", mainImageAlt: "Modern retail center lit up at dusk during a high-traffic holiday season",
    thumbImages: [
      { src: "/images/stock/holiday-2.jpg", alt: "Crowds of holiday shoppers moving through a store entrance with shopping bags" },
      { src: "/images/stock/holiday-3.jpg", alt: "Back-of-house loading area where overflow waste was staged overnight" },
      { src: "/images/stock/holiday-4.png", alt: "Clean 30-yard open-top roll-off dumpster delivered for next morning" },
    ],
    stats: [{ value: "0", label: "Overtime Staff Required" }, { value: "100%", label: "Risk Mitigated" }, { value: "8 hrs", label: "Total Resolution" }, { value: "$0", label: "Surge Pricing" }],
  },
  {
    title: "Regional Power Outage", subtitle: "Perishable Removal Across Multiple Sites", tag: "Cost Savings",
    description: "Following a regional power outage caused by severe storms, multiple retail locations were left with large volumes of temperature-sensitive products requiring immediate removal to prevent odor, pest activity, and potential health code violations. Tenth Rock mobilized live-load hauling providers, allowing trailers to be staged and loaded immediately as product was removed from refrigeration areas, eliminating the wait for roll-off containers.",
    mainImage: "/images/stock/outage-1.png", mainImageAlt: "Severe storm clouds and lightning rolling over a retail shopping center before a power outage",
    thumbImages: [
      { src: "/images/stock/outage-2.png", alt: "Darkened commercial storefront at night during a regional power outage" },
      { src: "/images/stock/outage-3.png", alt: "Long-haul trailer backed up to a commercial loading dock for live-load hauling" },
      { src: "/images/stock/outage-4.png", alt: "Wide shot of a rain-slicked commercial shopping center after the storm" },
    ],
    stats: [{ value: "1", label: "Point of Contact" }, { value: "0", label: "Health Code Violations" }, { value: "45%", label: "Cost Reduction via Live Loads" }, { value: "1", label: "Consolidated Invoice" }],
  },
  {
    title: "Compactor Failure", subtitle: "Emergency Site Stabilization", tag: "Project Management",
    description: "A big-box retail location experienced a compactor failure after the unit became overfilled, forcing the door open and preventing the provider from safely transporting it. Tenth Rock deployed a stabilization crew to reduce the load, secured the compactor door for safe transport, arranged a same-day open-top dumpster, and coordinated vendors to clean and prepare the compactor area for repair upon return.",
    mainImage: "/images/stock/compactor-1.jpg", mainImageAlt: "Overfilled retail compactor with door jammed open by trapped debris",
    thumbImages: [
      { src: "/images/stock/compactor-2.png", alt: "Same-day open-top dumpster deployed to relieve compactor overflow" },
      { src: "/images/stock/compactor-3.jpg", alt: "Loading dock and trailer staged for vendor coordination" },
      { src: "/images/stock/compactor-4.jpg", alt: "Big-box retail warehouse exterior at sunset where stabilization took place" },
    ],
    stats: [{ value: "4", label: "Vendors Sequenced" }, { value: "1", label: "Point of Contact" }, { value: "0", label: "Health Violations" }, { value: "100%", label: "Real-Time Visibility" }],
  },
];

// ============================================================
// FAQs (from FaqPage.tsx)
// ============================================================
const faqCategories = [
  { slug: "general", name: "General", description: "Get answers to the most common questions about Tenth Rock, our services, and how we operate across the nation.", faqs: [
    { q: "What is Tenth Rock?", a: "Tenth Rock is a nationwide commercial waste management company that provides centralized waste services across 48 states. We simplify waste management for multi-location businesses through a single point of contact and consolidated billing." },
    { q: "What areas do you service?", a: "We provide waste management services across 48 states. Our extensive network of vetted provider partners ensures consistent, reliable coverage whether your locations are in major metropolitan areas or rural communities." },
    { q: "How quickly can you arrange a pickup?", a: "For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night." },
    { q: "What types of waste do you handle?", a: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request through certified partners." },
    { q: "How do I get started with Tenth Rock?", a: "Getting started is simple. Request a service through our website or call us directly. We'll conduct an assessment of your needs, provide a customized proposal, and can typically have service running within days of agreement." },
  ]},
  { slug: "pricing", name: "Pricing & Billing", description: "Understand our transparent pricing model, flexible billing options, and how we help you optimize waste management spend.", faqs: [
    { q: "How does your pricing work?", a: "Our pricing is transparent and competitive. We negotiate rates directly with providers on your behalf, leveraging our national volume to secure the best pricing. You receive one consolidated invoice regardless of how many locations or providers are involved." },
    { q: "Are there long-term contracts?", a: "We believe in earning your business every day. While we offer contract savings for longer commitments, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in." },
    { q: "Can you help reduce our waste management costs?", a: "Absolutely. Clients typically save up to 30% on waste management costs. We achieve this through vendor consolidation, rate negotiation, right-sizing containers, optimizing pickup frequencies, and identifying recycling rebate opportunities." },
    { q: "Do you offer consolidated billing?", a: "Yes, consolidated billing is one of our core offerings. Instead of managing dozens of invoices from different providers, you receive a single, detailed invoice from Tenth Rock that covers all your locations and services." },
    { q: "Are there any hidden fees?", a: "No hidden fees, ever. Our upfront pricing model means you always know exactly what you're paying for. We clearly outline all costs in our proposals and flag any potential surcharges before they occur." },
  ]},
  { slug: "services", name: "Services & Capabilities", description: "Learn more about our full range of commercial waste management services and how they can be tailored to your business needs.", faqs: [
    { q: "Do you handle emergency waste removal?", a: "Yes, emergency waste response is one of our specialties. Whether it's a natural disaster, unexpected overflow, or urgent site cleanup, our team can mobilize resources quickly to get the situation under control." },
    { q: "Can you manage waste for events and stadiums?", a: "Absolutely. We provide comprehensive waste logistics for events of all sizes, from local festivals to major stadium events. This includes pre-event planning, on-site container placement, real-time monitoring, and post-event cleanup." },
    { q: "Do you offer dumpster rentals?", a: "Yes, we offer a full range of dumpster sizes and types for temporary and ongoing needs. From small 10-yard containers for office cleanouts to large 40-yard roll-offs for construction sites, we match the right container to your specific requirements." },
    { q: "What is centralized waste management?", a: "Centralized waste management means having a single partner handle all waste-related services across all your locations. This includes vendor management, billing consolidation, and service coordination, all through one dedicated account manager." },
    { q: "Can you help with store closures and remodels?", a: "Yes, we specialize in project-based waste logistics for store closures, remodels, and relocations. We handle everything from container placement and scheduling to final site cleanup, ensuring your project stays on timeline and on budget." },
  ]},
  { slug: "sustainability", name: "Sustainability", description: "Discover how we help businesses meet their environmental goals through waste diversion and recycling programs.", faqs: [
    { q: "How do you help with sustainability goals?", a: "We get the operation right the first time: optimized container setup for material separation and vendors who execute properly. The result: less landfill debris, better material recovery, and fewer unnecessary hauls." },
    { q: "Do you provide recycling services?", a: "Yes, we offer comprehensive recycling programs for cardboard, plastics, metals, organics, and more. We work with certified recycling partners to maximize your diversion rates." },
    { q: "Can you help us improve landfill diversion rates?", a: "We partner with businesses to improve landfill diversion through operational waste audits and targeted source-separated recycling programs tailored to your portfolio." },
    { q: "Do you handle composting services?", a: "Yes, we coordinate organic waste composting for businesses that generate food waste, yard waste, or other compostable materials. We connect you with local composting facilities to maximize diversion." },
  ]},
];

// ============================================================
// PARTNER LOGOS
// ============================================================
const partnerLogos = [
  { name: "7-Eleven", src: "/images/logos/7-eleven.png" },
  { name: "Arby's", src: "/images/logos/arbys.png" },
  { name: "Best Buy", src: "/images/logos/best-buy.png" },
  { name: "Bonefish Grill", src: "/images/logos/bonefish.png" },
  { name: "BP", src: "/images/logos/bp.png" },
  { name: "Chipotle", src: "/images/logos/chipotle.png" },
  { name: "Circle K", src: "/images/logos/circle-k.png" },
  { name: "Dollar General", src: "/images/logos/dollar-general.png" },
  { name: "DoorDash", src: "/images/logos/doordash.png" },
  { name: "Dunkin'", src: "/images/logos/dunkin.png" },
  { name: "Five Below", src: "/images/logos/five-below.png" },
  { name: "Food Lion", src: "/images/logos/food-lion.png" },
  { name: "GNC", src: "/images/logos/gnc.png" },
  { name: "Goodyear", src: "/images/logos/goodyear.png" },
  { name: "H-E-B", src: "/images/logos/heb.png" },
  { name: "KFC", src: "/images/logos/kfc.png" },
  { name: "Kroger", src: "/images/logos/kroger.png" },
  { name: "Maggiano's", src: "/images/logos/maggianos.png" },
  { name: "McDonald's", src: "/images/logos/mcdonalds.png" },
  { name: "Red Lobster", src: "/images/logos/red-lobster.png" },
];

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log(`\nWordPress URL: ${WP_URL}`);
  console.log('='.repeat(60));

  // --- 1. Create taxonomy terms ---
  console.log('\n--- Creating FAQ Category terms ---');
  const faqCatTerms = await createTaxTerms('faq_category', faqCategories.map(c => ({ name: c.name, slug: c.slug, description: c.description })));

  console.log('\n--- Creating Testimonial Context terms ---');
  const testCtxTerms = await createTaxTerms('testimonial_context', [
    { name: 'Homepage', slug: 'homepage' },
    { name: 'Vendor Onboarding', slug: 'vendor-onboarding' },
  ]);

  // --- 2. Testimonials ---
  console.log('\n--- Creating Testimonials ---');
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    const ctxId = testCtxTerms[t.context];
    try {
      const post = await wpPost('tr_testimonial', {
        title: t.author,
        status: 'publish',
        testimonial_context: ctxId ? [ctxId] : [],
        acf: {
          quote: t.quote,
          author_name: t.author,
          author_role: t.role,
          author_company: t.company,
          author_photo: t.img || '',
          star_rating: 5,
          display_order: i,
        },
      });
      console.log(`  OK: ${t.author} => ID ${post.id}`);
    } catch (e) {
      console.error(`  FAIL: ${t.author}: ${e.message}`);
    }
  }

  // --- 3. Case Studies ---
  console.log('\n--- Creating Case Studies ---');
  for (let i = 0; i < caseStudies.length; i++) {
    const cs = caseStudies[i];
    try {
      const post = await wpPost('tr_case_study', {
        title: cs.title,
        status: 'publish',
        acf: {
          subtitle: cs.subtitle,
          tag: cs.tag,
          description: cs.description,
          main_image: cs.mainImage,
          main_image_alt: cs.mainImageAlt,
          thumb_images: cs.thumbImages.map(t => ({ thumb_image: t.src, thumb_alt: t.alt })),
          stats: cs.stats.map(s => ({ stat_value: s.value, stat_label: s.label })),
          display_order: i,
        },
      });
      console.log(`  OK: ${cs.title} => ID ${post.id}`);
    } catch (e) {
      console.error(`  FAIL: ${cs.title}: ${e.message}`);
    }
  }

  // --- 4. FAQs ---
  console.log('\n--- Creating FAQs ---');
  let faqOrder = 0;
  for (const cat of faqCategories) {
    const catId = faqCatTerms[cat.slug];
    for (const faq of cat.faqs) {
      try {
        const post = await wpPost('tr_faq', {
          title: faq.q,
          status: 'publish',
          faq_category: catId ? [catId] : [],
          acf: {
            answer: faq.a,
            display_order: faqOrder++,
          },
        });
        console.log(`  OK: ${faq.q.slice(0, 50)}... => ID ${post.id}`);
      } catch (e) {
        console.error(`  FAIL: ${faq.q.slice(0, 50)}: ${e.message}`);
      }
    }
  }

  // --- 5. Partner Logos ---
  console.log('\n--- Creating Partner Logos ---');
  for (let i = 0; i < partnerLogos.length; i++) {
    const logo = partnerLogos[i];
    try {
      const post = await wpPost('tr_partner_logo', {
        title: logo.name,
        status: 'publish',
        acf: {
          logo_image: logo.src,
          company_url: '',
          display_order: i,
        },
      });
      console.log(`  OK: ${logo.name} => ID ${post.id}`);
    } catch (e) {
      console.error(`  FAIL: ${logo.name}: ${e.message}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Content injection complete!');
}

main().catch(console.error);
