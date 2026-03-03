// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    }
  },

  integrations: [icon()],
  adapter: netlify(),
});