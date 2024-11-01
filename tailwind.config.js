/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inwards": "0px 0px 0px 1px #494949 inset",
      }
    },
  },
  plugins: [],
}

