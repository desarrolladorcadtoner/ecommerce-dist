import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

interface AnimatedButtonProps {
    onClick?: () => void; // Prop opcional para pasar una función
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
    const toast = useRef<Toast>(null);

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success', // Define el color y estilo del mensaje
            summary: 'Éxito', // Título del mensaje
            detail: 'Producto agregado al carrito', // Contenido del mensaje
            life: 3000, // Tiempo de vida del mensaje en milisegundos
        });
    };

    const handleClick = () => {
        showSuccess(); // Mostrar el mensaje
        if (onClick) {
            onClick(); // Ejecutar la función pasada como prop
        }
    };

    return (
        <div className="flex justify-center mt-4">
            {/* Componente Toast para mostrar mensajes */}
            <Toast ref={toast} />
            {/* Botón que dispara el mensaje y la función */}
            <Button
                className="bg-blue-500 text-white mt-8 py-2 px-4 rounded-md transition mt-2 hover:bg-blue-600"
                onClick={handleClick}
            >
                <i className="pi pi-shopping-cart text-2xl mr-3"></i>
                Añadir al Carrito
            </Button>
        </div>
    );
};
export default AnimatedButton;