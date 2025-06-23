import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CTAGetQuote from "./CTAGetQuote";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
export default function DesktopNavigation() {
  return (
    <div className="xmd:flex hidden flex-1 items-center justify-end gap-4">
      <nav className="flex flex-row">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              className="header-links text-primary-foreground"
            >
              <span>Services</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-xs">
            {Array.from({ length: 4 }).map((_, i) => (
              <DropdownMenuItem asChild key={i}>
                <a href="/">
                  <div>
                    <span className="font-semibold text-lg block text-tertiary">
                      Floorings
                    </span>
                    <span className="line-clamp-2 text-sm text-muted-foreground">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quas dolor nobis eligendi.
                    </span>
                  </div>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="link"
          asChild
          className="header-links text-primary-foreground"
        >
          <a href="/">About Us</a>
        </Button>
        <Button
          variant="link"
          asChild
          className="header-links text-primary-foreground"
        >
          <a href="/">Careers</a>
        </Button>
      </nav>
      <CTAGetQuote />
    </div>
  );
}
