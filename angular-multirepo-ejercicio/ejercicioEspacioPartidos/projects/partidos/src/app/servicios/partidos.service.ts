import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Partidos } from '../modelos/partidos';
import { PARTIDOS } from '../modelos/mock-partidos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  listaPartidos: Partidos[] = [];

  constructor() { }

  getPartidos(): Observable<Partidos[]> {
    const partidos = of(PARTIDOS);
    return partidos;
  }

  guardarPartidos(partido: Partidos[]): void {
    this.listaPartidos = partido;
  }

  guardarUnPartido(partido: Partidos, i: number): void {
    this.listaPartidos[i] = partido;
    console.log(partido);
    console.log(i);
    
    console.log(this.listaPartidos[0].equipoLocal + " " + this.listaPartidos[0].equipoVisitante + " " + this.listaPartidos[0].golesLocal + " " + this.listaPartidos[0].golesVisitante)
  }

  crearPartido(partido: Partidos): void {
    this.listaPartidos.push(partido);
  }
}
