// Using ESM syntax as expected by your project

/**
 * PostCSS plugin to convert Tailwind CSS arbitrary px values to rem
 * @param {Object} options - Plugin options
 * @param {number} [options.baseFontSize=16] - Base font size for rem conversion
 */
const tailwindPxToRem = (options = {}) => {
    const baseFontSize = options.baseFontSize || 16;
    
    return {
      postcssPlugin: 'tailwind-px-to-rem',
      Once(root) {
        root.walkRules(rule => {
          // Regular expression to match Tailwind arbitrary value classes with px
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
        });
      }
    };
  };
  
  tailwindPxToRem.postcss = true;
  
  // Use default export for ESM
  export default tailwindPxToRem;