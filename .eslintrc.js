module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@esmaeilabedi/eslint-config`
  extends: ["./packages/eslint-config/library.js"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
