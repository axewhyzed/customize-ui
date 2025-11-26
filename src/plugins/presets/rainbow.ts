// src/plugins/presets/rainbow.ts
export const rainbowPreset = {
    theme: {
        extend: {
            animation: {
                // A very slow, buttery smooth gradient movement
                "rainbow-flow": "rainbow-flow 10s ease infinite",
                "rainbow-border": "rainbow-border 4s linear infinite",
            },
            keyframes: {
                "rainbow-flow": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                "rainbow-border": {
                    "0%, 100%": {
                        borderColor: "hsl(var(--primary))",
                        boxShadow: "0 0 5px hsl(var(--primary) / 0.5)",
                    },
                    "50%": {
                        borderColor: "hsl(var(--accent))",
                        boxShadow: "0 0 15px hsl(var(--accent) / 0.5)",
                    },
                },
            },
            backgroundImage: {
                // The actual gradient texture
                "rainbow-gradient":
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            },
        },
    },
};