#!/usr/bin/env node
/**
 * Setup Page Template ACF Field Groups + Create Pages + Inject Content
 *
 * This script:
 * 1. Registers ACF field groups for all 14 page templates + global sections via Code Snippets REST API
 * 2. Creates WordPress pages for each template
 * 3. Sets the _headless_template meta on each page
 * 4. Injects all hardcoded frontend content into ACF fields
 * 5. Injects global sections content into the ACF Options page
 *
 * Run: node scripts/setup-page-templates.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpRest(endpoint, method = 'GET', data = null) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${AUTH}` },
  };
  if (data) opts.body = JSON.stringify(data);
  const res = await fetch(`${WP_URL}/wp-json/${endpoint}`, opts);
  const json = await res.json();
  if (!res.ok && res.status !== 400) {
    console.error(`  REST error ${res.status} on ${endpoint}:`, JSON.stringify(json).slice(0, 500));
  }
  return { ok: res.ok, status: res.status, data: json };
}

async function wpPost(endpoint, data) {
  return wpRest(`wp/v2/${endpoint}`, 'POST', data);
}

// ============================================================
// STEP 1: Register ACF Field Groups via Code Snippets
// ============================================================
async function registerAcfSnippet() {
  console.log('\n=== STEP 1: Register ACF Field Groups ===');
  const phpCode = fs.readFileSync(path.join(__dirname, 'page-template-acf-snippet.php'), 'utf-8');

  const snippetData = {
    name: 'ACF Page Template Fields + Global Sections',
    code: phpCode,
    scope: 'global',
    active: true,
    priority: 10,
  };

  const { ok, data } = await wpRest('code-snippets/v1/snippets', 'POST', snippetData);
  if (ok) {
    console.log(`  Snippet created: ID ${data.id}`);
    return data.id;
  } else if (data?.code === 'rest_no_route') {
    console.log('  Code Snippets REST API not available. Please paste the PHP manually.');
    console.log(`  PHP file: scripts/page-template-acf-snippet.php`);
    return null;
  } else {
    console.error('  Failed to create snippet:', JSON.stringify(data).slice(0, 300));
    return null;
  }
}

// ============================================================
// STEP 2: Create WordPress Pages + Set Templates
// ============================================================
const PAGES = [
  { title: 'Home', slug: 'home', template: 'template-homepage', status: 'publish' },
  { title: 'About Us', slug: 'about', template: 'template-about', status: 'publish' },
  { title: 'Commercial Waste Services', slug: 'commercial-waste', template: 'template-commercial-waste', status: 'publish' },
  { title: 'Who We Serve', slug: 'who-we-serve', template: 'template-who-we-serve', status: 'publish' },
  { title: 'Our Process', slug: 'our-process', template: 'template-our-process', status: 'publish' },
  { title: 'Where We Serve', slug: 'locations', template: 'template-locations', status: 'publish' },
  { title: 'Join Our Network', slug: 'join-our-network', template: 'template-join-our-network', status: 'publish' },
  { title: 'FAQ', slug: 'faq', template: 'template-faq', status: 'publish' },
  { title: 'Contact Us', slug: 'contact', template: 'template-contact', status: 'publish' },
  { title: 'Request A Service', slug: 'request-a-service', template: 'template-request-a-service', status: 'publish' },
  { title: 'Book A Call', slug: 'book-a-call', template: 'template-book-a-call', status: 'publish' },
  { title: 'Thank You', slug: 'thank-you', template: 'template-thank-you', status: 'publish' },
  { title: 'Privacy Policy', slug: 'privacy-policy', template: 'template-privacy-policy', status: 'publish' },
  { title: 'Terms of Service', slug: 'terms-of-service', template: 'template-terms-of-service', status: 'publish' },
];

async function findExistingPage(slug) {
  const { ok, data } = await wpRest(`wp/v2/pages?slug=${slug}&status=publish,draft,private`, 'GET');
  if (ok && Array.isArray(data) && data.length > 0) return data[0];
  return null;
}

async function createPages() {
  console.log('\n=== STEP 2: Create Pages + Set Templates ===');
  const pageIds = {};

  for (const page of PAGES) {
    const existing = await findExistingPage(page.slug);
    if (existing) {
      console.log(`  Page "${page.title}" already exists (ID ${existing.id}), updating template...`);
      const { ok, data } = await wpRest(`wp/v2/pages/${existing.id}`, 'POST', {
        meta: { _headless_template: page.template },
      });
      if (ok) {
        pageIds[page.slug] = data.id;
        console.log(`    Template set to ${page.template}`);
      }
    } else {
      const { ok, data } = await wpPost('pages', {
        title: page.title,
        slug: page.slug,
        status: page.status,
        meta: { _headless_template: page.template },
      });
      if (ok) {
        pageIds[page.slug] = data.id;
        console.log(`  Created page "${page.title}" (ID ${data.id}) with template ${page.template}`);
      } else {
        console.error(`  Failed to create page "${page.title}"`);
      }
    }
  }

  return pageIds;
}

// ============================================================
// STEP 3: Inject Content Into Page ACF Fields
// ============================================================

const HOMEPAGE_ACF = {
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
  why_us_heading: "Why You'll Love Tenth Rock",
  why_us_image: '/images/stock/white-truck.jpg',
  why_us_image_alt: 'Tenth Rock Operations',
  why_us_features: [
    { title: 'Speed You Can Count On', content: 'Emergency pickups within hours, scheduled service within 24-48 hours. Our 24/7 dispatch center means your call is never waiting until Monday.', icon_name: 'Clock' },
    { title: 'Nationwide, Local Execution', content: 'One contract, one point of contact, serviced by vetted local crews who know the disposal requirements in your area.', icon_name: 'MapPin' },
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
};

const ABOUT_ACF = {
  story_tagline: 'Our Story',
  story_heading: 'Built From the Ground Up to Fix a Broken Industry',
  story_body: `<p>Tenth Rock is a nationwide commercial waste logistics and advisory company built specifically for the complexity of multi-location operations.</p>
<p>Founded by operators who have seen firsthand where waste coordination breaks down, we were built to solve the inefficiencies that occur when too many moving pieces go unmanaged. That boots-on-the-ground experience positions us as both an execution partner and a trusted advisor for organizations that need a team that has experienced these breakdowns from the inside.</p>
<p>We work through a vetted network of certified service partners across 48 states, delivering consistent execution and single-point accountability across every location, scope, and timeline. Emergency waste removal, specialized project logistics, container management, and waste operations advisory, all handled with the precision that enterprise teams depend on to maintain operational continuity.</p>
<p>Our network provides the infrastructure, and the expertise behind it drives the outcome. We are built to respond when urgency demands it and plan ahead when the opportunity exists, giving clients a partner capable of both. This range enables organizations to move beyond reactive waste management and into a more strategic posture, identifying inefficiencies, increasing cost visibility, and building waste operations that scale with their business.</p>`,
  story_image: '/images/stock/about-our-story-clearwater-beach.jpg',
  story_image_alt: 'Aerial view of Clearwater Beach with white sand, turquoise water, hotels, and marina, near Tenth Rock headquarters',
  core_heading: 'At Our Core',
  core_values: [
    { title: 'Innovative Problem Solving', description: 'We move beyond one-size-fits-all mentalities. Creative problem solving is in our DNA, allowing us to tackle the complex challenges other providers avoid. If a traditional path to resolution does not exist, we develop one.' },
    { title: 'Partnership and Transparent Communication', description: 'Built on professional respect and family values, we treat your operations as our own. We eliminate friction with a single point of contact and real-time updates to ensure every stakeholder thrives through total accountability.' },
    { title: 'Operational Leadership and Responsibility', description: "Leading is about getting the job done. Our team approaches every challenge with a front-row mentality, mobilizing rapidly to maintain your facility's uptime. Responsibility is our baseline, utilizing streamlined logistics to support a circular economy." },
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
  community_heading: 'In The Community',
  community_body: `<p>Real change begins at the local level. As a nationwide company, Tenth Rock is committed to sustainability and protecting the natural resources of the communities where we live and work. We believe our responsibility extends beyond the job site to include the health and longevity of the neighborhoods we serve.</p>
<p>We are proud to support organizations that drive meaningful impact and foster environmental awareness. By providing waste management expertise and logistical resources for local initiatives, we help reduce litter, restore natural habitats, and educate the community on sustainable practices. Tenth Rock provides more than just waste solutions; we provide the support and visibility needed to build more inclusive and supportive communities.</p>`,
  community_image: '/images/stock/community-park-sunset.jpg',
  community_image_alt: 'Families enjoying a sunny afternoon at a community park',
  community_cta_label: 'Learn More',
  community_cta_link: '/contact',
  community_secondary_label: '727.510.5454',
  community_secondary_link: 'tel:+17275105454',
};

const COMMERCIAL_WASTE_ACF = {
  hero_heading: 'Waste Management Services',
  hero_subheading: 'Emergency response, project logistics, container rentals, and waste program advisory. One call to Tenth Rock activates a nationwide network of vetted service providers, ready to execute across 48 states.',
  hero_image: '/images/stock/service-centralized-program.jpg',
  hero_cta_label: 'Request A Service',
  hero_cta_link: '/request-a-service',
  hero_phone_label: '727.510.5454',
  hero_phone_link: 'tel:+17275105454',
  process_tagline: 'Our Process',
  process_heading: 'How It Works',
  process_subtitle: "A simple, transparent process from first call to job complete. Here's exactly how every Tenth Rock project runs.",
  process_steps: [
    { number: '01', title: 'You Call. We Answer.', description: 'One phone call or form submission kicks off the process. Describe what you need and we handle the rest.' },
    { number: '02', title: 'Scope & Strategy', description: 'We evaluate the scope, match resources, and build a plan tailored to your timeline and budget.' },
    { number: '03', title: 'Dispatch & Execute', description: 'Our vetted service partners are dispatched to your location. We manage scheduling, logistics, and communication.' },
    { number: '04', title: 'Document & Report', description: 'You receive visual confirmation, completion reports, and a single invoice for every job across every location.' },
    { number: '05', title: 'Optimize & Scale', description: 'We review performance data, identify savings, and adjust your program to improve over time.' },
  ],
  zip_tagline: 'Service Availability',
  zip_heading: 'Check If We Service Your Area',
  zip_subtitle: 'Enter your zip code below to see if Tenth Rock has service coverage in your area.',
  zip_button_label: 'Check Now',
  case_tag: 'Speed',
  case_title: 'National Coffee Chain',
  case_subtitle: 'Missed Pickup, Same-Day Stabilization',
  case_description: 'A missed pickup at a National Coffee Chain location sent waste overflowing into the backroom mid-operation, creating immediate operational risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a team on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.',
  case_main_image: '/images/stock/coffee-case-1.jpg',
  case_thumbnails: [
    { image: '/images/stock/coffee-case-2.jpg', alt_text: 'Stacked bags of commercial waste piled up after a missed pickup' },
    { image: '/images/stock/coffee-case-3.jpg', alt_text: 'Quiet city street at night where the response was dispatched' },
    { image: '/images/stock/coffee-case-4.jpg', alt_text: 'Brick storefront with large windows after stabilization' },
  ],
  case_stats: [
    { value: '10 min', label: 'Response Time' },
    { value: '4 hrs', label: 'Total Stabilization' },
    { value: '0', label: 'Customer Impact' },
    { value: '1', label: 'Call to Resolution' },
  ],
  case_cta_label: 'Request A Service',
  case_cta_link: '/request-a-service',
  faq_tagline: 'Common Questions',
  faq_heading: 'Frequently Asked Questions',
  faq_subtitle: "Everything you need to know about our waste management services, pricing, and process. Can't find the answer you're looking for? Reach out to our team.",
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
};

const WHO_WE_SERVE_ACF = {
  hero_heading: 'Who We Serve',
  hero_subheading: 'From retail chains to stadiums, we partner with businesses that need reliable, scalable waste solutions across multiple locations.',
  hero_image: '/images/stock/hero-skyscrapers.jpg',
  hero_cta_label: 'Request A Service',
  hero_cta_link: '/request-a-service',
  hero_phone_label: '727.510.5454',
  hero_phone_link: 'tel:+17275105454',
};

const OUR_PROCESS_ACF = {
  hero_heading: 'Our Process',
  hero_subheading: "Five steps from first call to job complete. No runarounds, no surprises. Here's exactly how every Tenth Rock project runs.",
  hero_image: '/images/stock/hero-skyscrapers.jpg',
  hero_cta_label: 'Request A Service',
  hero_cta_link: '/request-a-service',
  hero_phone_label: '727.510.5454',
  hero_phone_link: 'tel:+17275105454',
};

const LOCATIONS_ACF = {
  hero_heading: 'Whenever You Need Us',
  hero_subheading: 'Tenth Rock operates in 48 states with local crews ready for emergency pickups, scheduled service, and project-based waste removal.',
  hero_image: '/images/stock/locations-hero-modern-city.jpg',
  hero_cta_label: 'Request A Service',
  hero_cta_link: '/request-a-service',
  hero_phone_label: '727.510.5454',
  hero_phone_link: 'tel:+17275105454',
  areas_heading: 'Nationwide Coverage. Local Support.',
  areas_subtitle: 'Select a state to see available services and local coverage areas.',
};

const JOIN_NETWORK_ACF = {
  hero_heading: 'Join Our Network',
  hero_subheading: 'We partner with experienced haulers and service providers to support commercial waste operations nationwide. Access opportunities backed by organized workflows, clear communication, and fast, reliable payment.',
  hero_image: '/images/stock/hero-skyscrapers.jpg',
  hero_cta_label: 'Get Started',
  hero_phone_label: '727.510.5454',
  hero_phone_link: 'tel:+17275105454',
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
};

const FAQ_ACF = {
  hero_tagline: 'Support Center',
  hero_heading: 'Frequently Asked',
  hero_heading_highlight: 'Questions',
  hero_subtitle: 'Find answers to common questions about our waste management services, pricing, sustainability initiatives, and more.',
  hero_image: '/images/stock/clean-city-hero.jpg',
  cta_text: 'Still have questions?',
  cta_label: 'Contact Us',
  cta_link: '/contact',
};

const CONTACT_ACF = {
  page_heading: 'Contact Us',
  emergency_text: 'If you are experiencing a trash emergency and need immediate assistance, please call us at',
  emergency_phone: '727.510.5454',
  emergency_phone_link: 'tel:7275105454',
  vendor_text: 'If you are interested in becoming a Preferred Vendor,',
  vendor_link_text: 'visit here',
  vendor_link_url: '/join-our-network',
  card_heading: 'Contact',
  phone: '727.510.5454',
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
};

const REQUEST_SERVICE_ACF = {
  page_heading: 'Request A Service',
  emergency_text: 'If you are experiencing a trash emergency and need immediate assistance, please call us at',
  emergency_phone: '727.510.5454',
  emergency_phone_link: 'tel:7275105454',
  vendor_text: 'If you are interested in becoming a Preferred Vendor,',
  vendor_link_text: 'visit here',
  vendor_link_url: '/join-our-network',
  card_heading: 'Contact',
  phone: '727.510.5454',
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
};

const BOOK_CALL_ACF = {
  heading: 'Book A Call',
  expectations: [
    { text: 'Personalized waste strategy review for your business' },
    { text: 'Transparent pricing with no hidden fees' },
    { text: 'A dedicated account manager assigned to your project' },
  ],
  description: "Schedule a quick call with one of our waste management consultants. We'll learn about your specific needs and put together a customized plan that saves you time and money, with no obligation.",
  calendar_embed: '',
  calendar_fallback_heading: 'Calendar Loading',
  calendar_fallback_text: "Our scheduling tool will appear here. If it doesn't load, call us directly at 727.510.5454 to book your consultation.",
  skip_text: 'Already booked or prefer to skip?',
  continue_label: 'Continue',
  continue_link: '/thank-you',
};

const THANK_YOU_ACF = {
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
};

const PRIVACY_ACF = {
  heading: 'Privacy Policy',
  embed_key: 'TVdZcmMxWmpXRGxsV0RkblJHYzlQUT09',
  fallback_text: 'The policy could not be loaded.',
  fallback_link_text: 'Click here to view it directly',
};

const TERMS_ACF = {
  heading: 'Terms of Service',
  embed_key: 'Wlc5NU4ySTVhMmRJVEcxcFUxRTlQUT09',
  fallback_text: 'The policy could not be loaded.',
  fallback_link_text: 'Click here to view it directly',
};

const PAGE_ACF_MAP = {
  'home': HOMEPAGE_ACF,
  'about': ABOUT_ACF,
  'commercial-waste': COMMERCIAL_WASTE_ACF,
  'who-we-serve': WHO_WE_SERVE_ACF,
  'our-process': OUR_PROCESS_ACF,
  'locations': LOCATIONS_ACF,
  'join-our-network': JOIN_NETWORK_ACF,
  'faq': FAQ_ACF,
  'contact': CONTACT_ACF,
  'request-a-service': REQUEST_SERVICE_ACF,
  'book-a-call': BOOK_CALL_ACF,
  'thank-you': THANK_YOU_ACF,
  'privacy-policy': PRIVACY_ACF,
  'terms-of-service': TERMS_ACF,
};

async function injectPageContent(pageIds) {
  console.log('\n=== STEP 3: Inject Page Content ===');

  for (const [slug, acfData] of Object.entries(PAGE_ACF_MAP)) {
    const pageId = pageIds[slug];
    if (!pageId) {
      console.log(`  Skipping ${slug}: no page ID`);
      continue;
    }

    const { ok, data } = await wpRest(`wp/v2/pages/${pageId}`, 'POST', {
      acf: acfData,
    });
    if (ok) {
      console.log(`  Injected ACF content for "${slug}" (ID ${pageId})`);
    } else {
      console.error(`  Failed to inject content for "${slug}":`, JSON.stringify(data).slice(0, 300));
    }
  }
}

// ============================================================
// STEP 4: Inject Global Sections Content (ACF Options Page)
// ============================================================
const GLOBAL_SECTIONS = {
  process_tagline: 'Our Process',
  process_heading: 'How It Works',
  process_subtitle: 'From first call to job complete, here is exactly how every Tenth Rock project runs.',
  process_steps: [
    { number: '01', title: 'You Call. We Answer.', description: 'One phone call or form submission kicks off the process. Describe what you need and we handle the rest.' },
    { number: '02', title: 'Scope & Strategy', description: 'We evaluate the scope, match resources, and build a plan tailored to your timeline and budget.' },
    { number: '03', title: 'Dispatch & Execute', description: 'Our vetted service partners are dispatched to your location. We manage scheduling, logistics, and communication.' },
    { number: '04', title: 'Document & Report', description: 'You receive visual confirmation, completion reports, and a single invoice for every job across every location.' },
    { number: '05', title: 'Optimize & Scale', description: 'We review performance data, identify savings, and adjust your program to improve over time.' },
  ],
  stats_tagline: 'Key Metrics',
  stats_heading: 'Why Clients Call Us Again and Again.',
  stats_subtitle: 'Numbers tell the story. Our clients stick with us because we deliver measurable results: lower costs, faster response, and fewer headaches managing waste across multiple locations.',
  stats_cta_label: 'Request A Service',
  stats_cta_link: '/request-a-service',
  stats_phone_label: '727.510.5454',
  stats_phone_link: 'tel:+17275105454',
  stats_image: '/images/stock/why-clients-nyc-sunrise.jpg',
  stats_image_alt: 'Tenth Rock nationwide waste operations',
  stats_cards: [
    { title: 'Average Cost Savings', value: '30%', description: 'Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization.' },
    { title: 'Response Time', value: '<2hrs', description: 'Average emergency response time. When you call, we mobilize. Period.' },
    { title: 'Client Retention', value: '95%', description: 'Year-over-year client retention rate. Our clients stay because we deliver consistently.' },
  ],
  cta_banner_tagline: 'Service Availability',
  cta_banner_heading: 'Check If We Service Your Area',
  cta_banner_subtitle: 'Enter your zip code to see if Tenth Rock has service coverage in your area.',
  cta_banner_placeholder: 'Enter Zip Code',
  cta_banner_button: 'Check Now',
  reasons_tagline: 'Benefits',
  reasons_heading: "More Reasons You'll Love Us",
  reasons_subtitle: "We've rebuilt waste management from the ground up to serve modern businesses. Say goodbye to hidden fees and confusing contracts.",
  reasons_cta_label: 'Request A Service',
  reasons_cta_link: '/request-a-service',
  reasons_features: [
    { icon_name: 'Headset', title: 'Dedicated Point of Contact', description: 'One person to handle everything. No call centers, no runarounds, just answers.' },
    { icon_name: 'CheckCircle2', title: 'Job Completion Proof', description: 'Visual confirmation for every job we complete, available instantly.' },
    { icon_name: 'MapPin', title: 'Local Crews, National Reach', description: 'Vetted local crews across 48 states. You get the responsiveness of a local provider with the accountability of a national partner.' },
    { icon_name: 'Truck', title: 'Real Cost Savings', description: 'Clients typically save up to 30% through vendor consolidation, rate negotiation, and right-sized service.' },
  ],
  final_cta_heading: 'Streamline Your Waste Management Today',
  final_cta_subtitle: 'One call. One partner. Every location covered. Stop juggling providers and start saving up to 30% on waste spend.',
  final_cta_label: 'Request A Service',
  final_cta_link: '/request-a-service',
  final_cta_image: '/images/stock/final-cta-highway-sunset.jpg',
  final_cta_image_alt: 'Aerial view of an open highway at sunset symbolizing nationwide waste logistics',
  final_cta_phone: '727.510.5454',
  final_cta_phone_link: 'tel:+17275105454',
  location_heading: 'Where to Find Us',
  location_subtitle: 'Headquartered in Clearwater Beach, FL. Serving businesses in 48 states.',
  location_address: '140 Island Way Ste. 159, Clearwater Beach, FL 33767',
  location_address_link: 'https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767',
  location_phone_note: 'Available 24/7 for emergencies',
  location_phone: '727.510.5454',
  location_phone_link: 'tel:+17275105454',
  location_email: 'hello@tenthrock.com',
  location_email_link: 'mailto:hello@tenthrock.com',
  location_hq_image: '/images/stock/location-clearwater-beach-v2.jpg',
  location_hq_image_alt: 'Aerial view of Clearwater Beach, Florida with turquoise waters',
  faq_section_tagline: 'Common Questions',
  faq_section_heading: 'Frequently Asked Questions',
  faq_section_subtitle: "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.",
  faq_section_cta_text: 'Still Have Questions?',
  faq_section_cta_label: 'Contact Us',
  faq_section_cta_link: '/contact',
  who_help_tagline: 'Industries',
  who_help_heading: 'Who We Help',
  who_help_subtitle: 'From single-site operators to national brands, we partner with businesses that need reliable waste solutions at scale.',
  logo_reel_headline: 'Supporting these leading national brands',
  testimonials_tagline: 'Client Stories',
};

async function injectGlobalSections() {
  console.log('\n=== STEP 4: Inject Global Sections (ACF Options) ===');

  const { ok, data } = await wpRest('acf/v3/options/tr-global-sections', 'POST', {
    acf: GLOBAL_SECTIONS,
  });

  if (ok) {
    console.log('  Global sections content injected successfully');
  } else {
    console.log('  ACF Options REST API response:', JSON.stringify(data).slice(0, 500));
    console.log('  Trying alternative endpoint...');
    const alt = await wpRest('acf/v3/options/tr_global_sections', 'POST', { acf: GLOBAL_SECTIONS });
    if (alt.ok) {
      console.log('  Global sections content injected via alt endpoint');
    } else {
      console.log('  Could not inject global sections. Fields may need manual entry.');
    }
  }
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('============================================');
  console.log('Page Template ACF Setup & Content Injection');
  console.log('============================================');
  console.log(`WordPress URL: ${WP_URL}`);

  if (!WP_URL) {
    console.error('Missing WP_API_URL env var');
    process.exit(1);
  }

  await registerAcfSnippet();
  const pageIds = await createPages();
  await injectPageContent(pageIds);
  await injectGlobalSections();

  console.log('\n============================================');
  console.log('Setup complete!');
  console.log('============================================');
}

main().catch(console.error);
