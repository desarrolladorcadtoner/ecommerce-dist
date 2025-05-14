import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (usuario: string, password: string) => Promise<void>;
    logout: () => void;
    fetchProtectedData: () => Promise<any>; // Agregado para exponer fetchProtectedData
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Cargar el estado de autenticación desde localStorage al iniciar la aplicación
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://172.100.203.36:8001/confirmacion/distribuidores/confirmar", {
                    method: "GET",
                    credentials: "include", // Incluir cookies en la solicitud
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error al verificar la autenticación:", error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    const fetchProtectedData = async () => {
        try {
            const response = await fetch("http://172.100.203.36:8000/protected-data", {
                method: "GET",
                credentials: "include", // Incluir cookies en la solicitud
            });

            if (!response.ok) {
                throw new Error("No autorizado");
            }

            const data = await response.json();
            console.log("Datos protegidos:", data);
            return data;
        } catch (error) {
            console.error("Error al obtener datos protegidos:", error);
            throw error;
        }
    };

    // Función para iniciar sesión
    const login = async (usuario: string, password: string) => {
        try {
            const response = await fetch("http://172.100.203.36:8000/login/login", {
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
            console.log("Usuario autenticado:", data);

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
            await fetch("http://172.100.203.36:8000/logout", {
                method: "POST",
                credentials: "include", // Incluir cookies en la solicitud
            });

            // Actualizar el estado de autenticación
            setIsAuthenticated(false);
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