module.exports = (opts = {}) => {
  const factor = opts.factor || 0.78; // Default factor is 0.78
  return {
    postcssPlugin: "postcss-rem-scale",
    Declaration(decl) {
      // Your existing plugin logic here
      if (decl.value.includes("rem")) {
        // Replace all rem values with the scaled value
        decl.value = decl.value.replace(/(\d*\.?\d+)rem/g, (match, p1) => {
          const scaledValue = parseFloat(p1) * factor;
          return `${scaledValue}rem`;
        });
      }
    },
  };
};

module.exports.postcss = true;
