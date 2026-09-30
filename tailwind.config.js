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
          'deli-red': '#DC2626',
          'deli-green': '#2D5A27',
          'deli-botanical': '#2D5A27',
          'deli-orange': '#E86C1E',
          'deli-cream': '#F9F5EB',
          'deli-charcoal': '#1A1A1A',
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