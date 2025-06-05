export interface TipoCambioResponse {
    tipo_cambio: number;
}

// Esta función retorna el tipo de cambio actual del dólar (número)
export const getTipoCambioDolar = async (): Promise<number | null> => {
    try {
        const response = await fetch("https://172.100.203.36:8000/tipocambio/tipo-cambio/dolar", {
            method: "GET",
            credentials: "include", // Puedes quitarlo si no usas cookies
        });

        if (!response.ok) throw new Error("No se pudo obtener el tipo de cambio");

        const data: TipoCambioResponse = await response.json();
        return data.tipo_cambio;
    } catch (error) {
        console.error("Error al obtener el tipo de cambio:", error);
        return null;
    }
};