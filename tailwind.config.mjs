/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Вмикання темного режиму на основі класу
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}", // Сканує всі файли в папці "pages" для Tailwind класів
    "./src/components/**/*.{js,jsx,ts,tsx}", // Сканує всі файли в папці "components" для Tailwind класів
    "./src/app/**/*.{js,jsx,ts,tsx}", // Сканує файли в "app" для Tailwind класів
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Динамічно застосовує значення з CSS змінної
        foreground: "var(--foreground)", // Динамічно застосовує значення з CSS змінної
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Для покращення стилізації форм
    require("@tailwindcss/typography"), // Плагін типографіки для тексту
  ],
};
