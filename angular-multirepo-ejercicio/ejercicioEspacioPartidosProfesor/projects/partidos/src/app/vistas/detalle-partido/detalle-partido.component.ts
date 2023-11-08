import { Component, Input } from '@angular/core';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';

@Component({
  selector: 'app-detalle-partido',
  templateUrl: './detalle-partido.component.html',
  styleUrls: ['./detalle-partido.component.css']
})
export class DetallePartidoComponent {

  // Inputs para recibir datos del componente padre
  @Input() partido?: Partido;
  @Input() index: number = 0;
  
}
