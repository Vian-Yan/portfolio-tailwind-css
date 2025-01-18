/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#475569",
        secondary: "#64748b",
        dark: "#020617",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

// exteend menambahakan yg sudah ada
// theme menimpa yg sudah ada
