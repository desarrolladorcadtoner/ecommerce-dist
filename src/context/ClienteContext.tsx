// src/context/ClienteContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getClienteData, defaultClienteData, ClienteData } from "@/services/userDemo";
import { useAuth } from "@/context/AuthContext";

const ClienteContext = createContext<ClienteData>(defaultClienteData);
const idUser = 168442;

export const ClienteProvider = ({ children }: { children: ReactNode }) => {
    const [cliente, setCliente] = useState<ClienteData>(defaultClienteData);
    const { fetchProtectedData } = useAuth();

    useEffect(() => {
        const cargarDatos = async () => {
            const perfil = await fetchProtectedData();
            if (perfil?.usuario === "Guadalupe") {
                const data = await getClienteData(idUser);
                setCliente(data);
            } else {
                setCliente(defaultClienteData);
            }
        };

        cargarDatos();
    }, [fetchProtectedData]);

    return (
        <ClienteContext.Provider value={cliente}>
            {children}
        </ClienteContext.Provider>
    );
  };

export const useCliente = () => useContext(ClienteContext);
