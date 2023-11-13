import { Component } from '@angular/core';
import { Alquiler } from '../../../modelos/alquiler';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Usuario } from '../../../modelos/usuario';
import { Juego } from '../../../modelos/juego';

@Component({
  selector: 'app-lista-alquileres',
  templateUrl: './lista-alquileres.component.html',
  styleUrls: ['./lista-alquileres.component.css']
})
export class ListaAlquileresComponent {

  alquileres?: Alquiler[];
  constructor(private fbs: FirebaseService) {}

  ngOnInit() {
    this.fbs.getFireBase("alquileres").subscribe(res => this.alquileres = res);
  }

  // Método que elimina un alquiler pasado por parámetros de la base de datos
  deleteAlquiler(alquiler: Alquiler) {
    this.fbs.deleteFireBase(alquiler, "alquileres");
  }
}
