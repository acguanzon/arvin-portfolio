import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060606",
        panel: "#0e0e0e",
        lime: "#d7ff3e",
        violet: "#8b5cf6",
        mist: "#a1a1aa",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-space)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
