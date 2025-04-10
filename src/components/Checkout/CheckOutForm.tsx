import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "primereact/button";
import { Panel } from 'primereact/panel';
import { useRouter } from "next/navigation";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';

const CheckoutPage: React.FC = () => {
    const [checkedStates, setCheckedStates] = useState<boolean[]>([false, false, false]); // Estado para los checkboxes
    const [cedisData, setCedisData] = useState<any[]>([]); // Estado para almacenar los datos de la API
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar el estado de carga
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedCedis, setSelectedCedis] = useState<any | null>(null); // Estado para almacenar el CEDIS seleccionado

    //footerContent para el dialog al seleccionar el cedis
    const footerContent = (
        <div className="gap-10 flex justify-center">
            <Button
                label="Pago en cedis"
                icon="pi pi-shop"
                className="w-auto p-2 h-10 bg-blue-500 shadow-md"
                style={{ color: "white" }}
                onClick={() => setVisible(false)}
                autoFocus />
            <Button
                label="Pago en linea"
                icon="pi pi-money-bill"
                className="w-auto p-2 h-10 bg-blue-500 shadow-md"
                style={{ color: "white" }}
                onClick={() => setVisible(false)}
                autoFocus />
        </div>
    );
    const ref = useRef<Panel>(null);

    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

    const handleCheckboxChange = (index: number) => {
        const updatedStates = checkedStates.map((state, i) => i === index); // Solo permite un checkbox seleccionado
        setCheckedStates(updatedStates);
    };

    // Función para obtener los datos de la API
    const fetchCedisData = async () => {
        try {
            const response = await fetch("http://172.100.203.36:8000/cedis/cedis");
            if (!response.ok) {
                throw new Error("Error al obtener los datos de la API");
            }
            const data = await response.json();
            console.log("Datos de la API:", data); // Inspecciona la estructura de los datos
            setCedisData(data.sucursales || []); // Accede al arreglo "sucursales" y guárdalo en el estado
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        } finally {
            setLoading(false); // Terminamos el estado de carga
        }
    };

    // useEffect para llamar a la API al cargar el componente
    useEffect(() => {
        fetchCedisData();
    }, []);

    const header = (
        <img alt="Card" src="/images/logo-cadtoner.png" />
    );
    const footer = (cedis: any) => (
        <>
            <Button 
            label="Select" 
            icon="pi pi-check" 
            className="w-auto p-2 h-10 bg-blue-500 shadow-md" 
            style={{ color: "white" }} 
            onClick={() =>{ 
                setSelectedCedis(cedis); // Actualiza el estado con el CEDIS seleccionado
                setVisible(true); // Abre el Dialog
                }} />
            {/*<Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />*/}
        </>
    );

    return (
        <>
            <div className="flex flex-col w-auto h-auto justify-center items-center">
                {/* Seleccion de opcion de envio */}
                {/*<div className="w-2/3 mt-12">
                    <h6 className="bg-gray-100 w-3/4 p-2 text-xl rounded-md shadow-md">¿El producto lo recogera en un Cedis o sera envio a domicilio?</h6>
                    <Button label="CEDIS" severity="info" className="w-auto p-2 h-10 bg-blue-500 mr-4 mt-8 shadow-md" style={{ color: "white" }} />
                    <Button label="PAQUETERIA" severity="info" className="w-auto p-2 h-10 bg-blue-500 shadow-md" style={{ color: "white" }} />
                </div>*/}

                {/* Seleccion de la paqueteria */}
                {/* <div className="card w-2/3 text-center">
                    <Card title="Seleccione la paquetería" className="shadow-lg">
                        <div className="flex flex-row justify-evenly h-72">
                            <div className="felx flex-col w-40 h-auto space-x-4">
                                <Image src="/images/logo-cadtoner.png"
                                    alt="Paqueteria EXPRESS"
                                    />
                                <Checkbox
                                    onChange={() => handleCheckboxChange(0)}
                                    checked={checkedStates[0]}
                                    className="border rounded-md h-auto mt-2"
                                />
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 1</label>
                            </div>
                            <div className="felx flex-col w-40 space-x-4">
                                <Image src="/images/logo-cadtoner.png"
                                    alt="Image"
                                    preview width="250" />
                                <Checkbox
                                    onChange={() => handleCheckboxChange(1)}
                                    checked={checkedStates[1]}
                                    className="border rounded-md h-auto mt-2"
                                />
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 2</label>
                            </div>
                            <div className="felx flex-col w-40 space-x-4">
                                <Image src="/images/logo-cadtoner.png"
                                    alt="Image"
                                    preview width="250" />
                                <Checkbox
                                    onChange={() => handleCheckboxChange(2)}
                                    checked={checkedStates[2]}
                                    className="border rounded-md h-auto mt-2"
                                />
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 3</label>
                            </div>
                        </div>
                        <Button label="Siguiente" severity="info" className="w-auto p-2 h-10 bg-blue-500 shadow-md" style={{ color: "white" }} />
                    </Card>
                    
                </div>*/}

                {/* Seleccion de cedis */}
                {/*<h1 className="font-semibold text-2xl mt-4 mb-4">Selecciona el CEDIS de tu elección para recoger tu pedido:</h1>
                {loading ? (
                    <p>Cargando datos...</p> // Mostrar un mensaje mientras se cargan los datos
                ) : (
                    <div className="flex flex-wrap grid grid-rows-3 grid-flow-col justify-center gap-4">
                        {cedisData.map((cedis, index) => (
                            <div key={index} className="card flex justify-center w-96">
                                <Card
                                    title={cedis.nombre} // Nombre del CEDIS
                                    subTitle={`Correo: ${cedis.email}`} // Correo del CEDIS
                                    footer={footer(cedis)}
                                    header={header}
                                    className="md:w-25rem"
                                >
                                    <p className="m-0">
                                        Dirección: {cedis.calle}, {cedis.colonia},  CP {cedis.cp}
                                        Telefono: {cedis.telefono1}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
                <div className="card flex justify-content-center">
                    <Dialog 
                    header={selectedCedis?.nombre || "Información del CEDIS"} 
                    visible={visible} 
                    style={{ width: '50vw' }} 
                    onHide={() => { if (!visible) return; setVisible(false); }} 
                    footer={footerContent}>
                        {selectedCedis && ( // Muestra los datos solo si hay un CEDIS seleccionado
                            <>
                                <p className="m-0">Dirección: {selectedCedis.calle}, {selectedCedis.colonia}, CP {selectedCedis.cp}</p>
                                <p className="m-0">Teléfono: {selectedCedis.telefono1}</p>
                            </>
                        )}
                        <p className="m-0">Horario: 9:00am a 18:00pm</p>


                    </Dialog>
                </div>*/}
            </div>
        </>
    );
};

export default CheckoutPage;
function useRef<T>(initialValue: T | null): React.MutableRefObject<T | null> {
    const [ref] = useState<React.MutableRefObject<T | null>>(() => ({
        current: initialValue,
    }));
    return ref;
}
// Removed duplicate implementation of useRef to resolve the error.

