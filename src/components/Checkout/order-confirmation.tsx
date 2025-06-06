import React from "react";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">¡Pedido Confirmado!</h1>
      <p>Gracias por tu compra. Recibirás un correo con los detalles del pedido.</p>
    </div>
  );
};

export default OrderConfirmation;
