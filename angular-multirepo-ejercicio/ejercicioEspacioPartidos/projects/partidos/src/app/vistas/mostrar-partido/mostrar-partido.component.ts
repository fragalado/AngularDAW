import { Component, Input } from '@angular/core';
import { Partido } from '../../modelos/partido';
import { PartidosService } from '../../servicios/partidos.service';

@Component({
  selector: 'app-mostrar-partido',
  templateUrl: './mostrar-partido.component.html',
  styleUrls: ['./mostrar-partido.component.css']
})
export class MostrarPartidoComponent {
  @Input() partido?: Partido;
  @Input() index?: number = -1;

  constructor(private partidoService: PartidosService) {
    
  }
  actualizaPartido(partido: Partido, i: number): void {
    this.partidoService.guardarUnPartido(partido, i - 1);
  }
}
