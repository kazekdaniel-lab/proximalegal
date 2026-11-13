// Buduje wersję podglądową na GitHub Pages: https://kazekdaniel-lab.github.io/proximalegal/
// npm run pages:build  ->  dist-pages/ (noindex, pasek "podgląd", formularz wyłączony)
// npm run pages:deploy ->  wypycha dist-pages/ na gałąź gh-pages
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'dist-pages');
const BASE = '/proximalegal';

rmSync(join(ROOT, '.astro'), { recursive: true, force: true });
rmSync(join(ROOT, 'node_modules/.astro'), { recursive: true, force: true });
execSync('npx astro build', { cwd: ROOT, stdio: 'inherit', env: { ...process.env, PUBLIC_PREVIEW: '1' } });

// Astro dodaje base do zasobów (_astro). Linki wpisane w szablonach ("/kontakt/") dopisujemy tutaj.
// Zmieniamy tylko atrybuty poza <script>/<style>, więc hashe CSP skryptów zostają ważne.
const SKIP = /(<(?:script|style)\b[\s\S]*?<\/(?:script|style)>)/gi;
const fixUrl = (u) => (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(BASE + '/') && u !== BASE ? BASE + u : u);
const fixAttrs = (html) =>
  html
    .replace(/\b(href|src|action|poster)="([^"]*)"/g, (m, a, v) => `${a}="${fixUrl(v)}"`)
    .replace(/\bsrcset="([^"]*)"/g, (m, v) => `srcset="${v.split(',').map((p) => p.trim().replace(/^(\S+)/, (u) => fixUrl(u))).join(', ')}"`);

const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : files.push(p);
  }
})(OUT);

let n = 0;
for (const f of files.filter((x) => x.endsWith('.html'))) {
  const src = readFileSync(f, 'utf8');
  const out = src.split(SKIP).map((part) => (/^<(script|style)\b/i.test(part) ? part : fixAttrs(part))).join('');
  if (out !== src) { writeFileSync(f, out); n++; }
}
writeFileSync(join(OUT, '.nojekyll'), ''); // bez tego GitHub Pages pomija katalog _astro
for (const f of ['.htaccess', 'formularz.php', 'robots.txt']) rmSync(join(OUT, f), { force: true });

// kontrola: każdy link wewnętrzny musi wskazywać istniejący plik
const bad = [];
for (const f of files.filter((x) => x.endsWith('.html') && existsSync(x))) {
  const s = readFileSync(f, 'utf8');
  for (const m of s.matchAll(/\b(?:href|src)="(\/proximalegal\/[^"#?]*)/g)) {
    const p = join(OUT, decodeURIComponent(m[1].slice(BASE.length)));
    if (!(existsSync(p) && statSync(p).isFile()) && !existsSync(join(p, 'index.html'))) bad.push(`${relative(OUT, f)} -> ${m[1]}`);
  }
}
console.log(`dist-pages: poprawiono linki w ${n} plikach HTML`);
if (bad.length) { console.error(`Martwe linki (${bad.length}):\n  ` + [...new Set(bad)].slice(0, 30).join('\n  ')); process.exit(1); }
console.log('OK: wszystkie linki wewnętrzne działają pod ' + BASE + '/');
