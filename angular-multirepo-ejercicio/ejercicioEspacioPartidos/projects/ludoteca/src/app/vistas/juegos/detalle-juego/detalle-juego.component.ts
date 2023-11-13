import { Component } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Juego } from '../../../modelos/juego';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent {

  id?: string;
  juego: Juego = {nombreJuego: "", urlImagen: ""};
  constructor(private fbs: FirebaseService, private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.route.snapshot.paramMap.get("id") != null){
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBasePorId("juegos", this.id).subscribe(res => this.juego = res);
    }
  }

  // Método que se activará cuando se pulse el botón de Enviar del formulario
  // Este método comprobará si se tiene id o no en la url, de manera que si se tiene es porque se está editando
  // y si no se tiene es porque se esta añadiendo
  enviaDatos(){
    if(this.id != undefined)
      this.updateJuego();
    else
      this.agregarJuego();
  }

  // Método que actualiza un juego en la base de datos
  updateJuego(){
    this.fbs.updateFireBase(this.juego, "juegos", this.id!);
  }

  // Método que agrega un juego a la base de datos
  agregarJuego(){
    this.fbs.setFireBase(this.juego, "juegos");
  }
}
