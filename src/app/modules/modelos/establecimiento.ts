import { Empresa } from "./empresa";
import { Producto } from "./producto";

export interface Establecimiento {
    idEstablecimiento: number;
    idEmpresa: number;
    codigoEstablecimiento: string;
    nombreComercial: string;
    domicilio: string;
    municipio: string;
    departamento: string;
    pais: string;
    productos: Producto[];
    IdEmpresaNavigation:Empresa;
}
