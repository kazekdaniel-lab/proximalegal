import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ACTS = [
  'kc', 'kpc', 'ksh', 'pu', 'pr', 'kp', 'kk', 'uptp', 'krs', 'pa', 'uznk',
  'sus', 'vat', 'cit', 'pit', 'rodo', 'usude', 'pke',
] as const;

const source = z.object({
  label: z.string(),
  act: z.enum(ACTS).optional(),
  url: z.string().url().optional(),
});

const faq = z.object({ q: z.string(), a: z.string() });

const common = {
  title: z.string(),
  description: z.string(),
  author: z.string().default('Kinga Adamus'),
  legalState: z.coerce.date(),
  published: z.coerce.date(),
  updated: z.coerce.date(),
  keywords: z.array(z.string()).default([]),
  summary: z.array(z.string()).default([]),
  faq: z.array(faq).default([]),
  sources: z.array(source).default([]),
  verify: z.array(z.string()).default([]),
};

const bazaWiedzy = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/baza-wiedzy' }),
  schema: z.object({
    ...common,
    lead: z.string(),
    category: z.enum(['Start i rejestracja', 'Umowy i dokumenty', 'Finansowanie', 'Kryzys i restrukturyzacja']),
    readingTime: z.number(),
    related: z.array(z.string()).default([]),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    ...common,
    shortTitle: z.string(),
    thesis: z.string(),
    legalBasis: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    related: z.array(z.string()).default([]),
    relatedBw: z.array(z.string()).default([]),
  }),
});

const dokumenty = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/dokumenty' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    order: z.number(),
    verify: z.array(z.string()).default([]),
  }),
});

export const collections = { 'baza-wiedzy': bazaWiedzy, legal, dokumenty };
