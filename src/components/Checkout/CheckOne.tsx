import React, { useState } from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const CheckOne: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false); // Estado para controlar la visibilidad del formulario
    const [formData, setFormData] = useState({
        calle: "",
        numExterior: "",
        numInterior: "",
        entreCalle: "",
        yEntreCalle: "",
        ciudad: "",
        estado: "",
        pais: "",
        codigoPostal: "",
    }); // Estado para los valores del formulario
    const [direccion, setDireccion] = useState(
        "Una direccion, con num #, Entre una calle y Entre otra calle, con CP 00000."
    ); // Estado para el texto de la dirección

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible); // Alterna el estado de visibilidad
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = () => {
        // Actualiza el texto de la dirección con los valores del formulario
        setDireccion(
            `${formData.calle}, #${formData.numExterior}, ${formData.numInterior ? `Int. ${formData.numInterior}` : ""
            } Entre ${formData.entreCalle} y ${formData.yEntreCalle}, con CP ${formData.codigoPostal}, ${formData.ciudad}, 
            ${formData.estado}, ${formData.pais}.`
        );
        setIsFormVisible(false); // Oculta el formulario después de hacer clic en Submit
    };

    return (
        <>
            <div className="w-1/2 m-4 flex justify-end">
                <Button label="Agregar Dirección" className="flex justify-end bg-pink-500 w-40 h-12 text-white shadow-lg" />
            </div>

            <div className="w-1/2 m-4 border-2 solid rounded-lg shadow-md">


                <Panel header="Dirección:">
                    <div className="flex p-2">

                        <p className="w-2/3 text-black ">{direccion}</p>

                        {/*Botones */}
                        <div className="flex w-full justify-end gap-4 pr-4">
                            {/*<Button icon="pi pi-check" aria-label="Filter" />*/}
                            <Button
                                icon="pi pi-pen-to-square"
                                severity="success"
                                aria-label="Edit"
                                onClick={toggleFormVisibility}
                                className="bg-pink-600"
                                style={{ color: "white" }}// Cambia la visibilidad del formulario al hacer clic
                            />
                            {isFormVisible && (<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />)}
                            {/*<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />*/}
                        </div>
                    </div>

                </Panel>

                {/* Sección de formulario - Edit direccion */}
                {isFormVisible && ( // Renderiza el formulario solo si isFormVisible es true
                    <div className="card w-2/3 p-4 pl-6 pr-6">
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="calle" className="font-bold block mb-2">
                                    Calle:
                                </label>
                                <InputText
                                    id="calle"
                                    value={formData.calle}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="numExterior" className="font-bold block mb-2">
                                    Num. Exterior:
                                </label>
                                <InputText
                                    id="numExterior"
                                    value={formData.numExterior}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="numInterior" className="font-bold block mb-2">
                                    Num. Interior:
                                </label>
                                <InputText
                                    id="numInterior"
                                    value={formData.numInterior}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="entreCalle" className="font-bold block mb-2">
                                    Entre calle:
                                </label>
                                <InputText
                                    id="entreCalle"
                                    value={formData.entreCalle}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="yEntreCalle" className="font-bold block mb-2">
                                    Y Entre Calle:
                                </label>
                                <InputText
                                    id="yEntreCalle"
                                    value={formData.yEntreCalle}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="codigoPostal" className="font-bold block mb-2">
                                    Codigo Postal:
                                </label>
                                <InputText
                                    id="codigoPostal"
                                    value={formData.codigoPostal}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="ciudad" className="font-bold block mb-2">
                                    Ciudad:
                                </label>
                                <InputText
                                    id="ciudad"
                                    value={formData.ciudad}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="estado" className="font-bold block mb-2">
                                    Estado:
                                </label>
                                <InputText
                                    id="estado"
                                    value={formData.estado}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="pais" className="font-bold block mb-2">
                                    Pais
                                </label>
                                <InputText
                                    id="pais"
                                    value={formData.pais}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>

                        <Button label="Submit" onClick={handleSubmit} />
                    </div>
                )}

            </div>

        </>
    );
}

export default CheckOne;
