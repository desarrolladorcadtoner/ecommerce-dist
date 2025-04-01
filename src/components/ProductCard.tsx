import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import AnimatedButton from '@/components/Buttons/AnimatedButton';
import { Card } from 'primereact/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Card className="w-full h-full flex flex-col justify-evenly p-4 shadow-lg 
      hover:shadow-xl hover:border-t-4  hover:border-blue-500
      transition duration-300 ease-in-out bg-white rounded-lg
      transition duration-300 ease-in-out">
        {/* Imagen del producto */}
        {product.imagen && (
          <div className="w-full h-40 overflow-hidden mb-4">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-full object-scale-down"/>
          </div>
        )}

        {/* Nombre y descripción */}
        <h3 className="text-lg w-full h-40 font-bold mb-2">{product.nombre}</h3>
        {/*<p className="text-gray-500 text-sm mb-2">{product.descripcion}</p>*/}

        {product.referencia && (
          <p className="text-xs text-gray-400 mb-2">Referencia: {product.referencia}</p>
        )}

        {product.categoria && (
          <p className="text-xs text-gray-400 mb-2">Categoria: {product.categoria}</p>
        )}

        {/* Precio */}
        <p className="text-blue-500 font-bold mb-2">${product.precio}</p>

        {/* Botón Leer Más */}
        <Link href={`/productDetail?id=${product.id}`} className="text-blue-500 hover:underline mb-4">
          Ver detalles
        </Link>

        {/* Botón Agregar al carrito */}
        <div className="mt-auto">
          <AnimatedButton onClick={() => addToCart(product)} />
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;