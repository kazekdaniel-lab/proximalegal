// Szuka półpauzy (U+2013) i pauzy (U+2014) w źródłach. Kod wyjścia 1 = znaleziono.
import { fileURLToPath } from 'node:url';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const hits = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    if (['node_modules', 'dist', '.astro', '.git', 'zdjecia'].includes(f)) continue;
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|ts|mjs|md|css|txt|toml|json)$/.test(f)) {
      readFileSync(p, 'utf8').split('\n').forEach((l, i) => { if (/[\u2013\u2014]/.test(l)) hits.push(`${p.replace(ROOT, '')}:${i + 1}`); });
    }
  }
})(ROOT);
if (hits.length) { console.error('Półpauza/pauza:\n  ' + hits.join('\n  ')); process.exit(1); }
console.log('OK: brak półpauz i pauz');
