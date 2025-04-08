import React, { useState } from "react";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Checkbox } from "primereact/checkbox";

const CheckoutPage: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const items: MenuItem[] = [
        {
            label: 'Paquetería',
            template: () => <Link href="/checkout" legacyBehavior><a className="text-[#0072b1] font-semibold">InputText</a></Link>
        },
        { label: 'Direccion de envío' },
        {
            label: 'InputText',
        }
    ];

    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

    return (
        <>
            <div className="ml-40 mr-40 mt-10 mb-10">
                <BreadCrumb model={items} home={home} />

                <div className="card">
                    <Card title="Seleccione la paquetería" className="shadow-lg">
                        <div className="flex flex-row justify-evenly h-96">
                            <div className="felx flex-col w-40 space-x-4">
                                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg"
                                    alt="Image"
                                    preview width="250" />
                                <Checkbox onChange={e => setChecked(e.checked ?? false)} checked={checked} className=""></Checkbox>
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 1</label>
                            </div>
                            <div className="felx flex-col w-40 space-x-4">
                                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg"
                                    alt="Image"
                                    preview width="250" />
                                <Checkbox onChange={e => setChecked(e.checked ?? false)} checked={checked} className=""></Checkbox>
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 2</label>
                            </div>
                            <div className="felx flex-col w-40 space-x-4">
                                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg"
                                    alt="Image"
                                    preview width="250" />
                                <Checkbox onChange={e => setChecked(e.checked ?? false)} checked={checked} className=""></Checkbox>
                                <label htmlFor="ingredient1" className="ml-2">Paqueteria 3</label>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
