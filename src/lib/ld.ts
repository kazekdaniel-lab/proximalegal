import { acts, site } from '../data/site';

const ORG = `${site.url}/#kancelaria`;
const PERSON = `${site.url}/o-nas/#kinga-adamus`;

type Source = { label: string; act?: string; url?: string };

export function legislation(sources: Source[]) {
  return sources
    .map((s) => {
      const a = s.act ? acts[s.act] : undefined;
      const url = s.url ?? a?.url;
      if (!url) return null;
      const node: Record<string, unknown> = { '@type': 'Legislation', name: a?.name ?? s.label, url, legislationJurisdiction: 'PL' };
      if (a?.id) node.legislationIdentifier = a.id;
      return node;
    })
    .filter(Boolean);
}

export function articleLd(opts: {
  url: string;
  title: string;
  description: string;
  published: Date;
  updated: Date;
  section?: string;
  keywords?: string[];
  sources?: Source[];
  wordCount?: number;
  genre?: string;
  image?: string;
}) {
  const node: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${opts.url}#artykul`,
    headline: opts.title.length > 110 ? opts.title.slice(0, 107) + '...' : opts.title,
    description: opts.description,
    author: { '@id': PERSON },
    publisher: { '@id': ORG },
    datePublished: opts.published.toISOString(),
    dateModified: opts.updated.toISOString(),
    inLanguage: 'pl-PL',
    mainEntityOfPage: { '@id': `${opts.url}#webpage` },
    image: new URL(opts.image ?? '/og/default.png', site.url).toString(),
    isAccessibleForFree: true,
  };
  if (opts.section) node.articleSection = opts.section;
  if (opts.keywords?.length) node.keywords = opts.keywords.join(', ');
  if (opts.wordCount) node.wordCount = opts.wordCount;
  if (opts.genre) node.genre = opts.genre;
  const leg = legislation(opts.sources ?? []);
  if (leg.length) node.citation = leg;
  return node;
}

export function faqLd(url: string, faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
