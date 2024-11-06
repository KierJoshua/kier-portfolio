/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#40A2D8',
      },
      backgroundColor: {
        'body': 'black',
      },
      screens: {
        'phone': '450px',
        'tablet': '744px',
        'res1': '840px',
        'laptop': '1024px',
        'desktop': '1280px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // You can add more themes or customize here
  }
}

