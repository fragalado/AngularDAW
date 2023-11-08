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

@NgModule({
  declarations: [
    AppComponent,
    ContenedorUsuariosComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
