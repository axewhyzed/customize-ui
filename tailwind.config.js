import { customiseUI, neonPreset, rainbowPreset } from "./src/plugins";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // Important for our .dark class strategy
  theme: {
    extend: {
      ...neonPreset.theme.extend,
      ...rainbowPreset.theme.extend
    },
  },
  plugins: [
    customiseUI
  ],
}