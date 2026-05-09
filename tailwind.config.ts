import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fbf6ea',
          100: '#f6ead0',
          200: '#ecd498',
          300: '#e0bc5e',
          400: '#d4a73a',
          500: '#b8902b',
          600: '#967324',
          700: '#73591f',
          800: '#52401a',
          900: '#332810',
        },
        maroon: {
          50:  '#fdf2f2',
          100: '#fbe5e5',
          500: '#a02626',
          600: '#811f1f',
          700: '#641818',
          800: '#481111',
          900: '#2e0a0a',
        },
        cream: '#fdf9ef',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['"Poppins"', 'sans-serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg,#e0bc5e 0%,#b8902b 50%,#73591f 100%)',
        'gold-shine':    'linear-gradient(135deg,#fbf6ea 0%,#ecd498 30%,#d4a73a 60%,#967324 100%)',
      },
      boxShadow: {
        gold: '0 4px 24px -6px rgba(184,144,43,0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
