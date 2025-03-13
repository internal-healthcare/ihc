// eslint-disable-next-line @typescript-eslint/no-require-imports
const postcss = require('postcss');

const plugin = postcss.plugin("postcss-rem-scale", (opts = {}) => {
  const factor = opts.factor || 0.78; // Default factor is 0.78

  return (root) => {
    root.walkDecls((decl) => {
      // Check if the value contains 'rem'
      if (decl.value.includes("rem")) {
        // Replace all rem values with the scaled value
        decl.value = decl.value.replace(/(\d*\.?\d+)rem/g, (match, p1) => {
          const scaledValue = parseFloat(p1) * factor;
          return `${scaledValue}rem`;
        });
      }
    });
  };
});

module.exports = plugin;
