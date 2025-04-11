import React, { useState } from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import InputTextCheck from "../Inputs/InputTextCheck";


const CheckOne: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false); // Estado para controlar la visibilidad del formulario
    const [formData, setFormData] = useState({
        calle: "",
        numExterior: "",
        numInterior: "",
        entreCalle: "",
        yEntreCalle: "",
        codigoPostal: "",
    }); // Estado para los valores del formulario

    const [direcciones, setDirecciones] = useState<string[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice de la dirección que se está editando
    const [visible, setVisible] = useState<boolean>(false);

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
        const nuevaDireccion = `${formData.calle || ""}, #${formData.numExterior || ""}, ${formData.numInterior ? `Int. ${formData.numInterior}` : ""
            } Entre ${formData.entreCalle || ""} y ${formData.yEntreCalle || ""}, con CP ${formData.codigoPostal || ""
            }`;

        if (editingIndex !== null) {
            // Si estamos editando, actualizamos solo la dirección seleccionada
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
            codigoPostal: "",
        });
        setVisible(false);
    };

    const handleEdit = (index: number) => {
        const direccion = direcciones[index];
        const [calle, numExterior, numInterior, entreCalle, yEntreCalle, codigoPostal, ciudad, estado, pais] =
            direccion.split(",").map((part) => part.trim());

        setFormData((prevData) => ({
            ...prevData, // Mantén los valores actuales
            calle: calle || prevData.calle,
            numExterior: numExterior.replace("#", "") || prevData.numExterior,
            numInterior: numInterior?.replace("Int.", "").trim() || prevData.numInterior,
            entreCalle: entreCalle?.replace("Entre", "").trim() || prevData.entreCalle,
            yEntreCalle: yEntreCalle?.replace("y", "").trim() || prevData.yEntreCalle,
            codigoPostal: codigoPostal?.replace("con CP", "").trim() || prevData.codigoPostal,
        }));

        setEditingIndex(index);
        setVisible(true);
    };

    const footerContent = (
        <div className="flex justify-end gap-8">
            <Button label="Agregar" onClick={handleSubmit} />
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        </div>
    );

    return (
        <>
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
                    <div className="grid grid-cols-1 mb-4">

                        <InputTextCheck
                            nameInput="Calle:"
                            className="w-full general-input"
                            id="calle"
                            value={formData.calle}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InputTextCheck
                            nameInput="Num. Exterior:"
                            className="w-full general-input"
                            id="numExterior"
                            value={formData.numExterior}
                            onChange={handleInputChange}
                        />

                        <InputTextCheck
                            nameInput="Num. Interior:"
                            id="numInterior"
                            value={formData.numInterior}
                            onChange={handleInputChange}
                            className="w-full general-input"
                        />


                        <div className="flex-auto">
                            <label htmlFor="entreCalle" className="font-bold block mb-2">
                                Entre calle:
                            </label>
                            <InputText
                                id="entreCalle"
                                value={formData.entreCalle}
                                onChange={handleInputChange}
                                className="w-full general-input"
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
                                className="w-full general-input"
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
                                className="w-full general-input"
                            />
                        </div>
                    </div>





                </Dialog>
            </div>

            {/* Sección de direcciones */}
            {direcciones.map((direccion, index) => (
                <div key={index} className="w-1/2 m-4 border-2 solid rounded-lg shadow-md">
                    <Panel header={`Dirección ${index + 1}:`}>
                        <div className="flex p-2">
                            <p className="w-3/4 text-black">{direccion}</p>
                            <div className="flex w-full justify-end gap-4 pr-4">
                                <Button
                                    icon="pi pi-pen-to-square"
                                    severity="success"
                                    aria-label="Edit"
                                    onClick={() => handleEdit(index)}
                                    className="bg-pink-600 h-10"
                                    style={{ color: "white" }}
                                />
                                <Button
                                    icon="pi pi-check"
                                    aria-label="Filter"
                                    className="bg-blue-500 h-10"
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
