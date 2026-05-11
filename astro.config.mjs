// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // 1. Import the adapter

// https://astro.build/config
export default defineConfig({
  site: 'https://wastewize.co.uk',
  output: 'static', // 2. Ensure output is static for a standard site
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }), // 3. Add the adapter
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
    }),
  ],
});