import plugin from "tailwindcss/plugin";

// 1. Define the default theme values (HSL format)
const defaultVariables = {
  // Light Mode Defaults
  ":root": {
    "--background": "0 0% 100%",        // white
    "--foreground": "240 10% 3.9%",     // dark gray
    "--primary": "240 5.9% 10%",        // blackish
    "--primary-foreground": "0 0% 98%", // whiteish
    "--border": "240 5.9% 90%",
    "--input": "240 5.9% 90%",
    "--ring": "240 5.9% 10%",
    "--radius": "0.5rem",
  },
  // Dark Mode Defaults
  ".dark": {
    "--background": "240 10% 3.9%",
    "--foreground": "0 0% 98%",
    "--primary": "0 0% 98%",
    "--primary-foreground": "240 5.9% 10%",
    "--border": "240 3.7% 15.9%",
    "--input": "240 3.7% 15.9%",
    "--ring": "240 4.9% 83.9%",
  },
};

// 2. Export the plugin
export const customiseUI = plugin(
  // @ts-ignore - Tailwind types can be tricky with addBase
  function ({ addBase }) {
    addBase(defaultVariables);
    
    addBase({
      "*": { "@apply border-border": {} },
      "body": { "@apply bg-background text-foreground": {} },
    });
  },
  {
    // 3. Map Tailwind Utilities to our CSS Variables
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  }
);

export * from "./presets/neon";