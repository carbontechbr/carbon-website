import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  output: "hybrid",
  adapter: netlify(),
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "pt-br"],
  }
});