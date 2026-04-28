import React from "react";
import { useTheme } from "@/context/ThemeContext";
import flippedBg from "@/assets/btn-bg.png";

const TextureButton = ({ text, onClick, className, src }: { text?: string, onClick?: () => void, className?: string, src?: string }) => {
    const { resolvedTheme } = useTheme();

    const navBtnClass =
        "group inline-flex items-center w-[115px] relative h-[46px] px-[13px] justify-center " +
        "rounded-[6px] border border-[#1E1E1E] text-base font-anonymous font-bold uppercase tracking-wider text-white " +
        "transition-colors duration-200 active:scale-[0.985] " +
        "bg-[#1E1E1E] " +
        "hover:bg-[#303030] hover:text-[#E8E5E1] " +
        "shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),0_4px_4px_0_rgba(0,0,0,0.25)]";
    return (
        <button type="button" onClick={onClick} className={navBtnClass + " " + className}>
            <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-[15%] -inset-y-[40%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                    background: "linear-gradient(90deg, rgba(198, 141, 214, 0.3) 46.63%, rgba(255, 122, 125, 0.3) 100%)",
                    filter: "blur(18px)",
                }}
            />
            <div className="absolute bg-cover bg-no-repeat bg-center top-0 rounded-lg left-0 w-full opacity-5 h-full" style={{ backgroundImage: `url(${flippedBg})` }}></div>
            {src ? <img src={src} alt="" className="h-8 w-8" aria-hidden /> : <p className="relative z-20"> {text}</p>}
        </button>
    );
};

export default TextureButton;