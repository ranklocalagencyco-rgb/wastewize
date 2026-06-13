import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://wastewize.co.uk',
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // Strip trailing slash from all URLs except the homepage to match canonical format
        if (item.url !== 'https://wastewize.co.uk/') {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});