import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import AnimatedButton from '@/components/Buttons/AnimatedButton';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useAuth } from "@/context/AuthContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState<boolean>(false);
  const { isAuthenticated } = useAuth();
  const footerContent = (
    <div>
      {/* Boton dentro del Dialog para agregar producto con su respectiva cantidad */}
      <AnimatedButton
        onClick={() => {
          addToCart(product, quantity)
          setQuantity(1);
          setTimeout(() => {
            setVisible(false); // Cerrar el diálogo
          }, 500);
        }}
      //onClose={() => setVisible(false) 9515813}
      />
      {/*<Button label="Cerrar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />*/}
    </div>
  );

  return (
    <div className="product-card sm:grid sm:grid-col-1">
      <Card className="w-full h-full flex flex-col justify-between p-4 shadow-lg
      hover:shadow-xl hover:border-4 sm:text-center hover:border-blue-500 
      transition duration-300 ease-in-out bg-white rounded-lg
      max-1024:w-[400px] max-1024:h-[620px] max-1024:mb-4
      sm:w-[300px] sm:h-[600px]">

        {/* Imagen del producto */}
        {product.imagen && (
          <div className="w-full h-44 overflow-hidden mb-4">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-full object-scale-down" />
          </div>
        )}

        {/* Nombre y descripción */}
        <h3 className="text-lg w-full h-36 font-bold mb-2 text-clip overflow-hidden">{product.nombre}..</h3>
        {/*<p className="text-gray-500 text-sm mb-2">{product.descripcion}</p>*/}

        {product.referencia && (
          <p className="text-xs text-gray-400 mb-2 sm:text-blue-500">Referencia: {product.referencia}</p>
        )}

        {product.categoria && (
          <p className="text-xs text-gray-400 mb-2 ">Categoria: {product.categoria}</p>
        )}

        {/* Precio */}
        {isAuthenticated && (<p className="text-blue-500 font-bold mb-2 ">${product.precio}</p>)}

        {/* Botón Leer Más */}
        <Link href={`/productDetail?id=${product.id}`} className="text-blue-500 hover:underline mb-4">
          Ver detalles
        </Link>

        {/* Botón Agregar al carrito */}
        <div className="mt-4 flex justify-center content-center">

          {isAuthenticated && (<Button className="bg-blue-500 text-white py-2 px-4 rounded-md transition hover:bg-blue-600"
            label="Agregar al carrito"
            icon="pi pi-shopping-cart text-2xl mr-3"
            onClick={() => setVisible(true)} />)}
          

          <Dialog header="Estas agregando un producto a tu carrito:"
            visible={visible} style={{ maxWidth: '90vw' }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
            footer={footerContent}>
            <div className='flex justify-center items-center space-x-4'>
              {/* Imagen del producto */}
              <div className="w-48 h-32 overflow-hidden mb-4">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="w-full h-full object-scale-down" />
              </div>

              <div>
                <h6 className="text-lg w-full h-42 font-bold mb-2 text-ellipsis">{product.nombre}</h6>
                {product.referencia && (
                  <p className="text-xs text-gray-400 mb-2">Referencia: {product.referencia}</p>
                )}
                {/* Input para cantidad */}
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 p-2 text-center border border-gray-300 rounded"
                />
              </div>

            </div>
          </Dialog>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;