/* eslint-disable @typescript-eslint/no-require-imports */
const { default: postcssPxToRem } = require("./src/postcss/postcss-px-to-rem");
const { default: postcssRemScale } = require("./src/postcss/postcss-rem-scale");


module.exports = {
  plugins:
    process.env.NODE_ENV == "production"
      ? {
          tailwindcss: {},
          autoprefixer: {},
          "./src/postcss/postcss-px-to-rem.cjs": { baseFontSize: 16 },
          "./src/postcss/postcss-rem-scale.cjs": { factor: 0.78 },
        }
      : [
          "tailwindcss",
          "autoprefixer",
          postcssPxToRem({ baseFontSize: 16 }),
          postcssRemScale({ factor: 0.78 }),
        ],
};
