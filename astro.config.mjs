import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
      },
    site: 'https://clintoncawood.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
