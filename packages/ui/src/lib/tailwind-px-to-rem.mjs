// import postcss from 'postcss';

/**
 * PostCSS plugin to convert Tailwind CSS arbitrary px values to rem
 * @param {Object} options - Plugin options
 * @param {number} [options.baseFontSize=16] - Base font size for rem conversion
 * @return {import('postcss').Plugin}
 */
const tailwindPxToRem = (options = {}) => {
  const baseFontSize = options.baseFontSize || 16;

  return {
    postcssPlugin: 'tailwind-px-to-rem',
    Rule(rule) {
      // Regular expression to match Tailwind arbitrary value classes with px
      // Example matches: w-[42px], h-[100px], mt-[25px], etc.
      const pxArbitraryValueRegex = /(\w+(-\w+)*)-\[(\d+)px\]/g;

      // Check if the selector contains Tailwind arbitrary px values
      if (pxArbitraryValueRegex.test(rule.selector)) {
        // Create a new selector with converted values
        const newSelector = rule.selector.replace(
          pxArbitraryValueRegex,
          (match, prefix, modifier, pxValue) => {
            const remValue = parseFloat(pxValue) / baseFontSize;
            return `${prefix}-[${remValue.toFixed(4)}rem]`;
          }
        );

        // Replace the old selector with the new one
        rule.selector = newSelector;
      }
    }
  };
};

tailwindPxToRem.postcss = true;

export default tailwindPxToRem;