import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    backdropBlur: {
      xs: '2px',
      
    },
    animation: {
      aurora: 'aurora 20s infinite linear',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [],
} satisfies Config;
