import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorUsuariosComponent } from './vistas/usuarios/contenedor-usuarios/contenedor-usuarios.component';
import { ListaUsuariosComponent } from './vistas/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './vistas/usuarios/detalle-usuario/detalle-usuario.component';


const routes: Routes = [
  {path: "usuarios", component: ContenedorUsuariosComponent, children: [
    {path: "listado", component: ListaUsuariosComponent},
    {path: "detalle", component: DetalleUsuarioComponent}
  ]},
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
