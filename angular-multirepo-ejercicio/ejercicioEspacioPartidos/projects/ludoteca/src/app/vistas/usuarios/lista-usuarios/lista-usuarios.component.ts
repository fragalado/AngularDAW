import { Component } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Usuario } from '../../../modelos/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  
  usuarios?: Usuario[];
  constructor(private fbs: FirebaseService) {}

  ngOnInit(){
    this.fbs.getFireBase("usuarios")
            .subscribe(res => this.usuarios = res);
  }

  eliminaUsuario(usuario: Usuario){
    this.fbs.deleteFireBase(usuario, "usuarios")
      .then(() => Swal.fire({
        title: "Eliminado!",
        text: "Usuario ha sido eliminado",
        icon: 'success'
      }))
      .catch(() => Swal.fire({
        title: "Oops...!",
        text: "El usuario no ha sido eliminado",
        icon: 'error'
      }));
  }

}
