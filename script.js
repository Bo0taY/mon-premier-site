const DATA = {

  header: {
    title: 'Header',
    role: 'Zone de navigation principale — reste visible pendant le scroll grâce à position: sticky.',
    html: `<span class="t-tag">&lt;header&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/"</span><span class="t-tag">&gt;</span>Logo<span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;nav&gt;</span>
    <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#section"</span><span class="t-tag">&gt;</span>
      Lien
    <span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;/nav&gt;</span>
<span class="t-tag">&lt;/header&gt;</span>`,
    css: `<span class="t-sel">header</span> {
  <span class="t-prop">position</span>: <span class="t-num">sticky</span>;
  <span class="t-prop">top</span>: <span class="t-num">0</span>;
  <span class="t-prop">z-index</span>: <span class="t-num">100</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">padding</span>: <span class="t-num">20px 48px</span>;
  <span class="t-prop">background</span>: <span class="t-num">white</span>;
  <span class="t-prop">border-bottom</span>:
    <span class="t-num">1px solid #eee</span>;
}`,
    js: `<span class="t-cmt">// Ombre au scroll</span>
<span class="t-fn">window</span>.<span class="t-kw">addEventListener</span>(
  <span class="t-str">'scroll'</span>, () => {
  header.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(
    <span class="t-str">'scrolled'</span>,
    <span class="t-fn">window</span>.scrollY > <span class="t-num">10</span>
  );
});`,
  },

  logo: {
    title: 'Logo / Brand',
    role: 'Identité visuelle du site — généralement un lien vers la page d\'accueil.',
    html: `<span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/"</span>
   <span class="t-attr">class</span>=<span class="t-val">"logo"</span>
   <span class="t-attr">aria-label</span>=<span class="t-val">"Accueil"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;img</span> <span class="t-attr">src</span>=<span class="t-val">"logo.svg"</span>
       <span class="t-attr">alt</span>=<span class="t-val">"Nom du site"</span><span class="t-tag">&gt;</span>
<span class="t-tag">&lt;/a&gt;</span>`,
    css: `<span class="t-sel">.logo</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">gap</span>: <span class="t-num">10px</span>;
  <span class="t-prop">text-decoration</span>: <span class="t-num">none</span>;
  <span class="t-prop">color</span>: <span class="t-num">inherit</span>;
  <span class="t-prop">flex-shrink</span>: <span class="t-num">0</span>;
}`,
    js: `<span class="t-cmt">// Pas de JS natif sur le logo.</span>
<span class="t-cmt">// Le href="/" gère la navigation.</span>

<span class="t-cmt">// Parfois : animation au hover</span>
logo.<span class="t-fn">addEventListener</span>(<span class="t-str">'mouseenter'</span>,
  () => logo.<span class="t-fn">classList</span>
    .<span class="t-fn">add</span>(<span class="t-str">'animated'</span>)
);`,
  },

  nav: {
    title: 'Navigation (Nav)',
    role: 'Liens principaux du site — landmark ARIA automatique, lu en premier par les lecteurs d\'écran.',
    html: `<span class="t-tag">&lt;nav</span>
  <span class="t-attr">aria-label</span>=<span class="t-val">"Navigation principale"</span>
<span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;ul&gt;</span>
    <span class="t-tag">&lt;li&gt;</span>
      <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#about"</span><span class="t-tag">&gt;</span>
        À propos
      <span class="t-tag">&lt;/a&gt;</span>
    <span class="t-tag">&lt;/li&gt;</span>
  <span class="t-tag">&lt;/ul&gt;</span>
<span class="t-tag">&lt;/nav&gt;</span>`,
    css: `<span class="t-sel">nav</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">gap</span>: <span class="t-num">48px</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
}
<span class="t-sel">nav a</span> {
  <span class="t-prop">text-decoration</span>: <span class="t-num">none</span>;
  <span class="t-prop">color</span>: <span class="t-num">inherit</span>;
  <span class="t-prop">transition</span>: <span class="t-num">color 0.15s</span>;
}`,
    js: `<span class="t-cmt">// Lien actif selon la section visible</span>
<span class="t-kw">const</span> observer =
  <span class="t-kw">new</span> <span class="t-fn">IntersectionObserver</span>(
    (entries) => {
      entries.<span class="t-fn">forEach</span>(entry => {
        <span class="t-kw">if</span> (entry.isIntersecting)
          <span class="t-fn">setActive</span>(entry.target.id);
      });
    }, { threshold: <span class="t-num">0.5</span> }
  );`,
  },

  'nav-link': {
    title: 'Nav Link',
    role: 'Lien de navigation — pointe vers une section ou une page. Doit être descriptif pour l\'accessibilité.',
    html: `<span class="t-tag">&lt;a</span>
  <span class="t-attr">href</span>=<span class="t-val">"#section"</span>
  <span class="t-attr">class</span>=<span class="t-val">"nav-link"</span>
  <span class="t-attr">aria-current</span>=<span class="t-val">"page"</span>
<span class="t-tag">&gt;</span>
  À propos
<span class="t-tag">&lt;/a&gt;</span>`,
    css: `<span class="t-sel">.nav-link</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.72rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">2px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">transition</span>: <span class="t-num">color 0.15s</span>;
}
<span class="t-sel">.nav-link.active</span> {
  <span class="t-prop">color</span>: <span class="t-num">#111</span>;
}`,
    js: `<span class="t-cmt">// Scroll fluide vers la section</span>
link.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, (e) => {
  e.<span class="t-fn">preventDefault</span>();
  <span class="t-fn">document</span>
    .<span class="t-fn">querySelector</span>(link.hash)
    .<span class="t-fn">scrollIntoView</span>({
      behavior: <span class="t-str">'smooth'</span>
    });
});`,
  },

  hero: {
    title: 'Hero',
    role: 'Première section visible — accroche principale. Définit le ton et la proposition de valeur du site.',
    html: `<span class="t-tag">&lt;section</span>
  <span class="t-attr">class</span>=<span class="t-val">"hero"</span>
  <span class="t-attr">id</span>=<span class="t-val">"hero"</span>
<span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"eyebrow"</span><span class="t-tag">&gt;</span>…<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;h1&gt;</span>…<span class="t-tag">&lt;/h1&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>…<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#"</span><span class="t-tag">&gt;</span>CTA<span class="t-tag">&lt;/a&gt;</span>
<span class="t-tag">&lt;/section&gt;</span>`,
    css: `<span class="t-sel">.hero</span> {
  <span class="t-prop">min-height</span>: <span class="t-num">88vh</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">padding</span>: <span class="t-num">80px 48px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#f0ebe0</span>;
  <span class="t-prop">position</span>: <span class="t-num">relative</span>;
}`,
    js: `<span class="t-cmt">// Animation d'entrée au chargement</span>
<span class="t-fn">document</span>.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'DOMContentLoaded'</span>, () => {
  hero.<span class="t-fn">animate</span>([
    { opacity: <span class="t-num">0</span>, transform: <span class="t-str">'translateY(20px)'</span> },
    { opacity: <span class="t-num">1</span>, transform: <span class="t-str">'translateY(0)'</span> }
  ], { duration: <span class="t-num">700</span>, fill: <span class="t-str">'forwards'</span> });
});`,
  },

  eyebrow: {
    title: 'Eyebrow / Surtitre',
    role: 'Petite ligne au-dessus du titre — contextualise, catégorise. Aucune balise HTML dédiée.',
    html: `<span class="t-cmt">&lt;!-- Pas de balise dédiée --&gt;</span>
<span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"eyebrow"</span><span class="t-tag">&gt;</span>
  Démonstrateur interactif
<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>Titre principal<span class="t-tag">&lt;/h1&gt;</span>`,
    css: `<span class="t-sel">.eyebrow</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.65rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">3px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">color</span>: <span class="t-num">#999</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">16px</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
}`,
    js: `<span class="t-cmt">// Purement visuel et éditorial.</span>
<span class="t-cmt">// Aucun comportement JS natif.</span>

<span class="t-cmt">// Parfois animé à l'entrée :</span>
eyebrow.<span class="t-fn">style</span>.animationDelay
  = <span class="t-str">'0.1s'</span>;`,
  },

  'h1-main': {
    title: 'H1 — Titre principal',
    role: 'Un seul H1 par page. Premier élément lu par Google et les lecteurs d\'écran. Ne jamais le sauter.',
    html: `<span class="t-cmt">&lt;!-- Un seul par page --&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>
  Titre principal de la page
<span class="t-tag">&lt;/h1&gt;</span>

<span class="t-cmt">&lt;!-- Puis H2, H3... en ordre --&gt;</span>
<span class="t-tag">&lt;h2&gt;</span>Section<span class="t-tag">&lt;/h2&gt;</span>`,
    css: `<span class="t-sel">h1</span> {
  <span class="t-prop">font-size</span>:
    <span class="t-num">clamp(3rem, 8vw, 7rem)</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">300</span>;
  <span class="t-prop">font-style</span>: <span class="t-num">italic</span>;
  <span class="t-prop">line-height</span>: <span class="t-num">0.95</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">-2px</span>;
}`,
    js: `<span class="t-cmt">// clamp() = responsive sans JS.</span>
<span class="t-cmt">// Le H1 est statique.</span>

<span class="t-cmt">// Effet typewriter possible :</span>
<span class="t-kw">const</span> text = h1.textContent;
h1.textContent = <span class="t-str">''</span>;
text.<span class="t-fn">split</span>(<span class="t-str">''</span>).<span class="t-fn">forEach</span>(
  (c, i) => <span class="t-fn">setTimeout</span>(() =>
    h1.textContent += c, i * <span class="t-num">40</span>)
);`,
  },

  'h1-sub': {
    title: 'Surtitre H1',
    role: 'Complément du titre principal — souvent une ligne plus petite qui précède ou suit le H1.',
    html: `<span class="t-cmt">&lt;!-- Même balise h1, style différent --&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>
  <span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"h1-sub"</span><span class="t-tag">&gt;</span>
    Sous-titre
  <span class="t-tag">&lt;/span&gt;</span>
  <span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"h1-main"</span><span class="t-tag">&gt;</span>
    Titre principal
  <span class="t-tag">&lt;/span&gt;</span>
<span class="t-tag">&lt;/h1&gt;</span>`,
    css: `<span class="t-sel">.h1-sub</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">1rem</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">300</span>;
  <span class="t-prop">font-style</span>: <span class="t-num">normal</span>;
  <span class="t-prop">color</span>: <span class="t-num">#888</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">1px</span>;
  <span class="t-prop">display</span>: <span class="t-num">block</span>;
}`,
    js: `<span class="t-cmt">// Purement typographique.</span>
<span class="t-cmt">// Le display: block sur le span</span>
<span class="t-cmt">// permet de le mettre sur</span>
<span class="t-cmt">// une ligne séparée sans</span>
<span class="t-cmt">// sortir du H1.</span>`,
  },

  paragraph: {
    title: 'Paragraphe',
    role: 'Bloc de texte courant — unité de base du contenu. max-width ~65ch pour la lisibilité optimale.',
    html: `<span class="t-tag">&lt;p&gt;</span>
  Premier paragraphe. Texte
  lisible et bien aéré.
<span class="t-tag">&lt;/p&gt;</span>

<span class="t-tag">&lt;p&gt;</span>
  Deuxième paragraphe.
<span class="t-tag">&lt;/p&gt;</span>`,
    css: `<span class="t-sel">p</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.9rem</span>;
  <span class="t-prop">line-height</span>: <span class="t-num">1.8</span>;
  <span class="t-prop">color</span>: <span class="t-num">#666</span>;
  <span class="t-prop">max-width</span>: <span class="t-num">65ch</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">300</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">1em</span>;
}`,
    js: `<span class="t-cmt">// "Lire la suite" : tronquer</span>
<span class="t-cmt">// et révéler au clic</span>
btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  p.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(
    <span class="t-str">'expanded'</span>
  );
});`,
  },

  'cta-primary': {
    title: 'CTA — Call to Action',
    role: 'Bouton d\'action principal — une seule per section. Doit être visuellement dominant.',
    html: `<span class="t-cmt">&lt;!-- Navigation = &lt;a&gt; --&gt;</span>
<span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#section"</span><span class="t-tag">&gt;</span>
  Explorer ↓
<span class="t-tag">&lt;/a&gt;</span>

<span class="t-cmt">&lt;!-- Action = &lt;button&gt; --&gt;</span>
<span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"button"</span><span class="t-tag">&gt;</span>
  Envoyer
<span class="t-tag">&lt;/button&gt;</span>`,
    css: `<span class="t-sel">.cta</span> {
  <span class="t-prop">display</span>: <span class="t-num">inline-block</span>;
  <span class="t-prop">padding</span>: <span class="t-num">12px 28px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1px solid #111</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">2px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">transition</span>:
    <span class="t-num">background 0.2s, color 0.2s</span>;
}`,
    js: `<span class="t-cmt">// Scroll fluide au clic</span>
cta.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, (e) => {
  e.<span class="t-fn">preventDefault</span>();
  <span class="t-fn">document</span>
    .<span class="t-fn">querySelector</span>(<span class="t-str">'#section'</span>)
    .<span class="t-fn">scrollIntoView</span>({
      behavior: <span class="t-str">'smooth'</span>
    });
});`,
  },

  hint: {
    title: 'Hint / Indication',
    role: 'Aide contextuelle discrète — guide l\'utilisateur sans encombrer l\'interface.',
    html: `<span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"hint"</span>
   <span class="t-attr">aria-hidden</span>=<span class="t-val">"true"</span><span class="t-tag">&gt;</span>
  ← cliquez sur un élément
<span class="t-tag">&lt;/p&gt;</span>`,
    css: `<span class="t-sel">.hint</span> {
  <span class="t-prop">position</span>: <span class="t-num">absolute</span>;
  <span class="t-prop">bottom</span>: <span class="t-num">32px</span>;
  <span class="t-prop">right</span>: <span class="t-num">48px</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.6rem</span>;
  <span class="t-prop">color</span>: <span class="t-num">#aaa</span>;
  <span class="t-prop">animation</span>:
    <span class="t-num">pulse 2.5s ease infinite</span>;
}`,
    js: `<span class="t-cmt">// Masquer après le 1er clic</span>
<span class="t-fn">document</span>.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'click'</span>, () => {
  hint.style.opacity = <span class="t-str">'0'</span>;
  hint.style.pointerEvents = <span class="t-str">'none'</span>;
}, { once: <span class="t-kw">true</span> });`,
  },

  'section-label': {
    title: 'Section Label',
    role: 'Numéro ou label de section — repère visuel dans la page, souvent en monospace.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"section-label"</span><span class="t-tag">&gt;</span>
  01 — Typographie
<span class="t-tag">&lt;/div&gt;</span>

<span class="t-cmt">&lt;!-- Ou en aria-hidden si décoratif --&gt;</span>
<span class="t-tag">&lt;div</span>
  <span class="t-attr">class</span>=<span class="t-val">"section-label"</span>
  <span class="t-attr">aria-hidden</span>=<span class="t-val">"true"</span>
<span class="t-tag">&gt;</span>01<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.section-label</span> {
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.6rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">2px</span>;
  <span class="t-prop">color</span>: <span class="t-num">#aaa</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">40px</span>;
  <span class="t-prop">display</span>: <span class="t-num">block</span>;
}`,
    js: `<span class="t-cmt">// Purement éditorial.</span>
<span class="t-cmt">// Aucun comportement JS.</span>
<span class="t-cmt">// Parfois généré dynamiquement :</span>

sections.<span class="t-fn">forEach</span>((s, i) => {
  s.<span class="t-fn">querySelector</span>(<span class="t-str">'.label'</span>)
    .textContent =
    <span class="t-str">\`0\${i+1}\`</span>;
});`,
  },

  h2: {
    title: 'H2 — Titre de section',
    role: 'Titre de niveau 2 — structure la hiérarchie après le H1. Plusieurs H2 possibles par page.',
    html: `<span class="t-cmt">&lt;!-- Après le H1 --&gt;</span>
<span class="t-tag">&lt;section&gt;</span>
  <span class="t-tag">&lt;h2&gt;</span>Titre de section<span class="t-tag">&lt;/h2&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>Contenu…<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/section&gt;</span>`,
    css: `<span class="t-sel">h2</span> {
  <span class="t-prop">font-size</span>:
    <span class="t-num">clamp(2rem, 5vw, 4rem)</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">300</span>;
  <span class="t-prop">font-style</span>: <span class="t-num">italic</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">-1px</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">48px</span>;
}`,
    js: `<span class="t-cmt">// Les H2 sont souvent des</span>
<span class="t-cmt">// ancres de navigation.</span>

<span class="t-tag">&lt;h2</span> <span class="t-attr">id</span>=<span class="t-val">"typographie"</span><span class="t-tag">&gt;</span>
  La hiérarchie
<span class="t-tag">&lt;/h2&gt;</span>

<span class="t-cmt">// Lié au nav : href="#typographie"</span>`,
  },

  h3: {
    title: 'H3 — Sous-titre',
    role: 'Titre de niveau 3 — détaille un point dans une section H2. Respecter H1→H2→H3.',
    html: `<span class="t-tag">&lt;section&gt;</span>
  <span class="t-tag">&lt;h2&gt;</span>Section<span class="t-tag">&lt;/h2&gt;</span>
  <span class="t-tag">&lt;h3&gt;</span>Sous-section<span class="t-tag">&lt;/h3&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>Contenu<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/section&gt;</span>`,
    css: `<span class="t-sel">h3</span> {
  <span class="t-prop">font-family</span>: <span class="t-num">serif</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">1.3rem</span>;
  <span class="t-prop">font-style</span>: <span class="t-num">italic</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">300</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">12px</span>;
  <span class="t-prop">color</span>: <span class="t-num">#1e1c1a</span>;
}`,
    js: `<span class="t-cmt">// Les titres n'ont pas de JS natif.</span>
<span class="t-cmt">// Mais on peut les utiliser</span>
<span class="t-cmt">// comme ancre :</span>

<span class="t-tag">&lt;h3</span> <span class="t-attr">id</span>=<span class="t-val">"structure"</span><span class="t-tag">&gt;</span>
  Structure sémantique
<span class="t-tag">&lt;/h3&gt;</span>`,
  },

  list: {
    title: 'Liste (ul)',
    role: 'Énumération non ordonnée — items sans priorité de rang. ul pour liste, ol pour ordre numéroté.',
    html: `<span class="t-tag">&lt;ul&gt;</span>
  <span class="t-tag">&lt;li&gt;</span>Premier item<span class="t-tag">&lt;/li&gt;</span>
  <span class="t-tag">&lt;li&gt;</span>Deuxième item<span class="t-tag">&lt;/li&gt;</span>
  <span class="t-tag">&lt;li&gt;</span>Troisième item<span class="t-tag">&lt;/li&gt;</span>
<span class="t-tag">&lt;/ul&gt;</span>

<span class="t-cmt">&lt;!-- Ordonnée --&gt;</span>
<span class="t-tag">&lt;ol&gt;</span><span class="t-tag">&lt;li&gt;</span>…<span class="t-tag">&lt;/li&gt;</span><span class="t-tag">&lt;/ol&gt;</span>`,
    css: `<span class="t-sel">ul</span> {
  <span class="t-prop">list-style</span>: <span class="t-num">none</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">10px</span>;
  <span class="t-prop">padding</span>: <span class="t-num">0</span>;
}
<span class="t-sel">li</span> { <span class="t-prop">padding-left</span>: <span class="t-num">16px</span>; }`,
    js: `<span class="t-cmt">// Filtrer / trier une liste</span>
items.<span class="t-fn">sort</span>((a, b) =>
  a.textContent
    .<span class="t-fn">localeCompare</span>(b.textContent)
).<span class="t-fn">forEach</span>(
  item => ul.<span class="t-fn">appendChild</span>(item)
);`,
  },

  card: {
    title: 'Card',
    role: 'Composant carte — regroupe media, titre, texte et action dans un bloc autonome et réutilisable.',
    html: `<span class="t-tag">&lt;article</span> <span class="t-attr">class</span>=<span class="t-val">"card"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-media"</span><span class="t-tag">&gt;</span>…<span class="t-tag">&lt;/div&gt;</span>
  <span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-body"</span><span class="t-tag">&gt;</span>
    <span class="t-tag">&lt;h3&gt;</span>Titre<span class="t-tag">&lt;/h3&gt;</span>
    <span class="t-tag">&lt;p&gt;</span>Texte<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;/div&gt;</span>
<span class="t-tag">&lt;/article&gt;</span>`,
    css: `<span class="t-sel">.card</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">overflow</span>: <span class="t-num">hidden</span>;
  <span class="t-prop">transition</span>:
    <span class="t-num">transform 0.2s, box-shadow 0.2s</span>;
}
<span class="t-sel">.card:hover</span> {
  <span class="t-prop">transform</span>: <span class="t-num">translateY(-4px)</span>;
}`,
    js: `<span class="t-cmt">// Grille filtrable par tag</span>
filterBtn.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'click'</span>, () => {
  cards.<span class="t-fn">forEach</span>(card => {
    <span class="t-kw">const</span> show = card.dataset.tag
      === activeFilter;
    card.style.display =
      show ? <span class="t-str">'flex'</span> : <span class="t-str">'none'</span>;
  });
});`,
  },

  'card-media': {
    title: 'Card Media',
    role: 'Zone visuelle de la carte — ratio fixe pour l\'homogénéité. object-fit: cover pour les images.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-media"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;img</span>
    <span class="t-attr">src</span>=<span class="t-val">"image.jpg"</span>
    <span class="t-attr">alt</span>=<span class="t-val">"Description"</span>
    <span class="t-attr">loading</span>=<span class="t-val">"lazy"</span>
  <span class="t-tag">&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.card-media</span> {
  <span class="t-prop">aspect-ratio</span>: <span class="t-num">16 / 9</span>;
  <span class="t-prop">overflow</span>: <span class="t-num">hidden</span>;
}
<span class="t-sel">.card-media img</span> {
  <span class="t-prop">width</span>: <span class="t-num">100%</span>;
  <span class="t-prop">height</span>: <span class="t-num">100%</span>;
  <span class="t-prop">object-fit</span>: <span class="t-num">cover</span>;
}`,
    js: `<span class="t-cmt">// loading="lazy" = natif,</span>
<span class="t-cmt">// pas de JS requis.</span>

<span class="t-cmt">// Fallback si image manquante :</span>
img.<span class="t-fn">addEventListener</span>(<span class="t-str">'error'</span>, () => {
  img.src = <span class="t-str">'/placeholder.jpg'</span>;
});`,
  },

  'card-body': {
    title: 'Card Body',
    role: 'Contenu textuel de la carte — flex: 1 pour occuper l\'espace et aligner les footers entre cartes.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-body"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span><span class="t-tag">&gt;</span>Catégorie<span class="t-tag">&lt;/span&gt;</span>
  <span class="t-tag">&lt;h3&gt;</span>Titre<span class="t-tag">&lt;/h3&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>Description<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.card-body</span> {
  <span class="t-prop">padding</span>: <span class="t-num">20px 24px 16px</span>;
  <span class="t-prop">flex</span>: <span class="t-num">1</span>;
  <span class="t-cmt">/* prend l'espace disponible */</span>
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">8px</span>;
}`,
    js: `<span class="t-cmt">// Le flex: 1 en CSS suffit</span>
<span class="t-cmt">// pour que tous les footers</span>
<span class="t-cmt">// s'alignent en bas.</span>
<span class="t-cmt">// Aucun JS requis.</span>`,
  },

  'card-footer': {
    title: 'Card Footer',
    role: 'Pied de carte — actions, tags, date, lien. margin-top: auto pour coller au bas.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-footer"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span><span class="t-tag">&gt;</span>Tag<span class="t-tag">&lt;/span&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#"</span><span class="t-tag">&gt;</span>Lire →<span class="t-tag">&lt;/a&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.card-footer</span> {
  <span class="t-prop">padding</span>: <span class="t-num">14px 24px</span>;
  <span class="t-prop">border-top</span>: <span class="t-num">1px solid #eee</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">justify-content</span>:
    <span class="t-num">space-between</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
}`,
    js: `<span class="t-cmt">// Aucun JS natif.</span>
<span class="t-cmt">// Le margin-top: auto dans</span>
<span class="t-cmt">// .card-body colle le footer</span>
<span class="t-cmt">// en bas de chaque carte.</span>`,
  },

  tag: {
    title: 'Tag / Badge',
    role: 'Étiquette de catégorie ou statut — information compacte. Cliquable pour filtrer une liste.',
    html: `<span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span><span class="t-tag">&gt;</span>
  Design
<span class="t-tag">&lt;/span&gt;</span>

<span class="t-cmt">&lt;!-- Cliquable --&gt;</span>
<span class="t-tag">&lt;button</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span>
        <span class="t-attr">data-filter</span>=<span class="t-val">"design"</span><span class="t-tag">&gt;</span>
  Design
<span class="t-tag">&lt;/button&gt;</span>`,
    css: `<span class="t-sel">.tag</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.58rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">1.5px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">color</span>: <span class="t-num">#999</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
}`,
    js: `<span class="t-cmt">// Filtre au clic</span>
tags.<span class="t-fn">forEach</span>(tag => {
  tag.<span class="t-fn">addEventListener</span>(
    <span class="t-str">'click'</span>, () => {
    <span class="t-fn">filterCards</span>(
      tag.dataset.filter
    );
  });
});`,
  },

  link: {
    title: 'Lien (a)',
    role: 'Lien hypertexte — navigue vers une page, section ou ressource. Toujours descriptif pour l\'accessibilité.',
    html: `<span class="t-cmt">&lt;!-- Page externe --&gt;</span>
<span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"https://…"</span>
   <span class="t-attr">target</span>=<span class="t-val">"_blank"</span>
   <span class="t-attr">rel</span>=<span class="t-val">"noopener"</span><span class="t-tag">&gt;</span>
  Lien externe
<span class="t-tag">&lt;/a&gt;</span>

<span class="t-cmt">&lt;!-- Section de la page --&gt;</span>
<span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#section"</span><span class="t-tag">&gt;</span>Ancre<span class="t-tag">&lt;/a&gt;</span>`,
    css: `<span class="t-sel">a</span> {
  <span class="t-prop">color</span>: <span class="t-num">inherit</span>;
  <span class="t-prop">text-decoration</span>: <span class="t-num">underline</span>;
  <span class="t-prop">text-underline-offset</span>: <span class="t-num">3px</span>;
  <span class="t-prop">transition</span>: <span class="t-num">opacity 0.15s</span>;
}
<span class="t-sel">a:hover</span> { <span class="t-prop">opacity</span>: <span class="t-num">0.7</span>; }`,
    js: `<span class="t-cmt">// Scroll doux pour ancres</span>
<span class="t-fn">document</span>
  .<span class="t-fn">querySelectorAll</span>(<span class="t-str">'a[href^="#"]'</span>)
  .<span class="t-fn">forEach</span>(a => {
    a.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, e => {
      e.<span class="t-fn">preventDefault</span>();
      <span class="t-fn">document</span>.<span class="t-fn">querySelector</span>(
        a.hash).<span class="t-fn">scrollIntoView</span>(
        {behavior: <span class="t-str">'smooth'</span>});
    });
  });`,
  },

  form: {
    title: 'Form',
    role: 'Formulaire — collecte les données saisies. preventDefault() en JS pour gérer l\'envoi sans rechargement.',
    html: `<span class="t-tag">&lt;form</span>
  <span class="t-attr">action</span>=<span class="t-val">"/submit"</span>
  <span class="t-attr">method</span>=<span class="t-val">"POST"</span>
<span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;input</span> <span class="t-attr">type</span>=<span class="t-val">"text"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
    Envoyer
  <span class="t-tag">&lt;/button&gt;</span>
<span class="t-tag">&lt;/form&gt;</span>`,
    css: `<span class="t-sel">form</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">20px</span>;
  <span class="t-prop">max-width</span>: <span class="t-num">600px</span>;
}`,
    js: `form.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'submit'</span>, async (e) => {
  e.<span class="t-fn">preventDefault</span>();
  
  <span class="t-kw">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'/api/submit'</span>, {
    method: <span class="t-str">'POST'</span>,
    body: <span class="t-kw">new</span> <span class="t-fn">FormData</span>(form)
  });
  
  form.reset();
});`,
  },

  field: {
    title: 'Field (champ)',
    role: 'Groupe label + input — unité de base d\'un formulaire. Le for/id lie le label à l\'input.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"field"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"prenom"</span><span class="t-tag">&gt;</span>
    Prénom
  <span class="t-tag">&lt;/label&gt;</span>
  <span class="t-tag">&lt;input</span>
    <span class="t-attr">type</span>=<span class="t-val">"text"</span>
    <span class="t-attr">id</span>=<span class="t-val">"prenom"</span>
    <span class="t-attr">name</span>=<span class="t-val">"prenom"</span>
  <span class="t-tag">&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.field</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">6px</span>;
}`,
    js: `<span class="t-cmt">// Validation en temps réel</span>
input.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'blur'</span>, () => {
  <span class="t-kw">const</span> valid =
    input.value.<span class="t-fn">length</span> > <span class="t-num">0</span>;
  field.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(
    <span class="t-str">'error'</span>, !valid);
});`,
  },

  label: {
    title: 'Label',
    role: 'Étiquette d\'un champ — indispensable pour l\'accessibilité. Sans label, les lecteurs d\'écran sont aveugles.',
    html: `<span class="t-cmt">&lt;!-- for= lié à l'id du champ --&gt;</span>
<span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"email"</span><span class="t-tag">&gt;</span>
  Adresse email
<span class="t-tag">&lt;/label&gt;</span>
<span class="t-tag">&lt;input</span>
  <span class="t-attr">id</span>=<span class="t-val">"email"</span>
  <span class="t-attr">type</span>=<span class="t-val">"email"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">label</span> {
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.58rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">2px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">color</span>: <span class="t-num">#999</span>;
}`,
    js: `<span class="t-cmt">// Le clic sur le label focus</span>
<span class="t-cmt">// automatiquement l'input lié.</span>
<span class="t-cmt">// Natif — aucun JS requis</span>
<span class="t-cmt">// si for/id sont corrects.</span>`,
  },

  input: {
    title: 'Input (texte)',
    role: 'Champ de saisie texte — une ligne. placeholder pour l\'aide, required pour la validation native.',
    html: `<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"text"</span>
  <span class="t-attr">id</span>=<span class="t-val">"nom"</span>
  <span class="t-attr">name</span>=<span class="t-val">"nom"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"Votre nom"</span>
  <span class="t-attr">required</span>
  <span class="t-attr">maxlength</span>=<span class="t-val">"100"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">input</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 0</span>;
  <span class="t-prop">border</span>: <span class="t-num">none</span>;
  <span class="t-prop">border-bottom</span>:
    <span class="t-num">1px solid #ddd</span>;
  <span class="t-prop">background</span>: <span class="t-num">transparent</span>;
  <span class="t-prop">outline</span>: <span class="t-num">none</span>;
  <span class="t-prop">width</span>: <span class="t-num">100%</span>;
}`,
    js: `input.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'input'</span>, (e) => {
  console.<span class="t-fn">log</span>(e.target.value);
});

<span class="t-cmt">// Récupérer la valeur</span>
<span class="t-kw">const</span> val = input.value;`,
  },

  'input-email': {
    title: 'Input (email)',
    role: 'Champ email — valide automatiquement le format. Clavier adapté sur mobile (affiche @).',
    html: `<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"email"</span>
  <span class="t-attr">id</span>=<span class="t-val">"email"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"vous@exemple.com"</span>
  <span class="t-attr">required</span>
  <span class="t-attr">autocomplete</span>=<span class="t-val">"email"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-cmt">/* Même style qu'input text */</span>
<span class="t-sel">input[type="email"]</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 0</span>;
  <span class="t-prop">border-bottom</span>:
    <span class="t-num">1px solid #ddd</span>;
}
<span class="t-sel">input:invalid</span> {
  <span class="t-prop">border-color</span>: <span class="t-num">#c87040</span>;
}`,
    js: `<span class="t-cmt">// Validation native : le navigateur</span>
<span class="t-cmt">// vérifie le format.</span>

<span class="t-cmt">// Vérification JS :</span>
<span class="t-kw">const</span> valid =
  input.<span class="t-fn">checkValidity</span>();
<span class="t-cmt">// true si format correct</span>`,
  },

  textarea: {
    title: 'Textarea',
    role: 'Champ multi-lignes — pour les messages longs. resize: vertical pour laisser l\'utilisateur redimensionner.',
    html: `<span class="t-tag">&lt;textarea</span>
  <span class="t-attr">id</span>=<span class="t-val">"message"</span>
  <span class="t-attr">name</span>=<span class="t-val">"message"</span>
  <span class="t-attr">rows</span>=<span class="t-val">"4"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"Message…"</span>
<span class="t-tag">&gt;&lt;/textarea&gt;</span>`,
    css: `<span class="t-sel">textarea</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 0</span>;
  <span class="t-prop">border-bottom</span>:
    <span class="t-num">1px solid #ddd</span>;
  <span class="t-prop">resize</span>: <span class="t-num">vertical</span>;
  <span class="t-prop">min-height</span>: <span class="t-num">80px</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">inherit</span>;
}`,
    js: `<span class="t-cmt">// Auto-resize au contenu</span>
textarea.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'input'</span>, () => {
  textarea.style.height = <span class="t-str">'auto'</span>;
  textarea.style.height =
    textarea.scrollHeight + <span class="t-str">'px'</span>;
});`,
  },

  checkbox: {
    title: 'Checkbox',
    role: 'Case à cocher — consentement RGPD, option binaire. required bloque le submit si non coché.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"field-check"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;input</span>
    <span class="t-attr">type</span>=<span class="t-val">"checkbox"</span>
    <span class="t-attr">id</span>=<span class="t-val">"consent"</span>
    <span class="t-attr">required</span>
  <span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"consent"</span><span class="t-tag">&gt;</span>
    J'accepte
  <span class="t-tag">&lt;/label&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.field-check</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">gap</span>: <span class="t-num">10px</span>;
}
<span class="t-sel">input[type="checkbox"]</span> {
  <span class="t-prop">accent-color</span>: <span class="t-num">#1e1c1a</span>;
}`,
    js: `<span class="t-cmt">// Activer le bouton submit</span>
<span class="t-cmt">// selon l'état de la checkbox</span>
checkbox.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'change'</span>, () => {
  submitBtn.disabled =
    !checkbox.checked;
});`,
  },

  'form-actions': {
    title: 'Form Actions',
    role: 'Zone des boutons du formulaire — submit et annulation. justify-content: flex-end pour aligner à droite.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"form-actions"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"reset"</span><span class="t-tag">&gt;</span>
    Réinitialiser
  <span class="t-tag">&lt;/button&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
    Envoyer →
  <span class="t-tag">&lt;/button&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.form-actions</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">justify-content</span>:
    <span class="t-num">flex-end</span>;
  <span class="t-prop">gap</span>: <span class="t-num">12px</span>;
  <span class="t-prop">padding-top</span>: <span class="t-num">8px</span>;
}`,
    js: `<span class="t-cmt">// type="reset" = natif.</span>
<span class="t-cmt">// Vide tous les champs</span>
<span class="t-cmt">// sans JS.</span>

<span class="t-cmt">// État loading au submit :</span>
btn.textContent = <span class="t-str">'Envoi…'</span>;
btn.disabled = <span class="t-kw">true</span>;`,
  },

  'btn-reset': {
    title: 'Bouton Reset',
    role: 'Réinitialise tous les champs du formulaire — comportement natif HTML5, aucun JS requis.',
    html: `<span class="t-cmt">&lt;!-- type="reset" = natif --&gt;</span>
<span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"reset"</span><span class="t-tag">&gt;</span>
  Réinitialiser
<span class="t-tag">&lt;/button&gt;</span>`,
    css: `<span class="t-sel">.btn-ghost</span> {
  <span class="t-prop">padding</span>: <span class="t-num">10px 22px</span>;
  <span class="t-prop">background</span>: <span class="t-num">none</span>;
  <span class="t-prop">border</span>: <span class="t-num">1px solid #ddd</span>;
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
  <span class="t-prop">color</span>: <span class="t-num">#888</span>;
}`,
    js: `<span class="t-cmt">// type="reset" vide les champs</span>
<span class="t-cmt">// nativement.</span>

<span class="t-cmt">// Si besoin de logique custom :</span>
btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  <span class="t-cmt">// logique supplémentaire…</span>
  form.reset(); <span class="t-cmt">// puis reset natif</span>
});`,
  },

  'btn-submit': {
    title: 'Bouton Submit',
    role: 'Déclenche la soumission du formulaire et la validation HTML5 native — required, email, etc.',
    html: `<span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
  Envoyer →
<span class="t-tag">&lt;/button&gt;</span>

<span class="t-cmt">&lt;!-- Alternative --&gt;</span>
<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"submit"</span>
  <span class="t-attr">value</span>=<span class="t-val">"Envoyer"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">.btn-submit</span> {
  <span class="t-prop">padding</span>: <span class="t-num">10px 28px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#1e1c1a</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
  <span class="t-prop">border</span>: <span class="t-num">none</span>;
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">1.5px</span>;
}`,
    js: `form.<span class="t-fn">addEventListener</span>(
  <span class="t-str">'submit'</span>, async (e) => {
  e.<span class="t-fn">preventDefault</span>();
  btn.textContent = <span class="t-str">'Envoi…'</span>;
  
  <span class="t-kw">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'/api'</span>, {
    method: <span class="t-str">'POST'</span>,
    body: <span class="t-kw">new</span> <span class="t-fn">FormData</span>(form)
  });
  btn.textContent = <span class="t-str">'Envoyé ✓'</span>;
});`,
  },

  footer: {
    title: 'Footer',
    role: 'Pied de page — liens secondaires, mentions légales, copyright. Landmark ARIA automatique.',
    html: `<span class="t-tag">&lt;footer&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/"</span><span class="t-tag">&gt;</span>Logo<span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;nav&gt;</span>
    <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#"</span><span class="t-tag">&gt;</span>Lien<span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;/nav&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>&amp;copy; 2026<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/footer&gt;</span>`,
    css: `<span class="t-sel">footer</span> {
  <span class="t-prop">background</span>: <span class="t-num">#1e1c1a</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
  <span class="t-prop">padding</span>: <span class="t-num">56px 48px</span>;
  <span class="t-prop">display</span>: <span class="t-num">grid</span>;
  <span class="t-prop">grid-template-columns</span>:
    <span class="t-num">1fr auto auto</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
}`,
    js: `<span class="t-cmt">// Année dynamique</span>
<span class="t-kw">const</span> year =
  <span class="t-kw">new</span> <span class="t-fn">Date</span>().<span class="t-fn">getFullYear</span>();

<span class="t-fn">document</span>
  .<span class="t-fn">querySelector</span>(<span class="t-str">'.copyright'</span>)
  .textContent =
  <span class="t-str">\`© \${year}\`</span>;`,
  },

  'footer-nav': {
    title: 'Footer Nav',
    role: 'Navigation secondaire du footer — liens utilitaires, légaux, plan du site.',
    html: `<span class="t-tag">&lt;nav</span>
  <span class="t-attr">aria-label</span>=<span class="t-val">"Navigation footer"</span>
<span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/mentions"</span><span class="t-tag">&gt;</span>
    Mentions légales
  <span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/contact"</span><span class="t-tag">&gt;</span>
    Contact
  <span class="t-tag">&lt;/a&gt;</span>
<span class="t-tag">&lt;/nav&gt;</span>`,
    css: `<span class="t-sel">.footer-nav</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">gap</span>: <span class="t-num">32px</span>;
}
<span class="t-sel">.footer-nav a</span> {
  <span class="t-prop">color</span>: <span class="t-num">#666</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.7rem</span>;
  <span class="t-prop">text-decoration</span>: <span class="t-num">none</span>;
}`,
    js: `<span class="t-cmt">// Pas de JS spécifique.</span>
<span class="t-cmt">// Liens simples vers des pages.</span>`,
  },

  copyright: {
    title: 'Copyright',
    role: 'Mention légale de propriété intellectuelle — © + année + nom. L\'année peut être générée en JS.',
    html: `<span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"copyright"</span><span class="t-tag">&gt;</span>
  &amp;copy; 2026 — Mon site
<span class="t-tag">&lt;/p&gt;</span>

<span class="t-cmt">&lt;!-- &amp;copy; = symbole © --&gt;</span>`,
    css: `<span class="t-sel">.copyright</span> {
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.58rem</span>;
  <span class="t-prop">color</span>: <span class="t-num">#444</span>;
  <span class="t-prop">white-space</span>: <span class="t-num">nowrap</span>;
}`,
    js: `<span class="t-cmt">// Année toujours à jour</span>
<span class="t-kw">const</span> year =
  <span class="t-kw">new</span> <span class="t-fn">Date</span>().<span class="t-fn">getFullYear</span>();

copyright.textContent =
  <span class="t-str">\`© \${year} — Mon site\`</span>;`,
  },

};

// ── OVERLAY LOGIC ─────────────────────────────────────────────────────────────

const overlay      = document.getElementById('overlay');
const overlayClose = document.getElementById('overlayClose');
const overlayTitle = document.getElementById('overlayTitle');
const overlayRole  = document.getElementById('overlayRole');
const panelHTML    = document.getElementById('panelHTML');
const panelCSS     = document.getElementById('panelCSS');
const panelJS      = document.getElementById('panelJS');

let activeEl = null;

document.querySelectorAll('.el[data-id]').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();

    const id   = el.dataset.id;
    const data = DATA[id];
    if (!data) return;

    if (activeEl) activeEl.classList.remove('active');
    activeEl = el;
    el.classList.add('active');

    overlayTitle.textContent = data.title;
    overlayRole.textContent  = data.role;
    panelHTML.innerHTML      = data.html;
    panelCSS.innerHTML       = data.css;
    panelJS.innerHTML        = data.js;

    overlay.classList.add('active');
  });
});

function closeOverlay() {
  overlay.classList.remove('active');
  if (activeEl) { activeEl.classList.remove('active'); activeEl = null; }
}

overlayClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

// Prevent form submit
document.querySelector('form')?.addEventListener('submit', e => e.preventDefault());
