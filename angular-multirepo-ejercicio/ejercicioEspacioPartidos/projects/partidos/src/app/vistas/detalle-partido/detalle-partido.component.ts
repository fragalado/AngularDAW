import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Partido } from '../../modelos/partido';

@Component({
  selector: 'app-detalle-partido',
  templateUrl: './detalle-partido.component.html',
  styleUrls: ['./detalle-partido.component.css']
})
export class DetallePartidoComponent {
  @Input() partido?: Partido;
  @Input() index: number = 0;

  constructor(private fbs: FirebaseService) {}

  updatePartido(){
    this.fbs.modifyResultadoPartido(this.partido!)
      .then(() => alert("Resultado guardado"));
  }
}
