import { Component } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Juego } from '../../../modelos/juego';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent {

  juegos?: Juego[];
  constructor(private fbs: FirebaseService) {}

  ngOnInit(): void {
    this.fbs.getFireBase("juegos").subscribe(res => this.juegos = res);
  }

  // Método que elimina un juego en la base de datos
  deleteJuego(juego: Juego){
    this.fbs.deleteFireBase(juego, "juegos");
  }
}
