// Integracja Astro: polska typografia w gotowym HTML (po buildzie).
// - twarda spacja po jednoliterowych wyrazach (a, i, o, u, w, z) i po "art.", "§", "ust.", "pkt", "poz."
// - twarda spacja między liczbą a jednostką (30 dni, 9 900 zł, 5 min)
// Zmienia wyłącznie tekst między znacznikami. Pomija <script>, <style>, <pre>, <code>, <textarea>,
// więc nie narusza hashy CSP liczonych dla skryptów inline.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NB = ' ';
const SKIP = /(<(script|style|pre|code|textarea)\b[\s\S]*?<\/\2>)/gi;

function fixText(t) {
  return t
    .replace(/(^|[\s(„"])([aiouwzAIOUWZ])\s+(?=\S)/g, `$1$2${NB}`)
    .replace(/(^|[\s(„"])([aiouwzAIOUWZ])\s+(?=\S)/g, `$1$2${NB}`) // drugi przebieg: "i w ..."
    .replace(/\b(art\.|ust\.|pkt|poz\.|nr|§)\s+(?=[\d(])/g, `$1${NB}`)
    .replace(/(\d)\s+(?=(zł|dni|dnia|min|mln|mld|tys\.|lat|lata|miesięcy|miesiące|miesiąca|tygodnie|tygodni|godzin|godziny|EUR|euro|proc\.|%|r\.)(?![\p{L}]))/gu, `$1${NB}`);
}

function transformHtml(html) {
  return html
    .split(SKIP)
    .map((part, i, arr) => {
      // co trzeci element to grupa przechwycona (nazwa tagu) z split, pomijamy ją
      if (/^<(script|style|pre|code|textarea)\b/i.test(part)) return part;
      if (/^(script|style|pre|code|textarea)$/i.test(part) && i > 0 && /^<(script|style|pre|code|textarea)\b/i.test(arr[i - 1] ?? '')) return '';
      return part.replace(/>([^<>]+)</g, (m, text) => `>${fixText(text)}<`);
    })
    .join('');
}

export default function polishTypography() {
  return {
    name: 'polish-typography',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let n = 0;
        (function walk(d) {
          for (const f of readdirSync(d)) {
            const p = join(d, f);
            if (statSync(p).isDirectory()) walk(p);
            else if (f.endsWith('.html')) {
              const src = readFileSync(p, 'utf8');
              const out = transformHtml(src);
              if (out !== src) { writeFileSync(p, out); n++; }
            }
          }
        })(root);
        logger.info(`twarde spacje wstawione w ${n} plikach HTML`);
      },
    },
  };
}
