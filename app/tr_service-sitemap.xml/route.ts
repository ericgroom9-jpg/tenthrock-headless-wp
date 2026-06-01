import { NextResponse } from 'next/server';
import { proxyWordPressFile, getFrontendUrl } from '@/lib/seo-proxy';

export const revalidate = 1800;

export async function GET() {
  const frontendUrl = await getFrontendUrl();
  const result = await proxyWordPressFile('/tr_service-sitemap.xml', frontendUrl, true);

  if (!result) {
    return new NextResponse('Sitemap not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return new NextResponse(result.content, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
