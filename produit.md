# 🍺 Product Design Document — Chesterfields Bar
## Landing Page Web Haut de Gamme · Marrakech · v2.0

---

## 1. Vision Produit

Landing page **single-page premium** pour le Chesterfields Bar, organisée comme un site de bar anglais moderne avec une identité visuelle **Darkস্বর Mode** (brun nuit + ambre). Inspirée par l'élégance des établissements haut de gamme, l'expérience intègre une narration visuelle immersive, un preloader élégant, et utilise des composants d'animation signature pour créer une sensation haut de gamme immédiatement perceptible au scroll.

---

## 2. Stack Technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| Structure composants | shadcn/ui (CLI) |
| Styling | Tailwind CSS + CSS Variables |
| Animations | Framer Motion + Motion (motion/react) |
| Composants UI | shadcn/ui + Radix UI |
| Icons | lucide-react |
| Fonts | Google Fonts — Playfair Display + Inter |
| Déploiement | Vercel |

### Dépendances NPM à installer

```bash
npx shadcn@latest init
npm install framer-motion
npm install motion
npm install @radix-ui/react-avatar
npm install @studio-freight/react-lenis
npm install lucide-react
```

### Extension tailwind.config.js requise

```js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      }
    },
  },
}
```

---

## 3. Composants UI Premium — Les 3 Signatures

### 3.1 GlowingEffect `→ /components/ui/glowing-effect.tsx`

**Usage dans le projet :** Appliqué sur toutes les cards de la section **"Notre Ambiance"** et la section **"Notre Carte"** (feature cards).

**Configuration recommandée pour Chesterfields :**
```tsx
<GlowingEffect
  spread={40}
  glow={true}
  disabled={false}
  proximity={64}
  inactiveZone={0.01}
  borderWidth={3}
/>
```

**Gradient personnalisé :** Adapter les couleurs du gradient interne aux couleurs ambre/cuivre de la charte :
- Remplacer `#dd7bbb` → `#C8860A` (ambre)
- Remplacer `#d79f1e` → `#F5A623` (or)
- Remplacer `#5a922c` → `#8B4513` (brun cuivre)
- Remplacer `#4c7894` → `#2C1A0E` (brun nuit)

**Sections concernées :**
- Cards "Notre Ambiance" (3 feature cards : Pub · Terrasse · Live Football)
- Cards "Notre Carte" (tabs Bières / Cocktails / Food)
- Card adresse/infos dans la section Réservation

---

### 3.2 ContainerScroll Animation `→ /components/ui/container-scroll-animation.tsx`

**Usage dans le projet :** Section **Hero → Transition vers "Notre Ambiance"**. Au scroll depuis le hero, la photo de l'établissement apparaît avec l'effet 3D perspective tilt qui se redresse progressivement.

**Implémentation :**
```tsx
<ContainerScroll
  titleComponent={
    <>
      <span className="text-sm uppercase tracking-widest text-amber-400 font-semibold">
        119 Av. Mohammed V · Hôtel Nassim
      </span>
      <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 font-playfair">
        Le pub anglais au{" "}
        <span className="gradient-text">cœur de Marrakech</span>
      </h1>
    </>
  }
>
  {/* Photo HD de la terrasse ou intérieur pub */}
  <Image
    src="[photo-chesterfields-terrasse-HD]"
    alt="Chesterfields Bar - Terrasse Marrakech"
    fill
    className="object-cover rounded-2xl"
  />
</ContainerScroll>
```

**Effet attendu :** La photo du bar apparaît inclinée en 3D (rotateX 20deg) et se redresse à 0deg au fur et à mesure que l'utilisateur scroll → effet "reveal premium" très impactant.

---

### 3.3 Testimonials with Marquee `→ /components/ui/testimonials-with-marquee.tsx`

**Usage dans le projet :** Section **`#temoignages`** — Carrousel horizontal infini avec pause au hover.

**Données à injecter (vraies reviews Google) :**

```tsx
const chesterfieldsReviews = [
  {
    author: {
      name: "Kia Fatemi",
      handle: "Local Guide · 29 avis",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Cozy pub for drinks in Marrakech, the local beer that they serve is very nice and the prices are reasonable. Seat are available inside and outside."
  },
  {
    author: {
      name: "Luis Navaro Lopez",
      handle: "Local Guide · 10 avis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The best place to be in Marrakech, nice staff nice music, very recommended :)"
  },
  {
    author: {
      name: "Michael Fawcett",
      handle: "Local Guide · 368 avis",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "A very nice quirky pub, well worth a visit. Price per person MAD 50–100."
  },
  {
    author: {
      name: "Juicy Juice",
      handle: "Local Guide · 140 avis",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "A safe place for beer. Cheapest price in Marrakech. Friendly service and a cool interior. Pleasant music."
  },
  {
    author: {
      name: "Teo",
      handle: "Local Guide · 100 avis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Beautiful courtyard. Nice bar. Food: 5/5."
  },
  {
    author: {
      name: "杉浦 はな",
      handle: "Local Guide · 12 avis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Great spot to enjoy a beer which can be hard to find in Marrakech. Good music, friendly people from all over the world!"
  }
]
```

**Props à passer :**
```tsx
<TestimonialsSection
  title="Ce que disent nos clients"
  description="⭐ 4.2 / 5 · Basé sur 340 avis Google"
  testimonials={chesterfieldsReviews}
/>
```

**Personnalisation des cards :** Adapter le style de `TestimonialCard` à la charte Chesterfields :
- `bg-gradient-to-b from-[#2C1A0E] to-[#1A0A00]`
- `border-[#C8860A]/30`
- Texte crème `#F5EDD6`
- Étoiles ambre `#F5A623`

---

### 3.4 Preloader Immersif (Entrée en scène)

**Usage dans le projet :** Écran de chargement initial.
**Effet attendu :** Fond noir absolu, le logo Chesterfields se dessine lentement (SVG line drawing) en or, suivi d'un fondu au noir vers la section Hero. Effet "Rideau qui s'ouvre".

---

## 4. Gradient Text — Mots Clés Premium

Tous les **mots-clés visuellement importants** des titres seront en texte gradient ambre/or.

### Classe CSS utilitaire à ajouter dans globals.css

```css
.gradient-text {
  background: linear-gradient(135deg, #C8860A 0%, #F5A623 40%, #FFD700 70%, #C8860A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Application par section

| Section | Titre complet | Mot(s) en gradient |
|---|---|---|
| Hero | "Le pub anglais au **cœur de Marrakech**" | *cœur de Marrakech* |
| Ambiance | "Une ambiance **authentique**" | *authentique* |
| Notre Carte | "Des saveurs **artisanales**" | *artisanales* |
| À Propos | "Notre **histoire**" | *histoire* |
| Testimonials | "Ce que disent nos **clients**" | *clients* |
| Réservation | "Réservez **votre table**" | *votre table* |
| Footer tagline | "Le pub anglais au cœur de **Marrakech**" | *Marrakech* |

---

## 5. Architecture des Composants

```
/app
  /page.tsx                              ← Page principale (landing)
  /globals.css                           ← Variables CSS + .gradient-text

/components
  /ui
    glowing-effect.tsx                   ← Composant #1 — Glow sur cards
    container-scroll-animation.tsx       ← Composant #2 — Hero scroll 3D
    testimonials-with-marquee.tsx        ← Composant #3 — Reviews marquee
    testimonial-card.tsx                 ← Dépendance du marquee
    avatar.tsx                           ← Dépendance shadcn/ui

  /sections
    Header.tsx                           ← Sticky + logo swap scroll
    Hero.tsx                             ← ContainerScroll ici
    Ambiance.tsx                         ← GlowingEffect sur feature cards
    Menu.tsx                             ← GlowingEffect + tabs
    Galerie.tsx                          ← Grid masonry + lightbox
    APropos.tsx                          ← Split screen texte/image
    Temoignages.tsx                      ← TestimonialsSection ici
    Reservation.tsx                      ← Formulaire + map embed
    Footer.tsx
```

---

## 6. Design System

### 6.1 Palette

| Token | Valeur | Usage |
|---|---|---|
| `--color-primary` | `#1A0A00` | Background principal |
| `--color-secondary` | `#2C1A0E` | Cards, sections alternées |
| `--color-accent` | `#C8860A` | CTA, highlights, glow |
| `--color-accent-light` | `#F5A623` | Hover, étoiles, gradient |
| `--color-gold` | `#FFD700` | Gradient text endpoint |
| `--color-text-primary` | `#F5EDD6` | Titres (blanc crème) |
| `--color-text-secondary` | `#A89070` | Corps de texte |
| `--color-surface` | `#231208` | Conteneurs, cards |
| `--color-border` | `rgba(200,134,10,0.25)` | Bordures ambrées |

### 6.2 Typographie

| Rôle | Police | Poids | Taille |
|---|---|---|---|
| Display / Hero | Playfair Display | 700 | 64–80px |
| Titres sections | Playfair Display | 600 | 36–48px |
| Sous-titres | Inter | 500 | 18–24px |
| Corps | Inter | 400 | 15–17px |
| Labels badges | Inter | 600 CAPS | 11–13px |
| CTA | Inter | 700 | 15px |

### 6.3 Tokens visuels

```css
--border-radius-container: 32px;
--border-radius-card: 20px;
--border-radius-button: 50px;
--border-radius-badge: 8px;
--shadow-card: 0 4px 32px rgba(200,134,10,0.12);
--backdrop-blur: blur(16px);
```

---

## 7. Sections & Ordre

| # | Section | Ancre | Composant signature |
|---|---|---|---|
| 0 | Preloader | — | SVG Line Drawing |
| 1 | Header sticky | — | Logo swap CSS + Glassmorphism |
| 2 | Hero | `#accueil` | **ContainerScroll** + Titre Storytelling |
| 3 | Notre Ambiance | `#ambiance` | **GlowingEffect** cards + Texture Parallax |
| 4 | Notre Carte | `#menu` | **GlowingEffect** + tabs |
| 5 | Galerie | `#galerie` | Masonry + lightbox |
| 6 | À Propos | `#a-propos` | Split screen |
| 7 | Testimonials | `#temoignages` | **Testimonials Marquee** |
| 8 | Réservation | `#reservation` | Formulaire + Maps embed |
| 9 | Footer | — | — |

---

## 8. Header Sticky — Logo Swap

```tsx
// Comportement scroll
scroll === 0      → background: transparent · logo SVG blanc
scroll > 80px     → background: rgba(26,10,0,0.92) + blur(16px) · logo SVG ambre/crème
```

---

## 9. Responsive Breakpoints

| Breakpoint | Largeur | Comportement |
|---|---|---|
| Mobile | < 768px | 1 colonne, nav drawer |
| Tablet | 768–1023px | 2 colonnes |
| Desktop | 1024–1439px | Layout complet |
| Wide | ≥ 1440px | max-width 1400px centré |

---

## 10. Micro-interactions & Animations

| Élément | Animation | Librairie |
|---|---|---|
| Hero image 3D | rotateX 20deg → 0deg au scroll | Framer Motion (ContainerScroll) |
| Cards feature | Glow ambre au hover souris | motion/react (GlowingEffect) |
| Reviews | Slide horizontal infini, pause hover | CSS + Tailwind (Marquee) |
| Header | bg fade + blur au scroll | CSS transition |
| Titres gradient | Static — shimmer optionnel | CSS |
| CTA buttons | Scale 1.04 + glow au hover | CSS transition |
| Stats badges | Count-up au scroll-in | Framer Motion |
| Smooth Scroll | Navigation fluide de la page entière | Lenis |
| Bouton Flottant (Mobile) | "Réserver" fixe en bas de l'écran | CSS Sticky |

---

## 11. Éléments SUPPRIMÉS vs La Table Espagnole originale

| Élément | Décision |
|---|---|
| Blog | ❌ Supprimé |
| Newsletter / popup | ❌ Supprimée |
| Événements privés | ❌ Supprimés |
| Pages légales | ❌ Supprimées |
| Header disparaissant | ❌ → Sticky permanent |
| WordPress / Elementor | ❌ → Next.js + shadcn |

---

## 12. Stratégie SEO & Performance (Ajout)

| Critère | Implémentation |
|---|---|
| **Sémantique** | Balises HTML5 (`<article>`, `<section>`, `<main>`), structure H1-H3 stricte. |
| **Meta Données** | Titres et descriptions optimisés ("Chesterfields Bar - Pub Anglais à Marrakech"). |
| **Schema.org** | JSON-LD type `BarOrPub` et `Restaurant` avec horaires, adresse, et téléphone. |
| **Performances** | Images WebP/AVIF via `next/image`, lazy loading, polices optimisées (Next/Font). |

---

*Document de conception produit — Chesterfields Bar · Marrakech · v2.0*
*Composants signature : GlowingEffect · ContainerScroll · TestimonialsMarquee · Smooth Scroll*