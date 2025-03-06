import { plugin } from "postcss";

export default plugin("scale-rem-values", (opts) => {
  const scalingFactor = opts.scalingFactor || 0.78;

  return (root) => {
    root.walkRules((rule) => {
      rule.walkDecls((decl) => {
        if (decl.value.includes("[")) {
          decl.value = decl.value.replace(/\[(\d+\.?\d*)rem\]/g, (match, remValue) => {
            const scaledValue = (parseFloat(remValue) * 16 * scalingFactor) / 16;
            return `[${scaledValue}rem]`;
          });
        }
      });
    });
  };
});
