import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Facebook, Mail, Menu, Phone } from "lucide-react";
import CTAGetQuote from "./CTAGetQuote";
import type { Pages } from "@/lib/pages.types";
export default function MobileNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = false,
  hideProducts = false,
  hideHome = false,
  hidePortfolio = false,
  hideTestimonials = false,
}: Pages) {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <Menu id="header-burger-icon" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="gap-0 border-0 w-2/3 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4 p-4 mt-12 text-lg border-t-muted border-t-1">
          {/* <p className="text-muted-foreground text-sm">Navigation</p> */}
          <Button
            hidden={hideHome}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/">Home</a>
          </Button>
          <Button
            hidden={hideBrochure}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/brochure">Brochure</a>
          </Button>
          <Button
            hidden={hideProducts}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/products">Products</a>
          </Button>
          <Button
            hidden={hidePortfolio}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/portfolio">Portfolio</a>
          </Button>
          <Button
            hidden={hideAboutUs}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/about-us">About Us</a>
          </Button>
          <Button
            hidden={hideCareers}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/careers">Careers</a>
          </Button>
          <Button
            hidden={hideTestimonials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit text-lg p-0"
          >
            <a href="/testimonials">Testimonials</a>
          </Button>
        </div>
        <div className="mt-auto mb-0 flex flex-col justify-center gap-4 border-t-muted border-t-1 p-4 text-sm text-muted-foreground">
          <CTAGetQuote style={`${hideCTA && "hidden"}`} />
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
