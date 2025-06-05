import React, { useEffect, useState } from "react";

// Ajusta la interfaz a lo que responda tu API real:
interface Producto {
    ProductoId: string;
    Nombre: string;
    Descripcion: string;
    Precio: string;
    ImagenUrl?: string;
    [key: string]: any; // Por si trae más campos
}

const API_URL = "http://192.168.1.224/WSPaginaCad/rest/ProductosProvider?OrigenAcceso=1&ProductoId=170";
const API_URLDOS ="http://192.168.1.224/WsPaginaCad/APIDistribuidores/GetProductos?OrigenAcceso=1&ProductoId=170";

const DemoTest: React.FC = () => {
    const [producto, setProducto] = useState<Producto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const res = await fetch(API_URLDOS);
                if (!res.ok) throw new Error("No se pudo obtener el producto");
                const data = await res.json();
                // Si la respuesta es un array, toma el primero
                setProducto(Array.isArray(data) ? data[0] : data);
            } catch (err: any) {
                setError(err.message || "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-8 rounded-2xl bg-white shadow-2xl">
                <h1 className="text-2xl font-bold text-center mb-6 text-[#005a90]">Demo Producto API</h1>
                {loading && <div className="text-center text-gray-500">Cargando...</div>}
                {error && <div className="text-center text-red-500">Error: {error}</div>}
                {producto && (
                    <div className="flex flex-col items-center">
                        {producto.ImagenUrl && (
                            <img
                                src={producto.ProductoLangImagenURL}
                                alt={producto.ProductoLangDescCorta}
                                className="w-40 h-40 object-cover rounded-lg mb-4 border"
                            />
                        )}
                        <div className="mb-3 text-xl font-semibold text-[#de1c85]">{producto.ProductoLangDescCorta}</div>
                        <div className="mb-2 text-gray-600 text-center">{producto.CategoriaDescripcion}</div>
                        <div className="text-lg font-bold text-[#005a90] mb-2">
                            Precio: ${producto.ProductoPrice}
                        </div>
                        {/* Muestra campos extra si existen */}
                        <div className="mt-4 text-xs text-gray-400">
                            ID: {producto.ProductoId}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoTest;

//http://192.168.1.224/WSPaginaCad/rest/ProductosProvider?OrigenAcceso=1&ProductoId=170
