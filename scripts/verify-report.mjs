// Zbiera punkty `verify` z frontmattera wszystkich treści i znaczniki [DO UZUPEŁNIENIA]/[DO POTWIERDZENIA]
// do jednego pliku docs/DO-WERYFIKACJI.md. Uruchom: node scripts/verify-report.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { missingFields } from '../src/lib/kancelaria-tokens.mjs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const sections = [
  ['Baza wiedzy', 'src/content/baza-wiedzy', '/baza-wiedzy/'],
  ['Opracowania prawne (/legal)', 'src/content/legal', '/legal/'],
  ['Dokumenty (/legal)', 'src/content/dokumenty', '/legal/'],
];
const out = [
  '# Do weryfikacji przed publikacją',
  '',
  `Wygenerowano: ${new Date().toISOString().slice(0, 10)} skryptem \`scripts/verify-report.mjs\`. Nie edytuj ręcznie, popraw źródło i uruchom skrypt ponownie.`,
  '',
  'Każdy tekst merytoryczny napisano na podstawie aktualnych tekstów jednolitych ustaw (API Sejmu). Przed publikacją prawnik prowadzący musi przeczytać tekst i odhaczyć punkty poniżej.',
  '',
];
const missing = missingFields();
out.push('## Dane kancelarii (src/data/kancelaria.json)', '');
out.push('Wpisz brakujące wartości w jednym pliku. Strona, stopka, dokumenty i dane dla Google zaktualizują się po `npm run build`. Tytuł zawodowy sam przełącza w dokumentach tajemnicę, samorząd, ustawę i zasady etyki.', '');
missing.forEach((m) => out.push(`- [ ] \`${m.key}\`: ${m.label}`));
if (!missing.length) out.push('- komplet');
out.push('');
let total = missing.length;
for (const [label, dir, base] of sections) {
  out.push(`## ${label}`, '');
  for (const f of readdirSync(join(ROOT, dir)).filter((x) => x.endsWith('.md')).sort()) {
    const src = readFileSync(join(ROOT, dir, f), 'utf8');
    const fm = yaml.load(src.split(/^---$/m)[1] ?? '') ?? {};
    const body = src.split(/^---$/m).slice(2).join('---');
    const ph = [...new Set(body.match(/\[DO (?:UZUPEŁNIENIA|POTWIERDZENIA)[^\]]*\]/g) ?? [])];
    const items = fm.verify ?? [];
    out.push(`### ${fm.title ?? f}`, '', `Adres: \`${base}${f.replace(/\.md$/, '')}/\`  Plik: \`${dir}/${f}\``, '');
    items.forEach((v) => out.push(`- [ ] ${v}`));
    ph.forEach((p) => out.push(`- [ ] Uzupełnij w treści: ${p}`));
    if (!items.length && !ph.length) out.push('- brak uwag');
    out.push('');
    total += items.length + ph.length;
  }
}
out.splice(5, 0, `Punktów do sprawdzenia: ${total}.`, '');
writeFileSync(join(ROOT, 'docs/DO-WERYFIKACJI.md'), out.join('\n'));
console.log(`docs/DO-WERYFIKACJI.md: ${total} punktów`);
