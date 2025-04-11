import React, { useState } from "react";
import Header from "@/components/Header";
import CheckOutForm from "@/components/Checkout/CheckOutForm";
import CheckOne from "@/components/Checkout/CheckOne";
import CheckTwo from "@/components/Checkout/CheckTwo";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Estado para manejar el paso actual

  const items: MenuItem[] = [
    { label: "Tipo de Envío", command: () => setCurrentStep(0) },
    { label: "Dirección de Envío", command: () => setCurrentStep(1) },
    { label: "Método de Pago", command: () => setCurrentStep(2) },
  ];

  const home: MenuItem = { icon: "pi pi-home", url: "/" };

  return (
    <>
      <Header />
      <div className="m-4">
        <BreadCrumb model={items} home={home} />
        {currentStep === 0 && <CheckOutForm setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <CheckOne setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <CheckTwo />}
      </div>
    </>
  );
};

export default CheckoutPage;