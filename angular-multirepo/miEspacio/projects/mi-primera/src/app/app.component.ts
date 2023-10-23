import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPrimera';
  fondoAmarillo = false;
  letraGrande = false;
  prueba = "Francisco Gallego Dorado"; // Prueba para ngModel
  // Pipe personalizada
  dividendo = 10;
  divisor = "2";

  checkFondo(){
    this.fondoAmarillo = !this.fondoAmarillo;
  }
  
  checkLetra(){
    this.letraGrande = !this.letraGrande;
  }

  asignaClases(){
    let clases = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };

    return clases;
  }
}
