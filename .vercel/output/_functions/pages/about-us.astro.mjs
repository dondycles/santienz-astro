import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_WNXyBHgw.mjs';
import { ChevronRight } from 'lucide-react';
import { $ as $$TrustedBy, a as $$CertficatesSlider } from '../chunks/TrustedBy_DnyWJelg.mjs';
import { c as cn, $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP, C as CTAGetQuote } from '../chunks/Heading1AndP_CfnV8qlp.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { $ as $$LinearGradientMask } from '../chunks/LinearGradientMask_C16fGn1W.mjs';
import { $ as $$Heading2AndP } from '../chunks/Heading2AndP_BMcjwrq3.mjs';
export { renderers } from '../renderers.mjs';

const TimelineContext = React.createContext(
  void 0
);
const useTimeline = () => {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a Timeline");
  }
  return context;
};
function Timeline({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "vertical",
  className,
  ...props
}) {
  const [activeStep, setInternalStep] = React.useState(defaultValue);
  const setActiveStep = React.useCallback(
    (step) => {
      if (value === void 0) {
        setInternalStep(step);
      }
      onValueChange?.(step);
    },
    [value, onValueChange]
  );
  const currentStep = value ?? activeStep;
  return /* @__PURE__ */ jsx(
    TimelineContext.Provider,
    {
      value: { activeStep: currentStep, setActiveStep },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          "data-slot": "timeline",
          className: cn(
            "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
            className
          ),
          "data-orientation": orientation,
          ...props
        }
      )
    }
  );
}
function TimelineContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "timeline-content",
      className: cn("text-muted-foreground text-base", className),
      ...props
    }
  );
}
function TimelineDate({
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "time";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "timeline-date",
      className: cn(
        "text-muted-foreground mb-1 block text-xs font-medium group-data-[orientation=vertical]/timeline:max-sm:h-4",
        className
      ),
      ...props
    }
  );
}
function TimelineHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "timeline-header", className: cn(className), ...props });
}
function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "timeline-indicator",
      className: cn(
        "border-tertiary/20 group-data-completed/timeline-item:border-tertiary absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2",
        className
      ),
      "aria-hidden": "true",
      ...props,
      children
    }
  );
}
function TimelineItem({ step, className, ...props }) {
  const { activeStep } = useTimeline();
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "timeline-item",
      className: cn(
        "group/timeline-item has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-tertiary relative flex flex-1 flex-col gap-0.5 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-12 bg-primary/5 p-4 mb-4 rounded-md",
        className
      ),
      "data-completed": step <= activeStep || void 0,
      ...props
    }
  );
}
function TimelineSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "timeline-separator",
      className: cn(
        "bg-primary/5 absolute self-start group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:translate-y-0",
        className
      ),
      "aria-hidden": "true",
      ...props
    }
  );
}
function TimelineTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "h3",
    {
      "data-slot": "timeline-title",
      className: cn("font-semibold text-xl text-primary", className),
      ...props
    }
  );
}

const items = [
  {
    id: 1,
    date: "1998",
    title: "Started Operations",
    description: "Established on December 24, 1998 to engage in the supply and install surface protection system. Forged an agreement with ENVIROCHEM-USA, Covercrete-Canada and BASF-Germany."
  },
  {
    id: 2,
    date: "2002",
    title: "Joined CCAP Cold Chain Association of the Philippines",
    description: ""
  },
  {
    id: 3,
    date: "2003",
    title: "Opened ware house at Tambler, Gen. Santos City",
    description: ""
  },
  {
    id: 4,
    date: "2005",
    title: "Moved to new Santienz Phils., Inc. Office and Warehouse",
    description: "#357 San Agustin Ave., Brgy. Palatiw, Pasig City, Philippines"
  },
  {
    id: 5,
    date: "2006",
    title: "Malaysia Branch",
    description: "Established regional branch and manufacturing plant in Malaysia thru Creative Analysis Sdn. Bhd."
  },
  {
    id: 6,
    date: "2007",
    title: "Minglanilla, Cebu City Branch",
    description: ""
  },
  {
    id: 7,
    date: "2010",
    title: "C.B27 Partnership Agreement",
    description: "Forged a partnership agreement with C.B27 Engineering Co., Ltd., Hon Chi Minh City, Vietnam."
  },
  {
    id: 8,
    date: "2014",
    title: "Installed 700,000 sq. mts. Surface Area",
    description: "Has already completed installation of about 700,00 sq. mts. surface area nationwide for various industry application."
  },
  {
    id: 9,
    date: "2017",
    title: "Tugbok, Davao City Branch"
  }
];
function History() {
  return /* @__PURE__ */ jsx(Timeline, { defaultValue: 9, children: items.map((item) => /* @__PURE__ */ jsxs(TimelineItem, { step: item.id, children: [
    /* @__PURE__ */ jsxs(TimelineHeader, { children: [
      /* @__PURE__ */ jsx(TimelineSeparator, {}),
      /* @__PURE__ */ jsx(TimelineDate, { children: item.date }),
      /* @__PURE__ */ jsx(TimelineTitle, { children: item.title }),
      /* @__PURE__ */ jsx(TimelineIndicator, {})
    ] }),
    /* @__PURE__ */ jsx(TimelineContent, { children: item.description })
  ] }, item.id)) });
}

const prerender = false;
const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About Santienz Phils. Inc.", "desc": "Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary backdrop-blur-lg" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideAboutUs": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideAboutUs": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section class="relative"> <div class="mx-auto grid grid-cols-1 gap-y-4 gap-x-16 lg:grid-cols-2 px-4 pt-24 sm:pt-32 max-w-6xl"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "h1": "About Us", "p": "Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service.", "withCta": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CTAButton", CTAGetQuote, { "className": "px-12 z-20 w-fit shadow-lg", "variant": "tertiary", "effect": "shineHover", "link": "/projects" }, { "default": ($$result4) => renderTemplate`
See All Projects
` })} ` })} <div class="shadow-xl"> <iframe src="https://drive.google.com/file/d/1P0UcS0fa_ExazAVLeCqpOiGBSPFV5M2_/preview" allow="autoplay" class="w-full aspect-video rounded-md bg-foreground/10"></iframe> </div> </div> ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, {})} </section>  <section class="space-y-6 max-w-6xl mx-auto mt-12"> ${renderComponent($$result2, "Heading2AndP", $$Heading2AndP, { "h": "History", "alignment": "left-only" })} <div class="px-4"> ${renderComponent($$result2, "History", History, {})} </div> </section>  <section class="mx-auto max-w-6xl space-y-6 mt-12"> ${renderComponent($$result2, "Heading2AndP", $$Heading2AndP, { "h": "Our Commitment", "alignment": "left-only" })} <div class="px-4"> <div class="space-y-2 bg-primary/5 rounded-md p-4 text-muted-foreground"> <p class=""> <span class="inline-block -mb-1"> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "text-tertiary size-5" })} </span> <span>
To continually provide the local construction and manufacturing
            industry with the latest advances in engineering methods,
            specifically in concrete floor repair, renovation and floor, roof
            protection systems.
</span> </p> <br> <p> <span class="inline-block -mb-1"> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "text-tertiary size-5" })} </span> <span>
Truly, with our long line of advance technology products, which have
            gained popular acceptance among maintenance and construction
            engineer, Santienz Philippines, Inc. id destined to be a "household"
            name.
</span> </p> <br> <p> <span class="inline-block -mb-1"> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "text-tertiary size-5" })} </span> <span>
Our company would like to come to you as a solution to your flooring
            and roofing problems.
</span> </p> <br> <p> <span class="inline-block -mb-1"> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "text-tertiary size-5" })} </span> <span>
On this premise will Santienz Philippines, Inc. serve its Philippine
            partners towards progressive industrialization.
</span> </p> </div> </div> </section>   ${renderComponent($$result2, "TrustedBy", $$TrustedBy, {})} ${renderComponent($$result2, "CertficatesSlider", $$CertficatesSlider, { "className": "mt-12" })} ` })}`;
}, "D:/dev/santienz-astro/src/pages/about-us.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
