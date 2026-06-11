# Spatial Reference — Layout, Grids & Rhythm

## Spacing Scale

Use a fluid spacing scale based on a base unit. Apply `clamp()` to key spacing values so layout breathes on large screens.

```css
--space-1: clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem);
--space-2: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
--space-3: clamp(0.75rem, 0.6rem + 0.75vw, 1.125rem);
--space-4: clamp(1rem, 0.8rem + 1vw, 1.5rem);
--space-6: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
--space-8: clamp(2rem, 1.6rem + 2vw, 3rem);
--space-12: clamp(3rem, 2.4rem + 3vw, 4.5rem);
--space-16: clamp(4rem, 3.2rem + 4vw, 6rem);
```

Don't use the same spacing everywhere — create rhythm through contrast between tight groupings and generous separations.

## Grid Systems

```css
/* Layout grid */
.layout {
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--space-4), 1fr)
    [content-start] min(100%, 72rem) [content-end]
    minmax(var(--space-4), 1fr) [full-end];
}

/* Component grid — use subgrid or named columns */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: var(--space-4) var(--space-6);
}
```

## Container Queries

Prefer container queries over media queries for component-level responsiveness.

```css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 30rem) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
```

## Visual Rhythm

Good layout has **tension and release** — not uniform spacing everywhere.

- Group related items tightly (`var(--space-2)` or less between label + value)
- Separate sections generously (`var(--space-12)` or more between sections)
- Use asymmetric layouts — text left-aligned is more designed than centered
- Break the grid intentionally for emphasis (pull-quotes, hero elements, featured items)

## Anti-patterns

- Same padding/gap everywhere — creates visual monotony
- Everything in cards — not every content block needs a container
- Cards nested inside cards — flatten the hierarchy
- Identical card grids (icon + heading + text × N) — looks templated
- The hero metric layout — big number, small label, supporting stats — overused
- Centering every text block — left-aligned text feels more designed
