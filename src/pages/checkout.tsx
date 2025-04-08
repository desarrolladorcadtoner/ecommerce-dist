import React, { useState } from "react";
import Header from "@/components/Header"
import CheckOutForm from "@/components/Checkout/CheckOutForm"
import CheckOne from "@/components/Checkout/CheckOne";
import Link from 'next/link';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

const CheckoutPage: React.FC = () => {
  const items: MenuItem[] = [
    {
      label: 'Paquetería',
      template: () => <Link href="/checkout" legacyBehavior><a className="text-[#0072b1] font-semibold">InputText</a></Link>
    },
    { label: 'Direccion de envío' },
    {
      label: 'InputText'
    }
  ];

  const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };
  
  return (
    <>
      <Header />
      <div className="m-4">
        <BreadCrumb model={items} home={home} />
        {/*<CheckOutForm />*/}
        <CheckOne />
      </div>
      
    </>
  );
};

export default CheckoutPage;
