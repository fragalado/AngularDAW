import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ejemplo-chart","appId":"1:9607972316:web:e6cfb94adeb95a7e607b19","storageBucket":"ejemplo-chart.appspot.com","apiKey":"AIzaSyDw2-pBtK9TgVO3Wn1bi6JUcq_jASSzF68","authDomain":"ejemplo-chart.firebaseapp.com","messagingSenderId":"9607972316"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
