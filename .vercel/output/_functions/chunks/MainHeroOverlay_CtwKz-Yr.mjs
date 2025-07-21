import { a as createComponent, d as renderTemplate, r as renderSlot, m as maybeRenderHead } from './astro/server_WNXyBHgw.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainHeroOverlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="absolute inset-0 w-full h-full bg-blue-950 z-19 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div> <div class="z-18 absolute top-0 left-0 h-full w-full"> ', ' </div> <script>\n  window.addEventListener("scroll", () => {\n    const heroHeight = document.getElementById("main-hero")?.clientHeight + 124;\n\n    if (window.scrollY > heroHeight * 0.75) {\n      document\n        .getElementById("landing-page-header")\n        ?.classList.add("active-header");\n      document\n        .getElementById("header-burger-icon")\n        ?.classList.add("active-header-burger-icon");\n      Array.from(document.getElementsByClassName("header-links")).forEach(\n        (el) => {\n          el.classList.add("active-header-links");\n        },\n      );\n    } else {\n      document\n        .getElementById("landing-page-header")\n        ?.classList.remove("active-header");\n      document\n        .getElementById("header-burger-icon")\n        ?.classList.remove("active-header-burger-icon");\n      Array.from(document.getElementsByClassName("header-links")).forEach(\n        (el) => {\n          el.classList.remove("active-header-links");\n        },\n      );\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/dev/santienz-astro/src/components/syntax/MainHeroOverlay.astro", void 0);

export { $$MainHeroOverlay as $ };
