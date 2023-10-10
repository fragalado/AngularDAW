import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ListadoComponent } from './articulos/listado/listado.component';
import { FichaArticuloComponent } from './articulos/ficha-articulo/ficha-articulo.component';
import { LineaComponent } from './articulos/listado/linea/linea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListadoComponent,
    FichaArticuloComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
