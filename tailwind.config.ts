import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Archivos en /pages
    "./components/**/*.{js,ts,jsx,tsx}", // Archivos en /components
    "./app/**/*.{js,ts,jsx,tsx}", // Archivos en la carpeta /app si usas App Router
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos adicionales en una carpeta /src si la tienes
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
} satisfies Config;

export default config;
