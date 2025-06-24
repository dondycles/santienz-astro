import type { Pages } from "@/lib/pages.types";
import CTAGetQuote from "./CTAGetQuote";
import { Button } from "./ui/button";
export default function DesktopNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = false,
  hideProducts = false,
}: Pages) {
  return (
    <div className="xmd:flex hidden flex-1 items-center justify-end gap-4">
      <nav className="flex flex-row">
        <Button
          hidden={hideBrochure}
          asChild
          variant="link"
          className="header-links text-inherit"
        >
          <a href="/brochure">Brochure</a>
        </Button>
        <Button
          hidden={hideProducts}
          asChild
          variant="link"
          className="header-links text-inherit"
        >
          <a href="/products">Products</a>
        </Button>
        <Button
          hidden={hideAboutUs}
          variant="link"
          asChild
          className="header-links text-inherit"
        >
          <a href="/about-us">About Us</a>
        </Button>
        <Button
          hidden={hideCareers}
          variant="link"
          asChild
          className="header-links  text-inherit"
        >
          <a href="/careers">Careers</a>
        </Button>
      </nav>
      <CTAGetQuote style={`${hideCTA && "hidden"}`} />
    </div>
  );
}
