import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import Header from '@/components/Header';

const Billing = () => {
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
      <h1 className="text-2xl font-bold mb-4">Facturación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Razón Social<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
            name="usoCFDI"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Correo de Facturación<span className="text-red-500">*</span>
          </label>
          <InputText
            type="email"
            className="w-full"
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
            className="w-full"
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
            className="w-full"
            name="ciudad"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Dirección<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full"
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
            className="w-full"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          label="Enviar Facturación"
          icon="pi pi-check"
          className="p-button-success"
          onClick={handleSubmit}
        />
      </div>
    </div>
    </>
  );
};

export default Billing;