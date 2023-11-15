import { Juego } from "./juego";
import { Usuario } from "./usuario";

export interface Alquiler {
    id?: string;
    juego: Juego;
    usuario: Usuario;
}

export interface DatosAlquiler {
    id?: string;
    idJuego: string;
    idUsuario: string;
}
