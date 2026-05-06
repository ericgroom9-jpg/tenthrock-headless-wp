#!/usr/bin/env node
/**
 * Seed the 8 WordPress nav menus from the static front-end content,
 * then assign each to its registered location.
 *
 * Idempotent: if a menu of the given name already exists, its items
 * are left alone (we only touch menus we just created). Run with
 * --force to delete and re-seed every menu.
 *
 * Usage:
 *   node scripts/seed-nav-menus.mjs           # create-if-missing
 *   node scripts/seed-nav-menus.mjs --force   # wipe + reseed all
 */

const WP_API_URL = process.env.WP_API_URL;
const USER       = process.env.preview_user_un || process.env.PREVIEW_USER_UN;
const PASS       = process.env.preview_user_pass || process.env.PREVIEW_USER_PASS;
if (!WP_API_URL || !USER || !PASS) {
  console.error('Missing env: WP_API_URL, preview_user_un, preview_user_pass');
  process.exit(1);
}
const FORCE = process.argv.includes('--force');
const baseUrl = WP_API_URL.replace(/\/graphql\/?$/, '');
const auth = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64');

async function api(method, endpoint, body) {
  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}/wp-json${endpoint}`;
  const opts = { method, headers: { 'Content-Type': 'application/json', Authorization: auth } };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} → ${res.status}: ${typeof json === 'string' ? json.slice(0, 400) : JSON.stringify(json).slice(0, 400)}`);
  }
  return json;
}

// ───────────────── menu definitions ─────────────────
// Each item: { title, url, children?: [...] }
const STATES = [
  'Alabama','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const MENUS = [
  {
    location: 'primary',
    name: 'Primary Navigation',
    items: [
      { title: 'Waste Management Services', url: '/commercial-waste', children: [
        { title: 'Emergency Waste Removal', url: '/emergency-waste-removal', children: [
          { title: 'Emergency Product & Perishable Removal', url: '/emergency-product-removal' },
          { title: 'Site Stabilization', url: '/site-stabilization' },
          { title: 'Unplanned Cleanouts & Debris Removal', url: '/unplanned-cleanouts' },
        ]},
        { title: 'Specialized Project Logistics', url: '/specialized-project-logistics', children: [
          { title: 'Site Closures & Remodels', url: '/site-closures-remodels' },
          { title: 'Events & Stadiums', url: '/events-stadiums' },
          { title: 'Natural Disasters', url: '/natural-disaster-mobilization' },
        ]},
        { title: 'Dumpster Rentals', url: '/dumpsters-containers', children: [
          { title: 'On-Demand Service', url: '/on-demand-service' },
          { title: 'Multiple Sizes', url: '/multiple-sizes' },
          { title: 'Recycling Dumpsters', url: '/recycling-specialty-containers' },
        ]},
        { title: 'Waste Advisory', url: '/waste-operations-advisory', children: [
          { title: 'Waste Program Assessments & Roadmaps', url: '/waste-program-assessments' },
          { title: 'Standards & Vendor Training', url: '/standards-sops-training' },
          { title: 'Ongoing Advisory & Program Implementation', url: '/ongoing-advisory' },
        ]},
      ]},
      { title: 'Who We Serve', url: '/who-we-serve', children: [
        { title: 'Retail', url: '/retail' },
        { title: 'Stadiums & Events', url: '/stadiums-events' },
        { title: 'Faith Based', url: '/faith-based' },
        { title: 'Real Estate', url: '/real-estate' },
        { title: 'Natural Disasters', url: '/natural-disasters' },
        { title: 'Hospitality', url: '/hospitality' },
        { title: 'Educational', url: '/educational' },
        { title: 'Municipalities', url: '/municipalities' },
      ]},
      { title: 'Locations', url: '/locations' },
      { title: 'About Us', url: '/about', children: [
        { title: 'About Us', url: '/about' },
        { title: 'Join Our Network', url: '/join-our-network' },
        { title: 'FAQ', url: '/faq' },
        { title: 'Contact Us', url: '/contact' },
      ]},
    ],
  },
  {
    location: 'header-ctas',
    name: 'Header CTAs',
    items: [
      { title: 'Login', url: '/login' },
      { title: 'Request A Service', url: '/request-a-service' },
    ],
  },
  {
    location: 'locations-dropdown',
    name: 'Locations Dropdown',
    items: STATES.map(s => ({
      title: s,
      url: '/locations/' + s.toLowerCase().replace(/\s+/g, '-'),
    })),
  },
  {
    location: 'footer-services',
    name: 'Footer — Services',
    items: [
      { title: 'Emergency Waste Removal', url: '/emergency-waste-removal' },
      { title: 'Specialized Project Logistics', url: '/specialized-project-logistics' },
      { title: 'Dumpster Rentals', url: '/dumpsters-containers' },
      { title: 'Waste Advisory', url: '/waste-operations-advisory' },
    ],
  },
  {
    location: 'footer-industries',
    name: 'Footer — Industries',
    items: [
      { title: 'Retail', url: '/retail' },
      { title: 'Stadiums & Events', url: '/stadiums-events' },
      { title: 'Faith Based', url: '/faith-based' },
      { title: 'Real Estate', url: '/real-estate' },
      { title: 'Natural Disasters', url: '/natural-disasters' },
      { title: 'Hospitality', url: '/hospitality' },
      { title: 'Educational', url: '/educational' },
      { title: 'Municipalities', url: '/municipalities' },
    ],
  },
  {
    location: 'footer-company',
    name: 'Footer — Company',
    items: [
      { title: 'About Us', url: '/about' },
      { title: 'Our Process', url: '/our-process' },
      { title: 'Who We Serve', url: '/who-we-serve' },
      { title: 'Locations', url: '/locations' },
      { title: 'Success Stories', url: '#' },
      { title: 'Join Our Network', url: '/join-our-network' },
      { title: 'FAQ', url: '/faq' },
      { title: 'Contact', url: '/contact' },
      { title: 'Request A Service', url: '/request-a-service' },
    ],
  },
  {
    location: 'footer-legal',
    name: 'Footer — Legal',
    items: [
      { title: 'Privacy Policy', url: '/privacy-policy' },
      { title: 'Terms of Service', url: '/terms-of-service' },
    ],
  },
  {
    location: 'footer-social',
    name: 'Footer — Social',
    items: [
      { title: 'LinkedIn',  url: '#' },
      { title: 'Twitter',   url: '#' },
      { title: 'Instagram', url: '#' },
      { title: 'Facebook',  url: '#' },
    ],
  },
];

async function findMenuByName(name) {
  const all = await api('GET', '/wp/v2/menus?per_page=100');
  return Array.isArray(all) ? all.find(m => m.name === name) : null;
}

async function deleteMenu(id) {
  await api('DELETE', `/wp/v2/menus/${id}?force=true`);
}

async function createMenu(name) {
  return api('POST', '/wp/v2/menus', { name });
}

// Insert one menu item, return its new ID.
async function createMenuItem({ menuId, parentId, title, url, order }) {
  const body = {
    title,
    url,
    menus: menuId,
    parent: parentId || 0,
    menu_order: order,
    status: 'publish',
    type: 'custom',
  };
  const res = await api('POST', '/wp/v2/menu-items', body);
  return res.id;
}

async function assignMenuToLocation(menuId, location) {
  // The WP REST `menu-locations` endpoint is read-only. Setting locations
  // requires updating the active theme's `nav_menu_locations` theme mod.
  // We expose this via a custom action below, falling back to the plugin
  // helper if available.
  await api('POST', '/headless/v1/assign-menu', { menu_id: menuId, location });
}

async function seedMenu(def) {
  const existing = await findMenuByName(def.name);
  if (existing && !FORCE) {
    console.log(`= "${def.name}" already exists (id=${existing.id}) — leaving items alone.`);
    await assignMenuToLocation(existing.id, def.location);
    console.log(`  ↪ assigned to "${def.location}"`);
    return;
  }
  if (existing && FORCE) {
    console.log(`× deleting existing "${def.name}" (id=${existing.id})`);
    await deleteMenu(existing.id);
  }

  const created = await createMenu(def.name);
  console.log(`+ created "${def.name}" (id=${created.id})`);

  // Recursively insert items at any depth.
  async function insertItems(items, parentId) {
    let order = 0;
    for (const item of items) {
      order += 10;
      const id = await createMenuItem({
        menuId: created.id, parentId,
        title: item.title, url: item.url, order,
      });
      if (Array.isArray(item.children) && item.children.length) {
        await insertItems(item.children, id);
      }
    }
  }
  await insertItems(def.items, 0);
  console.log(`  ↪ inserted ${def.items.length} top-level item(s)`);

  await assignMenuToLocation(created.id, def.location);
  console.log(`  ↪ assigned to "${def.location}"`);
}

(async () => {
  console.log(`🌱 Seeding ${MENUS.length} nav menus${FORCE ? ' (force)' : ''}...`);
  for (const def of MENUS) {
    try {
      await seedMenu(def);
    } catch (e) {
      console.error(`  ✗ ${def.name}: ${e.message}`);
    }
  }
  console.log('✅ Done. Visit Appearance → Menus in WP Admin to verify.');
})().catch(err => { console.error('❌', err.message); process.exit(1); });
