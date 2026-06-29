import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.altie122.xyz",
  integrations: [sitemap(), react(), mdx()],
  adapter: netlify(),
  output: "server",
  redirects: {
    "/posts/[...slug]": "/blog/posts/[...slug]",
    "/tags/[tag]": "/blog/tags/[tag]",
    "/tags/": "/blog/tags/",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
