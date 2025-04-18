'use client';
import React from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "primereact/card";
import { useCart } from "@/context/CartContext"; // Importar el contexto del carrito

const CartPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Obtener los datos del carrito desde el contexto
  
  console.log('Contenido del carrito:', cartItems);// Verificar contenido del carrito

  // Calcular el total del carrito
  const calculateTotal = (): number => {
    return parseFloat(cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(4));
  };

  // Renderizar la acción de eliminar
  const actionBodyTemplate = (rowData: any) => (
    <Button
      icon="pi pi-trash"
      className="p-button-rounded p-button-danger transition-transform hover:scale-110"
      onClick={() => removeFromCart(rowData.id)}
    />
  );

  // Renderizar la imagen del producto
  const imageBodyTemplate = (rowData: any) => (
    <img
      src={rowData.imagen}
      alt={rowData.nombre}
      className="ml-20 w-28 h-28 object-cover rounded-md"
    />
  );

  // Renderizar la cantidad del producto
  // Se puede mejorar para que sea un input editable
  const quantityBodyTemplate = (rowData: any) => {
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = Math.max(1, Number(e.target.value)); // Evitar cantidades menores a 1
      updateQuantity(rowData.id, newQuantity); // Actualizar la cantidad en el contexto
    };

    return (
      <input
        type="number"
        min="1"
        value={rowData.quantity}
        onChange={handleQuantityChange}
        className="w-16 p-2 border border-gray-300 rounded text-center"
      />
    );
  };

  return (
    <>
      <Header />
      <div className="bg-white p-4 md:p-8 flex justify-center">
        <Card className="shadow-lg p-6 bg-gray-50 rounded-xl border border-gray-300 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Carrito de Compras</h1>

          {/* Tabla de productos */}
          
          <DataTable 
            value={cartItems} 
            responsiveLayout="scroll" 
            className="w-full h-[600px] px-4 py-4 shadow-lg rounded-lg overflow-auto"
          >
            <Column header="Imagen" body={imageBodyTemplate} className="w-1/3 text-left px-2 py-2 bg-gray-50 rounded" />
            <Column field="nombre" header="Producto" className="w-1/3 text-left px-4 py-2 bg-gray-50" />
            <Column field="precio" header="Precio" className="w-1/6 text-center px-4 py-2 bg-gray-50" />
            <Column header="Cantidad" body={quantityBodyTemplate} className="w-1/6 text-center px-4 py-2 bg-gray-50" />
            <Column header="Acciones" body={actionBodyTemplate} exportable={false} className="w-1/4 text-center px-4 py-2 bg-gray-50 text-red-900" />
          </DataTable>

          {/* Total y botón de pago */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Total: ${calculateTotal()}</h2>
            <Button
              label="Ir a pagar"
              icon="pi pi-shopping-cart"
              className="p-button-success w-full md:w-auto px-6 py-3 text-lg font-semibold transition-all hover:scale-105"
              onClick={() => router.push("/checkout")}
            />
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;