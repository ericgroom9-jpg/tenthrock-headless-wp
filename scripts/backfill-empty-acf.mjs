#!/usr/bin/env node
/**
 * Backfill empty ACF fields on every CPT post with the same defaults the
 * React templates fall back to. After running, every WP admin field has a
 * real, editable value (no more empty boxes).
 */
const WP = process.env.WP_API_URL.replace('/graphql', '');
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function req(method, ep, body) {
  const r = await fetch(`${WP}/wp-json/wp/v2/${ep}`, {
    method,
    headers: { 'Authorization': `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  return { ok: r.ok, status: r.status, data: json };
}
async function listAll(cpt) {
  const out = []; let p = 1;
  while (true) {
    const r = await req('GET', `${cpt}?per_page=100&page=${p}&_fields=id,slug,title,acf`);
    if (!Array.isArray(r.data) || !r.data.length) break;
    out.push(...r.data);
    if (r.data.length < 100) break; p++;
  }
  return out;
}
const isEmpty = v => v == null || v === '' || (Array.isArray(v) && v.length === 0);

// ─────────────────── DEFAULTS (mirror ServiceTemplate.tsx) ───────────────────
const SERVICE_DEFAULTS = {
  process_subtitle: "From your first call to job completion, every step is coordinated by a dedicated project manager.",
  process_steps: [
    { step_num: "01", step_title: "You Call Us", step_desc: "Our experts are on standby 24/7 to solve it immediately." },
    { step_num: "02", step_title: "We Scope the Job", step_desc: "A dedicated project manager is assigned to your account. They assess the situation and build a plan." },
    { step_num: "03", step_title: "You Get a Flat Rate", step_desc: "One price, upfront, in writing. No hourly surprises, no fuel surcharges, no hidden line items. You approve it before anything moves." },
    { step_num: "04", step_title: "Crews Are Dispatched", step_desc: "Our team is deployed to your site. Your project manager coordinates every detail and sends real-time updates until the job is done." },
    { step_num: "05", step_title: "Problem Solved", step_desc: "Waste is removed, the site is clean, and you get photo documentation confirming completion. One invoice. Done." },
  ],
  faqs: [
    { question: "What types of commercial waste do you handle?", answer: "General trash, recyclables, construction debris, bulk cleanouts, compactor loads, and e-waste. We also coordinate certified hazmat disposal through licensed partners when needed." },
    { question: "How quickly can you respond to an emergency?", answer: "Our dispatch center is staffed 24/7. For emergencies, crews are typically on-site within 2-4 hours. For scheduled service, we start within 24-48 hours of account setup." },
    { question: "Do you provide documentation for every job?", answer: "Yes. Every completed job includes before-and-after photos, weight tickets when applicable, and a single consolidated invoice." },
    { question: "What areas do you service?", answer: "We operate across 48 states through our vetted network of service partners. Whether your locations are in major metros or rural markets, we have crews who can reach them." },
    { question: "Can you manage waste across hundreds of locations?", answer: "That's what we're built for. Multi-location businesses get one point of contact, one invoice, and consistent service at every site." },
  ],
  stats: [
    { stat_label: "RESPONSE TIME", stat_value: "2-4hr", stat_description: "Average on-site arrival for emergency waste calls." },
    { stat_label: "LOCATIONS MANAGED", stat_value: "5K+", stat_description: "Commercial sites serviced across 48 states." },
    { stat_label: "ON-TIME RATE", stat_value: "98%", stat_description: "Dispatched crews arrive when promised, every time." },
  ],
  para1_badge: "Why It Matters",
  para1_heading: "Built for the Demands of Modern Business",
  para1_body: "Managing waste across hundreds of locations is a competitive advantage, not a chore. Tenth Rock replaces fragmented vendors with a single, accountable partner to save your team time and budget.",
  para1_image: "/images/stock/built-for-business-aerial-city.jpg",
  para1_image_alt: "Aerial view of a sprawling modern city with commercial districts",
  para1_bullets: [
    { bullet_text: "Reduce waste management overhead by up to 30%" },
    { bullet_text: "Eliminate multi-vendor coordination headaches" },
    { bullet_text: "Real-time job status and documentation" },
    { bullet_text: "Scalable solutions that grow with your business" },
  ],
  para2_badge: "Our Commitment",
  para2_heading: "Sustainability Without Compromise",
  para2_body: "Environmental responsibility and operational efficiency go hand in hand. Our approach supports waste diversion efforts without disrupting your service or adding unnecessary complexity. We work with recovery and processing facilities across the country to help reduce landfill use while maintaining the reliable operations your business depends on.",
  para2_image: "/images/stock/sustainability-park-skyline.jpg",
  para2_image_alt: "Open green park with city skyline in the background, representing sustainable urban operations",
  para2_bullets: [
    { bullet_text: "Practical waste diversion and recovery" },
    { bullet_text: "Clear insights into site activity and service history" },
    { bullet_text: "Direct access to a nationwide network of facilities" },
    { bullet_text: "Expert support for streamlining your waste process" },
  ],
  how_it_works_intro: "You call, we handle it. No back-and-forth, no guesswork. Here's how every job runs:",
  how_it_works_steps: [
    { step_title: "Call", step_desc: "Call 727.510.5454 or submit a request online. We respond within the hour." },
    { step_title: "Scope", step_desc: "Your project manager scopes the job and sends you a flat-rate quote." },
    { step_title: "Dispatch", step_desc: "Crews arrive on schedule. You get real-time updates and photo documentation when the job is done." },
  ],
  cta_image: "/images/stock/built-for-business-aerial-city.jpg",
  cta_image_alt: "Tenth Rock crews coordinating commercial waste services across multiple sites",
  about_description: "We deliver reliable commercial waste service through one accountable point of contact, replacing fragmented vendor networks with a single, consistent program tailored to your business.",
  about_bullets: [
    { bullet_text: "Nationwide coverage with local vendor expertise" },
    { bullet_text: "24/7 emergency dispatch and rapid response" },
    { bullet_text: "One point of contact, one invoice, zero hassle" },
  ],
  sub_services: [
    { sub_title: "Tailored Service Plans", sub_description: "Programs designed around your operational schedule, locations, and waste volume.", sub_image: "/images/stock/service-centralized-program.jpg", sub_link: "/services", sub_features: [{ feature_text: "Custom Cadence" }, { feature_text: "Per-Site Pricing" }, { feature_text: "Volume Reporting" }] },
    { sub_title: "Dedicated Project Manager", sub_description: "A single point of contact who knows your business and coordinates every job from request to invoice.", sub_image: "/images/stock/service-maintenance.jpg", sub_link: "/services", sub_features: [{ feature_text: "One Number to Call" }, { feature_text: "Same-Day Response" }, { feature_text: "Photo Documentation" }] },
    { sub_title: "Consolidated Billing", sub_description: "One invoice, every site, every service. Accounting-friendly reporting with the detail your team needs.", sub_image: "/images/stock/service-dumpster.jpg", sub_link: "/services", sub_features: [{ feature_text: "Single Invoice" }, { feature_text: "Site-Level Detail" }, { feature_text: "Custom Cost Codes" }] },
  ],
};

// ─────────────────── DEFAULTS (mirror IndustryTemplate.tsx) ───────────────────
const INDUSTRY_DEFAULTS = {
  para1_badge: "Industry Expertise",
  para1_heading: "Programs Built Around How You Operate",
  para1_body: "Every industry has unique waste challenges. From volume fluctuations to tight timelines, our team understands the nuances that generic providers miss. We design custom waste programs that align with your operational rhythm, reduce costs, and keep your facilities clean without disrupting the work that matters most.",
  para1_image: "/images/stock/programs-built-aerial-buildings.jpg",
  para1_image_alt: "Aerial view of high-rise condominium and office buildings served by Tenth Rock",
  para1_bullets: [
    { bullet_text: "Custom programs designed around your operational schedule" },
    { bullet_text: "Industry-specific service programs" },
    { bullet_text: "Dedicated account manager with sector expertise" },
    { bullet_text: "Flexible service scaling for seasonal demands" },
  ],
  para2_badge: "Operational Excellence",
  para2_heading: "One Partner, Complete Coverage",
  para2_body: "Managing waste across multiple locations shouldn't mean managing multiple vendors. Tenth Rock consolidates your waste operations under a single point of contact, giving you consistent service standards and predictable costs. Our national network of vetted local vendors means you get the responsiveness of a local provider with the accountability of an enterprise partner.",
  para2_image: "/images/stock/service-emergency-overflow.jpg",
  para2_image_alt: "Tenth Rock coordinating multi-location waste services",
  para2_bullets: [
    { bullet_text: "Single point of contact for all locations" },
    { bullet_text: "Unified billing and centralized coordination" },
    { bullet_text: "Vetted local vendors across 48 states" },
    { bullet_text: "Consistent service standards at every site" },
  ],
  para3_badge: "Sustainability Focus",
  para3_heading: "Environmental Responsibility Built In",
  para3_body: "Responsibility is the baseline for every project we manage. By utilizing local recovery and processing facilities across the country, we move waste more effectively to keep your sites clear and materials out of landfills. We provide the visibility you need to understand your property's waste flow without adding a single step to your daily operations.",
  para3_image: "/images/stock/sustainability-park-with-city.jpg",
  para3_image_alt: "Lush green park beside a city skyline reflecting Tenth Rock's sustainability focus",
  para3_bullets: [
    { bullet_text: "Waste diversion and recycling solutions" },
    { bullet_text: "Direct access to local processing facilities" },
    { bullet_text: "Logistics tailored to reduce landfill use" },
    { bullet_text: "Straightforward insights into your waste stream" },
  ],
};

// ─────────────────── Testimonial enrichment ───────────────────
const TESTIMONIAL_ENRICH = {
  "Sarah Jenkins":   { author_role: "Director of Operations", company: "National Retail Chain",        author_image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
  "Michael Ross":    { author_role: "Facility Manager",       company: "Multi-Site Property Group",    author_image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" },
  "David Chen":      { author_role: "Regional VP",            company: "Hospitality Management Co.",   author_image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
};
const FALLBACK_PORTRAIT = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200";

function pickEmpty(current, defaults) {
  const patch = {};
  for (const [k, v] of Object.entries(defaults)) {
    if (isEmpty(current?.[k])) patch[k] = v;
  }
  return patch;
}

async function backfill(cpt, defaultsFn) {
  console.log(`\n=== ${cpt} ===`);
  const posts = await listAll(cpt);
  let updated = 0, unchanged = 0, failed = 0;
  for (const p of posts) {
    const defaults = typeof defaultsFn === 'function' ? defaultsFn(p) : defaultsFn;
    const patch = pickEmpty(p.acf, defaults);
    const fields = Object.keys(patch);
    if (!fields.length) { unchanged++; continue; }
    const r = await req('POST', `${cpt}/${p.id}`, { acf: patch });
    if (r.ok) {
      updated++;
      console.log(`  OK ${p.slug || p.id}: filled ${fields.length} fields`);
    } else {
      failed++;
      console.error(`  FAIL ${p.slug || p.id} (${r.status}): ${JSON.stringify(r.data).slice(0,200)}`);
    }
  }
  console.log(`  → updated:${updated}  unchanged:${unchanged}  failed:${failed}`);
}

async function main() {
  console.log(`WP: ${WP}`);

  await backfill('tr_service',  SERVICE_DEFAULTS);
  await backfill('tr_industry', INDUSTRY_DEFAULTS);

  // Testimonials: per-author enrichment + fallback portrait
  await backfill('tr_testimonial', (p) => {
    const name = (p.title?.rendered || '').replace(/&#0?39;|&apos;/g, "'").trim();
    const enrich = TESTIMONIAL_ENRICH[name] || {};
    return {
      author_role:  enrich.author_role  || 'Operations Lead',
      company:      enrich.company      || 'Multi-Site Operator',
      author_image: enrich.author_image || FALLBACK_PORTRAIT,
    };
  });

  // Partner logos: derive logo_alt from the post title
  await backfill('tr_partner_logo', (p) => ({
    logo_alt: (p.title?.rendered || '').replace(/&#0?39;|&apos;/g, "'").trim(),
  }));
}
main().catch(e => { console.error(e); process.exit(1); });
