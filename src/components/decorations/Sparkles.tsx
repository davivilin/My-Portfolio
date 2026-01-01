import { cn } from "@/lib/utils";
import React from "react";

interface SparkleProps {
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const Sparkle = ({ className, delay = 0, style }: SparkleProps) => (
  <div
    className={cn(
      "absolute text-primary/60 animate-twinkle",
      className
    )}
    style={{ animationDelay: `${delay}s`, ...style }}
  >
    <i className="fas fa-star" />
  </div>
);

interface SparklesProps {
  count?: number;
  className?: string;
}

const Sparkles = ({ count = 8, className }: SparklesProps) => {
  const sparklePositions = [
    { top: "10%", left: "15%", size: "text-lg", delay: 0 },
    { top: "20%", right: "20%", size: "text-xl", delay: 1.5 },
    { top: "35%", left: "8%", size: "text-sm", delay: 0.8 },
    { top: "60%", right: "12%", size: "text-md", delay: 2.2 },
    { top: "75%", left: "25%", size: "text-lg", delay: 0.3 },
    { top: "15%", right: "35%", size: "text-sm", delay: 1.1 },
    { top: "45%", left: "30%", size: "text-xs", delay: 1.8 },
    { top: "80%", right: "30%", size: "text-lg", delay: 0.6 },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparklePositions.slice(0, count).map((pos, index) => (
        <Sparkle
          key={index}
          className={pos.size}
          delay={pos.delay}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;