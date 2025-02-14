import { Product } from '@/types';
import { NextRequest } from 'next/server';

 const apiUrl = 'http://172.100.203.36:8000/productos';
// const apiUrl = 'http://localhost:5000/api/productos';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(apiUrl); // Ya no necesitas importar node-fetch
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

