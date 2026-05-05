import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LegalDialog = ({ open, onOpenChange }: LegalDialogProps) => {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideClose
        className={`w-[560px] max-w-[90vw] gap-0 rounded-[6px] transition-all duration-300 overflow-hidden ${
          isLight 
            ? "bg-[#E8E5E1] border-[#C2C4B9] shadow-[0_12px_24px_rgba(0,0,0,0.1)]" 
            : "bg-[#1E1E1E] border-[#1E1E1E] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]"
        } p-[14px]`}
      >
        {/* Top dashed line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[5px] h-px w-[calc(100%-10px)] -translate-x-1/2"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, ${
              isLight ? "rgba(170, 154, 138, 0.4)" : "rgba(255,255,255,0.35)"
            } 0 6px, transparent 6px 10px)`,
          }}
        />

        {/* Header row */}
        <div className="relative z-10 flex flex-row items-center justify-between px-[14px] py-[10px]">
          <DialogTitle className={`m-0 font-instrument text-[28px] font-normal leading-[120%] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
            Legal
          </DialogTitle>
          <DialogClose
            aria-label="Close"
            className={`group relative grid h-[32px] w-[32px] place-items-center rounded-full transition-all focus:outline-none ${
              isLight ? "text-[#1E1E1E] opacity-70 hover:opacity-100" : "text-white opacity-90 hover:opacity-100"
            }`}
          >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                  borderRadius: "8px",
                  backdropFilter: "blur(80px)",
                }}
              />

            <X className="relative z-10 h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className={`h-[1px] w-full ${isLight ? "bg-[#C2C4B9]" : "bg-white/10"}`}
        />

        {/* Body */}
        <div className="space-y-6 pt-6 pb-4 font-anonymous">
          {/* Segmented Tab Control */}
          <div className="px-[14px]">
            <div className={`flex p-1 rounded-[8px] border transition-all duration-300 ${
                isLight ? "bg-[#D9D3CC4D] border-[#C2C4B9]" : "bg-white/5 border-white/5"
            }`}>
              <button
                onClick={() => setTab("privacy")}
                className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-widest rounded-[6px] transition-all duration-300 ${
                  tab === "privacy"
                    ? isLight ? "bg-[#D4CEC8] text-[#1E1E1E] shadow-sm" : "bg-[#3D3D3D] text-white shadow-sm"
                    : isLight ? "text-[#1E1E1E60] hover:text-[#1E1E1E]" : "text-white/40 hover:text-white"
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTab("terms")}
                className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-widest rounded-[6px] transition-all duration-300 ${
                  tab === "terms"
                    ? isLight ? "bg-[#D4CEC8] text-[#1E1E1E] shadow-sm" : "bg-[#3D3D3D] text-white shadow-sm"
                    : isLight ? "text-[#1E1E1E60] hover:text-[#1E1E1E]" : "text-white/40 hover:text-white"
                }`}
              >
                Terms & Conditions
              </button>
            </div>
          </div>

          <div className={`px-[14px] text-[14px] leading-[170%] space-y-5 max-h-[45vh] overflow-y-auto custom-scrollbar pr-4 ${
            isLight ? "text-[#1E1E1E99]" : "text-white/60"
          }`}>
            {tab === "privacy" ? (
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget sociis purus neque turpis amet pellentesque mauris ornare vitae. Est sed mi placerat felis commodo consequat id. Nulla massa in hendrerit mauris consectetur blandit accumsan.
                </p>
                <p>
                  Mauris ornare vitae. Est sed mi placerat felis commodo consequat id. Nulla massa in hendrerit mauris consectetur blandit accumsan. Lorem ipsum dolor sit amet consectetur. Eget sociis purus neque turpis amet pellentesque.
                </p>
                <Link
                  to="/privacy-policy"
                  onClick={() => onOpenChange(false)}
                  className={`inline-flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-widest underline underline-offset-4 hover:opacity-70 transition-opacity ${
                    isLight ? "text-[#1E1E1E]" : "text-white"
                  }`}
                >
                  View full Privacy Policy →
                </Link>
              </>
            ) : (
              <>
                <p>
                   Est sed mi placerat felis commodo consequat id. Nulla massa in hendrerit mauris consectetur blandit accumsan. Lorem ipsum dolor sit amet consectetur. Eget sociis purus neque turpis amet pellentesque mauris ornare vitae.
                </p>
                <p>
                  By accessing or using the Flipped application and services, you agree to be bound by these Terms and Conditions.
                </p>
                <Link
                  to="/terms"
                  onClick={() => onOpenChange(false)}
                  className={`inline-flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-widest underline underline-offset-4 hover:opacity-70 transition-opacity ${
                    isLight ? "text-[#1E1E1E]" : "text-white"
                  }`}
                >
                  View full Terms & Conditions →
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Bottom dashed line */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[5px] left-1/2 h-px w-[calc(100%-10px)] -translate-x-1/2"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, ${
              isLight ? "rgba(170, 154, 138, 0.4)" : "rgba(255,255,255,0.35)"
            } 0 6px, transparent 6px 10px)`,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
