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
              <p>
                We collect information you provide directly to us, such as your name, email address,
                date of birth, location, dining preferences, and profile information. We also
                automatically collect certain information about your device and usage of our services.
              </p>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to match you with compatible dinner dates, and to communicate with you about your
                account and our services.
              </p>
              <p>
                We do not sell your personal information to third parties. We may share your
                information with service providers who assist us in operating our platform,
                conducting our business, or serving our users.
              </p>
            </>
          ) : (
            <>
              <p>
                By accessing or using the Flipped application and services, you agree to be bound
                by these Terms and Conditions. If you do not agree to these terms, please do not
                use our services.
              </p>
              <p>
                You must be at least 18 years old to use Flipped. You are responsible for
                maintaining the confidentiality of your account credentials and for all activities
                that occur under your account.
              </p>
              <p>
                Flipped reserves the right to modify or discontinue, temporarily or permanently,
                the service with or without notice. We shall not be liable to you or any third
                party for any modification, suspension, or discontinuance of the service.
              </p>
              <p>
                All content and materials available through our service are protected by
                intellectual property rights and are the property of Flipped Social Inc or its
                licensors.
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
