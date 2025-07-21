import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from './astro/server_WNXyBHgw.mjs';
import { C as CERTS_INFO } from './creds-info_DRmXp4Xg.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronRight } from 'lucide-react';
import { B as Button, c as cn } from './Heading1AndP_CfnV8qlp.mjs';
import React__default, { useEffect, useState } from 'react';
import { $ as $$LinearGradientMask } from './LinearGradientMask_C16fGn1W.mjs';
import { $ as $$Heading2AndP } from './Heading2AndP_BMcjwrq3.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_Bmvd5UnP.mjs';

function LinkButton({
  title,
  href,
  className
}) {
  return /* @__PURE__ */ jsx(Button, { asChild: true, variant: "link", className: cn("mx-auto", className), children: /* @__PURE__ */ jsxs("a", { href, children: [
    /* @__PURE__ */ jsx("span", { children: title }),
    " ",
    /* @__PURE__ */ jsx(ChevronRight, {})
  ] }) });
}

const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "normal",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React__default.useRef(null);
  const scrollerRef = React__default.useRef(null);
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: cn("scroller relative z-20 w-full overflow-hidden", className),
      children: /* @__PURE__ */ jsx(
        "ul",
        {
          ref: scrollerRef,
          className: cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-1 xmd:gap-4",
            start && "animate-scroll",
            pauseOnHover && "active:[animation-play-state:paused] sm:hover:[animation-play-state:paused]"
          ),
          children: items.map((item, idx) => /* @__PURE__ */ jsx("a", { href: item.img, target: "_blank", className: "my-auto ", children: /* @__PURE__ */ jsxs(
            "li",
            {
              className: "relative h-fit w-[244px] xmd:w-[312px] max-w-full shrink-0 rounded-md bg-background/50  dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] border shadow-lg",
              children: [
                /* @__PURE__ */ jsx("div", { className: "xmd:p-4 p-1", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: item.img,
                    alt: item.title,
                    className: "w-full aspect-auto object-fill object-top rounded-md max-h-82 shadow border"
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "px-1 xmd:px-4 pb-1 pt-1 xmd:pt-0 xmd:pb-4 text-primary font-semibold text-center", children: item.title })
              ]
            },
            item.title
          ) }, idx))
        }
      )
    }
  );
};

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$CertficatesSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CertficatesSlider;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-6 relative", className), "class")}> ${renderComponent($$result, "Heading2AndP", $$Heading2AndP, { "h": "Credentials", "p": "Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake.", "alignment": "left-only" })} <div class="max-w-6xl mx-auto px-1 xmd:px-4"> ${renderComponent($$result, "InfiniteMovingCards", InfiniteMovingCards, { "client:load": true, "items": CERTS_INFO.map((cert) => ({ ...cert, img: cert.img.src })), "client:component-hydration": "load", "client:component-path": "D:/dev/santienz-astro/src/components/ui/infinite-moving-cards", "client:component-export": "InfiniteMovingCards" })} </div> <div class="flex px-4"> ${renderComponent($$result, "LinkButton", LinkButton, { "href": "/credentials", "title": "See Credential Details" })} </div> ${renderComponent($$result, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,white)]" })} </section>`;
}, "D:/dev/santienz-astro/src/components/CertficatesSlider.astro", void 0);

const $$TrustedBy = createComponent(($$result, $$props, $$slots) => {
  const clients = [
    {
      src: "https://static.wikia.nocookie.net/logopedia/images/e/e2/SMHypermarket2010.svg/revision/latest/scale-to-width-down/300?cb=20211202101121",
      alt: "SM Hypermarket"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/800px-Nestl%C3%A9.svg.png",
      alt: "Nestle"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png",
      alt: "Magnolia"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png",
      alt: "McDonalds"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Jollibee_2011_logo.svg/800px-Jollibee_2011_logo.svg.png",
      alt: "Jollibee"
    },
    {
      src: "https://lirp.cdn-website.com/b3fbd289/dms3rep/multi/opt/san-miguel-foods_logo-640w.png",
      alt: "San Miguel Foods"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mang_Inasal.svg/395px-Mang_Inasal.svg.png?20200712183642",
      alt: "Mang Inasal"
    },
    {
      src: "https://royalecoldstorage.com.ph/wp-content/uploads/2024/07/royal-cold-storage-logo-2022.webp",
      alt: "Royale Cold Storage"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/5/5e/KCC_Mall_logo.png",
      alt: "KCC Malls"
    },
    {
      src: "https://isocholdings.com/wp-content/uploads/2019/12/orca-blk-logo.png",
      alt: "ORCA Cold Chain Solutions"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg",
      alt: "Alfamart"
    },
    {
      src: "https://delimondo.ph/cdn/shop/files/Delimondo_Logo-Black_2048x2048.png",
      alt: "Delimondo"
    },
    {
      src: "https://static.wikia.nocookie.net/logopedia/images/e/e6/RedRibbon2009Logo.png/revision/latest?cb=20231224062231",
      alt: "Red Ribbon"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Universal_Robina_logo_2016.svg",
      alt: "Universal Robina"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Max_Group_logo.png",
      alt: "Max's Group, Inc."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="space-y-6 mt-12"> ${renderComponent($$result, "Heading2AndP", $$Heading2AndP, { "h": "Trusted By", "p": "Proud to have collaborated with the following companies.", "alignment": "left-only" })} <div class="flex flex-wrap justify-center-safe gap-8 sm:gap-12 lg:gap-16 px-4 max-w-6xl mx-auto w-full"> ${clients.map((client) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": client.src, "alt": client.alt, "inferSize": true, "class": "max-h-8 sm:max-h-12 lg:max-h-16 xl:max-h-24 aspect-auto w-fit" })}`)} </div> </section>`;
}, "D:/dev/santienz-astro/src/components/TrustedBy.astro", void 0);

export { $$TrustedBy as $, LinkButton as L, $$CertficatesSlider as a };
