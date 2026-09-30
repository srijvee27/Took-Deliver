// ==============================================================================
// Took&Deliver - Official Brand Logo Component
// ==============================================================================

import React from "react";
import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "icon" | "badge" | "mobile" | "print";
  theme?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Service365Logo({
  variant = "full",
  theme = "auto",
  showTagline = false,
  size = "md",
  className = "",
  ...props
}: LogoProps) {
  const sizeMap = {
    sm: { height: 32, width: 41 },
    md: { height: 42, width: 53 },
    lg: { height: 56, width: 71 },
    xl: { height: 72, width: 92 },
  };

  const { height, width } = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center ${className}`} {...props}>
      <Image
        src="/images/took-deliver-brand-logo.png"
        alt="Took&Deliver"
        width={width}
        height={height}
        style={{ height: `${height}px`, width: "auto" }}
        className="object-contain shrink-0"
        priority
      />
    </div>
  );
}

export const TookDeliverLogo = Service365Logo;
export const NaoDaoLogo = Service365Logo;
export default Service365Logo;
