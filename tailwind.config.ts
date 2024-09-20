import { Anonymous_Pro, Poppins } from "next/font/google";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        t_primary: "#262626",
        t_sec: "#929292"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Anonymous_Pro: ["Anonymous_Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
