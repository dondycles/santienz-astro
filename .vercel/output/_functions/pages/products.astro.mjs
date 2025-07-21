import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_WNXyBHgw.mjs';
import { i as imgUrlFromSb, s as supabase, $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP } from '../chunks/Heading1AndP_CfnV8qlp.mjs';
import { $ as $$LinearGradientMask } from '../chunks/LinearGradientMask_C16fGn1W.mjs';
import { $ as $$Heading2AndP } from '../chunks/Heading2AndP_BMcjwrq3.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bmvd5UnP.mjs';
import { CheckCircle } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
  const { product } = Astro2.props;
  const haveImages = product.imgs.length > 0;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(product.name.toLocaleLowerCase().replaceAll(" ", "-"), "id")}${addAttribute(`${haveImages ? "grid" : ""} grid-cols-1 lg:grid-cols-5 gap-6 scroll-m-18 mt-12 max-w-6xl mx-auto`, "class")}> ${renderComponent($$result, "Heading2AndP", $$Heading2AndP, { "h": product.name, "p": product.description, "alignment": "left-only", "hClass": "text-tertiary", "pClass": " whitespace-pre-wrap", "hAndPParentClass": `${haveImages ? "" : ""} w-full lg:col-span-3` }, { "default": ($$result2) => renderTemplate` <div class="flex gap-4 flex-wrap mt-6"> ${product.highlights.map((highlight) => renderTemplate`<div> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "inline mr-1 text-tertiary" })} <span class="text-muted-foreground capitalize">${highlight}</span> </div>`)} </div> ` })} ${haveImages ? renderTemplate`<div class="grid sm:grid-cols-[repeat(auto-fit,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(156px,1fr))] mx-auto gap-1 mt-0 mb-auto w-full lg:col-span-2 px-1 max-w-4xl"> ${product.imgs.map((img, i) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imgUrlFromSb("products", img), "alt": `${product.name},${i}`, "inferSize": true, "class": "rounded-md object-contain w-full drop-shadow-xl max-w-md m-auto" })}`)} </div>` : null} </section>`;
}, "D:/dev/santienz-astro/src/components/Product.astro", void 0);

const prerender = false;
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const products = await supabase.from("products").select("description, id, imgs, name, highlights").order("name");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Products of Santienz Phils. Inc.", "desc": "Discover our range of high-quality industrial flooring and waterproofing solutions designed for durability and performance." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary backdrop-blur-lg" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideProducts": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideProducts": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section class="relative"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "h1andpParentClass": "mx-auto px-4 pt-24 sm:pt-32 max-w-6xl", "h1": "Products", "p": "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.", "alignment": "center-only", "withCta": false })} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, {})} </section> <div class="space-y-32"> ${products.data?.map((product, i) => {
    if (i === products.data?.length - 1)
      return renderTemplate`<div class="relative"> ${renderComponent($$result2, "Product", $$Product, { "product": product })} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,white)]" })} </div>`;
    return renderTemplate`${renderComponent($$result2, "Product", $$Product, { "product": product })}`;
  })} </div> ` })}`;
}, "D:/dev/santienz-astro/src/pages/products.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
