import { Component } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Usuario } from '../../../modelos/usuario';

@Component({
  selector: 'app-contenedor-usuarios',
  templateUrl: './contenedor-usuarios.component.html',
  styleUrls: ['./contenedor-usuarios.component.css']
})
export class ContenedorUsuariosComponent {

  // Parámetro donde vamos a guardar una lista con todos los usuarios de la base de datos
  usuarios?: Usuario[];

  constructor(private fbs: FirebaseService) { }

  ngOnInit(){
    this.fbs.getFireBase("usuarios")
      .subscribe(res => this.usuarios = res);
  }
}
