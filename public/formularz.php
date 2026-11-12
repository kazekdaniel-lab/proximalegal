<?php
// Formularz kontaktowy proximalegal.pl. Działa na zwykłym hostingu z PHP 7.4+ (np. lh.pl).
// Nie zapisuje danych na serwerze i nie ustawia cookies: wysyła wiadomość e-mailem
// na skrzynkę kancelarii i przekierowuje na stronę z podziękowaniem.
declare(strict_types=1);

const ODBIORCA = 'kontakt@proximalegal.pl';
const NADAWCA = 'formularz@proximalegal.pl'; // adres w domenie strony, żeby przechodził SPF
const SUKCES = '/kontakt/dziekujemy/';
const POWROT = '/kontakt/';

function wroc(string $adres): void
{
    header('Location: ' . $adres, true, 303);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    wroc(POWROT);
}

// Pułapki na boty: ukryte pole i zbyt szybkie wysłanie (znacznik czasu ustawia skrypt strony).
if (!empty($_POST['firma-www'])) {
    wroc(SUKCES);
}
$pokazano = (int) ($_POST['t'] ?? 0);
if ($pokazano > 0 && (time() - intdiv($pokazano, 1000)) < 3) {
    wroc(SUKCES);
}

function pole(string $klucz, int $limit, bool $wiele = false): string
{
    $wartosc = (string) ($_POST[$klucz] ?? '');
    $wartosc = str_replace(["\0", "\r"], '', $wartosc);
    if (!$wiele) {
        $wartosc = str_replace("\n", ' ', $wartosc); // brak nowych linii = brak wstrzykiwania nagłówków
    }
    return trim(mb_substr($wartosc, 0, $limit, 'UTF-8'));
}

$imie = pole('imie-nazwisko', 120);
$kontakt = pole('kontakt', 160);
$wiadomosc = pole('wiadomosc', 5000, true);
$pilne = isset($_POST['sprawa-pilna']);

if ($imie === '' || $kontakt === '' || $wiadomosc === '') {
    wroc(POWROT . '?blad=braki');
}

$temat = ($pilne ? '[PILNE] ' : '') . 'Formularz proximalegal.pl: ' . $imie;
$tresc = 'Imię i nazwisko: ' . $imie . "\n"
    . 'Kontakt: ' . $kontakt . "\n"
    . 'Sprawa pilna (spółka traci płynność): ' . ($pilne ? 'TAK' : 'nie') . "\n\n"
    . $wiadomosc . "\n\n"
    . "--\nWysłano przez formularz na proximalegal.pl, " . date('Y-m-d H:i') . "\n";

$naglowki = [
    'From' => 'Proxima Legal <' . NADAWCA . '>',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
    'MIME-Version' => '1.0',
];
if (filter_var($kontakt, FILTER_VALIDATE_EMAIL)) {
    $naglowki['Reply-To'] = $kontakt;
}

$wyslano = mail(ODBIORCA, '=?UTF-8?B?' . base64_encode($temat) . '?=', $tresc, $naglowki, '-f' . NADAWCA);
wroc($wyslano ? SUKCES : POWROT . '?blad=wysylka');
