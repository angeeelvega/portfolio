/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-astro"],
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  printWidth: 80,
};

export default config;
