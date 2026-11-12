---
title: "Term sheet bez tajemnic. Zapisy, które kosztują founderów najwięcej"
lead: "Liquidation preference, anti-dilution i vesting na przykładach."
description: "Liquidation preference, anti-dilution, vesting, leaver, weto, drag-along i ESOP w term sheecie na przykładach w zł. Co oznaczają dla foundera sp. z o.o. i PSA."
category: "Finansowanie"
readingTime: 8
author: "Kinga Adamus"
legalState: 2026-11-12
published: 2026-11-12
updated: 2026-11-12
keywords: ["term sheet", "liquidation preference", "anti-dilution", "vesting i cliff", "umowa wspólników", "drag-along tag-along"]
summary:
  - "Term sheet zwykle nie zobowiązuje do zawarcia umowy inwestycyjnej, ale ustalonych w nim warunków ekonomicznych rzadko udaje się później zmienić."
  - "Przy liquidation preference 1x non-participating inwestor bierze wyższą z 2 kwot: zwrot wkładu albo udział proporcjonalny, a przy wariancie participating dostaje obie."
  - "Full ratchet przelicza cenę inwestora do ceny z rundy w dół, a broad-based weighted average tylko ją uśrednia, co dla founderów oznacza wielokrotnie mniejsze rozwodnienie."
  - "W sp. z o.o. zbycie udziałów wymaga co do zasady formy pisemnej z podpisami notarialnie poświadczonymi, a ograniczenia zbycia trzeba zapisać w umowie spółki (art. 180 i 182 KSH)."
faq:
  - q: "Czy term sheet jest wiążący?"
    a: "Zwykle nie w części dotyczącej samej inwestycji, ale wiąże w zapisach o wyłączności negocjacji, poufności i kosztach. Jeżeli określa istotne postanowienia umowy inwestycyjnej i zawiera zobowiązanie do jej zawarcia, może zostać uznany za umowę przedwstępną (art. 389 k.c.). Strona, która prowadzi negocjacje z naruszeniem dobrych obyczajów, odpowiada za szkodę drugiej strony (art. 72 § 2 k.c.)."
  - q: "Co oznacza liquidation preference 1x non-participating?"
    a: "To prawo inwestora do odebrania w pierwszej kolejności równowartości swojego wkładu przy sprzedaży albo likwidacji spółki. Inwestor wybiera wyższą kwotę: zwrot wkładu albo udział proporcjonalny do posiadanych udziałów. Nie dostaje obu kwot naraz, co odróżnia ten wariant od participating preference."
  - q: "Jaki vesting dla founderów jest typowy?"
    a: "Częsty układ to 48 miesięcy vestingu z 12-miesięcznym cliffem, po którym udziały nabiera się co miesiąc lub co kwartał. Founder, który odchodzi przed cliffem, nie zachowuje udziałów objętych vestingiem. Warunki są negocjowalne, w tym zaliczenie czasu pracy sprzed rundy i przyspieszenie vestingu przy sprzedaży spółki."
  - q: "Czy pula ESOP liczy się do wyceny pre-money?"
    a: "Inwestorzy często tego żądają, a wtedy pula opcji rozwadnia wyłącznie dotychczasowych wspólników. Przy wycenie post-money 20 000 000 zł i puli 10% w pre-money efektywna wycena udziałów founderów spada o 2 000 000 zł. Wielkość puli powinna wynikać z planu zatrudnień, a nie z okrągłej liczby."
sources:
  - label: "Kodeks spółek handlowych, art. 174, 180, 182, 199, 255, 258, 259, 286, 300(2), 300(6), 300(7), 300(36), 300(37), 300(45)"
    act: "ksh"
  - label: "Kodeks cywilny, art. 72, 99, 389, 390"
    act: "kc"
related: ["spolka-z-oo-czy-psa", "due-diligence-od-strony-sprzedajacego", "nda-kiedy-chroni"]
verify:
  - "Stan prawny KSH: t.j. Dz.U. 2024 poz. 18 ze zm. (ostatnia zmiana w mocy na 12.11.2026: Dz.U. 2024 poz. 96). Dz.U. 2026 poz. 1440 wchodzi w życie 3.12.2026 (art. 238, 243, 300(95)), Dz.U. 2026 poz. 176 18.02.2027 (m.in. art. 300(37) § 2). Cytowanych przepisów nie zmieniają, ale przy publikacji po tych datach sprawdzić."
  - "Stan prawny k.c.: t.j. Dz.U. 2026 poz. 795 (stan na 19.05.2026), bez późniejszych zmian w cytowanych przepisach."
  - "Przykłady liczbowe są uproszczone: bez podatków, kosztów transakcji, długu netto i kilku klas udziałów."
  - "Wzór broad-based weighted average (NCP = OCP x (A + B) / (A + C)) to konwencja rynkowa, nie przepis. Potwierdzić, że definicja podstawy A (fully diluted, z pulą ESOP) odpowiada praktyce kancelarii."
  - "Opisy rynkowe (48 miesięcy vestingu, 12-miesięczny cliff, cap preferencji 3x, żądanie ESOP w pre-money) to praktyka, nie przepis. Potwierdzić z doświadczeniem kancelarii."
  - "Teza o wykonalności opcji odkupu i drag-along z umowy wspólników w drodze art. 390 § 2 k.c. i art. 64 k.c. tylko przy zachowaniu formy z art. 180 § 1 KSH: odpowiednie stosowanie przepisów o umowie przedwstępnej do opcji jest poglądem doktryny, bez zweryfikowanego orzeczenia."
  - "Teza, że umowa wspólników wiąże tylko jej strony, a weto działa korporacyjnie dopiero po wpisaniu do umowy spółki, podana bez orzecznictwa. Przy rozbudowie tekstu potwierdzić orzeczeniem SN."
---

Najwięcej founderów kosztują zapisy, które zaczynają działać dopiero przy sprzedaży spółki, słabszej rundzie albo odejściu wspólnika: liquidation preference, anti-dilution, vesting z klauzulami leaver, prawa veta, drag-along i pula ESOP wliczona w wycenę pre-money. Term sheet ustala je na kilku stronach, a umowa inwestycyjna i umowa wspólników tylko je rozpisują. Czego nie wynegocjujesz w term sheecie, później odzyskasz rzadko.

## Czy term sheet jest wiążący?

Co do zasady nie w części dotyczącej samej inwestycji, ale zwykle wiąże w zapisach o wyłączności negocjacji (no-shop), poufności i kosztach. Jeżeli określa istotne postanowienia umowy inwestycyjnej i zawiera zobowiązanie do jej zawarcia, może zostać uznany za umowę przedwstępną (art. 389 k.c.). Strona, która negocjuje z naruszeniem dobrych obyczajów, na przykład bez zamiaru zawarcia umowy, odpowiada za szkodę drugiej strony (art. 72 § 2 k.c.). Warunki ekonomiczne z term sheetu inwestor traktuje jako uzgodnione, więc negocjuj je teraz.

## Liquidation preference: kto dostaje pieniądze pierwszy?

Liquidation preference to prawo inwestora do odebrania w pierwszej kolejności określonej kwoty przy sprzedaży spółki lub jej likwidacji. Przy wariancie 1x non-participating inwestor bierze wyższą z 2 kwot: zwrot wkładu albo udział proporcjonalny. Przy wariancie participating dostaje zwrot wkładu, a potem swój procent z reszty.

Przykład: inwestor wnosi 4 000 000 zł za 20% udziałów (wycena post-money 20 000 000 zł). Founderzy mają łącznie 80%.

| Cena sprzedaży spółki | Inwestor, 1x non-participating | Founderzy | Inwestor, 1x participating | Founderzy |
|---|---|---|---|---|
| 5 000 000 zł | 4 000 000 zł | 1 000 000 zł | 4 200 000 zł | 800 000 zł |
| 15 000 000 zł | 4 000 000 zł | 11 000 000 zł | 6 200 000 zł | 8 800 000 zł |
| 60 000 000 zł | 12 000 000 zł | 48 000 000 zł | 15 200 000 zł | 44 800 000 zł |

Przy sprzedaży za 15 000 000 zł wariant participating zabiera founderom 2 200 000 zł więcej niż non-participating.

W sp. z o.o. exit to zwykle sprzedaż udziałów, więc preferencję realizuje umowa wspólników: wspólnicy dzielą cenę według ustalonej kolejności (waterfall). Na wypadek likwidacji umowa spółki może przewidzieć udziały uprzywilejowane co do podziału majątku albo inne zasady jego podziału (art. 174 § 3 i art. 286 § 3 KSH).

> **Najdroższy zapis**
> Participating preference bez limitu działa przy każdej cenie sprzedaży. Jeżeli inwestor jej żąda, negocjuj cap, na przykład łącznie 3x wkładu, po którego przekroczeniu inwestor przechodzi na zwykły udział proporcjonalny.

## Anti-dilution: full ratchet czy weighted average?

Klauzula anti-dilution chroni inwestora przed rundą po niższej cenie (down round): dostaje dodatkowe udziały, tak jakby kupił je taniej. Sposób przeliczenia decyduje, ile oddasz.

Przykład: inwestor kupił 1000 udziałów po 4000 zł. W spółce jest 10 000 udziałów, licząc pulę ESOP. Kolejna runda to 2 000 000 zł po 2000 zł za udział, czyli 1000 nowych udziałów.

- **Full ratchet.** Cena inwestora spada do 2000 zł. Za 4 000 000 zł powinien mieć 2000 udziałów, więc dostaje 1000 dodatkowych.
- **Broad-based weighted average.** Nowa cena = 4000 zł × (10 000 + 500) / (10 000 + 1000) = 3818,18 zł. Liczba 500 to udziały, które nowy inwestor dostałby za 2 000 000 zł po starej cenie. Inwestor powinien mieć około 1048 udziałów, więc dostaje 48 dodatkowych.

Full ratchet daje tu ponad 20 razy więcej udziałów niż średnia ważona.

W sp. z o.o. wyrównanie wymaga zwykle podwyższenia kapitału: uchwały w protokole notarialnym (art. 255 § 3 KSH), wyłączenia prawa pierwszeństwa pozostałych wspólników (art. 258 § 1 KSH) i oświadczenia o objęciu udziałów w formie aktu notarialnego (art. 258 § 2 i art. 259 KSH). Founderzy zobowiązują się w umowie wspólników głosować za tymi uchwałami.

## Vesting i cliff: co tracisz, gdy odejdziesz?

Vesting oznacza, że founder nabywa swoje udziały z upływem czasu. Częsty układ to 48 miesięcy vestingu z 12-miesięcznym cliffem: kto odejdzie przed upływem roku, nie zachowuje udziałów objętych vestingiem. Po cliffie udziały nabiera się co miesiąc lub co kwartał.

Przykład: masz 40% udziałów i odchodzisz po 18 miesiącach. Zachowujesz 18/48 tej puli, czyli 15% kapitału. Pozostałe 25% spółka lub wspólnicy mogą odkupić po cenie z umowy, często nominalnej. Negocjuj zaliczenie czasu pracy sprzed rundy i przyspieszenie vestingu przy sprzedaży spółki (acceleration).

W sp. z o.o. udziały należą do Ciebie od początku, więc vesting działa jako opcja odkupu (call option) w umowie wspólników. Umorzenie przymusowe jej nie zastąpi, bo wynagrodzenie za umarzany udział nie może być niższe od przypadającej na niego wartości aktywów netto z ostatniego sprawozdania finansowego (art. 199 § 2 KSH). W prostej spółce akcyjnej akcje można objąć za świadczenie pracy lub usług (art. 300(2) § 2 KSH), ale umorzenie przymusowe wymaga spłaty co najmniej wartości godziwej akcji (art. 300(45) § 2 KSH).

## Good leaver i bad leaver: gdzie jest pułapka?

Good leaver odchodzi z przyczyn od siebie niezależnych, na przykład z powodu choroby. Bad leaver narusza zakaz konkurencji lub umowę albo odchodzi przed ustalonym terminem. Good leaver zwykle zachowuje udziały nabyte w vestingu, bad leaver może oddać wszystkie po cenie nominalnej.

Pułapka to definicja bad leavera obejmująca każde odwołanie z zarządu albo rozwiązanie umowy z founderem. Jeżeli inwestor kontroluje te decyzje, sam może wywołać bad leavera. Ogranicz tę kategorię do zawinionych naruszeń.

## Prawa veta: co inwestor może zablokować?

Prawa veta (reserved matters) to decyzje wymagające zgody inwestora: zmiana umowy spółki, emisja udziałów, sprzedaż spółki, dywidenda, zaciąganie długu. Gdy lista obejmuje budżet, zatrudnianie i umowy operacyjne, każda decyzja zarządu czeka na inwestora.

Umowa wspólników wiąże tylko jej strony. Żeby weto działało w spółce, zapisz je także w umowie spółki, na przykład jako wymóg kwalifikowanej większości albo uprzywilejowanie udziałów inwestora (art. 174 KSH).

## Drag-along i tag-along: kto może zmusić Cię do sprzedaży?

Drag-along pozwala większości zmusić pozostałych wspólników do sprzedaży udziałów na tych samych warunkach. Tag-along pozwala mniejszości dołączyć do sprzedaży pakietu większościowego. Przy drag-along negocjuj minimalną cenę i okres ochronny po rundzie.

W sp. z o.o. zbycie udziału wymaga formy pisemnej z podpisami notarialnie poświadczonymi (art. 180 § 1 KSH, wyjątek dla spółek z S24 w § 2), a pełnomocnictwo do takiej sprzedaży tej samej formy (art. 99 § 1 k.c.). Jeżeli umowa spółki uzależnia zbycie od zgody spółki albo w inny sposób je ogranicza (art. 182 § 1 KSH), dopasuj ją do drag-along, inaczej zapisy będą się blokować. W PSA zbycie akcji wymaga formy dokumentowej, a nabycie następuje z wpisem do rejestru akcjonariuszy (art. 300(36) § 4 i art. 300(37) § 1 KSH).

## Pula ESOP przed rundą: kto za nią płaci?

Inwestorzy często żądają, żeby pula opcji dla pracowników powstała przed rundą i była wliczona w wycenę pre-money. Wtedy rozwadnia ona wyłącznie dotychczasowych wspólników.

Przykład: wycena pre-money 16 000 000 zł, inwestycja 4 000 000 zł, pula ESOP 10% kapitału po rundzie. Jeżeli pula jest w pre-money, founderzy mają po rundzie 70%, a efektywna wycena ich udziałów przed rundą to 14 000 000 zł zamiast 16 000 000 zł. Jeżeli pula powstaje po rundzie i rozwadnia wszystkich, founderzy mają 72%, a inwestor 18%. Przy sprzedaży za 100 000 000 zł te 2 punkty procentowe to 2 000 000 zł.

## Zapis, znaczenie, ryzyko: ściąga

| Zapis | Co oznacza | Na co uważać |
|---|---|---|
| Liquidation preference 1x non-participating | Inwestor bierze wyższą kwotę: zwrot wkładu albo udział proporcjonalny | Mnożnik powyżej 1x, skumulowana dywidenda |
| Participating preference | Zwrot wkładu plus udział w reszcie | Brak limitu (cap) |
| Full ratchet | Cena inwestora spada do ceny z down round | Rozwodnienie wielokrotnie większe niż przy średniej ważonej |
| Broad-based weighted average | Cena inwestora jest uśredniana | Definicja podstawy, wariant narrow-based |
| Vesting i cliff | Founder nabywa udziały z czasem | Brak zaliczenia czasu sprzed rundy, brak acceleration |
| Good i bad leaver | Cena odkupu zależy od przyczyny odejścia | Bad leaver wywoływany decyzją inwestora |
| Prawa veta | Decyzje wymagające zgody inwestora | Weto w sprawach operacyjnych |
| Drag-along | Większość może zmusić do sprzedaży | Brak minimalnej ceny, niski próg |
| Tag-along | Mniejszość dołącza do sprzedaży | Gorsze warunki niż dla większości |
| ESOP w pre-money | Pula opcji obciąża tylko founderów | Pula większa niż plan zatrudnień |
| Wyłączność (no-shop) | Zakaz rozmów z innymi inwestorami | Długi okres bez daty granicznej |

## Jaką formę mają umowa inwestycyjna i umowa wspólników?

Przepisy nie wymagają dla nich formy szczególnej. Formy notarialne dotyczą czynności, które je wykonują: zmiany umowy sp. z o.o. (protokół notarialny, art. 255 § 3 KSH), objęcia udziałów (akt notarialny, art. 258 § 2 i art. 259 KSH) i zbycia udziałów (art. 180 § 1 KSH). Umowa prostej spółki akcyjnej wymaga aktu notarialnego, chyba że zawierasz ją przy wykorzystaniu wzorca (art. 300(6) i 300(7) KSH).

Jeżeli umowa wspólników zawiera opcję odkupu albo drag-along, zawrzyj ją w formie pisemnej z podpisami notarialnie poświadczonymi. Sądowego zawarcia umowy przyrzeczonej można żądać tylko wtedy, gdy umowa przedwstępna ma formę wymaganą dla umowy przyrzeczonej (art. 390 § 2 k.c.). Bez tego zostaje odszkodowanie albo kara umowna.

## Co zrobić teraz

1. Policz podział ceny dla 3 scenariuszy sprzedaży: niskiego, średniego i wysokiego.
2. Sprawdź, czy anti-dilution to broad-based weighted average, a nie full ratchet.
3. Zapisz definicje good i bad leavera tak, żeby inwestor nie mógł sam wywołać bad leavera.
4. Porównaj wielkość puli ESOP z planem zatrudnień i ustal, czy jest w pre-money.
5. Dopasuj umowę spółki do umowy wspólników: ograniczenia zbycia, weto i drag-along.
