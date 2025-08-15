/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb', // Biru utama
          700: '#1d4ed8', // Biru lebih gelap
        },
        secondary: '#f59e0b', // Kuning aksen
        accent: '#16a34a', // Hijau untuk CTA
        dark: '#111827', // Warna gelap untuk footer
      }
    },
  },
  plugins: [],
};
