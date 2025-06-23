import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function CTAGetQuote({ style }: { style?: string }) {
  return (
    <Button
      variant="tertiary"
      className={cn("relative z-20 hover:scale-105 active:scale-95", style)}
      asChild
    >
      <a href="contact-us">Get Quote</a>
    </Button>
  );
}
