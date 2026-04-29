import React from "react";
import { useTheme } from "@/context/ThemeContext";

const HorizontalBorder = () => {
  const { resolvedTheme } = useTheme();
  const borderColor = resolvedTheme === "light" ? "#AA9A8A1A" : "#F9F7EE1A";

  return (
    <div 
      className="w-screen relative left-1/2 -translate-x-1/2 h-[1px]"  
      style={{
        backgroundImage: `repeating-linear-gradient(
          to right,
          ${borderColor} 0px,
          ${borderColor} 4px,
          transparent 1px,
          transparent 8px
        )`,
      }}
    />
  );
};

export default HorizontalBorder;