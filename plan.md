# Tessera Studio — Premium Agency Website Plan

## 🏗️ Tech Stack Analysis & Recommendation

### Primary Stack: Next.js 14 + Framer Motion

| Technology | Purpose | Why It Wins |
|---|---|---|
| **Next.js 14 (App Router)** | Framework | SSR/SSG, SEO, file-based routing, image optimization |
| **Framer Motion** | Animations | Best-in-class React animation library, physics-based, buttery smooth |
| **Tailwind CSS** | Styling | Rapid utility-first styling, dark mode, responsive |
| **Three.js / React Three Fiber** | 3D Visuals | WebGL-powered 3D hero elements, particle systems |
| **GSAP** | Scroll Animations | ScrollTrigger for pinned sections, timeline control |
| **Lenis** | Smooth Scrolling | ~60fps smooth scroll, integrates with GSAP |
| **Radix UI** | Accessible Components | Headless UI primitives |
| **next/font** | Typography | Zero-layout shift font loading |

### Why NOT Vite/CRA?
Next.js wins for this use case: built-in SEO via metadata API, image optimization via `<Image />`, server components for faster TTFB, and Vercel-optimized deployment.

### Why Framer Motion over GSAP only?
Framer Motion handles React state-driven animations (entrance, exit, layout) while GSAP handles scroll-driven timeline animations. Use both together for maximum fluidity.

---

## 🎨 Design System

### Color Tokens
```
--bg-primary:     #0A0A0A
--bg-secondary:   #111111
--bg-card:        #141414
--accent-purple:  #7B5EA7
--accent-blue:    #3B82F6
--accent-glow:    rgba(123, 94, 167, 0.4)
--text-primary:   #FFFFFF
--text-secondary: #A1A1AA
--text-muted:     #52525B
--border:         rgba(255,255,255,0.08)
--glass:          rgba(255,255,255,0.04)
```

### Typography Scale
- **Display**: Clash Display or Syne — geometric, editorial weight
- **Heading**: DM Sans — clean, modern
- **Body**: Geist — technical, readable
- **Mono**: JetBrains Mono — code accents, AI automation section

### Spacing System
8px base grid. Sections: 120px–160px vertical padding on desktop, 80px mobile.

---

## 📄 Page Architecture

```
app/
├── layout.tsx          → Root layout (fonts, meta, Lenis provider)
├── page.tsx            → Home (all sections)
├── globals.css         → CSS variables, base styles
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── sections/
    │   ├── Hero.tsx
    │   ├── Services.tsx
    │   ├── Portfolio.tsx
    │   ├── WhyTessera.tsx
    │   ├── Process.tsx
    │   ├── Testimonials.tsx
    │   └── FinalCTA.tsx
    ├── ui/
    │   ├── MagneticButton.tsx
    │   ├── FloatingCard.tsx
    │   ├── GlowOrb.tsx
    │   ├── AnimatedCounter.tsx
    │   ├── CursorFollower.tsx
    │   └── NoiseTexture.tsx
    └── 3d/
        ├── HeroScene.tsx    (R3F canvas)
        └── ParticleField.tsx
```

---

## 🚀 Section-by-Section Breakdown

### 1. NAVBAR
- Frosted glass background on scroll (backdrop-blur)
- Logo: "Tessera" wordmark + geometric tile icon
- Nav links with magnetic hover effect
- "Book a Call" CTA — accent purple border, fill on hover
- Mobile: full-screen menu with staggered link entrance
- **Animation**: Fade down on load (delay 0.5s)

### 2. HERO SECTION ⭐
**Layout**: Split — left text, right 3D/visual canvas

**Left Column:**
- Eyebrow badge: "Growth Agency for Modern Businesses" (pill with glow)
- H1: "We build brands, websites & growth systems that scale businesses."
  - Word-by-word entrance animation (stagger 0.04s)
- Subheadline: fade in after H1
- CTA row: "Book a Call" (filled purple) + "View Projects" (ghost)
- Social proof row: "Trusted by 40+ brands" with avatar stack

**Right Column — 3D Visual Stack:**
- Floating UI cards that levitate (CSS 3D transforms + Framer Motion)
  - Analytics dashboard card (mock chart, numbers)
  - "Lead captured" notification card
  - Brand identity preview card
  - AI workflow node card
- Ambient glow orbs (purple, blue) — slow drift animation
- Noise texture overlay for premium feel
- Subtle grid lines in background

**Background:**
- Dark gradient mesh (purple → blue → transparent)
- Animated dot/grid pattern
- Canvas particle field (Three.js)

**Animations:**
- Lenis smooth scroll initialized
- Hero text stagger: words animate in from below (y: 30 → 0, opacity: 0 → 1)
- Cards: float animation (y oscillation ±12px, 4s ease-in-out infinite)
- Each card slightly offset in phase for organic feel

---

### 3. MARQUEE TRUST BAR
- "Trusted by brands in real estate, F&B, SaaS, e-commerce, and more"
- Infinite horizontal scroll marquee of industry icons/names
- Subtle opacity: 40%, white

---

### 4. SERVICES SECTION
**Layout**: 2×2 grid → expands on hover

**Card Design (glassmorphism):**
- Background: rgba(255,255,255,0.03)
- Border: 1px rgba(255,255,255,0.08)
- Backdrop-filter: blur(12px)
- Accent top-border glow on hover (purple)
- Icon: custom SVG, 40px, accent colored

**4 Service Cards:**

1. **Website Design & Development**
   - Icon: browser/monitor frame
   - List: Business websites, Landing pages, E-commerce, Custom dev
   - Hover: card lifts (y: -8px), glow intensifies

2. **Branding & Design**
   - Icon: diamond/gem (Tessera tile reference)
   - List: Logo design, Brand identity, Social creatives, Visual systems

3. **Digital Marketing**
   - Icon: trending arrow / target
   - List: Meta ads, Lead gen, Social growth, Funnel creation

4. **AI Automation**
   - Icon: circuit/neural network
   - List: AI receptionists, Lead follow-up, CRM workflows, Process automation
   - Badge: "NEW" in accent

**Animation**: Cards stagger in on scroll (viewport intersection), 0.1s delay each

---

### 5. PORTFOLIO / CASE STUDIES
**Layout**: Horizontal scroll on mobile, masonry/grid on desktop

**5 Case Study Cards:**

| Project | Category | Visual |
|---|---|---|
| Real Estate Co. Website | Web Design | Architecture mock screenshot |
| Café Marketing Campaign | Digital Marketing | Campaign metrics card |
| Startup Landing Page | Web + Branding | SaaS UI mockup |
| AI Receptionist System | AI Automation | Chat interface mock |
| Brand Identity Project | Branding | Logo mark reveal |

**Card Design:**
- 16:10 aspect ratio
- Dark background with project preview (CSS-styled mockup, not real images)
- Category pill badge (top-left)
- On hover: overlay slides up revealing project name + arrow
- Cursor changes to "View →" custom cursor on hover

**Animation:**
- Parallax on scroll (each card moves at slightly different speed)
- Hover: scale(1.02), overlay fade-in

---

### 6. WHY TESSERA
**Layout**: Left — large statement text. Right — 5 feature pills stacked

**5 Differentiators:**
1. ⚡ Premium design — every pixel considered
2. 🚀 Fast execution — 2–4 week delivery
3. 📈 Growth-focused — built to convert
4. 🤖 AI-first approach — automation-native
5. 🔄 End-to-end execution — strategy to scale

**Visual**: Animated stat counters
- "40+ Brands Scaled"
- "3.2x Average ROI"
- "14-Day Avg. Delivery"

**Animation**: Number count-up on scroll entry

---

### 7. PROCESS SECTION
**Layout**: Horizontal stepped timeline

**5 Steps:**
1. **Discover** — Understand your business, goals, audience
2. **Strategize** — Build the roadmap and system design
3. **Build** — Design + develop + automate
4. **Launch** — QA, deploy, go live
5. **Scale** — Optimize, iterate, grow

**Animation:**
- Steps reveal left to right on scroll (GSAP ScrollTrigger horizontal)
- Active step: accent glow, larger
- Connector line draws from left to right (SVG stroke-dashoffset animation)

---

### 8. TESTIMONIALS
**Layout**: 3-column grid, glassmorphism cards

**Card Design:**
- Glass: backdrop-blur(20px), 1px white/8% border
- Star rating (5 stars, gold)
- Quote text (italic, large)
- Avatar: colored gradient circle with initials
- Name + company (subtext)

**Animation:**
- Cards float in from bottom with stagger
- Subtle hover lift
- Optional: auto-scroll carousel on mobile

---

### 9. FINAL CTA SECTION
**Full-width dark section with glow background**

- Large H2: "Your business deserves more than just a website."
- Subtext: "Build your brand, automate growth, and scale faster with Tessera."
- CTA: "Start Your Project →" (large, filled, magnetic button)
- Secondary: Calendly link or "or book a free call"
- Background: radial gradient purple glow, noise texture

---

### 10. FOOTER
- Logo + one-liner
- Nav links (Services, Portfolio, Process, Contact)
- Social links (Instagram, LinkedIn, Twitter/X)
- Legal: Privacy Policy, Terms
- Copyright: "© 2025 Tessera Studio. All rights reserved."
- Bottom decorative line

---

## ✨ Premium UI Features (Priority List)

### Tier 1 — MUST HAVE (Conversion + Premium Feel)
| Feature | Implementation |
|---|---|
| Custom cursor | SVG dot + ring, scales on hover, changes on links |
| Magnetic buttons | Mouse-position-tracking translate transform |
| Smooth scroll | Lenis.js (60fps, no jank) |
| Staggered text reveal | Framer Motion word-split animation |
| Scroll progress bar | Top of page, accent color |
| Glassmorphism cards | backdrop-filter + rgba border |
| Floating hero cards | Framer Motion infinite y-oscillation |
| Viewport entrance animations | useInView + motion.div |

### Tier 2 — HIGH IMPACT
| Feature | Implementation |
|---|---|
| Noise texture overlay | SVG feTurbulence filter, low opacity |
| Gradient mesh background | CSS conic-gradient + blur |
| Ambient glow orbs | Blurred div, Framer Motion drift |
| Animated counters | Custom useCounter hook + intersection observer |
| Process timeline draw | SVG stroke-dashoffset on scroll |
| Cursor glow follower | Canvas or div that tracks mouse position |
| Section pin (Process) | GSAP ScrollTrigger pinning |

### Tier 3 — BONUS POLISH
| Feature | Implementation |
|---|---|
| Page transition | Framer Motion AnimatePresence |
| 3D card tilt | react-tilt or CSS perspective on mousemove |
| Particle background | Three.js BufferGeometry particles |
| Marquee trust bar | CSS animation infinite scroll |
| Mobile haptics (PWA) | navigator.vibrate on CTA tap |
| OG image generation | next/og dynamic social preview |

---

## 📱 Responsive Strategy

| Breakpoint | Layout Changes |
|---|---|
| Mobile (< 640px) | Single column, reduced animations, touch-optimized |
| Tablet (640–1024px) | 2-col grid, scaled typography |
| Desktop (> 1024px) | Full layout, all animations active |
| Wide (> 1440px) | Max-width container, cinematic spacing |

**Performance Notes:**
- Disable parallax and particle effects on mobile (prefers-reduced-motion + matchMedia)
- Lazy load below-fold sections
- Use Next.js `<Image />` with blur placeholder
- Font subsetting via next/font

---

## 🔍 SEO Implementation

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Tessera Studio — Premium Growth Agency',
  description: 'We build brands, websites & growth systems that scale businesses. Premium web design, branding, AI automation, and digital marketing.',
  keywords: ['growth agency', 'web design', 'branding', 'AI automation', 'digital marketing'],
  openGraph: {
    title: 'Tessera Studio',
    description: 'Premium growth agency for modern businesses.',
    image: '/og-image.png',
  },
  twitter: { card: 'summary_large_image' },
}
```

- Semantic HTML5 (article, section, nav, main)
- Schema.org LocalBusiness markup
- Sitemap.xml auto-generation
- Robots.txt

---

## 🗓️ Build Phases

### Phase 1 — Foundation (Day 1)
- [ ] Next.js 14 setup, Tailwind config, font imports
- [ ] Design tokens (CSS variables), global styles
- [ ] Lenis smooth scroll setup
- [ ] Navbar + Footer components
- [ ] Custom cursor component

### Phase 2 — Hero + Services (Day 2)
- [ ] Hero section (text + floating cards)
- [ ] Marquee trust bar
- [ ] Services section (glassmorphism grid)

### Phase 3 — Portfolio + Why + Process (Day 3)
- [ ] Portfolio case study cards
- [ ] Why Tessera differentiators + counters
- [ ] Process horizontal timeline

### Phase 4 — Testimonials + CTA + Polish (Day 4)
- [ ] Testimonial cards
- [ ] Final CTA section
- [ ] Animation pass (all entrance animations)
- [ ] Mobile responsiveness audit
- [ ] Performance audit (Lighthouse > 90)

---

## 🚦 Deployment

- **Platform**: Vercel (zero-config Next.js)
- **Domain**: tesserastudio.com
- **Analytics**: Vercel Analytics + Plausible
- **Forms**: Resend API or Calendly embed for CTA
- **Performance target**: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## 💡 Standout Design Decisions

1. **Tessera tile motif** — Use subtle geometric tile/mosaic pattern as a recurring brand texture throughout (in backgrounds, section dividers, card corners)
2. **Electric violet → steel blue gradient** — More distinctive than pure purple, nods to both luxury and technology
3. **Editorial spacing** — XL line heights, generous padding creates Apple-tier breathing room
4. **Monospace accents** — Use JetBrains Mono for AI/automation section labels to reinforce technical credibility
5. **Noise grain overlay** — 4% opacity grain gives the dark backgrounds a premium film-like quality instead of flat black