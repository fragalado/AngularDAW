import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorUsuariosComponent } from './vistas/usuarios/contenedor-usuarios/contenedor-usuarios.component';
import { ListaUsuariosComponent } from './vistas/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './vistas/usuarios/detalle-usuario/detalle-usuario.component';
import { DetalleAgregarUsuarioComponent } from './vistas/usuarios/detalle-agregar-usuario/detalle-agregar-usuario.component';
import { ContenedorJuegosComponent } from './vistas/juegos/contenedor-juegos/contenedor-juegos.component';
import { ListaJuegosComponent } from './vistas/juegos/lista-juegos/lista-juegos.component';
import { DetalleJuegoComponent } from './vistas/juegos/detalle-juego/detalle-juego.component';
import { ContenedorAlquileresComponent } from './vistas/alquileres/contenedor-alquileres/contenedor-alquileres.component';
import { ListaAlquileresComponent } from './vistas/alquileres/lista-alquileres/lista-alquileres.component';
import { DetalleAlquilerComponent } from './vistas/alquileres/detalle-alquiler/detalle-alquiler.component';


const routes: Routes = [
  {path: "usuarios", component: ContenedorUsuariosComponent, children: [
    {path: "listado", component: ListaUsuariosComponent},
    {path: "detalle/:id", component: DetalleUsuarioComponent},
    {path: "agregar", component: DetalleAgregarUsuarioComponent}
  ]},
  {path: "juegos", component: ContenedorJuegosComponent, children: [
    {path: "listado", component: ListaJuegosComponent},
    {path: "detalle/:id", component: DetalleJuegoComponent},
    {path: "agregar", component: DetalleJuegoComponent}
  ]},
  {path: "alquileres", component: ContenedorAlquileresComponent, children: [
    {path: "listado", component: ListaAlquileresComponent},
    {path: "detalle/:id", component: DetalleAlquilerComponent},
    {path: "agregar", component: DetalleAlquilerComponent}
  ]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
