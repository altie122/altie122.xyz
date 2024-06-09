import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.altie122.xyz",
  integrations: [tailwind({applyBaseStyles: false,}), sitemap(), db(), react()],
  output: "server",
  adapter: netlify(),
  redirects: {
    "/posts/[...slug]": "/blog/posts/[...slug]",
    "/tags/[tag]": "/blog/tags/[tag]",
    "/tags/": "/blog/tags/"
  }
});