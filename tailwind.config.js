/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        move_bg: {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '400% 0' },
        },
      },
      animation: {
        move_bg: 'move_bg 12s linear infinite',
      },
    },
  },
  plugins: [],
};
