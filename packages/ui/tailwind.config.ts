import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          primary2: "var(--brand-primary-2)",
          primary3: "var(--brand-primary-3)",
          shade: "var(--brand-shade)",
        },
        primary3: "var(--primary-3)",
        light: "var(--light)",
        light2: "var(--light-2)",
        shade1: "var(--shade-1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        clash: ["ClashDisplay"],
      },
    },
  },
  plugins: [],
  // plugins: [tailwindcssAnimate],
} satisfies Omit<Config, "content">;

export default config;
