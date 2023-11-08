import { Component } from '@angular/core';
import { Partido } from 'projects/mis-equipos/src/lib/partidos-mock';
import { PartidosService } from 'projects/mis-equipos/src/lib/partidos.service';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent {

  // Propiedad para guardar los partidos
  listaPartidos: any;

  constructor(private partidoService: PartidosService) {
    //this.listaPartidos = partidoService.devolverPartidos();
  }

  ngOnInit() {
    this.pedirJornada(1);
  }

  // Pedir el número de Jornada para buscar esos partidos
  pedirJornada(j: number) {
    this.listaPartidos = this.partidoService.devolverJornada(j);
  }

}
