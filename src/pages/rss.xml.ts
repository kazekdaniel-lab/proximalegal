import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const bw = await getCollection('baza-wiedzy');
  const legal = await getCollection('legal');
  const items = [
    ...bw.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.published,
      link: `/baza-wiedzy/${a.id}/`,
      categories: [a.data.category],
      author: `kontakt@proximalegal.pl (${a.data.author})`,
    })),
    ...legal.map((a) => ({
      title: a.data.title,
      description: a.data.thesis,
      pubDate: a.data.published,
      link: `/legal/${a.id}/`,
      categories: ['Opracowania prawne'],
      author: `kontakt@proximalegal.pl (${a.data.author})`,
    })),
  ].sort((x, y) => y.pubDate.valueOf() - x.pubDate.valueOf());

  return rss({
    title: 'Proxima Legal: Baza wiedzy i opracowania prawne',
    description: 'Prawo spółek językiem przedsiębiorcy oraz opracowania prawne: odpowiedzialność zarządu, restrukturyzacja, umowy B2B, utracona korzyść, kary umowne.',
    site: context.site!,
    items,
    customData: '<language>pl-pl</language>',
  });
}
