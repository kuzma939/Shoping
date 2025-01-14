import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Ensures correct resolution of relative paths
});

// Adding ESLint's Next.js core rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021, // Specify ECMAScript version
        sourceType: "module",
      },
    },
    rules: {
      // Add your custom ESLint rules here
      "no-console": "warn",
      "react/react-in-jsx-scope": "off", // Next.js automatically imports React
    },
  },
];

export default eslintConfig;
