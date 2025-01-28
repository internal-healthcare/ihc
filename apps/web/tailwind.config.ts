import type { Config } from "tailwindcss";
import mainConfig from "@repo/ui/tailwind.config";
const config = {
  ...mainConfig,
  content: [...mainConfig.content, "@repo/ui/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
