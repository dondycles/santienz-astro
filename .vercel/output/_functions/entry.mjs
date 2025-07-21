import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CXYoaKFR.mjs';
import { manifest } from './manifest_CSoYxQRc.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/brochure.astro.mjs');
const _page4 = () => import('./pages/contact-us.astro.mjs');
const _page5 = () => import('./pages/credentials.astro.mjs');
const _page6 = () => import('./pages/products.astro.mjs');
const _page7 = () => import('./pages/projects/table.astro.mjs');
const _page8 = () => import('./pages/projects/_slug_.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.0_@types+node@24_4bc87dc85ae2fecc669169dcf3a022cb/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.12.0_@types+node@24_4bc87dc85ae2fecc669169dcf3a022cb/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/brochure.astro", _page3],
    ["src/pages/contact-us.astro", _page4],
    ["src/pages/credentials.astro", _page5],
    ["src/pages/products.astro", _page6],
    ["src/pages/projects/table.astro", _page7],
    ["src/pages/projects/[slug]/index.astro", _page8],
    ["src/pages/projects/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cdeae579-597f-4699-839f-4fe7646fb06b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
