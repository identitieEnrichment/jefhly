/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        primaryGreen: '#0B675A',
        secondaryOrange: '#fb9333', 
      },
      fontFamily:{
        poppins :['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}