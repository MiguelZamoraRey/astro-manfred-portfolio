# Color Reference

## Modern CSS Color Functions

Prefer `oklch` over hex or hsl — it produces perceptually uniform colors, so equal steps in lightness look equal to the human eye.

```css
/* OKLCH: oklch(lightness chroma hue) */
--brand: oklch(55% 0.22 260); /* primary */
--brand-light: oklch(75% 0.14 260);
--brand-dark: oklch(35% 0.22 260);

/* Tinted neutrals — always lean toward your brand hue */
--surface: oklch(98% 0.008 260); /* near-white, slightly tinted */
--surface-raised: oklch(96% 0.01 260);
--border: oklch(88% 0.015 260);
--text-primary: oklch(20% 0.02 260); /* near-black, tinted */
--text-secondary: oklch(45% 0.025 260); /* NOT pure gray */
```

## Color Palette Structure

Every interface needs:

1. **Brand color** — dominant, used sparingly for maximum impact
2. **Tinted neutrals** — backgrounds, borders, subdued text (always tinted toward brand)
3. **Accent** — sharp contrast, used for CTAs and key highlights only
4. **Semantic** — success (green), warning (yellow), error (red), info (blue)

### Palette Proportions

- 60% neutral surfaces
- 30% supporting tones
- 10% accent/brand for emphasis

## Dark Mode

Use `light-dark()` or `prefers-color-scheme` media queries.

```css
:root {
  color-scheme: light dark;
  --bg: light-dark(oklch(98% 0.008 260), oklch(12% 0.02 260));
  --text: light-dark(oklch(20% 0.02 260), oklch(92% 0.01 260));
}
```

**DON'T:** Default to dark mode with glowing accents — it looks cool without requiring real design decisions.

## Anti-patterns

- Pure `#000` or `#fff` — tint everything, always
- Gray text on colored backgrounds — use a darker shade of that color
- The AI palette: cyan-on-dark, purple-to-blue gradients, neon on dark
- Gradient text on headings or metrics — decorative, not meaningful
- Evenly distributed palettes with no dominant color — commit to a direction
- Too many accent colors — one accent used consistently beats five used timidly
