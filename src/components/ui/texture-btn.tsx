import React from "react";
import { useTheme } from "@/context/ThemeContext";
import flippedBg from "@/assets/btn-bg.png";

const TextureButton = ({ text, onClick, className, src }: { text?: string, onClick?: () => void, className?: string, src?: string }) => {
    const { resolvedTheme } = useTheme();

    const navBtnClass =
        "inline-flex items-center w-[115px] relative h-[46px] justify-center  " +
        "rounded-[6px] border border-[#252525] text-base font-anonymous uppercase tracking-wider text-[#F9F7EE] " +
        "transition-all duration-200 active:scale-[0.985] " +
        "bg-[#252525] " +
        "hover:bg-[#282828] " +
        // Subtle white inner highlight
        "shadow-[inset_0_0.2px_0px_0_rgba(255,255,255,0.3)] " +
        // Outer drop shadow
        "shadow-[0_6px_10px_0_rgba(0,0,0,0.25)]";
    return (
        <button type="button" onClick={onClick} className={navBtnClass + " " + className}>
            <div className="absolute bg-cover bg-no-repeat bg-center top-0 rounded-lg left-0 w-full opacity-5 h-full" style={{ backgroundImage: `url(${flippedBg})` }}></div>
            {src ? <img src={src} alt="" className="h-8 w-8" aria-hidden /> : <p className="relative z-20"> {text}</p>}
        </button>
    );
};

export default TextureButton;