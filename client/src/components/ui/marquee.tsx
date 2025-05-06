import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

export function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
}
