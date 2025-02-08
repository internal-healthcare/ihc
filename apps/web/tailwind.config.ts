import type { Config } from "tailwindcss";
import mainConfig from "@repo/ui/tailwind.config";

const config = {
  ...mainConfig,
} satisfies Config;

export default config;
