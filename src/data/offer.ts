// Treści 1:1 z obecnej strony (docs/zrodlo/tresc-oryginalu.md).

export const packages = [
  {
    id: 'legal-starter',
    kicker: 'Obsługa prawna',
    name: 'Legal Starter',
    claim: 'Wszystko, żeby zacząć i nie żałować.',
    features: ['Stały prawnik prowadzący', 'Umowy B2B i z pracownikami', 'Organy spółki i KRS', 'Doradztwo bieżące'],
    forWhom: 'Startupy, JDG po przekształceniu, małe spółki',
    featured: false,
  },
  {
    id: 'legal-finanse',
    kicker: 'Prawo i księgowość',
    name: 'Legal + Finanse',
    claim: 'Prawo i finanse pod jednym dachem.',
    features: ['Wszystko z Legal Starter', 'Pełna księgowość w biurze partnerskim', 'Doradca podatkowy', 'Jedna faktura miesięcznie'],
    forWhom: 'Firmy, które chcą uprościć administrację',
    featured: false,
  },
  {
    id: 'legal-strategia',
    kicker: 'Prawo i doradztwo',
    name: 'Legal + Strategia',
    claim: 'Twój prawnik wie, dokąd zmierzasz.',
    features: ['Wszystko z Legal Starter', 'Doradca strategiczny', 'Sesje strategiczne co miesiąc', 'Wsparcie przy rundach i M&A'],
    forWhom: 'Firmy w fazie wzrostu i skalowania',
    featured: true,
  },
  {
    id: 'all-in-one',
    kicker: 'Pełna obsługa',
    name: 'All-in-One',
    claim: 'Cała firma pod jedną opieką.',
    features: ['Prawo, strategia, księgowość, podatki', 'Priorytetowy kontakt telefoniczny', 'Sesje strategiczne co 2 tygodnie', 'Pierwszeństwo w Legal Rescue'],
    forWhom: 'Spółki z dużą aktywnością prawną i finansową',
    featured: false,
  },
];

// true = jest, false = brak, string = wartość
export const comparison: { label: string; values: (boolean | string)[] }[] = [
  { label: 'Stały prawnik prowadzący', values: [true, true, true, true] },
  { label: 'Umowy, kadry, organy spółki, KRS', values: [true, true, true, true] },
  { label: 'Doradztwo bieżące', values: [true, true, true, true] },
  { label: 'Biuro rachunkowe (partner)', values: [false, true, false, true] },
  { label: 'Doradca podatkowy (partner)', values: [false, true, false, true] },
  { label: 'Doradca strategiczny', values: [false, false, true, true] },
  { label: 'Sesje strategiczne', values: [false, false, 'co miesiąc', 'co 2 tyg.'] },
  { label: 'Czas odpowiedzi', values: ['1 dzień rob.', '1 dzień rob.', '1 dzień rob.', 'priorytet + telefon'] },
  { label: 'Legal Rescue', values: ['na zasadach ogólnych', 'na zasadach ogólnych', 'na zasadach ogólnych', 'pierwszeństwo'] },
];

export const packageRules = [
  { t: 'Pula godzin', d: 'Każdy pakiet ma stałą liczbę godzin w miesiącu. Raport z wykorzystania dostajesz razem z fakturą.' },
  { t: 'Godziny ponad pulę', d: 'Rozliczamy je według stawki zapisanej w umowie. Zanim przekroczymy pulę, uprzedzamy Cię mailem.' },
  { t: 'Zmiana pakietu', d: 'Zmieniasz pakiet raz na kwartał. Przejście na wyższy pakiet zrobimy od następnego miesiąca.' },
];

export const rescue = {
  price: 9900,
  signals: [
    { t: 'Zaległości ponad 3 miesiące', d: 'Prawo upadłościowe domniemywa niewypłacalność, gdy opóźnienie w płaceniu zobowiązań przekracza trzy miesiące.' },
    { t: 'Długi większe niż majątek', d: 'Zobowiązania spółki przewyższają wartość jej majątku i stan ten trwa ponad 24 miesiące.' },
    { t: 'Wypowiedziany kredyt lub zajęty rachunek', d: 'Bank wypowiada finansowanie albo komornik zajmuje konto i płatności stają.' },
  ],
  stages: [
    { days: 'Dni 1-7', from: 1, to: 7, t: 'Diagnoza', d: 'Analizujemy finanse, zobowiązania i dokumenty spółki. Ustalamy, czy i od kiedy spółka jest niewypłacalna i jakie ryzyko ciąży na każdym członku zarządu.' },
    { days: 'Dni 7-14', from: 8, to: 14, t: 'Decyzja', d: 'Przedstawiamy warianty z kosztem i czasem każdego: ugoda, restrukturyzacja albo upadłość. Zarząd wybiera, a my zapisujemy uzasadnienie decyzji.' },
    { days: 'Do 30. dnia', from: 15, to: 30, t: 'Wdrożenie', d: 'Składamy wniosek albo otwieramy postępowanie, prowadzimy negocjacje i jesteśmy przy spółce do zamknięcia sprawy.' },
  ],
  deliverables: [
    'Diagnozę: czy spółka jest niewypłacalna lub zagrożona niewypłacalnością i od kiedy.',
    'Mapę ryzyk zarządu z art. 299 i 586 KSH oraz listę kroków, które je ograniczają.',
    'Plan wyjścia z kryzysu w wariantach, z kosztem i czasem każdego z nich.',
    'Negocjacje z bankami, leasingodawcami i kluczowymi wierzycielami.',
    'Przygotowanie i prowadzenie restrukturyzacji albo wniosku o upadłość.',
    'Koordynację sądu, nadzorcy, wierzycieli i księgowości przez jedną osobę kontaktową.',
  ],
  // level: 0 = poza sądem ... 5 = najgłębsza ingerencja (do wizualizacji skali)
  paths: [
    { name: 'Ugoda z wierzycielami', who: 'Poza sądem', board: 'Zarząd bez zmian', protection: 'Tylko to, co wynegocjujemy', when: 'Kilku kluczowych wierzycieli, krótki problem z płynnością.', level: 0 },
    { name: 'Postępowanie o zatwierdzenie układu (PZU)', who: 'Nadzorca układu wybrany przez spółkę', board: 'Zarząd bez zmian', protection: 'Zawieszenie egzekucji od obwieszczenia, na 4 miesiące', when: 'Sporne wierzytelności do 15%. Najszybsza i najmniej formalna droga.', level: 1 },
    { name: 'Przyspieszone postępowanie układowe', who: 'Nadzorca sądowy', board: 'Zarząd pod nadzorem', protection: 'Ochrona z otwarcia postępowania', when: 'Gdy PZU nie wystarcza, a sporne wierzytelności nie przekraczają 15%.', level: 2 },
    { name: 'Postępowanie układowe', who: 'Nadzorca sądowy', board: 'Zarząd pod nadzorem', protection: 'Ochrona z otwarcia postępowania', when: 'Sporne wierzytelności powyżej 15%.', level: 3 },
    { name: 'Sanacja', who: 'Zarządca wyznaczony przez sąd', board: 'Zarząd traci zarząd majątkiem', protection: 'Najszersza, z możliwością odstąpienia od umów', when: 'Firma wymaga głębokiej przebudowy.', level: 4 },
    { name: 'Upadłość', who: 'Syndyk', board: 'Spółka przestaje działać', protection: 'Wniosek złożony w terminie chroni zarząd', when: 'Dalsze prowadzenie spółki nie ma uzasadnienia ekonomicznego.', level: 5 },
  ],
  included: ['Praca prawnika i doradcy restrukturyzacyjnego', 'Negocjacje i korespondencja z wierzycielami', 'Pisma, wnioski i reprezentacja spółki'],
  excluded: ['Opłaty sądowe (np. 1000 zł od wniosku o zatwierdzenie układu)', 'Wynagrodzenie nadzorcy, zarządcy lub syndyka', 'Opinie biegłych i wyceny majątku', 'VAT 23%'],
};

export const strategy = {
  scope: [
    { t: 'Cele na 12 i 36 miesięcy', d: 'Spisujemy, gdzie firma ma być za rok i za trzy lata, i co musi się zmienić, żeby tam dojść.' },
    { t: 'Model biznesowy', d: 'Sprawdzamy, na czym firma zarabia, gdzie traci marżę i co zmienić w ofercie.' },
    { t: 'Kierunki rozwoju', d: 'Nowy rynek, nowy produkt, przejęcie albo inwestor. Porównujemy warianty na liczbach.' },
    { t: 'Procesy', d: 'Upraszczamy obieg dokumentów, decyzji i odpowiedzialności w zespole.' },
    { t: 'Sprzedaż i marketing', d: 'Ustalamy, do kogo firma sprzedaje, jak pozyskuje klientów i ile ją to kosztuje.' },
    { t: 'Ryzyko inwestycyjne', d: 'Przed dużą decyzją liczymy, co może pójść źle i jak to zabezpieczyć umową.' },
  ],
  session: {
    steps: ['Krótki formularz przed sesją', '90 minut z doradcą i prawnikiem', 'Pisemne podsumowanie i rekomendacje'],
    price: null as string | null, // [cena sesji do uzupełnienia]
  },
  ongoing: ['Cykliczne sesje z zarządem', 'Strategia i prawo w jednym planie', 'Wsparcie przy rundach i transakcjach'],
};

export const homeFacts = [
  { value: '1 dzień roboczy', label: 'na odpowiedź w abonamencie' },
  { value: 'Stały ryczałt', label: 'z pulą godzin znaną z góry' },
  { value: 'Jeden zespół', label: 'prawo, finanse i strategia' },
  { value: 'Warszawa + online', label: 'spotkania w biurze lub zdalnie' },
];

export const startSteps = [
  { t: 'Bezpłatna konsultacja', d: '30 minut online albo w biurze. Opowiadasz o firmie, my pytamy o etap, ryzyka i plany.' },
  { t: 'Propozycja zakresu', d: 'W ciągu dwóch dni roboczych dostajesz pakiet, pulę godzin i stawkę za nadgodziny na piśmie.' },
  { t: 'Stały zespół', d: 'Podpisujemy umowę, przejmujemy dokumenty i ustalamy rytm spotkań. Od tej pory masz jeden punkt kontaktu.' },
];

export const oneTeam = [
  { separate: 'Trzy faktury i trzy umowy', proxima: 'Jeden ryczałt i jedna umowa' },
  { separate: 'Każdy zna kawałek sprawy', proxima: 'Wszyscy widzą całą firmę' },
  { separate: 'W kryzysie tydzień na wdrożenie', proxima: 'W kryzysie działamy od pierwszego dnia' },
];

export const workflow = [
  { t: 'Poznajemy firmę', d: 'Pytamy o model, etap, cele i ryzyka. Słuchamy, zanim cokolwiek zaproponujemy.' },
  { t: 'Proponujemy zakres', d: 'Dobieramy pakiet do skali firmy. Płacisz za to, czego potrzebujesz teraz.' },
  { t: 'Spisujemy zasady', d: 'Ryczałt, pula godzin, stawka za nadgodziny i czas reakcji trafiają do umowy przed startem.' },
  { t: 'Pracujemy na bieżąco', d: 'Stały prawnik, spotkania co dwa tygodnie i odpowiedź w ciągu jednego dnia roboczego.' },
  { t: 'Rośniemy z firmą', d: 'Gdy firma się zmienia, zmieniamy pakiet. Nie musisz szukać nowej kancelarii.' },
];

export const partners = [
  { role: 'Doradca strategiczny', d: 'Cele, model biznesowy, ryzyko inwestycyjne.', name: null as string | null },
  { role: 'Licencjonowany doradca restrukturyzacyjny', d: 'Diagnoza niewypłacalności, układy z wierzycielami, funkcja nadzorcy.', name: null as string | null },
  { role: 'Biuro rachunkowe', d: 'Pełna księgowość, VAT, CIT, ZUS, sprawozdania i JPK.', name: null as string | null },
  { role: 'Doradca podatkowy', d: 'Interpretacje, kontrole, podatki przy transakcjach.', name: null as string | null },
  { role: 'Prawnik prawa pracy', d: 'Regulaminy, zwolnienia, spory, zatrudnianie cudzoziemców.', name: null as string | null },
  { role: 'Notariusz', d: 'Umowy spółek, sprzedaż udziałów, pełnomocnictwa.', name: null as string | null },
];

export const faqGroups = [
  {
    id: 'abonament',
    label: 'Abonament',
    items: [
      { q: 'Co obejmuje ryczałt miesięczny?', a: 'Stałą pulę godzin pracy prawnika w miesiącu. W zależności od pakietu: umowy, doradztwo bieżące, organy spółki i KRS, a w wyższych pakietach także księgowość, podatki i doradztwo strategiczne.' },
      { q: 'Co jeśli przekroczę pulę godzin?', a: 'Uprzedzamy Cię mailem, zanim to nastąpi. Godziny ponad pulę rozliczamy według stawki zapisanej w umowie.' },
      { q: 'Czy mogę zmienić pakiet?', a: 'Tak, raz na kwartał. Na wyższy pakiet przejdziesz od następnego miesiąca.' },
      { q: 'Czy prowadzicie sprawy sądowe?', a: 'Tak: spory z kontrahentami, mediacje i sprawy pracownicze. Opłaty sądowe rozliczamy poza ryczałtem.' },
    ],
  },
  {
    id: 'legal-rescue',
    label: 'Legal Rescue',
    items: [
      { q: 'Spółka chyba już jest niewypłacalna. Czy jest za późno?', a: 'Nie wiadomo tego bez diagnozy. Termin 30 dni liczy się od dnia, w którym wystąpiła podstawa do ogłoszenia upadłości, a ten dzień trzeba ustalić na dokumentach. Im wcześniej zaczniemy, tym więcej dróg zostaje otwartych.' },
      { q: 'Ile kosztuje restrukturyzacja poza Waszym ryczałtem?', a: 'Dochodzą opłaty sądowe i wynagrodzenie nadzorcy, zarządcy lub syndyka. W postępowaniu o zatwierdzenie układu wynagrodzenie nadzorcy ustala umowa ze spółką, a opłata od wniosku wynosi 1000 zł. Pełny kosztorys dostajesz po diagnozie.' },
      { q: 'Czy klienci abonamentowi mają pierwszeństwo?', a: 'Tak. Klienci pakietu All-in-One mają pierwszeństwo w Legal Rescue. Znamy już ich dokumenty, więc diagnozę zaczynamy od razu.' },
    ],
  },
  {
    id: 'wspolpraca',
    label: 'Współpraca',
    items: [
      { q: 'Jak wygląda pierwsze spotkanie?', a: '30 minut online albo w biurze, bezpłatnie. Opowiadasz o firmie, a my proponujemy zakres współpracy na piśmie.' },
      { q: 'Jak szybko odpowiadacie?', a: 'W abonamencie w ciągu jednego dnia roboczego. W pakiecie All-in-One i w Legal Rescue masz też priorytetowy kontakt telefoniczny.' },
      { q: 'Czy pracujecie ze startupami na etapie pomysłu?', a: 'Tak. Forma prawna, umowa spółki i rejestracja to jeden z naszych głównych obszarów. Taniej zacząć dobrze niż poprawiać umowę spółki po dwóch latach.' },
    ],
  },
];
