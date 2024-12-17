import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import url122 from "@url122/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.altie122.xyz",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    react(),
    mdx(),
    url122({ prefix: "122" }),
  ],
  adapter: netlify(),
  redirects: {
    "/posts/[...slug]": "/blog/posts/[...slug]",
    "/tags/[tag]": "/blog/tags/[tag]",
    "/tags/": "/blog/tags/",
  },
  legacy: {
    collections: true,
  },
});
