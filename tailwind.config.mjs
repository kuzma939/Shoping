export default {
  darkMode: "class",
  content: [
    
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      background: "var(--background)",
      foreground: "var(--foreground)",},
  },
  plugins: ["@tailwindcss/forms"],
};
