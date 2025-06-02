'use client';
import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withAuth from "../hocs/withAuth";
import { Card } from "primereact/card";
import { useCart } from "@/context/CartContext"; // Importar el contexto del carrito

const CartPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Obtener los datos del carrito desde el contexto

  // Calcular el total del carrito
  const calculateTotal = (): string => {
    const total = cartItems.reduce((sum, item) => sum + item.precio * item.quantity, 0);
    return total.toLocaleString("es-MX", { style: "currency", currency: "MXN" }); // Formatear como moneda mexicana
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
      className="ml-20 w-28 h-28 object-cover rounded-md sm:ml-0 sm:w-32 xl:ml-6"
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
        className="w-20 p-2 border border-gray-300 rounded text-center"
      />
    );
  };

  // Renderizar el precio con el símbolo de pesos
  const priceBodyTemplate = (rowData: any) => {
    return `$${rowData.precio.toFixed(2)}`; // Formatear el precio con 2 decimales
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 p-4 md:p-8 flex justify-center">
        <Card className="shadow-lg p-6 bg-white rounded-xl border border-gray-300 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-[1.875rem] font-bold text-gray-900 mb-6 text-center">Carrito de Compras</h1>

          {/* Tabla de productos */}
          
          <DataTable 
            value={cartItems} 
            responsiveLayout="scroll" 
            className="w-full h-[600px] px-4 py-4 overflow-auto sm:overflow-hidden sm:overflow-y-auto" //shadow-md rounded-lg
          >
            <Column header="Imagen" body={imageBodyTemplate} className="w-1/3 text-left px-2 py-2 rounded" />
            <Column field="nombre" header="Producto" className="w-1/3 text-left px-4 py-2  sm:w-2/3" />
            <Column header="Precio" body={priceBodyTemplate} className="w-1/6 text-center px-4 py-2 " />
            <Column header="Cantidad" body={quantityBodyTemplate} className="w-1/6 text-center px-4 py-2 " />
            <Column header="Acciones" body={actionBodyTemplate} exportable={false} className="w-1/4 text-center px-4 py-2 text-red-900" />
          </DataTable>

          {/* Total y botón de pago */}
          <div className="flex flex-row justify-end items-center mt-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Total: {calculateTotal()}</h2>
            <Button
              label="Ir a pagar"
              icon="pi pi-shopping-cart"
              className="bg-[#0b4468] w-auto px-6 py-3 text-lg text-white font-semibold transition-all hover:scale-105"
              onClick={() => router.push("/checkout")}
            />
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(CartPage);