import { Cliente } from "./cliente";

export interface Cita {
    entrevistadoPor: string;
    cliente: Cliente;
    visto: boolean;
    diaCita: string;
    horaCita: string;
}

export interface DatosCita {
    entrevistadoPor: string;
    idCliente: string;
    visto: boolean;
    diaCita: string;
    horaCita: string;
}