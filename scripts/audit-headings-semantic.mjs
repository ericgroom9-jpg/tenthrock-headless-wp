#!/usr/bin/env node
/**
 * Deeper SEO / a11y heading audit.
 *
 * Beyond the basic "one H1 + no level skips" rules, this also flags:
 *   - sr-only / hidden H1s (screen-reader-only is acceptable but worth surfacing)
 *   - Large visual text (text-3xl..text-7xl) NOT wrapped in <h1>..<h6>
 *     -> these are visual headings rendered as <div>/<p>/<span> and should
 *        usually be promoted to <h2>/<h3>.
 */
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

const HEADING_SIZE_RE = /\btext-(3xl|4xl|5xl|6xl|7xl)\b/;

function clean(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<template[\s\S]*?<\/template>/gi, '');
}

function decode(s) {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function findHeadings(html) {
  const re = /<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const cls = (m[2].match(/class="([^"]*)"/) || [])[1] || '';
    out.push({
      level: +m[1],
      text:  decode(m[3]).slice(0, 80),
      srOnly: /\bsr-only\b/.test(cls),
      hidden: /\bhidden\b/.test(cls),
    });
  }
  return out;
}

/** Visual-but-not-semantic headings: large text classes on non-h elements,
 *  excluding those nested inside an existing h1-h6 (the styling there is
 *  just visual emphasis on heading content, which is already semantic). */
function findFakeHeadings(html) {
  // Strip the inner content of all <h1>..<h6> so nested spans/divs inside
  // them don't get reported as "fake" headings.
  const stripped = html.replace(/<h([1-6])\b[^>]*>[\s\S]*?<\/h\1>/gi, '<!--HEADING-->');
  const re = /<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*class="[^"]*")[^>]*>/g;
  const out = [];
  let m;
  while ((m = re.exec(stripped)) !== null) {
    const tag = m[1].toLowerCase();
    if (/^h[1-6]$/.test(tag)) continue;
    const cls = (m[2].match(/class="([^"]*)"/) || [])[1] || '';
    if (!HEADING_SIZE_RE.test(cls)) continue;
    const start = m.index + m[0].length;
    const closeRe = new RegExp(`</${tag}>`, 'i');
    const rest = stripped.slice(start);
    const closeMatch = closeRe.exec(rest);
    const inner = closeMatch ? rest.slice(0, closeMatch.index) : '';
    const text  = decode(inner).slice(0, 80);
    if (!text) continue;
    // Skip purely numeric / unit-only display data (stats, not headings).
    // Examples: "30%", "5K+", "98%", "10 min", "4 hrs", "0", "1", "24/7", "$1.2B"
    if (/\d/.test(text) && /^\$?[\dKkMmBb.,%+/\s]+( ?(min|hr|hrs|sec|secs|day|days|wk|weeks|months|yr|years|x))?\+?$/i.test(text)) continue;
    out.push({ tag, size: cls.match(HEADING_SIZE_RE)[1], text });
  }
  // De-dupe (same text appearing in nested elements due to our naive scan)
  const seen = new Set();
  return out.filter(x => {
    const k = x.text + '|' + x.tag;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function evaluate(headings) {
  const counts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
  headings.forEach(h => counts['h' + h.level]++);
  const violations = [];
  const visibleH1 = headings.filter(h => h.level === 1 && !h.srOnly && !h.hidden);
  if (counts.h1 === 0) violations.push('missing H1');
  else if (visibleH1.length === 0) violations.push('H1 is sr-only/hidden (no visible H1)');
  if (counts.h1 > 1) violations.push(`multiple H1 (${counts.h1})`);
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
    const html = clean(await res.text());
    if (res.status >= 400) {
      rows.push({ ...t, status: res.status, counts: null, violations: [`HTTP ${res.status}`], headings: [], fake: [] });
      continue;
    }
    const headings = findHeadings(html);
    const fake     = findFakeHeadings(html);
    const { counts, violations } = evaluate(headings);
    if (fake.length) violations.push(`${fake.length} visual headings not semantic`);
    rows.push({ ...t, status: res.status, counts, violations, headings, fake });
  } catch (e) {
    rows.push({ ...t, status: 'ERR', counts: null, violations: [e.message], headings: [], fake: [] });
  }
}

const headers = ['Template', 'Route', 'Status', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'FakeHd', 'Valid', 'Violations'];
const data = rows.map(r => [
  r.label, r.route, String(r.status),
  r.counts ? String(r.counts.h1) : '-',
  r.counts ? String(r.counts.h2) : '-',
  r.counts ? String(r.counts.h3) : '-',
  r.counts ? String(r.counts.h4) : '-',
  r.counts ? String(r.counts.h5) : '-',
  r.counts ? String(r.counts.h6) : '-',
  String(r.fake.length),
  r.violations.length === 0 && r.counts ? 'YES' : 'NO',
  r.violations.join('; ') || '-',
]);
const widths = headers.map((h, i) => Math.max(h.length, ...data.map(d => d[i].length)));
const sep = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
const fmt = row => '| ' + row.map((c, i) => c.padEnd(widths[i])).join(' | ') + ' |';

console.log('\nSEO Heading Semantic Audit');
console.log('Base: ' + BASE);
console.log(sep); console.log(fmt(headers)); console.log(sep);
data.forEach(d => console.log(fmt(d))); console.log(sep);

console.log('\n── Visual-but-not-semantic headings (need promotion to h2/h3) ──');
for (const r of rows) {
  if (!r.fake.length) continue;
  console.log(`\n• ${r.label} (${r.route})`);
  r.fake.forEach((f, i) =>
    console.log(`   ${String(i + 1).padStart(2)}. <${f.tag}> text-${f.size}  "${f.text}"`)
  );
}

console.log('\n── sr-only / hidden H1 detail ──');
for (const r of rows) {
  if (!r.headings) continue;
  const hidden = r.headings.filter(h => h.level === 1 && (h.srOnly || h.hidden));
  if (!hidden.length) continue;
  console.log(`• ${r.label}: hidden H1 = "${hidden[0].text}"`);
}
