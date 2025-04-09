import React, { useState } from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


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

    const [direcciones, setDirecciones] = useState<string[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice de la dirección que se está editando
    const [visible, setVisible] = useState<boolean>(false);
    const footerContent = (
        <div className="flex justify-end gap-8">
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );


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
        const nuevaDireccion = `${formData.calle}, #${formData.numExterior}, ${formData.numInterior ? `Int. ${formData.numInterior}` : ""
            } Entre ${formData.entreCalle} y ${formData.yEntreCalle}, con CP ${formData.codigoPostal}, ${formData.ciudad}, 
            ${formData.estado}, ${formData.pais}.`;

        if (editingIndex !== null) {
            // Si estamos editando, actualizamos la dirección existente
            setDirecciones((prevDirecciones) =>
                prevDirecciones.map((direccion, index) =>
                    index === editingIndex ? nuevaDireccion : direccion
                )
            );
            setEditingIndex(null); // Salimos del modo de edición
        } else {
            // Si no estamos editando, agregamos una nueva dirección
            setDirecciones((prevDirecciones) => [...prevDirecciones, nuevaDireccion]);
        }

        setFormData({
            calle: "",
            numExterior: "",
            numInterior: "",
            entreCalle: "",
            yEntreCalle: "",
            ciudad: "",
            estado: "",
            pais: "",
            codigoPostal: "",
        }); // Limpiamos el formulario
        setVisible(false); // Cerramos el diálogo
    };

    const handleEdit = (index: number) => {
        const direccion = direcciones[index];
        const [calle, numExterior, numInterior, entreCalle, yEntreCalle, codigoPostal, ciudad, estado, pais] =
            direccion.split(",").map((part) => part.trim());

        setFormData({
            calle: calle || "",
            numExterior: numExterior.replace("#", "") || "",
            numInterior: numInterior?.replace("Int.", "").trim() || "",
            entreCalle: entreCalle?.replace("Entre", "").trim() || "",
            yEntreCalle: yEntreCalle?.replace("y", "").trim() || "",           
            codigoPostal: codigoPostal?.replace("con CP", "").trim() || "",
        });

        setEditingIndex(index);
        setVisible(true);
    };

    return (
        <>
            {/*<div className="w-1/2 m-4 flex justify-end">
                <Button label="Agregar Dirección" onClick={() => setVisible(true)} className="flex justify-end bg-pink-500 w-40 h-12 text-white shadow-lg" />
                <Dialog header="Header"
                    visible={visible}
                    style={{ width: '50vw' }}
                    onHide={() => { if (!visible) return; setVisible(false); }}
                    footer={footerContent}>
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
                    </div>

                </Dialog>
            </div>*/}

            {/* Sección de dirección */}
            <div className="w-1/2 m-4 flex justify-end">
                <Button
                    label="Agregar Dirección"
                    onClick={() => {
                        setEditingIndex(null); // Aseguramos que no estamos editando
                        setVisible(true);
                    }}
                    className="flex justify-end bg-pink-500 w-40 h-12 text-white shadow-lg"
                />
                <Dialog
                    header="Agregar/Editar Dirección"
                    visible={visible}
                    style={{ width: '50vw' }}
                    onHide={() => setVisible(false)}
                    footer={footerContent}
                >
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
                        <Button label="Submit" onClick={handleSubmit} />
                    </div>
                </Dialog>
            </div>

            {/* Sección de direcciones */}
            {direcciones.map((direccion, index) => (
                <div key={index} className="w-1/2 m-4 border-2 solid rounded-lg shadow-md">
                    <Panel header={`Dirección ${index + 1}:`}>
                        <div className="flex p-2">
                            <p className="w-2/3 text-black">{direccion}</p>
                            <div className="flex w-full justify-end gap-4 pr-4">
                                <Button
                                    icon="pi pi-pen-to-square"
                                    severity="success"
                                    aria-label="Edit"
                                    onClick={() => handleEdit(index)}
                                    className="bg-pink-600"
                                    style={{ color: "white" }}
                                />
                            </div>
                        </div>
                    </Panel>
                </div>
            ))}

        </>
    );
}

export default CheckOne;
