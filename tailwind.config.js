/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,jsx,tsx,js}",
"./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Humanoid",
        secondary:"Droid",
      },},
  },
  plugins: [],
}

