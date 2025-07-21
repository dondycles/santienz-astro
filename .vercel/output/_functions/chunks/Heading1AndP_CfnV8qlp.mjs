import { jsx, jsxs } from 'react/jsx-runtime';
import { XIcon, Menu, Mail, Phone, Facebook, MapPin, Copyright } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, r as renderSlot, u as spreadAttributes, x as unescapeHTML, f as renderScript, y as renderHead } from './astro/server_WNXyBHgw.mjs';
/* empty css                            */
import * as React from 'react';
import { clsx } from 'clsx';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_Bmvd5UnP.mjs';
import { createClient } from '@supabase/supabase-js';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1 } from 'sonner';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const imgUrlFromSb = (bucket, path) => `${"https://ntcnmlaznccmsdtuqbru.supabase.co"}/storage/v1/object/public/${bucket}/${path}`;

const buttonVariants$1 = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "bg-tertiary text-primary-foreground shadow-xs hover:bg-tertiary/90",
        borderedTertiary: "border border-tertiary text-tertiary hover:bg-tertiary/5 backdrop-blur"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants$1({ variant, size, className })),
      ...props
    }
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "bg-tertiary text-primary-foreground shadow-xs hover:bg-tertiary/90"
      },
      effect: {
        expandIcon: "group gap-0 relative",
        ringHover: "transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        shine: "before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease",
        shineHover: "relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] before:duration-1000",
        gooeyRight: "relative z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-white/40 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%]",
        gooeyLeft: "relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-white/40 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%]",
        underline: "relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        hoverUnderline: "relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
        gradientSlideShow: "bg-[size:400%] bg-[linear-gradient(-45deg,var(--gradient-lime),var(--gradient-ocean),var(--gradient-wine),var(--gradient-rust))] animate-gradient-flow"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const EnhancedButton = React.forwardRef(
  ({
    className,
    variant,
    effect,
    size,
    icon: Icon,
    iconPlacement,
    asChild = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        className: cn(buttonVariants({ variant, effect, size, className })),
        ref,
        ...props,
        children: [
          Icon && iconPlacement === "left" && (effect === "expandIcon" ? /* @__PURE__ */ jsx("div", { className: "w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100", children: /* @__PURE__ */ jsx(Icon, {}) }) : /* @__PURE__ */ jsx(Icon, {})),
          /* @__PURE__ */ jsx(Slottable, { children: props.children }),
          Icon && iconPlacement === "right" && (effect === "expandIcon" ? /* @__PURE__ */ jsx("div", { className: "w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100", children: /* @__PURE__ */ jsx(Icon, {}) }) : /* @__PURE__ */ jsx(Icon, {}))
        ]
      }
    );
  }
);
EnhancedButton.displayName = "EnhancedButton";

function CTAGetQuote({
  className,
  link,
  effect,
  variant,
  target,
  children
}) {
  return /* @__PURE__ */ jsx(
    EnhancedButton,
    {
      variant,
      effect,
      className: cn("relative z-20 ", className),
      asChild: true,
      children: /* @__PURE__ */ jsx("a", { href: link, target, children })
    }
  );
}

function DesktopNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideProjects = false,
  hideTestimonials = true
}) {
  return /* @__PURE__ */ jsxs("div", { className: "xmd:flex hidden flex-1 items-center justify-end gap-4", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-6", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideAboutUs,
          variant: "link",
          asChild: true,
          className: "header-links text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/about-us", children: "About Us" })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideProjects,
          variant: "link",
          asChild: true,
          className: "header-links text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/projects", children: "Projects" })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideProducts,
          asChild: true,
          variant: "link",
          className: "header-links text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/products", children: "Products" })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideBrochure,
          asChild: true,
          variant: "link",
          className: "header-links text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/brochure", children: "Brochure" })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideTestimonials,
          asChild: true,
          variant: "link",
          className: "header-links text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/testimonials", children: "Testimonials" })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          hidden: hideCareers,
          variant: "link",
          asChild: true,
          className: "header-links  text-inherit p-0",
          children: /* @__PURE__ */ jsx("a", { href: "/careers", children: "Careers" })
        }
      )
    ] }),
    hideCTA ? null : /* @__PURE__ */ jsx(
      CTAGetQuote,
      {
        className: "shadow-lg",
        link: "/contact-us",
        effect: "shineHover",
        variant: "tertiary",
        children: "Contact Us"
      }
    )
  ] });
}

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}

function MobileNavigation({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideHome = false,
  hideProjects = false,
  hideTestimonials = true,
  hideCredentials
}) {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { className: "xmd:hidden", children: /* @__PURE__ */ jsx(Menu, { id: "header-burger-icon", className: "cursor-pointer" }) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "gap-0 border-0 w-2/3 bg-background/80 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-4 mt-12 text-lg border-t-muted border-t-1", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideHome,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideAboutUs,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/about-us", children: "About Us" })
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideProjects,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/projects", children: "Projects" })
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideProducts,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/products", children: "Products" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideCredentials,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/credentials", children: "Credentials" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideBrochure,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/brochure", children: "Brochure" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideCareers,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/careers", children: "Careers" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            hidden: hideTestimonials,
            asChild: true,
            variant: "link",
            className: "text-muted-foreground w-fit text-lg p-0",
            children: /* @__PURE__ */ jsx("a", { href: "/testimonials", children: "Testimonials" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto mb-0 flex flex-col justify-center gap-4 border-t-muted border-t-1 p-4 text-sm text-muted-foreground", children: [
        hideCTA ? null : /* @__PURE__ */ jsx(
          CTAGetQuote,
          {
            link: "/contact-us",
            className: "w-full",
            effect: "shineHover",
            variant: "tertiary",
            children: "Contact Us"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=santienz@gmail.com",
            target: "_blank",
            rel: "noopener",
            children: /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "inline size-5 text-tertiary" }),
              /* @__PURE__ */ jsx("span", { className: "inline break-all", children: "santienztechnical@gmail.com" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
          /* @__PURE__ */ jsx(Phone, { className: "inline size-5  text-tertiary" }),
          /* @__PURE__ */ jsx("span", { className: "inline", children: "(02) 7001-0273" })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://facebook.com/@santienz.hr",
            target: "_blank",
            rel: "noopener",
            children: /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
              /* @__PURE__ */ jsx(Facebook, { className: "inline size-5  text-tertiary" }),
              /* @__PURE__ */ jsx("span", { className: "inline", children: "@santienz.hr" })
            ] })
          }
        )
      ] })
    ] })
  ] });
}

const santienzPng = new Proxy({"src":"/_astro/santienz.CexsLWxK.png","width":699,"height":521,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/public/santienz.png";
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro("https://santienzphilsinc.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Logo;
  const { style, loading } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": santienzPng, "alt": "Santienz Logo", "class": cn("drop-shadow-lg", style), "loading": loading })}`;
}, "D:/dev/santienz-astro/src/components/Logo.astro", void 0);

const $$Astro$c = createAstro("https://santienzphilsinc.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="landing-page-header"${addAttribute(cn("fixed top-0 z-50 w-full bg-transparent duration-300", className), "class")}> <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4"> <a href="/"> ${renderComponent($$result, "Logo", $$Logo, { "style": "w-10", "loading": "eager" })} </a> ${renderSlot($$result, $$slots["default"])} </div> </header>`;
}, "D:/dev/santienz-astro/src/components/syntax/Header.astro", void 0);

const $$CTACard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-8 bg-tertiary/20 mb-1"> <div class="max-w-6xl px-4 py-16 space-y-4 mx-auto text-center"> <h2 class="font-bold text-4xl text-tertiary">
Ready to Build Your Vision?
</h2> <p class="text-muted-foreground">
Let's discuss your next construction project and bring your ideas to life
      with our expertise and dedication.
</p> ${renderComponent($$result, "CTAButton", CTAGetQuote, { "className": "shadow-lg", "effect": "shineHover", "variant": "tertiary", "link": "/contact-us" }, { "default": ($$result2) => renderTemplate`
Contact Us
` })} </div> </section>`;
}, "D:/dev/santienz-astro/src/components/CTACard.astro", void 0);

const $$Astro$b = createAstro("https://santienzphilsinc.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$a = createAstro("https://santienzphilsinc.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$9 = createAstro("https://santienzphilsinc.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$8 = createAstro("https://santienzphilsinc.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$7 = createAstro("https://santienzphilsinc.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$6 = createAstro("https://santienzphilsinc.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$5 = createAstro("https://santienzphilsinc.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$4 = createAstro("https://santienzphilsinc.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/astro-seo@0.8.4_prettier-pl_fa209a73d9a8ccc9bab51d208ee34f08/node_modules/astro-seo/src/SEO.astro", void 0);

const sunRays = new Proxy({"src":"/_astro/sun-rays.CDrdtpmk.webp","width":604,"height":456,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/sun-rays.webp";
							}
							
							return target[name];
						}
					});

const supabaseUrl = "https://ntcnmlaznccmsdtuqbru.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y25tbGF6bmNjbXNkdHVxYnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MzQ4OTMsImV4cCI6MjA2NzExMDg5M30.wJQGk1nE0Atu54bXYCJLTLAI_3nT1p8JiGEbJJ5EosU";
const supabase = createClient(supabaseUrl, supabaseKey);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const products = await supabase.from("products").select("name").order("name");
  return renderTemplate`${maybeRenderHead()}<footer class="relative space-y-8 bg-primary/5 pt-6 md:pt-16 mt-auto mb-0 overflow-hidden"> <div class="mx-auto grid max-w-6xl gap-x-4 gap-y-8 px-4 md:grid-cols-3 z-10"> <div class="space-y-4"> <h4 class="text-primary font-semibold">Santienz Phils. Inc.</h4> ${renderComponent($$result, "Logo", $$Logo, { "style": "w-24" })} </div> <div class="space-y-4 not-md:hidden"> <div class="space-y-4"> <h4 class="font-semibold text-primary">Navigation</h4> <ul class="space-y-2 text-base text-muted-foreground"> <li> <a href="/">Home</a> </li> <li> <a href="/products">Products</a> </li> <li> <a href="/projects">Projects</a> </li> <li> <a href="/about-us">About Us</a> </li> <li> <a href="/credentials">Credentials</a> </li> <li> <a href="/careers">Careers</a> </li> <li> <a href="/brochure">Brochure</a> </li> <li> <a href="/testimonials">Testimonials</a> </li> </ul> </div> <div class="space-y-4"> <h4 class="font-semibold text-primary">Products</h4> <ul class="space-y-2 text-base text-muted-foreground"> ${products.data?.map((product) => renderTemplate`<li> <a${addAttribute(`/products/#${product.name.toLocaleLowerCase().replaceAll(" ", "-")}`, "href")}> ${product.name} </a> </li>`)} </ul> </div> </div> <div class="space-y-4"> <h4 class="font-semibold text-primary">Contact</h4> <ul class="space-y-4 text-base text-muted-foreground"> <li class="space-y-2"> <p class="text-muted-foreground">Head Office</p> <div class="flex flex-col gap-2"> <div class="flex gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "className": "size-5" })} <span>352 San Agustin Ave., Palatiw, Pasig City</span> </div> <div class="flex gap-2"> ${renderComponent($$result, "Mail", Mail, { "className": "shrink-0 size-5" })} <span class="break-all">santienztechnical@gmail.com</span> </div> <div class="flex gap-2"> ${renderComponent($$result, "Phone", Phone, { "className": "shrink-0 size-5" })} <span>Technical Dept. : (02) 7001-0273</span> </div> <div class="flex gap-2"> ${renderComponent($$result, "Phone", Phone, { "className": "shrink-0 size-5" })} <span>Admin Dept. : (02) 7728-3381</span> </div> </div> </li> <li class="space-y-2"> <p class="text-muted-foreground">Cebu Office</p> <div class="flex flex-col gap-2"> <div class="flex gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "className": "shrink-0 size-5" })} <span>Lot 4863 D2, Lower Linao, Talisay City, Cebu</span> </div> <div class="flex gap-2"> ${renderComponent($$result, "Mail", Mail, { "className": "shrink-0 size-5" })} <span class="break-all">santienzacctg.visayas@gmail.com </span> </div> </div> </li> <li class="space-y-2"> <p class="text-muted-foreground">Davao Office</p> <div class="flex flex-col gap-2"> <div class="flex gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "className": "shrink-0 size-5" })} <span>Purok 7, Composano Compound, Brgy. Tugbok, Davao City
</span> </div> <div class="flex gap-2"> ${renderComponent($$result, "Mail", Mail, { "className": "shrink-0 size-5" })} <span class="break-all">santienzDavao@gmail.com</span> </div> </div> </li> </ul> </div> </div> <div class="p-4 z-10"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6519226290716!2d121.08610509999998!3d14.561886800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7d0d940b8ab%3A0x1914a2886e799f11!2sSantienz%20Philippines%20Incorporated!5e0!3m2!1sen!2sph!4v1750235424619!5m2!1sen!2sph" height="225"${addAttribute({ border: 0 }, "style")} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Santienz Philippines Incorporated Location Map" class="w-full rounded-md outline max-w-6xl mx-auto"></iframe> </div> <div class="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-10"> ${renderComponent($$result, "Image", $$Image, { "src": sunRays, "alt": "Santienz Logo Sun Rays", "class": "w-full h-full z-0 xmd:object-top-left object-cover saturate-25 brightness-125" })} </div> <div class="bg-primary py-8 text-center text-muted-foreground text-sm z-10"> ${renderComponent($$result, "Copyright", Copyright, { "className": "inline size-6" })} <span> 2025 Santienz Phils. Inc.</span> </div> </footer>`;
}, "D:/dev/santienz-astro/src/components/syntax/Footer.astro", void 0);

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};

const $$Astro$3 = createAstro("https://santienzphilsinc.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "D:/dev/santienz-astro/node_modules/.pnpm/@vercel+analytics@1.5.0_react@19.1.0/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/@vercel+analytics@1.5.0_react@19.1.0/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$2 = createAstro("https://santienzphilsinc.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "D:/dev/santienz-astro/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@19.1.0/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/santienz-astro/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@19.1.0/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://santienzphilsinc.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { desc, title, hideCTACard = false, image } = Astro2.props;
  const url = Astro2.url;
  const canonicalURL = new URL(url.pathname, url);
  const siteURL = new URL("/", url);
  const webSiteSchema = new URL("/#/schema/WebSite", Astro2.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": webSiteSchema,
    name: title,
    url: siteURL,
    description: desc
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">', '<link rel="manifest" href="/site.webmanifest"><link rel="canonical"', '><link rel="sitemap"', '><script type="application/ld+json">', '<\/script><meta name="generator"', ">", '</head> <body class="text-base min-h-dvh flex flex-col w-full antialiased text-foreground bg-background"> <main class="flex-1 z-0"> ', " ", " ", " ", " ", " </main> ", " </body></html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "titleTemplate": "%s | The Ultimate Polyurethane Mortar Floor", "titleDefault": "Santienz Phils. Inc.", "description": desc, "openGraph": {
    basic: {
      title,
      type: "website",
      image: image ?? `${url.origin}/summary-new.png`,
      url: `${url.origin}${url.pathname}`
    },
    optional: {
      description: desc,
      siteName: "Santienz Phils. Inc."
    }
  }, "twitter": {
    title,
    description: desc,
    card: "summary_large_image",
    image: image ?? `${url.origin}/summary-new.png`,
    creator: "@dondycles"
  } }), addAttribute(canonicalURL, "href"), addAttribute(`${url.origin}/sitemap-index.xml`, "href"), unescapeHTML(JSON.stringify(structuredData)), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), hideCTACard ? null : renderTemplate`${renderComponent($$result, "CTACard", $$CTACard, {})}`, renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Analytics", $$Index$1, {}), renderComponent($$result, "SpeedInsights", $$Index, {}), renderComponent($$result, "Toaster", Toaster, { "client:load": true, "richColors": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" }));
}, "D:/dev/santienz-astro/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$Heading1AndP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading1AndP;
  const {
    h1,
    p,
    parentClass,
    ctaDivClass,
    h1andpParentClass,
    h1Class,
    pClass,
    withCta,
    alignment = "default"
  } = Astro2.props;
  return renderTemplate`${withCta ? renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("", parentClass), "class")}><div${addAttribute(cn("space-y-2", h1andpParentClass), "class")}><h1${addAttribute(cn(
    "font-bold text-4xl md:text-6xl lg:text-6xl text-primary leading-tight z-20 relative",
    alignment === "default" && "text-center lg:text-left",
    alignment === "center-only" && "text-center",
    alignment === "reverse" && "lg:text-center text-left",
    alignment === "left-only" && "text-left",
    h1Class
  ), "class")}>${h1}</h1>${p ? renderTemplate`<p${addAttribute(cn("text-muted-foreground z-20 relative", pClass), "class")}>${p}</p>` : null}</div><div${addAttribute(cn(
    "my-6 w-fit",
    alignment === "default" && "not-lg:mx-auto",
    alignment === "center-only" && "mx-auto",
    alignment === "reverse" && "lg:mx-auto",
    alignment === "left-only" && "ml-0 mr-auto",
    ctaDivClass
  ), "class")}>${renderSlot($$result, $$slots["default"])}</div></div>` : renderTemplate`<div${addAttribute(cn("space-y-2", h1andpParentClass), "class")}><h1${addAttribute(cn(
    "font-bold text-4xl md:text-6xl lg:text-6xl text-primary leading-tight z-20 relative",
    alignment === "default" && "text-center lg:text-left",
    alignment === "center-only" && "text-center",
    alignment === "reverse" && "lg:text-center text-left",
    alignment === "left-only" && "text-left",
    h1Class
  ), "class")}>${h1}</h1>${p ? renderTemplate`<p${addAttribute(cn("text-muted-foreground z-20 relative", pClass), "class")}>${p}</p>` : null}</div>`}`;
}, "D:/dev/santienz-astro/src/components/syntax/Heading1AndP.astro", void 0);

export { $$MainLayout as $, Button as B, CTAGetQuote as C, DesktopNavigation as D, MobileNavigation as M, $$Header as a, $$Heading1AndP as b, cn as c, imgUrlFromSb as i, supabase as s };
