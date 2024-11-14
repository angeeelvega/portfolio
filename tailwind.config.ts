import { type Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      colors: {
        primaryBase: {
          light: '#ffffff',
          dark: '#000000',
        },
      },
      fontFamily: {
        // Add your font families here
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
