import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#121212',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #B8860B, #D4AF37, #FDE68A)',
      },
    },
  },
  plugins: [],
};

export default config;