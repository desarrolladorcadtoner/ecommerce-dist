import React from "react";
import Header from "@/components/Header"
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';/* O el tema que estés utilizando */
import 'primereact/resources/primereact.min.css';

const CheckOne: React.FC = () => {

    return (
        <>
            <div className="m-4 border-2 solid rounded-lg shadow-md">
                <Panel header="Dirección:">
                    <div className="flex p-1">

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem quaerat veritatis aut esse repudiandae.</p>

                        <div className="flex w-full justify-end gap-3 mt-4">
                            {/*<Button icon="pi pi-check" aria-label="Filter" />*/}
                            <Button icon="pi pi-pen-to-square" severity="success" aria-label="Search" />
                            {/*<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />*/}
                            <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" />
                        </div>
                    </div>

                </Panel>
                {/*<div className="card">
                    <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex-auto">
                            <label htmlFor="integer" className="font-bold block mb-2">
                                Integer
                            </label>
                            <InputText id="integer" keyfilter="int" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="number" className="font-bold block mb-2">
                                Number
                            </label>
                            <InputText id="number" keyfilter="num" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="money" className="font-bold block mb-2">
                                Money
                            </label>
                            <InputText id="money" keyfilter="money" className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex-auto">
                            <label htmlFor="hex" className="font-bold block mb-2">
                                Hex
                            </label>
                            <InputText id="hex" keyfilter="hex" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="alphabetic" className="font-bold block mb-2">
                                Alphabetic
                            </label>
                            <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="alphanumeric" className="font-bold block mb-2">
                                Alphanumeric
                            </label>
                            <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex-auto">
                            <label htmlFor="pint" className="font-bold block mb-2">
                                Positive Integer
                            </label>
                            <InputText id="pint" keyfilter="pint" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="pnum" className="font-bold block mb-2">
                                Positive Number
                            </label>
                            <InputText id="pnum" keyfilter="pnum" className="w-full" />
                        </div>
                        <div className="flex-auto">
                            <label htmlFor="email" className="font-bold block mb-2">
                                Email
                            </label>
                            <InputText id="email" keyfilter="email" className="w-full" />
                        </div>
                    </div>
                </div>*/}

            </div>
            <div className="m-4 border-2 solid rounded-lg shadow-md">
                <Panel header="Dirección:">
                    <div className="flex p-1">

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem quaerat veritatis aut esse repudiandae.</p>

                        <div className="flex w-full justify-end gap-3 mt-4">
                            {/*<Button icon="pi pi-check" aria-label="Filter" />*/}
                            <Button icon="pi pi-pen-to-square" severity="success" aria-label="Search" />
                            {/*<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />*/}
                            <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" />
                        </div>
                    </div>

                </Panel>

            </div>

        </>
    );
}

export default CheckOne;
