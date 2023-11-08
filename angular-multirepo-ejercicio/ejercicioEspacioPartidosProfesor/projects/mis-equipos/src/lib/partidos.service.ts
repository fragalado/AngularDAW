import { Injectable } from '@angular/core';
import { PARTIDOS, Partido } from './partidos-mock';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  listaPartidos: Partido[] = PARTIDOS;
  
  constructor() { }

  devolverPartidos() {
    return this.listaPartidos;
  }

  devolverJornada(jornada: number) {
    const partidosJornada = this.listaPartidos.filter((partido: Partido) => partido.jornada === jornada);
    console.log(partidosJornada);

    return partidosJornada;
  }

  guardarPartidos(partidos: Partido[]){
    this.listaPartidos = partidos;
  }

  guardarUnPartido(partido: Partido, i: number){
    this.listaPartidos[i]=partido;
  }

  crearPartido(partido: Partido){
    this.listaPartidos.push(partido);
  }
}
