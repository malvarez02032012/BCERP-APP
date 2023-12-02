import { Establecimiento } from "./establecimiento";

export interface Empresa {
    idEmpresa: number;
    nit: string;
    razonSocial: string;
    nombreComercial: string;
    domicilio: string;
    fechaConstitucion: string | null;
    pbx: string;
    celular: string;
    email: string;
    logo: Blob;
    estado: string;
    creacion: string | null;
    modificacion: string | null;
    diaPagoServicio: number | null;
    fechaInicioServicio: string | null;
    fechaFinServicio: string | null;
    iva: number | null;
    establecimientos: Establecimiento[];
}
