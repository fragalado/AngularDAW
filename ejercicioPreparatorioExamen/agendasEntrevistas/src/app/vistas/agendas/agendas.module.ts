import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendasRoutingModule } from './agendas-routing.module';
import { AgendasComponent } from './agendas.component';
import { DetalleAgendaComponent } from './detalle-agenda/detalle-agenda.component';
import { ListaAgendasComponent } from './lista-agendas/lista-agendas.component';


@NgModule({
  declarations: [
    AgendasComponent,
    DetalleAgendaComponent,
    ListaAgendasComponent
  ],
  imports: [
    CommonModule,
    AgendasRoutingModule
  ]
})
export class AgendasModule { }
