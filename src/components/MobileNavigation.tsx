import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiMobile,
  BiPhoneCall,
} from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { Menu, PhoneCall } from "lucide-react";
import CTAGetQuote from "./CTAGetQuote";
import { cn } from "@/lib/utils";
export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <Menu id="header-burger-icon" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="gap-0 border-0 w-2/3">
        <div className="flex flex-col gap-4 p-4 mt-12 text-lg">
          <p className="text-muted-foreground text-sm">Navigation</p>
          <Button
            asChild
            variant="link"
            className="text-foreground w-fit text-lg p-0"
          >
            <a href="/">Home</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-foreground w-fit text-lg p-0"
          >
            <a href="/brochure">Brochure</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-foreground w-fit text-lg p-0"
          >
            <a href="/">Services</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-foreground w-fit text-lg p-0"
          >
            <a href="/">About Us</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-foreground w-fit text-lg p-0"
          >
            <a href="/">Careers</a>
          </Button>
        </div>
        <div className="mt-auto mb-0 flex flex-col justify-center gap-4 border-t-muted border-t-1 p-4 text-sm text-muted-foreground">
          <CTAGetQuote />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=santienz@gmail.com"
            target="_blank"
          >
            <div className="space-x-2">
              <BiLogoGmail className="inline size-8 text-tertiary" />
              <span className="inline">santienzreceivables@gmail.com</span>
            </div>
          </a>
          <div className="space-x-2">
            <BiMobile className="inline size-8  text-tertiary" />
            <span className="inline">(0925) 778-5474</span>
          </div>
          <div className="space-x-2">
            <BiPhoneCall className="inline size-8  text-tertiary" />
            <span className="inline">+63 (2) 7728-3381</span>
          </div>
          <a href="https://facebook.com/@santienz.hr" target="_blank">
            <div className="space-x-2">
              <BiLogoFacebook className="inline size-8  text-tertiary" />
              <span className="inline">@santienz.hr</span>
            </div>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
