const BASE = process.env.BASE_URL || "http://localhost:5000";

const PAGES = [
  ["Homepage", "/"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Service", "/terms-of-service"],
  ["Commercial Waste Services", "/commercial-waste"],
  ["Service Template", "/waste-removal-services"],
  ["Who We Serve", "/who-we-serve"],
  ["Industries Template", "/stadiums-events-junk-removal"],
  ["Our Process", "/our-process"],
  ["About Us", "/about"],
  ["Where We Serve", "/locations"],
  ["Location Template", "/locations/idaho"],
  ["Join Our Network", "/join-our-network"],
  ["FAQs", "/faq"],
  ["Contact Us", "/contact"],
  ["Request A Service", "/request-a-service"],
  ["Book a Call", "/book-a-call"],
  ["Thank You", "/thank-you"],
];

function stripHidden(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "")
    .replace(/<template\b[\s\S]*?<\/template>/gi, "");
}

function extractHeadings(html) {
  const clean = stripHidden(html);
  const rx = /<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const out = [];
  let m;
  while ((m = rx.exec(clean)) !== null) {
    const level = parseInt(m[1], 10);
    const attrs = m[2] || "";
    if (/\baria-hidden\s*=\s*["']?true/i.test(attrs)) continue;
    if (/\bhidden\b/i.test(attrs)) continue;
    if (/display\s*:\s*none/i.test(attrs)) continue;
    const text = m[3]
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;|&#160;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#8217;|&rsquo;/g, "'")
      .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
      .replace(/\s+/g, " ")
      .trim();
    if (!text) continue;
    out.push({ level, text });
  }
  return out;
}

function analyze(headings) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (const h of headings) counts[h.level]++;

  const issues = [];
  if (counts[1] === 0) issues.push("no H1");
  if (counts[1] > 1) issues.push(`${counts[1]} H1s`);
  if (headings.length === 0) issues.push("no headings");

  if (headings.length && headings[0].level !== 1) {
    issues.push(`starts with H${headings[0].level}`);
  }

  const skips = [];
  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1].level;
    const cur = headings[i].level;
    if (cur > prev + 1) {
      skips.push(`H${prev}→H${cur}`);
    }
  }
  if (skips.length) {
    const uniq = [...new Set(skips)];
    issues.push(`skip: ${uniq.slice(0, 3).join(", ")}${uniq.length > 3 ? ` +${uniq.length - 3}` : ""}`);
  }

  return { counts, issues };
}

async function fetchOne(label, path) {
  const url = BASE + path;
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": "heading-audit/1.0" } });
    if (!res.ok) {
      return { label, path, http: res.status, error: `HTTP ${res.status}`, counts: {}, issues: [] };
    }
    const html = await res.text();
    const headings = extractHeadings(html);
    const { counts, issues } = analyze(headings);
    return { label, path, http: res.status, counts, issues, first: headings[0]?.text || "", total: headings.length };
  } catch (e) {
    return { label, path, http: 0, error: String(e?.message || e), counts: {}, issues: [] };
  }
}

const results = await Promise.all(PAGES.map(([l, p]) => fetchOne(l, p)));

function pad(s, n) {
  s = String(s);
  if (s.length >= n) return s.slice(0, n);
  return s + " ".repeat(n - s.length);
}

const cols = [
  ["Page Template", 28],
  ["Path", 32],
  ["HTTP", 5],
  ["H1", 3],
  ["H2", 3],
  ["H3", 3],
  ["H4", 3],
  ["H5", 3],
  ["H6", 3],
  ["Tot", 4],
  ["Valid", 6],
  ["Issues", 50],
];

console.log("\n=== SEO Heading Structure Audit ===\n");
console.log(cols.map(([l, w]) => pad(l, w)).join(" | "));
console.log(cols.map(([, w]) => "-".repeat(w)).join("-+-"));

let okCount = 0;
let failCount = 0;
for (const r of results) {
  const c = r.counts || {};
  const valid = !r.error && r.issues.length === 0;
  if (valid) okCount++; else failCount++;
  const row = [
    pad(r.label, 28),
    pad(r.path, 32),
    pad(r.http || "-", 5),
    pad(c[1] ?? "-", 3),
    pad(c[2] ?? "-", 3),
    pad(c[3] ?? "-", 3),
    pad(c[4] ?? "-", 3),
    pad(c[5] ?? "-", 3),
    pad(c[6] ?? "-", 3),
    pad(r.total ?? "-", 4),
    pad(valid ? "PASS" : "FAIL", 6),
    pad(r.error ? r.error : (r.issues.join("; ") || "—"), 50),
  ];
  console.log(row.join(" | "));
}

console.log("\nSummary: " + okCount + " PASS, " + failCount + " FAIL (of " + results.length + ")");
console.log("\nFirst H1 (or first heading) per page:");
for (const r of results) {
  if (r.error) continue;
  console.log("  " + pad(r.label, 28) + " → " + (r.first || "(none)"));
}
