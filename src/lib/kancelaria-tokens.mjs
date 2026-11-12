// Dane kancelarii -> tokeny {{...}} używane w dokumentach (src/content/dokumenty).
// Jedno źródło: src/data/kancelaria.json. Pole null = brak danych -> widoczny znacznik [DO UZUPEŁNIENIA: ...].
// Tekst zależny od tytułu zawodowego (adwokat / radca prawny) przełącza się sam po wpisaniu "tytulZawodowy".
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const FILE = fileURLToPath(new URL('../data/kancelaria.json', import.meta.url));
const miss = (label) => `[DO UZUPEŁNIENIA: ${label}]`;

const PROFESJE = {
  adwokat: {
    samorzad: 'adwokatury (Izba Adwokacka w Warszawie)',
    listaOrgan: 'Okręgową Radę Adwokacką w Warszawie',
    ustawa: 'ustawy z dnia 26 maja 1982 r. Prawo o adwokaturze',
    etyka: 'Zbiór Zasad Etyki Adwokackiej i Godności Zawodu (Kodeks Etyki Adwokackiej)',
    etykaUrl: 'https://www.adwokatura.pl',
    tajemnica: 'adwokacką (art. 6 ustawy z dnia 26 maja 1982 r. Prawo o adwokaturze)',
    rodo: 'art. 16a ustawy z dnia 26 maja 1982 r. Prawo o adwokaturze',
  },
  'radca prawny': {
    samorzad: 'radców prawnych (Okręgowa Izba Radców Prawnych w Warszawie)',
    listaOrgan: 'Radę Okręgowej Izby Radców Prawnych w Warszawie',
    ustawa: 'ustawy z dnia 6 lipca 1982 r. o radcach prawnych',
    etyka: 'Kodeks Etyki Radcy Prawnego',
    etykaUrl: 'https://kirp.pl',
    tajemnica: 'radcowską (art. 3 ust. 3-6 ustawy z dnia 6 lipca 1982 r. o radcach prawnych)',
    rodo: 'art. 5a ustawy z dnia 6 lipca 1982 r. o radcach prawnych',
  },
};

export function loadKancelaria() {
  return JSON.parse(readFileSync(FILE, 'utf8'));
}

export function tokens(k = loadKancelaria()) {
  const adres = k.ulica && k.kodPocztowy ? `${k.ulica}, ${k.kodPocztowy} ${k.miasto}` : null;
  const krsNieDotyczy = typeof k.krs === 'string' && /^nie/i.test(k.krs);
  const krs = krsNieDotyczy ? null : k.krs;
  const p = k.tytulZawodowy ? PROFESJE[k.tytulZawodowy] : null;
  const pv = (key, label) => (p ? p[key] : miss(`${label} (zależy od tytułu: adwokat albo radca prawny)`));

  const nazwa = k.pelnaNazwa ?? `${k.nazwa} ${miss('forma prawna i pełna nazwa z rejestru')}`;
  const rejestr = krsNieDotyczy
    ? 'wpis do Centralnej Ewidencji i Informacji o Działalności Gospodarczej'
    : krs
      ? `KRS ${krs}${k.sadRejestrowy ? `, ${k.sadRejestrowy}` : ''}`
      : miss('numer KRS i sąd rejestrowy albo informacja o wpisie do CEIDG');

  let iod;
  if (k.inspektorOchronyDanych === null) iod = miss('czy wyznaczono inspektora ochrony danych');
  else if (k.inspektorOchronyDanych === false || /^nie/i.test(String(k.inspektorOchronyDanych))) iod = 'Administrator nie wyznaczył inspektora ochrony danych.';
  else iod = `Administrator wyznaczył inspektora ochrony danych, z którym można kontaktować się pod adresem ${k.inspektorOchronyDanych}.`;

  let transfer;
  if (!k.dostawcaPoczty) transfer = miss('czy dostawca poczty przekazuje dane poza EOG i na jakiej podstawie');
  else if (!k.podstawaTransferuPoczty) transfer = miss('podstawa przekazania danych przez dostawcę poczty poza EOG albo informacja, że dane są w EOG');
  else if (/^eog$/i.test(k.podstawaTransferuPoczty)) transfer = 'Dostawca poczty e-mail przechowuje dane na terytorium Europejskiego Obszaru Gospodarczego.';
  else transfer = `Jeżeli dostawca poczty e-mail przekazuje dane poza Europejski Obszar Gospodarczy, podstawą przekazania jest ${k.podstawaTransferuPoczty}.`;

  return {
    'nazwa': nazwa,
    'administrator': `${nazwa}, z siedzibą pod adresem ${adres ?? miss('adres siedziby')}, NIP ${k.nip ?? miss('NIP')}, REGON ${k.regon ?? miss('REGON')}, ${rejestr}`,
    'adres': adres ?? miss('adres siedziby'),
    'adres-korespondencyjny': k.adresKorespondencyjny ?? adres ?? miss('adres do korespondencji'),
    'nip': k.nip ?? miss('NIP'),
    'regon': k.regon ?? miss('REGON'),
    'rejestr': rejestr,
    'telefon': k.telefon ?? miss('telefon'),
    'email': k.email,
    'dostawca-poczty': k.dostawcaPoczty ?? miss('dostawca poczty e-mail'),
    'transfer-poczty': transfer,
    'iod': iod,
    'tytul': k.tytulZawodowy ?? miss('tytuł zawodowy: adwokat albo radca prawny'),
    'numer-wpisu': k.numerWpisu ?? miss('numer wpisu na listę'),
    'samorzad': pv('samorzad', 'samorząd zawodowy'),
    'lista-organ': pv('listaOrgan', 'organ prowadzący listę'),
    'ustawa-zawodowa': pv('ustawa', 'ustawa o zawodzie'),
    'zasady-etyki': pv('etyka', 'zbiór zasad etyki'),
    'etyka-url': pv('etykaUrl', 'adres strony samorządu'),
    'tajemnica': pv('tajemnica', 'rodzaj tajemnicy zawodowej'),
    'rodo-tajemnica': pv('rodo', 'przepis o ograniczeniu praw z RODO'),
  };
}

/** Lista brakujących pól do raportu i README. */
export function missingFields(k = loadKancelaria()) {
  const labels = {
    pelnaNazwa: 'pełna nazwa i forma prawna z rejestru',
    ulica: 'ulica i numer siedziby',
    kodPocztowy: 'kod pocztowy',
    nip: 'NIP',
    regon: 'REGON',
    krs: 'KRS (albo "nie dotyczy" przy CEIDG)',
    telefon: 'telefon',
    tytulZawodowy: 'tytuł zawodowy: "adwokat" albo "radca prawny"',
    numerWpisu: 'numer wpisu na listę adwokatów albo radców prawnych',
    dostawcaPoczty: 'dostawca poczty e-mail (np. nazwa firmy hostingu poczty)',
    podstawaTransferuPoczty: 'podstawa transferu danych poczty poza EOG albo "EOG"',
    inspektorOchronyDanych: 'inspektor ochrony danych: adres e-mail albo "nie"',
  };
  return Object.entries(labels).filter(([key]) => k[key] === null || k[key] === undefined || k[key] === '').map(([key, label]) => ({ key, label }));
}
