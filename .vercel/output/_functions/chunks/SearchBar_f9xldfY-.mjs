import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, f as renderScript, d as renderTemplate } from './astro/server_WNXyBHgw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Search } from 'lucide-react';
import 'react';
import { I as Input } from './input_BEjcMRPs.mjs';
import { c as cn } from './Heading1AndP_CfnV8qlp.mjs';

function InputWithStartIcon({
  id,
  name,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        id,
        className: cn(
          "peer ps-9 text-foreground placeholder:text-muted-foreground",
          className
        ),
        name
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50", children: /* @__PURE__ */ jsx(Search, { className: "text-tertiary", size: 16, "aria-hidden": "true" }) })
  ] });
}

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("max-w-6xl mx-auto w-full xz-20", className), "class")}> <form id="search-form-1"> ${renderComponent($$result, "InputWithStartIcon", InputWithStartIcon, { "className": "rounded-md border-tertiary bg-tertiary/5 focus-visible:ring-tertiary shadow-lg", "id": "search-input-1", "name": "query" })} </form> </div> ${renderScript($$result, "D:/dev/santienz-astro/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/dev/santienz-astro/src/components/SearchBar.astro", void 0);

export { $$SearchBar as $ };
