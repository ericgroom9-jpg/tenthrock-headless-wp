import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.resolve("."),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    qualities: [50, 60, 70, 75, 80, 85, 90, 95],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https", hostname: "tenthrock.sherstaging.com" },
      { protocol: "https", hostname: "headlesstestsh.wpenginepowered.com" },
      { protocol: "https", hostname: "www.tenthrock.com" },
      { protocol: "https", hostname: "tenthrock.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
    ],
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.replit.app",
    "*.sisko.replit.dev",
    "*.pike.replit.dev",
    "*.kirk.replit.dev",
    "*.janeway.replit.dev",
    "*.picard.replit.dev",
    "127.0.0.1",
    "localhost",
  ],
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-icons",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
    ],
  },
  async redirects() {
    return [
      {
        source: "/natural-disaster-mobilization",
        destination: "/services/natural-disaster-cleanup",
        permanent: true,
      },
      {
        // Legacy stadium asset was deleted after the JPG → WebP perf
        // conversion (saves ~135KB per request). Any cached HTML, external
        // backlinks, or stale srcsets still pointing at the .jpg get a 301
        // to the new .webp so they never break.
        source: "/images/industries/industry-stadiums-events.jpg",
        destination: "/images/industries/industry-stadiums-events.webp",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/assets_export/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Optimized images served by Next's image pipeline. Browser cache for
        // 30 days; matches the upstream `minimumCacheTTL` so repeat visits
        // and PSI re-runs reuse the same /_next/image responses.
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      ...(isDev
        ? []
        : [
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]),
    ];
  },
};

export default nextConfig;
