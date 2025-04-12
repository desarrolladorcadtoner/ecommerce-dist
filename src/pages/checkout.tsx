import React, { useState } from "react";
import Header from "@/components/Header";
import CheckOutForm from "@/components/Checkout/CheckOutForm";
import CheckOne from "@/components/Checkout/CheckOne";
import CheckTwo from "@/components/Checkout/CheckTwo";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";
import { useCart } from "@/context/CartContext";

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Estado para manejar el paso actual
  const [selectedOption, setSelectedOption] = useState<"CEDIS" | "PAQUETERIA" | null>(null); // Estado para la opción seleccionada
  const [selectedCedis, setSelectedCedis] = useState<any | null>(null); // Estado para el CEDIS seleccionado
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null); // Estado para la dirección seleccionada
  const { cartItems } = useCart(); // Obtener los productos del carrito desde el contexto


  const items: MenuItem[] = [
    {
      label: "Tipo de Envío",
      command: () => setCurrentStep(0),
      className: currentStep === 0 ? "breadcrumb-active" : "",
    },
    ...(selectedOption === "PAQUETERIA" && currentStep >= 1
      ? [
        {
          label: "Dirección de Envío",
          command: () => setCurrentStep(1),
          className: currentStep === 1 ? "breadcrumb-active" : "",
        },
      ]
      : []),
    ...(currentStep >= 2
      ? [
        {
          label: "Método de Pago",
          command: () => setCurrentStep(2),
          className: currentStep === 2 ? "breadcrumb-active" : "",
        },
      ]
      : []),
  ];

  const home: MenuItem = { icon: "pi pi-shopping-cart", url: "/cart" };

  return (
    <>
      <Header />
      <div className="m-4">
        {/* Breadcrumb dinámico */}
        <BreadCrumb model={items} home={home} />

        {/* Renderizado de los pasos */}
        {currentStep === 0 && (
          <CheckOutForm
            setCurrentStep={setCurrentStep}
            setSelectedOption={setSelectedOption}
            setSelectedCedis={setSelectedCedis}
          />
        )}
        {currentStep === 1 && selectedOption === "PAQUETERIA" && (
          <CheckOne
            setCurrentStep={setCurrentStep}
            setSelectedAddress={setSelectedAddress}
          />
        )}
        {currentStep === 2 && (
          <CheckTwo
            cartItems={cartItems}
            selectedOption={selectedOption}
            selectedCedis={selectedCedis}
            selectedAddress={selectedAddress}
          />
        )}
      </div>
    </>
  );
};

export default CheckoutPage;