"use client"

import { useEffect, useState } from "react"
import { Dropdown } from "primereact/dropdown"
import { formData } from "@/types/register"
import  InputTextForm  from "../Inputs/InputTextForm"
import {InputMaskForm} from "../Inputs/InputMaskFormPhone"


interface StepOneProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepOne({ formData, updateFormData }: StepOneProps) {
  const [regimenFiscalOptions, setRegimenFiscalOptions] = useState<{ label: string; value: string }[]>([]);
  const [usoCFDIOptions, setUsoCFDIOptions] = useState<{ label: string; value: string }[]>([]);
  const [estadoOptions, setEstadoOptions] = useState<{ label: string; value: string }[]>([]);
  const [ciudadOptions, setCiudadOptions] = useState<{ label: string; value: string }[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const tipoPersonaOptions = [
    { label: "Persona Física", value: "fisica" },
    { label: "Persona Moral", value: "moral" },
  ]

  const actividadPrincipalOptions = [
    { label: "Comercio", value: "comercio" },
    { label: "Servicios", value: "servicios" },
  ]

  // Obtener opciones de "Régimen Fiscal" según el valor seleccionado en "Tipo de Persona"
  useEffect(() => {
    if (formData.tipoPersona) {
      fetch(`http://172.100.203.36:8000/register/regi-sat?tipo_persona=${formData.tipoPersona}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && Array.isArray(data.regimen_sat)) {
            const options = data.regimen_sat.map((item: any) => ({
              label: `${item.RegimenSATId} - ${item.RegimenSATDescripcion.trim()}`,
              value: `${item.RegimenSATId} - ${item.RegimenSATDescripcion.trim()}`, // Usar el ID como valor
            }))
            setRegimenFiscalOptions(options)
          } else {
            console.error("Error: La respuesta de la API no es un array")
          }
        })
        .catch((error) => console.error("Error fetching regimen fiscal options:", error))
    }
  }, [formData.tipoPersona])

  // Obtener opciones de "Uso de CFDI" según el valor seleccionado en "Régimen Fiscal"
  useEffect(() => {
    const regimenId = formData.regimenFiscal?.split(' - ')[0]?.trim(); // ✅ Extrae solo el ID

    if (regimenId) {
      fetch(`http://172.100.203.36:8000/register/usos-cfdi-descripcion/${regimenId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            const options = data.map((item: any) => ({
              label: `${item.c_UsosCFDI}-${item.DescripcionUsoCFDI.trim()}`, // Mostrar ID y descripción
              value: `${item.c_UsosCFDI.trim()} - ${item.DescripcionUsoCFDI.trim()}`, // Enviar ID y descripción
            }));
            setUsoCFDIOptions(options); // Actualizar el estado con las opciones
          } else {
            console.error("Error: La respuesta de la API no es un array");
            setUsoCFDIOptions([]); // Limpiar las opciones si la respuesta no es válida
          }
        })
        .catch((error) => {
          console.error("Error fetching uso de cfdi options:", error);
          setUsoCFDIOptions([]); // Limpiar las opciones en caso de error
        });
    } else {
      setUsoCFDIOptions([]); // Limpiar las opciones si no hay un régimen fiscal seleccionado
    }
  }, [formData.regimenFiscal]);

  // Obtener los estados desde la API
  useEffect(() => {
    fetch("http://172.100.203.36:8000/register/estados")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const options = data.map((estado: any) => ({
            label: estado.nombre_estado, // Usar el nombre del estado
            value: estado.id_estado, // Usar el ID del estado como valor
          }));
          setEstadoOptions(options);
        } else {
          console.error("Error: La respuesta de la API no es un array");
        }
      })
      .catch((error) => console.error("Error fetching estados:", error));
  }, []);

  // Obtener los municipios según el estado seleccionado
  const fetchMunicipios = (id_estado: string) => {
    fetch(`http://172.100.203.36:8000/register/municipios/${id_estado}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const options = data.map((municipio: any) => ({
            label: municipio.nombre_municipio, // Usar el nombre del municipio
            value: municipio.id_municipio, // Usar el ID del municipio como valor
          }));
          setCiudadOptions(options);
        } else {
          console.error("Error: La respuesta de la API no es un array");
        }
      })
      .catch((error) => console.error("Error fetching municipios:", error));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    updateFormData({ [name]: value });
  };

  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    const { name } = e.target;
    const { value } = e;
    validateField(name, value); // Validar el campo seleccionado
    updateFormData({ [name]: value }); // Actualizar el estado global
  }

  // Manejar cambios en el dropdown de estados
  const handleEstadoChange = (e: { value: string }) => {
    const selectedOption = estadoOptions.find((option) => option.value === e.value);
    if (selectedOption) {
      updateFormData({ estadoFiscal: selectedOption.label }); // Enviar el nombre del estado
      fetchMunicipios(e.value); // Obtener los municipios del estado seleccionado
      updateFormData({ ciudadFiscal: "", idMunicipio: e.value }); // Limpiar el municipio seleccionado
    }
  };

  // Manejar cambios en el dropdown de municipios
  const handleMunicipioChange = (e: { value: string }) => {
    const selectedOption = ciudadOptions.find((option) => option.value === e.value);
    if (selectedOption) {
      updateFormData({ ciudadFiscal: selectedOption.label }); // Enviar el nombre del municipio
    }
  };

  //Validar los campos obligatorios
  const validateField = (name: string, value: string) => {
    let error = "";

    // Validar si el campo está vacío
    if (!value || value === "Seleccione estado" || value === "Seleccione ciudad") {
      error = "Por favor, seleccione una opción válida.";
    }
      // Validar si el correo es válido
    else if (name === "correoFactura" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Ingrese un correo válido.";
    }

    // Actualizar el estado de errores
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  //Funcion para el input mask form
  const handleMaskedInputChange = (e: { value: string; target: { name: string } }) => {
    const fakeEvent = {
      target: {
        name: e.target.name,
        value: e.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(fakeEvent);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">INFORMACIÓN FISCAL</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Tipo de Persona<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={tipoPersonaOptions}
            value={formData.tipoPersona}
            onChange={handleDropdownChange}
            placeholder="Seleccione tipo"
            className="w-full general-dropdown"
            name="tipoPersona"
          />
        </div>

        <InputTextForm
          tittleInput="Razón Social ante SHCP"
          className="w-full general-input uppercase required"
          name="razonSocial"
          value={formData.razonSocial || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Nombre Comercial"
          className="w-full general-input uppercase"
          name="nombreComercial"
          value={formData.nombreComercial || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="RFC"
          className="w-full general-input uppercase required"
          name="rfc"
          value={formData.rfc || ""}
          onChange={handleInputChange}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Régimen Fiscal<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={regimenFiscalOptions}
            value={formData.regimenFiscal}
            onChange={handleDropdownChange}
            placeholder="Seleccione régimen"
            className={`w-full general-dropdown ${errors.regimenFiscal ? "border-red-500" : ""}`}
            name="regimenFiscal"
          />
          {errors.regimenFiscal && <p className="text-red-500 text-sm">{errors.regimenFiscal}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Uso de CFDI<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={usoCFDIOptions}
            value={formData.usoCFDI}
            onChange={handleDropdownChange}
            placeholder="Seleccione uso"
            className="w-full general-dropdown"
            name="usoCFDI"
          />
        </div>

        <InputTextForm
          tittleInput="Correo Electrónico Activo"
          className={`w-full general-input ${errors.correoFactura ? "border-red-500" : ""} uppercase required`}
          name="correoFactura"
          value={formData.correoFactura}
          onChange={handleInputChange}
        />
        {errors.correoFactura && <p className="text-red-500 text-sm">{errors.correoFactura}</p>}
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mt-8 mb-6">Dirección Fiscal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputTextForm
          tittleInput="Calle"
          className="w-full general-input uppercase required"
          name="calleFiscal"
          value={formData.calleFiscal || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Número Exterior"
          className="w-full general-input uppercase required"
          name="numExtFiscal"
          value={formData.numExtFiscal || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Número Interior"
          className="w-full general-input uppercase"
          name="numIntFiscal"
          value={formData.numIntFiscal || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Código Postal"
          className="w-full general-input uppercase required"
          name="codigoPostalFiscal"
          value={formData.codigoPostalFiscal || ""}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Colonia"
          className="w-full general-input uppercase required"
          name="coloniaFiscal"
          value={formData.coloniaFiscal || ""}
          onChange={handleInputChange}
        />

       { /*<InputTextForm
          tittleInput="Teléfono"
          className="w-full general-input uppercase required"
          name="telefonoFiscal"
          value={formData.telefonoFiscal || ""}
          onChange={handleInputChange}
        />*/}

        <InputMaskForm
          tittleInput="Teléono"
          className="w-full general-input uppercase required"
          name="telefonoFiscal"
          value={formData.telefonoFiscal || ""}
          onChange={handleMaskedInputChange}
        />

       {/* <InputTextForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase required"
          name="whatsappFiscal"
          value={formData.whatsappFiscal}
          onChange={handleInputChange}
        />*/}

        <InputMaskForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase required"
          name="whatsappFiscal"
          value={formData.whatsappFiscal || ""}
          onChange={handleMaskedInputChange}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Estado<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={estadoOptions}
            value={estadoOptions.find((option) => option.label === formData.estadoFiscal)?.value || ""}
            onChange={handleEstadoChange}
            placeholder="Seleccione estado"
            className="w-full general-dropdown"
            name="estadoFiscal"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Municipio<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={ciudadOptions}
            value={ciudadOptions.find((option) => option.label === formData.ciudadFiscal)?.value || ""}
            onChange={handleMunicipioChange}
            placeholder="Seleccione ciudad"
            className="w-full general-dropdown"
            name="ciudadFiscal"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Actividad Principal en alta de SHCP<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={actividadPrincipalOptions}
            value={formData.actSHCPFiscal}
            onChange={handleDropdownChange}
            placeholder="Seleccione actividad"
            className="w-full general-dropdown"
            name="actSHCPFiscal"
          />
        </div>

        <InputTextForm
          tittleInput="Nombre del Representante Legal"
          className="w-full general-input uppercase required"
          name="nombreLegalFiscal"
          value={formData.nombreLegalFiscal}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Nombre del Representante Legal<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="nombreLegalFiscal"
            value={formData.nombreLegalFiscal}
            onChange={handleInputChange}
          />
        </div>*/}
      </div>
    </div>
  )
}

