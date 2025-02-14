import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchProductById } from '@/services/productService';
import { Product } from '@/types';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id as string).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.nombre}</h1>
      <p>{product.stock}</p>
      <p className="text-xl font-semibold">${product.precio}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Añadir al Carrito</button>
    </div>
  );
};

export default ProductDetail;