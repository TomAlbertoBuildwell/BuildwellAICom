# BuildwellAI Brand Guidelines

This document serves as the single source of truth for the **BuildwellAI** visual identity. Use these tokens to ensure consistency across the application.

## 🎨 Color Palette

### Primary Brand Colors
| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Construction Orange** | `#ff8a00` | Primary actions, brand emphasis |
| **Deep Navy** | `#0a1929` | Backgrounds (Dark Mode), primary text (Light Mode) |
| **Blueprint Blue** | `#2196f3` | Secondary accents, informational text |
| **Steel Grey** | `#607d8b` | Muted text, borders, inactive states |

### Functional Colors
| Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Safety Yellow** | `#ffd600` | Warnings, highlights, attention grabbers |
| **Success Green** | `#4caf50` | Success states, positive metrics |
| **Alert Red** | `#f44336` | Errors, destructive actions |
| **Light Grey** | `#e0e0e0` | Borders, light mode backgrounds |

### Gradients
Use these gradients for hero text, buttons, and special UI elements.
- **Brand Orange Gradient**: `linear-gradient(90deg, #FBB429 0%, #F87866 100%)`
  - *Usage*: Main Buttons, Hero Title Highlights.
- **Navy Depth Gradient**: `linear-gradient(180deg, #0a1929 0%, #172b3a 100%)`
  - *Usage*: Dark mode backgrounds, footer areas.
- **Blue Tech Gradient**: `linear-gradient(135deg, #2196f3 0%, #0d47a1 100%)`
  - *Usage*: Technical diagrams, secondary illustrations.

---

## 🔤 Typography

### 1. Primary Font (Sans-Serif)
- **Family**: `Inter`
- **Variable**: `font-sans`
- **Usage**: Body text, UI labels, buttons, general navigation.
- **Why**: Clean, legible, and modern. Fits the "tech/software" aspect of the brand.

### 2. Display Font (Headings)
- **Family**: `Big Shoulders Display`
- **Variable**: `font-display`
- **Usage**: Page titles (`h1`, `h2`), large hero stats, impact statements.
- **Why**: Tall, condensed, and industrial. Evokes the feeling of construction, architectural plans, and structural integrity.

### 3. Data Font (Monospace)
- **Family**: `Courier Prime`
- **Variable**: `font-mono` / `font-data`
- **Usage**: Code snippets, regulatory references, data tables, "blueprint" notes.
- **Why**: Technical and precise. Connects to the "compliance/regulation" data aspect.

---

## 🖌️ Theme Variables (CSS)

The application uses CSS variables for easy theming. Here are the core mappings:

```css
:root {
  /* Core Semantic Tokens */
  --primary: #ff8a00;           /* Construction Orange */
  --background: #ffffff;        /* White (Light Mode) */
  --foreground: #0a1929;        /* Deep Navy */
  --secondary: #2196f3;         /* Blueprint Blue */
  --muted-foreground: #607d8b;  /* Steel Grey */
}

.dark {
  /* Dark Mode Overrides */
  --background: #0a1929;        /* Deep Navy */
  --foreground: #e0e0e0;        /* Light Grey */
  --card: #172b3a;              /* Slightly lighter navy for depth */
}
```

## 🧩 Common styling Patterns

### Buttons
All primary calls-to-action (CTAs) should use the **Brand Orange Gradient** and rounded corners (`rounded-[5px]`).
```tsx
className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white rounded-[5px]"
```

### Cards
Cards should have a subtle shadow and rounded corners (`rounded-xl` or `rounded-2xl`).
- **Light Mode**: White card on off-white background.
- **Dark Mode**: Dark Navy (`#172b3a`) card on Deep Navy (`#0a1929`).

---

*This document is auto-generated based on the current `tailwind.config.mjs` and `globals.css` configuration.*
