// types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string; // URL de imagen opcional
  code?: string;  // Código del producto opcional
}

  