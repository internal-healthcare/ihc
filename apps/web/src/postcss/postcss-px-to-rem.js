import postcss from 'postcss';

export default postcss.plugin('postcss-px-to-rem', (opts = {}) => {
  const baseFontSize = opts.baseFontSize || 16; // Default base font size is 16px

  return (root) => {
    root.walkDecls((decl) => {
      // Check if the value contains 'px'
      if (decl.value.includes('px')) {
        // Replace all px values with the equivalent rem value
        decl.value = decl.value.replace(/(\d*\.?\d+)px/g, (match, p1) => {
          const pxValue = parseFloat(p1);
          const remValue = pxValue / baseFontSize;
          return `${remValue}rem`;
        });
      }
    });
  };
});