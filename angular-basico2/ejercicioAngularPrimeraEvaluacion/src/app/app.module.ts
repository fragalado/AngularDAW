import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './vistas/cabecera/cabecera.component';
import { AsignaturasComponent } from './vistas/asignaturas/asignaturas.component';
import { PreguntasComponent } from './vistas/preguntas/preguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AsignaturasComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
