import React, { useState } from "react";
import Header from "@/components/Header"
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const CheckOne: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false); // Estado para controlar la visibilidad del formulario

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible); // Alterna el estado de visibilidad
    };

    return (
        <>
            <div className="w-1/2 m-4 border-2 solid rounded-lg shadow-md">
                <Panel header="Dirección:">
                    <div className="flex p-2">

                        <p className="w-2/3">Una direccion, con num #, Entre una calle y Entre otra calle, con CP 00000.</p>

                        {/*Botones */}
                        <div className="flex w-full justify-end gap-4 pr-4">
                            {/*<Button icon="pi pi-check" aria-label="Filter" />*/}
                            <Button
                                icon="pi pi-pen-to-square"
                                severity="success"
                                aria-label="Search"
                                onClick={toggleFormVisibility} // Cambia la visibilidad del formulario al hacer clic
                            />
                            {/*<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />*/}
                            <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" />
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
                                    keyfilter="alpha"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="number" className="font-bold block mb-2">
                                    Num. Exterior:
                                </label>
                                <InputText
                                    id="number"
                                    keyfilter="num"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="money" className="font-bold block mb-2">
                                    Num. Interior:
                                </label>
                                <InputText
                                    id="money"
                                    keyfilter="money"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="hex" className="font-bold block mb-2">
                                    Entre calle:
                                </label>
                                <InputText
                                    id="hex"
                                    keyfilter="hex"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="alphabetic" className="font-bold block mb-2">
                                    Y Entre Calle:
                                </label>
                                <InputText
                                    id="alphabetic"
                                    keyfilter="alpha"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="alphanumeric" className="font-bold block mb-2">
                                    Codigo Postal:
                                </label>
                                <InputText
                                    id="alphanumeric"
                                    keyfilter="alphanum"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex-auto">
                                <label htmlFor="pint" className="font-bold block mb-2">
                                    Ciudad:
                                </label>
                                <InputText
                                    id="pint"
                                    keyfilter="pint"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="pnum" className="font-bold block mb-2">
                                    Estado:
                                </label>
                                <InputText
                                    id="pnum"
                                    keyfilter="pnum"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="email" className="font-bold block mb-2">
                                    Pais
                                </label>
                                <InputText
                                    id="email"
                                    keyfilter="email"
                                    className="w-full border-2 border-[#0072b1]"
                                />
                            </div>
                        </div>
                    </div>
                )}

            </div>
            {/*<div className="m-4 border-2 solid rounded-lg shadow-md">
                <Panel header="Dirección:">
                    <div className="flex p-1">

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem quaerat veritatis aut esse repudiandae.</p>

                        <div className="flex w-full justify-end gap-3 mt-4">
                            {/*<Button icon="pi pi-check" aria-label="Filter" />}
                            <Button icon="pi pi-pen-to-square" severity="success" aria-label="Search" />
                            {/*<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />}
                            <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" />
                        </div>
                    </div>

                </Panel>

            </div>*/}

        </>
    );
}

export default CheckOne;
