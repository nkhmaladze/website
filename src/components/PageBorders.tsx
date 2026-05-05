import React from "react";
import { useTheme } from "@/context/ThemeContext";

const PageBorders = ({ showInnerBorder = true, showOuterBorder = true }: { showInnerBorder?: boolean, showOuterBorder?: boolean }) => {
  const { resolvedTheme } = useTheme();
  const borderColor = resolvedTheme === "light" ? "rgba(170, 154, 138, 0.39)" : "#F9F7EE1A";

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
      {showOuterBorder && (
        <>
          <div
            className="absolute left-[4%] top-0 h-full w-[1px]"
            style={{ backgroundImage: verticalGradient }}
          />

          <div
            className="absolute right-[4%] top-0 h-full w-[1px]"
            style={{ backgroundImage: verticalGradient }}
          />
        </>
      )}

      {/* Inner Vertical Borders - Content Boundaries */}
      {
        showInnerBorder && (
          <div className="relative h-full w-full">
            <div
              className="absolute sm:left-[15%] left-[4%] top-0 h-full w-[1px]"
              style={{ backgroundImage: verticalGradient }}
            />

            <div
              className="absolute sm:right-[15%] right-[4%] top-0 h-full w-[1px]"
              style={{ backgroundImage: verticalGradient }}
            />
          </div>
        )
      }
    </div>
  );
};

export default PageBorders;