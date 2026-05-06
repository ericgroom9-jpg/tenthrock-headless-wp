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
  return NextResponse.json({
    location,
    tree,
    flat: flatten(tree),
  });
}
