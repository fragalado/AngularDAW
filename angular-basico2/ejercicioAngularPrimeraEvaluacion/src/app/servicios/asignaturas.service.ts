import { Injectable } from '@angular/core';
import { Asignatura } from '../modelos/asignatura';
import { ASIGNATURAS } from '../modelos/mock-asignaturas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  
  constructor() { }

  getAsignaturas(): Observable<Asignatura[]> {
    const asignaturas = of(ASIGNATURAS);
    return asignaturas;
  }
}
