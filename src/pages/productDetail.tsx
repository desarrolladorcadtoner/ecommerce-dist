"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFichaTecnica, fetchProductById } from "@/services/productService";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedButton from '@/components/Buttons/AnimatedButton';
import { TabView, TabPanel } from "primereact/tabview";
import { useCart } from "@/context/CartContext"; // Importar el contexto del carrito
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "@/styles/productDetail.css";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [fichaTecnica, setFichaTecnica] = useState<any | null>(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  useEffect(() => {
    if (id) {
      fetchProductById(id as string).then(setProduct);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      fetchFichaTecnica(product.referencia).then(setFichaTecnica);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      console.log(`Añadiendo ${quantity} unidades del producto ${product.nombre} al carrito`);
      addToCart(product, quantity); // Pasar la cantidad seleccionada
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={product.imagen}
              alt={product.nombre}
              width={400}
              height={400}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.nombre}
            </h1>
            <p className="mt-4 text-xl text-gray-500">Stock disponible: {product.stock}</p>
            <p className="mt-4 text-xl text-gray-500">Referencia: {product.referencia}</p>
            <p className="mt-4 text-xl text-gray-500">Categoria: {product.categoria}</p>
            <p className="mt-2 text-3xl text-blue-500 font-bold ">${product.precio.toFixed(2)}</p>
            <div className="mt-8 flex items-center">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 p-2 text-center border border-gray-300 rounded mr-4"
              />
              <AnimatedButton onClick={() => addToCart(product, quantity)} />
              {/*<button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                <ShoppingCart className="mr-2" />
                Añadir al Carrito
              </button>*/}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-8">
          <TabView>
            <TabPanel header="Detalles del Producto">
              <h2 className="text-2xl font-bold mb-4">Ficha Técnica</h2>
              {fichaTecnica ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Modelo de Referencia:</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fichaTecnica.ModeloReferencia}</td>
                    </tr>
                    {/* Más filas aquí */}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">Cargando ficha técnica...</p>
              )}
            </TabPanel>
            <TabPanel header="Descripción">
              <h2 className="text-2xl font-bold mb-4">Descripción del Producto</h2>
              <p className="text-gray-700">{product.nombre}</p>
            </TabPanel>
            <TabPanel header="Compatibilidad">
              <h2 className="text-2xl font-bold mb-4">Compatibilidad</h2>
              {fichaTecnica ? (
                <p className="text-gray-700">{fichaTecnica.UsoImpresora}</p>
              ) : (
                <p className="text-gray-500">Cargando compatibilidad...</p>
              )}
            </TabPanel>
          </TabView>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;