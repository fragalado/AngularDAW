import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendasComponent } from './agendas.component';
import { ListaAgendasComponent } from './lista-agendas/lista-agendas.component';
import { DetalleAgendaComponent } from './detalle-agenda/detalle-agenda.component';

const routes: Routes = [
  { 
    path: '', component: AgendasComponent, children: [
      { path: "listado", component: ListaAgendasComponent},
      { path: "detalle/:id", component: DetalleAgendaComponent},
      { path: "agregar", component: DetalleAgendaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendasRoutingModule { }
