import { Component } from '@angular/core';
import { Partido } from '../../modelos/partido';
import { PartidosService } from '../../servicios/partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  listaPartidos: Partido[] = []; // Variable donde guardaremos todos los partidos

  selectedPartido?: Partido; // Variable que guardara el partido seleccionado
  selectedPartidoIndex?: number; // Variable que guardara el index del partido

  constructor(private partidosService: PartidosService) {}

  // Metodo que llama a los metodos para que funcionen
  ngOnInit(): void {
    this.getPartidos();
  }

  // Metodo que guarda los partidos en la variable partidos
  getPartidos(): void {
    this.partidosService.getPartidos()
      .subscribe(partidos => this.listaPartidos = partidos);
  }

  // Metodo que recibira un partido
  // Si el partido es igual a selectedPartido guardara undefined
  // Si el partido es distinto guardara el partido en la variable selectedPartido
  partidoActivo(partido: Partido): void {
    if(partido == this.selectedPartido)
      this.selectedPartido = undefined;
    else
      this.selectedPartido = partido;

      // Ahora obtenemos el indice del departido en la lista
      this.selectedPartidoIndex = this.listaPartidos.findIndex(elemento => elemento.equipoLocal == partido.equipoLocal && elemento.equipoVisitante == partido.equipoVisitante
            && elemento.golesLocal == partido.golesLocal && elemento.golesVisitante == partido.golesVisitante) + 1;
  }

}
