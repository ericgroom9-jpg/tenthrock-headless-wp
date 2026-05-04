"use client";

import dynamic from "next/dynamic";

const TenthRockHome = dynamic(() => import("./TenthRockHome"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#042940] flex items-center justify-center">
      <h1 className="sr-only">Centralized Waste Logistics for Businesses at Scale</h1>
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

export default function HomeClient() {
  return <TenthRockHome />;
}
