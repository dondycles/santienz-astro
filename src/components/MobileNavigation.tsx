import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import type { Pages } from '@/lib/pages.types';
import { Facebook, Mail, Menu, Phone } from 'lucide-react';
import CTAGetQuote from './CTAButton';
import { Button } from './ui/button';
export default function MobileNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideHome = false,
  hideProjects = false,
  hideTestimonials = true,
  hideCredentials,
}: Pages) {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <Menu id="header-burger-icon" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-background/80 w-2/3 gap-0 border-0 backdrop-blur-sm">
        <div className="border-t-muted mt-12 flex flex-col gap-4 border-t-1 p-4 text-lg">
          {/* <p className="text-muted-foreground text-sm">Navigation</p> */}
          <Button
            hidden={hideHome}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/">Home</a>
          </Button>
          <Button
            hidden={hideAboutUs}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/about-us">About Us</a>
          </Button>{' '}
          <Button
            hidden={hideProjects}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/projects">Projects</a>
          </Button>{' '}
          <Button
            hidden={hideProducts}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/products">Products</a>
          </Button>
          <Button
            hidden={hideCredentials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/credentials">Credentials</a>
          </Button>
          <Button
            hidden={hideBrochure}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/brochure">Brochure</a>
          </Button>
          <Button
            hidden={hideCareers}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/careers">Careers</a>
          </Button>
          <Button
            hidden={hideTestimonials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/testimonials">Testimonials</a>
          </Button>
        </div>
        <div className="border-t-muted text-muted-foreground mt-auto mb-0 flex flex-col justify-center gap-4 border-t-1 p-4 text-sm">
          {hideCTA ? null : (
            <CTAGetQuote
              link="/contact-us"
              className="w-full"
              effect="shineHover"
              variant="tertiary"
            >
              Contact Us
            </CTAGetQuote>
          )}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=santienz@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <div className="space-x-2">
              <Mail className="text-tertiary inline size-5" />
              <span className="inline break-all">santienztechnical@gmail.com</span>
            </div>
          </a>
          <div className="space-x-2">
            <Phone className="text-tertiary inline size-5" />
            <span className="inline">(02) 7001-0273</span>
          </div>
          <a href="https://facebook.com/@santienz.hr" target="_blank" rel="noopener">
            <div className="space-x-2">
              <Facebook className="text-tertiary inline size-5" />
              <span className="inline">@santienz.hr</span>
            </div>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
