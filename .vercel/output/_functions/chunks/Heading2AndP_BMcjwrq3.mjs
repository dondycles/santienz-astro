import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_WNXyBHgw.mjs';
import 'clsx';
import { c as cn } from './Heading1AndP_CfnV8qlp.mjs';

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$Heading2AndP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading2AndP;
  const {
    hAndPParentClass,
    hClass,
    pClass,
    p,
    h,
    alignment = "default"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mx-auto max-w-6xl space-y-2 px-4", hAndPParentClass), "class")}> <h1${addAttribute(cn(
    "font-bold text-2xl xmd:text-4xl text-tertiary",
    alignment === "default" && "text-left xmd:text-center",
    alignment === "center-only" && "text-center",
    alignment === "reverse" && "xmd:text-left text-center",
    alignment === "left-only" && "text-left",
    hClass
  ), "class")}> ${h} </h1> ${p ? renderTemplate`<p${addAttribute(cn("text-muted-foreground", pClass), "class")}>${p}</p>` : null} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/dev/santienz-astro/src/components/syntax/Heading2AndP.astro", void 0);

export { $$Heading2AndP as $ };
