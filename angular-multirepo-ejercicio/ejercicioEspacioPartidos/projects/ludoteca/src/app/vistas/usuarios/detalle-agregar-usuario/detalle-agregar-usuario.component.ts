import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { FirebaseService } from '../../../servicios/firebase.service';

@Component({
  selector: 'app-detalle-agregar-usuario',
  templateUrl: './detalle-agregar-usuario.component.html',
  styleUrls: ['./detalle-agregar-usuario.component.css']
})
export class DetalleAgregarUsuarioComponent {
  usuario: Usuario = {nombre: "", apellidos: "", email: ""};

  constructor(private fbs: FirebaseService) {}

  agregarUsuario(){
    this.fbs.setFireBase(this.usuario, "usuarios");
  }
}
