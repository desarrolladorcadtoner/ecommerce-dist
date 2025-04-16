/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Archivos en /pages
    "./components/**/*.{js,ts,jsx,tsx}", // Archivos en /components
    "./app/**/*.{js,ts,jsx,tsx}", // Archivos en la carpeta /app si usas App Router
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos adicionales en una carpeta /src si la tienes
  ],
  theme: {
    extend: {},
    screens: {
      sm: {max: '640px', min: '320px'},
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
      'max-1024': { max: '1024px', min: '760px' },
    },
  },
  plugins: [],
};

