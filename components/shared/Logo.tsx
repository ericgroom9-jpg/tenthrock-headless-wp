"use client";

import Image from "next/image";

const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";

interface LogoProps {
  className?: string;
  variant?: "main" | "white";
}

export default function Logo({ className = "", variant = "main" }: LogoProps) {
  const logoSrc = variant === "main" ? logoMain : logoWhite;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 md:h-10 w-[160px] sm:w-[200px] md:w-[240px]">
        <Image
          src={logoSrc}
          alt="Tenth Rock Waste Solutions"
          fill
          sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
          className="object-contain object-left"
          loading="eager"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
