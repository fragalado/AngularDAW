import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPartidosComponent } from './vistas/lista-partidos/lista-partidos.component';
import { DetallePartidoComponent } from './vistas/detalle-partido/detalle-partido.component';
import { FormsModule } from '@angular/forms';
import { TodosLosPartidosComponent } from './vistas/todos-los-partidos/todos-los-partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPartidosComponent,
    DetallePartidoComponent,
    TodosLosPartidosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
