// Generuje obrazy OG (1200x630), logo-512.png, favicon-32.png i apple-touch-icon.png
import { fileURLToPath } from 'node:url';
// przez headless Chrome. Uruchom: npm run og (po zmianie kolorów lub haseł).
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'public');
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const tmp = join(tmpdir(), 'pl-og');
mkdirSync(tmp, { recursive: true });
mkdirSync(join(OUT, 'og'), { recursive: true });

const font = (pkg, file) => 'data:font/woff2;base64,' + readFileSync(join(ROOT, 'node_modules/@fontsource-variable', pkg, 'files', file)).toString('base64');
const serif = font('source-serif-4', 'source-serif-4-latin-ext-opsz-normal.woff2');
const serifL = font('source-serif-4', 'source-serif-4-latin-opsz-normal.woff2');
const sans = font('instrument-sans', 'instrument-sans-latin-ext-wdth-normal.woff2');
const sansL = font('instrument-sans', 'instrument-sans-latin-wdth-normal.woff2');

const css = `
@font-face{font-family:S;src:url(${serifL}) format('woff2');font-weight:200 900;unicode-range:U+0000-00FF,U+2000-206F}
@font-face{font-family:S;src:url(${serif}) format('woff2');font-weight:200 900;unicode-range:U+0100-02BA,U+1E00-1EFF}
@font-face{font-family:I;src:url(${sansL}) format('woff2');font-weight:400 700;unicode-range:U+0000-00FF,U+2000-206F}
@font-face{font-family:I;src:url(${sans}) format('woff2');font-weight:400 700;unicode-range:U+0100-02BA,U+1E00-1EFF}
*{margin:0;box-sizing:border-box}html,body{width:1200px;height:630px;overflow:hidden}
body{background:#0D1416;color:#F2F6F5;font-family:I,sans-serif;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px;font-family:S;font-size:30px;font-weight:600}.brand span{font-weight:400;color:#A1B0B3}
h1{font-family:S;font-weight:500;font-size:76px;line-height:1.04;letter-spacing:-.015em;max-width:960px}
.k{font-size:24px;font-weight:600;color:#5FD0C1;margin-bottom:22px}
.axis{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid #2A3335;padding-top:0}
.seg{padding-right:20px}.ticks{height:18px;margin-bottom:14px;background:linear-gradient(#5FD0C1,#5FD0C1) left top/2px 18px no-repeat,repeating-linear-gradient(to right,#2A3335 0 1px,transparent 1px 10px) left bottom/100% 8px no-repeat}
.days{display:grid;grid-template-columns:repeat(30,1fr);gap:2px;height:18px;margin-bottom:14px}.days i{background:rgba(242,180,138,.3)}.days i:nth-child(-n+7){background:#F2B48A}
.n{font-family:S;font-size:22px;color:#5FD0C1}.t{font-family:S;font-size:22px;margin-top:4px}.r .n{color:#F2B48A}
.peach .k{color:#F2B48A}.peach{background:#2E1F15}.peach h1{color:#F2B48A}
.sheet{background:#FBFDFC;color:#0D1416;border-radius:6px;padding:28px 36px 28px 70px;position:relative;font-family:S;font-size:22px;line-height:1.5}
.sheet b{position:absolute;left:28px;top:32px;font-family:I;font-size:15px;color:#0E5A52}
`;
const logo = (s = 44) => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><path d="M16 2.5 29.5 16 16 29.5 2.5 16Z" fill="none" stroke="#5FD0C1" stroke-width="1.75" stroke-linejoin="round"/><path d="M20.5 7.5 24.5 11.5 20.5 15.5 16.5 11.5Z" fill="#5FD0C1"/></svg>`;
const brand = `<div class="brand">${logo()}<div>Proxima <span>Legal</span></div></div>`;
const axis = `<div class="axis">${['01|Start i rejestracja', '02|Finansowanie i M&A', '03|Bieżąca obsługa'].map((x) => { const [n, t] = x.split('|'); return `<div class="seg"><div class="ticks"></div><div class="n">${n}</div><div class="t">${t}</div></div>`; }).join('')}<div class="seg r"><div class="days">${'<i></i>'.repeat(30)}</div><div class="n">04</div><div class="t">Kryzys i restrukturyzacja</div></div></div>`;

const pages = {
  default: `<body>${brand}<div><p class="k">Kancelaria dla spółek, Warszawa i online</p><h1>Prawo, które nadąża za Twoim biznesem.</h1></div>${axis}</body>`,
  rescue: `<body class="peach">${brand}<div><p class="k">Legal Rescue</p><h1>Spółka traci płynność. Zarząd ma 30 dni na decyzję.</h1></div><div class="days" style="height:28px">${'<i></i>'.repeat(30)}</div></body>`,
  legal: `<body>${brand}<div><p class="k">Opracowania prawne</p><h1>Utracona korzyść, kara umowna, przedawnienie.</h1></div><div class="sheet"><b>1</b>Teza, podstawa prawna, numery brzegowe i stan prawny przy każdym opracowaniu.</div></body>`,
  wiedza: `<body>${brand}<div><p class="k">Baza wiedzy</p><h1>Prawo spółek opisane językiem przedsiębiorcy.</h1></div>${axis}</body>`,
};

const shot = (name, htmlBody, w, h, out) => {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>${htmlBody}</html>`);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${join(tmp, 'prof')}`, `--window-size=${w},${h}`, `--screenshot=${out}`, '--virtual-time-budget=2000', `file://${file}`], { stdio: 'ignore' });
  console.log('zapisano', out.replace(ROOT, ''));
};

for (const [name, body] of Object.entries(pages)) shot(`og-${name}`, body, 1200, 630, join(OUT, 'og', `${name}.png`));
const icon = (s) => `<body style="width:${s}px;height:${s}px;padding:0;display:grid;place-items:center;background:#0D1416">${logo(Math.round(s * 0.74))}</body>`;
shot('logo', icon(512), 512, 512, join(OUT, 'logo-512.png'));
shot('apple', icon(180), 180, 180, join(OUT, 'apple-touch-icon.png'));
shot('fav', icon(32), 32, 32, join(OUT, 'favicon-32.png'));
