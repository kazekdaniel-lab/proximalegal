import start from '../assets/img/specjalizacja-start.jpg';
import finansowanie from '../assets/img/specjalizacja-finansowanie.jpg';
import obsluga from '../assets/img/specjalizacja-obsluga.jpg';
import kryzys from '../assets/img/specjalizacja-kryzys.jpg';

export type Specialization = {
  slug: string;
  no: string;
  stage: string;
  title: string;
  short: string;
  hero: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  bullets: string[];
  services: { t: string; d: string }[];
  situations: string[];
  packages: { label: string; href: string }[];
  articles: string[];
  image: ImageMetadata;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  tone?: 'rescue';
};

export const specializations: Specialization[] = [
  {
    slug: 'start-i-rejestracja',
    no: '01',
    stage: 'Start',
    title: 'Start i rejestracja',
    short: 'Spółka założona tak, żeby za dwa lata nie trzeba było jej poprawiać.',
    hero: 'Zakładasz spółkę raz. Zrób to dobrze.',
    lead: 'Pomagamy wybrać formę prawną, piszemy umowę spółki pod Twoich wspólników i plany, a potem rejestrujemy wszystko w KRS, US i ZUS. Ty w tym czasie szukasz pierwszych klientów.',
    metaTitle: 'Założenie i rejestracja spółki z o.o. i PSA, Warszawa',
    metaDescription: 'Wybór formy prawnej, umowa spółki pod wspólników, rejestracja w KRS przez S24 lub u notariusza i przekształcenie JDG w spółkę. Kancelaria dla spółek, Warszawa.',
    bullets: ['Wybór formy: sp. z o.o., PSA, JDG', 'Umowa spółki pod wspólników', 'Rejestracja S24 lub u notariusza', 'Przekształcenie JDG w spółkę'],
    services: [
      { t: 'Wybór formy prawnej', d: 'Porównujemy sp. z o.o., prostą spółkę akcyjną i JDG pod kątem odpowiedzialności, podatków i planów na inwestora. Decyzję podejmujesz przed podpisaniem czegokolwiek.' },
      { t: 'Umowa spółki', d: 'Piszemy zapisy o podziale zysku, wyjściu wspólnika, prawie pierwszeństwa i zakazie konkurencji. Wzór z S24 tych spraw nie rozwiązuje.' },
      { t: 'Rejestracja', d: 'Wybieramy tryb S24 albo notarialny i prowadzimy formalności: KRS, CRBR, NIP, VAT, ZUS. Mówimy Ci tylko, co i kiedy podpisać.' },
      { t: 'PKD i opodatkowanie', d: 'Dobieramy kody PKD i formę opodatkowania z doradcą podatkowym, zanim spółka wystawi pierwszą fakturę.' },
      { t: 'Przekształcenie JDG', d: 'Prowadzimy przekształcenie jednoosobowej działalności w spółkę: plan przekształcenia, badanie biegłego, wpis do KRS.' },
    ],
    situations: [
      'Masz pomysł i wspólnika, ale jeszcze nie spółkę.',
      'Twoja JDG przekroczyła skalę, w której odpowiadasz za wszystko własnym majątkiem.',
      'Rozmawiasz z pierwszym inwestorem i potrzebujesz struktury, którą zaakceptuje.',
    ],
    packages: [
      { label: 'Legal Starter', href: '/abonament-prawny/#legal-starter' },
      { label: 'All-in-One', href: '/abonament-prawny/#all-in-one' },
    ],
    articles: ['jak-zalozyc-spolke-z-oo', 'spolka-z-oo-czy-psa', 'kiedy-przeksztalcic-jdg-w-spolke'],
    image: start,
    imageAlt: 'Dokumenty rejestrowe spółki z pieczęcią i piórem na jasnym blacie',
    primaryCta: { label: 'Bezpłatna konsultacja 30 min', href: '/kontakt/' },
  },
  {
    slug: 'finansowanie-i-ma',
    no: '02',
    stage: 'Wzrost',
    title: 'Finansowanie i M&A',
    short: 'Rundy, wejście inwestora i sprzedaż udziałów. Po Twojej stronie stołu.',
    hero: 'Inwestor ma swoich prawników. Ty też powinieneś.',
    lead: 'Prowadzimy rundy finansowania, due diligence i transakcje M&A. Czytamy term sheet pod kątem tego, co oddajesz, i negocjujemy umowę wspólników, z którą da się żyć przez kolejne lata.',
    metaTitle: 'Rundy finansowania, term sheet i M&A',
    metaDescription: 'Rundy pre-seed, seed i Series A, analiza term sheetu, umowa wspólników (SHA), due diligence i sprzedaż udziałów. Prawnik po stronie foundera. Warszawa i online.',
    bullets: ['Rundy pre-seed, seed, Series A', 'Term sheet i umowa inwestycyjna', 'Due diligence', 'Sprzedaż udziałów i exit'],
    services: [
      { t: 'Rundy finansowania', d: 'Przygotowujemy spółkę i dokumenty na pre-seed, seed i Series A. Porządkujemy cap table i umowy z kluczowymi osobami, zanim zrobi to inwestor.' },
      { t: 'Term sheet i SHA', d: 'Analizujemy liquidation preference, anti-dilution, vesting i prawa veta. Negocjujemy umowę wspólników zapis po zapisie.' },
      { t: 'Due diligence', d: 'Robimy audyt prawny spółki przed transakcją albo przeprowadzamy Cię przez badanie zlecone przez kupującego.' },
      { t: 'Joint venture i partnerstwa', d: 'Piszemy umowy o współpracy, w których wiadomo, kto wnosi co, kto decyduje i jak się rozstać.' },
      { t: 'Sprzedaż i exit', d: 'Prowadzimy sprzedaż udziałów, wyjście inwestora i sukcesję właścicielską, razem z doradcą podatkowym.' },
    ],
    situations: [
      'Dostałeś term sheet i masz tydzień na odpowiedź.',
      'Kupujący zapowiedział due diligence.',
      'Wspólnicy chcą się rozstać, a umowa spółki milczy, jak to zrobić.',
    ],
    packages: [
      { label: 'Legal + Strategia', href: '/abonament-prawny/#legal-strategia' },
      { label: 'All-in-One', href: '/abonament-prawny/#all-in-one' },
    ],
    articles: ['term-sheet-bez-tajemnic', 'spolka-z-oo-czy-psa', 'due-diligence-od-strony-sprzedajacego'],
    image: finansowanie,
    imageAlt: 'Umowa inwestycyjna na stole konferencyjnym obok laptopa i szklanki wody',
    primaryCta: { label: 'Bezpłatna konsultacja 30 min', href: '/kontakt/' },
  },
  {
    slug: 'biezaca-obsluga',
    no: '03',
    stage: 'Codzienna praca',
    title: 'Bieżąca obsługa',
    short: 'Umowy, pracownicy, uchwały i KRS. Stały prawnik, który zna Twoją firmę.',
    hero: 'Twój prawnik zna już kontekst. Nie tłumaczysz wszystkiego od nowa.',
    lead: 'W abonamencie masz stałego prawnika, cykliczne spotkania i odpowiedź w ciągu jednego dnia roboczego. Umowy B2B, kadry, organy spółki i KRS prowadzimy na bieżąco.',
    metaTitle: 'Bieżąca obsługa prawna spółki w abonamencie',
    metaDescription: 'Stały prawnik dla spółki: umowy B2B, umowy z pracownikami, uchwały, zgromadzenia, zgłoszenia do KRS i CRBR, spory i windykacja. Odpowiedź w 1 dzień roboczy.',
    bullets: ['Umowy B2B i negocjacje', 'Umowy z pracownikami i współpracownikami', 'Uchwały, zgromadzenia, KRS', 'Spotkania co 2 tygodnie'],
    services: [
      { t: 'Umowy B2B', d: 'Piszemy, sprawdzamy i negocjujemy umowy z klientami i dostawcami: limity odpowiedzialności, kary umowne, prawa autorskie, RODO.' },
      { t: 'Zatrudnienie', d: 'Umowy o pracę, B2B, zlecenia, regulaminy i zakazy konkurencji. Z partnerem od prawa pracy przy sporach i zwolnieniach.' },
      { t: 'Organy spółki i KRS', d: 'Przygotowujemy uchwały, protokoły zgromadzeń, sprawozdania i zgłoszenia zmian do KRS i CRBR.' },
      { t: 'Cykliczne spotkania', d: 'Co dwa tygodnie przeglądamy, co się zmieniło w firmie i co z tego wynika prawnie. Problemy wychodzą wcześniej.' },
      { t: 'Spory i windykacja', d: 'Wezwania do zapłaty, mediacje i sprawy sądowe z kontrahentami. Koszty sądowe rozliczamy poza ryczałtem.' },
    ],
    situations: [
      'Podpisujesz kilka umów miesięcznie i nikt ich nie czyta.',
      'Zatrudniasz pierwsze osoby i nie wiesz, którą formę umowy wybrać.',
      'Do KRS trzeba zgłosić zmianę zarządu, a termin mija.',
    ],
    packages: [{ label: 'Wszystkie pakiety', href: '/abonament-prawny/' }],
    articles: ['bledy-w-umowach-b2b', 'umowa-o-prace-b2b-czy-zlecenie', 'nda-kiedy-chroni'],
    image: obsluga,
    imageAlt: 'Biurko z segregatorami, kalendarzem i filiżanką kawy w jasnym biurze',
    primaryCta: { label: 'Bezpłatna konsultacja 30 min', href: '/kontakt/' },
  },
  {
    slug: 'kryzys-i-restrukturyzacja',
    no: '04',
    stage: 'Trudne decyzje',
    title: 'Kryzys i restrukturyzacja',
    short: 'Utrata płynności, wierzyciele, odpowiedzialność zarządu. Plan na czas, którego jest mało.',
    hero: 'Trudny moment w spółce wymaga szybkiej diagnozy.',
    lead: 'Łączymy prawnika i licencjonowanego doradcę restrukturyzacyjnego. Ustalamy, czy spółka jest niewypłacalna, co grozi zarządowi i która droga ma sens: ugoda, restrukturyzacja albo uporządkowana upadłość.',
    metaTitle: 'Restrukturyzacja i upadłość spółki',
    metaDescription: 'Diagnoza niewypłacalności, ochrona zarządu przed art. 299 i 586 KSH, negocjacje z wierzycielami, postępowanie o zatwierdzenie układu, sanacja i upadłość.',
    bullets: ['Diagnoza niewypłacalności', 'Odpowiedzialność zarządu', 'Restrukturyzacja i układ', 'Upadłość i likwidacja'],
    services: [
      { t: 'Diagnoza', d: 'Badamy płynność, zobowiązania i bilans. Ustalamy, czy i od kiedy spółka jest niewypłacalna w rozumieniu Prawa upadłościowego.' },
      { t: 'Ochrona zarządu', d: 'Sprawdzamy ryzyko z art. 299 i 586 KSH i ustalamy, co zarząd musi zrobić i do kiedy, żeby nie odpowiadać prywatnym majątkiem.' },
      { t: 'Negocjacje z wierzycielami', d: 'Rozmawiamy z bankami, leasingodawcami i dostawcami o rozłożeniu długu i wstrzymaniu egzekucji.' },
      { t: 'Postępowania restrukturyzacyjne', d: 'Przygotowujemy i prowadzimy postępowanie o zatwierdzenie układu i pozostałe tryby z doradcą restrukturyzacyjnym.' },
      { t: 'Upadłość i likwidacja', d: 'Gdy dalsze prowadzenie spółki nie ma sensu ekonomicznego, przygotowujemy wniosek o upadłość albo likwidację i reprezentujemy spółkę w postępowaniu.' },
    ],
    situations: [
      'Spółka nie płaci części faktur od ponad trzech miesięcy.',
      'Bank wypowiedział kredyt albo zapowiada to.',
      'Komornik zajął rachunek i stanęły płatności.',
    ],
    packages: [
      { label: 'Legal Rescue', href: '/legal-rescue/' },
      { label: 'All-in-One (konsultacje)', href: '/abonament-prawny/#all-in-one' },
    ],
    articles: ['odpowiedzialnosc-zarzadu-art-299-ksh', 'restrukturyzacja-czy-upadlosc', '30-dni-na-wniosek-o-upadlosc'],
    image: kryzys,
    imageAlt: 'Wydruk wykresu spadku, kalkulator i okulary na ciemnym biurku',
    primaryCta: { label: 'Zobacz Legal Rescue', href: '/legal-rescue/' },
    tone: 'rescue',
  },
];

export const specBySlug = Object.fromEntries(specializations.map((s) => [s.slug, s]));
