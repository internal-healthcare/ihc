/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    './src/postcss/postcss-px-to-rem.cjs': { baseFontSize: 16 },
    './src/postcss/postcss-rem-scale.cjs': { factor: 0.78 },
  }
};

module.exports = config
