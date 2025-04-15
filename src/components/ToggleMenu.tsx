import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';
import { PanelMenu } from 'primereact/panelmenu';
import '../styles/global.css';

const ToggleMenu: React.FC = () => {
    const menu = useRef<TieredMenu>(null);
    const [visible, setVisible] = useState(false);

    // Opciones del menú
    const items: MenuItem[] = [
        {
            label: 'INICIO',
            icon: 'pi pi-home',
            command: () => window.location.href = '/',
            
        },
        {
            label: 'PRODUCTOS',
            icon: 'pi pi-box',
            items: [
                { label: 'Cartuchos de Toner', command: () => window.location.href = '/products?category=Cartuchos de Toner' },
                { label: 'Cartuchos de Tinta', command: () => window.location.href = '/products?category=Cartuchos de Tinta' },
                { label: 'Insumos de Toner', command: () => window.location.href = '/products?category=Insumos de Toner' },
                { label: 'Insumos de Tinta', command: () => window.location.href = '/products?category=Insumos de Tinta' },
                { label: 'Tinta a Granel', command: () => window.location.href = '/products?category=Tinta a Granel' },
                { label: 'Refacciones', command: () => window.location.href = '/products?category=Refacciones' },
                { label: 'Electronica', command: () => window.location.href = '/products?category=Electronica' },
                { label: 'Papeleria', command: () => window.location.href = '/products?category=Papeleria' },
            ]
        },
        {
            label: 'ACERCA DE CADTONER',
            icon: 'pi pi-info-circle',
            command: () => window.location.href = '/acerca'
        },
        {
            label: 'CONTACTO',
            icon: 'pi pi-envelope',
            command: () => window.location.href = '/contacto'
        },
        {
            label: 'CEDIS',
            icon: 'pi pi-map-marker',
            command: () => window.location.href = '/cedis'
        },
        {
            label: 'FACTURACIÓN',
            icon: 'pi pi-file',
            command: () => window.location.href = '/billing'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            {/*<TieredMenu model={items} popup ref={menu} breakpoint="760px" />*/}
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2 className='text-[32px] text-[#de1c85]'>Menú</h2>
                <Divider className='border-2 border-pink-500'/>
                <PanelMenu model={items} className="w-full md:w-20rem" />
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
            {/*<Button icon="pi pi-bars" onClick={(e) => menu.current?.toggle(e)} />*/}
        </div>
    );
};

export default ToggleMenu;