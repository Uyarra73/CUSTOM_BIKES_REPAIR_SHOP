import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          cream: "#F5F0E6",
          tan: "#D4A574",
          brown: "#5C4033",
          darkBrown: "#3D2914",
          gold: "#C9A227",
          amber: "#FFBF00",
          charcoal: "#2C2C2C",
          sage: "#8B9A7D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/paper-texture.png')",
      },
    },
  },
  plugins: [],
};

export default config;
