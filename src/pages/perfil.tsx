import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadCrumb } from 'primereact/breadcrumb';
import { useRouter } from 'next/router';
import InformacionUsuario from "@/components/Modulos/informacionUsuario";
import EdoCuentaUser from '@/components/Modulos/edoCuentaUsuario';
import ChangePassword from "@/components/Modulos/changePassword";

const Perfil: React.FC = () => {
    const [moduloActivo, setModuloActivo] = useState<"info" | "cuenta" | "cambioContra">("info"); // Estado para el módulo activo
    const router = useRouter(); // Para redireccionar a la página de inicio si es necesario

    // Lee el parámetro de consulta 'modulo' al cargar la página
    useEffect(() => {
        const modulo = router.query.modulo as "info" | "cuenta" | "cambioContra" | undefined;
        if (modulo) {
            setModuloActivo(modulo);
        }
    }, [router.query]);

    const getBreadcrumbItems = () => {
        const items = [
            { label: 'Perfil' },
            {
                label: 'Información',
                template: () => (
                    <span
                        style={{ cursor: "pointer", color: moduloActivo === "info" ? "#de1c85" : "#de1c85" }}
                        onClick={() => router.push("/modulos?modulo=info")}
                    >
                        Información
                    </span>
                )
            }
        ];

        switch (moduloActivo) {
            case "info":
                return [
                    { label: 'Perfil' },
                    { label: 'Información' }
                ];
            case "cuenta":
                return [
                    { label: 'Perfil' },
                    { label: 'Estado de Cuenta' }
                ];
            case "cambioContra":
                return [
                    { label: 'Perfil' },
                    { label: 'Cambiar Contraseña' }
                ];
            default:
                return [{ label: 'Perfil' }];
        }
    };

    const items = getBreadcrumbItems();
    const home = { icon: 'pi pi-home', url: '/' };

    return (
        <>
            <Header />
            <BreadCrumb model={items} home={home} className="bg-gray-200" />

            <div className="bg-gray-200 w-full flex justify-center">
                {moduloActivo === "info" && <InformacionUsuario />}
                {moduloActivo === "cuenta" && <EdoCuentaUser />}
                {moduloActivo === "cambioContra" && <ChangePassword />}
            </div>

            <Footer />
        </>

    )
}

export default Perfil;