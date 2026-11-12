# Kontrakt treści - proximalegal.pl (nowa wersja)

Dokument dla autorów treści (ludzi i agentów). Strona jest statyczna (Astro), treści są w plikach Markdown z frontmatter YAML. Szablon strony renderuje frontmatter (skrót, FAQ, źródła, autor, stan prawny), więc w treści tego NIE powtarzasz.

Źródło prawdy o obecnej stronie: `docs/zrodlo/tresc-oryginalu.md` (zrzut 1:1 z 12.11.2026). Wzorzec stylu artykułu: sekcja `## TRASA #artykul` w tym pliku (artykuł o art. 299 KSH).

## 1. Zasady twarde (wszystkie teksty)

1. Język polski. Tylko zwykły myślnik `-` (U+002D). NIGDY półpauza (U+2013) ani pauza (U+2014). Przed oddaniem sprawdź: `grep -nP "\x{2013}|\x{2014}" plik.md` musi zwrócić pusto.
2. Liczby cyframi: 3 miesiące, 30 dni, 24 miesiące (nie "trzy miesiące").
3. Zero zmyślania o kancelarii: nie podajesz liczby klientów, lat praktyki, nazw klientów, wygranych spraw, tytułu zawodowego Kingi Adamus (nie wiadomo, czy jest adwokatem czy radcą prawnym). Autorka podpisuje się "Kinga Adamus".
4. Zero zmyślonych orzeczeń. Sygnaturę, sąd i datę orzeczenia podajesz TYLKO, jeśli sprawdzisz je w źródle (sn.pl, orzeczenia.ms.gov.pl, trybunal.gov.pl, saos.org.pl). Jeśli nie sprawdzisz, piszesz opisowo ("w orzecznictwie Sądu Najwyższego przyjmuje się, że...") i dopisujesz punkt do `verify`.
5. Przepisy cytujesz wg aktualnego tekstu jednolitego. ISAP blokuje automaty captchą, więc teksty czytaj z API Sejmu (ELI), np. `https://api.sejm.gov.pl/eli/acts/DU/1964/93` (JSON z odesłaniem do tekstów jednolitych) i `https://api.sejm.gov.pl/eli/acts/DU/<rok>/<poz>/text.pdf` albo `text.html`. W `verify` zapisz, z którego tekstu jednolitego korzystałeś (Dz.U. rok poz.).
6. Brak pewności = punkt w `verify`, nie zgadywanie. Kwoty i stawki zmienne w czasie (stopa referencyjna NBP, opłaty sądowe) podawaj tylko ze źródłem i datą albo opisowo.
7. Bez waty i kalek AI: zakaz "kluczowy", "warto zauważyć", "w dzisiejszych czasach", "nie tylko..., ale także", "kompleksowy", "holistyczny", "szyty na miarę", "w świecie biznesu". Zdania konkretne, akapity do 4 zdań.
8. Nie wstawiaj reklam usług w treść. Szablon sam dokleja ramkę z ofertą. Najwyżej 1 zdanie odsyłające do konsultacji na końcu, jeśli naturalne - najlepiej wcale.

## 2. Zasady pod SEO i AEO (cytowalność przez Google AI Overviews, ChatGPT, Perplexity)

- Odpowiedź na początku: pierwszy akapit odpowiada wprost na pytanie z tytułu (1-3 zdania).
- Fragmenty samowystarczalne: każdy akapit i każda sekcja H2 ma sens wyjęta z kontekstu (bez "jak wspomniano wyżej").
- Nagłówki H2 w formie pytań tam, gdzie to naturalne ("Kiedy zarząd odpowiada za długi spółki?").
- Definicje jednoznaczne ("Utracona korzyść to...").
- Porównania w tabelach Markdown (GFM). Procedury w listach numerowanych.
- Konkret: artykuł i paragraf, termin w dniach, próg w procentach.
- `faq`: 3-4 pytania, które ludzie realnie wpisują w Google (People Also Ask). Odpowiedź 2-4 zdania, samowystarczalna, bez odsyłania do tekstu.
- `summary` ("W skrócie"): 3-4 zdania. Każde to samodzielny fakt.
- `description`: meta description 140-160 znaków, z główną frazą, bez cudzysłowów wewnątrz.
- `keywords`: 3-6 fraz, którymi ktoś szuka tego tematu.

## 3. Baza wiedzy (`src/content/baza-wiedzy/<slug>.md`)

Rejestr: "językiem przedsiębiorcy", forma "Ty/Twoja spółka", jak we wzorcu art. 299. Długość treści 900-1400 słów. Kończ sekcją `## Co zrobić teraz` (lista numerowana 3-5 kroków), jeśli temat na to pozwala.

Callout (ramka) zapisujesz jako cytat z pogrubionym tytułem w pierwszej linii:

```md
> **Najczęstszy błąd**
> Zarząd czeka na jedną dużą płatność, która ma uratować spółkę...
```

Frontmatter (wszystkie pola wymagane, kolejność dowolna):

```yaml
---
title: "Odpowiedzialność zarządu za długi spółki. Art. 299 KSH w praktyce"   # 1:1 z kafelka na obecnej stronie
lead: "Kiedy członek zarządu płaci z własnego majątku i jak się przed tym bronić."   # 1:1 z kafelka
description: "Meta description 140-160 znaków."
category: "Kryzys i restrukturyzacja"   # jedna z: "Start i rejestracja", "Umowy i dokumenty", "Finansowanie", "Kryzys i restrukturyzacja"
readingTime: 9                         # 1:1 z kafelka
author: "Kinga Adamus"
legalState: 2026-11-12                  # stan prawny
published: 2026-11-12
updated: 2026-11-12
keywords: ["odpowiedzialność zarządu", "art. 299 ksh"]
summary:
  - "Zdanie 1."
  - "Zdanie 2."
  - "Zdanie 3."
faq:
  - q: "Pytanie?"
    a: "Odpowiedź."
sources:
  - label: "Kodeks spółek handlowych, art. 299 i art. 586"
    act: "ksh"
related: ["restrukturyzacja-czy-upadlosc", "30-dni-na-wniosek-o-upadlosc"]
verify:
  - "Co ma sprawdzić prawnik przed publikacją."
---
```

Dozwolone wartości `act` (szablon zamienia je na link do ISAP): `kc` (Kodeks cywilny), `kpc` (Kodeks postępowania cywilnego), `ksh` (Kodeks spółek handlowych), `pu` (Prawo upadłościowe), `pr` (Prawo restrukturyzacyjne), `kp` (Kodeks pracy), `kk` (Kodeks karny), `uptp` (ustawa z 8.03.2013 o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach handlowych), `krs` (ustawa o Krajowym Rejestrze Sądowym), `pa` (ustawa o prawie autorskim i prawach pokrewnych), `uznk` (ustawa o zwalczaniu nieuczciwej konkurencji), `sus` (ustawa o systemie ubezpieczeń społecznych), `vat` (ustawa o VAT), `cit` (ustawa o CIT), `pit` (ustawa o PIT), `rodo` (RODO), `usude` (ustawa o świadczeniu usług drogą elektroniczną), `pke` (Prawo komunikacji elektronicznej). Inny akt: zamiast `act` podaj `url` (pełny adres) i pełną nazwę w `label`.

Slugi Bazy wiedzy (11 artykułów, `related` tylko z tej listy):

| slug | tytuł (1:1) | lead (1:1) | kategoria | min |
|---|---|---|---|---|
| odpowiedzialnosc-zarzadu-art-299-ksh | Odpowiedzialność zarządu za długi spółki. Art. 299 KSH w praktyce | Kiedy członek zarządu płaci z własnego majątku i jak się przed tym bronić. | Kryzys i restrukturyzacja | 9 |
| restrukturyzacja-czy-upadlosc | Restrukturyzacja czy upadłość? Jak wybrać, póki jest wybór | Cztery postępowania restrukturyzacyjne i upadłość porównane na jednej stronie. | Kryzys i restrukturyzacja | 8 |
| 30-dni-na-wniosek-o-upadlosc | 30 dni na wniosek o upadłość. Od kiedy liczyć termin | Dwie przesłanki niewypłacalności i domniemania, które przesuwają ciężar dowodu. | Kryzys i restrukturyzacja | 6 |
| jak-zalozyc-spolke-z-oo | Jak założyć spółkę z o.o. w 2026 roku, krok po kroku | S24 czy notariusz, PKD, NIP, ZUS i VAT przed pierwszą fakturą. | Start i rejestracja | 7 |
| spolka-z-oo-czy-psa | Spółka z o.o. czy prosta spółka akcyjna dla startupu | Różnice w kapitale, emisji udziałów i rozliczeniu z inwestorem. | Start i rejestracja | 6 |
| kiedy-przeksztalcic-jdg-w-spolke | Kiedy przekształcić JDG w spółkę. Pięć sygnałów | Limit VAT, pierwsi pracownicy, kontrakty B2B z dużymi klientami. | Start i rejestracja | 5 |
| term-sheet-bez-tajemnic | Term sheet bez tajemnic. Zapisy, które kosztują founderów najwięcej | Liquidation preference, anti-dilution i vesting na przykładach. | Finansowanie | 8 |
| due-diligence-od-strony-sprzedajacego | Due diligence od strony sprzedającego | Co przygotować, zanim kupujący zacznie zadawać pytania. | Finansowanie | 6 |
| bledy-w-umowach-b2b | Pięć błędów w umowach B2B, które drogo kosztują | Kary umowne, brak limitu odpowiedzialności, wadliwe klauzule IP. | Umowy i dokumenty | 6 |
| umowa-o-prace-b2b-czy-zlecenie | Umowa o pracę, B2B czy zlecenie. Co ryzykujesz | Kiedy ZUS może przekwalifikować umowę i co z tego wynika. | Umowy i dokumenty | 7 |
| nda-kiedy-chroni | NDA: kiedy chroni, a kiedy jest tylko papierem | Zakres, czas trwania, kary umowne i jurysdykcja. | Umowy i dokumenty | 5 |

`readingTime` trzymaj zgodny z tabelą (to wartość z obecnej strony), długość tekstu dopasuj do niego (ok. 180-200 słów na minutę).

## 4. Opracowania prawne (`src/content/legal/<slug>.md`), sekcja /legal

Rejestr: język prawniczy, bezosobowy, precyzyjny, jak komentarz lub opracowanie dla prawnika i świadomego zarządu. Terminy łacińskie tam, gdzie są w obiegu (damnum emergens, lucrum cessans, condicio sine qua non). Pełne przywołania przepisów ("art. 361 § 2 Kodeksu cywilnego", dalej "k.c."). Szablon numeruje akapity na marginesie (numery brzegowe), więc pisz w akapitach, nie w punktorach bez potrzeby.

Struktura: rozdziały H2 numerowane rzymsko (`## I. Pojęcie szkody i jej postacie`), H3 dla podrozdziałów (`### 1. Szkoda rzeczywista`). Na końcu `## [N]. Wnioski dla praktyki` (zwięźle, mogą być punkty). Długość: 1600-2600 słów, opracowanie o utraconej korzyści 2500-3500 słów.

Frontmatter:

```yaml
---
title: "Utracona korzyść (lucrum cessans) w obrocie gospodarczym"
shortTitle: "Utracona korzyść"
description: "Meta description 140-160 znaków."
thesis: "Teza: 2-4 zdania w języku prawniczym, istota opracowania."
legalBasis: ["art. 361 § 2 k.c.", "art. 471 k.c."]   # tagi, krótko
keywords: ["utracona korzyść", "lucrum cessans"]
author: "Kinga Adamus"
legalState: 2026-11-12
published: 2026-11-12
updated: 2026-11-12
readingTime: 14
summary:
  - "3-5 zdań, prawniczo, ale zrozumiale dla członka zarządu."
faq:
  - q: "Pytanie?"
    a: "Odpowiedź 2-4 zdania."
sources:
  - label: "Kodeks cywilny, art. 361, 471, 473, 484"
    act: "kc"
related: ["kara-umowna-a-odszkodowanie"]          # slugi z /legal
relatedBw: ["bledy-w-umowach-b2b"]                 # slugi z Bazy wiedzy (opcjonalnie)
verify:
  - "..."
---
```

Slugi /legal:

| slug | temat |
|---|---|
| utracona-korzysc | Utracona korzyść (lucrum cessans): pojęcie, przesłanki, dowodzenie (art. 6 k.c., art. 322 k.p.c.), związek przyczynowy (art. 361 § 1), odpowiedzialność kontraktowa i deliktowa, compensatio lucri cum damno, przyczynienie się, umowne wyłączenie (art. 473 § 2), relacja do kary umownej, przedawnienie, odsetki, utracona korzyść spółki a wspólnika, praktyka sporów B2B. Opracowanie flagowe. |
| kara-umowna-a-odszkodowanie | Kara umowna a odszkodowanie (art. 483-485 k.c.): funkcje kary, odszkodowanie przenoszące wysokość kary, miarkowanie, kara za zwłokę a odstąpienie, kara a szkoda w postaci utraconych korzyści. |
| umowne-ograniczenie-odpowiedzialnosci | Umowne ograniczenie i wyłączenie odpowiedzialności (art. 473 k.c.): limity kwotowe, wyłączenie lucrum cessans, wina umyślna, rażące niedbalstwo, klauzule w umowach B2B, wzorce umowne (art. 384 i n. k.c.). |
| przedawnienie-roszczen-odszkodowawczych | Przedawnienie roszczeń odszkodowawczych w obrocie profesjonalnym (art. 117-125 k.c., art. 442(1) k.c.): termin 3 lat dla roszczeń związanych z działalnością gospodarczą, koniec roku kalendarzowego, przerwanie biegu, zawezwanie do próby ugodowej, zrzeczenie się zarzutu. |
| odsetki-i-rekompensata-w-transakcjach-handlowych | Odsetki i rekompensata w transakcjach handlowych (ustawa z 8.03.2013): terminy zapłaty, odsetki za opóźnienie w transakcjach handlowych, rekompensata za koszty odzyskiwania należności, zwrot kosztów ponad rekompensatę, relacja do odszkodowania z art. 481 § 3 k.c. |

## 5. Dokumenty prawne (`src/content/dokumenty/<slug>.md`), też w /legal

Frontmatter: `title`, `description`, `updated`, `order` (liczba), `verify` (lista). Treść w paragrafach (`## § 1. Postanowienia ogólne`), ustępy numerowane (`1.`, `2.`). Dane nieznane wpisujesz jako `[DO UZUPEŁNIENIA: pełna nazwa kancelarii]`. Slugi: `polityka-prywatnosci`, `polityka-cookies`, `regulamin`, `nota-prawna`.

Fakty techniczne strony (prawdziwe na dzień wdrożenia, opieraj się tylko na nich):
- Strona statyczna, hosting Netlify, Inc. (USA). Serwer zapisuje standardowe logi (adres IP, data i godzina, adres URL, user agent) do celów bezpieczeństwa i diagnostyki.
- Formularz kontaktowy obsługuje Netlify Forms. Pola: imię i nazwisko, e-mail lub telefon, treść wiadomości, zaznaczenie "Sprawa pilna: spółka traci płynność". Zgłoszenia trafiają na skrzynkę kontakt@proximalegal.pl. Dostawca poczty: [DO UZUPEŁNIENIA].
- Strona NIE używa plików cookies ani localStorage, nie ma narzędzi analitycznych, pikseli reklamowych, osadzonych map, filmów ani wtyczek mediów społecznościowych. Fonty są serwowane z serwera strony (bez Google Fonts).
- Strona udostępnia kanał RSS z artykułami.
- Administrator: Proxima Legal, [DO UZUPEŁNIENIA: forma prawna, adres siedziby, NIP, REGON, KRS]. Kontakt: kontakt@proximalegal.pl. Biuro w Warszawie, adres [DO UZUPEŁNIENIA].
- Tajemnica zawodowa: [adwokacka albo radcowska: DO POTWIERDZENIA].
- Umowa o świadczenie pomocy prawnej nie jest zawierana przez stronę; zawiera się ją odrębnie na piśmie lub w formie dokumentowej po konsultacji.
