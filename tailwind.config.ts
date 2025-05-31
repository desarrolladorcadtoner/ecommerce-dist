import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Register/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'pinkToner':'#delc85',
        'blueLightToner':'#0072b1',
        'blueDarkToner':'#0b4468',
        'backgroundGray':'#f3f3f3'
      },
    },
    screens: {
      sm: { max: '640px', min: '320px' },
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
      'max-1024': { max: '1024px', min: '760px' },
    },
    fontSize: {
      'xxs': '0.4rem',
    },
  },
  plugins: [],
};

export default config;
