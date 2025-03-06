import type { Config } from "tailwindcss";
import mainConfig from "@repo/ui/tailwind.config";

export default {
  ...mainConfig,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // corePlugins: {
  //   preflight: false, // Try disabling preflight temporarily to isolate the issue
  // },
} satisfies Pick<Config, "content" | "presets" | "corePlugins">;
