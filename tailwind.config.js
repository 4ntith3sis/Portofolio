/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F3EF",
        foreground: "#111111",
        secondary: "#666666",
        border: "#D4D4D4",
        accent: "#E6392F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
