import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import Header from '@/components/Header';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

const EditBilling = () => {
  const [formData, setFormData] = useState({
    razonSocial: '',
    rfc: '',
    regimenFiscal: '',
    usoCFDI: '',
    correoFacturacion: '',
    estado: '',
    ciudad: '',
    direccion: '',
    codigoPostal: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Editar Datos de Facturación</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Razón Social<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              RFC<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="rfc"
              value={formData.rfc}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Régimen Fiscal<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de régimen fiscal
              value={formData.regimenFiscal}
              onChange={(e) => handleDropdownChange({ value: e.value, target: { name: 'regimenFiscal' } })}
              placeholder="Seleccione régimen"
              className="w-full general-dropdown"
              name="regimenFiscal"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Uso de CFDI<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de uso de CFDI
              value={formData.usoCFDI}
              onChange={(e) => handleDropdownChange({ value: e.value, target: { name: 'usoCFDI' } })}
              placeholder="Seleccione uso"
              className="w-full general-dropdown"
              name="usoCFDI"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Correo de Facturación<span className="text-red-500">*</span>
            </label>
            <InputText
              type="email"
              className="w-full general-input"
              name="correoFacturacion"
              value={formData.correoFacturacion}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Estado<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de estados
              value={formData.estado}
              onChange={(e) => handleDropdownChange({ value: e.value, target: { name: 'estado' } })}
              placeholder="Seleccione estado"
              className="w-full general-dropdown"
              name="estado"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Ciudad<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de ciudades
              value={formData.ciudad}
              onChange={(e) => handleDropdownChange({ value: e.value, target: { name: 'ciudad' } })}
              placeholder="Seleccione ciudad"
              className="w-full general-dropdown"
              name="ciudad"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Dirección<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Código Postal<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            label="Guardar"
            icon="pi pi-check"
            className="p-button-success"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default EditBilling;