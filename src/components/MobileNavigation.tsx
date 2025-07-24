import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import type { Pages } from '@/lib/pages.types';
import {
  BiCart,
  BiCheckCircle,
  BiFolder,
  BiHome,
  BiInfoCircle,
  BiLogoFacebook,
  BiLogoGmail,
  BiMenu,
  BiNote,
  BiPhone,
} from 'react-icons/bi';
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
        <BiMenu id="header-burger-icon" className="size-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-background/80 w-2/3 gap-0 border-0 backdrop-blur-sm">
        <div className="border-t-muted mt-12 flex flex-col gap-4 border-t-1 p-4 text-lg">
          <Button
            hidden={hideHome}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/">
              <BiHome className="size-5" />
              Home
            </a>
          </Button>
          <Button
            hidden={hideAboutUs}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/about-us">
              <BiInfoCircle className="size-5" />
              About Us
            </a>
          </Button>{' '}
          <Button
            hidden={hideProjects}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/projects">
              <BiFolder className="size-5" />
              Projects
            </a>
          </Button>{' '}
          <Button
            hidden={hideProducts}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/products">
              <BiCart className="size-5" />
              Products
            </a>
          </Button>
          <Button
            hidden={hideCredentials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/credentials">
              <BiCheckCircle className="size-5" />
              Credentials
            </a>
          </Button>
          <Button
            hidden={hideBrochure}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <a href="/brochure">
              <BiNote className="size-5" />
              Brochure
            </a>
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=santienzmanila@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <div className="inline-flex space-x-2">
              <BiLogoGmail className="text-tertiary size-6 shrink-0" />
              <span className="break-all">santienztechnical@gmail.com</span>
            </div>
          </a>
          <div className="inline-flex space-x-2">
            <BiPhone className="text-tertiary size-6 shrink-0" />
            <span className="break-all">(02) 7001-0273</span>
          </div>
          <a href="https://facebook.com/@santienz.hr" target="_blank" rel="noopener">
            <div className="inline-flex space-x-2">
              <BiLogoFacebook className="text-tertiary size-6 shrink-0" />
              <span className="break-all">@santienz.hr</span>
            </div>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
