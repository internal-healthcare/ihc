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
} satisfies Pick<Config, "content" | "presets">;
