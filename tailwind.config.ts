import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-sans)"],
        title: ["var(--font-serif)"],
        serif: ["var(--font-serif)"],
        caption: ["var(--font-caption)"],
        arabic: ["var(--font-arabic)"],
       
      },
    },
  },
  plugins: [],
};

export default config;
