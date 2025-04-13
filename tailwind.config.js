/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003300', // Blue (Primary Color)
        secondary: '#00ff00', // Red (Secondary Color)
        third: '#00ff00', // Red (Secondary Color)
      },
    },
  },
  plugins: [],
}
