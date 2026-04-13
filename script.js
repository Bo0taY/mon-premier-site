// ── ANNOTATION TOOLTIP ──────────────────────────────────────────────────────

const overlay   = document.getElementById('tooltipOverlay');
const ttLabel   = document.getElementById('ttLabel');
const ttRole    = document.getElementById('ttRole');
const ttTech    = document.getElementById('ttTech');
const closeBtn  = document.getElementById('tooltipClose');

// Open tooltip on click of any annotated element
document.querySelectorAll('.annotated').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();

    const label = el.dataset.label || '—';
    const role  = el.dataset.role  || '—';
    const tech  = el.dataset.tech  || '—';

    ttLabel.textContent = label;
    ttRole.textContent  = role;
    ttTech.innerHTML    = tech; // allows HTML entities like &lt;

    overlay.classList.add('active');
  });
});

// Close on overlay click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeTooltip();
});

// Close on button click
closeBtn.addEventListener('click', closeTooltip);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTooltip();
});

function closeTooltip() {
  overlay.classList.remove('active');
}

// ── ACTIVE NAV LINK ON SCROLL ────────────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── PREVENT FORM SUBMIT ──────────────────────────────────────────────────────

document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulaire intercepté — ceci est un démonstrateur, aucune donnée n\'est envoyée.');
});
