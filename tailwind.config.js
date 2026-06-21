/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "var(--theme)",
        lightbg: "var(--lightbg)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "indie-flower": ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};
