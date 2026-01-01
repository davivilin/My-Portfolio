import { cn } from "@/lib/utils";
import React from "react";

interface PixelCloudProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const PixelCloud = ({ className, size = "md", style }: PixelCloudProps) => {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-24 h-14",
    lg: "w-32 h-20",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)} style={style}>
      {/* Pixel cloud made with CSS */}
      <svg
        viewBox="0 0 32 20"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Cloud shape in pixels */}
        <rect x="8" y="8" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="12" y="4" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="12" y="8" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="16" y="4" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="16" y="8" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="20" y="8" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="4" y="12" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="8" y="12" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="12" y="12" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="16" y="12" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="20" y="12" width="4" height="4" fill="url(#cloudGradient)" />
        <rect x="24" y="12" width="4" height="4" fill="url(#cloudGradient)" />
      </svg>
    </div>
  );
};

export default PixelCloud;