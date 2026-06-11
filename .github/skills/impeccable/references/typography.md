# Typography Reference

## Type Scale

Use a modular scale (ratio 1.25 or 1.333). Apply fluid sizing with `clamp()` so text breathes naturally across screen sizes.

```css
/* Example modular scale — major third (1.25) */
--text-xs: clamp(0.64rem, 0.6rem + 0.2vw, 0.72rem);
--text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.9rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.1rem);
--text-lg: clamp(1.25rem, 1.15rem + 0.5vw, 1.4rem);
--text-xl: clamp(1.563rem, 1.4rem + 0.8vw, 1.75rem);
--text-2xl: clamp(1.953rem, 1.7rem + 1.25vw, 2.2rem);
--text-3xl: clamp(2.441rem, 2rem + 2vw, 3rem);
--text-4xl: clamp(3.052rem, 2.4rem + 3vw, 4rem);
```

## Font Pairing Strategies

### Display + Body

Use a high-contrast display font for headings and a refined, legible font for body copy.

**Avoid:** Inter, Roboto, Arial, Open Sans, system-ui as display fonts — they are invisible.

**Strong display options:**

- Serif: Playfair Display, Cormorant, DM Serif Display, Instrument Serif
- Geometric: Clash Display, Cabinet Grotesk, Satoshi, Plus Jakarta Sans
- Expressive: Fraunces, Chillax, General Sans

**Strong body options:**

- Literata, Source Serif 4, DM Sans, Geist, Geist Mono (for code only)

### Weight & Style Contrast

Don't rely on size alone. Combine weight extremes (300 + 800) and use italics purposefully — not as decoration.

## Loading Strategy

```html
<!-- Preconnect early -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Load with display=swap to avoid invisible text -->
<link
  href="https://fonts.googleapis.com/css2?family=YourFont&display=swap"
  rel="stylesheet"
/>
```

Or use `@font-face` with `font-display: swap` and self-hosted files for best performance.

## Anti-patterns

- Monospace fonts to signal "technical" — this is lazy and predictable
- Too many font families (max 2 per project)
- Decorative fonts at small sizes — they become noise
- Icon + heading combos with rounded containers on every section
