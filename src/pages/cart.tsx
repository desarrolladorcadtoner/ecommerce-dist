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
      className="w-46 h-32 object-cover rounded-md sm:ml-0 sm:w-32 "
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
  const priceBodyTemplate = (rowData: any) => `$${rowData.precio.toFixed(2)}`;

  return (
    <>
      <Header />
      <h1 className="text-[1.875rem] font-bold text-center text-gray-800 py-8 bg-gray-200">Carrito de Compras</h1>

      <div className="bg-gray-200  p-4 md:p-8 grid grid-cols-3 gap-2">
        {/* Tabla de productos */}

        <div className="lg:col-span-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Productos</h2>
          <DataTable value={cartItems} responsiveLayout="scroll" className="w-full">
            <Column header="Imagen" body={imageBodyTemplate} />
            <Column field="nombre" header="Producto" />
            <Column header="Precio" body={priceBodyTemplate} />
            <Column header="Cantidad" body={quantityBodyTemplate} />
            <Column header="Acciones" body={actionBodyTemplate} />
          </DataTable>
        </div>

        <Card className="shadow-lg p-4 bg-white rounded-xl border border-gray-300 col-span-1">{ /*md:w-3/4 lg:w-2/3*/}
          <div className="space-y-2 mt-4">
            <h3 className="text-[1.5rem] font-semibold mb-4">Resumen de tu pedido:</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="text-sm">
                <p className="mt-4 text-gray-800 text-justify leading-snug font-medium">
                  {item.nombre}
                </p>
                <div className="mt-4 flex justify-between text-gray-600 text-sm">
                  <span >Cantidad: <span className="text-blue-500">{item.quantity}</span></span>
                  <span className="text-blue-500">${item.precio.toFixed(2)}</span>
                </div>
                <hr className="my-2 border-gray-300" />
              </div>
            ))}
          </div>
          
          <div className="totales flex gap-12 mt-12 place-content-end">
            <h2 className="text-[1.5rem] font-bold text-right">Subotal: {calculateTotal()}</h2>
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

{/*
  <Button
              label="Ir a pagar"
              icon="pi pi-shopping-cart"
              className="bg-[#0b4468] w-auto px-6 py-3 text-lg text-white font-semibold transition-all hover:scale-105"
              onClick={() => router.push("/checkout")}
               */}