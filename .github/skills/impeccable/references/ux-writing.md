# UX Writing Reference

## Core Principle

Every word must earn its place. If removing a word doesn't change the meaning, remove it.

## Labels

Use nouns for labels, verbs for actions.

| Instead of                         | Use               |
| ---------------------------------- | ----------------- |
| "Username field"                   | "Username"        |
| "Please enter your email address"  | "Email"           |
| "Click here to submit"             | "Submit"          |
| "Are you sure you want to delete?" | "Delete account?" |

## Action Labels

Be specific. Generic labels create hesitation.

| Instead of   | Use                                                |
| ------------ | -------------------------------------------------- |
| "Submit"     | "Create account" / "Save changes" / "Send message" |
| "OK"         | "Got it" / "Continue" / "Confirm"                  |
| "Cancel"     | "Keep editing" / "Discard changes"                 |
| "Yes" / "No" | Restate the action: "Delete" / "Keep"              |

## Error Messages

Good errors tell the user: what went wrong + what to do next.

```
❌ "An error occurred."
✅ "Couldn't save your changes. Check your internet connection and try again."

❌ "Invalid input."
✅ "Enter a valid email address (example: you@domain.com)."

❌ "Error 403."
✅ "You don't have permission to view this. Contact your admin to request access."
```

## Empty States

Empty states are teaching moments — not just "nothing here."

| Context               | Instead of       | Use                                                                |
| --------------------- | ---------------- | ------------------------------------------------------------------ |
| Empty list            | "No items found" | "You haven't added any items yet. [Add your first item →]"         |
| Search no results     | "No results"     | "No results for 'query'. Try different keywords or [browse all →]" |
| First-time experience | —                | Show an example, a template, or the first action to take           |

## Helper Text

Keep it below the field, not above. Only add it when it prevents a likely error.

```
✅ Password — Must be at least 8 characters
✅ Username — Letters and numbers only, no spaces
❌ Email — Enter your email address (the user knows what email is)
```

## Tone Guidelines

Match the brand personality defined in `.impeccable.md`. Some principles hold across all tones:

- Write in second person ("you") not third ("the user")
- Use active voice — "Save your changes" not "Changes will be saved"
- Avoid jargon unless the audience is technical and expects it
- Don't over-explain — trust the user's intelligence
- Never blame the user ("You entered an invalid date") → rephrase ("That date isn't valid")

## Anti-patterns

- Repeating information already visible on screen
- Hedging language: "Please note that...", "It's worth mentioning..."
- Fake urgency: "Act now!", "Don't miss out!"
- Redundant modal text that restates the heading as the body
- Progress indicators that say "Loading..." without context
