import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Contact</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="text-step text-sm font-mono mb-1">#ready-to-Flipped?</p>
            <p className="text-muted-foreground text-sm">We can't wait, Yeah us either!</p>
          </div>
          <p className="text-foreground text-xs font-mono uppercase tracking-wider">Stay up!</p>
          <p className="text-muted-foreground text-xs">Own a restaurant, venue, or fun place?</p>
          <a
            href="https://forms.gle/Y9bF2dYX6PRkCdP27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md border border-muted-foreground/30 bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Partner with Flipped
          </a>
          <a
            href="mailto:support@flippedsocial.com"
            className="inline-flex w-full items-center justify-center rounded-md border border-muted-foreground/30 bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get in touch
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
