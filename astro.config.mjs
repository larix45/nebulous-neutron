// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import { webcore } from 'webcoreui/integration';

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
  },

  integrations: [icon(), webcore()],
  adapter: netlify(),
});