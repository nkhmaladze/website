import React from "react";
import { useTheme } from "@/context/ThemeContext";

const PageBorders = () => {
  const { resolvedTheme } = useTheme();
  const borderColor = resolvedTheme === "light" ? "#AA9A8A1A" : "#F9F7EE1A";

  const verticalGradient = `repeating-linear-gradient(
    to bottom,
    ${borderColor} 0px,
    ${borderColor} 4px,
    transparent 1px,
    transparent 8px
  )`;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
      
      {/* Outer Vertical Borders - Fixed distance from edges */}
      <div 
        className="absolute left-[4%] top-0 h-full w-[1px]"
        style={{ backgroundImage: verticalGradient }}
      />
      
      <div 
        className="absolute right-[4%] top-0 h-full w-[1px]"
        style={{ backgroundImage: verticalGradient }}
      />

      {/* Inner Vertical Borders - Content Boundaries */}
      <div className="relative h-full w-full max-w-5xl">
        <div 
          className="absolute left-0 top-0 h-full w-[1px]"
          style={{ backgroundImage: verticalGradient }}
        />
        
        <div 
          className="absolute right-0 top-0 h-full w-[1px]"
          style={{ backgroundImage: verticalGradient }}
        />
      </div>
    </div>
  );
};

export default PageBorders;