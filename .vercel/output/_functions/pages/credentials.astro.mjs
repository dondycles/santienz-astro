import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_WNXyBHgw.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bmvd5UnP.mjs';
import { $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP } from '../chunks/Heading1AndP_CfnV8qlp.mjs';
import { C as CERTS_INFO } from '../chunks/creds-info_DRmXp4Xg.mjs';
import { $ as $$Heading2AndP } from '../chunks/Heading2AndP_BMcjwrq3.mjs';
import { $ as $$LinearGradientMask } from '../chunks/LinearGradientMask_C16fGn1W.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Credentials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Credentials of Santienz Phils. Inc.", "desc": "Our certifications and permits reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary backdrop-blur-lg" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideCredentials": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideCredentials": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section class="relative"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "h1andpParentClass": "mx-auto px-4 pt-24 sm:pt-32 max-w-6xl", "pClass": "text-center", "alignment": "center-only", "h1": "Credentials", "p": "Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake." })} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, {})} </section> <div class="relative pb-6"> <section${addAttribute(CERTS_INFO.filter((cert) => cert.type === "certificate").length === 0, "hidden")} class="space-y-6 mt-24 max-w-6xl mx-auto"> ${renderComponent($$result2, "Heading2AndP", $$Heading2AndP, { "h": "Certificates", "alignment": "left-only" })} <div class="grid grid-cols-3 gap-1 xmd:gap-4 px-1 xmd:px-4"> ${CERTS_INFO.filter((cert) => cert.type === "certificate").map(
    (cert) => renderTemplate`<div class="h-full flex"> <h3 class="sr-only">${cert.title}</h3> <div class="max-w-xl p-1 xmd:p-4 rounded-md mx-auto bg-primary/5 flex-1"> <a${addAttribute(cert.img.src, "href")} target="_blank"> ${renderComponent($$result2, "Image", $$Image, { "src": cert.img, "alt": cert.title, "class": "rounded-md object-fit h-full w-full" })} </a> </div> </div>`
  )} </div> </section> <section${addAttribute(CERTS_INFO.filter((cert) => cert.type === "permit").length === 0, "hidden")} class="space-y-6 mt-24 max-w-6xl mx-auto"> ${renderComponent($$result2, "Heading2AndP", $$Heading2AndP, { "h": "Permits", "alignment": "left-only" })} <div class="grid grid-cols-2 gap-1 xmd:gap-4 px-1 xmd:px-4"> ${CERTS_INFO.filter((cert) => cert.type === "permit").map((cert) => renderTemplate`<div${addAttribute(`h-full flex ${cert.title === "Business Permit" && "col-span-2"}`, "class")}> <h3 class="sr-only">${cert.title}</h3> <div class="p-1 xmd:p-4 rounded-md mx-auto bg-primary/5"> <a${addAttribute(cert.img.src, "href")} target="_blank"> ${renderComponent($$result2, "Image", $$Image, { "src": cert.img, "alt": cert.title, "class": "rounded-md" })} </a> </div> </div>`)} </div> </section> <section${addAttribute(CERTS_INFO.filter((cert) => cert.type === "receipt").length === 0, "hidden")} class="space-y-6 mt-24 max-w-6xl mx-auto"> ${renderComponent($$result2, "Heading2AndP", $$Heading2AndP, { "h": "Receipts", "alignment": "left-only" })} ${CERTS_INFO.filter((cert) => cert.type === "receipt").map((cert) => renderTemplate`<div class="space-y-4 px-1 xmd:px-4"> <h3 class="sr-only">${cert.title}</h3> <div class="max-w-xl p-1 xmd:p-4 rounded-md mx-auto bg-primary/5"> <a${addAttribute(cert.img.src, "href")} target="_blank"> ${renderComponent($$result2, "Image", $$Image, { "src": cert.img, "alt": cert.title, "class": "rounded-md" })} </a> </div> </div>`)} </section> ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,transparent,white)] " })} </div> ` })}`;
}, "D:/dev/santienz-astro/src/pages/credentials.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/credentials.astro";
const $$url = "/credentials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Credentials,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
