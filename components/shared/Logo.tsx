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
      <Image 
        src={logoSrc} 
        alt="Tenth Rock Waste Solutions" 
        width={160}
        height={40}
        className="h-8 md:h-10 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-none object-contain" 
        loading="eager"
        priority
      />
    </div>
  );
}
