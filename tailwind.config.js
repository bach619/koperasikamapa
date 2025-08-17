/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#A47764', // Mocha Mousse base
          600: '#8A614F', // Mocha Mousse darker
        },
        secondary: {
          500: '#5C8374', // Sage Green
          600: '#48685A', // Sage Green darker
        },
        accent: '#16a34a', // Hijau untuk CTA
        dark: '#111827', // Warna gelap untuk footer
      }
    },
  },
  plugins: [],
};
