import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (usuario: string, password: string) => Promise<void>;
    logout: () => void;
    fetchProtectedData: () => Promise<any>; // Agregado para exponer fetchProtectedData
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();


    // Cargar el estado de autenticación desde localStorage al iniciar la aplicación
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("https://172.100.203.36:8000/login/perfil-protegido", {
                    method: "GET",
                    credentials: "include", // Incluir cookies en la solicitud
                });

                const data = await response.json();
                if (response.ok && data?.usuario) {
                    setIsAuthenticated(true);
                } else if (response.status === 401) {
                    // Token inválido o no enviado
                    setIsAuthenticated(false);
                    //Opcional: router.push("/login");
                }
            } catch (error) {
                //console.error("Error al verificar la autenticación:", error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    const fetchProtectedData = async () => {
        try {
            const response = await fetch("https://172.100.203.36:8000/login/perfil-protegido", {
                method: "GET",
                credentials: "include", // Incluir cookies en la solicitud
            });

            if (response.status === 401) {
                console.warn("No autorizado: JWT inválido o no enviado");
                setIsAuthenticated(false); // 🔴 Forzar cierre de sesión
                return null; // También podrías hacer: throw new Error("No autorizado");
            }

            if (!response.ok) {
                throw new Error(`Error inesperado: ${response.statusText}`);
            }

            const data = await response.json();
            //console.log("Datos protegidos:", data);
            return data;
        } catch (error) {
            console.error("Error al obtener datos protegidos:", error);
            setIsAuthenticated(false); // 🛡️ Respaldo en caso de error
            return null;
            //throw error;
        }
    };

    // Función para iniciar sesión
    const login = async (usuario: string, password: string) => {
        try {
            const response = await fetch("https://172.100.203.36:8000/login/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario, password }),
                credentials: "include", // Incluir cookies en la solicitud
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            //console.log("Usuario autenticado:", data);
            document.cookie.split(";").forEach(c => console.log(c));
            // Actualizar el estado de autenticación
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    };

    // Función para cerrar sesión
    const logout = async () => {
        try {
            await fetch("https://172.100.203.36:8000/login/logout", {
                method: "POST",
                credentials: "include",
            });

            setTimeout(() => {
                setIsAuthenticated(false);
                router.push("/");
            }, 100);

            // ✅ Redirigir al inicio después de cerrar sesión
            router.push("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, fetchProtectedData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};