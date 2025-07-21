import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_WNXyBHgw.mjs';
import 'clsx';
import { c as cn } from './Heading1AndP_CfnV8qlp.mjs';

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$LinearGradientMask = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinearGradientMask;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "absolute inset-0 w-full h-full bg-tertiary/20 -z-20 [mask-image:linear-gradient(white,transparent)] pointer-events-none",
    className
  ), "class")}></div>`;
}, "D:/dev/santienz-astro/src/components/LinearGradientMask.astro", void 0);

export { $$LinearGradientMask as $ };
