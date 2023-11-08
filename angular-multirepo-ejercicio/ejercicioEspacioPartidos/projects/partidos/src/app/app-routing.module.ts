import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorPartidosComponent } from './vistas/contenedor-partidos/contenedor-partidos.component';
import { ListadoComponent } from './vistas/contenedor-partidos/listado/listado.component';
import { DetalleComponent } from './vistas/contenedor-partidos/detalle/detalle.component';
import { ListaPartidosComponent } from './vistas/lista-partidos/lista-partidos.component';

const rutas: Routes = [
  { path: "partidos", component: ContenedorPartidosComponent, children: 
    [
      {path: "listado", component: ListadoComponent},
      {path:"detalle/:id", component:DetalleComponent}
    ]
  },
  { path: "resultados", component: ListaPartidosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
