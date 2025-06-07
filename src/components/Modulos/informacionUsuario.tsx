import React, { useState } from "react";
import { useCliente } from "@/context/ClienteContext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

const InformacionUsuario: React.FC = () => {
    const cliente = useCliente();

    // Estado para controlar modo edición por sección
    const [editContacto, setEditContacto] = useState(false);
    const [editDireccion, setEditDireccion] = useState(false);
    const [editCompras, setEditCompras] = useState(false);

    // Puedes clonar los valores originales para los inputs al editar
    const [contacto, setContacto] = useState(cliente.DatosContacto[0] || {});
    const [direccion, setDireccion] = useState(cliente.DireccionesEntrega[0] || {});
    const [compras, setCompras] = useState(cliente.DatosCompras || {});

    // Puedes crear funciones para guardar cambios
    const handleSaveContacto = () => {
        // Aquí podrías hacer fetch a la API (PUT)
        setEditContacto(false);
    };

    const handleSaveDireccion = () => {
        setEditDireccion(false);
    };

    const handleSaveCompras = () => {
        setEditCompras(false);
    };

    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto py-8">

            {/* Contacto */}
            <Card title="Datos de Contacto" className="mb-4">
                {editContacto ? (
                    <div className="flex flex-col gap-2">
                        <InputText value={contacto.NombreContacto} onChange={e => setContacto({ ...contacto, NombreContacto: e.target.value })} placeholder="Nombre" />
                        <InputMask value={contacto.Tel1} mask="9999999999" onChange={e => setContacto({ ...contacto, Tel1: e.value ?? "" })} placeholder="Teléfono" />
                        <InputText value={contacto.Mail1} onChange={e => setContacto({ ...contacto, Mail1: e.target.value })} placeholder="Correo" />
                        <Button label="Guardar" onClick={handleSaveContacto} className="p-button-success mt-2" />
                        <Button label="Cancelar" onClick={() => setEditContacto(false)} className="p-button-secondary mt-2" />
                    </div>
                ) : (
                    <div>
                        <div><b>Nombre:</b> {cliente.DatosContacto[0]?.NombreContacto}</div>
                        <div><b>Teléfono:</b> {cliente.DatosContacto[0]?.Tel1}</div>
                        <div><b>Correo:</b> {cliente.DatosContacto[0]?.Mail1}</div>
                        <div><b>Fecha cumpleaños:</b> {cliente.DatosContacto[0]?.FechaCumple}</div>

                        <Button label="Editar" icon="pi pi-pencil" onClick={() => setEditContacto(true)} className="mt-2" />
                    </div>
                )}
            </Card>

            {/* Dirección */}
            <Card title="Dirección de Entrega" className="mb-4">
                {editDireccion ? (
                    <div className="flex flex-col gap-2">
                        <InputText value={direccion.Calle} onChange={e => setDireccion({ ...direccion, Calle: e.target.value })} placeholder="Calle" />
                        <InputText value={direccion.Colonia} onChange={e => setDireccion({ ...direccion, Colonia: e.target.value })} placeholder="Colonia" />
                        <InputText value={direccion.CP} onChange={e => setDireccion({ ...direccion, CP: e.target.value })} placeholder="C.P." />
                        <Button label="Guardar" onClick={handleSaveDireccion} className="p-button-success mt-2" />
                        <Button label="Cancelar" onClick={() => setEditDireccion(false)} className="p-button-secondary mt-2" />
                    </div>
                ) : (
                    <div>
                        <div><b>Calle:</b> {cliente.DireccionesEntrega[0]?.Calle}</div>
                        <div><b>Colonia:</b> {cliente.DireccionesEntrega[0]?.Colonia}</div>
                        <div><b>C.P.:</b> {cliente.DireccionesEntrega[0]?.CP}</div>
                        <Button label="Editar" icon="pi pi-pencil" onClick={() => setEditDireccion(true)} className="mt-2" />
                    </div>
                )}
            </Card>

            {/* Compras */}
            <Card title="Datos de Compras" className="mb-4">
                {editCompras ? (
                    <div className="flex flex-col gap-2">
                        <InputText value={compras.LimiteCredito} onChange={e => setCompras({ ...compras, LimiteCredito: e.target.value })} placeholder="Límite de crédito" />
                        <InputText value={String(compras.DiasCredito ?? "")} onChange={e => setCompras({ ...compras, DiasCredito: Number(e.target.value) })} placeholder="Días de crédito" />
                        <Button label="Guardar" onClick={handleSaveCompras} className="p-button-success mt-2" />
                        <Button label="Cancelar" onClick={() => setEditCompras(false)} className="p-button-secondary mt-2" />
                    </div>
                ) : (
                    <div>
                        <div><b>Límite de crédito:</b> {cliente.DatosCompras?.LimiteCredito}</div>
                        <div><b>Días de crédito:</b> {cliente.DatosCompras?.DiasCredito}</div>
                        <Button label="Editar" icon="pi pi-pencil" onClick={() => setEditCompras(true)} className="mt-2" />
                    </div>
                )}
            </Card>

            {/* Datos Fiscales */}
            <Card title="Datos Fiscales" className="mb-4">
                <div>
                    <div><b>RFC:</b> {cliente.DatosFiscales[0]?.RFC}</div>
                    <div><b>Régimen Fiscal:</b> {cliente.DatosFiscales[0]?.RegimenFiscalDescripcion}</div>
                    {/* Sin botón de edición */}
                </div>
            </Card>
        </div>
    );
};

export default InformacionUsuario;
