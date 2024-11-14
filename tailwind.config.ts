import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
      colors: {
        primaryBase: {
          light: '#ffffff',
          dark: '#000000',
        }
      },
      fontFamily: {
        sans: [...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
