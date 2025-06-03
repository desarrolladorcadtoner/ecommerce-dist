export interface ClienteContacto {
    NombreContacto: string;
    Tel1: string;
    Tel2: string;
    Cel1: string;
    Cel2: string;
    Mail1: string;
    Mail2: string;
    TipoContacto: string;
    FechaCumple: string;
}

export interface DireccionEntrega {
    DireccionEntregaId: number;
    Calle: string;
    Colonia: string;
    Entrecalles: string;
    CP: string;
    MunicipioId: number;
    Municipio: string;
    EstadoId: number;
    Estado: string;
    Pais: string;
}

export interface DatosCompras {
    LimiteCredito: string;
    DiasCredito: number;
    DescuentoAutorizado: number;
}

export interface DatosFiscales {
    DireccionFiscalId: number;
    RazonCapital: string;
    RFC: string;
    CodigoPostal: string;
    RegimenFiscal: number;
    RegimenFiscalDescripcion: string;
}

export interface ClienteData {
    ClienteId: string;
    ClienteNombre: string;
    ClienteRFC: string;
    TipoContribuyente: string;
    TipoClienteId: number;
    TipoCliente: string;
    DatosContacto: ClienteContacto[];
    DireccionesEntrega: DireccionEntrega[];
    DatosCompras: DatosCompras;
    DatosFiscales: DatosFiscales[];
}

// Cliente "por defecto" (si no es Guadalupe)
export const defaultClienteData: ClienteData = {
    ClienteId: "000000",
    ClienteNombre: "Cliente Genérico",
    ClienteRFC: "XXXX000000XXX",
    TipoContribuyente: "N/A",
    TipoClienteId: 0,
    TipoCliente: "N/A",
    DatosContacto: [],
    DireccionesEntrega: [],
    DatosCompras: {
        LimiteCredito: "0.00",
        DiasCredito: 0,
        DescuentoAutorizado: 0,
    },
    DatosFiscales: [],
};

export const getClienteData = async (clienteId: number): Promise<ClienteData> => {
    try {
        const response = await fetch(`https://172.100.203.36:8000/genexxus/cliente/${clienteId}`, {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) throw new Error("Error al obtener datos del cliente");

        const data = await response.json();
        return data as ClienteData;
    } catch (error) {
        console.error("Fallo en getClienteData:", error);
        return defaultClienteData;
    }
};