/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deli-red': '#D32F2F',    // Vibrant Chili Red
        'deli-green': '#388E3C',  // Fresh Leaf Green
        'deli-brown': '#5D4037',  // Rich Earth/Dirt Brown
        'deli-dark': '#212121',   // Deep Charcoal for text
        'deli-cream': '#FFFBF0',  // Soft background to make colors pop
      },
      fontFamily: {
        // You can add custom food-style fonts here later
      }
    },
  },
  plugins: [],
}