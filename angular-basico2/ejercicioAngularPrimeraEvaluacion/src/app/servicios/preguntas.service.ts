import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pregunta } from '../modelos/pregunta';
import { PREGUNTAS } from '../modelos/mock-preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }

  getPreguntas(): Observable<Pregunta[]> {
    const preguntas = of(PREGUNTAS);
    return preguntas;
  }
}
