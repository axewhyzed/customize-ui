import React, { createContext, useContext, useState, useEffect, useRef } from "react";

type ThemeMode = "light" | "dark" | "custom";

interface ThemeColors {
  background?: string;
  foreground?: string;
  card?: string;
  "card-foreground"?: string;
  popover?: string;
  "popover-foreground"?: string;
  primary?: string;
  "primary-foreground"?: string;
  secondary?: string;
  "secondary-foreground"?: string;
  muted?: string;
  "muted-foreground"?: string;
  accent?: string;
  "accent-foreground"?: string;
  destructive?: string;
  "destructive-foreground"?: string;
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

    wrapper.classList.remove("light", "dark", "custom");
    wrapper.classList.add(newTheme);

    if (newTheme === "custom" && colors) {
      Object.entries(colors).forEach(([key, value]) => {
        const hsl = hexToHsl(value);
        if (hsl) {
          wrapper.style.setProperty(`--${key}`, hsl);
        }
      });
    } else {
      wrapper.removeAttribute("style");
    }

    setThemeState(newTheme);
  };

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