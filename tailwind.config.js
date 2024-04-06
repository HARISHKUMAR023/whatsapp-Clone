/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#00a884',
        'txprimary':'#111b21',
        'secondary':'#f9f9f9',

      },
    },
  },
  plugins: [],
}

