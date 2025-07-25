import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import db from "@astrojs/db";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.altie122.xyz",
  integrations: [sitemap(), react(), mdx(), db(), clerk()],
  adapter: netlify(),
  output: "server",
  redirects: {
    // "/blog/posts/[...slug]": "/posts/[...slug]",
    // "/blog/tags/[tag]": "/tags/[tag]",
    // "/blog/tags/": "/tags/",
    // "/blog/[...page]": "/[...page]",
    // "/blog/": "/",
  },
  legacy: {
    collections: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: true,
    },
  },
});
