// types.ts
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  referencia: string;
  categoria: string;
}

export interface Caracteristica {
  Referencia: string;
  ModeloReferencia: string;
  Linea: string;
  TecnoImpresion: string;
  Calidad: string;
  Color: string;
  Rendimiento: string;
  NombreComun: string;
  PaginaxcientoCobertura: string;
  UsoImpresoras: string;
}