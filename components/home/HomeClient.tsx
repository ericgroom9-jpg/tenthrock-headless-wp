"use client";

import dynamic from "next/dynamic";
import type { HomepageTemplateData, GlobalSectionsData } from "@/lib/wordpress";

const TenthRockHome = dynamic(() => import("./TenthRockHome"), {
  // SSR enabled (default) so the real <h1>/<h2>/<h3> structure inside
  // TenthRockHome ends up in the initial HTML — required for SEO and
  // for screen readers that don't wait for client hydration.
  loading: () => (
    <div className="min-h-screen bg-[#042940] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/images/logos/Green-White-Logo.png"
          alt="Tenth Rock Waste Solutions"
          width={220}
          height={55}
          className="w-44 md:w-56 h-auto"
        />
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#c5d520] rounded-full animate-pulse w-1/2" />
        </div>
      </div>
    </div>
  ),
});

interface Props {
  acf?: HomepageTemplateData | null;
  globalSections?: GlobalSectionsData | null;
}

export default function HomeClient({ acf, globalSections }: Props) {
  return <TenthRockHome acf={acf || null} globalSections={globalSections || null} />;
}
