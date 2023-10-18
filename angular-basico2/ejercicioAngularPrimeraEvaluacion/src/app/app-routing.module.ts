import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from "./vistas/preguntas/preguntas.component";
import { AsignaturasComponent } from "./vistas/asignaturas/asignaturas.component";



const routes: Routes = [
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'asignaturas', component: AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
