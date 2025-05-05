import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const withAuth = (WrappedComponent: React.FC) => {
    const AuthenticatedComponent: React.FC = (props) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const storedAuth = localStorage.getItem("isAuthenticated");
            if (storedAuth === "true") {
                setLoading(false); // Usuario autenticado, dejar de cargar
            } else {
                router.push("/login"); // Redirigir al inicio de sesión si no está autenticado
            }
        }, [isAuthenticated, router]);

        if (loading) {
            return <div>Cargando...</div>; // Mostrar un indicador de carga mientras se verifica
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;