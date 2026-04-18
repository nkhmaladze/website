import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LegalDialog = ({ open, onOpenChange }: LegalDialogProps) => {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Legal</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab("privacy")}
            className={`px-4 py-1.5 border rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              tab === "privacy"
                ? "border-foreground text-foreground"
                : "border-muted-foreground/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setTab("terms")}
            className={`px-4 py-1.5 border rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              tab === "terms"
                ? "border-foreground text-foreground"
                : "border-muted-foreground/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            Terms & Conditions
          </button>
        </div>
        <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
          {tab === "privacy" ? (
            <>
              <p>
                Flipped Social Inc ("Flipped," "we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you use our mobile application and website.
              </p>
              <a
                href="/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                View full Privacy Policy →
              </a>
            </>
          ) : (
            <>
              <p>
                By accessing or using the Flipped application and services, you agree to be bound
                by these Terms and Conditions. If you do not agree to these terms, please do not
                use our services.
              </p>
              <a
                href="/terms-of-service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                View full Terms & Conditions →
              </a>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
