# Remotion Style Guide & Asset Registry - BuildwellAI

This document serves as the master configuration for future Remotion video generation. Feed this file to an AI agent to ensure brand consistency when generating new videos.

---

## 🎨 Design Tokens

### 1. Color Palette
Core brand colors extracted from `BRAND_GUIDELINES.md` and `tailwind.config.mjs`.

| Token Name | Hex Value | Usage |
|:---|:---|:---|
| `Primary` | `#FF8A00` | Main CTA, important highlights (Construction Orange) |
| `Background` | `#0A1929` | Main background color (Deep Navy) |
| `Card` | `#172B3A` | Panels, cards, modal backgrounds |
| `Text Primary` | `#E0E0E0` | Main headlines and body text |
| `Text Muted` | `#607D8B` | Subtitles, less important text |
| `Accent Blue` | `#2196F3` | Functional accents, info states |
| `Accent Green` | `#4CAF50` | Success states, positive metrics |
| `Accent Red` | `#F44336` | Error states, alerts |

### 2. Gradients
Standard brand gradients for backgrounds and text fills.

- **Orange Gradient**: `linear-gradient(90deg, #FBB429 0%, #F87866 100%)`
  - *Usage*: Main Buttons, Hero Title Highlights, Progress Bars.
- **Navy Gradient**: `linear-gradient(180deg, #0A1929 0%, #172B3A 100%)`
  - *Usage*: Video backgrounds (vignette effect).
- **Blue Gradient**: `linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)`
  - *Usage*: Tech/Architecture visualizations.

### 3. Typography
Fonts available in the project.

- **Headings**: `Big Shoulders Display` (Google Font)
  - *Weight*: 700/800
  - *Usage*: Large titles, impact statements, scene transitions.
- **Body**: `Inter` (Google Font)
  - *Weight*: 400/500/600
  - *Usage*: Subtitles, descriptions, UI mockups.
- **Data/Code**: `Courier Prime` (Google Font)
  - *Weight*: 400
  - *Usage*: Code snippets, regulatory references, data overlays.

---

## 📦 Asset Library

### 1. Logos & Branding
| Asset Name | Path | Description |
|:---|:---|:---|
| Logo (Main) | `public/logo.png` | Main app logo |
| Favicon | `public/favicon.ico` | Small icon for UI corners |

### 2. Product Screenshots & Graphics
Use these for showcasing specific features.

| Product | Asset Path | Description |
|:---|:---|:---|
| **Buildwell Chat** | `public/buildwell_chat.png` | AI Chat interface |
| **Buildwell Inspect** | `public/buildwell_inspect.png` | Inspection dashboard |
| **Buildwell Eye** | `public/buildwell_eye.png` | Safety monitoring view |
| **Buildwell Threads** | `public/buildwell_threads.png` | Communication tool |
| **Buildwell News** | `public/buildwell_news.png` | News feed interface |
| **Mobile Apps** | `public/app1.png`, `public/app2.png`, `public/app3.png` | Mobile UI screens |

### 3. Background / Context Images
| Asset Name | Path | Description |
|:---|:---|:---|
| Construction Site | `public/build.jpg` | General construction background |
| Blueprint/Plan | `public/plan.jpg` | Technical/architectural context |
| Innovation | `public/innov.jpg` | High-tech construction abstract |
| Analysis | `public/analysis.jpg` | Data/Analytics context |
| Sky/City | `public/sky.png` | Urban environment |

### 4. Vector Graphics / animations
| Asset Name | Path | Description |
|:---|:---|:---|
| Roller Coaster Path | `public/Untitled.svg` | Loop animation path |
| Curved Path | `public/rotation.svg` | Smooth curve animation path |

---

## 🎬 Remotion Animation Presets

### 1. "Flowing Strip" (Roller Coaster)
**Description**: An orange/coral gradient strip that flows along a complex SVG path (loop or curve).
- **Component**: `FlowingStrip` / `RotationStrip`
- **Path**: Uses `public/Untitled.svg` or `public/rotation.svg`
- **Effect**: Draws the path using `strokeDashoffset`.
- **Timing**: Fast start (40% in first 0.5s) → Gradual slowdown.

### 2. "Phone Showcase"
**Description**: Floating phone mockup with scaling and shadow.
- **Component**: `PhoneShowcase` (in `components/remotion`)
- **Asset**: `public/big_phone.png`
- **Animation**: Gentle float (y-axis sine wave) + slight scale pulse.

### 3. "Mobile Apps Reveal"
**Description**: Background animation behind app cards.
- **Component**: `MobileAppsAnimation`
- **Path**: `rotation.svg`
- **Stroke Width**: `50px`
- **Positioning**: Edge-to-edge screen coverage.

---

## 🛠️ Composition Settings (Default)
- **Width**: 1920px (Landscape) or 1080px (Portrait)
- **Height**: 1080px (Landscape) or 1920px (Portrait)
- **FPS**: 30
- **Background**: `#0A1929` (Deep Navy)

---

## 📝 Usage Prompt
*Copy/paste this when asking AI to generate a new video:*

> "Create a Remotion video for [Product Name/Feature]. 
> Use the **Deep Navy** background (`#0A1929`) and **Orange Gradient** for accents.
> Headlines should use **Big Shoulders Display** font.
> Include the **[Asset Name]** image floating in the center.
> Add the **Flowing Strip** animation in the background using the [Path Name] path.
> Ensure all colors match the design tokens in REMOTION_STYLE_GUIDE.md."
