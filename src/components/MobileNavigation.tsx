import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { Menu } from "lucide-react";
export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <Menu id="header-burger-icon" className="stroke-primary-foreground" />
      </SheetTrigger>
      <SheetContent className="gap-0">
        <div className="flex flex-col gap-4 border-t p-4 mt-12">
          <Button asChild variant="secondary">
            <a href="/">Home</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/">Services</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/">About Us</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/">Careers</a>
          </Button>
        </div>
        <div className="mt-auto mb-0 flex flex-col justify-center gap-4 border-t p-4">
          <Button asChild>
            <a href="/contact-us">Get Quote</a>
          </Button>
          <div className="space-x-2">
            <BiLogoGmail className="inline size-8" />
            <span className="inline text-base">santienz@gmail.com</span>
          </div>
          <div className="space-x-2">
            <FaViber className="inline size-8" />
            <span className="inline text-base">+63 928 123 4567</span>
          </div>
          <div className="space-x-2">
            <BiLogoFacebook className="inline size-8" />
            <span className="inline text-base">@santienz.hr</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
