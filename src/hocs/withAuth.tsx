import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const withAuth = (WrappedComponent: React.FC) => {
    const AuthenticatedComponent: React.FC = (props) => {
        const { isAuthenticated, fetchProtectedData } = useAuth(); // Agregar fetchProtectedData
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    // Verificar datos protegidos
                    //await fetchProtectedData();
                    setLoading(false); // Usuario autenticado, dejar de cargar
                } catch (error) {
                    console.error("Error al verificar datos protegidos:", error);
                    router.push("/login"); // Redirigir al inicio de sesión si no está autorizado
                }
            };

            if (isAuthenticated) {
                checkAuth();
            } else {
                router.push("/login"); // Redirigir al inicio de sesión si no está autenticado
            }
        }, [isAuthenticated, router]); {/*fetchProtectedData,*/ } 

        if (loading) {
            return <div>Cargando...</div>; // Mostrar un indicador de carga mientras se verifica
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;