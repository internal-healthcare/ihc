import postcssPxToRem from "./src/postcss/postcss-px-to-rem.js";
import postcssRemScale from "./src/postcss/postcss-rem-scale.js";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    postcssPxToRem({ baseFontSize: 16 }),
    postcssRemScale({ factor: 0.78 }),
  ],
};

export default config;
