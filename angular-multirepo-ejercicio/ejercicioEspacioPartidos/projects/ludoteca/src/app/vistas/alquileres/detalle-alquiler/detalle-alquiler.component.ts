import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Juego } from '../../../modelos/juego';
import { Alquiler, DatosAlquiler } from '../../../modelos/alquiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alquiler',
  templateUrl: './detalle-alquiler.component.html',
  styleUrls: ['./detalle-alquiler.component.css']
})
export class DetalleAlquilerComponent {

  alquiler?: Alquiler;
  usuario?: Usuario;
  juego?: Juego;
  constructor(private fbs: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id") != null) {
      const id = this.route.snapshot.paramMap.get("id");
      this.obtieneAlquiler(id!);
    }

  }

  obtieneAlquiler(id: string) {
    this.fbs.getFireBasePorId("alquileres", id).subscribe(res => {
      const alquilerString: DatosAlquiler = res;
      //console.log(alquilerString);

      this.fbs.getFireBasePorId("usuarios", alquilerString.idUsuario).subscribe(datosUsuario => {
        this.usuario = datosUsuario

        this.fbs.getFireBasePorId("juegos", alquilerString.idJuego).subscribe(datosJuego => {
          this.juego = datosJuego;

          this.alquiler = {
            id: alquilerString.id,
            juego: this.juego!,
            usuario: this.usuario!,
          }
          //console.log(this.alquiler!);          
        })
      });
    })
  }
}
