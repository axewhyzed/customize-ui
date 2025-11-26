// src/plugins/presets/neon.ts
export const neonPreset = {
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 10px var(--primary)",
          },
          "50%": {
            opacity: ".8",
            boxShadow: "0 0 20px var(--primary)",
          },
        },
      },
    },
  },
};