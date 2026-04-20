// ── CUSTOM CURSOR ────────────────────────────────────────────────────────────

const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .nav-link').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ── NAV — SECTION ACTIVE + INDEX ─────────────────────────────────────────────

const sections  = document.querySelectorAll('.section[data-index]');
const navLinks  = document.querySelectorAll('.nav-link');
const navIndex  = document.getElementById('navIndex');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id    = entry.target.id;
    const index = entry.target.dataset.index;

    // Update nav index counter
    navIndex.textContent = String(parseInt(index) + 1).padStart(2, '0');

    // Update active link
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

const revealEls = document.querySelectorAll(
  '.principe-grid, .body-lg, .body-sm, .principe-stat, ' +
  '.typo-row, .typo-contrast, ' +
  '.espace-demo, ' +
  '.lisib-item, .lisib-rule, ' +
  '.manifeste-body'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    // Stagger siblings
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => {
      entry.target.classList.add('visible');
    }, idx * 80);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ── MANIFESTE TITLE LINES ─────────────────────────────────────────────────────

const mLines = document.querySelectorAll('.m-line');

const manifesteObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    mLines.forEach((line, i) => {
      setTimeout(() => line.classList.add('visible'), i * 200);
    });
    manifesteObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

const manifeste = document.querySelector('.manifeste-title');
if (manifeste) manifesteObserver.observe(manifeste);

// ── NAV SCROLL BEHAVIOR ───────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── TYPO ROW HOVER — SCALE EFFECT ────────────────────────────────────────────

document.querySelectorAll('.typo-row').forEach(row => {
  const specimen = row.querySelector('.typo-specimen');
  if (!specimen) return;

  row.addEventListener('mouseenter', () => {
    specimen.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
    specimen.style.transform = 'translateX(8px)';
  });
  row.addEventListener('mouseleave', () => {
    specimen.style.transform = 'translateX(0)';
  });
});

// ── CONTRAST LINE — LETTERS SPLIT ON HOVER ───────────────────────────────────

const cHeavy = document.querySelector('.c-heavy');
if (cHeavy) {
  const originalText = cHeavy.textContent;
  cHeavy.addEventListener('mouseenter', () => {
    cHeavy.style.letterSpacing = '8px';
    cHeavy.style.transition = 'letter-spacing 0.4s ease';
  });
  cHeavy.addEventListener('mouseleave', () => {
    cHeavy.style.letterSpacing = '-1px';
  });
}

// ── STAT NUMBER — COUNT UP ────────────────────────────────────────────────────

const statNum = document.querySelector('.stat-num');
if (statNum) {
  let counted = false;
  const statObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || counted) return;
    counted = true;
    let start = 0;
    const target = 80;
    const duration = 1200;
    const step = 16;
    const increment = (target / duration) * step;
    const timer = setInterval(() => {
      start = Math.min(start + increment, target);
      statNum.textContent = Math.round(start) + '%';
      if (start >= target) clearInterval(timer);
    }, step);
  }, { threshold: 0.5 });
  statObserver.observe(statNum);
}
