/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",   // azul principal
        secondary: "#F472B6", // rosa leve
        dark: "#1F2937",      // cinza escuro
        light: "#F9FAFB",     // cinza claro
      },
    },
  },
  plugins: [],
};
