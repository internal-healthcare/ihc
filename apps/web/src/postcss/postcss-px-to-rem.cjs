module.exports = (opts = {}) => {
  const baseFontSize = opts.baseFontSize || 16; // Default base font size is 16px
  return {
    postcssPlugin: "postcss-px-to-rem",
    Declaration(decl) {
      if (decl.value.includes("px")) {
        // Replace all px values with the equivalent rem value
        decl.value = decl.value.replace(/(\d*\.?\d+)px/g, (match, p1) => {
          const pxValue = parseFloat(p1);
          const remValue = pxValue / baseFontSize;
          return `${remValue}rem`;
        });
      }
    },
  };
};

module.exports.postcss = true;
