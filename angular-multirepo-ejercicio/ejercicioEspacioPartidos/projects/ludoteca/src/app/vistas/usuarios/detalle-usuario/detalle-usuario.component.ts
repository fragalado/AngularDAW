import { Component, Input } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { FirebaseService } from '../../../servicios/firebase.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent {
  
  id: string = "";
  usuario?: Usuario;
  constructor(private fbs: FirebaseService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.devuelveUsuarioId();
  }

  // Método que busca el usuario segun el id
  devuelveUsuarioId(): void {
    this.fbs.getFireBasePorId("usuarios", this.id)
            .subscribe(res => this.usuario = res);
  }

  // Método que actualiza el usuario en la bbdd
  actualizaUsuario(): void {
    this.fbs.updateFireBase(this.usuario, "usuarios", this.usuario?.id!);
  }
}
