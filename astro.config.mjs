import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wastewize.co.uk',
  output: 'static',
  adapter: vercel(),
  integrations: [
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
  redirects: {
    '/areas/west-london/great-portland-street': '/areas/central-london/great-portland-street',
    '/areas/west-london/harley-street':         '/areas/central-london/harley-street',
    '/areas/west-london/marylebone':            '/areas/central-london/marylebone',
    '/areas/west-london/oxford-street':         '/areas/central-london/oxford-street',
    '/areas/west-london/portland-place':        '/areas/central-london/portland-place',
    '/areas/north-london/hackney':              '/areas/east-london/hackney',
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});