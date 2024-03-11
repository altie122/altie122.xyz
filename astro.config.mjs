import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import webmanifest from "astro-webmanifest";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://altie122.dovahkiin.xyz',
  integrations: [tailwind(), sitemap(), webmanifest({
    name: 'Altie122',
    icon: '/icon.png',
    short_name: 'Altie122',
    description: 'Altie122\'s website',
    start_url: '/',
    theme_color: '#450a0a',
    background_color: '#0f172a',
    display: 'standalone',
  }),
  ]
});