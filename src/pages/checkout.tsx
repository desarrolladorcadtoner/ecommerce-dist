"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Order submitted:", formData);
    router.push("/order-confirmation");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Finalizar Compra</h1>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block font-semibold">Nombre:</label>
          <InputText
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Dirección:</label>
          <InputText
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Dirección completa"
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Ciudad:</label>
          <InputText
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Tu ciudad"
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Código Postal:</label>
          <InputText
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Código postal"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          label="Enviar Pedido"
          icon="pi pi-check"
          className="p-button-success"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
