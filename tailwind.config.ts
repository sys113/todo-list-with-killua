import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./containers/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
