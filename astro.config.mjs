import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    // either enable tsconfig path resolution (recommended)
    resolve: { tsconfigPaths: true },
    plugins: [tsconfigPaths(), tailwindcss()],
  },
  site: 'https://clintoncawood.com',
  integrations: [mdx(), sitemap()],
});
