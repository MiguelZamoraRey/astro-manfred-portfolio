# Responsive Reference

## Mobile-First Approach

Write base styles for mobile. Layer complexity upward.

```css
/* Base: mobile */
.component {
  display: block;
}

/* Tablet and up */
@media (min-width: 40rem) {
  .component {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop and up */
@media (min-width: 64rem) {
  .component {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

## Container Queries — Prefer Over Media Queries for Components

Components should respond to their container, not the viewport.

```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* When the card container is wide enough */
@container card (min-width: 30rem) {
  .card {
    display: grid;
    grid-template-columns: 12rem 1fr;
    align-items: start;
  }
}
```

## Fluid Everything

Avoid hard breakpoints where possible. Use fluid sizing that works at any size.

```css
/* Fluid type */
font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);

/* Fluid spacing */
padding: clamp(1rem, 3vw, 2.5rem);

/* Fluid grid */
grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
```

## Breakpoint Scale

```css
/* Named breakpoints for consistency */
/* sm:  40rem  — 640px  — landscape phone */
/* md:  48rem  — 768px  — tablet portrait */
/* lg:  64rem  — 1024px — tablet landscape / small desktop */
/* xl:  80rem  — 1280px — desktop */
/* 2xl: 96rem  — 1536px — large desktop */
```

## Mobile Adaptation Checklist

- [ ] Tap targets are at least 44×44px
- [ ] No horizontal scroll at any viewport width
- [ ] Critical actions are reachable with one thumb (bottom of screen)
- [ ] Text is legible without pinching (min 16px body)
- [ ] Navigation is usable — not just hidden behind a hamburger
- [ ] Forms don't zoom in on iOS (input font-size ≥ 16px)

## Anti-patterns

- Hiding critical features on mobile — adapt the layout, don't amputate functionality
- Viewport-based media queries for component internals — use container queries
- Fixed pixel widths — use `max-width` with percentages or relative units
- `overflow: hidden` on body carelessly — breaks position: fixed elements
