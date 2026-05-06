#!/usr/bin/env node
/**
 * Recovery script: read original hardcoded service/industry page.tsx files from
 * git commit ea2eb3ca (the last commit before they were stubbed out to fetch
 * from WP), extract data, and UPDATE the corresponding WordPress posts with
 * proper title + full ACF payload.
 */
import { execSync } from 'child_process';

const SOURCE_COMMIT = 'ea2eb3ca';
const WP_URL = process.env.WP_API_URL?.replace('/graphql', '') || '';
const AUTH = Buffer.from(`${process.env.preview_user_un}:${process.env.preview_user_pass}`).toString('base64');

async function wpReq(method, endpoint, data) {
  const init = {
    method,
    headers: { 'Authorization': `Basic ${AUTH}` },
  };
  if (data) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(data);
  }
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, init);
  const json = await res.json();
  if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

async function findPostBySlug(cpt, slug) {
  const list = await wpReq('GET', `${cpt}?slug=${encodeURIComponent(slug)}&_fields=id,title,slug`);
  return list[0] || null;
}

function gitShow(commit, path) {
  try {
    return execSync(`git --no-optional-locks show ${commit}:${path}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
  } catch {
    return null;
  }
}

function gitListFiles(commit, dir) {
  try {
    const out = execSync(`git --no-optional-locks ls-tree --name-only ${commit} ${dir}`, { encoding: 'utf-8' });
    return out.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

// ─── Extractor (lifted/adapted from extract-and-inject-services.mjs) ───
function extractStringProp(content, propName) {
  const patterns = [
    new RegExp(`${propName}="([^"]*)"`, 's'),
    new RegExp(`${propName}=\\{"([^"]*)"\\}`, 's'),
    new RegExp(`${propName}=\\{'([^']*)'\\}`),
    new RegExp(`${propName}=\\{\`([^\`]*)\`\\}`, 's'),
  ];
  for (const p of patterns) {
    const m = content.match(p);
    if (m) return m[1].trim();
  }
  const varRef = content.match(new RegExp(`${propName}=\\{(\\w+)\\}`));
  if (varRef) return varRef[1];
  return '';
}

function extractTopLevelBlock(content, varName) {
  const startPattern = new RegExp(`(?:const|let|var)\\s+${varName}\\s*(?::[^=]*)?=\\s*`, 'g');
  const m = startPattern.exec(content);
  if (!m) return null;
  let i = m.index + m[0].length;
  let depth = 0, inString = false, stringChar = '', start = i;
  while (i < content.length) {
    const ch = content[i];
    if (inString) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === stringChar) inString = false;
    } else {
      if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; }
      else if (ch === '[' || ch === '{' || ch === '(') depth++;
      else if (ch === ']' || ch === '}' || ch === ')') { depth--; if (depth === 0) { i++; break; } }
    }
    i++;
  }
  return content.slice(start, i);
}

function extractInlineProp(content, propName, openBracket) {
  const pattern = new RegExp(`${propName}=\\{(\\${openBracket})`, 'g');
  const m = pattern.exec(content);
  if (!m) return null;
  let start = m.index + m[0].length - 1;
  let depth = 0, inString = false, stringChar = '', i = start;
  while (i < content.length) {
    const ch = content[i];
    if (inString) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === stringChar) inString = false;
    } else {
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
    // Replace bare identifiers (image vars) with their string values
    for (const [k, v] of Object.entries(vars)) {
      cleaned = cleaned.replace(new RegExp(`\\b${k}\\b`, 'g'), JSON.stringify(v));
    }
    return (new Function(`return (${cleaned})`))();
  } catch (e) {
    return null;
  }
}

function resolveVariables(content) {
  const vars = {};
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*"([^"]+)"/g)) vars[m[1]] = m[2];
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*'([^']+)'/g)) vars[m[1]] = m[2];
  return vars;
}

function getArrBlock(content, name, vars) {
  let raw = extractTopLevelBlock(content, name);
  if (!raw) raw = extractInlineProp(content, name, '[');
  return raw ? safeEval(raw, vars) : null;
}
function getObjBlock(content, name, vars) {
  let raw = extractTopLevelBlock(content, name);
  if (!raw) raw = extractInlineProp(content, name, '{');
  return raw ? safeEval(raw, vars) : null;
}
function resolveImageProp(value, vars) {
  if (!value) return '';
  return vars[value] || value;
}

function extractServiceData(content) {
  const vars = resolveVariables(content);
  const serviceName = extractStringProp(content, 'serviceName');
  const heroTitle = extractStringProp(content, 'heroTitle');
  const serviceDescription = extractStringProp(content, 'serviceDescription');
  const heroImage = resolveImageProp(extractStringProp(content, 'heroImage'), vars);
  const aboutDescription = extractStringProp(content, 'aboutDescription');
  const ctaImage = resolveImageProp(extractStringProp(content, 'ctaImage'), vars);
  const ctaImageAlt = extractStringProp(content, 'ctaImageAlt');
  const processSubtitle = extractStringProp(content, 'processSubtitle');
  const howItWorksIntro = extractStringProp(content, 'howItWorksIntro');

  const subServices = getArrBlock(content, 'subServices', vars) || [];
  const aboutBullets = getArrBlock(content, 'aboutBullets', vars) || [];
  const faqs = getArrBlock(content, 'faqs', vars) || [];
  const processSteps = getArrBlock(content, 'processSteps', vars) || [];
  const stats = getArrBlock(content, 'stats', vars) || [];
  const howItWorksSteps = getArrBlock(content, 'howItWorksSteps', vars) || [];
  const paragraphSection1 = getObjBlock(content, 'paragraphSection1', vars);
  const paragraphSection2 = getObjBlock(content, 'paragraphSection2', vars);

  const metaTitle = (content.match(/title:\s*"([^"]*)"/) || [])[1] || '';
  const metaDescription = (content.match(/description:\s*"([^"]*)"/) || [])[1] || '';

  return {
    serviceName, heroTitle, serviceDescription, heroImage, aboutDescription,
    aboutBullets, subServices, processSteps, processSubtitle, faqs, stats,
    paragraphSection1, paragraphSection2, howItWorksIntro, howItWorksSteps,
    ctaImage, ctaImageAlt, metaTitle, metaDescription,
  };
}

function extractIndustryData(content) {
  const vars = resolveVariables(content);
  const industryName = extractStringProp(content, 'industryName');
  const heroImage = resolveImageProp(extractStringProp(content, 'heroImage'), vars);
  const heroDescription = extractStringProp(content, 'heroDescription');
  const aboutTitle = extractStringProp(content, 'aboutTitle');
  const aboutImage = resolveImageProp(extractStringProp(content, 'aboutImage'), vars);
  const bulletPoints = getArrBlock(content, 'bulletPoints', vars) || [];
  const faqs = getArrBlock(content, 'faqs', vars) || [];
  const paragraphSection1 = getObjBlock(content, 'paragraphSection1', vars);
  const paragraphSection2 = getObjBlock(content, 'paragraphSection2', vars);
  const paragraphSection3 = getObjBlock(content, 'paragraphSection3', vars);
  const metaTitle = (content.match(/title:\s*"([^"]*)"/) || [])[1] || '';
  const metaDescription = (content.match(/description:\s*"([^"]*)"/) || [])[1] || '';
  return {
    industryName, heroImage, heroDescription, aboutTitle, aboutImage,
    bulletPoints, faqs, paragraphSection1, paragraphSection2, paragraphSection3,
    metaTitle, metaDescription,
  };
}

function buildServiceAcf(d) {
  return {
    hero_title: d.heroTitle || d.serviceName,
    hero_description: d.serviceDescription,
    hero_image: d.heroImage || '',
    about_description: d.aboutDescription || '',
    about_bullets: (d.aboutBullets || []).map(b => ({ bullet_text: b })),
    sub_services: (d.subServices || []).map(s => ({
      sub_title: s.title || '',
      sub_description: s.description || '',
      sub_image: s.image || '',
      sub_link: s.link || '',
      sub_features: (s.features || []).map(f => ({ feature_text: f })),
    })),
    process_steps: (d.processSteps || []).map(s => ({
      step_num: s.num || '', step_title: s.title || '', step_desc: s.desc || '',
    })),
    process_subtitle: d.processSubtitle || '',
    faqs: (d.faqs || []).map(f => ({ question: f.question || '', answer: f.answer || '' })),
    stats: (d.stats || []).map(s => ({
      stat_value: s.value || '', stat_label: s.label || '', stat_description: s.description || '',
    })),
    para1_badge: d.paragraphSection1?.badge || '',
    para1_heading: d.paragraphSection1?.heading || '',
    para1_body: d.paragraphSection1?.body || '',
    para1_image: d.paragraphSection1?.image || '',
    para1_image_alt: d.paragraphSection1?.imageAlt || '',
    para1_bullets: (d.paragraphSection1?.bulletPoints || []).map(b => ({ bullet_text: b })),
    para2_badge: d.paragraphSection2?.badge || '',
    para2_heading: d.paragraphSection2?.heading || '',
    para2_body: d.paragraphSection2?.body || '',
    para2_image: d.paragraphSection2?.image || '',
    para2_image_alt: d.paragraphSection2?.imageAlt || '',
    para2_bullets: (d.paragraphSection2?.bulletPoints || []).map(b => ({ bullet_text: b })),
    how_it_works_intro: d.howItWorksIntro || '',
    how_it_works_steps: (d.howItWorksSteps || []).map(s => ({
      step_title: s.title || '', step_desc: s.desc || '',
    })),
    cta_image: d.ctaImage || '',
    cta_image_alt: d.ctaImageAlt || '',
  };
}

function buildIndustryAcf(d) {
  return {
    hero_description: d.heroDescription,
    hero_image: d.heroImage || '',
    about_title: d.aboutTitle || '',
    about_image: d.aboutImage || '',
    about_bullets: (d.bulletPoints || []).map(b => ({
      bullet_title: b.title || '', bullet_description: b.description || '',
    })),
    faqs: (d.faqs || []).map(f => ({ question: f.question || '', answer: f.answer || '' })),
    para1_badge: d.paragraphSection1?.badge || '',
    para1_heading: d.paragraphSection1?.heading || '',
    para1_body: d.paragraphSection1?.body || '',
    para1_image: d.paragraphSection1?.image || '',
    para1_image_alt: d.paragraphSection1?.imageAlt || '',
    para1_bullets: (d.paragraphSection1?.bulletPoints || []).map(b => ({ bullet_text: b })),
    para2_badge: d.paragraphSection2?.badge || '',
    para2_heading: d.paragraphSection2?.heading || '',
    para2_body: d.paragraphSection2?.body || '',
    para2_image: d.paragraphSection2?.image || '',
    para2_image_alt: d.paragraphSection2?.imageAlt || '',
    para2_bullets: (d.paragraphSection2?.bulletPoints || []).map(b => ({ bullet_text: b })),
    para3_badge: d.paragraphSection3?.badge || '',
    para3_heading: d.paragraphSection3?.heading || '',
    para3_body: d.paragraphSection3?.body || '',
    para3_image: d.paragraphSection3?.image || '',
    para3_image_alt: d.paragraphSection3?.imageAlt || '',
    para3_bullets: (d.paragraphSection3?.bulletPoints || []).map(b => ({ bullet_text: b })),
  };
}

async function processOne(cpt, slug, kind, buildAcf, extract) {
  const content = gitShow(SOURCE_COMMIT, `app/${slug}/page.tsx`);
  if (!content) {
    console.log(`  SKIP ${slug}: no source in ${SOURCE_COMMIT}`);
    return;
  }
  const data = extract(content);
  const post = await findPostBySlug(cpt, slug);
  if (!post) { console.log(`  MISS ${slug}: no WP post`); return; }
  const titleField = kind === 'service' ? 'serviceName' : 'industryName';
  const title = data[titleField] || slug;
  const acf = buildAcf(data);
  try {
    await wpReq('POST', `${cpt}/${post.id}`, { title, status: 'publish', acf });
    const subs = data.subServices?.length || data.bulletPoints?.length || 0;
    const faqs = data.faqs?.length || 0;
    console.log(`  OK ${slug} (id ${post.id}): "${title}" — ${subs} items, ${faqs} faqs`);
  } catch (e) {
    console.error(`  FAIL ${slug}: ${e.message}`);
  }
}

async function main() {
  console.log(`Recovering content from git commit ${SOURCE_COMMIT}\n`);

  // Discover service/industry slugs from the OLD commit
  const oldFiles = gitListFiles(SOURCE_COMMIT, 'app/');
  const skip = new Set(['[slug]', 'faq', 'about', 'blog', 'contact', 'locations', 'landing-demo',
    'book-a-call', 'commercial-waste', 'join-our-network', 'our-process', 'privacy-policy',
    'request-a-service', 'style-guide', 'vendor-onboarding', 'who-we-serve', 'api']);
  const services = [], industries = [];
  for (const f of oldFiles) {
    const parts = f.split('/');
    if (parts.length < 2) continue;
    const dir = parts[1];
    if (skip.has(dir)) continue;
    const c = gitShow(SOURCE_COMMIT, `app/${dir}/page.tsx`);
    if (!c) continue;
    if (/ServiceTemplate/.test(c) && !/IndustryTemplate/.test(c)) services.push(dir);
    else if (/IndustryTemplate/.test(c)) industries.push(dir);
  }
  console.log(`Found ${services.length} services, ${industries.length} industries in source\n`);

  console.log('=== SERVICES ===');
  for (const s of services) await processOne('tr_service', s, 'service', buildServiceAcf, extractServiceData);

  console.log('\n=== INDUSTRIES ===');
  for (const s of industries) await processOne('tr_industry', s, 'industry', buildIndustryAcf, extractIndustryData);

  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
