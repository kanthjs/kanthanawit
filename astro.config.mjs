// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kanthanawit.in.th',
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ['lh3.googleusercontent.com', 'live.staticflickr.com', 'kanthjs.github.io', 'raw.githubusercontent.com'],
  },
});
