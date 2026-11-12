# DESIGN.md - Proxima Legal

System wizualny strony proximalegal.pl. Źródło prawdy dla ludzi i agentów AI, którzy będą zmieniać stronę. Tokeny w kodzie: `src/styles/tokens.css`. Przy każdej zmianie wyglądu najpierw aktualizujesz ten plik, potem kod.

## 1. Teza

Kancelaria dla spółek, która prowadzi firmę przez kolejne etapy życia: start, wzrost, codzienną pracę i kryzys. Projekt pokazuje ten przebieg dosłownie: **oś życia spółki** (linijka z podziałką) to element sygnaturowy. Ostatni odcinek osi zamienia się w 30 kratek, bo w kryzysie zarząd ma 30 dni (art. 21 Prawa upadłościowego). Wszystko inne jest ciche: typografia, siatka, porządek akt.

Odbiorca: założyciel, zarząd, CFO. W kryzysie: członek zarządu pod presją terminu. Zadanie strony: umówić bezpłatną konsultację 30 min albo pilną rozmowę w Legal Rescue, a po drodze udowodnić kompetencję treścią (Baza wiedzy, opracowania /legal).

## 2. Kolor (paleta zachowana z poprzedniej wersji, nadane znaczenia)

| Token | Hex | Rola |
|---|---|---|
| `--ink` | #0D1416 | tło ciemne (hero, pasy kluczowe, stopka) |
| `--ink-teal` | #0A2227 | panele na ciemnym tle, oś |
| `--ink-raised` | #161E20 | podniesione powierzchnie na ciemnym |
| `--rule-dark` | #2A3335 | linie na ciemnym |
| `--paper` | #F2F6F5 | tło jasne, powierzchnie do czytania |
| `--paper-raised` | #FBFDFC | karty i tabele na jasnym |
| `--rule` | #D5E0DE | linie na jasnym |
| `--text` | #0D1416 | tekst na jasnym |
| `--text-muted` | #4E5D60 | tekst drugorzędny na jasnym (kontrast 5,9:1) |
| `--on-dark` | #F2F6F5 | tekst na ciemnym |
| `--on-dark-muted` | #A1B0B3 | tekst drugorzędny na ciemnym (kontrast 8:1) |
| `--mint` | #5FD0C1 | akcent na ciemnym: stała opieka, abonament, przyciski główne |
| `--teal` | #0E5A52 | akcent na jasnym: linki, przyciski (kontrast 7,4:1) |
| `--peach` | #F2B48A | WYŁĄCZNIE pilność: Legal Rescue, termin 30 dni |
| `--peach-ink` | #2E1F15 | ciemne tło trybu kryzysowego |
| `--rust` | #9A4A1C | pilność na jasnym tle (kontrast 5,4:1) |

Zasada: kolor niesie informację. Mięta = stała opieka. Brzoskwinia = kryzys i czas. Nie używasz brzoskwini do dekoracji ani do niczego, co nie dotyczy Legal Rescue.

Rytm: ciemne hero, jasne sekcje treści, ciemny pas na kluczowe zdanie lub CTA. Długie teksty (Baza wiedzy, /legal, dokumenty) zawsze na `--paper`.

## 3. Typografia

- **Source Serif 4** (zmienny, oś opsz): nagłówki i tekst do czytania (artykuły, opracowania, dokumenty). Nagłówki w całości szeryfowe, bez wyróżniania pojedynczego słowa kursywą lub kolorem.
- **Instrument Sans** (zmienny, oś wdth): interfejs, nawigacja, etykiety, tekst usługowy na stronach ofertowych.
- Fonty serwowane z własnego serwera (RODO: bez Google Fonts), `font-display: swap`, podzbiory latin i latin-ext.
- Skala (rem): 0.8125 / 0.875 / 1 / 1.125 / 1.25 / 1.5 / 1.875 / 2.375 / 3 / 4 / 5.25. Nagłówki display przez `clamp()`.
- Długość linii: tekst ciągły 62-72 znaki (serif), interfejs do 80.
- Etykiety zdaniowe, bez wersalików i rozstrzeleń. Cyfry tabelaryczne w tabelach i liczbach.

## 4. Siatka i układ

- Kontener 1240 px, marginesy boczne `clamp(16px, 4vw, 48px)`. Siatka 12 kolumn.
- Tekst wyrównany do lewej. Hero asymetryczny (nagłówek 8 kolumn, lead 5 kolumn).
- Odstępy sekcji: `--space-section: clamp(64px, 10vw, 136px)`.
- Promienie według hierarchii: 0 dla pasów pełnej szerokości, 4 px kontrolki, 10 px panele, 999 px tylko pigułki filtrów. Nie jeden promień na wszystko.
- Cienie: brak miękkich szarych cieni pod kartami. Głębia przez kolor powierzchni i linie 1 px.

## 5. Elementy sygnaturowe

1. **Oś życia spółki** (strona główna, specjalizacje): linijka z podziałką, 4 odcinki = 4 etapy (sekwencja, więc numeracja 01-04 jest uzasadniona). Ostatni odcinek to 30 kratek w kolorze brzoskwini. Animacja jednorazowa przy wejściu: podziałka rysuje się od lewej, kratki wypełniają się kolejno. Każdy odcinek to link.
2. **Siatka 30 dni** (Legal Rescue): 30 kratek podzielonych na etapy Diagnoza (1-7), Decyzja (7-14), Wdrożenie (do 30).
3. **Teczki akt** (dwie drogi wejścia): panele z zakładką jak teczka akt, z etykietą sytuacji.
4. **Numery brzegowe** (opracowania /legal): akapity numerowane na marginesie jak w komentarzu prawniczym. Teza w ramce, podstawa prawna jako lista przepisów z linkami do ISAP.
5. **Paragrafy** (dokumenty): `§ 1.` jako struktura polityki, regulaminu i noty.

## 6. Ruch

- Jedna zaplanowana sekwencja na stronę (oś życia na głównej, siatka 30 dni na Legal Rescue, diagram zespołu przy wejściu w widok).
- Ruch w odpowiedzi na działanie: rozwijanie FAQ, menu, filtr bazy wiedzy.
- Zakaz: fade-in-up na każdej sekcji, liczniki, paralaksy, poświaty.
- `prefers-reduced-motion: reduce` = stan końcowy bez animacji.

## 7. Komponenty (nazwy w `src/components/`)

`Header` (nawigacja z panelami, link pilny do Legal Rescue), `Footer`, `Seo` (meta, OG, JSON-LD), `Breadcrumbs`, `LifeAxis` (oś życia), `RescueGrid` (30 dni), `CaseFolder` (teczka), `CtaBand`, `ArticleCard`, `TeamDiagram`, `Picture` przez `astro:assets`.

## 8. Czego nie robimy (rozpoznawalne wzorce stron generowanych)

- jedno słowo w nagłówku kursywą lub innym kolorem,
- wersaliki z rozstrzeleniem nad każdym nagłówkiem,
- trzy identyczne karty z ikonami i tym samym cieniem,
- poświaty, gradientowe mgły, cząsteczki w tle,
- strzałka `→` doklejana do każdego linku,
- metadane sklejane kropkami `A · B · C` (zamiast tego lista opisowa),
- monospace do etykiet,
- półpauza i pauza w tekstach (tylko `-`).

## 9. Dostępność (minimum)

Kontrast AA (tekst 4,5:1), widoczny fokus (2 px `--mint` lub `--teal` z odstępem), link "Przejdź do treści", nawigacja klawiaturą, FAQ na `<details>`, formularz z etykietami i komunikatami błędów, obrazy z opisem `alt`, cele dotyku min. 44 px.
