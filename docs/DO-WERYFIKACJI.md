# Do weryfikacji przed publikacją

Wygenerowano: 2026-11-12 skryptem `scripts/verify-report.mjs`. Nie edytuj ręcznie, popraw źródło i uruchom skrypt ponownie.

Każdy tekst merytoryczny napisano na podstawie aktualnych tekstów jednolitych ustaw (API Sejmu). Przed publikacją prawnik prowadzący musi przeczytać tekst i odhaczyć punkty poniżej.
Punktów do sprawdzenia: 156.


## Dane kancelarii (src/data/kancelaria.json)

Wpisz brakujące wartości w jednym pliku. Strona, stopka, dokumenty i dane dla Google zaktualizują się po `npm run build`. Tytuł zawodowy sam przełącza w dokumentach tajemnicę, samorząd, ustawę i zasady etyki.

- [ ] `pelnaNazwa`: pełna nazwa i forma prawna z rejestru
- [ ] `ulica`: ulica i numer siedziby
- [ ] `kodPocztowy`: kod pocztowy
- [ ] `nip`: NIP
- [ ] `regon`: REGON
- [ ] `krs`: KRS (albo "nie dotyczy" przy CEIDG)
- [ ] `telefon`: telefon
- [ ] `tytulZawodowy`: tytuł zawodowy: "adwokat" albo "radca prawny"
- [ ] `numerWpisu`: numer wpisu na listę adwokatów albo radców prawnych
- [ ] `dostawcaPoczty`: dostawca poczty e-mail (np. nazwa firmy hostingu poczty)
- [ ] `podstawaTransferuPoczty`: podstawa transferu danych poczty poza EOG albo "EOG"
- [ ] `inspektorOchronyDanych`: inspektor ochrony danych: adres e-mail albo "nie"

## Baza wiedzy

### 30 dni na wniosek o upadłość. Od kiedy liczyć termin

Adres: `/baza-wiedzy/30-dni-na-wniosek-o-upadlosc/`  Plik: `src/content/baza-wiedzy/30-dni-na-wniosek-o-upadlosc.md`

- [ ] Teksty jednolite: Prawo upadłościowe Dz.U. 2026 poz. 913 (stan na 10.06.2026; późniejsza zmiana Dz.U. 2026 poz. 1206 dotyczy banków); KSH Dz.U. 2024 poz. 18 ze zm.; Ordynacja podatkowa Dz.U. 2026 poz. 622.
- [ ] Początek terminu przyjęto jako obiektywną datę niewypłacalności, a wiedzę zarządu jako element oceny winy (art. 299 § 2 KSH, art. 21 ust. 3 PU). Potwierdzić zgodność z aktualnym orzecznictwem SN. Sygnatur celowo nie podano.
- [ ] Teza, że domniemanie 3 miesięcy nie przesuwa początku terminu i niewypłacalność może powstać wcześniej, wymaga potwierdzenia przez prawnika. Przykład obalenia domniemania (sporna faktura) jest ilustracją.
- [ ] Art. 11 ust. 6 PU (oddalenie wniosku, gdy nie ma zagrożenia utraty płynności w niedługim czasie) przypisano przesłance bilansowej na podstawie układu ust. 2-7. Potwierdzić.
- [ ] Sposób liczenia 30 dni (np. art. 111 i 115 k.c.) celowo pominięto. Dopisać po weryfikacji, jeśli potrzebne.
- [ ] Nie opisano wpływu obwieszczenia w PZU (art. 9a ust. 2 PU) na bieg 30 dni. Ocenić, czy dopisać.
- [ ] Zdanie o wniosku restrukturyzacyjnym: przepisy mówią o otwarciu postępowania albo zatwierdzeniu układu w terminie. Sprawdzić, jak sądy oceniają postanowienie wydane po 30 dniach przy wniosku złożonym w terminie.
- [ ] Lista dokumentów w sekcji o datach to praktyka, nie wymóg ustawowy.

### Pięć błędów w umowach B2B, które drogo kosztują

Adres: `/baza-wiedzy/bledy-w-umowach-b2b/`  Plik: `src/content/baza-wiedzy/bledy-w-umowach-b2b.md`

- [ ] Stan prawny: k.c. t.j. Dz.U. 2026 poz. 795; ustawa o prawie autorskim t.j. Dz.U. 2025 poz. 24 ze zm.; ustawa z 8.03.2013 t.j. Dz.U. 2023 poz. 1790 (według API Sejmu brak zmian po Dz.U. 2023 poz. 852, progi 40/70/100 euro i 5000/50 000 zł aktualne na 12.11.2026); k.p.c. t.j. Dz.U. 2026 poz. 468 ze zm.
- [ ] Uchwała SN 7 sędziów z 6.11.2003, III CZP 61/03 (zasada prawna) sprawdzona w SAOS: teza o braku zwolnienia z kary po wykazaniu braku szkody.
- [ ] Teza, że kary umownej nie można skutecznie zastrzec za opóźnienie w zapłacie, wynika z art. 483 § 1 k.c. (zobowiązanie niepieniężne). Bez cytowanego orzeczenia.
- [ ] Ryzyko ogólnej formuły na wszystkich polach eksploatacji: pogląd doktryny i orzecznictwa na tle art. 41 ust. 2 pr. aut., bez zweryfikowanej sygnatury.
- [ ] Zobowiązanie twórcy do niewykonywania autorskich praw osobistych: dopuszczalność sporna w doktrynie. Rozważyć dopisanie zastrzeżenia.
- [ ] Dyspozytywny charakter art. 746 § 1 i 2 k.c. (możliwość umownego ograniczenia wypowiedzenia poza ważnymi powodami) to pogląd doktryny i orzecznictwa. Bez sygnatury.
- [ ] Rekompensata z art. 10 ustawy przysługuje od transakcji handlowej (art. 10 ust. 3). Kwestia, czy przy wielu fakturach z 1 umowy należy się od każdej faktury, nie jest w tekście rozstrzygana. Sprawdzić aktualne orzecznictwo SN i TSUE przed ewentualnym rozwinięciem.
- [ ] Wysokość odsetek ustawowych za opóźnienie w transakcjach handlowych podana opisowo (stopa referencyjna NBP + 10 pkt proc.), bez aktualnej liczby.
- [ ] Przykłady liczbowe (400 000 zł, 120 000 zł, 900 000 zł) są ilustracyjne.

### Due diligence od strony sprzedającego

Adres: `/baza-wiedzy/due-diligence-od-strony-sprzedajacego/`  Plik: `src/content/baza-wiedzy/due-diligence-od-strony-sprzedajacego.md`

- [ ] Stan prawny: KSH t.j. Dz.U. 2024 poz. 18 ze zm.; ustawa o prawie autorskim t.j. Dz.U. 2025 poz. 24 ze zm. (zmiany z Dz.U. 2026 poz. 1296 i 1477 nie dotyczą art. 12, 41, 53, 65, 74); k.c. t.j. Dz.U. 2026 poz. 795.
- [ ] Opisy praktyki transakcyjnej (VDD, confirmatory DD, clean team, disclosure ogólne i szczegółowe, de minimis, basket, cap, indemnities) nie mają podstawy ustawowej. Potwierdzić z doświadczeniem kancelarii.
- [ ] Opis ubezpieczenia W&I jest ogólny i bez liczb. Przed publikacją potwierdzić z brokerem, czy na polskim rynku dominuje polisa kupującego i jakie są typowe wyłączenia.
- [ ] Skutek ujawnienia w disclosure letter wynika z umowy sprzedaży, nie z ustawy. Sformułowanie zwykle nie może być podstawą roszczenia zostawić albo doprecyzować.
- [ ] Teza, że udostępnienie danych osobowych kupującemu to przetwarzanie w rozumieniu RODO (art. 4 pkt 2), podana bez stanowiska UODO.
- [ ] Art. 17 § 2 KSH: zgoda wyrażona najpóźniej 2 miesiące po złożeniu oświadczenia przez spółkę. Zalecenie ponownego dokonania czynności po tym terminie to praktyka, nie przepis.

### Jak założyć spółkę z o.o. w 2026 roku, krok po kroku

Adres: `/baza-wiedzy/jak-zalozyc-spolke-z-oo/`  Plik: `src/content/baza-wiedzy/jak-zalozyc-spolke-z-oo.md`

- [ ] Teksty jednolite: KSH Dz.U. 2024 poz. 18 ze zm. (zmiany do 2026 poz. 1440 nie dotyczą opisanych przepisów); ustawa o KRS Dz.U. 2025 poz. 869 ze zm.; ustawa AML Dz.U. 2025 poz. 644; ustawa o ewidencji podatników Dz.U. 2026 poz. 151; VAT Dz.U. 2026 poz. 1263; ustawa o sus Dz.U. 2026 poz. 1474; Prawo przedsiębiorców Dz.U. 2026 poz. 1484; koszty sądowe Dz.U. 2025 poz. 1228; ustawa o rachunkowości Dz.U. 2026 poz. 522.
- [ ] PKD 2025: rozporządzenie RM z 18.12.2024 (Dz.U. 2024 poz. 1936) w mocy od 1.01.2025; PKD 2007 najdłużej do 31.12.2026 dla działalności oznaczonej przed 2025 r. (§ 2). Tytuł w 2026 roku jest zgodny ze stanem prawnym. Sprawdzić przed publikacją, czy formularze S24 i PRS przyjmują już wyłącznie kody PKD 2025.
- [ ] Opłaty 250 zł i 500 zł potwierdzone w art. 52 ust. 1 i 2 ustawy o kosztach sądowych (stan na 12.11.2026). Wysokość opłaty za ogłoszenie w MSiG nie była weryfikowana, dlatego jej nie podano.
- [ ] Nazwy formularzy NIP-8 i VAT-R nie wynikają z ustaw, tylko z rozporządzeń. Potwierdzić aktualne nazwy.
- [ ] KSeF: obowiązek z art. 106ga i okres przejściowy z art. 145m ustawy o VAT opisano ogólnie. Potwierdzić, od kiedy obowiązek obejmuje podatników zwolnionych podmiotowo z VAT.
- [ ] ZUS: opisano obowiązek jedynego wspólnika (art. 8 ust. 6 pkt 4 ustawy o sus) i termin 7 dni (art. 36 ust. 4). Potwierdzić praktykę ZUS co do zgłoszenia płatnika przez spółkę z KRS (dane z KRS a formularze ZUS ZPA i ZUA).
- [ ] Terminy 1 dnia i 7 dni z art. 20a ustawy o KRS są terminami dla sądu. Rozważyć dopisanie, że w praktyce bywają przekraczane.
- [ ] Termin CRBR 14 dni liczony od wpisu do KRS, zgodnie z brzmieniem art. 60 ust. 1 pkt 1 ustawy AML (bez dni roboczych).

### Kiedy przekształcić JDG w spółkę. Pięć sygnałów

Adres: `/baza-wiedzy/kiedy-przeksztalcic-jdg-w-spolke/`  Plik: `src/content/baza-wiedzy/kiedy-przeksztalcic-jdg-w-spolke.md`

- [ ] Limit 240 000 zł obowiązuje od 1.01.2026 (ustawa z 24.06.2025, Dz.U. 2025 poz. 896; t.j. VAT Dz.U. 2026 poz. 1263). Wcześniej limit wynosił 200 000 zł. Potwierdzić, jak w 2026 r. porównuje się z limitem sprzedaż z 2025 r. (art. 113 ust. 1 mówi o poprzednim i bieżącym roku). Od 1.01.2027 do wartości sprzedaży wlicza się też czynności z art. 13 ust. 3 (art. 113 ust. 1a dodany ustawą Dz.U. 2026 poz. 1270).
- [ ] Badanie biegłego rewidenta: sprawdzono KSH t.j. Dz.U. 2024 poz. 18 i wszystkie późniejsze zmiany (Dz.U. 2024 poz. 96; 2026 poz. 176, 187, 644, 1440). Art. 584(5) pkt 1 i art. 584(8) bez zmian, badanie nadal obowiązkowe przy przekształceniu w sp. z o.o. Sprawdzić przed publikacją, czy nie uchwalono zmian.
- [ ] Sygnał 3 (kontrakty B2B z dużymi klientami) opisuje praktykę zakupową, nie wymóg prawny.
- [ ] ZUS: opisano tylko obowiązek jedynego wspólnika (art. 8 ust. 6 pkt 4 ustawy o sus, t.j. Dz.U. 2026 poz. 1474). Preferencji składkowych JDG i ich utraty nie opisano.
- [ ] Ordynacja podatkowa t.j. Dz.U. 2026 poz. 622: art. 93a § 4 (sukcesja praw podatkowych), art. 112b (solidarna odpowiedzialność za zaległości podatkowe JDG), art. 116 (odpowiedzialność zarządu).
- [ ] Porównanie przekształcenia z założeniem nowej spółki i wniesieniem przedsiębiorstwa aportem pominięto. Rozważyć osobny akapit po konsultacji z doradcą podatkowym.

### NDA: kiedy chroni, a kiedy jest tylko papierem

Adres: `/baza-wiedzy/nda-kiedy-chroni/`  Plik: `src/content/baza-wiedzy/nda-kiedy-chroni.md`

- [ ] Stan prawny: k.c. t.j. Dz.U. 2026 poz. 795; uznk t.j. Dz.U. 2026 poz. 85; k.p.c. t.j. Dz.U. 2026 poz. 468 ze zm.; k.p. t.j. Dz.U. 2026 poz. 1245.
- [ ] Uchwała SN 7 sędziów z 6.11.2003, III CZP 61/03 (zasada prawna) sprawdzona w SAOS.
- [ ] Stosowanie art. 365(1) k.c. do bezterminowego obowiązku poufności to pogląd doktryny, bez zweryfikowanego orzeczenia. Rozważyć złagodzenie do może zostać wypowiedziane albo dodanie źródła.
- [ ] Przykład kary 1 000 000 zł jako rażąco wygórowanej jest ilustracyjny. Ocena zależy od okoliczności sprawy.
- [ ] Lista typowych wyłączeń i okres zwrotu informacji (14 dni) to praktyka umowna, nie przepis.
- [ ] Zastrzeżenie o wykonaniu wyroku za granicą opisane ogólnie (Bruksela I bis w UE, poza UE umowy międzynarodowe i k.p.c.).

### Odpowiedzialność zarządu za długi spółki. Art. 299 KSH w praktyce

Adres: `/baza-wiedzy/odpowiedzialnosc-zarzadu-art-299-ksh/`  Plik: `src/content/baza-wiedzy/odpowiedzialnosc-zarzadu-art-299-ksh.md`

- [ ] Wyrok TK z 12.04.2023, sygn. P 5/19 istnieje: ogłoszony w Dz.U. 2023 poz. 739, skutek od 19.04.2023, odnotowany w przypisie do art. 299 w t.j. KSH (Dz.U. 2024 poz. 18). Tekst artykułu go upraszcza. Sentencja: art. 299 § 1 i 2 KSH jest niezgodny z Konstytucją w zakresie, w jakim nie pozwala pozwanemu byłemu członkowi zarządu wykazać, że wierzytelność stwierdzona orzeczeniem przeciwko spółce nie istnieje, gdy orzeczenie zapadło w postępowaniu wszczętym po utracie przez niego mandatu. Niekonstytucyjny w tym samym zakresie jest art. 365 § 1 k.p.c. Sentencja nie mówi o długu niższym ani o wszystkich byłych członkach zarządu.
- [ ] Propozycja doprecyzowania akapitu o TK: Trybunał uznał, że były członek zarządu, który odszedł ze spółki przed wszczęciem sprawy przeciwko niej, musi móc wykazać, że dług stwierdzony wyrokiem wobec spółki nie istnieje. Wcześniej sąd był związany takim wyrokiem. Decyzja o zmianie należy do autorki, bo artykuł przenosimy 1:1.
- [ ] Skład TK w sprawie P 5/19: P. Pszczółkowski, S. Piotrowicz, W. Sych, R. Wojciechowski, J. Wyrembak. Ocenić, czy skład budzi zastrzeżenia w świetle wyroku ETPC Xero Flor (nowsze publikacje wyroków TK w Dz.U. mają adnotację o osobach nieuprawnionych w składzie) i czy wspomnieć o tym w tekście.
- [ ] Zdanie o zakresie czasowym odpowiedzialności (zobowiązanie powstałe w czasie pełnienia funkcji albo moment, w którym należało złożyć wniosek) to uproszczenie orzecznictwa SN. Potwierdzić brzmienie.
- [ ] Przykład braku winy (zarząd bez dostępu do dokumentów finansowych) jest ilustracją. Potwierdzić, że nie sugeruje szerszej linii orzeczniczej niż istniejąca.
- [ ] Callout Najczęstszy błąd: po upływie 30 dni odpada pierwsza przesłanka z art. 299 § 2 KSH, a brak winy i brak szkody formalnie pozostają do wykazania. Rozważyć doprecyzowanie słów przestaje działać.
- [ ] Zmiany względem oryginału: liczby cyframi zgodnie z kontraktem (3 miesiące, 3 sposoby, 2 sposoby), numeracja list, znak zapytania w 2 nagłówkach. Treść merytoryczna bez zmian.
- [ ] Treść ma ok. 460 słów, a readingTime 9 pochodzi z kafelka. Przy tej długości realny czas czytania to ok. 3 minuty. Zdecydować, czy zmienić readingTime, czy rozbudować tekst.
- [ ] Ostatnie zdanie (zastrzeżenie o uproszczeniu) przeniesiono z oryginału. Jeśli szablon dokleja własne zastrzeżenie, usunąć je z treści. Daty published i updated ustawiono na 12.11.2026, oryginał miał stan prawny październik 2026.
- [ ] Teksty jednolite: KSH Dz.U. 2024 poz. 18 ze zm. (Dz.U. 2024 poz. 96; 2026 poz. 176, 187, 644, 1440 - żadna zmiana nie dotyczy art. 299 i 586); Prawo upadłościowe Dz.U. 2026 poz. 913 (art. 11 i 21 zgodne z treścią artykułu).

### Restrukturyzacja czy upadłość? Jak wybrać, póki jest wybór

Adres: `/baza-wiedzy/restrukturyzacja-czy-upadlosc/`  Plik: `src/content/baza-wiedzy/restrukturyzacja-czy-upadlosc.md`

- [ ] Teksty jednolite: Prawo restrukturyzacyjne Dz.U. 2026 poz. 533 (stan na 25.03.2026, obejmuje nowelizację z 25.07.2025, Dz.U. 2025 poz. 1085, w mocy od 23.08.2025); Prawo upadłościowe Dz.U. 2026 poz. 913; KSH Dz.U. 2024 poz. 18 ze zm. Późniejsza zmiana PR i PU (Dz.U. 2026 poz. 1206, od 11.01.2027) dotyczy tylko banków.
- [ ] Wierzyciele zabezpieczeni: nowelizacja z 25.07.2025 skreśliła w art. 151 ust. 2 PR wyłączenie wierzytelności zabezpieczonych hipoteką i zastawem (dotąd objętych układem tylko za zgodą wierzyciela) i dodała art. 150 ust. 3. Tekst mówi, że od 23.08.2025 układ może je objąć bez zgody wierzyciela w części odpowiadającej wartości zabezpieczenia. Potwierdzić to ujęcie i ewentualnie dopisać zasady głosowania w grupach.
- [ ] Ochrona w PZU: art. 226e PR odsyła odpowiednio do art. 256 i art. 312 PR. Tekst upraszcza to do zawieszenia egzekucji. Potwierdzić zakres ochrony, w tym wobec wierzycieli zabezpieczonych.
- [ ] Callout Najczęstszy błąd: art. 299 § 2 KSH i art. 21 ust. 3 PU mówią o otwarciu postępowania albo zatwierdzeniu układu, a nie o złożeniu wniosku restrukturyzacyjnego. Sprawdzić aktualną linię orzeczniczą co do tego, kiedy postanowienie wydane po 30 dniach od niewypłacalności mieści się we właściwym czasie.
- [ ] Tabela jest zgodna z tabelą Sześć dróg wyjścia z trasy #rescue. Dopisano warunek z art. 226g PR przy PZU (4 miesiące na wniosek o zatwierdzenie układu). W wierszu ugody zmieniono przymiotnik opisujący wierzycieli ze względu na listę zakazanych słów w kontrakcie.
- [ ] Opłatę 1000 zł od wniosku o zatwierdzenie układu (strona Legal Rescue) celowo pominięto. Jeśli ma się pojawić, potwierdzić ją w ustawie o kosztach sądowych w sprawach cywilnych (t.j. Dz.U. 2025 poz. 1228 ze zm.).
- [ ] Upadłość opisano w uproszczeniu (syndyk sprzedaje majątek, spłata w kolejności ustawowej). Sprawdzić, czy dopisać zastrzeżenie o sprzedaży przedsiębiorstwa w całości przez syndyka.
- [ ] Test zaspokojenia (art. 10a PR) i obowiązek przygotowania dokumentów co najmniej 30 dni przed zbieraniem głosów (art. 211b PR) opisano skrótowo. Potwierdzić, że opis odpowiada praktyce sądów od 23.08.2025.

### Spółka z o.o. czy prosta spółka akcyjna dla startupu

Adres: `/baza-wiedzy/spolka-z-oo-czy-psa/`  Plik: `src/content/baza-wiedzy/spolka-z-oo-czy-psa.md`

- [ ] Teksty jednolite: KSH Dz.U. 2024 poz. 18 ze zm. (Dz.U. 2024 poz. 96; 2026 poz. 176, 187, 644, 1440); ustawa o sus Dz.U. 2026 poz. 1474.
- [ ] Zgłaszanie do KRS podmiotu prowadzącego rejestr akcjonariuszy (art. 300(32) § 1(1)-1(3) KSH) wynika z ustawy z 23.01.2026 (Dz.U. 2026 poz. 176), która wchodzi w życie 18.02.2027 (12 miesięcy od ogłoszenia 17.02.2026). Potwierdzić datę przed publikacją.
- [ ] Teza, że KSH nie przewiduje dla akcji uprzywilejowanych w PSA limitów takich jak w sp. z o.o. (art. 174 § 4, art. 196), opiera się na brzmieniu art. 300(25)-300(27). Potwierdzić.
- [ ] Skutki podatkowe objęcia akcji za pracę lub usługi (PIT, CIT) celowo pominięto. Do weryfikacji z doradcą podatkowym, jeśli mają się pojawić.
- [ ] Art. 300(132) KSH mówi o członkach zarządu. Potwierdzić, jak stosuje się go do dyrektorów w modelu z radą dyrektorów, zanim tabela zostanie rozbudowana o ten model.
- [ ] Art. 300(19) KSH: odpis co najmniej 8% zysku na kapitał akcyjny na pokrycie strat, dopóki kapitał nie osiągnie 5% sumy zobowiązań. W tekście opisano to skrótowo.
- [ ] Zdania o kosztach rejestru akcjonariuszy są ogólne (brak cen). Nie podawać kwot bez źródła.

### Term sheet bez tajemnic. Zapisy, które kosztują founderów najwięcej

Adres: `/baza-wiedzy/term-sheet-bez-tajemnic/`  Plik: `src/content/baza-wiedzy/term-sheet-bez-tajemnic.md`

- [ ] Stan prawny KSH: t.j. Dz.U. 2024 poz. 18 ze zm. (ostatnia zmiana w mocy na 12.11.2026: Dz.U. 2024 poz. 96). Dz.U. 2026 poz. 1440 wchodzi w życie 3.12.2026 (art. 238, 243, 300(95)), Dz.U. 2026 poz. 176 18.02.2027 (m.in. art. 300(37) § 2). Cytowanych przepisów nie zmieniają, ale przy publikacji po tych datach sprawdzić.
- [ ] Stan prawny k.c.: t.j. Dz.U. 2026 poz. 795 (stan na 19.05.2026), bez późniejszych zmian w cytowanych przepisach.
- [ ] Przykłady liczbowe są uproszczone: bez podatków, kosztów transakcji, długu netto i kilku klas udziałów.
- [ ] Wzór broad-based weighted average (NCP = OCP x (A + B) / (A + C)) to konwencja rynkowa, nie przepis. Potwierdzić, że definicja podstawy A (fully diluted, z pulą ESOP) odpowiada praktyce kancelarii.
- [ ] Opisy rynkowe (48 miesięcy vestingu, 12-miesięczny cliff, cap preferencji 3x, żądanie ESOP w pre-money) to praktyka, nie przepis. Potwierdzić z doświadczeniem kancelarii.
- [ ] Teza o wykonalności opcji odkupu i drag-along z umowy wspólników w drodze art. 390 § 2 k.c. i art. 64 k.c. tylko przy zachowaniu formy z art. 180 § 1 KSH: odpowiednie stosowanie przepisów o umowie przedwstępnej do opcji jest poglądem doktryny, bez zweryfikowanego orzeczenia.
- [ ] Teza, że umowa wspólników wiąże tylko jej strony, a weto działa korporacyjnie dopiero po wpisaniu do umowy spółki, podana bez orzecznictwa. Przy rozbudowie tekstu potwierdzić orzeczeniem SN.

### Umowa o pracę, B2B czy zlecenie. Co ryzykujesz

Adres: `/baza-wiedzy/umowa-o-prace-b2b-czy-zlecenie/`  Plik: `src/content/baza-wiedzy/umowa-o-prace-b2b-czy-zlecenie.md`

- [ ] Nowe uprawnienia PIP sprawdzone w tekście ustawy z 11.03.2026 (Dz.U. 2026 poz. 473, ogłoszona 7.04.2026, w życie 8.07.2026 poza wyjątkami z art. 20). Ustawa o PIP: t.j. Dz.U. 2024 poz. 1712 ze zm., nowszego tekstu jednolitego brak na 12.11.2026.
- [ ] Termin abolicji z art. 16 ustawy zmieniającej: 12 miesięcy od wejścia w życie 8.07.2026, wyliczony na 8.07.2027 (art. 112 k.c.). Potwierdzić sposób liczenia.
- [ ] Stan prawny pozostałych aktów: k.p. t.j. Dz.U. 2026 poz. 1245 (obejmuje zmiany z Dz.U. 2026 poz. 473, grzywna 2000-60 000 zł w art. 281 § 1); k.p.c. t.j. Dz.U. 2026 poz. 468 ze zm. z Dz.U. 2026 poz. 473 (art. 461 § 1(1) i § 2(3), art. 477(7b)-477(7j)); ustawa o sus t.j. Dz.U. 2026 poz. 1474; ustawa o PIT t.j. Dz.U. 2026 poz. 592 ze zm.; Ordynacja podatkowa t.j. Dz.U. 2026 poz. 622; k.c. t.j. Dz.U. 2026 poz. 795.
- [ ] Praktyka stosowania decyzji z art. 11 ust. 1 pkt 7a ustawy o PIP od 8.07.2026 (liczba decyzji, wytyczne GIP, pierwsze wyroki) nieznana. Przed publikacją sprawdzić komunikaty GIP.
- [ ] Lista sygnałów stosunku pracy opiera się na art. 22 § 1 k.p. i praktyce kontroli. Bez cytowanych orzeczeń SN, sygnatury nie były weryfikowane.
- [ ] Ubezpieczenie zdrowotne przy zbiegu tytułów celowo pominięte (inna ustawa). Uzupełnić, jeśli artykuł ma je obejmować.
- [ ] Skutek podatkowy przy art. 5b PIT opisany ogólnie (przychód poza działalnością, ryzyko płatnika). Kwalifikację źródła przychodu potwierdzić z doradcą podatkowym.

## Opracowania prawne (/legal)

### Kara umowna a odszkodowanie (art. 483-485 k.c.)

Adres: `/legal/kara-umowna-a-odszkodowanie/`  Plik: `src/content/legal/kara-umowna-a-odszkodowanie.md`

- [ ] Teksty jednolite: Kodeks cywilny Dz.U. 2026 poz. 795 (stan prawny na 19.05.2026); Prawo zamówień publicznych Dz.U. 2026 poz. 793 (nie badano, czy zmiana Dz.U. 2026 poz. 1347, wchodząca w życie 1.12.2026, dotyczy art. 433 lub 436). Teksty odczytane z API Sejmu 12.11.2026.
- [ ] Orzeczenia przywołane z sygnaturą sprawdzono w pełnych tekstach w SAOS: III CZP 61/03, III CZP 39/12, V CSK 362/07, V CSK 385/07, II CSK 84/12, I CSK 315/10, V CSK 45/13, II CSK 318/10. SAOS obejmuje orzeczenia SN do połowy 2016 r.; sn.pl blokuje odczyt automatyczny.
- [ ] Uchwałę składu 7 sędziów SN o niedopuszczalności kary umownej na wypadek odstąpienia od umowy z powodu niewykonania zobowiązania pieniężnego opisano bez sygnatury, bo nie udało się jej sprawdzić w sn.pl ani SAOS. Według źródeł wtórnych chodzi o uchwałę z 20.11.2019 r., III CZP 3/19; potwierdzić sygnaturę, datę i treść przed dodaniem.
- [ ] Sprawdzić orzecznictwo SN po 2016 r. dotyczące dochodzenia kary za zwłokę naliczonej do chwili odstąpienia od umowy (relacja do uchwały III CZP 39/12), w tym rozróżnienie odstąpienia ustawowego i umownego oraz skutku ex nunc.
- [ ] Teza, że wymóg określonej sumy spełnia wskazanie podstaw obliczenia kary (stawka dzienna, procent wynagrodzenia), oraz teza o rozkładzie ciężaru dowodu przy miarkowaniu (art. 6 k.c.) podane opisowo; dodać orzeczenia, jeśli mają być przywołane.
- [ ] Wymagalność roszczenia o karę umowną po wezwaniu (art. 455 k.c.) i początek biegu przedawnienia opisano na podstawie przepisów, bez orzeczeń; potwierdzić aktualną linię SN.
- [ ] Dopuszczalność tzw. kary kumulatywnej (kara i pełne odszkodowanie za to samo naruszenie) opisano ostrożnie; ocenić, czy potrzebne jest przywołanie stanowisk doktryny.

### Odsetki i rekompensata w transakcjach handlowych

Adres: `/legal/odsetki-i-rekompensata-w-transakcjach-handlowych/`  Plik: `src/content/legal/odsetki-i-rekompensata-w-transakcjach-handlowych.md`

- [ ] Teksty jednolite: ustawa o przeciwdziałaniu nadmiernym opóźnieniom Dz.U. 2023 poz. 1790 (API Sejmu nie wykazuje zmian po tym tekście), Kodeks cywilny Dz.U. 2026 poz. 795, ustawa o VAT Dz.U. 2026 poz. 1263, ustawa o CIT Dz.U. 2026 poz. 554, ustawa o PIT Dz.U. 2026 poz. 592; odczyt z API Sejmu 12.11.2026.
- [ ] Stawki odsetek: M.P. 2026 poz. 642 (13,75% i 11,75% za okres 1.07-31.12.2026) oraz M.P. 2025 poz. 1257 (14% i 12% za okres 1.01-30.06.2026). Przed publikacją po 31.12.2026 dopisać stawkę z obwieszczenia na I półrocze 2027 r.
- [ ] Orzeczenia zweryfikowane: SN III CZP 94/15 z 11.12.2015 (SAOS), TSUE C-585/20 z 20.10.2022 (EUR-Lex). Inne tezy orzecznicze podane opisowo.
- [ ] Kurs euro w przykładzie (4,25 zł) jest założeniem rachunkowym, nie kursem NBP; przed publikacją można podstawić rzeczywisty średni kurs NBP z 30.06.2026 albo pozostawić zastrzeżenie.
- [ ] Odniesienie progów z art. 10 ust. 1 do kwoty brutto opisano jako wniosek z definicji świadczenia pieniężnego i z wyroku C-585/20 (pkt 3 sentencji dotyczy kwoty należnej z VAT); potwierdzić stanowisko orzecznictwa krajowego.
- [ ] Relacja zwrotu kosztów z art. 10 ust. 2 do kosztów procesu (art. 98 k.p.c.) i zakaz podwójnej kompensaty tych samych kosztów opisane opisowo; dobrać orzecznictwo, jeśli ma być przywołane.
- [ ] Ulga na złe długi opisana ogólnie; warunki szczegółowe (status podatników, terminy korekt, wyłączenia dla podmiotów powiązanych w CIT i PIT) wymagają odrębnej analizy podatkowej.

### Przedawnienie roszczeń odszkodowawczych w obrocie profesjonalnym

Adres: `/legal/przedawnienie-roszczen-odszkodowawczych/`  Plik: `src/content/legal/przedawnienie-roszczen-odszkodowawczych.md`

- [ ] Teksty jednolite użyte do opracowania: Kodeks cywilny Dz.U. 2026 poz. 795 (stan prawny na 19.05.2026), Kodeks postępowania cywilnego Dz.U. 2026 poz. 468 (późniejsze zmiany Dz.U. 2026 poz. 473, 830, 1003, 1046, 1296 nie dotyczą art. 130, 184-186 i 203), odczytane z API Sejmu 12.11.2026.
- [ ] Ustalenie co do zawezwania do próby ugodowej: art. 121 pkt 5 i 6 k.c. dodała ustawa z 2.12.2021 (Dz.U. 2021 poz. 2459), w życiu od 30.06.2022, a nie nowelizacja z 2018 r.; ta sama ustawa uchyliła art. 123 § 1 pkt 3 k.c. (mediacja) i zmieniła art. 124 § 2; przepis przejściowy: art. 8. Sprawdzić orzecznictwo SN po 30.06.2022 co do tego, czy zawezwanie może nadal przerywać bieg na podstawie art. 123 § 1 pkt 1 k.c. (art. 123 § 1 pkt 1 nie został zmieniony), oraz uzasadnienie projektu (druk sejmowy IX kadencji nr 1344).
- [ ] Sprawdzić, od kiedy liczy się czas trwania postępowania pojednawczego dla potrzeb art. 121 pkt 6 k.c. (wniesienie wniosku czy jego doręczenie) i kiedy postępowanie się kończy (posiedzenie, zwrot, odrzucenie wniosku).
- [ ] Rozumienie roszczeń związanych z prowadzeniem działalności gospodarczej (status uprawnionego jako przedsiębiorcy) opisano opisowo, bez sygnatur; dobrać orzeczenia SN, jeśli mają być przywołane.
- [ ] Stosowanie art. 118 zd. 2 k.c. (koniec roku) do terminów szczególnych, w tym art. 442¹ k.c. i art. 125 § 1 k.c., opisano jako sporne; potwierdzić aktualny stan orzecznictwa.
- [ ] Sprawdzić stanowisko SN co do zastosowania art. 115 k.c., gdy koniec terminu przedawnienia przypada na sobotę lub dzień wolny (np. 31.12.2028 to niedziela).
- [ ] Teza, że roszczenie o odsetki przedawnia się najpóźniej z roszczeniem głównym, oraz teza o przerwaniu biegu pozwem tylko co do dochodzonej części roszczenia są podane opisowo; dodać sygnatury po weryfikacji w sn.pl lub saos.org.pl, jeśli mają się pojawić.
- [ ] Teza, że sąd cywilny może samodzielnie ustalić popełnienie przestępstwa na potrzeby art. 442¹ § 2 k.c. przy braku wyroku karnego, podana opisowo; potwierdzić orzecznictwem SN.
- [ ] Kwalifikacja uznania długu po upływie terminu przedawnienia jako zrzeczenia się zarzutu oraz zarzut nadużycia prawa (art. 5 k.c.) wobec zarzutu przedawnienia w obrocie profesjonalnym opisane opisowo; do weryfikacji orzecznictwem.

### Umowne ograniczenie i wyłączenie odpowiedzialności (art. 473 k.c.)

Adres: `/legal/umowne-ograniczenie-odpowiedzialnosci/`  Plik: `src/content/legal/umowne-ograniczenie-odpowiedzialnosci.md`

- [ ] Tekst jednolity: Kodeks cywilny Dz.U. 2026 poz. 795 (stan prawny na 19.05.2026), odczytany z API Sejmu 12.11.2026.
- [ ] Orzeczenia przywołane z sygnaturą sprawdzono w pełnych tekstach w SAOS: V CSK 362/07, V CSK 385/07, II CSK 84/12, I CSK 306/15, IV CSK 788/14. SAOS obejmuje orzeczenia SN do połowy 2016 r.; sn.pl blokuje odczyt automatyczny.
- [ ] Rażące niedbalstwo a art. 473 § 2 k.c.: nie znaleziono w SAOS orzeczenia SN, które można by przywołać z sygnaturą; spór opisano opisowo. Przed publikacją dobrać orzecznictwo SN i stanowiska doktryny (komentarze do art. 473 k.c.).
- [ ] Art. 385⁵ § 1¹ k.c. dodano ustawą z 5.08.2025 r. (Dz.U. 2025 poz. 1172), w życiu od 27.11.2025 r.; art. 13 tej ustawy nakazuje stosować brzmienie dotychczasowe do umów zawartych wcześniej. Potwierdzić zakres przepisu przejściowego.
- [ ] Oceny autorskie bez orzeczeń: ryzyko uznania limitu symbolicznego za sprzeczny z naturą stosunku (art. 353¹ k.c.), klauzule terminów zgłaszania roszczeń a art. 119 k.c., skutek częściowej nieważności klauzuli (art. 58 § 3 k.c.), niedopuszczalność obejścia art. 473 § 2 k.c. przez art. 443 k.c. Rozważyć uzupełnienie o orzecznictwo lub doktrynę.
- [ ] Opis rażącego niedbalstwa jako naruszenia elementarnych zasad ostrożności podano opisowo; dodać orzeczenie po weryfikacji.
- [ ] Wzorcowe brzmienie klauzuli ma charakter przykładowy; wartości w nawiasach kwadratowych do dostosowania.

### Utracona korzyść (lucrum cessans) w obrocie gospodarczym

Adres: `/legal/utracona-korzysc/`  Plik: `src/content/legal/utracona-korzysc.md`

- [ ] Teksty jednolite: Kodeks cywilny Dz.U. 2026 poz. 795 (stan prawny na 19.05.2026), Kodeks postępowania cywilnego Dz.U. 2026 poz. 468 (późniejszych zmian Dz.U. 2026 poz. 473, 830, 1003, 1046, 1296 nie badano pod kątem art. 232, 278, 316 i 322 k.p.c.), Kodeks spółek handlowych Dz.U. 2024 poz. 18 (zmiana Dz.U. 2026 poz. 1440 nie dotyczy art. 293, 295, 483 i 486). Teksty odczytane z API Sejmu 12.11.2026.
- [ ] Orzeczenia przywołane z sygnaturą sprawdzono w pełnych tekstach w SAOS: III CZP 61/03, I CSK 200/10, II CSK 388/09, I CSK 291/13, V CSK 338/11, III CSK 283/08, I CSK 262/09, II CSK 284/15, IV CSK 788/14, V CSK 385/07, V CSK 362/07, I CSK 315/10. Baza SAOS obejmuje orzeczenia SN do połowy 2016 r., a sn.pl blokuje odczyt automatyczny; sprawdzić, czy późniejsze orzecznictwo SN nie zmieniło przywołanych linii, zwłaszcza co do początkowej daty odsetek od odszkodowania.
- [ ] Wyroki I CSK 262/09 i II CSK 284/15 (odsetki od wezwania, odstępstwo przy cenach z daty wyrokowania) zapadły w sprawach deliktowych, w tym przeciwko Skarbowi Państwa. Zastosowanie tych reguł do kontraktowego obowiązku odszkodowawczego opisano jako wynikające z art. 455 k.c.; potwierdzić orzecznictwem dotyczącym art. 471 k.c.
- [ ] V CSK 338/11 dotyczył odpowiedzialności Skarbu Państwa za decyzje podatkowe (art. 417 k.c. w brzmieniu sprzed 1.09.2004 r. w zw. z art. 77 Konstytucji). Ocenić, czy przywołanie go w kontekście szkody wspólnika w sporach prywatnych nie wymaga uzupełnienia o orzecznictwo dotyczące art. 415 k.c. i art. 293 k.s.h.
- [ ] Początek biegu przedawnienia kontraktowego roszczenia odszkodowawczego (art. 120 § 1 zd. 2 w zw. z art. 455 k.c.) oraz stosowanie art. 118 zd. 2 k.c. (koniec roku) do terminu z art. 442¹ k.c. opisano bez orzeczeń; potwierdzić aktualny stan orzecznictwa SN.
- [ ] Art. 121 pkt 6 k.c. (zawieszenie biegu przedawnienia przez wniosek o zawezwanie do próby ugodowej) przywołano wg tekstu jednolitego; relację do art. 123 § 1 pkt 1 k.c. i przepisy przejściowe omawia opracowanie o przedawnieniu.
- [ ] Opis rozumienia klauzul consequential loss w prawie angielskim jest ogólny i nie odwołuje się do konkretnych orzeczeń; sprawdzić, czy sformułowanie jest wystarczająco ostrożne.
- [ ] Metody wyliczenia utraconej korzyści (utracona marża, porównanie okresów, benchmark) opisano jako praktykę sporów gospodarczych, bez orzeczeń; ewentualnie dodać orzecznictwo SN lub sądów apelacyjnych po weryfikacji.
- [ ] Ogólny obowiązek minimalizacji szkody wyprowadzono z art. 354 § 2 i art. 362 k.c. opisowo; dobrać orzeczenie SN, jeśli ma być przywołane.

## Dokumenty (/legal)

### Nota prawna

Adres: `/legal/nota-prawna/`  Plik: `src/content/dokumenty/nota-prawna.md`

- [ ] Uzupełnić dane kancelarii: forma prawna, pełna nazwa, adres, NIP, REGON, KRS, numer telefonu.
- [ ] Potwierdzić tytuł zawodowy Kingi Adamus i usunąć niewłaściwy wariant w § 2: adwokat (Izba Adwokacka w Warszawie, Okręgowa Rada Adwokacka w Warszawie) albo radca prawny (Okręgowa Izba Radców Prawnych w Warszawie); uzupełnić numer wpisu na listę i organ prowadzący listę.
- [ ] Obowiązek informacyjny z art. 5 ust. 5 ustawy o świadczeniu usług drogą elektroniczną (tekst jednolity Dz.U. 2024 poz. 1513) dotyczy usługodawcy będącego osobą fizyczną wykonującą zawód regulowany; przy usługodawcy w formie spółki dane w § 2 podaje się dla przejrzystości.
- [ ] Potwierdzić nazwę i adres internetowy zbioru zasad etyki właściwego samorządu (§ 3); nazw kodeksów etyki nie cytowano jako zweryfikowanych.
- [ ] Potwierdzić docelowy adres URL opracowań (założenie: proximalegal.pl/legal/<slug>) i to, że szablon wyświetla numery brzegowe akapitów, do których odwołuje się § 7.

### Polityka cookies

Adres: `/legal/polityka-cookies/`  Plik: `src/content/dokumenty/polityka-cookies.md`

- [ ] Numer artykułu zweryfikowany: art. 399 ustawy z dnia 12 lipca 2024 r. Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221, w życiu od 10.11.2024), tekst pierwotny z API Sejmu; tekstu jednolitego brak, zmiany Dz.U. 2025 poz. 637 i 820 oraz 2026 poz. 252, 815 i 1296 nie dotyczą art. 399 (sprawdzone 12.11.2026).
- [ ] Po każdym wdrożeniu sprawdzić w narzędziach deweloperskich przeglądarki (zakładki Application lub Storage), że strona nie zapisuje cookies, localStorage, sessionStorage ani IndexedDB, w tym na stronie po wysłaniu formularza.
- [ ] Potwierdzić, że w Netlify nie są włączone funkcje zapisujące informacje w przeglądarce (np. split testing, Netlify Identity, ochrona strony hasłem).
- [ ] Jeżeli kancelaria wdroży analitykę, zaktualizować § 3, dodać listę cookies (nazwa, dostawca, cel, okres) i baner zgód przed publikacją zmiany.

### Polityka prywatności

Adres: `/legal/polityka-prywatnosci/`  Plik: `src/content/dokumenty/polityka-prywatnosci.md`

- [ ] Uzupełnić dane administratora: forma prawna, pełna nazwa, adres siedziby, NIP, REGON, KRS, adres do korespondencji.
- [ ] Netlify, Inc. figuruje na liście EU-U.S. Data Privacy Framework (dataprivacyframework.gov, odczyt 12.11.2026): status aktywny dla EU-U.S. DPF, UK Extension i Swiss-U.S. DPF, dane inne niż kadrowe (Non-HR), data pierwotnej certyfikacji 13.02.2020, termin ponownej certyfikacji 17.12.2026. Po tej dacie sprawdzić status ponownie oraz to, czy decyzja wykonawcza Komisji (UE) 2023/1795 nadal obowiązuje.
- [ ] Potwierdzić, że administrator zawarł z Netlify umowę powierzenia przetwarzania (DPA, art. 28 RODO) i czy Netlify występuje wyłącznie jako podmiot przetwarzający; sprawdzić listę podprocesorów Netlify, w tym ewentualny zewnętrzny filtr spamu w Netlify Forms.
- [ ] Uzupełnić okres przechowywania logów serwera przez Netlify oraz okres przechowywania zgłoszeń w panelu Netlify Forms.
- [ ] Uzupełnić dostawcę poczty e-mail i ustalić, czy przekazuje dane poza EOG; jeśli tak, dopisać podstawę transferu w § 10.
- [ ] Potwierdzić okresy przechowywania z § 8 (propozycja 12 miesięcy dla korespondencji bez umowy) i to, czy administrator wyznaczył inspektora ochrony danych.
- [ ] Potwierdzić rodzaj tajemnicy zawodowej: adwokacka (art. 6 i art. 16a ustawy Prawo o adwokaturze, Dz.U. 2024 poz. 1564 ze zm.) albo radcowska (art. 3 ust. 3-6 i art. 5a ustawy o radcach prawnych, Dz.U. 2024 poz. 499 ze zm.) i usunąć niewłaściwy wariant.
- [ ] Tekst przy formularzu na stronie (Wysyłając, zgadzasz się na kontakt...) sugeruje zgodę jako podstawę; polityka opiera kontakt na art. 6 ust. 1 lit. b i f RODO. Rekomendacja: zmienić tekst na informacyjny, np. Dane z formularza przetwarzamy, aby odpowiedzieć na wiadomość. Szczegóły w polityce prywatności.
- [ ] Potwierdzić, czy zobowiązania z § 6 ust. 2 (brak łączenia logów z innymi danymi) i § 14 ust. 2 (poufność zapytań przed zawarciem umowy, sprawdzenie konfliktu interesów) odpowiadają praktyce kancelarii.

### Regulamin strony internetowej

Adres: `/legal/regulamin/`  Plik: `src/content/dokumenty/regulamin.md`

- [ ] Podstawa: art. 8 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną, tekst jednolity Dz.U. 2024 poz. 1513; zmiana Dz.U. 2026 poz. 1296 (w życiu od 6.11.2026) uchyliła rozdział 3 i dodała przepisy wykonujące akt o usługach cyfrowych, art. 5-8 nie zostały zmienione (odczyt z API Sejmu 12.11.2026).
- [ ] Prawo autorskie: art. 4, 29 i 34 ustawy o prawie autorskim i prawach pokrewnych, tekst jednolity Dz.U. 2025 poz. 24; zmiany Dz.U. 2026 poz. 1296 i 1477 nie dotyczą tych przepisów.
- [ ] Potwierdzić, komu przysługują autorskie prawa majątkowe do tekstów (kancelaria czy autorka) i dostosować § 8 ust. 1.
- [ ] Uzupełnić dane usługodawcy i datę wejścia regulaminu w życie.
- [ ] Rozważyć, czy kancelaria chce zastrzec w formie przeznaczonej do odczytu maszynowego wyłączenie eksploracji tekstów i danych; regulamin tego nie przesądza.
