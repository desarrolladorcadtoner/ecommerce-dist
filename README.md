This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Arquitectura del proyecto

### [src/](./src)
La carpeta principal que contiene todo el código fuente de la aplicación.

#### [components/](./src/components)
Esta carpeta contiene componentes reutilizables que se utilizan en diferentes partes de la aplicación. Cada componente está diseñado para ser modular y fácil de mantener. Ejemplos comunes incluyen botones, encabezados, formularios y otros elementos de interfaz de usuario.

#### [context/](./src/context)
Esta carpeta contiene archivos relacionados con el manejo del estado global de la aplicación utilizando el contexto de React. Aquí se definen y exportan los contextos y proveedores necesarios para compartir datos entre componentes de manera eficiente.

#### [pages/](./src/pages)
Contiene las páginas principales de la aplicación. Cada archivo en esta carpeta representa una ruta específica en la aplicación.

#### [styles/](./src/styles)
Incluye archivos de estilos globales y específicos para la aplicación. Aquí puedes encontrar configuraciones de CSS o archivos SCSS.

#### [utils/](./src/utils)
Esta carpeta contiene funciones y utilidades que se pueden reutilizar en diferentes partes de la aplicación, como helpers, validaciones y lógica compartida.

#### [hooks/](./src/hooks)
Aquí se encuentran los hooks personalizados de React que encapsulan lógica reutilizable para mejorar la funcionalidad de los componentes.

#### [assets/](./src/assets)
Contiene recursos estáticos como imágenes, íconos y otros archivos multimedia utilizados en la aplicación.

#### [services/](./src/services)
Incluye archivos relacionados con la comunicación con APIs externas o servicios internos, como funciones para realizar solicitudes HTTP.

#### [config/](./src/config)
Esta carpeta contiene configuraciones globales de la aplicación, como variables de entorno o configuraciones específicas.

#### [tests/](./src/tests)
Contiene pruebas unitarias y de integración para garantizar la calidad del código y la funcionalidad de la aplicación.
