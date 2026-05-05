#!/usr/bin/env node
/**
 * Extract hardcoded service & industry data from page.tsx files and inject into WordPress.
 * Uses correct ACF field names matching the registered field groups.
 */
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpPost(endpoint, data) {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${AUTH}` },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`WP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  return json;
}

function extractStringProp(content, propName) {
  const patterns = [
    new RegExp(`${propName}="([^"]*)"`, 's'),
    new RegExp(`${propName}={'([^']*)'}`),
  ];
  for (const p of patterns) {
    const m = content.match(p);
    if (m) return m[1].trim();
  }
  const varRef = content.match(new RegExp(`${propName}=\\{(\\w+)\\}`));
  if (varRef) return varRef[1];
  return '';
}

function extractJSBlock(content, varName) {
  const startPattern = new RegExp(`(?:const|let|var)\\s+${varName}\\s*(?::[^=]*)?=\\s*`, 'g');
  const m = startPattern.exec(content);
  if (!m) return null;
  let start = m.index + m[0].length;
  let depth = 0, inString = false, stringChar = '', i = start;
  while (i < content.length) {
    const ch = content[i];
    if (inString) { if (ch === '\\') { i += 2; continue; } if (ch === stringChar) inString = false; }
    else {
      if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; }
      else if (ch === '[' || ch === '{' || ch === '(') depth++;
      else if (ch === ']' || ch === '}' || ch === ')') { depth--; if (depth === 0) { i++; break; } }
    }
    i++;
  }
  return content.slice(start, i);
}

function extractInlineProp(content, propName) {
  const pattern = new RegExp(`${propName}=\\{(\\[)`, 'g');
  const m = pattern.exec(content);
  if (!m) return null;
  let start = m.index + m[0].length - 1;
  let depth = 0, inString = false, stringChar = '', i = start;
  while (i < content.length) {
    const ch = content[i];
    if (inString) { if (ch === '\\') { i += 2; continue; } if (ch === stringChar) inString = false; }
    else {
      if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; }
      else if (ch === '[' || ch === '{') depth++;
      else if (ch === ']' || ch === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    i++;
  }
  return content.slice(start, i);
}

function extractInlineObjectProp(content, propName) {
  const pattern = new RegExp(`${propName}=\\{(\\{)`, 'g');
  const m = pattern.exec(content);
  if (!m) return null;
  let start = m.index + m[0].length - 1;
  let depth = 0, inString = false, stringChar = '', i = start;
  while (i < content.length) {
    const ch = content[i];
    if (inString) { if (ch === '\\') { i += 2; continue; } if (ch === stringChar) inString = false; }
    else {
      if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; }
      else if (ch === '[' || ch === '{') depth++;
      else if (ch === ']' || ch === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    i++;
  }
  return content.slice(start, i);
}

function safeEval(jsCode, vars = {}) {
  try {
    let cleaned = jsCode.replace(/\/\/.*$/gm, '').replace(/,\s*([\]}])/g, '$1');
    for (const [varName, varValue] of Object.entries(vars)) {
      cleaned = cleaned.replaceAll(varName, JSON.stringify(varValue));
    }
    return (new Function(`return (${cleaned})`))();
  } catch { return null; }
}

function resolveVariables(content) {
  const vars = {};
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*"([^"]+)"/g)) vars[m[1]] = m[2];
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*'([^']+)'/g)) vars[m[1]] = m[2];
  return vars;
}

function resolveRefs(obj, vars) {
  if (typeof obj === 'string') return vars[obj] || obj;
  if (Array.isArray(obj)) return obj.map(item => resolveRefs(item, vars));
  if (obj && typeof obj === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(obj)) r[k] = resolveRefs(v, vars);
    return r;
  }
  return obj;
}

function getBlock(content, name, vars = {}) {
  let raw = extractJSBlock(content, name);
  if (!raw) raw = extractInlineProp(content, name);
  return raw ? safeEval(raw, vars) : null;
}

function getObjBlock(content, name, vars = {}) {
  let raw = extractJSBlock(content, name);
  if (!raw) raw = extractInlineObjectProp(content, name);
  return raw ? safeEval(raw, vars) : null;
}

function extractServiceData(filePath, slug) {
  const content = readFileSync(filePath, 'utf-8');
  const vars = resolveVariables(content);

  let serviceName = extractStringProp(content, 'serviceName');
  let heroTitle = extractStringProp(content, 'heroTitle');
  let serviceDescription = extractStringProp(content, 'serviceDescription');
  let heroImage = extractStringProp(content, 'heroImage');
  if (heroImage && vars[heroImage]) heroImage = vars[heroImage];
  let aboutDescription = extractStringProp(content, 'aboutDescription');
  let ctaImage = extractStringProp(content, 'ctaImage');
  if (ctaImage && vars[ctaImage]) ctaImage = vars[ctaImage];
  let ctaImageAlt = extractStringProp(content, 'ctaImageAlt');
  let processSubtitle = extractStringProp(content, 'processSubtitle');
  let howItWorksIntro = extractStringProp(content, 'howItWorksIntro');

  let subServices = getBlock(content, 'subServices', vars);
  let aboutBullets = getBlock(content, 'aboutBullets', vars);
  let faqs = getBlock(content, 'faqs', vars);
  let processSteps = getBlock(content, 'processSteps', vars);
  let stats = getBlock(content, 'stats', vars);
  let howItWorksSteps = getBlock(content, 'howItWorksSteps', vars);
  let paragraphSection1 = getObjBlock(content, 'paragraphSection1', vars);
  let paragraphSection2 = getObjBlock(content, 'paragraphSection2', vars);

  const metaMatch = content.match(/title:\s*"([^"]*)"/);
  const metaDescMatch = content.match(/description:\s*"([^"]*)"/);

  return {
    slug, serviceName, heroTitle, serviceDescription, heroImage, aboutDescription,
    aboutBullets, subServices, processSteps, processSubtitle, faqs, stats,
    paragraphSection1, paragraphSection2, howItWorksIntro, howItWorksSteps,
    ctaImage, ctaImageAlt,
    metaTitle: metaMatch?.[1] || '', metaDescription: metaDescMatch?.[1] || '',
  };
}

function extractIndustryData(filePath, slug) {
  const content = readFileSync(filePath, 'utf-8');
  const industryName = extractStringProp(content, 'industryName');
  const heroImage = extractStringProp(content, 'heroImage');
  const heroDescription = extractStringProp(content, 'heroDescription');
  const aboutTitle = extractStringProp(content, 'aboutTitle');
  const aboutImage = extractStringProp(content, 'aboutImage');

  const vars = resolveVariables(content);
  let bulletPoints = getBlock(content, 'bulletPoints', vars);
  let faqs = getBlock(content, 'faqs', vars);
  let paragraphSection1 = getObjBlock(content, 'paragraphSection1', vars);
  let paragraphSection2 = getObjBlock(content, 'paragraphSection2', vars);
  let paragraphSection3 = getObjBlock(content, 'paragraphSection3', vars);

  return {
    slug, industryName, heroImage, heroDescription, aboutTitle, aboutImage,
    bulletPoints, faqs, paragraphSection1, paragraphSection2, paragraphSection3,
  };
}

async function main() {
  const appDir = join(process.cwd(), 'app');
  const skipSlugs = ['[slug]', 'faq', 'about', 'blog', 'contact', 'locations', 'landing-demo',
    'book-a-call', 'commercial-waste', 'join-our-network', 'our-process', 'privacy-policy',
    'request-a-service', 'style-guide', 'vendor-onboarding', 'who-we-serve'];

  const serviceSlugs = [], industrySlugs = [];
  for (const dir of readdirSync(appDir)) {
    if (skipSlugs.includes(dir)) continue;
    const pagePath = join(appDir, dir, 'page.tsx');
    if (!existsSync(pagePath)) continue;
    const content = readFileSync(pagePath, 'utf-8');
    if (content.includes('ServiceTemplate')) serviceSlugs.push(dir);
    else if (content.includes('IndustryTemplate')) industrySlugs.push(dir);
  }

  console.log(`Found ${serviceSlugs.length} service pages, ${industrySlugs.length} industry pages\n`);

  console.log('=== CREATING SERVICES ===');
  let svcOrder = 0;
  for (const slug of serviceSlugs) {
    const filePath = join(appDir, slug, 'page.tsx');
    const data = extractServiceData(filePath, slug);

    const acf = {
      hero_title: data.heroTitle || data.serviceName,
      hero_description: data.serviceDescription,
      hero_image: data.heroImage || '',
      about_description: data.aboutDescription || '',
      about_bullets: (data.aboutBullets || []).map(b => ({ bullet_text: b })),
      sub_services: (data.subServices || []).map(s => ({
        sub_title: s.title,
        sub_description: s.description,
        sub_image: s.image || '',
        sub_link: s.link || '',
        sub_features: (s.features || []).map(f => ({ feature_text: f })),
      })),
      process_steps: (data.processSteps || []).map(s => ({
        step_num: s.num,
        step_title: s.title,
        step_desc: s.desc,
      })),
      process_subtitle: data.processSubtitle || '',
      faqs: (data.faqs || []).map(f => ({
        question: f.question,
        answer: f.answer,
      })),
      stats: (data.stats || []).map(s => ({
        stat_value: s.value,
        stat_label: s.label,
        stat_description: s.description || '',
      })),
      para1_badge: data.paragraphSection1?.badge || '',
      para1_heading: data.paragraphSection1?.heading || '',
      para1_body: data.paragraphSection1?.body || '',
      para1_image: data.paragraphSection1?.image || '',
      para1_image_alt: data.paragraphSection1?.imageAlt || '',
      para1_bullets: (data.paragraphSection1?.bulletPoints || []).map(b => ({ bullet_text: b })),
      para2_badge: data.paragraphSection2?.badge || '',
      para2_heading: data.paragraphSection2?.heading || '',
      para2_body: data.paragraphSection2?.body || '',
      para2_image: data.paragraphSection2?.image || '',
      para2_image_alt: data.paragraphSection2?.imageAlt || '',
      para2_bullets: (data.paragraphSection2?.bulletPoints || []).map(b => ({ bullet_text: b })),
      how_it_works_intro: data.howItWorksIntro || '',
      how_it_works_steps: (data.howItWorksSteps || []).map(s => ({
        step_title: s.title,
        step_desc: s.desc,
      })),
      cta_image: data.ctaImage || '',
      cta_image_alt: data.ctaImageAlt || '',
    };

    try {
      const post = await wpPost('tr_service', {
        title: data.serviceName || slug,
        slug: slug,
        status: 'publish',
        acf,
      });
      const subCount = (data.subServices || []).length;
      const faqCount = (data.faqs || []).length;
      console.log(`  OK: ${data.serviceName || slug} => ID ${post.id} (${subCount} subs, ${faqCount} faqs)`);
    } catch (e) {
      console.error(`  FAIL: ${slug}: ${e.message}`);
    }
    svcOrder++;
  }

  console.log('\n=== CREATING INDUSTRIES ===');
  let indOrder = 0;
  for (const slug of industrySlugs) {
    const filePath = join(appDir, slug, 'page.tsx');
    const data = extractIndustryData(filePath, slug);

    const acf = {
      hero_description: data.heroDescription,
      hero_image: data.heroImage || '',
      about_title: data.aboutTitle || '',
      about_image: data.aboutImage || '',
      about_bullets: (data.bulletPoints || []).map(b => ({
        bullet_title: b.title,
        bullet_description: b.description,
      })),
      faqs: (data.faqs || []).map(f => ({
        question: f.question,
        answer: f.answer,
      })),
      para1_badge: data.paragraphSection1?.badge || '',
      para1_heading: data.paragraphSection1?.heading || '',
      para1_body: data.paragraphSection1?.body || '',
      para1_image: data.paragraphSection1?.image || '',
      para1_image_alt: data.paragraphSection1?.imageAlt || '',
      para1_bullets: (data.paragraphSection1?.bulletPoints || []).map(b => ({ bullet_text: b })),
      para2_badge: data.paragraphSection2?.badge || '',
      para2_heading: data.paragraphSection2?.heading || '',
      para2_body: data.paragraphSection2?.body || '',
      para2_image: data.paragraphSection2?.image || '',
      para2_image_alt: data.paragraphSection2?.imageAlt || '',
      para2_bullets: (data.paragraphSection2?.bulletPoints || []).map(b => ({ bullet_text: b })),
      para3_badge: data.paragraphSection3?.badge || '',
      para3_heading: data.paragraphSection3?.heading || '',
      para3_body: data.paragraphSection3?.body || '',
      para3_image: data.paragraphSection3?.image || '',
      para3_image_alt: data.paragraphSection3?.imageAlt || '',
      para3_bullets: (data.paragraphSection3?.bulletPoints || []).map(b => ({ bullet_text: b })),
    };

    try {
      const post = await wpPost('tr_industry', {
        title: data.industryName || slug,
        slug: slug,
        status: 'publish',
        acf,
      });
      const bpCount = (data.bulletPoints || []).length;
      const faqCount = (data.faqs || []).length;
      console.log(`  OK: ${data.industryName || slug} => ID ${post.id} (${bpCount} bullets, ${faqCount} faqs)`);
    } catch (e) {
      console.error(`  FAIL: ${slug}: ${e.message}`);
    }
    indOrder++;
  }

  console.log('\nDone!');
}

main().catch(console.error);
