import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';
import InformacionUsuario from "@/components/Moduls/informacionUsuario"; 
import EdoCuentaUser from '@/components/Moduls/edoCuentaUsuario';

const Modulos: React.FC = () => {
    const [moduloActivo, setModuloActivo] = useState<"info" | "cuenta">("info"); // por default, "info"
    const items = [
        { label: 'Perfil' },
        { label: moduloActivo === "info" ? 'Información' : 'Estado de Cuenta', 
            template: () => (
                <span
                    style={{ cursor: "pointer", color: moduloActivo === "info" ? "#ec4899" : "" }}
                    onClick={() => setModuloActivo("info")}
                >
                    Información
                </span>
            )
        },
    ];

    const home = { icon: 'pi pi-home', url: '/' };

    return(
        <>
            <Header /> {/* Si tu Sidebar está aquí y quieres controlar desde ahí */}
            <BreadCrumb model={items} home={home} className="bg-gray-200"/>

            <div className="bg-gray-200 w-full flex justify-center">
                {moduloActivo === "info" && <InformacionUsuario />}
                {moduloActivo === "cuenta" && <EdoCuentaUser />}
            </div>

            <Footer />
        </>
        
    )
}

export default Modulos;