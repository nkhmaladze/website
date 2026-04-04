import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
            <p className="text-muted-foreground text-sm mb-1">We can't wait, Yeah us either!</p>
          </div>
          <p className="text-foreground text-xs font-mono uppercase tracking-wider">
            Stay up!
          </p>
          <p className="text-muted-foreground text-xs">
            Own a restaurant, venue, or fun place?
          </p>
          <Button variant="outline" className="w-full border-muted-foreground/30 text-foreground font-mono text-xs uppercase tracking-wider">
            Partner with Flipped
          </Button>

          <div className="border-t border-border pt-4">
            <p className="text-foreground text-sm mb-3">
              Something else on your mind?
            </p>
            <p className="text-muted-foreground text-xs mb-4">We'd love to hear from you.</p>
            <div className="space-y-3">
              <Input placeholder="Name" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              <Input placeholder="Email" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              <Textarea placeholder="Location" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[60px]" />
              <Textarea placeholder="Anything..." className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[80px]" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
