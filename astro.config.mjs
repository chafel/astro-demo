import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue()]
});