import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
export default function DesktopNavigation() {
  return (
    <div className="xmd:flex hidden flex-1 items-center gap-4">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/">Home</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/">
                      <div className="font-medium text-primary text-sm leading-none">
                        Floorings
                      </div>
                      <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quas dolor nobis eligendi.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/">
                      <div className="font-medium text-primary text-sm leading-none">
                        Floorings
                      </div>
                      <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quas dolor nobis eligendi.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>{" "}
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/">
                      <div className="font-medium text-primary text-sm leading-none">
                        Floorings
                      </div>
                      <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quas dolor nobis eligendi.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/">
                      <div className="font-medium text-primary text-sm leading-none">
                        Floorings
                      </div>
                      <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quas dolor nobis eligendi.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/">About Us</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/">Careers</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button>Get Quote</Button>
    </div>
  );
}
