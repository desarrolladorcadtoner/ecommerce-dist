import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';

const Modulos: React.FC = () => {
    const items = [
        { label: 'Perfil' },
        {
            label: 'Informacion',
            template: () => <Link href="/inputtext">Información</Link>
        }
    ];
    const home = { icon: 'pi pi-home', url: '/' };

    return(
        <>
            <Header />
            <BreadCrumb model={items} home={home} />
            
                <div className="flex justify-center w-auto m-8">
                    <h1>Hola mundo</h1>
                </div>

            <Footer />
        </>
        
    )
}

export default Modulos;