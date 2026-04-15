import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fugenblechzentrierung.de',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz') && !page.includes('/legal-notice') && !page.includes('/privacy') && !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
