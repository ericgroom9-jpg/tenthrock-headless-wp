import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
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
  },
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image|images|videos|assets_export|favicon).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
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
