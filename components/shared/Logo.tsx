"use client";

import Image from "next/image";

const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";

interface LogoProps {
  className?: string;
  variant?: "main" | "white";
  sizeClassName?: string;
  sizes?: string;
}

const DEFAULT_SIZE_CLASS = "h-8 md:h-10 w-[130px] sm:w-[200px] md:w-[240px]";
const DEFAULT_SIZES = "(max-width: 639px) 130px, (max-width: 767px) 200px, 240px";

export default function Logo({
  className = "",
  variant = "main",
  sizeClassName = DEFAULT_SIZE_CLASS,
  sizes = DEFAULT_SIZES,
}: LogoProps) {
  const logoSrc = variant === "main" ? logoMain : logoWhite;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative shrink-0 ${sizeClassName}`}>
        <Image
          src={logoSrc}
          alt="Tenth Rock Waste Solutions"
          fill
          sizes={sizes}
          quality={95}
          className="object-contain object-left"
          loading="eager"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
