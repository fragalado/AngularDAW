import { Component } from '@angular/core';
import { Pregunta } from 'src/app/modelos/pregunta';
import { PreguntasService } from 'src/app/servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntas: Pregunta[] = [];

  constructor(private preguntaService: PreguntasService) {}

  ngOnInit(): void {
    this.getPreguntas();
  }

  getPreguntas(): void {
    this.preguntaService.getPreguntas()
      .subscribe(pregunta => this.preguntas = pregunta);
  }
}
