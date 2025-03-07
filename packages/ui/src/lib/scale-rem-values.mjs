// import postcss from 'postcss';

export default function scaleRemValues(opts = {}) {
  const scalingFactor = opts.scalingFactor || 0.78;

  return {
    postcssPlugin: "scale-rem-values",
    Declaration(decl) {
      if (decl.value.includes("[")) {
        decl.value = decl.value.replace(/\[(\d+\.?\d*)rem\]/g, (match, remValue) => {
          const scaledValue = (parseFloat(remValue) * 16 * scalingFactor) / 16;
          return `[${scaledValue}rem]`;
        });
      }
    },
  };
}

scaleRemValues.postcss = true;
