// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
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
  output: "server",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmvuenlcht.ufs.sh",
      },
    ],
  },
});
