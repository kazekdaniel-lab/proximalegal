# proximalegal.pl - nowa strona

Statyczna strona kancelarii Proxima Legal zbudowana od zera w Astro 6. Zastępuje prototyp SPA (jedna strona z przyciskami zamiast linków, bez adresów podstron, bez danych strukturalnych). Treść obecnej strony przeniesiona 1:1, plus nowe sekcje: pełna Baza wiedzy (11 artykułów) i /legal (opracowania prawne w języku prawniczym oraz dokumenty).

## Komendy

```bash
npm install
npm run dev          # podgląd roboczy, http://localhost:4321
npm run build        # build do dist/ + automatyczna kontrola jakości (scripts/check-dist.mjs)
npm run preview      # podgląd zbudowanej strony
npm run og           # przegenerowanie obrazów OG i ikon (po zmianie haseł lub kolorów)
npm run check:dashes # szuka półpauz i pauz w źródłach
node scripts/verify-report.mjs  # odświeża docs/DO-WERYFIKACJI.md
```

`npm run build` kończy się błędem, jeśli którakolwiek strona nie ma title, description, canonical, jednego H1, ma martwy link wewnętrzny, atrybut `style=` (łamie CSP), niepoprawny JSON-LD albo półpauzę/pauzę w treści.

## Struktura adresów

| Adres | Treść |
|---|---|
| `/` | strona główna |
| `/abonament-prawny/` | 4 pakiety, porównanie, zasady puli godzin |
| `/legal-rescue/` | spółka w kryzysie, 30 dni, 6 dróg wyjścia, cena |
| `/doradztwo-strategiczne/` | sesja 90 min i stała współpraca |
| `/specjalizacje/` + 4 podstrony | start, finansowanie i M&A, bieżąca obsługa, kryzys |
| `/o-nas/` | Kinga Adamus, partnerzy, sposób pracy, biuro |
| `/baza-wiedzy/` + 11 artykułów | język przedsiębiorcy, filtr kategorii |
| `/legal/` + 5 opracowań | język prawniczy: utracona korzyść, kara umowna, ograniczenie odpowiedzialności, przedawnienie, odsetki |
| `/legal/polityka-prywatnosci/`, `/legal/polityka-cookies/`, `/legal/regulamin/`, `/legal/nota-prawna/` | dokumenty |
| `/faq/`, `/kontakt/`, `/kontakt/dziekujemy/` | |
| `/rss.xml`, `/llms.txt`, `/sitemap-index.xml`, `/robots.txt` | dla robotów |

Stare adresy prototypu (`/#abonament`, `/#rescue`, `/#faq` itd.) przekierowuje skrypt strony na nowe podstrony, więc linki rozesłane wcześniej dalej działają.

## Gdzie co edytować

- **Dane kancelarii: tylko `src/data/kancelaria.json`.** Jedno źródło dla stron, stopki, kontaktu, danych dla Google i dokumentów prawnych. Pole `null` jest na stronach ukrywane, a w dokumentach pokazuje znacznik [DO UZUPEŁNIENIA]. Wartości specjalne: `"krs": "nie dotyczy"` (firma w CEIDG), `"inspektorOchronyDanych": "nie"` albo adres e-mail, `"podstawaTransferuPoczty": "EOG"` albo podstawa transferu. Wpisanie `"tytulZawodowy": "adwokat"` albo `"radca prawny"` samo przełącza w dokumentach rodzaj tajemnicy, samorząd, ustawę i zasady etyki. Po zmianie: `npm run build`.
- Oferta, pakiety, Legal Rescue, FAQ, partnerzy: `src/data/offer.ts`.
- Specjalizacje: `src/data/specializations.ts`.
- Artykuły: `src/content/baza-wiedzy/*.md`, opracowania: `src/content/legal/*.md`, dokumenty: `src/content/dokumenty/*.md`. Zasady pisania i pola frontmattera: `docs/KONTRAKT-TRESCI.md`.
- Wygląd: `DESIGN.md` (system i zasady), `src/styles/global.css` (tokeny i komponenty).

## Przed publikacją (blokuje)

1. **Weryfikacja merytoryczna** wszystkich tekstów przez prawnika: lista punktów w `docs/DO-WERYFIKACJI.md`. Teksty oparte na aktualnych tekstach jednolitych z API Sejmu, orzeczenia podane tylko po sprawdzeniu, ale odpowiedzialność za treść porady jest po stronie kancelarii.
2. **Dane w `src/data/kancelaria.json`** (12 pól, lista w `docs/DO-WERYFIKACJI.md`): tytuł zawodowy Kingi Adamus, forma prawna i pełna nazwa, NIP, REGON, KRS, adres, telefon, numer wpisu, dostawca poczty, IOD. Rejestry publiczne nie zwracają jeszcze wpisu dla "Proxima Legal".
3. **Znaczniki `[DO UZUPEŁNIENIA]`** w dokumentach znikają same po uzupełnieniu `kancelaria.json`. Strona nie powinna wyjść na produkcję, dopóki są widoczne.
4. **Zdjęcia**: portret licencjonowanego doradcy restrukturyzacyjnego (ten sam kadr i światło co portret na `/legal-rescue/`, podpięcie w `src/pages/legal-rescue.astro`, zmienna `advisorPhoto`), opcjonalnie zdjęcia partnerów. Jeśli obecne portrety Kingi Adamus są generowane, przed publikacją zamienić je na prawdziwą sesję: na stronie kancelarii zdjęcie przedstawia konkretną osobę.
5. **Cena sesji strategicznej**: `strategy.session.price` w `src/data/offer.ts` (dziś "Wycena po konsultacji").

## Hosting: Netlify

`netlify.toml` jest gotowy: build, nagłówki bezpieczeństwa (HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy), cache, przekierowania. Formularz kontaktowy działa przez **Netlify Forms** (bez backendu): po pierwszym wdrożeniu w panelu Netlify włącz powiadomienia e-mail na `kontakt@proximalegal.pl` (Forms, Form notifications). CSP jest w `<meta>` każdej strony, Astro liczy hashe skryptów. Strona nie ustawia cookies i nie ładuje nic z zewnętrznych serwerów (fonty serwowane lokalnie).

## SEO i widoczność w AI: co jest wdrożone

- Każda podstrona ma własny adres, title, description, canonical, Open Graph i Twitter Card, obraz OG 1200x630.
- Dane strukturalne JSON-LD w jednym grafie: `LegalService` + `Organization`, `Person` (Kinga Adamus), `WebSite`, `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`, `BreadcrumbList`, `Service` z ofertą i ceną Legal Rescue, `OfferCatalog` pakietów, `Article` z `citation` do aktów prawnych (`Legislation`), `FAQPage`, `ItemList`. Wszystko zgodne z treścią widoczną na stronie.
- Treści pisane pod cytowanie: odpowiedź w pierwszym akapicie, sekcja "W skrócie", nagłówki-pytania, tabele porównawcze, FAQ pod każdym tekstem, stan prawny i data aktualizacji, autor z biogramem, podstawa prawna z linkami do ISAP. Opracowania /legal mają tezę, numery brzegowe i gotowy przypis "Jak cytować".
- `robots.txt` wpuszcza Googlebota, Bingbota oraz crawlery ChatGPT, Perplexity i Claude. W pliku jest instrukcja, jak wyłączyć tylko trening modeli.
- `sitemap-index.xml` z priorytetami, `rss.xml` z artykułami i opracowaniami, `llms.txt` (tani dodatek; Google go nie używa).
- Wydajność: statyczny HTML, jeden mały skrypt, obrazy AVIF/WebP w kilku rozmiarach, fonty lokalnie z podzbiorem latin-ext.

## Po publikacji (rekomendacja, nie zrobione)

1. Google Search Console i Bing Webmaster Tools: dodać domenę, zgłosić `https://proximalegal.pl/sitemap-index.xml`.
2. Profil firmy w Google (Warszawa), gdy będzie adres biura.
3. Pomiar AI: raz w miesiącu 20 zapytań w ChatGPT, Perplexity, Gemini i AI Mode (np. "utracona korzyść art. 361 kc", "ile ma zarząd na wniosek o upadłość") i zapis, czy strona jest cytowana. Logi Netlify filtrować po OAI-SearchBot, PerplexityBot, Googlebot.
4. Analityka: jeśli kancelaria jej chce, dopiero z banerem zgody i aktualizacją `/legal/polityka-cookies/`.
