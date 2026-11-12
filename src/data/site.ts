// Dane kancelarii pochodzą z src/data/kancelaria.json (jedno źródło dla stron, dokumentów i JSON-LD).
// Pola null są ukrywane na stronie, a w dokumentach pokazują znacznik [DO UZUPEŁNIENIA].
import k from './kancelaria.json';

export const site = {
  name: k.nazwa,
  url: 'https://proximalegal.pl',
  tagline: 'Kancelaria dla spółek',
  description:
    'Kancelaria dla spółek na każdym etapie: od rejestracji, przez wzrost, po trudne decyzje. Abonament prawny w stałym ryczałcie i Legal Rescue dla spółek w kryzysie. Warszawa i online.',
  email: k.email,
  phone: k.telefon as string | null,
  address: {
    street: k.ulica as string | null,
    postalCode: k.kodPocztowy as string | null,
    city: k.miasto,
    country: 'PL',
  },
  legalName: k.pelnaNazwa as string | null,
  nip: k.nip as string | null,
  regon: k.regon as string | null,
  krs: k.krs as string | null,
  founder: {
    name: 'Kinga Adamus',
    title: k.tytulZawodowy as string | null,
    area: 'prawo gospodarcze',
  },
  locale: 'pl_PL',
};

export const PLACEHOLDER = (what: string) => `[do uzupełnienia: ${what}]`;

// Akty prawne: klucz -> nazwa i adres w ISAP (strona aktu z historią i tekstami jednolitymi).
export const acts: Record<string, { name: string; short: string; url: string; id?: string }> = {
  kc: { name: 'Kodeks cywilny', short: 'k.c.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640160093', id: 'Dz.U. 1964 nr 16 poz. 93' },
  kpc: { name: 'Kodeks postępowania cywilnego', short: 'k.p.c.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19640430296', id: 'Dz.U. 1964 nr 43 poz. 296' },
  ksh: { name: 'Kodeks spółek handlowych', short: 'k.s.h.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20000941037', id: 'Dz.U. 2000 nr 94 poz. 1037' },
  pu: { name: 'Prawo upadłościowe', short: 'p.u.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20030600535', id: 'Dz.U. 2003 nr 60 poz. 535' },
  pr: { name: 'Prawo restrukturyzacyjne', short: 'p.r.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20150000978', id: 'Dz.U. 2015 poz. 978' },
  kp: { name: 'Kodeks pracy', short: 'k.p.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19740240141', id: 'Dz.U. 1974 nr 24 poz. 141' },
  kk: { name: 'Kodeks karny', short: 'k.k.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970880553', id: 'Dz.U. 1997 nr 88 poz. 553' },
  uptp: { name: 'Ustawa o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach handlowych', short: 'u.p.n.o.t.h.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20130000403', id: 'Dz.U. 2013 poz. 403' },
  krs: { name: 'Ustawa o Krajowym Rejestrze Sądowym', short: 'u.KRS', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19971210769', id: 'Dz.U. 1997 nr 121 poz. 769' },
  pa: { name: 'Ustawa o prawie autorskim i prawach pokrewnych', short: 'pr. aut.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940240083', id: 'Dz.U. 1994 nr 24 poz. 83' },
  uznk: { name: 'Ustawa o zwalczaniu nieuczciwej konkurencji', short: 'u.z.n.k.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19930470211', id: 'Dz.U. 1993 nr 47 poz. 211' },
  sus: { name: 'Ustawa o systemie ubezpieczeń społecznych', short: 'u.s.u.s.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19981370887', id: 'Dz.U. 1998 nr 137 poz. 887' },
  vat: { name: 'Ustawa o podatku od towarów i usług', short: 'u.VAT', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20040540535', id: 'Dz.U. 2004 nr 54 poz. 535' },
  cit: { name: 'Ustawa o podatku dochodowym od osób prawnych', short: 'u.p.d.o.p.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19920210086', id: 'Dz.U. 1992 nr 21 poz. 86' },
  pit: { name: 'Ustawa o podatku dochodowym od osób fizycznych', short: 'u.p.d.o.f.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19910800350', id: 'Dz.U. 1991 nr 80 poz. 350' },
  rodo: { name: 'Rozporządzenie (UE) 2016/679 (RODO)', short: 'RODO', url: 'https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016R0679' },
  usude: { name: 'Ustawa o świadczeniu usług drogą elektroniczną', short: 'u.ś.u.d.e.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20021441204', id: 'Dz.U. 2002 nr 144 poz. 1204' },
  pke: { name: 'Prawo komunikacji elektronicznej', short: 'p.k.e.', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001221', id: 'Dz.U. 2024 poz. 1221' },
};

export function sourceHref(s: { act?: string; url?: string }) {
  if (s.url) return s.url;
  if (s.act && acts[s.act]) return acts[s.act].url;
  return undefined;
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);

export const formatMonth = (d: Date) =>
  new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' }).format(d);

/** 9 900 (polska norma: separator tysięcy także dla liczb 4-cyfrowych w cenach) */
export const formatPrice = (n: number) =>
  new Intl.NumberFormat('pl-PL', { useGrouping: 'always' } as Intl.NumberFormatOptions).format(n);
