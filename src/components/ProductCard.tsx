import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {product.imagen && (
        <div className="w-full h-40 overflow-hidden mb-4">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="w-full h-full object-scale-down"
          />
        </div>
      )}

      {/* Nombre y descripción */}
      <h3 className="text-lg font-bold mb-2">{product.nombre}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.descripcion}</p>

      {product.referencia && (
        <p className="text-xs text-gray-400 mb-2">Referencia: {product.referencia}</p>
      )}

      {product.categoria && (
        <p className="text-xs text-gray-400 mb-2">Categoria: {product.categoria}</p>
      )}

      {/* Precio */}
      <p className="text-blue-500 font-bold mb-2">${product.precio}</p>

      {/* Botón Leer Más */}
      <Link href={`/productDetail?id=${product.id}`}>
        Ver detalles
      </Link>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition mt-2"
        onClick={() => {
          console.log('Producto añadido al carrito:', product);
          addToCart(product);
        }}
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
