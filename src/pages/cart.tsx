"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { DataTable, DataTableValue } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Producto 1", price: 100, quantity: 2 },
    { id: 2, name: "Producto 2", price: 50, quantity: 1 },
  ]);

  // Calcular el total del carrito
  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Manejar la eliminación de un artículo del carrito
  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Renderizar la acción de eliminar
  const actionBodyTemplate = (rowData: CartItem) => {
    return (
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger"
        onClick={() => removeFromCart(rowData.id)}
      />
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>

      <DataTable value={cartItems} responsiveLayout="scroll">
        <Column field="name" header="Producto"></Column>
        <Column field="quantity" header="Cantidad"></Column>
        <Column field="price" header="Precio"></Column>
        <Column
          header="Acciones"
          body={actionBodyTemplate}
          exportable={false}
        ></Column>
      </DataTable>

      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
        <Button
          label="Ir a pagar"
          icon="pi pi-shopping-cart"
          className="p-button-success"
          onClick={() => router.push("/checkout")}
        />
      </div>
    </div>
  );
};

export default CartPage;
