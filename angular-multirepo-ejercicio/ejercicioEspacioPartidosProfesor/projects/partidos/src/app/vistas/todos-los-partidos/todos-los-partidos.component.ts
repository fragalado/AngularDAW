import { Component } from '@angular/core';
import { PartidosService } from 'projects/mis-equipos/src/lib/partidos.service';

@Component({
  selector: 'app-todos-los-partidos',
  templateUrl: './todos-los-partidos.component.html',
  styleUrls: ['./todos-los-partidos.component.css']
})
export class TodosLosPartidosComponent {
  // Mostrará la lista de los partidos en estático
  constructor(public partidosService: PartidosService){

  }
}
