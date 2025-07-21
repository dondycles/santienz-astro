import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_WNXyBHgw.mjs';
import { TableIcon } from 'lucide-react';
import { s as supabase, $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP, C as CTAGetQuote } from '../chunks/Heading1AndP_CfnV8qlp.mjs';
import { $ as $$ProjectsMapper } from '../chunks/ProjectsMapper_DaFb_fl9.mjs';
import { $ as $$SearchBar } from '../chunks/SearchBar_f9xldfY-.mjs';
import { $ as $$LinearGradientMask } from '../chunks/LinearGradientMask_C16fGn1W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://santienzphilsinc.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const query = Astro2.url.searchParams.get("query");
  const projects = await supabase.from("projects").select().order("title", { ascending: true }).ilike("title", `%${query ?? ""}%`).select("id, title, slug, imgs");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Featured Projects of Santienz Phils. Inc.", "desc": "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary backdrop-blur-lg" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section class="relative"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "parentClass": "mx-auto px-4 pt-24 sm:pt-32 max-w-6xl", "h1": "Featured Projects", "p": "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.", "withCta": true, "alignment": "center-only" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CTAButton", CTAGetQuote, { "className": "px-12 z-20 shadow-lg", "variant": "tertiary", "effect": "shineHover", "link": "/projects/table" }, { "default": async ($$result4) => renderTemplate`
See All Projects in Table View ${renderComponent($$result4, "TableIcon", TableIcon, {})} ` })} ` })} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, {})} </section> <div class="relative mt-6"> ${projects.data ? renderTemplate`<div class="space-y-6 mx-auto max-w-6xl px-1 xmd:px-4"> ${renderComponent($$result2, "SearchBar", $$SearchBar, {})} <div${addAttribute(`grid grid-cols-1 xxs:grid-cols-2 auto-rows-fr gap-1 xmd:gap-4 w-full`, "class")}> ${renderComponent($$result2, "ProjectsMapper", $$ProjectsMapper, { "projects": projects.data })} </div> </div>` : null} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,white)]" })} </div> ` })}`;
}, "D:/dev/santienz-astro/src/pages/projects/index.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
