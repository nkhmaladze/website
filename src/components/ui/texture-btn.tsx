import React from "react";
import { useTheme } from "@/context/ThemeContext";
import flippedBg from "@/assets/btn-bg.png";

const TextureButton = ({ text, onClick, className, src, icon }: { text?: string, onClick?: () => void, className?: string, src?: string, icon?: React.ReactNode }) => {
    const { resolvedTheme } = useTheme();

    const navBtnClass =
        "group inline-flex items-center w-[115px] relative h-[46px] justify-center " +
        "rounded-[6px] border border-[#1E1E1E] text-base font-anonymous font-bold uppercase tracking-wider text-white " +
        "transition-colors duration-200 active:scale-[0.985] " +
        "bg-[#1E1E1E] " +
        "hover:bg-[#FFFFFF1A] hover:text-[#FFFFFF99] " +
        "shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),0_4px_4px_0_rgba(0,0,0,0.25)]";
    return (
        <button type="button" onClick={onClick} className={navBtnClass + " " + className}>
            <div className="absolute bg-cover bg-no-repeat bg-center top-0 rounded-lg left-0 w-full opacity-5 h-full" style={{ backgroundImage: `url(${flippedBg})` }}></div>
            {src ? <img src={src} alt="" className="h-8 w-8" aria-hidden /> : icon ? icon : <p className="relative z-20"> {text}</p>}
        </button>
    );
};

export default TextureButton;