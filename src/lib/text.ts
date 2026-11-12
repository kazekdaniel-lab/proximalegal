// Narzędzia tekstowe dla szablonów (bez zależności).

/** Usuwa składnię Markdown z akapitu (linki, pogrubienia, kursywy). */
export function stripMd(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Pierwsze N zwykłych akapitów treści (bez nagłówków, list, tabel, cytatów). */
export function firstParagraphs(body: string, n = 2, maxLen = 400): string[] {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const out: string[] = [];
  for (const b of blocks) {
    if (/^(#|>|\||-\s|\*\s|\d+\.\s|<)/.test(b)) continue;
    let t = stripMd(b);
    if (t.length > maxLen) t = t.slice(0, t.lastIndexOf(' ', maxLen)) + '...';
    out.push(t);
    if (out.length >= n) break;
  }
  return out;
}

/** Liczba słów treści Markdown. */
export const wordCount = (body: string) => stripMd(body).split(/\s+/).filter(Boolean).length;
