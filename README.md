# CustomiseUI

A lightweight, highly customisable, and simple React component library built for speed and flexibility. Powered by **Radix UI** for accessibility and **Tailwind CSS** for styling, it introduces a unique "Scoped Theming" engine and "Vibe" presets to bring your interfaces to life.

> **Core Philosophy**
> - **Lightweight:** Minimal footprint, exporting only what you need via tree-shakable builds.
> - **Customisable:** Runtime theming allows you to change colors on the fly without complex CSS-in-JS overrides.
> - **Simple:** Plug-and-play components that work instantly with your existing Tailwind setup.

---

## 📦 Installation

```bash
npm install customise-ui
# or
yarn add customise-ui
# or
pnpm add customise-ui
````

-----

## ⚙️ Configuration

To enable the theming engine and animation presets, add the plugin to your `tailwind.config.js`:

```javascript
import { customiseUI, neonPreset, rainbowPreset } from "customise-ui/plugins";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    // Ensure Tailwind scans the library's built files for classes
    "./node_modules/customise-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Optional: Add Vibe Presets here
      ...neonPreset.theme.extend,
      ...rainbowPreset.theme.extend,
    },
  },
  plugins: [customiseUI],
}
```

-----

## 🚀 Usage

Wrap your application (or specific sections) in the `ThemeProvider` to unlock scoped styling.

```tsx
import { ThemeProvider, CUButton, CUCard, CUInput } from "customise-ui";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="p-10 space-y-4">
        
        {/* Standard Light Mode Component */}
        <CUCard className="p-6">
          <h2 className="text-xl font-bold">Standard Card</h2>
          <CUButton>Default Button</CUButton>
        </CUCard>

        {/* Scoped Dark Mode Section */}
        <ThemeProvider defaultTheme="dark">
          <CUCard className="p-6">
             <h2 className="text-xl font-bold">Dark Mode Context</h2>
             <CUInput placeholder="I am dark themed..." />
             <CUButton variant="secondary">Secondary Action</CUButton>
          </CUCard>
        </ThemeProvider>

      </div>
    </ThemeProvider>
  );
}
```

-----

## 🎨 Scoped & Dynamic Theming

The most powerful feature of **CustomiseUI** is the ability to generate themes at runtime using the `custom` mode. You can pass raw Hex codes, and the library handles the variable conversion dynamically.

This is perfect for white-labeling or user-defined preferences.

```tsx
<ThemeProvider 
  defaultTheme="custom"
  defaultColors={{
    primary: "#6366f1",         // Indigo
    background: "#0f172a",      // Slate 900
    foreground: "#f8fafc",      // Slate 50
    card: "#1e293b",            // Slate 800
    "card-foreground": "#e2e8f0"
  }}
>
  <div className="bg-background text-foreground min-h-screen p-10">
    <h1 className="text-primary text-4xl font-bold">Brand New Theme</h1>
    <p className="text-muted-foreground">Generated instantly at runtime.</p>
  </div>
</ThemeProvider>
```

-----

## ✨ Vibe Presets

Go beyond flat colors with **Vibe Presets**. These inject keyframes and utility classes for special aesthetic modes.

### Available Vibes

1.  **Neon**: Adds `animate-pulse-glow` and high-contrast shimmer effects.
2.  **Rainbow**: Adds `animate-rainbow-flow` and smooth gradient transitions.

### Usage

Combine `custom` themes with Vibe utility classes:

```tsx
import { CUButton, CUBadge } from "customise-ui";

// "Shimmer" variant uses the Neon preset animations
<CUButton variant="shimmer">
  Neon Action
</CUButton>

// "Rainbow" variant uses the Rainbow preset gradients
<CUBadge variant="rainbow">
  PRO Feature
</CUBadge>
```

-----

## 🧩 Components

All components are built on **Radix UI** primitives for full WAI-ARIA compliance and keyboard accessibility.

| Category | Components |
| :--- | :--- |
| **Inputs** | `CUInput`, `CUSelect`, `CUSwitch` |
| **Layout** | `CUCard`, `CUSheet`, `CUDialog`, `CUAccordion`, `CUTabs` |
| **Feedback** | `CUToaster` (Sonner wrapper), `CUBadge`, `CUSkeleton`, `CUTooltip` |
| **Overlay** | `CUPopover`, `CUDropdownMenu` |
| **Elements** | `CUButton`, `CUAvatar` |

-----

## 🤝 Contributing

Contributions are welcome\! Please run the following to get started:

1.  Clone the repository
2.  Install dependencies: `npm install`
3.  Start the playground: `npm run dev`
4.  Build the library: `npm run build`

-----

## 📄 License

MIT © [Mihir Bambhaniya](https://github.com/axewhyzed)
