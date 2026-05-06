#!/usr/bin/env node
const BASE = process.env.BASE_URL || 'http://localhost:5000';

const TARGETS = [
  { label: 'Homepage',                  route: '/' },
  { label: 'Privacy Policy',            route: '/privacy-policy' },
  { label: 'Terms of Service',          route: '/terms-of-service' },
  { label: 'Commercial Waste Services', route: '/commercial-waste' },
  { label: 'Service Template',          route: '/hauling-services' },
  { label: 'Who We Serve',              route: '/who-we-serve' },
  { label: 'Industries Template',       route: '/retail' },
  { label: 'Our Process',               route: '/our-process' },
  { label: 'About Us',                  route: '/about' },
  { label: 'Where We Serve',            route: '/locations' },
  { label: 'Location Template',         route: '/locations/houston-tx' },
  { label: 'Join Our Network',          route: '/join-our-network' },
  { label: 'FAQs',                      route: '/faq' },
  { label: 'Contact Us',                route: '/contact' },
  { label: 'Request A Service',         route: '/request-a-service' },
  { label: 'Book a Call',               route: '/book-a-call' },
  { label: 'Thank You',                 route: '/thank-you' },
];

function extractHeadings(html) {
  // Strip scripts/styles/noscript/templates so headings inside them aren't counted.
  let cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<template[\s\S]*?<\/template>/gi, '');

  const re = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  const out = [];
  let m;
  while ((m = re.exec(cleaned)) !== null) {
    const level = parseInt(m[1], 10);
    const text  = m[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
    out.push({ level, text: text.slice(0, 80) });
  }
  return out;
}

function evaluate(headings) {
  const counts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
  headings.forEach(h => counts['h' + h.level]++);
  const violations = [];
  if (counts.h1 === 0) violations.push('missing H1');
  if (counts.h1 > 1)   violations.push(`multiple H1 (${counts.h1})`);
  let prev = 0;
  headings.forEach((h, i) => {
    if (prev > 0 && h.level > prev + 1) {
      violations.push(`skip H${prev}->H${h.level} @#${i + 1} "${h.text.slice(0, 30)}"`);
    }
    prev = h.level;
  });
  return { counts, violations };
}

const rows = [];
for (const t of TARGETS) {
  const url = BASE + t.route;
  try {
    const res  = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    if (res.status >= 400) {
      rows.push({ ...t, status: res.status, counts: null, violations: [`HTTP ${res.status}`], headings: [] });
      continue;
    }
    const headings = extractHeadings(html);
    const { counts, violations } = evaluate(headings);
    rows.push({ ...t, status: res.status, counts, violations, headings });
  } catch (e) {
    rows.push({ ...t, status: 'ERR', counts: null, violations: [e.message], headings: [] });
  }
}

const headers = ['Template', 'Route', 'Status', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Valid', 'Violations'];
const data = rows.map(r => [
  r.label,
  r.route,
  String(r.status),
  r.counts ? String(r.counts.h1) : '-',
  r.counts ? String(r.counts.h2) : '-',
  r.counts ? String(r.counts.h3) : '-',
  r.counts ? String(r.counts.h4) : '-',
  r.counts ? String(r.counts.h5) : '-',
  r.counts ? String(r.counts.h6) : '-',
  r.violations.length === 0 && r.counts ? 'YES' : 'NO',
  r.violations.join('; ') || '-',
]);

const widths = headers.map((h, i) => Math.max(h.length, ...data.map(d => d[i].length)));
const sep   = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
const fmt   = row => '| ' + row.map((c, i) => c.padEnd(widths[i])).join(' | ') + ' |';

console.log('\nSEO Heading Structure Audit');
console.log('Base URL:  ' + BASE);
console.log('Generated: ' + new Date().toISOString());
console.log('');
console.log(sep);
console.log(fmt(headers));
console.log(sep);
data.forEach(d => console.log(fmt(d)));
console.log(sep);

const failing = rows.filter(r => r.violations.length > 0 && r.counts);
if (failing.length) {
  console.log('\n── Heading order detail (failing pages) ──');
  for (const r of failing) {
    console.log(`\n• ${r.label} (${r.route})`);
    r.headings.forEach((h, i) => console.log(`   ${String(i + 1).padStart(2)}. H${h.level}  ${h.text}`));
  }
}

const ok = rows.filter(r => r.counts && r.violations.length === 0).length;
console.log(`\nSummary: ${ok}/${rows.length} pages pass SEO heading rules.`);
