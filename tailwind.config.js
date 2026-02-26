/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        display: ['"Playfair Display"', "serif"],
        body: ['"Cormorant Garamond"', "serif"],
      },
      colors: {
        rose: {
          gold: "#c8956c",
          light: "#f0d9c8",
          blush: "#f5e6df",
        },
        champagne: "#f7efe6",
        mauve: "#c4788a",
        deeprose: "#a0496a",
      },
    },
  },
  plugins: [],
};
