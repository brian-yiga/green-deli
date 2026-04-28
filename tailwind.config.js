/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          'deli-red': '#B11E23',
          'deli-cream': '#F9F5EB',
          'deli-charcoal': '#1A1A1A',
          'deli-botanical': '#4B6B40',
          'deli-gold': '#C5A059',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}