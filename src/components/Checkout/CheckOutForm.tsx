import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CheckOne from "./CheckOne";

const CheckoutPage: React.FC<{
    setCurrentStep: (step: number) => void;
    setSelectedOption: (option: "CEDIS" | "PAQUETERIA") => void;
    setSelectedCedis: (cedis: any) => void;
}> = ({ setCurrentStep, setSelectedOption, setSelectedCedis }) => {
    const [checkedStates, setCheckedStates] = useState<boolean[]>([false, false, false]); // Estado para los checkboxes
    const [cedisData, setCedisData] = useState<any[]>([]); // Estado para almacenar los datos de la API
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar el estado de carga
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedOption, setOption] = useState<"CEDIS" | "PAQUETERIA" | null>(null);
    const [selectedCedis, updateSelectedCedis] = useState<any | null>(null);
    const [selectedPaqueteria, setSelectedPaqueteria] = useState<number | null>(null);
    const [direccionSeleccionada, setDireccionSeleccionada] = useState<string | null>(null);

    const [products, setProducts] = useState([]);

    //footerContent para el dialog al seleccionar el cedis
    const footerContent = (
        <div className="gap-10 flex justify-center">
            <Button
                label="Pago en linea"
                icon="pi pi-money-bill"
                className="w-auto p-2 h-10 bg-blue-500 shadow-md"
                style={{ color: "white" }}
                onClick={() => {
                    handleNext(); // Llama a la función handleNext para avanzar al siguiente paso
                    setTimeout(() => {
                        setVisible(false); // Cierra el diálogo después de un breve retraso
                    }
                        , 1000); // Ajusta el tiempo según sea necesario
                }}
                autoFocus />
        </div>
    );

    const handleNext = () => {
        if (selectedOption === "CEDIS" && selectedCedis) {
            setCurrentStep(2); // Ir a CheckTwo
        } else if (
            selectedOption === "PAQUETERIA" &&
            direccionSeleccionada !== null &&
            selectedPaqueteria !== null
        ) {
            setCurrentStep(2);
        } else {
            alert("Por favor, selecciona una opción válida.");
        }
    };

    const handleCheckboxChange = (index: number) => {
        const updatedStates = checkedStates.map((state, i) => i === index); // Solo permite un checkbox seleccionado
        setCheckedStates(updatedStates);
    };

    // Función para obtener los datos de la API
    const fetchCedisData = async () => {
        try {
            const response = await fetch("https://172.100.203.36:8000/cedis/cedis");
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

    console.log(direccionSeleccionada);
    const actionBodyTemplate = (rowData: any) => (
        <Button
            label="Seleccionar"
            icon="pi pi-check"
            className="w-auto p-2 h-10 bg-blue-500 shadow-md"
            style={{ color: "white" }}
            onClick={() => {
                updateSelectedCedis(rowData);
                setSelectedCedis(rowData);
                setVisible(true);
            }}
        />
    );

    return (
        <>
            <div className="flex flex-col w-auto h-auto justify-center items-center">
                {/* Seleccion de opcion de envio */}
                <div className="w-2/3 mt-12 sm:w-9/12 sm:flex sm:flex-col sm:items-center">
                    <h6 className="bg-gray-100 w-3/4 p-2 text-xl rounded-md shadow-md sm:w-[350px] sm:mx-2">
                        ¿El producto lo recogera en un Cedis o sera envio a domicilio?
                    </h6>
                    <Button
                        label="CEDIS"
                        severity="info"
                        className={`w-auto p-2 h-10 ${selectedOption === "CEDIS" ? "bg-blue-700" : "bg-blue-500"} mr-4 mt-8 shadow-md sm:mr-0 sm:mb-4`}
                        style={{ color: "white" }}
                        onClick={() => {
                            setOption("CEDIS");
                            setSelectedOption("CEDIS");
                        }}
                    />
                    <Button
                        label="PAQUETERIA"
                        severity="info"
                        className={`w-auto p-2 h-10 ${selectedOption === "PAQUETERIA" ? "bg-blue-700" : "bg-blue-500"} sm:mt-4 shadow-md`}
                        style={{ color: "white" }}
                        onClick={() => {
                            setOption("PAQUETERIA");
                            setSelectedOption("PAQUETERIA");
                        }}
                    />
                </div>

                {/* Cuando selecciona PAQUETERIA, primero mostrar CheckOne */}
                {selectedOption === "PAQUETERIA" && !direccionSeleccionada && (
                    <div className="w-full flex flex-col justify-center mt-6">
                        <CheckOne
                            setSelectedAddress={(direccion: string) => {
                                setDireccionSeleccionada(direccion);
                              }}
                        />
                    </div>
                )}

                {/* Mostrar selección de paquetería solo después de elegir dirección */}
                {selectedOption === "PAQUETERIA" && direccionSeleccionada && (
                    <div className="card w-full sm:w-11/12 md:w-2/3 mx-auto text-center mt-6">
                        <Card title="Seleccione la paquetería" className="shadow-lg sm:h-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 border rounded shadow-sm bg-gray-50"
                                    >
                                        <Image src="/images/logo-cadtoner.png" alt="Paqueteria EXPRESS" />
                                        <Checkbox
                                            onChange={() => setSelectedPaqueteria(index)}
                                            checked={selectedPaqueteria === index}
                                            className="w-6 h-6 mb-1"
                                        />
                                        <label className="text-sm font-medium">Paquetería {index + 1}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    label="Siguiente"
                                    severity="info"
                                    className="w-auto px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                                    onClick={handleNext}
                                />
                            </div>
                        </Card>
                    </div>
                )}


                {/* Seleccion de cedis */}
                {selectedOption === "CEDIS" && (
                    <div className="w-full mt-8 mb-12">
                        <h6 className="text-2xl font-semibold mb-4">Selecciona un CEDIS(Modo Tabla):</h6>
                        <div className="w-full shadow-lg">
                            {/* Renderizar CEDIS desde la API */}
                            <DataTable value={cedisData} stripedRows tableStyle={{ minWidth: '50rem' }}>
                                <Column field="nombre" header="Nombre"></Column>
                                <Column field="email" header="Correo"></Column>
                                <Column field="calle" header="Calle"></Column>
                                <Column field="colonia" header="Colonia"></Column>
                                <Column field="cp" header="C.P."></Column>
                                <Column field="telefono1" header="Telefono"></Column>
                                <Column header="Action" body={actionBodyTemplate} />
                            </DataTable>
                        </div>
                    </div>
                )}

                {/* Botón del dialogo para avanzar al siguiente paso */}
                <div className="card flex justify-content-center">
                    <Dialog
                        header={selectedCedis?.nombre || "Información del CEDIS"}
                        visible={visible}
                        onHide={() => { if (!visible) return; setVisible(false); }}
                        style={{ maxHeight: '70vh', overflowY: 'auto' }}
                        footer={footerContent}>
                        {selectedCedis && ( // Muestra los datos solo si hay un CEDIS seleccionado
                            <>
                                <p className="m-0">Dirección: {selectedCedis.calle}, {selectedCedis.colonia}, CP {selectedCedis.cp}</p>
                                <p className="m-0">Teléfono: {selectedCedis.telefono1}</p>
                            </>
                        )}
                        <p className="m-0">Horario: 9:00am a 18:00pm</p>

                    </Dialog>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
