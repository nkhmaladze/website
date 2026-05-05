import React from "react";
import { useTheme } from "@/context/ThemeContext";
import flippedBg from "@/assets/btn-bg.png";
import { Link } from "react-router-dom";
import commentIcon from "@/assets/comment-icon.svg";

const WantInButton = ({ className }: { className?: string }) => {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === "light";

    return (
        <Link
            to="https://forms.gle/6LvmBuAWfoPRm87v5"
            target="_blank"
            rel="noopener noreferrer"
            className={`group mt-12 relative inline-flex items-center justify-center rounded-[12px] border  ${isLight ? "border-[#1A1A1A4D]" : "border-[#FFFFFF4D]"} w-[195px] h-[52px] sm:p-[4px] p-[2px] overflow-hidden ${className}`}
        >
            {/* Inner Button container */}
            <div
                className={`relative flex h-full w-full items-center justify-center gap-4 font-bold rounded-[8px] 
               border font-anonymous uppercase transition-all duration-300 overflow-hidden
               ${isLight
                        ? "bg-[#1E1E1E] text-white border-[#FFFFFF1A]"
                        : "bg-[#E8E5E1] text-[#1E1E1E] border-[#C2C4B9] group-hover:border-transparent"}`}
                style={{
                    boxShadow: isLight
                        ? ""
                        : "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 1px 2px rgba(255, 255, 255, 0.8)",
                }}
            >
                {/* Texture Background (Light Theme only, as requested) */}
                {isLight && (
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-5 pointer-events-none rounded-[8px]"
                        style={{ backgroundImage: `url(${flippedBg})` }}
                    />
                )}

                {/* Gradient Background on Hover (Dark Theme only now, to match the original light aesthetic) */}
                {!isLight && (
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                        style={{
                            background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                            borderRadius: "8px",
                            backdropFilter: "blur(80px)",
                        }}
                    />
                )}

                {/* Button Content */}
                <div className="relative z-10 flex items-center gap-4 transition-colors duration-300">
                    I want in
                    <div className="relative">
                        <img src={commentIcon} className={`h-4 w-4 ${isLight ? "invert opacity-80" : ""}`} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WantInButton;