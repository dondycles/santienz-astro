// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "royalecoldstorage.com.ph",
      },
      {
        protocol: "https",
        hostname: "isocholdings.com",
      },
      {
        protocol: "https",
        hostname: "delimondo.ph",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
});
