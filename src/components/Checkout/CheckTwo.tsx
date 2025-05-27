import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import InputTextCheck from "../Inputs/InputTextCheck";
import { Button } from "primereact/button";

interface CartItem {
    id: number;
    nombre: string;
    precio: number;
    quantity: number;
    imagen: string;
}

interface CheckTwoProps {
    cartItems: CartItem[];
    selectedOption: "CEDIS" | "PAQUETERIA" | null;
    selectedCedis?: any;
    selectedAddress?: string | null;
}

const CheckTwo: React.FC<CheckTwoProps> = ({
    cartItems,
    selectedOption,
    selectedCedis,
    selectedAddress,
}) => {
    const [isEditingCard, setIsEditingCard] = useState(false); // Estado para mostrar/ocultar el formulario de edición de tarjeta

    // Calcular totales
    const subtotal = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    return (
        <>
            <div className="ml-4 mr-4">
                <h2 className="text-center mb-8 sm:mt-6 sm:text-2xl sm:text-bold">Solicitud de pedido</h2>

                {/* División entre "Your Order" y "Método de Pago" */}
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
                    {/* Your Order */}
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">Tu orden</h3>
                        <p className="mb-4">
                            Método de Envío:{" "}
                            {selectedOption === "CEDIS"
                                ? `Recoger en ${selectedCedis?.nombre}, ${selectedCedis?.colonia}, ${selectedCedis?.calle} `
                                : `Paquetería seleccionada, Dirección: ${selectedAddress}`}
                        </p>

                        {/* Productos */}
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex sm:flex-col sm:py-4 items-center justify-between border-b pb-2">
                                    <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded sm:w-32 sm:h-32" />
                                    <p className="flex-1 ml-4">{item.nombre}</p>
                                    <p className="mr-4 sm:py-4">Cantidad: {item.quantity}</p>
                                    <p className="text-blue-500 sm:py-2">${item.precio.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Totales */}
                        <div className="mt-4 border-t pt-4">
                            <div className="flex justify-between">
                                <p>Subtotal:</p>
                                <p className="text-blue-500">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>IVA (16%):</p>
                                <p>${iva.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>Total:</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Método de Pago */}
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">Método de Pago</h3>

                        {/* Información de la tarjeta */}
                        <div className="mb-4">
                            <p>Tarjeta: **** **** **** 1234</p>
                            <p>Expiración: 12/25</p>
                            <p>Tipo: Visa</p>
                            <Button
                                label="Editar Tarjeta"
                                className="mt-2"
                                onClick={() => setIsEditingCard(!isEditingCard)}
                            />
                        </div>

                        {/* Formulario de edición de tarjeta */}
                        {isEditingCard && (
                            <div className="mt-4 border-t pt-4">
                                <InputTextCheck
                                    nameInput="Nombre del Titular"
                                    className="w-full general-input mb-4"
                                    id="cardHolderName"
                                    value=""
                                    onChange={(e) => console.log(e.target.value)}
                                />
                                <InputMask
                                    mask="9999 9999 9999 9999"
                                    placeholder="Número de Tarjeta"
                                    className="w-full general-input mt-4 mb-4"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <InputMask
                                        mask="99"
                                        placeholder="MM"
                                        className="w-full general-input"
                                    />
                                    <InputMask
                                        mask="99"
                                        placeholder="YY"
                                        className="w-full general-input"
                                    />
                                </div>
                                <InputMask
                                    mask="999"
                                    placeholder="CVV"
                                    className="w-full general-input mt-4"
                                />
                                <div className="flex justify-end gap-4 mt-4">
                                    <Button
                                        label="Cancelar"
                                        className="p-button-text"
                                        onClick={() => setIsEditingCard(false)}
                                    />
                                    <Button label="Guardar" />
                                </div>
                            </div>
                        )}

                        {/* Botón para realizar el pedido */}
                        <div className="mt-8">
                            <Button
                                label="Realizar Pedido"
                                className="w-full p-button-success"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckTwo;