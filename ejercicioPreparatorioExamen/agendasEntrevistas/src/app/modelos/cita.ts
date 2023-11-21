import { Time } from "@angular/common";

export interface Cita {
    nombre: string;
    telefono: string;
    email: string;
    dni: string;
    visto: boolean;
    diaCita: Date;
    horaCita: Time;
}