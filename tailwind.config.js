/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lw-blue": "#0094FF",
        "lw-offwhite": "#f6f6f6",
        "lw-border": "#e4e4e4",
      },
    },
  },
  plugins: [],
};
