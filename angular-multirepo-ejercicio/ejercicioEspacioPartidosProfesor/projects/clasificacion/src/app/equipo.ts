import { NonNullableFormBuilder } from "@angular/forms";

export interface Equipo {
    nombre: string;
    pj: number;
    ganados: number;
    empatados: number;
    perdidos: number;
    golesFavor: number;
    golesContra: number;
    puntos?: number;
    goalAverage?: number;
}
