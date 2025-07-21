import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_WNXyBHgw.mjs';
import { ChevronLeft } from 'lucide-react';
import { c as cn, s as supabase, $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP, C as CTAGetQuote } from '../../chunks/Heading1AndP_CfnV8qlp.mjs';
import { $ as $$SearchBar } from '../../chunks/SearchBar_f9xldfY-.mjs';
import { jsx } from 'react/jsx-runtime';
import { $ as $$LinearGradientMask } from '../../chunks/LinearGradientMask_C16fGn1W.mjs';
export { renderers } from '../../renderers.mjs';

function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}

const $$Astro = createAstro("https://santienzphilsinc.com");
const prerender = false;
const $$Table = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Table;
  const query = Astro2.url.searchParams.get("query");
  const projects = await supabase.from("projects").select().order("title", { ascending: true }).ilike("title", `%${query ?? ""}%`).select("title, address, products, sqm, slug");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Complete List of Finished Projects of Santienz Phils. Inc.", "desc": "Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary backdrop-blur-lg" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section class="relative"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "h1": "Complete List of Finished Projects", "p": "Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.", "withCta": true, "parentClass": "mx-auto px-4 pt-24 sm:pt-32 max-w-6xl", "alignment": "center-only" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CTAButton", CTAGetQuote, { "className": "px-12 z-20 shadow-lg", "variant": "tertiary", "effect": "shineHover", "link": "/projects" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "ChevronLeft", ChevronLeft, {})} Back to Featured Projects
` })} ` })} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, {})} </section> <section class="relative"> <div class="space-y-6 mx-auto max-w-6xl px-1 xmd:px-4 mt-6 relative"> ${renderComponent($$result2, "SearchBar", $$SearchBar, {})} <div class="border border-tertiary rounded-md px-3 xmd:px-1 shadow-lg"> ${renderComponent($$result2, "TableComponent", Table, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TableHeader", TableHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "TableRow", TableRow, { "className": "[&>th]:text-tertiary [&>th]:font-semibold" }, { "default": async ($$result5) => renderTemplate` ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": async ($$result6) => renderTemplate`Client` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": async ($$result6) => renderTemplate`Location` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": async ($$result6) => renderTemplate`Product used` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": async ($$result6) => renderTemplate`Area serviced` })} ` })} ` })} ${renderComponent($$result3, "TableBody", TableBody, {}, { "default": async ($$result4) => renderTemplate`${projects.data?.map((project) => renderTemplate`${renderComponent($$result4, "TableRow", TableRow, {}, { "default": async ($$result5) => renderTemplate` ${renderComponent($$result5, "TableCell", TableCell, { "className": "font-medium text-primary hover:underline" }, { "default": async ($$result6) => renderTemplate` <a${addAttribute(`/projects/${project.slug}`, "href")}>${project.title}</a> ` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": async ($$result6) => renderTemplate`${project.address}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": async ($$result6) => renderTemplate`${project.products?.map((product, i) => renderTemplate`<span> <a${addAttribute(`/products#${product.toLocaleLowerCase().replaceAll(" ", "-")}`, "href")} class="text-primary hover:underline"> ${project.products?.length - 1 !== i ? `${product.toUpperCase()}, ` : product.toUpperCase()} </a> </span>`)}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": async ($$result6) => renderTemplate`${project.sqm ? `${Intl.NumberFormat().format(project.sqm)} sqm` : null}` })} ` })}`)}` })} ` })} </div> </div> <div class="max-w-6xl mx-auto w-fit py-6"> ${renderComponent($$result2, "CTAButton", CTAGetQuote, { "className": "shadow-lg", "variant": "tertiary", "effect": "shineHover", "link": "/projects" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ChevronLeft", ChevronLeft, {})} Back to Featured Projects
` })} </div> ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,transparent,white)]" })} </section> ` })}`;
}, "D:/dev/santienz-astro/src/pages/projects/table.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/projects/table.astro";
const $$url = "/projects/table";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Table,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
