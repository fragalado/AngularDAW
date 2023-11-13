import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Juego } from '../../../modelos/juego';
import { Alquiler } from '../../../modelos/alquiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alquiler',
  templateUrl: './detalle-alquiler.component.html',
  styleUrls: ['./detalle-alquiler.component.css']
})
export class DetalleAlquilerComponent {

  id?: string;
  alquiler: Alquiler = {idJuego: "", idUsuario: ""};
  usuarios?: Usuario[];
  juegos?: Juego[];
  constructor(private fbs: FirebaseService, private route: ActivatedRoute) {}

  ngOnInit(){
    if(this.route.snapshot.paramMap.get("id") != null){
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBasePorId("alquileres", this.id).subscribe(res => this.alquiler = res);
    }

    this.fbs.getFireBase("usuarios").subscribe(res => this.usuarios = res);
    this.fbs.getFireBase("juegos").subscribe(res => this.juegos = res);
  }
}
