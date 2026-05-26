#!/usr/bin/env node
/**
 * Create / update the 14 headless page-template WordPress pages and inject
 * each template's hardcoded frontend defaults into ACF.
 *
 * Idempotent: looks pages up by slug. POST if missing, PATCH if present.
 *
 * Usage:  node scripts/create-template-pages.mjs [slug...]
 *   Pass one or more slugs to limit the run; otherwise processes all 14.
 */

const WP_API_URL = process.env.WP_API_URL;
const USER = process.env.preview_user_un;
const PASS = process.env.preview_user_pass;
if (!WP_API_URL || !USER || !PASS) {
  console.error('Missing env: WP_API_URL, preview_user_un, preview_user_pass');
  process.exit(1);
}
const baseUrl = WP_API_URL.replace(/\/graphql\/?$/, '');
const auth = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64');
const TPL = (slug) => slug;

// Pull static legal HTML out of lib/legal-content.ts (so we don't duplicate it here).
import { readFileSync } from 'node:fs';
const legalSrc = readFileSync(new URL('../lib/legal-content.ts', import.meta.url), 'utf8');
function extractConst(name) {
  const m = legalSrc.match(new RegExp(`export const ${name}\\s*=\\s*\`([\\s\\S]*?)\`;`));
  if (!m) throw new Error(`Could not extract ${name} from lib/legal-content.ts`);
  return m[1];
}
const LEGAL_CONTENT = {
  PRIVACY_POLICY_HTML: extractConst('PRIVACY_POLICY_HTML'),
  TERMS_OF_SERVICE_HTML: extractConst('TERMS_OF_SERVICE_HTML'),
};

async function wp(method, endpoint, body) {
  const url = `${baseUrl}/wp-json${endpoint}`;
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: auth },
  };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} → ${res.status}: ${typeof json === 'string' ? json.slice(0, 400) : JSON.stringify(json).slice(0, 400)}`);
  }
  return json;
}

async function findBySlug(slug) {
  const list = await wp('GET', `/wp/v2/pages?slug=${encodeURIComponent(slug)}&status=publish,draft,private&per_page=1`);
  return Array.isArray(list) && list.length ? list[0] : null;
}

async function upsertPage({ slug, title, template, acf }) {
  let existing = await findBySlug(slug);
  if (existing) {
    console.log(`  ✏️  PATCH page #${existing.id} (${slug})`);
    const updated = await wp('POST', `/wp/v2/pages/${existing.id}`, {
      title, slug, status: 'publish', template, acf,
    });
    return updated;
  }
  console.log(`  ➕  CREATE page (${slug})`);
  const created = await wp('POST', `/wp/v2/pages`, {
    title, slug, status: 'publish', template, acf,
  });
  return created;
}

// ───────────────────────── ACF PAYLOADS ─────────────────────────
// Mirrors the hardcoded defaults inside each Client component so the
// frontend renders identically whether ACF is filled or empty.

const PHONE = '727.510.5454';
const PHONE_LINK = 'tel:+17275105454';

const PAGES = [
  {
    slug: 'home',
    title: 'Home',
    template: TPL('template-homepage'),
    acf: {
      hero_tagline: 'Nationwide Commercial Waste Management',
      hero_heading: 'Centralized Waste Logistics for Businesses at Scale',
      hero_subheading: 'Coordinated execution for complex projects, multi-site operations, and urgent demands across 48 states.',
      hero_video: '/videos/hero-bg.mp4',
      hero_cta_label: 'Request A Service',
      hero_cta_link: '/request-a-service',
      hero_secondary_label: 'See How It Works',
      hero_secondary_link: '#process',
      simple_numbers: [
        { value: '48', suffix: '', label: 'States Serviced' },
        { value: '5', suffix: 'K+', label: 'Locations Managed' },
        { value: '24', suffix: '/7', label: 'Emergency Support' },
      ],
      services_tagline: 'Our Services',
      services_heading: 'Waste Management Services',
      services_subtitle: 'Four core services. One point of contact. Dispatched across 48 states.',
      services_categories: [
        {
          title: 'Emergency Waste Removal',
          description: 'Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.',
          link: '/emergency-waste-removal',
          sub_items: [
            { label: 'Product & Perishable Removal', description: 'Perishable bulk pickup and spoiled product disposal after cold storage failure or refrigeration failure events. After-hours waste removal available.' },
            { label: 'Temporary Capacity & Stabilization', description: 'Compactor failure response and urgent bulk waste removal when missed pickups or waste overflow disrupts operations.' },
            { label: 'Unplanned Cleanouts & Debris', description: 'Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency situations.' },
          ],
        },
        {
          title: 'Specialized Project Logistics',
          description: 'End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.',
          link: '/specialized-project-logistics',
          sub_items: [
            { label: 'Site Closures & Remodels', description: 'Site decommissioning, post-construction cleanout, and retail remodel waste management for portfolio-wide site turnover.' },
            { label: 'Events & Stadiums', description: 'Event waste logistics and stadium waste coordination for multi-day event waste support at fairs, festivals, and venues.' },
            { label: 'Natural Disasters', description: 'Rapid response for storm debris removal and hurricane debris cleanup with emergency roll-off rental and multi-site recovery support.' },
          ],
        },
        {
          title: 'Dumpster Rentals',
          description: 'Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow.',
          link: '/dumpsters-containers',
          sub_items: [
            { label: 'On-Demand Service', description: 'Same-day dumpster rental and emergency roll-off service with same-day swaps. Temporary dumpster deployment, no long-term commitments.' },
            { label: 'Multiple Sizes', description: 'Commercial-grade open-top dumpsters in 20 yard, 30 yard, and 40 yard roll-off sizes matched to your project scope.' },
            { label: 'Recycling & Specialty', description: 'Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling.' },
          ],
        },
        {
          title: 'Waste Advisory',
          description: 'Retained waste management advisory providing hands-on program rollout, vendor training, performance optimization, and portfolio-wide execution management.',
          link: '/waste-operations-advisory',
          sub_items: [
            { label: 'Assessments & Roadmaps', description: 'Portfolio-wide waste strategy and operational waste audit with cost-control optimization across your multi-site waste roadmap.' },
            { label: 'Standards, SOPs & Training', description: 'Waste management SOP development and multi-site vendor training framework with vendor performance protocols.' },
            { label: 'Ongoing Advisory', description: 'Retained advisory for waste workflow optimization, multi-site execution strategy, and ongoing program improvement built for scale.' },
          ],
        },
      ],
      why_us_heading: 'More Reasons You\u2019ll Love Us',
      why_us_image: '/images/stock/about-tampa-skyline.jpg',
      why_us_image_alt: 'Tenth Rock operations across 48 states',
      why_us_features: [
        { title: 'Dedicated Point of Contact', content: 'One person to handle everything. No call centers, no runarounds, just answers.', icon_name: 'Headset' },
        { title: 'Job Completion Proof', content: 'Visual confirmation for every job we complete, available instantly.', icon_name: 'CheckCircle2' },
        { title: 'Local Crews, National Reach', content: 'Vetted local crews across 48 states. You get the responsiveness of a local provider with the accountability of a national partner.', icon_name: 'MapPin' },
        { title: 'Real Cost Savings', content: 'Clients typically save up to 30% through vendor consolidation, rate negotiation, and right-sized service.', icon_name: 'Truck' },
      ],
      why_us_cta_label: 'Request A Service',
      why_us_cta_link: '/request-a-service',
      why_us_secondary_label: 'View Our Services',
      why_us_secondary_link: '/commercial-waste',
      faq_tagline: 'Common Questions',
      faq_heading: 'Frequently Asked Questions',
      faq_subtitle: "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.",
      faq_items: [
        { question: 'How Quickly Can You Arrange a Pickup?', answer: 'For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night.' },
        { question: 'Do You Service Multiple Locations Nationwide?', answer: 'Yes, we operate across 48 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice.' },
        { question: 'What Types of Waste Do You Handle?', answer: 'We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request.' },
        { question: 'Are There Long-Term Contracts?', answer: "We believe in earning your business every day. While we offer contract savings, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in." },
        { question: 'How Do You Help With Sustainability Goals?', answer: 'Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials.' },
      ],
      faq_cta_text: 'Still Have Questions?',
      faq_cta_label: 'Contact Us',
      faq_cta_link: '/contact',
    },
  },
  {
    slug: 'about',
    title: 'About Us',
    template: TPL('template-about'),
    acf: {
      story_tagline: 'Our Story',
      story_heading: 'Built From the Ground Up to Fix a Broken Industry',
      story_body: `Tenth Rock is a nationwide commercial waste logistics and advisory company built specifically for the complexity of multi-location operations.

Founded by operators who have seen firsthand where waste coordination breaks down, we were built to solve the inefficiencies that occur when too many moving pieces go unmanaged. That boots-on-the-ground experience positions us as both an execution partner and a trusted advisor for organizations that need a team that has experienced these breakdowns from the inside.

We work through a vetted network of certified service partners across 48 states, delivering consistent execution and single-point accountability across every location, scope, and timeline. Emergency waste removal, specialized project logistics, container management, and waste operations advisory, all handled with the precision that enterprise teams depend on to maintain operational continuity.

Our network provides the infrastructure, and the expertise behind it drives the outcome. We are built to respond when urgency demands it and plan ahead when the opportunity exists, giving clients a partner capable of both. This range enables organizations to move beyond reactive waste management and into a more strategic posture, identifying inefficiencies, increasing cost visibility, and building waste operations that scale with their business.`,
      story_image: '/images/stock/about-our-story-clearwater-beach.jpg',
      story_image_alt: 'Aerial view of Clearwater Beach with white sand, turquoise water, hotels, and marina, near Tenth Rock headquarters',
      core_heading: 'At Our Core',
      core_values: [
        { title: 'Innovative Problem Solving', description: 'We move beyond one-size-fits-all mentalities. Creative problem solving is in our DNA, allowing us to tackle the complex challenges other providers avoid. If a traditional path to resolution does not exist, we develop one.' },
        { title: 'Partnership and Transparent Communication', description: 'Built on professional respect and family values, we treat your operations as our own. We eliminate friction with a single point of contact and real-time updates to ensure every stakeholder thrives through total accountability.' },
        { title: 'Operational Leadership and Responsibility', description: 'Leading is about getting the job done. Our team approaches every challenge with a front-row mentality, mobilizing rapidly to maintain your facility\u2019s uptime. Responsibility is our baseline, utilizing streamlined logistics to support a circular economy.' },
      ],
      core_image: '/images/stock/about-tampa-skyline.jpg',
      core_image_alt: 'Downtown Tampa, Florida skyline along the waterway near Tenth Rock headquarters',
      core_cta_label: 'Book a Call',
      core_cta_link: '/book-a-call',
      core_secondary_label: 'View Our Services',
      core_secondary_link: '/commercial-waste',
      associations_heading: 'Associations',
      associations_logos: [
        { logo: '/images/associations/swana.png', alt_text: 'SWANA - Solid Waste Association of North America' },
        { logo: '/images/associations/nawbo.png', alt_text: 'NAWBO - National Association of Women Business Owners' },
        { logo: '/images/associations/ifma.png', alt_text: 'IFMA - International Facility Management Association' },
        { logo: '/images/associations/icsc.png', alt_text: 'ICSC' },
      ],
      community_heading: 'In the Community',
      community_body: `Real change begins at the local level. As a nationwide company, Tenth Rock is committed to sustainability and protecting the natural resources of the communities where we live and work. We believe our responsibility extends beyond the job site to include the health and longevity of the neighborhoods we serve.

We are proud to support organizations that drive meaningful impact and foster environmental awareness. By providing waste management expertise and logistical resources for local initiatives, we help reduce litter, restore natural habitats, and educate the community on sustainable practices. Tenth Rock provides more than just waste solutions; we provide the support and visibility needed to build more inclusive and supportive communities.`,
      community_image: '/images/stock/community-park-sunset.jpg',
      community_image_alt: 'Families enjoying a sunny afternoon at a community park',
      community_cta_label: 'Learn More',
      community_cta_link: '/contact',
      community_secondary_label: PHONE,
      community_secondary_link: PHONE_LINK,
    },
  },
  {
    slug: 'commercial-waste',
    title: 'Commercial Waste Services',
    template: TPL('template-commercial-waste'),
    acf: {
      hero_heading: 'Waste Management Services',
      hero_subheading: 'Emergency response, project logistics, container rentals, and waste program advisory for multi-location operators. One point of contact, 48 states.',
      hero_image: '/images/stock/service-centralized-program.jpg',
      hero_cta_label: 'Request A Service',
      hero_cta_link: '/request-a-service',
      hero_phone_label: PHONE,
      hero_phone_link: PHONE_LINK,
      process_tagline: 'Our Process',
      process_heading: 'How It Works',
      process_subtitle: 'A simple, transparent process designed to get your problem solved fast.',
      process_steps: [
        { number: '01', title: 'You Call Us', description: 'When your business faces a waste crisis, call us. Our team of experts is on standby, ready to help 24/7.' },
        { number: '02', title: 'We Assemble Your Team', description: 'You get a dedicated project manager as your single point of contact who will assess the situation, coordinate resources, and keep you informed every step of the way.' },
        { number: '03', title: 'We Quote the Job', description: 'Your project manager provides a prompt, no-obligation quote. No hidden fees or unexpected charges, just a single flat rate for the entire project.' },
        { number: '04', title: 'We Handle the Rest', description: 'Once you give the green light, our team springs into action. Your project manager stays on call with real-time updates whenever you need them.' },
        { number: '05', title: 'Problem Solved', description: 'We resolve your waste issue quickly and efficiently so you can avoid costly fines, downtime, and negative attention. Your business stays on track.' },
      ],
      zip_tagline: 'Service Availability',
      zip_heading: 'Check If We Service ',
      zip_heading_highlight: 'Your Area',
      zip_subtitle: 'Enter your zip code below to instantly see if our network of local vendors covers your location.',
      zip_placeholder: 'Enter Zip Code',
      zip_button: 'Check Now',
      case_study_tag: 'Speed',
      case_study_heading: 'National Coffee Chain',
      case_study_subheading: 'Missed Pickup, Same-Day Stabilization',
      case_study_body: 'A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a local crew on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.',
      case_study_main_image: '/images/stock/case-study-main.jpg',
      case_study_thumbs: [
        { image: '/images/stock/case-study-thumb1.jpg', alt: 'Commercial waste operations detail 1' },
        { image: '/images/stock/case-study-thumb2.jpg', alt: 'Commercial waste operations detail 2' },
        { image: '/images/stock/case-study-thumb3.jpg', alt: 'Commercial waste operations detail 3' },
      ],
      case_study_stats: [
        { value: '10 min', label: 'Response Time' },
        { value: '4 hrs', label: 'Total Stabilization' },
        { value: '0', label: 'Customer Impact' },
        { value: '1', label: 'Call to Resolution' },
      ],
      case_study_cta_label: 'Request A Service',
      case_study_cta_link: '/request-a-service',
      faq_tagline: 'Common Questions',
      faq_heading: 'Frequently Asked Questions',
      faq_subtitle: "Everything you need to know about our commercial waste services. Can't find the answer you're looking for? Reach out to our team.",
      faqs: [
        { question: 'What types of commercial waste do you handle?', answer: 'We handle all types of commercial waste including general refuse, recyclables, construction debris, hazardous materials (with proper certification), and specialized industry waste streams.' },
        { question: 'How quickly can you respond to an emergency?', answer: 'Our emergency response team is available 24/7 and can typically arrive on-site within 2-4 hours for urgent situations in our service areas.' },
        { question: 'Do you provide documentation for every job?', answer: 'Yes, we provide comprehensive documentation for every completed job.' },
        { question: 'What areas do you service?', answer: 'We provide nationwide coverage with regional hubs strategically located to serve major metropolitan areas and surrounding regions efficiently.' },
        { question: 'Can you handle multi-location contracts?', answer: 'Absolutely. We specialize in enterprise-wide waste management programs and can coordinate services across multiple locations with centralized reporting and billing.' },
      ],
      faq_cta_text: 'Still Have Questions?',
      faq_cta_label: 'Contact Us',
      faq_cta_link: '/contact',
    },
  },
  {
    slug: 'who-we-serve',
    title: 'Who We Serve',
    template: TPL('template-who-we-serve'),
    acf: {
      hero_heading: 'Who We Serve',
      hero_subheading: 'From retail chains to stadiums, we partner with businesses that need reliable, scalable waste solutions across multiple locations.',
      hero_image: '/images/stock/hero-skyscrapers.jpg',
      hero_cta_label: 'Request A Service',
      hero_cta_link: '/request-a-service',
      hero_phone_label: PHONE,
      hero_phone_link: PHONE_LINK,
    },
  },
  {
    slug: 'our-process',
    title: 'Our Process',
    template: TPL('template-our-process'),
    acf: {
      hero_heading: 'Our Process',
      hero_subheading: "Five steps from first call to job complete. No runarounds, no surprises. Here's exactly how every Tenth Rock project runs.",
      hero_image: '/images/stock/hero-skyscrapers.jpg',
      hero_cta_label: 'Request A Service',
      hero_cta_link: '/request-a-service',
      hero_phone_label: PHONE,
      hero_phone_link: PHONE_LINK,
    },
  },
  {
    slug: 'locations',
    title: 'Where We Serve',
    template: TPL('template-locations'),
    acf: {
      hero_heading: 'Whenever You Need Us',
      hero_subheading: 'Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal.',
      hero_image: '/images/stock/locations-hero-modern-city.jpg',
      hero_cta_label: 'Request A Service',
      hero_cta_link: '/request-a-service',
      hero_phone_label: PHONE,
      hero_phone_link: PHONE_LINK,
      areas_heading: 'Nationwide Coverage. Local Support.',
      areas_subtitle: 'Select a state to see available services and local coverage in your area.',
    },
  },
  {
    slug: 'join-our-network',
    title: 'Join Our Network',
    template: TPL('template-join-our-network'),
    acf: {
      hero_heading: 'Join Our Network',
      hero_subheading: 'We partner with experienced haulers and service providers to support commercial waste operations nationwide. Access opportunities backed by organized workflows, clear communication, and fast, reliable payment.',
      hero_image: '/images/stock/hero-skyscrapers.jpg',
      hero_cta_label: 'Get Started',
      hero_phone_label: PHONE,
      hero_phone_link: PHONE_LINK,
      logos_headline: 'Trusted by leading national brands we serve',
      benefits_tagline: 'Vendor Benefits',
      benefits_heading: 'Why Providers Partner With Us',
      benefits_subtitle: 'Access a reliable, high-volume stream of commercial projects with a dedicated logistics partner that prioritizes clear communication and efficient site coordination.',
      benefits_cards: [
        { icon_name: 'DollarSign', title: 'Same-Day Payment', description: "Complete a job, get paid the same day. No net-30 terms. No invoice follow-ups. No waiting to get what you've earned." },
        { icon_name: 'Globe', title: 'Access the Network', description: 'We work with hotel chains, national retailers, property managers, and multi-location operators nationwide. No pitching, no selling. Just show up, execute, and get paid.' },
        { icon_name: 'Headphones', title: 'A Team in Your Corner', description: "From dispatch to documentation, your dedicated Success Manager is there every step of the way. No matter what comes up on a project, you're never navigating it alone." },
        { icon_name: 'Ban', title: 'No Sales. Ever.', description: 'Inside the Tenth Rock ecosystem, the selling is already done. No proposals, no follow-ups, no client-facing anything, just real work without the overhead of chasing it.' },
        { icon_name: 'Monitor', title: 'Powered by TRAC\u2122', description: "Tenth Rock's proprietary platform automates every step of the job process; tracking, documentation, and photo management all in one place, so every job closes clean, and your work speaks for itself." },
        { icon_name: 'TrendingUp', title: 'Grow Locally. Backed Nationally.', description: 'Your community is your territory. Rock brings the national relationships, the operational backbone, and an industry reputation that opens doors in your local market.' },
      ],
      how_heading: 'How It Works',
      how_subtitle: 'Four Steps To Your First Opportunity',
      how_steps: [
        { number: '01', title: 'Submit Your Email', description: "Enter your email below, and we'll send your full onboarding application straight to your inbox." },
        { number: '02', title: 'Complete Your Application', description: "Tell us about your operation, what you do, where you work, and what you're equipped to handle." },
        { number: '03', title: 'Get Reviewed & Approved', description: 'Our team reviews your application and reaches out to finalize your Certified Service Partner status.' },
        { number: '04', title: 'Start Receiving Jobs', description: "Once approved, you're in the network, and your dedicated Success Manager will reach out when opportunities arise in your area." },
      ],
      stats_heading: 'A Growing Network Built on Performance',
      stats_bullets: [
        { text: 'Vetted vendor partners across 48 states providing local service with national accountability.' },
        { text: 'Commercial waste, roll-off hauling, junk removal, and specialty disposal jobs dispatched daily.' },
        { text: 'Expanding into new markets every month. Early partners in underserved areas get first priority on incoming work.' },
      ],
      stats_numbers: [
        { value: '48', label: 'States Covered' },
        { value: '5K+', label: 'Locations Managed' },
        { value: '24/7', label: 'Dispatch Center' },
      ],
      email_tagline: 'Get Started',
      email_heading: 'Ready to Join?',
      email_subtitle: 'Enter your email below and we will send you the vendor onboarding form. It takes about 10 minutes to complete.',
      email_placeholder: 'Your business email',
      email_submit_label: 'Send Me the Form',
      email_disclaimer: 'No spam. We will only send you the onboarding link.',
      email_success_heading: 'Check Your Inbox',
      email_success_message: 'We sent the vendor onboarding link to your email. Follow the link to complete your application and start receiving jobs.',
    },
  },
  {
    slug: 'faq',
    title: 'FAQ',
    template: TPL('template-faq'),
    acf: {
      hero_tagline: 'Frequently Asked Questions',
      hero_heading: 'Have Questions? ',
      hero_heading_highlight: "We've Got Answers",
      hero_subtitle: 'Find clear, straightforward answers to the most common questions about our commercial waste services, pricing, and operations.',
      hero_image: '/images/stock/hero-skyscrapers.jpg',
      cta_text: 'Still have questions?',
      cta_label: 'Contact Us',
      cta_link: '/contact',
    },
  },
  {
    slug: 'contact',
    title: 'Contact',
    template: TPL('template-contact'),
    acf: {
      page_heading: 'Contact Us',
      emergency_text: 'If you are experiencing a trash emergency and need immediate assistance, please call us at',
      emergency_phone: PHONE,
      emergency_phone_link: 'tel:7275105454',
      vendor_text: 'If you are interested in becoming a Preferred Vendor,',
      vendor_link_text: 'visit here',
      vendor_link_url: '/join-our-network',
      card_heading: 'Contact',
      phone: PHONE,
      phone_link: 'tel:7275105454',
      email: 'hello@tenthrock.com',
      email_link: 'mailto:hello@tenthrock.com',
      hours: [
        { line: 'Monday - Friday: 7am - 6pm ET' },
        { line: 'Saturday: 7am - 3pm ET' },
        { line: 'Sunday: 9am - 5pm ET' },
      ],
      form_heading: 'Request a Quote',
      form_subtitle: "Fill out the form below and we'll get back to you shortly.",
      interest_options: [
        { value: 'emergency-waste-removal', label: 'Emergency Waste Removal' },
        { value: 'specialized-project-logistics', label: 'Specialized Project Logistics' },
        { value: 'dumpsters-containers', label: 'Dumpster Rentals' },
        { value: 'waste-operations-advisory', label: 'Waste Advisory' },
        { value: 'other', label: 'Other' },
      ],
      submit_label: 'Submit Request',
      privacy_text: 'I accept the',
      privacy_link_text: 'Privacy Policy',
      privacy_link_url: '/privacy-policy',
    },
  },
  {
    slug: 'request-a-service',
    title: 'Request A Service',
    template: TPL('template-request-a-service'),
    acf: {
      page_heading: 'Request A Service',
      emergency_text: 'If you are experiencing a trash emergency and need immediate assistance, please call us at',
      emergency_phone: PHONE,
      emergency_phone_link: 'tel:7275105454',
      vendor_text: 'If you are interested in becoming a Preferred Vendor,',
      vendor_link_text: 'visit here',
      vendor_link_url: '/join-our-network',
      card_heading: 'Contact',
      phone: PHONE,
      phone_link: 'tel:7275105454',
      email: 'hello@tenthrock.com',
      email_link: 'mailto:hello@tenthrock.com',
      hours: [
        { line: 'Monday - Friday: 7am - 6pm ET' },
        { line: 'Saturday: 7am - 3pm ET' },
        { line: 'Sunday: 9am - 5pm ET' },
      ],
      form_heading: 'Request A Service',
      form_subtitle: "Fill out the form below and we'll get back to you shortly.",
      interest_options: [
        { value: 'emergency-waste-removal', label: 'Emergency Waste Removal' },
        { value: 'specialized-project-logistics', label: 'Specialized Project Logistics' },
        { value: 'dumpsters-containers', label: 'Dumpster Rentals' },
        { value: 'waste-operations-advisory', label: 'Waste Advisory' },
        { value: 'other', label: 'Other' },
      ],
      message_label: 'What can we help you with?',
      submit_label: 'Submit',
      privacy_text: 'I accept the',
      privacy_link_text: 'Privacy Policy',
      privacy_link_url: '/privacy-policy',
    },
  },
  {
    slug: 'book-a-call',
    title: 'Book A Call',
    template: TPL('template-book-a-call'),
    acf: {
      heading: 'Book A Call',
      expectations: [
        { text: 'Personalized waste strategy review for your business' },
        { text: 'Transparent pricing with no hidden fees' },
        { text: 'A dedicated account manager assigned to your project' },
      ],
      description: "Schedule a quick call with one of our waste management consultants. We'll learn about your specific needs and put together a customized plan that saves you time and money, with no obligation.",
      calendar_fallback_heading: 'Calendar Loading',
      calendar_fallback_text: `Our scheduling tool will appear here. If it doesn't load, call us directly at ${PHONE} to book your consultation.`,
      skip_text: 'Already booked or prefer to skip?',
      continue_label: 'Continue',
      continue_link: '/thank-you',
    },
  },
  {
    slug: 'thank-you',
    title: 'Thank You',
    template: TPL('template-thank-you'),
    acf: {
      heading: 'Thank You',
      subtitle: "Your request has been received. We're excited to help streamline your waste management.",
      steps_heading: 'What Happens Next',
      next_steps: [
        { text: 'A team member will review your request and reach out within 1 business day.' },
        { text: "We'll schedule a brief discovery call to understand your needs in detail." },
        { text: "You'll receive a customized waste management proposal with transparent pricing." },
      ],
      cta_label: 'Back to Home',
      cta_link: '/',
      secondary_label: 'Explore Our Services',
      secondary_link: '/commercial-waste',
    },
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    template: TPL('template-privacy-policy'),
    acf: {
      heading: 'Privacy Policy',
      body_content: LEGAL_CONTENT.PRIVACY_POLICY_HTML,
    },
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    template: TPL('template-terms-of-service'),
    acf: {
      heading: 'Terms of Service',
      body_content: LEGAL_CONTENT.TERMS_OF_SERVICE_HTML,
    },
  },
];

(async () => {
  const onlySlugs = process.argv.slice(2);
  const targets = onlySlugs.length ? PAGES.filter(p => onlySlugs.includes(p.slug)) : PAGES;
  console.log(`📄 Processing ${targets.length} page(s)…\n`);

  for (const page of targets) {
    console.log(`▶︎ ${page.slug}  (${page.template})`);
    try {
      const result = await upsertPage(page);
      const acfReturned = result.acf;
      const isEmpty = Array.isArray(acfReturned) && acfReturned.length === 0;
      const acfCount = acfReturned && typeof acfReturned === 'object' && !Array.isArray(acfReturned)
        ? Object.keys(acfReturned).length : 0;
      console.log(`  ✅  id=${result.id}  status=${result.status}  template=${result.template || '(none)'}  acf=${isEmpty ? 'EMPTY[]' : acfCount + ' fields'}\n`);
      if (isEmpty) {
        console.log(`  ⚠️  ACF returned [] — verify show_in_rest=1 on the field group AND fields.\n`);
      }
    } catch (err) {
      console.error(`  ❌  ${err.message}\n`);
    }
  }
  console.log('Done.');
})().catch(err => { console.error(err); process.exit(1); });
