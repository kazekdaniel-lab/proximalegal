// Jeden skrypt dla całej strony. Bez zależności. Strona działa bez JS; skrypt dodaje zachowania.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

// --- stare adresy z prototypu (#abonament itd.) -> nowe adresy ---
const legacy: Record<string, string> = {
  '#home': '/', '#abonament': '/abonament-prawny/', '#rescue': '/legal-rescue/', '#specjalizacje': '/specjalizacje/',
  '#start': '/specjalizacje/start-i-rejestracja/', '#finansowanie': '/specjalizacje/finansowanie-i-ma/',
  '#obsluga': '/specjalizacje/biezaca-obsluga/', '#kryzys': '/specjalizacje/kryzys-i-restrukturyzacja/',
  '#doradztwo': '/doradztwo-strategiczne/', '#o-nas': '/o-nas/', '#wiedza': '/baza-wiedzy/',
  '#artykul': '/baza-wiedzy/odpowiedzialnosc-zarzadu-art-299-ksh/', '#faq': '/faq/', '#kontakt': '/kontakt/',
  '#polityka': '/legal/polityka-prywatnosci/',
};
if (location.pathname === '/' && legacy[location.hash] && legacy[location.hash] !== '/') {
  location.replace(legacy[location.hash]);
}

// --- nawigacja: panele rozwijane ---
const items = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-item]'));
const closeAll = (except?: HTMLElement) => {
  items.forEach((it) => {
    if (it === except) return;
    it.classList.remove('is-open');
    it.querySelector('[data-nav-trigger]')?.setAttribute('aria-expanded', 'false');
  });
};
items.forEach((it) => {
  const btn = it.querySelector<HTMLButtonElement>('[data-nav-trigger]');
  btn?.addEventListener('click', () => {
    const open = !it.classList.contains('is-open');
    closeAll(it);
    it.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('click', (e) => {
  if (!(e.target as HTMLElement).closest('[data-nav-item]')) closeAll();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const open = items.find((it) => it.classList.contains('is-open'));
    closeAll();
    open?.querySelector<HTMLButtonElement>('[data-nav-trigger]')?.focus();
    if (root.classList.contains('menu-open')) toggleMenu(false);
  }
});

// --- menu mobilne ---
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
function toggleMenu(force?: boolean) {
  const open = force ?? !root.classList.contains('menu-open');
  root.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
}
menuBtn?.addEventListener('click', () => toggleMenu());
window.matchMedia('(min-width: 1080px)').addEventListener('change', (m) => m.matches && toggleMenu(false));

// --- ruch: jedna sekwencja na element, tylko gdy dozwolony ---
if (!reduceMotion && 'IntersectionObserver' in window) {
  root.classList.add('js-motion');

  // opóźnienia kaskadowe ustawiane przez CSSOM (zgodne z CSP)
  document.querySelectorAll<HTMLElement>('.axis').forEach((axis) => {
    axis.querySelectorAll<HTMLElement>('.axis__days span').forEach((s, i) => (s.style.transitionDelay = `${900 + i * 28}ms`));
    axis.querySelectorAll<HTMLElement>('.axis__text').forEach((t, i) => (t.style.transitionDelay = `${250 + i * 160}ms`));
    axis.querySelectorAll<HTMLElement>('.axis__ticks').forEach((t, i) => {
      const before = t; // pseudo-element dziedziczy opóźnienie przez zmienną
      before.style.setProperty('--d', `${i * 160}ms`);
    });
  });
  document.querySelectorAll<HTMLElement>('.days').forEach((d) => {
    d.querySelectorAll<HTMLElement>('.days-grid span').forEach((s, i) => (s.style.transitionDelay = `${i * 35}ms`));
  });
  document.querySelectorAll<SVGPathElement>('.team-diagram .draw').forEach((p) => {
    const len = Math.ceil(p.getTotalLength?.() ?? 400);
    p.style.setProperty('--len', String(len));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
  );
  document.querySelectorAll('.axis, .days, .team-diagram').forEach((el) => io.observe(el));
}

// --- indeks specjalizacji: podgląd zdjęcia ---
document.querySelectorAll<HTMLElement>('[data-spec-index]').forEach((wrap) => {
  const rows = Array.from(wrap.querySelectorAll<HTMLElement>('[data-spec]'));
  const imgs = Array.from(wrap.querySelectorAll<HTMLElement>('[data-spec-img]'));
  const cap = wrap.querySelector<HTMLElement>('[data-spec-caption]');
  const activate = (id: string) => {
    rows.forEach((r) => r.classList.toggle('is-active', r.dataset.spec === id));
    imgs.forEach((im) => im.classList.toggle('is-active', im.dataset.specImg === id));
    const row = rows.find((r) => r.dataset.spec === id);
    if (cap && row) cap.textContent = row.dataset.caption ?? '';
  };
  rows.forEach((r) => {
    r.addEventListener('mouseenter', () => activate(r.dataset.spec!));
    r.addEventListener('focus', () => activate(r.dataset.spec!));
  });
});

// --- baza wiedzy: filtr kategorii ---
document.querySelectorAll<HTMLElement>('[data-filter]').forEach((bar) => {
  const btns = Array.from(bar.querySelectorAll<HTMLButtonElement>('button[data-cat]'));
  const list = document.querySelector<HTMLElement>(bar.dataset.filter!);
  const cards = Array.from(list?.querySelectorAll<HTMLElement>('[data-cat]') ?? []);
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  const apply = (cat: string) => {
    btns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cat === cat)));
    let n = 0;
    cards.forEach((c) => {
      const show = cat === 'all' || c.dataset.cat === cat;
      (c.closest('li') ?? c).hidden = !show;
      if (show) n++;
    });
    if (status) status.textContent = `Widocznych artykułów: ${n}`;
    const url = new URL(location.href);
    if (cat === 'all') url.searchParams.delete('kategoria');
    else url.searchParams.set('kategoria', cat);
    history.replaceState(null, '', url);
  };
  btns.forEach((b) => b.addEventListener('click', () => apply(b.dataset.cat!)));
  const initial = new URL(location.href).searchParams.get('kategoria');
  if (initial && btns.some((b) => b.dataset.cat === initial)) apply(initial);
});

// --- spis treści: aktywna sekcja ---
const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-toc] a'));
if (tocLinks.length && 'IntersectionObserver' in window) {
  const map = new Map<Element, HTMLAnchorElement>();
  tocLinks.forEach((a) => {
    const el = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (el) map.set(el, a);
  });
  const tio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove('is-current'));
          map.get(e.target)?.classList.add('is-current');
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );
  map.forEach((_, el) => tio.observe(el));
}

// --- formularz kontaktowy: walidacja po stronie przeglądarki ---
document.querySelectorAll<HTMLFormElement>('form[data-validate]').forEach((form) => {
  form.setAttribute('novalidate', '');
  form.addEventListener('submit', (e) => {
    let firstBad: HTMLElement | null = null;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]').forEach((f) => {
      const err = document.getElementById(`${f.id}-error`);
      const bad = !f.value.trim();
      f.setAttribute('aria-invalid', String(bad));
      if (err) err.hidden = !bad;
      if (bad && !firstBad) firstBad = f;
    });
    if (firstBad) {
      e.preventDefault();
      (firstBad as HTMLElement).focus();
    }
  });
});
