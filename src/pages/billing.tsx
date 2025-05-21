import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { useRouter } from 'next/router';

const Billing = () => {
  {/*const [formData, setFormData] = useState({
    razonSocial: '',
    rfc: '',
    regimenFiscal: '',
    usoCFDI: '',
    correoFacturacion: '',
    estado: '',
    ciudad: '',
    direccion: '',
    codigoPostal: '',
  });*/}

  const router = useRouter();

  {/*const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    const { name } = e.target;
    const { value } = e;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Lógica para enviar los datos del formulario
    console.log('Datos de facturación:', formData);
  };*/}

  const handleEditBilling = () => {
    router.push("/edit-billing");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8 sm:m-2 sm:flex sm:p-2 sm:justify-center sm:mx-12">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 sm:p-4">
          <h2 className="text-2xl font-bold mb-4">Descargar Factura</h2>
          <div className="flex space-x-4 sm:flex sm:flex-col sm:space-x-0 sm:space-y-4">
            <Button
              label="Descargar PDF"
              icon="pi pi-file-pdf"
              className="p-button-info"
            />
            <Button
              label="Descargar XML"
              icon="pi pi-file"
              className="p-button-info"
            />
            <Button
            label="Editar Datos de Facturación Futura"
            icon="pi pi-pencil"
            className="p-button-warning"
            onClick={handleEditBilling}
          />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billing;