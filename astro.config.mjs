// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";


// https://astro.build/config
export default defineConfig({
  site: "https://hsanker.in/",
  trailingSlash: "never",
  integrations: [react(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()]
  }
});


// export default defineConfig({
//   // base: '.', // Set a path prefix.
//   site: "https://hsanker.in/", // Use to generate your sitemap and canonical URLs in your final build.
//   trailingSlash: "always", // Use to always append '/' at end of url
//   markdown: {
//     shikiConfig: {
//       // Choose from Shiki's built-in themes (or add your own)
//       // https://github.com/shikijs/shiki/blob/main/docs/themes.md
//       theme: "monokai",
//     },
//   },
//   integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
//   output: "server",
//   adapter: cloudflare({
//     platformProxy: {
//       enabled: true,
//     },
//   }),
// });

