import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitasComponent,
    ListaCitasComponent,
    DetalleCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule
  ]
})
export class CitasModule { }
