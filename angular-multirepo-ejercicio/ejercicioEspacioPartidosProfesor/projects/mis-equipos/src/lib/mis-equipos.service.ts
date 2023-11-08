import { Injectable } from '@angular/core';
import { Equipo } from 'projects/clasificacion/src/app/equipo';
import { EQUIPOS } from './equipos-mock';


@Injectable({
  providedIn: 'root'
})
export class MisEquiposService {

  private _equipos: Equipo[] = [];

  constructor() {
    this._equipos = EQUIPOS;
    this.calculaPuntos();
   }

   get equipos() {
    return this._equipos;
   }

   set equipos(data: Equipo[]) {
    this._equipos = data;
   }

   calculaPuntos() {
    this._equipos.forEach((equipo: Equipo) => {
      equipo.puntos = equipo.ganados * 3 + equipo.empatados;
      equipo.goalAverage = equipo.golesFavor - equipo.golesContra;
    })
   }
}
