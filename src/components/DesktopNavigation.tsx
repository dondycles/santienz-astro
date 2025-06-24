import CTAGetQuote from "./CTAGetQuote";
import { Button } from "./ui/button";
export default function DesktopNavigation({
  showCTA = true,
}: {
  showCTA: boolean;
}) {
  return (
    <div className="xmd:flex hidden flex-1 items-center justify-end gap-4">
      <nav className="flex flex-row">
        <Button variant="link" className="header-links text-inherit">
          <a href="/services">Services</a>
        </Button>
        <Button variant="link" asChild className="header-links text-inherit">
          <a href="/about-us">About Us</a>
        </Button>
        <Button variant="link" asChild className="header-links  text-inherit">
          <a href="/careers">Careers</a>
        </Button>
      </nav>
      <CTAGetQuote style={`${!showCTA && "hidden"}`} />
    </div>
  );
}
