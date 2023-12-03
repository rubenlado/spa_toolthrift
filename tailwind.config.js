/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    enabled: true,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vinted-blue": "#368c91",
        'light-white': '#F7F7F7'
      }
    },
  },
  plugins: [],
}

