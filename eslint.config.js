import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Required rules from project instructions
      "no-var": "error", // Disallow 'var', use 'let' or 'const' instead
      "no-unused-vars": "error", // Disallow unused variables
      "semi": ["error", "always"], // Require semicolons

      // Additional rules (at least 2 more required)
      "eqeqeq": "error", // Require === and !== instead of == and !=
      "no-undef": "error", // Disallow undeclared variables
      "prefer-const": "error", // Prefer const for variables that are never reassigned
      "no-const-assign": "error", // Disallow reassigning const variables
    },
  },
];
