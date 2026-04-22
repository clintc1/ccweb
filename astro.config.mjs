import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths(), tailwindcss()],
  },
  site: 'https://clintoncawood.com',
  integrations: [
    mdx(),
    sitemap(),
  ],
});
