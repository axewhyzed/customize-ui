import { defineConfig } from "tsup";

export default defineConfig({
  // 1. Multiple Entry Points (Crucial for Tree Shaking)
  entry: [
    "src/index.ts",              // Main entry
    "src/components/*/index.ts", // Individual components (e.g., dist/components/button/index.js)
    "src/plugins/index.ts"       // The Tailwind Plugin
  ],
  
  // 2. Output Formats
  format: ["cjs", "esm"],
  
  // 3. Type Definitions
  dts: true,
  
  // 4. Build Optimization
  clean: true,          // Delete dist/ before building
  splitting: true,      // Share common chunks (like utils)
  treeshake: true,      // Remove unused code
  minify: true,         // Shrink file size
  
  // 5. External Dependencies (Don't bundle React!)
  external: [
    "react", 
    "react-dom", 
    "tailwindcss", 
    "class-variance-authority", 
    "clsx", 
    "tailwind-merge", 
    "@radix-ui/react-select", 
    "@radix-ui/react-slot", 
    "lucide-react"
  ],
});