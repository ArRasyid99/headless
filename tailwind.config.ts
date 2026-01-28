import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-sans)"],
        title: ["var(--font-title)"],
      },
    },
  },
  plugins: [],
};

export default config;
