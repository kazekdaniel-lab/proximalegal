export type NavItem = { label: string; href: string; note?: string; tone?: 'rescue' };
export type NavGroup = { label: string; href?: string; items: NavItem[] };

export const mainNav: (NavGroup | NavItem)[] = [
  {
    label: 'Oferta',
    items: [
      { label: 'Abonament prawny', href: '/abonament-prawny/', note: 'Stały prawnik, ryczałt i cztery pakiety' },
      { label: 'Legal Rescue', href: '/legal-rescue/', note: 'Spółka traci płynność. 30 dni na decyzję', tone: 'rescue' },
      { label: 'Doradztwo strategiczne', href: '/doradztwo-strategiczne/', note: 'Sesja 90 minut albo stała współpraca' },
    ],
  },
  {
    label: 'Specjalizacje',
    href: '/specjalizacje/',
    items: [
      { label: 'Start i rejestracja', href: '/specjalizacje/start-i-rejestracja/', note: '01 Start' },
      { label: 'Finansowanie i M&A', href: '/specjalizacje/finansowanie-i-ma/', note: '02 Wzrost' },
      { label: 'Bieżąca obsługa', href: '/specjalizacje/biezaca-obsluga/', note: '03 Codzienna praca' },
      { label: 'Kryzys i restrukturyzacja', href: '/specjalizacje/kryzys-i-restrukturyzacja/', note: '04 Trudne decyzje' },
    ],
  },
  { label: 'O nas', href: '/o-nas/' },
  {
    label: 'Wiedza',
    items: [
      { label: 'Baza wiedzy', href: '/baza-wiedzy/', note: 'Prawo spółek językiem przedsiębiorcy' },
      { label: 'Opracowania prawne', href: '/legal/', note: 'Utracona korzyść, kary umowne, przedawnienie' },
      { label: 'FAQ', href: '/faq/', note: 'Cena, proces i zakres' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const footerNav: NavGroup[] = [
  {
    label: 'Oferta',
    items: [
      { label: 'Abonament prawny', href: '/abonament-prawny/' },
      { label: 'Legal Rescue', href: '/legal-rescue/' },
      { label: 'Doradztwo strategiczne', href: '/doradztwo-strategiczne/' },
    ],
  },
  {
    label: 'Specjalizacje',
    items: [
      { label: 'Start i rejestracja', href: '/specjalizacje/start-i-rejestracja/' },
      { label: 'Finansowanie i M&A', href: '/specjalizacje/finansowanie-i-ma/' },
      { label: 'Bieżąca obsługa', href: '/specjalizacje/biezaca-obsluga/' },
      { label: 'Kryzys i restrukturyzacja', href: '/specjalizacje/kryzys-i-restrukturyzacja/' },
    ],
  },
  {
    label: 'Kancelaria',
    items: [
      { label: 'O nas', href: '/o-nas/' },
      { label: 'Baza wiedzy', href: '/baza-wiedzy/' },
      { label: 'Opracowania prawne', href: '/legal/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: 'Polityka prywatności', href: '/legal/polityka-prywatnosci/' },
  { label: 'Polityka cookies', href: '/legal/polityka-cookies/' },
  { label: 'Regulamin', href: '/legal/regulamin/' },
  { label: 'Nota prawna', href: '/legal/nota-prawna/' },
];
