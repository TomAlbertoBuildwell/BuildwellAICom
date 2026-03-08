# MacBook Video Showcase Component - Position Specs

This document saves the exact, verified positioning calculations for the `MacBookVideoShowcase.tsx` component to ensure the video perfectly aligns with the inner screen bezels of the `macbook.png` container frame.

## Image Asset Dimensions
The underlying container size scales based on `max-w-[1400px]` with the `macbook.png` serving as the front layer (`zIndex: 2`) with a transparent window.

## Layer 1: The Video Overlay
The video element sits **behind** the MacBook PNG (`zIndex: 1`) taking advantage of its transparent screen area to hide the video's corners.

**Absolute Dimensions:**
```css
top: 18%;
left: 26%;
width: 47.5%;
height: 54%;
zIndex: 1;
```

## Layer 3: The Controls Toolbar
The video playback controls and track selector sit **in front** of the MacBook PNG (`zIndex: 3`).

In order for the controls to perfectly "hug" the bottom edge of the video overlay while sitting over the MacBook image bezel, its `bottom` position must mathematically equal the remaining offset from the top:
`100% - (18% [top] + 54% [height]) = 28%`

**Absolute Dimensions:**
```css
bottom: 28%;
left: 26%;
width: 47.5%;
zIndex: 3;
```

These exact percentages ensure the video aligns properly across standard desktop/laptop responsive break points.
