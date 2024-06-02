import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://altie122.dovahkiin.xyz",
  integrations: [tailwind(), sitemap(), db()],
  output: "server",
  adapter: netlify(),
  redirects: {
    "/posts/[...slug]": "/blog/posts/[...slug]",
    "/tags/[tag]": "/blog/tags/[tag]",
    "/tags/": "/blog/tags/",
  },
});
