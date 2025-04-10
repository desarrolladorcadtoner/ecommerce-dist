import React, { useState } from "react";
import Header from "@/components/Header"
import CheckOutForm from "@/components/Checkout/CheckOutForm"
import CheckOne from "@/components/Checkout/CheckOne";
import Link from 'next/link';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import CheckTwo from "@/components/Checkout/CheckTwo";

const CheckoutPage: React.FC = () => {
  const items: MenuItem[] = [
    {
      label: 'Paquetería',
      template: () => <Link href="/checkout" legacyBehavior><a className="text-[#0072b1] font-semibold">Tipo de envio</a></Link>
    },
    { label: 'Direccion de envío' },
    {
      label: 'InputText'
    }
  ];

  const home: MenuItem = { icon: 'pi pi-home', url: '/' };
  
  return (
    <>
      <Header />
      <div className="m-4">
        <BreadCrumb model={items} home={home} />
        <CheckOne />
        {/*<CheckOutForm />
        <CheckOne />
        <CheckTwo />*/}
      </div>
      
    </>
  );
};

export default CheckoutPage;
