import { Juego } from "./juego";
import { Usuario } from "./usuario";

export interface Alquiler {
    id?: string;
    idJuego: string;
    idUsuario: string;
}
