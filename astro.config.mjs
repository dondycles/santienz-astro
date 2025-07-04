// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: import.meta.env.DEV
    ? "http://localhost"
    : "https://santienz-astro.vercel.app",
  integrations: [react(), sitemap()],
  adapter: vercel(),
  devToolbar: {
    enabled: true,
  },
  redirects: {
    "/careers": "/",
    "/testimonials": "/",
  },
  server: {
    port: 1117,
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmvuenlcht.ufs.sh",
      },
    ],
  },
});
