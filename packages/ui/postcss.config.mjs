import tailwindPxToRem from "./src/lib/tailwind-px-to-rem.mjs";

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    [tailwindPxToRem.postcss ? tailwindPxToRem : null]: {
      baseFontSize: 16, // Adjust as needed
    },
  },
};
export default config;
