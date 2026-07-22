# Whissel Beer Group — Page Topology

Target: https://whisselbeergroup.com/ (WordPress + AgentFire real-estate theme)

## Design tokens
- Background (almond): `#ede5dd`; darker `#ded3c7`
- Brand orange: `#c75912`
- Ink / dark sections: `#23201c` → `#1c1a17`
- Fonts (originals → substitutes): larken (display serif) → **Fraunces**; degular (sans) → **Figtree**; Montserrat → Montserrat
- Headings use serif, italic for emphasis lines.

## Sections (top → bottom) → components
1. **Header** (fixed, transparent→dark on scroll >40px) → `Header.tsx`
2. **Hero** (bg video `hero-san-diego.mp4`, serif headline, CTAs, animated stats) → `Hero.tsx`
3. **Featured On** (news-logo marquee) → `FeaturedOn.tsx`
4. **Area Guides** (Exclusive/Home Match pill toggle, "In Sunny San Diego", 9 area cards + stylized SD map) → `AreaGuides.tsx`
5. **Products** (dark gradient, horizontal snap carousel of 4 cards) → `Products.tsx`
6. **Testimonials** ("Why people choose…", quote card w/ prev/next) → `Testimonials.tsx`
7. **About** ("We are Whissel Beer Group", team image, overlay quote) → `About.tsx`
8. **CTA Banner** ("Simplify your next move", Balboa Park bg) → `CtaBanner.tsx`
9. **Social** ("Let's get social", reel thumbnails carousel) → `Social.tsx`
10. **Footer** (phone/logo/email, 5 offices, socials) → `Footer.tsx`

Overlays: **SearchBar.tsx** (sticky bottom), **FloatingPhone.tsx** (bottom-right).

## Interaction models
- Header: scroll-driven background transition (useState + scroll listener)
- Hero stats: IntersectionObserver fade-up
- Area toggle: click-driven tabs
- Products / Social: click-driven horizontal scroll carousels
- Testimonials: click prev/next index
