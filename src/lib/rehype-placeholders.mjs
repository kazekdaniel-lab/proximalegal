// Zamienia znaczniki [DO UZUPEŁNIENIA: ...] i [DO POTWIERDZENIA: ...] w treści Markdown
// na <span class="placeholder">, żeby braki były widoczne i łatwe do znalezienia przed publikacją.
import { tokens } from './kancelaria-tokens.mjs';

const RE = /\[DO (?:UZUPEŁNIENIA|POTWIERDZENIA)[^\]]*\]/g;
const TOKEN = /\{\{([a-z-]+)\}\}/g;
let TOK = {};

function transform(node) {
  if (!node.children) return;
  // Polski cudzysłów: smartypants daje angielskie otwarcie (U+201C), w polszczyźnie otwiera „ (U+201E).
  for (const c of node.children) {
    if (c.type !== 'text') continue;
    c.value = c.value.replace(/\u201C/g, '\u201E');
    c.value = c.value.replace(TOKEN, (m, key) => (key in TOK ? TOK[key] : m));
  }
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text' && RE.test(child.value)) {
      RE.lastIndex = 0;
      let last = 0;
      let m;
      while ((m = RE.exec(child.value))) {
        if (m.index > last) out.push({ type: 'text', value: child.value.slice(last, m.index) });
        out.push({
          type: 'element',
          tagName: 'span',
          properties: { className: ['placeholder'] },
          children: [{ type: 'text', value: m[0] }],
        });
        last = m.index + m[0].length;
      }
      if (last < child.value.length) out.push({ type: 'text', value: child.value.slice(last) });
    } else {
      transform(child);
      out.push(child);
    }
  }
  node.children = out;
}

export default function rehypePlaceholders() {
  return (tree) => {
    TOK = tokens(); // czytane przy każdym renderze, więc zmiana kancelaria.json działa bez restartu
    transform(tree);
  };
}
