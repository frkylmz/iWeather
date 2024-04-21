/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        product: "#8FB2F5",
        base: {
          900: "#13131A",
          800: "#16161F",
          700: "#1C1C27",
          600: "#22222F",
          500: "#3B3B54",
          400: "#7F7F98",
          300: "#ABABC4",
          200: "#BFBFD4",
          100: "#FAFAFA",
          white: "#FFFFFF,",
        },
      },
      fontSize: {
        "heading-hg": "96px",
        "heading-xl": "48px",
        "heading-lg": "32px",
        "heading-md": "20px",
        "heading-sm": "16px",
        "heading-xs": "14px",
        "text-lg": "20px",
        "text-md": "16px",
        "text-sm": "14px",
        "text-xs": "12px",
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
