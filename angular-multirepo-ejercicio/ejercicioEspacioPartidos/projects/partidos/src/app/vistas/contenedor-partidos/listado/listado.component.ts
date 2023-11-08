import { Component, Input, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido';
import { FirebaseService } from '../../../servicios/firebase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listaPartidos?: Partido[];

  constructor(private fbs: FirebaseService) { }

  ngOnInit(): void {
    this.fbs.getPartidos()
      .subscribe(res => this.listaPartidos = res);
  }
}
