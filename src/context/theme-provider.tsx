import React, { createContext, useContext, useState, useEffect, useRef } from "react";

type ThemeMode = "light" | "dark" | "custom";

// We define the specific semantic colors we allow users to override
interface ThemeColors {
  background?: string;
  foreground?: string;
  primary?: string;
  "primary-foreground"?: string;
  border?: string;
  input?: string;
  ring?: string;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultColors?: ThemeColors;
}

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode, colors?: ThemeColors) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper: Hex to HSL conversion for Tailwind compatibility
// Tailwind needs "222.2 47.4% 11.2%" format to support opacity
function hexToHsl(hex: string): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Round values for cleaner CSS
  const hDeg = Math.round(h * 360);
  const sPct = Math.round(s * 100);
  const lPct = Math.round(l * 100);

  return `${hDeg} ${sPct}% ${lPct}%`;
}

export const ThemeProvider = ({ children, defaultTheme = "light", defaultColors }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const setTheme = (newTheme: ThemeMode, colors?: ThemeColors) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // 1. Handle Classes (Light/Dark)
    wrapper.classList.remove("light", "dark", "custom");
    wrapper.classList.add(newTheme);

    // 2. Handle Custom Colors (Runtime Injection)
    if (newTheme === "custom" && colors) {
      Object.entries(colors).forEach(([key, value]) => {
        const hsl = hexToHsl(value);
        if (hsl) {
          // Set the variable that Tailwind reads (e.g., --primary)
          wrapper.style.setProperty(`--${key}`, hsl);
        }
      });
    } else {
      // Clean up custom inline styles if switching back to presets
      wrapper.removeAttribute("style");
    }

    setThemeState(newTheme);
  };

  // Initialize on mount
  useEffect(() => {
    setTheme(defaultTheme, defaultColors);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div ref={wrapperRef} className="contents">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};