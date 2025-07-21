import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from './astro/server_WNXyBHgw.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_Bmvd5UnP.mjs';
import { i as imgUrlFromSb } from './Heading1AndP_CfnV8qlp.mjs';

const $$Astro = createAstro("https://santienzphilsinc.com");
const $$ProjectsMapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsMapper;
  const { projects } = Astro2.props;
  const featured_projects = projects.filter((project) => project.imgs !== null);
  return renderTemplate`${featured_projects.length ? featured_projects.map((project, i) => {
    return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${project.slug}`, "href")}${addAttribute(`w-full mb-0 mt-auto h-full`, "class")}><section${addAttribute(`bg-primary/5 rounded-md flex flex-col h-full max-h-52 w-full overflow-hidden relative `, "class")}${addAttribute(project.title, "id")}>${renderComponent($$result, "Image", $$Image, { "src": imgUrlFromSb("projects", project.imgs[0]), "alt": project.title, "class": "w-full h-full object-cover object-center shrink-0 brightness-75", "quality": "mid", "inferSize": true })}<div class="bg-gradient-to-t from-tertiary/25 to-transparent absolute bottom-0 left-0 right-0 p-3 xmd:p-4"><h2 class="text-primary-foreground text-base sm:text-2xl font-medium  drop-shadow  leading-tight">${project.title}</h2></div></section></a>`;
  }) : null}<!-- <p class="text-muted-foreground text-center col-span-full mb-2 px-4">
     No results for {query}
     <span>
       <Frown className="inline ml-1" />
     </span>
   </p> -->`;
}, "D:/dev/santienz-astro/src/components/ProjectsMapper.astro", void 0);

export { $$ProjectsMapper as $ };
