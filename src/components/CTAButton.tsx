import { cn } from "@/lib/utils";
import { EnhancedButton } from "./EnhancedButton";
import type React from "react";
import { Play } from "lucide-react";

export default function CTAGetQuote({
  className,
  link,
  effect,
  variant,
  target,
  children,
}: {
  className?: string;
  link: string;
  effect?:
    | "expandIcon"
    | "ringHover"
    | "shine"
    | "shineHover"
    | "gooeyRight"
    | "gooeyLeft"
    | "underline"
    | "hoverUnderline"
    | "gradientSlideShow"
    | null
    | undefined;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "tertiary"
    | null
    | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  children?: React.ReactNode;
}) {
  return (
    <a href={link} target={target}>
      <EnhancedButton
        variant={variant}
        effect={effect}
        className={cn("relative z-20 ", className)}
      >
        {children}
      </EnhancedButton>
    </a>
  );
}
