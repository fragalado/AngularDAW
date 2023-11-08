import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PartidosComponent } from './vistas/partidos/partidos.component';
import { MostrarPartidoComponent } from './vistas/mostrar-partido/mostrar-partido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { ContenedorPartidosComponent } from './vistas/contenedor-partidos/contenedor-partidos.component';
import { ListadoComponent } from './vistas/contenedor-partidos/listado/listado.component';
import { DetalleComponent } from './vistas/contenedor-partidos/detalle/detalle.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallePartidoComponent } from './vistas/detalle-partido/detalle-partido.component';
import { ListaPartidosComponent } from './vistas/lista-partidos/lista-partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidosComponent,
    MostrarPartidoComponent,
    ContenedorPartidosComponent,
    ListadoComponent,
    DetalleComponent,
    MenuComponent,
    DetallePartidoComponent,
    ListaPartidosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
