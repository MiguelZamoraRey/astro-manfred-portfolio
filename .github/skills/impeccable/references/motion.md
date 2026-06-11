# Motion Reference

## Core Principles

Motion should explain, not decorate. Every animation must answer: "what does this communicate about state?"

- **Entrance:** element arrives into the interface
- **Exit:** element leaves or is removed
- **State change:** value updates, selection changes, loading completes
- **Feedback:** button press, form submit, error

One well-orchestrated entrance sequence creates more delight than twenty scattered micro-interactions.

## Easing

Always use exponential easing for natural deceleration. Real objects decelerate smoothly — they don't bounce.

```css
:root {
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
}
```

**DON'T:** use bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)`) or elastic easing — they feel dated.

## Duration Scale

```css
--duration-fast: 100ms; /* micro-feedback: hover, focus rings */
--duration-base: 200ms; /* most transitions */
--duration-slow: 350ms; /* page elements, modals */
--duration-slower: 600ms; /* staggered reveals, hero entrances */
```

## Safe Properties to Animate

Only animate `transform` and `opacity`. Everything else triggers layout recalculation.

```css
/* ✅ Safe */
transform: translateY(0);
opacity: 1;

/* ❌ Triggers layout */
height: auto;
width: 200px;
padding: 1rem;
margin-top: 2rem;
```

### Height Animations — Use grid trick

```css
/* Expand/collapse without animating height */
.collapsible {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-slow) var(--ease-out-expo);
}

.collapsible.open {
  grid-template-rows: 1fr;
}

.collapsible > * {
  overflow: hidden;
}
```

## Staggered Entrances

```css
.list-item {
  opacity: 0;
  transform: translateY(1rem);
  animation: fade-up var(--duration-slow) var(--ease-out-expo) forwards;
}

.list-item:nth-child(1) {
  animation-delay: 0ms;
}
.list-item:nth-child(2) {
  animation-delay: 60ms;
}
.list-item:nth-child(3) {
  animation-delay: 120ms;
}

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Reduced Motion

Always respect user preferences.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
