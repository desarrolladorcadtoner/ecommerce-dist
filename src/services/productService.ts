import { Product } from '@/types';


 const apiUrl = 'http://172.100.203.36:8000/productos/productos';
// const apiUrl = 'http://177.244.52.122:6066/productos'; //--para visualizar fuera de la red.
// const apiUrl = 'http://172.100.203.202:5000/api/productos'; //-- api nodejs

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(apiUrl); 
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

