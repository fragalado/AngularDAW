import { Component } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Partido } from '../../modelos/partido';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent {
  listaPartidos?: Partido[];

  constructor(private fbs: FirebaseService) {}

  ngOnInit():void{
    this.pedirJornada(1);
  }

  pedirJornada(i: number) {
    this.fbs.getPartidoByOther("jornada", i).subscribe(res => this.listaPartidos = res);
  }
}
