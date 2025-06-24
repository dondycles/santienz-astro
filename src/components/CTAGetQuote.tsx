import { cn } from "@/lib/utils";
import { EnhancedButton } from "./EnhancedButton";

export default function CTAGetQuote({
  style,
  text,
}: {
  style?: string;
  text: string;
}) {
  return (
    <EnhancedButton
      variant="tertiary"
      effect="shineHover"
      className={cn("relative z-20 ", style)}
      asChild
    >
      <a href="contact-us">{text}</a>
    </EnhancedButton>
  );
}
