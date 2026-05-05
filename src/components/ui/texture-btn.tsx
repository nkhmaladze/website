import React from "react";
import { useTheme } from "@/context/ThemeContext";
import flippedBg from "@/assets/btn-bg.png";

const TextureButton = ({ text, onClick, className, src, icon, isLightBtn }: { text?: string, onClick?: () => void, className?: string, src?: string, icon?: React.ReactNode, isLightBtn?: boolean }) => {
    const { resolvedTheme } = useTheme();
    const isLight =  resolvedTheme === "light" || isLightBtn;

    const navBtnClass = `group inline-flex items-center w-[115px] relative h-[46px] justify-center 
        rounded-[6px] border ${isLight ? "border-[#E8E5E1]" : "border-[#FFFFFF1A]"} text-base font-anonymous font-bold uppercase tracking-wider 
        transition-all duration-300 active:scale-[0.985] overflow-hidden
        ${isLight ? "bg-[#e9e6e3] text-[#1E1E1E]" : "bg-[#1E1E1E] text-white"} 
        ${isLight ? "hover:border-transparent" : "hover:bg-[#FFFFFF1A] hover:text-[#FFFFFF99]"} 
        shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),0_4px_4px_0_rgba(0,0,0,0.25)]`;
    return (
        <button type="button" onClick={onClick} className={navBtnClass + " " + className}>
            <div className="absolute bg-cover bg-no-repeat bg-center top-0 rounded-lg left-0 w-full opacity-5 h-full pointer-events-none" style={{ backgroundImage: `url(${flippedBg})` }}></div>
            
            {isLight && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{
                        background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                        borderRadius: "6px",
                        backdropFilter: "blur(80px)",
                    }}
                />
            )}

            <div className="relative z-20 flex items-center justify-center">
                {src ? <img src={src} alt="" className="h-8 w-8" aria-hidden /> : icon ? icon : <p> {text}</p>}
            </div>
        </button>
    );
};

export default TextureButton;