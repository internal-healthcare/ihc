const scaleArbitraryValuesPlugin = (opts = {}) => {
  const scalingFactor = opts.scalingFactor || 0.78;
  return {
    postcssPlugin: "scale-arbitrary-values",
    Once(root) {
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          if (decl.value.includes("[")) {
            decl.value = decl.value.replace(/\[(\d+\.?\d*)px\]/g, (match, pxValue) => {
              const scaledValue = parseFloat(pxValue) * scalingFactor;
              return `[${scaledValue}px]`;
            });
          }
        });
      });
    },
  };
};

scaleArbitraryValuesPlugin.postcss = true;

export default scaleArbitraryValuesPlugin;
