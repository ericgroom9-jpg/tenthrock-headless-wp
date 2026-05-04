import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const appDir = join(process.cwd(), 'app');

function extractMetadata(content) {
  const metaMatch = content.match(/export\s+const\s+metadata[\s\S]*?=\s*(\{[\s\S]*?\n\})\s*;/);
  if (metaMatch) return metaMatch[0];
  
  const metaTypeMatch = content.match(/export\s+const\s+metadata:\s*Metadata\s*=\s*(\{[\s\S]*?\n\})\s*;/);
  if (metaTypeMatch) return metaTypeMatch[0];
  
  return null;
}

function getExportName(content) {
  const m = content.match(/export\s+default\s+(?:async\s+)?function\s+(\w+)/);
  return m ? m[1] : 'Page';
}

function isServicePage(content) {
  return /ServiceTemplate/.test(content) && !/IndustryTemplate/.test(content);
}

function isIndustryPage(content) {
  return /IndustryTemplate/.test(content);
}

const serviceDirs = [];
const industryDirs = [];

for (const entry of readdirSync(appDir)) {
  const pagePath = join(appDir, entry, 'page.tsx');
  try {
    statSync(pagePath);
  } catch { continue; }
  
  if (entry === '[slug]' || entry === 'locations' || entry === 'faq') continue;
  
  const content = readFileSync(pagePath, 'utf-8');
  if (isServicePage(content)) {
    serviceDirs.push({ slug: entry, path: pagePath, content });
  } else if (isIndustryPage(content)) {
    industryDirs.push({ slug: entry, path: pagePath, content });
  }
}

console.log(`Found ${serviceDirs.length} service pages, ${industryDirs.length} industry pages`);

for (const { slug, path: pagePath, content } of serviceDirs) {
  const exportName = getExportName(content);
  const metadata = extractMetadata(content);
  
  let metadataBlock = '';
  if (metadata) {
    const needsImport = metadata.includes(': Metadata');
    metadataBlock = metadata;
    if (!needsImport) {
      metadataBlock = metadata.replace('export const metadata', 'export const metadata: Metadata');
    }
  }
  
  const newContent = `import { fetchServiceWithAcf } from '@/lib/wordpress';
import ServiceTemplate from "@/components/services/ServiceTemplate";
import type { Metadata } from "next";

${metadataBlock || `export const metadata: Metadata = {\n  title: "${exportName.replace(/Page$/, '')} | Tenth Rock",\n};`}

export default async function ${exportName}() {
  const data = await fetchServiceWithAcf('${slug}');
  if (!data) return null;
  return <ServiceTemplate {...data} />;
}
`;
  
  writeFileSync(pagePath, newContent);
  console.log(`  Updated service: ${slug}`);
}

for (const { slug, path: pagePath, content } of industryDirs) {
  const exportName = getExportName(content);
  const metadata = extractMetadata(content);
  
  let metadataBlock = '';
  if (metadata) {
    const needsImport = metadata.includes(': Metadata');
    metadataBlock = metadata;
    if (!needsImport) {
      metadataBlock = metadata.replace('export const metadata', 'export const metadata: Metadata');
    }
  }
  
  const newContent = `import { fetchIndustryWithAcf } from '@/lib/wordpress';
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import type { Metadata } from "next";

${metadataBlock || `export const metadata: Metadata = {\n  title: "${exportName.replace(/Page$/, '')} | Tenth Rock",\n};`}

export default async function ${exportName}() {
  const data = await fetchIndustryWithAcf('${slug}');
  if (!data) return null;
  return <IndustryTemplate {...data} />;
}
`;
  
  writeFileSync(pagePath, newContent);
  console.log(`  Updated industry: ${slug}`);
}

console.log('Done!');
