// Kontrola jakości po buildzie: SEO, linki wewnętrzne, CSP, myślniki. Kod wyjścia 1 = błąd.
import { fileURLToPath } from 'node:url';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else files.push(p);
  }
})(DIST);

const html = files.filter((f) => f.endsWith('.html'));
const errors = [];
const warns = [];
const titles = new Map();
const descs = new Map();

const resolve = (href) => {
  const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') return existsSync(join(DIST, 'index.html'));
  const p = join(DIST, clean);
  return existsSync(p) && statSync(p).isFile() ? true : existsSync(join(p, 'index.html'));
};

for (const f of html) {
  const rel = '/' + relative(DIST, f).replace(/index\.html$/, '');
  const s = readFileSync(f, 'utf8');
  const noindex = /name="robots" content="noindex/.test(s);

  const title = s.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = s.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) errors.push(`${rel}: brak <title>`);
  if (!desc) errors.push(`${rel}: brak meta description`);
  if (!/rel="canonical"/.test(s)) errors.push(`${rel}: brak canonical`);
  if (!noindex && title) {
    if (title.length > 70) warns.push(`${rel}: title ${title.length} zn.`);
    titles.set(title, [...(titles.get(title) ?? []), rel]);
  }
  if (!noindex && desc) {
    if (desc.length < 110 || desc.length > 170) warns.push(`${rel}: description ${desc.length} zn.`);
    descs.set(desc, [...(descs.get(desc) ?? []), rel]);
  }
  const h1 = (s.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} x <h1>`);
  if (/\sstyle="/.test(s)) errors.push(`${rel}: atrybut style= (łamie CSP)`);
  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { errors.push(`${rel}: niepoprawny JSON-LD`); }
  }
  const text = s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  if (/[\u2013\u2014]/.test(text)) errors.push(`${rel}: półpauza lub pauza w treści`);
  for (const m of s.matchAll(/href="(\/[^"]*)"/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    if (!resolve(href)) errors.push(`${rel}: martwy link ${href}`);
  }
  for (const m of s.matchAll(/src="(\/[^"]*)"/g)) {
    if (!resolve(m[1])) errors.push(`${rel}: brak zasobu ${m[1]}`);
  }
  for (const m of s.matchAll(/<img (?![^>]*\balt[\s=>])[^>]*>/g)) errors.push(`${rel}: <img> bez alt`);
}
for (const [t, pages] of titles) if (pages.length > 1) errors.push(`duplikat title "${t}": ${pages.join(', ')}`);
for (const [d, pages] of descs) if (pages.length > 1) errors.push(`duplikat description: ${pages.join(', ')}`);

for (const f of files.filter((x) => /\.(txt|xml)$/.test(x))) {
  if (/[\u2013\u2014]/.test(readFileSync(f, 'utf8'))) errors.push(`${relative(DIST, f)}: półpauza lub pauza`);
}

console.log(`Sprawdzono ${html.length} stron HTML.`);
if (warns.length) console.log(`Ostrzeżenia (${warns.length}):\n  ` + warns.join('\n  '));
if (errors.length) {
  console.error(`BŁĘDY (${errors.length}):\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('OK');
