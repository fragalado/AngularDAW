import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { ContenedorUsuariosComponent } from './vistas/usuarios/contenedor-usuarios/contenedor-usuarios.component';
import { ListaUsuariosComponent } from './vistas/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './vistas/usuarios/detalle-usuario/detalle-usuario.component';
import { MenuComponent } from './vistas/core/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DetalleAgregarUsuarioComponent } from './vistas/usuarios/detalle-agregar-usuario/detalle-agregar-usuario.component';
import { DetalleJuegoComponent } from './vistas/juegos/detalle-juego/detalle-juego.component';
import { ContenedorJuegosComponent } from './vistas/juegos/contenedor-juegos/contenedor-juegos.component';
import { ListaJuegosComponent } from './vistas/juegos/lista-juegos/lista-juegos.component';
import { ContenedorAlquileresComponent } from './vistas/alquileres/contenedor-alquileres/contenedor-alquileres.component';
import { DetalleAlquilerComponent } from './vistas/alquileres/detalle-alquiler/detalle-alquiler.component';
import { ListaAlquileresComponent } from './vistas/alquileres/lista-alquileres/lista-alquileres.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorUsuariosComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
    MenuComponent,
    DetalleAgregarUsuarioComponent,
    DetalleJuegoComponent,
    ContenedorJuegosComponent,
    ListaJuegosComponent,
    ContenedorAlquileresComponent,
    DetalleAlquilerComponent,
    ListaAlquileresComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
