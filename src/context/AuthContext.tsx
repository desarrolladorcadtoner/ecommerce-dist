import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (usuario: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (usuario: string, password: string) => {
        try {
            const response = await fetch("http://172.100.203.36:8000/login/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario, password }),
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            console.log("Usuario autenticado:", data);

            // Guardar el estado de sesión
            setIsAuthenticated(true);

            // Opcional: Guardar el token en localStorage para mantener la sesión
            localStorage.setItem("authToken", data.token);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Usuario o contraseña incorrectos");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("authToken"); // Eliminar el token al cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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