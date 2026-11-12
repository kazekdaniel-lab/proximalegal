// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypePlaceholders from './src/lib/rehype-placeholders.mjs';
import polishTypography from './src/lib/polish-typography.mjs';

const SITE = 'https://proximalegal.pl';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  security: {
    // Astro liczy hashe inline'owych <script>/<style> i wstrzykuje meta CSP na każdej stronie.
    // Nagłówki HTTP (HSTS, frame-ancestors itd.) są w netlify.toml.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
  image: {
    responsiveStyles: false,
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypePlaceholders],
  },
  integrations: [
    polishTypography(),
    sitemap({
      filter: (page) => !page.includes('/kontakt/dziekujemy/'),
      serialize(item) {
        const u = item.url.replace(SITE, '');
        if (u === '/') item.priority = 1.0;
        else if (/^\/(abonament-prawny|legal-rescue|specjalizacje|doradztwo-strategiczne)\//.test(u)) item.priority = 0.9;
        else if (/^\/(baza-wiedzy|legal)\/.+/.test(u) && !/(polityka|regulamin|nota-prawna)/.test(u)) item.priority = 0.7;
        else if (/(polityka|regulamin|nota-prawna)/.test(u)) item.priority = 0.2;
        else item.priority = 0.6;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
