// llms.txt: zwięzła mapa strony dla asystentów AI (https://llmstxt.org).
// Uwaga: Google nie korzysta z tego pliku; to tani dodatek, nie dźwignia widoczności.
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { specializations } from '../data/specializations';
import { formatPrice } from '../data/site';
import { rescue } from '../data/offer';

export async function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const bw = await getCollection('baza-wiedzy');
  const legal = await getCollection('legal');
  const docs = (await getCollection('dokumenty')).sort((a, b) => a.data.order - b.data.order);
  const price = formatPrice(rescue.price);

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    'Kancelaria prowadzi spółki przez cztery etapy: start i rejestracja, finansowanie i M&A, bieżąca obsługa oraz kryzys i restrukturyzacja. Pracuje w Warszawie i online. Pierwsza konsultacja trwa 30 minut i jest bezpłatna. Odpowiedź w abonamencie: 1 dzień roboczy.',
    '',
    '## Oferta',
    `- [Abonament prawny](${u('/abonament-prawny/')}): stały prawnik, ryczałt miesięczny z pulą godzin, 4 pakiety (Legal Starter, Legal + Finanse, Legal + Strategia, All-in-One), wycena po konsultacji.`,
    `- [Legal Rescue](${u('/legal-rescue/')}): spółka traci płynność, zarząd ma 30 dni na wniosek; diagnoza, ochrona zarządu, restrukturyzacja albo upadłość; od ${price} zł netto miesięcznie.`,
    `- [Doradztwo strategiczne](${u('/doradztwo-strategiczne/')}): sesja 90 minut albo stała współpraca w abonamencie.`,
    '',
    '## Specjalizacje',
    ...specializations.map((s) => `- [${s.title}](${u(`/specjalizacje/${s.slug}/`)}): ${s.short}`),
    '',
    '## Baza wiedzy (język przedsiębiorcy)',
    ...bw.map((a) => `- [${a.data.title}](${u(`/baza-wiedzy/${a.id}/`)}): ${a.data.description}`),
    '',
    '## Opracowania prawne (język prawniczy)',
    ...legal.map((a) => `- [${a.data.title}](${u(`/legal/${a.id}/`)}): ${a.data.thesis}`),
    '',
    '## Kancelaria',
    `- [O nas](${u('/o-nas/')}): założycielka Kinga Adamus, prawo gospodarcze i transakcje M&A; sieć partnerów (doradca restrukturyzacyjny, podatkowy, księgowość, prawo pracy, notariusz).`,
    `- [FAQ](${u('/faq/')})`,
    `- [Kontakt](${u('/kontakt/')}): ${site.email}`,
    '',
    '## Optional',
    ...docs.map((d) => `- [${d.data.title}](${u(`/legal/${d.id}/`)})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
