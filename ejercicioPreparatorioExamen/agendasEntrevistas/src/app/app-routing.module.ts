import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'citas', loadChildren: () => import('./vistas/citas/citas.module').then(m => m.CitasModule) }, 
  { path: 'agendas', loadChildren: () => import('./vistas/agendas/agendas.module').then(m => m.AgendasModule) },
  { path: 'clientes', loadChildren: () => import('./vistas/clientes/clientes.module').then(m => m.ClientesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
