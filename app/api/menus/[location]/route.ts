import { NextRequest, NextResponse } from 'next/server';
import { fetchMenu, flatten, type MenuLocation } from '@/lib/menus';

const VALID: MenuLocation[] = [
  'primary', 'header-ctas', 'locations-dropdown',
  'footer-services', 'footer-industries', 'footer-company',
  'footer-legal', 'footer-social',
];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ location: string }> }
) {
  const { location } = await params;
  if (!VALID.includes(location as MenuLocation)) {
    return NextResponse.json({ error: 'Unknown location' }, { status: 404 });
  }
  const tree = await fetchMenu(location as MenuLocation);
  // `tree === null` means either "no menu assigned" OR a transient WP failure
  // (fetchMenu collapses both). Only let browsers/CDN cache the response for the
  // full window when we actually have menu data — otherwise a transient outage
  // would pin fallback menus client-side for 30 min. On null we send no-store so
  // the next page view re-hits this (cheap) proxy; the WP REST call itself stays
  // protected by unstable_cache (which caches genuine empties and never caches
  // failures), so a recovered WP surfaces on that next view.
  const cacheControl =
    tree !== null
      ? 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=600'
      : 'no-store';
  return NextResponse.json(
    {
      location,
      tree,
      flat: flatten(tree),
    },
    { headers: { 'Cache-Control': cacheControl } },
  );
}
