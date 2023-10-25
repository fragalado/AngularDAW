import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Clasificacion } from '../modelos/clasificacion';
import { CLASIFICACION } from '../modelos/mock-clasificacion';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {

  constructor() { }

  getClasificacion(): Observable<Clasificacion[]> {
    const clasificacion = of(CLASIFICACION);
    return clasificacion;
  }
}
