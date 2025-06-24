import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiMobile,
  BiPhoneCall,
} from "react-icons/bi";
import { Facebook, Mail, Menu, Phone, Smartphone } from "lucide-react";
import CTAGetQuote from "./CTAGetQuote";
export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <Menu id="header-burger-icon" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="gap-0 border-0 w-2/3 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4 p-4 mt-12 text-lg border-t-muted border-t-1">
          {/* <p className="text-muted-foreground text-sm">Navigation</p> */}
          <Button
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/">Home</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/brochure">Brochure</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/products">Products</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/">About Us</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
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
              <Mail className="inline size-5 text-tertiary" />
              <span className="inline break-all">
                santienztechnical@gmail.com
              </span>
            </div>
          </a>
          <div className="space-x-2">
            <Phone className="inline size-5  text-tertiary" />
            <span className="inline">(02) 7001-0273</span>
          </div>
          <a href="https://facebook.com/@santienz.hr" target="_blank">
            <div className="space-x-2">
              <Facebook className="inline size-5  text-tertiary" />
              <span className="inline">@santienz.hr</span>
            </div>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
