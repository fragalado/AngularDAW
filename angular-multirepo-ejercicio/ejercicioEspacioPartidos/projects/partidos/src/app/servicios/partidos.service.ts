import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Partido } from '../modelos/partido';
import { PARTIDOS } from '../modelos/mock-partidos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  listaPartidos: Partido[] = [];

  constructor() { }

  getPartidos(): Observable<Partido[]> {
    const partidos = of(PARTIDOS);
    return partidos;
  }

  guardarPartidos(partido: Partido[]): void {
    this.listaPartidos = partido;
  }

  guardarUnPartido(partido: Partido, i: number): void {
    this.listaPartidos[i] = partido;
    console.log(partido);
    console.log(i);
    
    console.log(this.listaPartidos[0].equipoLocal + " " + this.listaPartidos[0].equipoVisitante + " " + this.listaPartidos[0].golesLocal + " " + this.listaPartidos[0].golesVisitante)
  }

  crearPartido(partido: Partido): void {
    this.listaPartidos.push(partido);
  }
}
