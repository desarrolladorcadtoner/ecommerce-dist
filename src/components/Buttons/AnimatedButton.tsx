import React, { useRef } from 'react';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';

const AnimatedButton = () => {
    const msgs = useRef<Messages>(null);

    const handleClick = () => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                {
                    severity: 'success',
                    summary: '¡Éxito!',
                    detail: 'Producto añadido al carrito.',
                    life: 5000,
                },
            ]);

            // Agregar animación de salida después del tiempo de vida
            setTimeout(() => {
                if (msgs.current) {
                    msgs.current.clear();
                }
            }, 5000);
        }
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* Contenedor de mensajes */}
            <div className="absolute top-[-150px] w-full message-appear">
                <Messages ref={msgs} />
            </div>

            {/* Botón */}
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition mt-2"
                onClick={handleClick}
            >
                <i className="pi pi-shopping-cart text-2xl mr-3"></i>
                Añadir al Carrito
            </button>
        </div>
    );
};

export default AnimatedButton;