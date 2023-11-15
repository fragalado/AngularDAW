import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { FirebaseService } from '../../../servicios/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-agregar-usuario',
  templateUrl: './detalle-agregar-usuario.component.html',
  styleUrls: ['./detalle-agregar-usuario.component.css']
})
export class DetalleAgregarUsuarioComponent {
  usuario: Usuario = {nombre: "", apellidos: "", email: ""};

  constructor(private fbs: FirebaseService) {}

  agregarUsuario(){
    this.fbs.setFireBase(this.usuario, "usuarios")
      .then(() => Swal.fire({
        title: "Guardado!",
        text: "Usuario ha sido guardado",
        icon: 'success'
      }))
      .catch(()=> Swal.fire({
        title: "Oops...!",
        text: "El usuario no ha sido guardado",
        icon: 'error'
      }));
  }
}
