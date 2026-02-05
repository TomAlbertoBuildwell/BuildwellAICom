# CHAT FEATURES MIGRATION - README

Use this guide after copying the `components/frontpagechat` folder and the page files to your new project.

## 1. File Placement

Ensure the files are organized in this structure in your NEW project:

```text
/your-new-project
├── app/
│   ├── features/
│   │   └── page.tsx       <-- (From app/new-chatpage/features/page.tsx)
│   └── mobile/
│       └── page.tsx       <-- (From app/new-chatpage/mobile-app/page.tsx)
│
└── components/
    └── chat-features/     <-- (Rename 'frontpagechat/featurespagechat' to this if desired)
        ├── ChatFeaturesHero.tsx
        ├── ChatFeatureCards.tsx
        ├── ChatScreenshotShowcase.tsx
        ├── ChatVideoSections.tsx
        ├── AppGallery.tsx
        └── ... (other components)
```

## 2. Install Dependencies

These components use Framer Motion, Lucide Icons, and GSAP. Run this in your new project terminal:

```bash
npm install framer-motion lucide-react gsap @gsap/react clsx tailwind-merge
```

## 3. Update Authentication Links (CRITICAL)

Your new project likely has a different authentication flow. You MUST update the "Start Chatting" or "Dashboard" buttons in these files:

*   **`ChatFeaturesHero.tsx`**:
    *   Find: `<Link href="/dashboard">`
    *   **Action**: Change `/dashboard` to your new project's protected route (e.g., `/app`, `/login`, `/portal`).
*   **`ChatNavbar.tsx`** (if you copied it):
    *   Update the Sign In / Get Started buttons to point to your new auth routes.

## 4. AI Prompt for Integration

**Copy and paste the prompt below** into your AI assistant in the NEW project. It will automatically re-wire the imports and fix the links for you.

***

### 🤖 COPY THIS PROMPT:

```text
I have just copied the "Chat Features" and "Mobile App" page components into this project. I need you to help me wire them up correctly.

Current Project Context:
- This project has an authentication system.
- The main protected app route is: [INSERT YOUR AUTH ROUTE HERE, e.g., /app or /dashboard]

My Request:
1.  **Check Imports**: Scan `app/features/page.tsx` and `app/mobile/page.tsx`. Ensure they are importing the components from the correct `components/` path (I might have moved them).
2.  **Fix Auth Links**: Go through `ChatFeaturesHero.tsx` and any other component with a "Get Started" or "Dashboard" link. Change all `href="/dashboard"` links to the correct authenticated URL I provided above.
3.  **Fix Navigation**: Ensure internal links like `href="#features"` work with the new page structure.
4.  **Confirm Dependencies**: Check if I am missing any UI components (like `Button` from shadcn or `ContainerScroll`) and tell me if I need to copy them.

Please start by analyzing `app/features/page.tsx` and `ChatFeaturesHero.tsx`.
```
***

## 5. Mobile App Buttons

In `AppGallery.tsx`, the App Store and Google Play buttons are currently set to **"Coming Soon"** (disabled state).
*   If you are ready to launch the apps, search for "Coming Soon" in that file and uncomment/replace the buttons with real links.
