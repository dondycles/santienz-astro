import type { Pages } from "@/lib/pages.types";
import CTAButton from "./CTAButton";
import { Button } from "./ui/button";
export default function DesktopNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideProjects = false,
  hideTestimonials = true,
}: Pages) {
  return (
    <div className="xmd:flex hidden flex-1 items-center justify-end gap-4">
      <nav className="flex flex-row gap-6">
        <Button
          hidden={hideAboutUs}
          variant="link"
          asChild
          className="header-links text-inherit p-0"
        >
          <a href="/about-us">About Us</a>
        </Button>
        <Button
          hidden={hideProjects}
          variant="link"
          asChild
          className="header-links text-inherit p-0"
        >
          <a href="/projects">Projects</a>
        </Button>
        <Button
          hidden={hideProducts}
          asChild
          variant="link"
          className="header-links text-inherit p-0"
        >
          <a href="/products">Products</a>
        </Button>
        <Button
          hidden={hideBrochure}
          asChild
          variant="link"
          className="header-links text-inherit p-0"
        >
          <a href="/brochure">Brochure</a>
        </Button>
        <Button
          hidden={hideTestimonials}
          asChild
          variant="link"
          className="header-links text-inherit p-0"
        >
          <a href="/testimonials">Testimonials</a>
        </Button>
        <Button
          hidden={hideCareers}
          variant="link"
          asChild
          className="header-links  text-inherit p-0"
        >
          <a href="/careers">Careers</a>
        </Button>
      </nav>
      <CTAButton
        className={`${hideCTA && "hidden"}`}
        link="/contact-us"
        effect="shineHover"
        variant="tertiary"
      >
        Contact Us
      </CTAButton>
    </div>
  );
}
