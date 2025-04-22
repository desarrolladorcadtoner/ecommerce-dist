import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import AnimatedButton from '@/components/Buttons/AnimatedButton';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface ProductCardProps {
    product: Product;
}

const ProductCardList: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [visible, setVisible] = useState<boolean>(false);
    const footerContent = () => (//product: Product
        <div>
            {/* Boton dentro del Dialog para agregar producto con su respectiva cantidad */}
            <AnimatedButton
                onClick={() => {
                    addToCart(product, quantity);
                    setQuantity(1);// Resetear cantidad después de agregar al carrito
                    // Esperar 2000ms antes de cerrar el diálogo
                    setTimeout(() => {
                        setVisible(false); // Cerrar el diálogo
                    }, 500);
                }}

            />
        </div>
    );

    return (
        <div key={product.id} className="flex p-4 border rounded items-center gap-4 shadow-md 
        sm:p-2 sm:gap-2 sm:flex-col sm:w-full ">
            {product.imagen && (
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                    <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-full h-full object-scale-down rounded"
                    />
                </div>
            )}
            <div className="flex flex-col flex-1 ">
                <h3 className="text-xl font-bold mb-2">{product.nombre}</h3>
                <p className="text-gray-700 text-blue-500">{product.descripcion}</p>
                <p className="text-lg text-blue-500 font-semibold mb-2">${product.precio}</p>
                {product.referencia && (
                    <p className="text-xs text-gray-400">Referencia: {product.referencia}</p>
                )}
                {product.categoria && (
                    <p className="text-xs text-gray-400 mb-2">Categoría: {product.categoria}</p>
                )}
                <div className="flex gap-2 mt-2 ">
                    <Link
                        href={`/productDetail?id=${product.id}`}
                        className="text-blue-500 mr-4 hover:underline"
                    >
                        Ver detalles
                    </Link>
                    <div>

                    </div>
                    {/* Botón Agregar al carrito */}
                    <Button className="bg-blue-500 text-white py-2 px-4 rounded-md transition hover:bg-blue-600"
                        label="Agregar al carrito"
                        icon="pi pi-shopping-cart text-2xl mr-3"
                        onClick={() => {
                            //setSelectedProduct(product);
                            setVisible(true)
                        }}
                    />
                    <Dialog
                        header="Estas agregando un producto a tu carrito:"
                        visible={visible}
                        style={{ width: '40vw' }}
                        onHide={() => setVisible(false)}
                        footer={footerContent} //&& footerContent(selectedProduct)
                        className="custom-dialog"
                    >
                        {/*{selectedProduct && (*/}
                        <div className="flex justify-center items-center space-x-4">
                            {/* Imagen del producto */}
                            <div className="w-48 h-32 overflow-hidden mb-4">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="w-full h-full object-scale-down"
                                />
                            </div>

                            <div>
                                <h6 className="text-lg w-full h-42 font-bold mb-2 text-ellipsis">
                                    {product.nombre}
                                </h6>
                                {product.referencia && (
                                    <p className="text-xs text-gray-400 mb-2">
                                        Referencia: {product.referencia}
                                    </p>
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
                        { /*)}*/}
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default ProductCardList;