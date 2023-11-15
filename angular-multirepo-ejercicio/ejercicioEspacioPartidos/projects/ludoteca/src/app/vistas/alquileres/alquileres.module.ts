import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquileresRoutingModule } from './alquileres-routing.module';
import { ContenedorAlquileresComponent } from './contenedor-alquileres/contenedor-alquileres.component';
import { DetalleAlquilerComponent } from './detalle-alquiler/detalle-alquiler.component';
import { ListaAlquileresComponent } from './lista-alquileres/lista-alquileres.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContenedorAlquileresComponent,
    DetalleAlquilerComponent,
    ListaAlquileresComponent
  ],
  imports: [
    CommonModule,
    AlquileresRoutingModule,
    FormsModule
  ]
})
export class AlquileresModule { }
