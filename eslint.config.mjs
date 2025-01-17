/** @type {import('eslint').Linter.Config} */
export default {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals"],
    rules: {
      "react/no-unescaped-entities": "off"
    },
  
  settings: {
    react: {
      version: 'detect', // Автоматичне визначення версії React
    },
  },
  
};
