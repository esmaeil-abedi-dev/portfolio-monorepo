module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "prettier",
    "turbo",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "no-console": "warn",
  },
};
