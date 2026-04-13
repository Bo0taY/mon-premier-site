// ── ELEMENT DATA ─────────────────────────────────────────────────────────────

const ELEMENTS = {

  header: {
    title: 'Header',
    role: 'Zone de navigation principale — reste visible pendant le scroll.',
    html: `<span class="t-cmt">&lt;!-- Balise sémantique HTML5 --&gt;</span>
<span class="t-tag">&lt;header&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/"</span><span class="t-tag">&gt;</span>Logo<span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;nav&gt;</span>
    <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/about"</span><span class="t-tag">&gt;</span>À propos<span class="t-tag">&lt;/a&gt;</span>
  <span class="t-tag">&lt;/nav&gt;</span>
  <span class="t-tag">&lt;button&gt;</span>Action<span class="t-tag">&lt;/button&gt;</span>
<span class="t-tag">&lt;/header&gt;</span>`,
    css: `<span class="t-sel">header</span> {
  <span class="t-prop">position</span>: <span class="t-num">sticky</span>;
  <span class="t-prop">top</span>: <span class="t-num">0</span>;
  <span class="t-prop">z-index</span>: <span class="t-num">100</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">padding</span>: <span class="t-num">0 24px</span>;
  <span class="t-prop">height</span>: <span class="t-num">60px</span>;
  <span class="t-prop">background</span>: <span class="t-num">white</span>;
  <span class="t-prop">border-bottom</span>: <span class="t-num">1px solid #eee</span>;
}`,
    js: `<span class="t-cmt">// Scroll : changer l'apparence du header</span>
<span class="t-fn">window</span>.<span class="t-kw">addEventListener</span>(<span class="t-str">'scroll'</span>, () => {
  <span class="t-kw">const</span> header = <span class="t-fn">document</span>
    .<span class="t-fn">querySelector</span>(<span class="t-str">'header'</span>);
  
  header.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(
    <span class="t-str">'scrolled'</span>,
    <span class="t-fn">window</span>.scrollY > <span class="t-num">10</span>
  );
});`,
  },

  hero: {
    title: 'Hero',
    role: 'Première section visible — accroche principale, donne le ton du site.',
    html: `<span class="t-tag">&lt;section</span> <span class="t-attr">class</span>=<span class="t-val">"hero"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"eyebrow"</span><span class="t-tag">&gt;</span>Surtitre<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;h1&gt;</span>Titre principal<span class="t-tag">&lt;/h1&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>Description…<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#"</span><span class="t-tag">&gt;</span>CTA<span class="t-tag">&lt;/a&gt;</span>
<span class="t-tag">&lt;/section&gt;</span>`,
    css: `<span class="t-sel">.hero</span> {
  <span class="t-prop">min-height</span>: <span class="t-num">100vh</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">justify-content</span>: <span class="t-num">center</span>;
  <span class="t-prop">padding</span>: <span class="t-num">80px 24px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#111</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
}`,
    js: `<span class="t-cmt">// Animation d'entrée au chargement</span>
<span class="t-fn">document</span>.<span class="t-fn">querySelector</span>(<span class="t-str">'h1'</span>)
  .<span class="t-fn">animate</span>([
    { <span class="t-prop">opacity</span>: <span class="t-num">0</span>, <span class="t-prop">transform</span>: <span class="t-str">'translateY(20px)'</span> },
    { <span class="t-prop">opacity</span>: <span class="t-num">1</span>, <span class="t-prop">transform</span>: <span class="t-str">'translateY(0)'</span> }
  ], { <span class="t-prop">duration</span>: <span class="t-num">600</span>, <span class="t-prop">fill</span>: <span class="t-str">'forwards'</span> });`,
  },

  eyebrow: {
    title: 'Eyebrow / Surtitre',
    role: 'Petite ligne au-dessus du titre — contextualise ou catégorise le contenu.',
    html: `<span class="t-cmt">&lt;!-- Pas de balise dédiée, on utilise p ou span --&gt;</span>
<span class="t-tag">&lt;p</span> <span class="t-attr">class</span>=<span class="t-val">"eyebrow"</span><span class="t-tag">&gt;</span>
  Démonstrateur interactif
<span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>Titre principal<span class="t-tag">&lt;/h1&gt;</span>`,
    css: `<span class="t-sel">.eyebrow</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.7rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">3px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">color</span>: <span class="t-num">#e05c2a</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">12px</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
}`,
    js: `<span class="t-cmt">// Pas d'interactivité spécifique.</span>
<span class="t-cmt">// L'eyebrow est un élément purement</span>
<span class="t-cmt">// visuel et éditorial.</span>`,
  },

  h1: {
    title: 'H1 — Titre principal',
    role: 'Un seul H1 par page — titre le plus important pour le SEO et l\'accessibilité.',
    html: `<span class="t-cmt">&lt;!-- Un seul &lt;h1&gt; par page --&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>Titre principal<span class="t-tag">&lt;/h1&gt;</span>

<span class="t-cmt">&lt;!-- Ensuite H2, H3... en ordre --&gt;</span>
<span class="t-tag">&lt;h2&gt;</span>Section<span class="t-tag">&lt;/h2&gt;</span>
<span class="t-tag">&lt;h3&gt;</span>Sous-section<span class="t-tag">&lt;/h3&gt;</span>`,
    css: `<span class="t-sel">h1</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">clamp(2rem, 6vw, 5rem)</span>;
  <span class="t-prop">line-height</span>: <span class="t-num">1.05</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">-1.5px</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">serif</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
}`,
    js: `<span class="t-cmt">// clamp() = taille responsive sans JS</span>
<span class="t-cmt">// Le H1 n'a pas de comportement JS</span>
<span class="t-cmt">// habituel — c'est du contenu statique.</span>

<span class="t-cmt">// Exception : animation d'entrée</span>
<span class="t-kw">const</span> h1 = <span class="t-fn">document</span>.<span class="t-fn">querySelector</span>(<span class="t-str">'h1'</span>);`,
  },

  paragraph: {
    title: 'Paragraphe',
    role: 'Bloc de texte courant — unité de base du contenu éditorial.',
    html: `<span class="t-tag">&lt;p&gt;</span>
  Premier paragraphe du contenu.
  Texte courant, lisible et aéré.
<span class="t-tag">&lt;/p&gt;</span>

<span class="t-tag">&lt;p&gt;</span>
  Deuxième paragraphe.
<span class="t-tag">&lt;/p&gt;</span>`,
    css: `<span class="t-sel">p</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">1rem</span>;
  <span class="t-prop">line-height</span>: <span class="t-num">1.7</span>;
  <span class="t-prop">color</span>: <span class="t-num">#555</span>;
  <span class="t-prop">max-width</span>: <span class="t-num">65ch</span>; <span class="t-cmt">/* ~65 caractères */</span>
  <span class="t-prop">margin-bottom</span>: <span class="t-num">1rem</span>;
}`,
    js: `<span class="t-cmt">// Pas d'interactivité native.</span>
<span class="t-cmt">// Possible : afficher/masquer</span>
<span class="t-cmt">// avec un "Lire la suite"</span>

btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  p.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(<span class="t-str">'expanded'</span>);
});`,
  },

  'btn-primary': {
    title: 'Bouton Primaire',
    role: 'Action principale — visuellement dominant, une seule par section idéalement.',
    html: `<span class="t-cmt">&lt;!-- Lien vers une autre page --&gt;</span>
<span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/signup"</span><span class="t-tag">&gt;</span>S'inscrire<span class="t-tag">&lt;/a&gt;</span>

<span class="t-cmt">&lt;!-- Action dans la page --&gt;</span>
<span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"button"</span><span class="t-tag">&gt;</span>
  Envoyer
<span class="t-tag">&lt;/button&gt;</span>`,
    css: `<span class="t-sel">.btn-primary</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 24px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#e05c2a</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
  <span class="t-prop">border</span>: <span class="t-num">none</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">500</span>;
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
  <span class="t-prop">transition</span>: <span class="t-num">background 0.2s</span>;
}
<span class="t-sel">.btn-primary:hover</span> {
  <span class="t-prop">background</span>: <span class="t-num">#c44e22</span>;
}`,
    js: `<span class="t-kw">const</span> btn = <span class="t-fn">document</span>
  .<span class="t-fn">querySelector</span>(<span class="t-str">'.btn-primary'</span>);

btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  <span class="t-cmt">// Action au clic</span>
  btn.textContent = <span class="t-str">'Chargement…'</span>;
  btn.disabled = <span class="t-kw">true</span>;
});`,
  },

  'btn-secondary': {
    title: 'Bouton Secondaire',
    role: 'Action alternative — moins prioritaire, visuellement plus discret que le bouton primaire.',
    html: `<span class="t-cmt">&lt;!-- Même structure, classe différente --&gt;</span>
<span class="t-tag">&lt;button</span>
  <span class="t-attr">type</span>=<span class="t-val">"button"</span>
  <span class="t-attr">class</span>=<span class="t-val">"btn-secondary"</span>
<span class="t-tag">&gt;</span>
  Annuler
<span class="t-tag">&lt;/button&gt;</span>`,
    css: `<span class="t-sel">.btn-secondary</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 24px</span>;
  <span class="t-prop">background</span>: <span class="t-num">transparent</span>;
  <span class="t-prop">color</span>: <span class="t-num">#ccc</span>;
  <span class="t-prop">border</span>: <span class="t-num">1px solid rgba(255,255,255,0.2)</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
}
<span class="t-sel">.btn-secondary:hover</span> {
  <span class="t-prop">border-color</span>: <span class="t-num">rgba(255,255,255,0.5)</span>;
}`,
    js: `<span class="t-cmt">// Souvent utilisé pour annuler</span>
<span class="t-cmt">// ou revenir en arrière</span>
btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  <span class="t-fn">history</span>.<span class="t-fn">back</span>();
  <span class="t-cmt">// ou fermer une modale, etc.</span>
});`,
  },

  card: {
    title: 'Card',
    role: 'Composant carte — regroupe media, titre, texte et action dans un bloc autonome.',
    html: `<span class="t-tag">&lt;article</span> <span class="t-attr">class</span>=<span class="t-val">"card"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-media"</span><span class="t-tag">&gt;</span>
    <span class="t-tag">&lt;img</span> <span class="t-attr">src</span>=<span class="t-val">"img.jpg"</span> <span class="t-attr">alt</span>=<span class="t-val">"…"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;/div&gt;</span>
  <span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-body"</span><span class="t-tag">&gt;</span>
    <span class="t-tag">&lt;h3&gt;</span>Titre<span class="t-tag">&lt;/h3&gt;</span>
    <span class="t-tag">&lt;p&gt;</span>Description<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;/div&gt;</span>
<span class="t-tag">&lt;/article&gt;</span>`,
    css: `<span class="t-sel">.card</span> {
  <span class="t-prop">border-radius</span>: <span class="t-num">12px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1px solid #eee</span>;
  <span class="t-prop">overflow</span>: <span class="t-num">hidden</span>;
  <span class="t-prop">transition</span>: <span class="t-num">box-shadow 0.2s, transform 0.2s</span>;
}
<span class="t-sel">.card:hover</span> {
  <span class="t-prop">box-shadow</span>: <span class="t-num">0 8px 32px rgba(0,0,0,0.1)</span>;
  <span class="t-prop">transform</span>: <span class="t-num">translateY(-3px)</span>;
}`,
    js: `<span class="t-cmt">// Grille de cartes filtrables</span>
<span class="t-fn">filterBtn</span>.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  <span class="t-kw">const</span> cards = <span class="t-fn">document</span>
    .<span class="t-fn">querySelectorAll</span>(<span class="t-str">'.card'</span>);
  
  cards.<span class="t-fn">forEach</span>(card => {
    <span class="t-kw">const</span> match = card.dataset.tag
      === activeFilter;
    card.style.display = match
      ? <span class="t-str">'block'</span> : <span class="t-str">'none'</span>;
  });
});`,
  },

  'card-media': {
    title: 'Card Media',
    role: 'Zone image ou visuel de la carte — ratio fixe pour l\'homogénéité de la grille.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-media"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;img</span>
    <span class="t-attr">src</span>=<span class="t-val">"image.jpg"</span>
    <span class="t-attr">alt</span>=<span class="t-val">"Description de l'image"</span>
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
  <span class="t-prop">transition</span>: <span class="t-num">transform 0.3s</span>;
}
<span class="t-sel">.card:hover .card-media img</span> {
  <span class="t-prop">transform</span>: <span class="t-num">scale(1.05)</span>;
}`,
    js: `<span class="t-cmt">// Chargement paresseux natif :</span>
<span class="t-cmt">// loading="lazy" dans le HTML suffit.</span>

<span class="t-cmt">// Pour un fond de couleur en attendant :</span>
<span class="t-kw">const</span> img = card.<span class="t-fn">querySelector</span>(<span class="t-str">'img'</span>);
img.<span class="t-fn">addEventListener</span>(<span class="t-str">'load'</span>, () => {
  img.<span class="t-fn">classList</span>.<span class="t-fn">add</span>(<span class="t-str">'loaded'</span>);
});`,
  },

  'card-body': {
    title: 'Card Body',
    role: 'Contenu textuel de la carte — titre, description, métadonnées.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-body"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;h3&gt;</span>Titre de la carte<span class="t-tag">&lt;/h3&gt;</span>
  <span class="t-tag">&lt;p&gt;</span>
    Texte de description…
  <span class="t-tag">&lt;/p&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.card-body</span> {
  <span class="t-prop">padding</span>: <span class="t-num">16px 20px</span>;
  <span class="t-prop">flex</span>: <span class="t-num">1</span>; <span class="t-cmt">/* prend l'espace restant */</span>
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">8px</span>;
}`,
    js: `<span class="t-cmt">// Pas de JS spécifique au card-body.</span>
<span class="t-cmt">// Le flex: 1 en CSS suffit pour</span>
<span class="t-cmt">// aligner les footers de cartes.</span>`,
  },

  'card-footer': {
    title: 'Card Footer',
    role: 'Pied de carte — actions, tags, date ou lien de navigation.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"card-footer"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span><span class="t-tag">&gt;</span>Design<span class="t-tag">&lt;/span&gt;</span>
  <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"#"</span><span class="t-tag">&gt;</span>Lire →<span class="t-tag">&lt;/a&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.card-footer</span> {
  <span class="t-prop">padding</span>: <span class="t-num">12px 20px</span>;
  <span class="t-prop">border-top</span>: <span class="t-num">1px solid #eee</span>;
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">justify-content</span>: <span class="t-num">space-between</span>;
  <span class="t-prop">margin-top</span>: <span class="t-num">auto</span>; <span class="t-cmt">/* colle au bas */</span>
}`,
    js: `<span class="t-cmt">// Le margin-top: auto en CSS</span>
<span class="t-cmt">// pousse le footer en bas de la carte.</span>
<span class="t-cmt">// Aucun JS nécessaire pour ça.</span>`,
  },

  tag: {
    title: 'Tag / Badge',
    role: 'Étiquette de catégorie ou statut — information compacte et visuelle.',
    html: `<span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag"</span><span class="t-tag">&gt;</span>Design<span class="t-tag">&lt;/span&gt;</span>

<span class="t-cmt">&lt;!-- Avec couleur selon statut --&gt;</span>
<span class="t-tag">&lt;span</span> <span class="t-attr">class</span>=<span class="t-val">"tag tag--success"</span><span class="t-tag">&gt;</span>
  Publié
<span class="t-tag">&lt;/span&gt;</span>`,
    css: `<span class="t-sel">.tag</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.65rem</span>;
  <span class="t-prop">padding</span>: <span class="t-num">3px 9px</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">4px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#f0ede8</span>;
  <span class="t-prop">color</span>: <span class="t-num">#555</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
  <span class="t-prop">white-space</span>: <span class="t-num">nowrap</span>;
}`,
    js: `<span class="t-cmt">// Filtre au clic sur un tag</span>
tag.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  <span class="t-kw">const</span> filter = tag.textContent;
  <span class="t-fn">filterCards</span>(filter);
});`,
  },

  form: {
    title: 'Form',
    role: 'Formulaire — collecte des données saisies par l\'utilisateur.',
    html: `<span class="t-tag">&lt;form</span>
  <span class="t-attr">action</span>=<span class="t-val">"/submit"</span>
  <span class="t-attr">method</span>=<span class="t-val">"POST"</span>
<span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;input</span> <span class="t-attr">type</span>=<span class="t-val">"text"</span> <span class="t-attr">name</span>=<span class="t-val">"nom"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
    Envoyer
  <span class="t-tag">&lt;/button&gt;</span>
<span class="t-tag">&lt;/form&gt;</span>`,
    css: `<span class="t-sel">form</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">flex-direction</span>: <span class="t-num">column</span>;
  <span class="t-prop">gap</span>: <span class="t-num">16px</span>;
  <span class="t-prop">padding</span>: <span class="t-num">32px</span>;
  <span class="t-prop">background</span>: <span class="t-num">white</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">12px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1px solid #eee</span>;
}`,
    js: `<span class="t-cmt">// Intercepter la soumission</span>
form.<span class="t-fn">addEventListener</span>(<span class="t-str">'submit'</span>, (e) => {
  e.<span class="t-fn">preventDefault</span>(); <span class="t-cmt">// stoppe le rechargement</span>
  
  <span class="t-kw">const</span> data = <span class="t-kw">new</span> <span class="t-fn">FormData</span>(form);
  <span class="t-cmt">// Envoyer via fetch() vers une API</span>
  <span class="t-fn">fetch</span>(<span class="t-str">'/api/submit'</span>, {
    <span class="t-prop">method</span>: <span class="t-str">'POST'</span>, <span class="t-prop">body</span>: data
  });
});`,
  },

  field: {
    title: 'Field (champ)',
    role: 'Groupe label + input — unité de base d\'un formulaire. Le label est indispensable pour l\'accessibilité.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"field"</span><span class="t-tag">&gt;</span>
  <span class="t-cmt">&lt;!-- for= doit correspondre à l'id de l'input --&gt;</span>
  <span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"prenom"</span><span class="t-tag">&gt;</span>Prénom<span class="t-tag">&lt;/label&gt;</span>
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
}
<span class="t-sel">label</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">0.75rem</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">500</span>;
  <span class="t-prop">color</span>: <span class="t-num">#555</span>;
}`,
    js: `<span class="t-cmt">// Validation en temps réel</span>
input.<span class="t-fn">addEventListener</span>(<span class="t-str">'input'</span>, () => {
  <span class="t-kw">const</span> valid = input.value.<span class="t-fn">length</span> > <span class="t-num">2</span>;
  field.<span class="t-fn">classList</span>.<span class="t-fn">toggle</span>(
    <span class="t-str">'field--error'</span>, !valid
  );
});`,
  },

  label: {
    title: 'Label',
    role: 'Étiquette d\'un champ — indispensable pour l\'accessibilité. Sans label, les lecteurs d\'écran ne peuvent pas identifier le champ.',
    html: `<span class="t-cmt">&lt;!-- Le for= lie le label à l'input --&gt;</span>
<span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"email"</span><span class="t-tag">&gt;</span>
  Adresse email
<span class="t-tag">&lt;/label&gt;</span>
<span class="t-tag">&lt;input</span> <span class="t-attr">id</span>=<span class="t-val">"email"</span> <span class="t-attr">type</span>=<span class="t-val">"email"</span><span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">label</span> {
  <span class="t-prop">font-family</span>: <span class="t-num">monospace</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.65rem</span>;
  <span class="t-prop">letter-spacing</span>: <span class="t-num">1.5px</span>;
  <span class="t-prop">text-transform</span>: <span class="t-num">uppercase</span>;
  <span class="t-prop">color</span>: <span class="t-num">#888</span>;
  <span class="t-prop">display</span>: <span class="t-num">block</span>; <span class="t-cmt">/* va à la ligne */</span>
}`,
    js: `<span class="t-cmt">// Le clic sur le label focus</span>
<span class="t-cmt">// automatiquement l'input associé.</span>
<span class="t-cmt">// C'est natif, aucun JS requis</span>
<span class="t-cmt">// si le for/id est bien renseigné.</span>`,
  },

  input: {
    title: 'Input (texte)',
    role: 'Champ de saisie texte — une ligne, contenu libre.',
    html: `<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"text"</span>
  <span class="t-attr">id</span>=<span class="t-val">"nom"</span>
  <span class="t-attr">name</span>=<span class="t-val">"nom"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"Votre nom"</span>
  <span class="t-attr">required</span>
  <span class="t-attr">maxlength</span>=<span class="t-val">"100"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">input</span> {
  <span class="t-prop">padding</span>: <span class="t-num">10px 14px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1.5px solid #ddd</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">font-size</span>: <span class="t-num">0.9rem</span>;
  <span class="t-prop">outline</span>: <span class="t-num">none</span>;
  <span class="t-prop">transition</span>: <span class="t-num">border-color 0.2s</span>;
}
<span class="t-sel">input:focus</span> {
  <span class="t-prop">border-color</span>: <span class="t-num">#111</span>;
}`,
    js: `<span class="t-cmt">// Détecter la saisie en temps réel</span>
input.<span class="t-fn">addEventListener</span>(<span class="t-str">'input'</span>, (e) => {
  console.<span class="t-fn">log</span>(e.target.value);
});

<span class="t-cmt">// Vider le champ</span>
input.value = <span class="t-str">''</span>;`,
  },

  'input-email': {
    title: 'Input (email)',
    role: 'Champ email — valide automatiquement le format adresse@domaine. Clavier adapté sur mobile.',
    html: `<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"email"</span>
  <span class="t-attr">id</span>=<span class="t-val">"email"</span>
  <span class="t-attr">name</span>=<span class="t-val">"email"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"vous@exemple.com"</span>
  <span class="t-attr">required</span>
  <span class="t-attr">autocomplete</span>=<span class="t-val">"email"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-cmt">/* Même style que input[type=text] */</span>
<span class="t-sel">input[type="email"]</span> {
  <span class="t-prop">padding</span>: <span class="t-num">10px 14px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1.5px solid #ddd</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">width</span>: <span class="t-num">100%</span>;
}
<span class="t-sel">input:invalid</span> {
  <span class="t-prop">border-color</span>: <span class="t-num">#e05c2a</span>;
}`,
    js: `<span class="t-cmt">// Validation native : le navigateur</span>
<span class="t-cmt">// vérifie le format automatiquement.</span>

<span class="t-cmt">// Vérification JS si besoin :</span>
<span class="t-kw">const</span> valid = input.<span class="t-fn">checkValidity</span>();
<span class="t-cmt">// → true si format email correct</span>`,
  },

  textarea: {
    title: 'Textarea',
    role: 'Champ de saisie multi-lignes — pour les messages, descriptions ou contenus longs.',
    html: `<span class="t-tag">&lt;textarea</span>
  <span class="t-attr">id</span>=<span class="t-val">"message"</span>
  <span class="t-attr">name</span>=<span class="t-val">"message"</span>
  <span class="t-attr">rows</span>=<span class="t-val">"4"</span>
  <span class="t-attr">placeholder</span>=<span class="t-val">"Votre message…"</span>
<span class="t-tag">&gt;&lt;/textarea&gt;</span>`,
    css: `<span class="t-sel">textarea</span> {
  <span class="t-prop">padding</span>: <span class="t-num">10px 14px</span>;
  <span class="t-prop">border</span>: <span class="t-num">1.5px solid #ddd</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">resize</span>: <span class="t-num">vertical</span>; <span class="t-cmt">/* resize vertical seulement */</span>
  <span class="t-prop">min-height</span>: <span class="t-num">100px</span>;
  <span class="t-prop">font-family</span>: <span class="t-num">inherit</span>;
  <span class="t-prop">width</span>: <span class="t-num">100%</span>;
}`,
    js: `<span class="t-cmt">// Auto-resize selon le contenu</span>
textarea.<span class="t-fn">addEventListener</span>(<span class="t-str">'input'</span>, () => {
  textarea.style.height = <span class="t-str">'auto'</span>;
  textarea.style.height =
    textarea.scrollHeight + <span class="t-str">'px'</span>;
});`,
  },

  checkbox: {
    title: 'Checkbox',
    role: 'Case à cocher — consentement, option binaire. Indispensable pour le RGPD.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"field-check"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;input</span>
    <span class="t-attr">type</span>=<span class="t-val">"checkbox"</span>
    <span class="t-attr">id</span>=<span class="t-val">"consent"</span>
    <span class="t-attr">name</span>=<span class="t-val">"consent"</span>
    <span class="t-attr">required</span>
  <span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;label</span> <span class="t-attr">for</span>=<span class="t-val">"consent"</span><span class="t-tag">&gt;</span>
    J'accepte les conditions
  <span class="t-tag">&lt;/label&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.field-check</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">gap</span>: <span class="t-num">10px</span>;
}
<span class="t-sel">input[type="checkbox"]</span> {
  <span class="t-prop">width</span>: <span class="t-num">16px</span>;
  <span class="t-prop">height</span>: <span class="t-num">16px</span>;
  <span class="t-prop">accent-color</span>: <span class="t-num">#e05c2a</span>; <span class="t-cmt">/* couleur native */</span>
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
}`,
    js: `<span class="t-cmt">// Activer/désactiver un bouton</span>
<span class="t-cmt">// selon la case cochée</span>
checkbox.<span class="t-fn">addEventListener</span>(<span class="t-str">'change'</span>, () => {
  submitBtn.disabled = !checkbox.checked;
});`,
  },

  'form-actions': {
    title: 'Form Actions',
    role: 'Zone des boutons du formulaire — submit et annulation.',
    html: `<span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"form-actions"</span><span class="t-tag">&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"reset"</span><span class="t-tag">&gt;</span>
    Annuler
  <span class="t-tag">&lt;/button&gt;</span>
  <span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
    Envoyer →
  <span class="t-tag">&lt;/button&gt;</span>
<span class="t-tag">&lt;/div&gt;</span>`,
    css: `<span class="t-sel">.form-actions</span> {
  <span class="t-prop">display</span>: <span class="t-num">flex</span>;
  <span class="t-prop">justify-content</span>: <span class="t-num">flex-end</span>;
  <span class="t-prop">gap</span>: <span class="t-num">10px</span>;
  <span class="t-prop">padding-top</span>: <span class="t-num">8px</span>;
  <span class="t-prop">border-top</span>: <span class="t-num">1px solid #eee</span>;
}`,
    js: `<span class="t-cmt">// type="reset" réinitialise</span>
<span class="t-cmt">// tous les champs nativement.</span>
<span class="t-cmt">// Aucun JS requis pour ça.</span>

<span class="t-cmt">// État loading au submit :</span>
btn.<span class="t-fn">addEventListener</span>(<span class="t-str">'click'</span>, () => {
  btn.textContent = <span class="t-str">'Envoi…'</span>;
  btn.disabled = <span class="t-kw">true</span>;
});`,
  },

  submit: {
    title: 'Submit Button',
    role: 'Bouton de soumission — déclenche l\'envoi du formulaire et la validation HTML5.',
    html: `<span class="t-cmt">&lt;!-- type="submit" est clé --&gt;</span>
<span class="t-tag">&lt;button</span> <span class="t-attr">type</span>=<span class="t-val">"submit"</span><span class="t-tag">&gt;</span>
  Envoyer →
<span class="t-tag">&lt;/button&gt;</span>

<span class="t-cmt">&lt;!-- Alternative --&gt;</span>
<span class="t-tag">&lt;input</span>
  <span class="t-attr">type</span>=<span class="t-val">"submit"</span>
  <span class="t-attr">value</span>=<span class="t-val">"Envoyer"</span>
<span class="t-tag">&gt;</span>`,
    css: `<span class="t-sel">button[type="submit"]</span> {
  <span class="t-prop">padding</span>: <span class="t-num">11px 24px</span>;
  <span class="t-prop">background</span>: <span class="t-num">#e05c2a</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
  <span class="t-prop">border</span>: <span class="t-num">none</span>;
  <span class="t-prop">border-radius</span>: <span class="t-num">6px</span>;
  <span class="t-prop">cursor</span>: <span class="t-num">pointer</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">500</span>;
}`,
    js: `form.<span class="t-fn">addEventListener</span>(<span class="t-str">'submit'</span>, async (e) => {
  e.<span class="t-fn">preventDefault</span>();
  submitBtn.textContent = <span class="t-str">'Envoi…'</span>;
  
  <span class="t-kw">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'/api/contact'</span>, {
    <span class="t-prop">method</span>: <span class="t-str">'POST'</span>,
    <span class="t-prop">body</span>: <span class="t-kw">new</span> <span class="t-fn">FormData</span>(form)
  });
  
  submitBtn.textContent = <span class="t-str">'Envoyé ✓'</span>;
});`,
  },

  h3: {
    title: 'H3 — Sous-titre',
    role: 'Titre de niveau 3 — détaille un point dans une section H2. Ne pas sauter de niveaux (H1→H2→H3).',
    html: `<span class="t-cmt">&lt;!-- Hiérarchie à respecter --&gt;</span>
<span class="t-tag">&lt;h1&gt;</span>Titre page<span class="t-tag">&lt;/h1&gt;</span>
  <span class="t-tag">&lt;h2&gt;</span>Section<span class="t-tag">&lt;/h2&gt;</span>
    <span class="t-tag">&lt;h3&gt;</span>Sous-section<span class="t-tag">&lt;/h3&gt;</span>
      <span class="t-tag">&lt;h4&gt;</span>Détail<span class="t-tag">&lt;/h4&gt;</span>`,
    css: `<span class="t-sel">h3</span> {
  <span class="t-prop">font-size</span>: <span class="t-num">1.15rem</span>;
  <span class="t-prop">font-weight</span>: <span class="t-num">600</span>;
  <span class="t-prop">line-height</span>: <span class="t-num">1.3</span>;
  <span class="t-prop">margin-bottom</span>: <span class="t-num">8px</span>;
  <span class="t-prop">color</span>: <span class="t-num">#111</span>;
}`,
    js: `<span class="t-cmt">// Les titres n'ont pas de JS natif.</span>
<span class="t-cmt">// Usage courant : ancre de navigation</span>
<span class="t-cmt">// avec un id sur le H3.</span>

<span class="t-tag">&lt;h3</span> <span class="t-attr">id</span>=<span class="t-val">"section-design"</span><span class="t-tag">&gt;</span>
  Design
<span class="t-tag">&lt;/h3&gt;</span>`,
  },

  footer: {
    title: 'Footer',
    role: 'Pied de page — liens secondaires, mentions légales, copyright. Landmark ARIA automatique.',
    html: `<span class="t-tag">&lt;footer&gt;</span>
  <span class="t-tag">&lt;div</span> <span class="t-attr">class</span>=<span class="t-val">"footer-inner"</span><span class="t-tag">&gt;</span>
    <span class="t-tag">&lt;p&gt;</span>Logo<span class="t-tag">&lt;/p&gt;</span>
    <span class="t-tag">&lt;nav&gt;</span>
      <span class="t-tag">&lt;a</span> <span class="t-attr">href</span>=<span class="t-val">"/"</span><span class="t-tag">&gt;</span>Accueil<span class="t-tag">&lt;/a&gt;</span>
    <span class="t-tag">&lt;/nav&gt;</span>
    <span class="t-tag">&lt;p&gt;</span>&amp;copy; 2026<span class="t-tag">&lt;/p&gt;</span>
  <span class="t-tag">&lt;/div&gt;</span>
<span class="t-tag">&lt;/footer&gt;</span>`,
    css: `<span class="t-sel">footer</span> {
  <span class="t-prop">background</span>: <span class="t-num">#111</span>;
  <span class="t-prop">color</span>: <span class="t-num">white</span>;
  <span class="t-prop">padding</span>: <span class="t-num">48px 24px</span>;
}
<span class="t-sel">.footer-inner</span> {
  <span class="t-prop">display</span>: <span class="t-num">grid</span>;
  <span class="t-prop">grid-template-columns</span>: <span class="t-num">1fr auto auto</span>;
  <span class="t-prop">align-items</span>: <span class="t-num">center</span>;
  <span class="t-prop">gap</span>: <span class="t-num">32px</span>;
}`,
    js: `<span class="t-cmt">// Afficher l'année dynamiquement</span>
<span class="t-kw">const</span> year = <span class="t-kw">new</span> <span class="t-fn">Date</span>()
  .<span class="t-fn">getFullYear</span>();

<span class="t-fn">document</span>
  .<span class="t-fn">querySelector</span>(<span class="t-str">'.copyright'</span>)
  .textContent = <span class="t-str">\`© \${year}\`</span>;`,
  },

};

// ── INTERACTION ───────────────────────────────────────────────────────────────

const codeEmpty  = document.getElementById('codeEmpty');
const codePanels = document.getElementById('codePanels');
const elTitle    = document.getElementById('elementTitle');
const elRole     = document.getElementById('elementRole');
const codeHTML   = document.getElementById('codeHTML');
const codeCSS    = document.getElementById('codeCSS');
const codeJS     = document.getElementById('codeJS');

let activeEl = null;

document.querySelectorAll('.el[data-id]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();

    const id   = el.dataset.id;
    const data = ELEMENTS[id];
    if (!data) return;

    // Deactivate previous
    if (activeEl) activeEl.classList.remove('active');
    activeEl = el;
    el.classList.add('active');

    // Show panels
    codeEmpty.classList.add('hidden');
    codePanels.classList.remove('hidden');

    // Fill content
    elTitle.textContent  = data.title;
    elRole.textContent   = data.role;
    codeHTML.innerHTML   = data.html;
    codeCSS.innerHTML    = data.css;
    codeJS.innerHTML     = data.js;

    // Scroll right pane to top
    document.querySelector('.pane-right').scrollTop = 0;
  });
});

// Click elsewhere → deactivate
document.addEventListener('click', () => {
  if (activeEl) {
    activeEl.classList.remove('active');
    activeEl = null;
  }
});

// Prevent form submit
document.querySelector('.demo-form')?.addEventListener('submit', e => e.preventDefault());
