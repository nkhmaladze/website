import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">About</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
