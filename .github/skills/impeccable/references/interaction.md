# Interaction Reference

## Optimistic UI

Don't wait for network confirmation to update the UI. Update immediately, sync in background, rollback on error.

```js
// 1. Update UI immediately
updateLocalState(newValue);

// 2. Sync with server
try {
  await api.save(newValue);
} catch (error) {
  // 3. Rollback on failure + show error
  revertState(previousValue);
  showError(error.message);
}
```

## Loading States

Every async action needs a loading state. Skeleton screens always beat spinners for content — spinners work for actions.

```css
/* Skeleton shimmer */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--surface) 25%,
    var(--surface-raised) 50%,
    var(--surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
```

## Focus Management

Every interactive element must have a visible focus ring. Don't remove `outline` without replacing it.

```css
:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 3px;
  border-radius: 3px;
}

/* Remove outline only for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

## Forms

- Show validation on blur, not on keypress (except password strength)
- Never disable submit buttons — let users click and show the error
- Inline errors below the field, not at the top of the form
- Label every field — placeholder is not a label

```html
<!-- ✅ Correct -->
<div class="field">
  <label for="email">Email</label>
  <input id="email" type="email" autocomplete="email" />
  <span class="error" role="alert">Enter a valid email address</span>
</div>
```

## Progressive Disclosure

Start with the simplest interface. Reveal complexity through interaction.

- Basic options visible by default
- Advanced settings behind an expandable section
- Secondary actions revealed on hover/focus, not always visible
- Empty states that teach — show an example or a call to action, not "nothing here"

## Button Hierarchy

Not every action deserves equal prominence.

```
Primary   — one per screen, the main action
Secondary — supporting actions (outlined or ghost style)
Tertiary  — low-stakes actions (text link style)
Destructive — always isolated, never next to primary
```

## Anti-patterns

- Modals for everything — they interrupt flow; prefer inline expansion, drawers, or new pages
- Disabled buttons with no explanation — if you must disable, add a tooltip explaining why
- Click targets under 44×44px on touch screens
- Hover-only interactions — never the only way to access a function
