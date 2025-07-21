import { a as createComponent, e as renderComponent, d as renderTemplate, c as createAstro, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_WNXyBHgw.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Bmvd5UnP.mjs';
import { ChevronLeft, Star, MapPin, Tag, Ruler, Info } from 'lucide-react';
import { s as supabase, i as imgUrlFromSb, $ as $$MainLayout, a as $$Header, D as DesktopNavigation, M as MobileNavigation, b as $$Heading1AndP, C as CTAGetQuote } from '../../chunks/Heading1AndP_CfnV8qlp.mjs';
import { $ as $$LinearGradientMask } from '../../chunks/LinearGradientMask_C16fGn1W.mjs';
import { $ as $$MainHeroOverlay } from '../../chunks/MainHeroOverlay_CtwKz-Yr.mjs';
export { renderers } from '../../renderers.mjs';

const grid3dBackground = new Proxy({"src":"/_astro/grid_3d.BSYfQrX8.webp","width":2135,"height":978,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/grid_3d.webp";
							}
							
							return target[name];
						}
					});

const $$Grid3DBg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": grid3dBackground, "alt": "Grid 3D Background", "class": "absolute inset-0 w-full h-full object-cover", "loading": "eager" })}`;
}, "D:/dev/santienz-astro/src/components/Grid3DBg.astro", void 0);

const $$Astro = createAstro("https://santienzphilsinc.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const { data } = await supabase.from("projects").select().eq("slug", slug ?? "").single();
  if (!data) return Astro2.redirect("/projects");
  const images = data.imgs?.length ? Array.from({ length: data.imgs.length }).map(
    (_, index) => imgUrlFromSb("projects", data.imgs[index])
  ) : null;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${data.title} and Santienz Phils. Inc.`, "desc": `${data.title} is one of the valued clients served by Santienz Phils. Inc. Explore our work on their project and how we helped bring their vision to life.`, "image": images !== null ? images[0] : null }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "text-primary-foreground" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DesktopNavigation", DesktopNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DesktopNavigation", "client:component-export": "default" })} ${renderComponent($$result3, "MobileNavigation", MobileNavigation, { "hideProjects": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<section id="main-hero" class="relative w-full overflow-hidden bg-primary pt-20 xmd:pt-30"> ${renderComponent($$result2, "Heading1AndP", $$Heading1AndP, { "h1": data.title, "p": `${data.title} is one of the valued clients served by Santienz Phils. Inc.
        Explore our work on their project and how we helped bring their vision to
        life.`, "withCta": true, "h1Class": "text-tertiary", "pClass": "text-center text-primary-foreground", "parentClass": "max-w-6xl mx-auto px-4", "alignment": "center-only" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CTAButton", CTAGetQuote, { "className": "drop-shadow-[0_4px_8px_var(--tertiary)] px-12 z-20 border-tertiary text-primary-foreground bg-tertiary/10  hover:bg-tertiary/20 hover:text-primary-foreground backdrop-blur w-full", "variant": "outline", "effect": "shineHover", "link": "/projects" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "ChevronLeft", ChevronLeft, {})} <span>Back to all projects</span> ` })} ` })} ${renderComponent($$result2, "MainHeroOverlay", $$MainHeroOverlay, {}, { "default": async ($$result3) => renderTemplate`${images ? renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": images[0], "alt": data.title ? data.title : "Grid 3D Background", "class": "absolute inset-0 w-full h-full object-cover blur-xs brightness-75", "quality": "low", "width": 1080, "height": 720 })}` : renderTemplate`${renderComponent($$result3, "Grid3DBg", $$Grid3DBg, {})}`}` })} </section> <section class="mx-auto max-w-6xl px-4 text-muted-foreground my-6 space-y-2"> <p> <span> ${renderComponent($$result2, "Star", Star, { "className": "inline mr-1 size-5" })} </span>
Client: ${data.title} </p> <p${addAttribute(!data.address, "hidden")}> <span> ${renderComponent($$result2, "MapPin", MapPin, { "className": "inline mr-1 size-5" })} </span>
Location: ${data.address} </p> <p> <span> ${renderComponent($$result2, "Tag", Tag, { "className": "inline mr-1  size-5" })} </span>
Products used: ${data.products.map((prod, i) => renderTemplate`<span> <a${addAttribute(`/products#${prod.toLocaleLowerCase().replaceAll(" ", "-")}`, "href")} class="text-primary hover:underline"> ${data.products.length - 1 !== i ? `${prod.toUpperCase()}, ` : prod.toUpperCase()} </a> </span>`)} </p> <p${addAttribute(!data.sqm, "hidden")}> <span> ${renderComponent($$result2, "Ruler", Ruler, { "className": "inline mr-1  size-5" })} </span>
Area: ${data.sqm}sqm
</p> <p${addAttribute(!data.description, "hidden")}> <span> ${renderComponent($$result2, "Info", Info, { "className": "inline mr-1  size-5" })} </span>
Other info: ${data.description} </p> </section> <section class="relative"> ${images ? renderTemplate`<div class="max-w-6xl w-full mx-auto px-1 grid xmd:px-4 
        xxs:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]
        xmd:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 not-xmd:gap-1 relative"> ${images?.map((img, i) => renderTemplate`<div class="relative rounded-md overflow-hidden w-full h-full m-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover h-full w-full", "src": img, "alt": `image-${i}-of-${data.slug}`, "quality": "mid", "inferSize": true })} </div>`)} </div>` : null} ${renderComponent($$result2, "LinearGradientMask", $$LinearGradientMask, { "className": "[mask-image:linear-gradient(transparent,transparent,white)]" })} </section> ` })}`;
}, "D:/dev/santienz-astro/src/pages/projects/[slug]/index.astro", void 0);

const $$file = "D:/dev/santienz-astro/src/pages/projects/[slug]/index.astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
