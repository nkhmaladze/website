import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
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
        <div className="relative z-10 flex flex-row items-center justify-between px-[14px] py-[14px]">
          <DialogTitle className={`m-0 font-instrument text-[28px] font-normal leading-[120%] ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
            About
          </DialogTitle>
          <DialogClose
            aria-label="Close"
            className={`group relative grid h-[32px] w-[32px] place-items-center rounded-full transition-all focus:outline-none ${
              isLight ? "text-[#1E1E1E] opacity-70 hover:opacity-100" : "text-white opacity-90 hover:opacity-100"
            }`}
          >
            {/* Gradient Background on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, rgba(198, 141, 214, 0.4) 46.63%, rgba(255, 122, 125, 0.4) 100%)",
                  borderRadius: "8px",
                  backdropFilter: "blur(80px)",
                }}
              />
            <X className="relative z-10 h-6 w-6" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className={`h-[1px] w-full ${isLight ? "bg-[#C2C4B9]" : "bg-black/20 shadow-[0_1px_0_rgba(255,255,255,0.1)]"}`}
        />

        {/* Body */}
        <div className={`space-y-4 overflow-y-auto p-[14px] font-anonymous text-[16px] font-normal leading-[160%] ${
          isLight ? "text-[#1E1E1E99]" : "text-white/60"
        }`}>
          <p>
            Flipped Social Inc is a tech-based matchmaker dedicated to helping busy professionals find
            meaningful connections through curated dinner dates.
          </p>
          <p>
            We believe dating should be simple. No endless swiping, no small talk over text. Just a
            real dinner, every week, with someone worth meeting.
          </p>
          <p>
            Our algorithm considers your preferences, schedule, and dining tastes to create perfect
            pairings — complete with a restaurant, day, and time already set.
          </p>
          <p>
            Founded in 2026, Flipped is on a mission to bring back the magic of real-life
            connection in an increasingly digital world.
          </p>
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

export default AboutDialog;
