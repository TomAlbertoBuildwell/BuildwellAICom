# Dependencies List

To run the `frontpagechat` components, ensure the following NPM packages are installed in your project:

```bash
npm install framer-motion lucide-react clsx tailwind-merge next-themes @radix-ui/react-slot @radix-ui/react-label class-variance-authority @gsap/react gsap lenis embla-carousel-react
```

## Internal Dependencies (Already Cloned)
The following UI components have been self-contained within `components/frontpagechat/ui`:
- `Button`
- `Card`
- `ContainerScroll`
- `ThemeToggle` (and local `utils.ts`)

## Fonts
These components rely on **Big Shoulders Display**.
Ensure you load this font in your `layout.tsx` or CSS.

Example `layout.tsx`:
```tsx
import { Big_Shoulders_Display } from "next/font/google";

const bigShoulders = Big_Shoulders_Display({ 
  subsets: ["latin"],
  variable: "--font-big-shoulders-display",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bigShoulders.variable}>
      {/* ... */}
    </html>
  );
}
```

Or update your `tailwind.config.ts` to map the class `font-['Big_Shoulders_Display']` to this font.
