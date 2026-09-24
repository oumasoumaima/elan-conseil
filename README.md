# ÉLAN — Site vitrine

Site vitrine pour ÉLAN, accompagnement personnalisé (coaching orientation, évolution professionnelle, gestion du changement). Développé avec React et Vite, avec des animations soignées façon site premium.

![Aperçu du site ÉLAN](src/assets/localhost.png)

## Stack technique

- **React 19** + **Vite** — structure et build
- **GSAP** (+ ScrollTrigger) — animations au scroll, révélations en cascade, parallaxe
- **Lenis** — défilement fluide (smooth scroll)
- **Lucide React** — icônes
- **CSS natif** — pas de framework CSS, variables CSS pour la charte graphique (couleurs, typographies, espacements)

## Structure du projet

```
src/
├── components/
│   ├── Header.jsx / .css        # Navigation fixe + menu mobile
│   ├── Hero.jsx / .css          # Titre animé mot par mot + image en parallaxe
│   ├── Services.jsx / .css      # Carrousel centré (carte active + voisines floutées)
│   ├── HowItWorks.jsx / .css    # Timeline du processus d'accompagnement
│   ├── QuoteInterlude.jsx       # Citation d'interlude
│   ├── Testimonials.jsx / .css  # Grille d'avis clients avec avatars
│   ├── Pricing.jsx / .css       # Grille tarifaire
│   ├── FAQ.jsx / .css           # Accordéon de questions fréquentes
│   ├── Contact.jsx / .css       # Formulaire / bloc contact
│   ├── Footer.jsx / .css        # Pied de page
│   └── Cursor.jsx / .css        # Curseur personnalisé (désactivé sur mobile/tactile)
├── hooks/
│   ├── useScrollReveal.js       # Révélations au scroll (fade + flou) via GSAP ScrollTrigger
│   ├── useLenis.js              # Initialise le smooth scroll et le lie à GSAP
│   └── useMagnetic.js           # Effet magnétique sur les boutons (.btn)
├── App.jsx                      # Assemble les sections + branche les hooks globaux
├── index.css                    # Variables CSS globales (couleurs, typographie, espacements)
└── main.jsx                     # Point d'entrée React
```


## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre le site en local avec rechargement à chaud (HMR).

## Build de production

```bash
npm run build
```

Génère les fichiers optimisés dans le dossier `dist/`.

```bash
npm run preview
```

Permet de prévisualiser le build de production en local.

## Lint

```bash
npm run lint
```

## Notes sur les animations

- Les éléments avec les classes `fade-in-up`, `fade-in-left`, `fade-in-right` se révèlent automatiquement au scroll (géré par `useScrollReveal`). Une classe `delay-100`, `delay-200`... peut être ajoutée pour décaler l'apparition.
- L'attribut `data-stagger` sur un conteneur fait apparaître ses enfants en cascade.
- L'attribut `data-parallax="40"` sur une image applique un effet de parallaxe (la valeur définit l'intensité en pixels).
- Le curseur personnalisé et l'effet magnétique des boutons sont automatiquement désactivés sur les appareils tactiles.

## Personnalisation

- **Couleurs / typographies** : à modifier dans `src/index.css` (variables CSS type `--color-primary`, `--color-secondary`, `--font-heading`, etc.).
- **Contenu des sections** : chaque section a ses données (services, tarifs, avis, FAQ...) définies directement en haut du composant `.jsx` correspondant, sous forme de tableau — facile à éditer sans toucher au reste du code.
