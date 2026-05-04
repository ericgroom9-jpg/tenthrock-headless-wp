/**
 * Post Type & Page Template Configuration
 * 
 * Registry mapping WordPress post types and page templates to Next.js routes.
 * 
 * When adding a new custom post type in WordPress:
 * 1. Add it to POST_TYPE_CONFIG below
 * 2. Ensure the WordPress preview plugin has the same frontend route configured
 * 3. Test preview functionality from WordPress
 * 
 * When adding a new page template in WordPress:
 * 1. Add it to PAGE_TEMPLATE_CONFIG below
 * 2. Register the template in the "Register Page Templates" Code Snippet in WordPress
 * 3. Assign the template to a page in the WordPress editor
 */

export interface PostTypeConfig {
  /** The frontend route pattern (use [slug] as placeholder) */
  route: string;
  /** Content fetcher type - determines which GraphQL query to use */
  fetcher: 'post' | 'page' | 'cpt';
  /** Human-readable label for error messages */
  label: string;
  /** Whether this post type has individual single pages */
  hasSinglePage: boolean;
}

export interface PageTemplateConfig {
  /** WordPress template slug (stored in _wp_page_template post meta) */
  wpTemplate: string;
  /** The frontend route this template maps to */
  route: string;
  /** Human-readable label */
  label: string;
}

/**
 * Registered post types and their route configurations.
 * Keys are the WordPress post type slugs.
 */
export const POST_TYPE_CONFIG: Record<string, PostTypeConfig> = {
  post: {
    route: '/blog/[slug]',
    fetcher: 'post',
    label: 'Blog Post',
    hasSinglePage: true,
  },
  page: {
    route: '/[slug]',
    fetcher: 'page',
    label: 'Page',
    hasSinglePage: true,
  },
  tr_service: {
    route: '/services/[slug]',
    fetcher: 'cpt',
    label: 'Service',
    hasSinglePage: true,
  },
  tr_industry: {
    route: '/industries/[slug]',
    fetcher: 'cpt',
    label: 'Industry',
    hasSinglePage: true,
  },
  tr_testimonial: {
    route: '',
    fetcher: 'cpt',
    label: 'Testimonial',
    hasSinglePage: false,
  },
  tr_case_study: {
    route: '',
    fetcher: 'cpt',
    label: 'Case Study',
    hasSinglePage: false,
  },
  tr_faq: {
    route: '',
    fetcher: 'cpt',
    label: 'FAQ',
    hasSinglePage: false,
  },
  tr_partner_logo: {
    route: '',
    fetcher: 'cpt',
    label: 'Partner Logo',
    hasSinglePage: false,
  },
};

/**
 * Registered page templates and their route configurations.
 * Keys are descriptive identifiers; wpTemplate matches the WordPress template slug.
 */
export const PAGE_TEMPLATE_CONFIG: Record<string, PageTemplateConfig> = {
  homepage: {
    wpTemplate: 'template-homepage',
    route: '/',
    label: 'Homepage',
  },
  privacyPolicy: {
    wpTemplate: 'template-privacy-policy',
    route: '/privacy-policy',
    label: 'Privacy Policy',
  },
  termsOfService: {
    wpTemplate: 'template-terms-of-service',
    route: '/terms-of-service',
    label: 'Terms of Service',
  },
  commercialWaste: {
    wpTemplate: 'template-commercial-waste',
    route: '/services/commercial-waste',
    label: 'Commercial Waste Services',
  },
  whoWeServe: {
    wpTemplate: 'template-who-we-serve',
    route: '/who-we-serve',
    label: 'Who We Serve',
  },
  ourProcess: {
    wpTemplate: 'template-our-process',
    route: '/our-process',
    label: 'Our Process',
  },
  about: {
    wpTemplate: 'template-about',
    route: '/about',
    label: 'About Us',
  },
  locations: {
    wpTemplate: 'template-locations',
    route: '/locations',
    label: 'Where We Serve',
  },
  location: {
    wpTemplate: 'template-location',
    route: '/locations/[slug]',
    label: 'Location Template',
  },
  joinOurNetwork: {
    wpTemplate: 'template-join-our-network',
    route: '/join-our-network',
    label: 'Join Our Network',
  },
  faq: {
    wpTemplate: 'template-faq',
    route: '/faq',
    label: 'FAQs',
  },
  contact: {
    wpTemplate: 'template-contact',
    route: '/contact',
    label: 'Contact Us',
  },
  requestAService: {
    wpTemplate: 'template-request-a-service',
    route: '/request-a-service',
    label: 'Request A Service',
  },
  bookACall: {
    wpTemplate: 'template-book-a-call',
    route: '/book-a-call',
    label: 'Book a Call',
  },
  thankYou: {
    wpTemplate: 'template-thank-you',
    route: '/thank-you',
    label: 'Thank You',
  },
};

/**
 * Get configuration for a post type
 * Returns undefined if the post type is not registered (should 404)
 */
export function getPostTypeConfig(type: string): PostTypeConfig | undefined {
  return POST_TYPE_CONFIG[type];
}

/**
 * Check if a post type is registered
 */
export function isValidPostType(type: string): boolean {
  return type in POST_TYPE_CONFIG;
}

/**
 * Get all registered post type slugs
 */
export function getRegisteredPostTypes(): string[] {
  return Object.keys(POST_TYPE_CONFIG);
}

/**
 * Build the preview redirect path for a given post type and slug
 */
export function buildPreviewPath(type: string, slug: string): string | null {
  const config = getPostTypeConfig(type);
  if (!config || !config.hasSinglePage) return null;
  return config.route.replace('[slug]', slug);
}

/**
 * Find a page template config by its WordPress template slug
 */
export function getPageTemplateByWpSlug(wpTemplate: string): PageTemplateConfig | undefined {
  return Object.values(PAGE_TEMPLATE_CONFIG).find(t => t.wpTemplate === wpTemplate);
}

/**
 * Get the frontend route for a WordPress page template slug
 */
export function getRouteForTemplate(wpTemplate: string, slug?: string): string | null {
  const config = getPageTemplateByWpSlug(wpTemplate);
  if (!config) return null;
  if (slug && config.route.includes('[slug]')) {
    return config.route.replace('[slug]', slug);
  }
  return config.route;
}
