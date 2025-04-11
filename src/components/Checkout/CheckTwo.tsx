import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import InputTextCheck from "../Inputs/InputTextCheck";
import { Button } from "primereact/button";

const CheckTwo: React.FC = () => {
    const [isEditingCard, setIsEditingCard] = useState(false); // Estado para mostrar/ocultar el formulario de edición de tarjeta

    return (
        <>
            <div className="ml-4 mr-4">
                <h2 className="text-center mb-8">Solicitud de pedido</h2>

                {/* División entre "Your Order" y "Método de Pago" */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Your Order */}
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">Your Order</h3>
                        <p className="mb-4">Método de Envío: Envío estándar</p>

                        {/* Productos */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-2">
                                <img
                                    src="/images/product1.png"
                                    alt="Producto 1"
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <p className="flex-1 ml-4">Producto 1</p>
                                <p className="mr-4">Cantidad: 1</p>
                                <p>$100.00</p>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2">
                                <img
                                    src="/images/product2.png"
                                    alt="Producto 2"
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <p className="flex-1 ml-4">Producto 2</p>
                                <p className="mr-4">Cantidad: 2</p>
                                <p>$200.00</p>
                            </div>
                        </div>

                        {/* Totales */}
                        <div className="mt-4 border-t pt-4">
                            <div className="flex justify-between">
                                <p>Subtotal:</p>
                                <p>$300.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p>IVA (16%):</p>
                                <p>$48.00</p>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>Total:</p>
                                <p>$348.00</p>
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