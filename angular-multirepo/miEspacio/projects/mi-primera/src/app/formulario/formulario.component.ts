import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title = "Trabajando con ngModel";
  nombre = "";
  nombre2 = "";
  fecha = new Date(2023, 10, 23);
  sueldo = 2500;

  cambiaNombre(){
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre.toUpperCase();
  }

  cambiaNombre2(){
    this.nombre = this.nombre2.toLowerCase();
    this.nombre2 = this.nombre2.toUpperCase();
  }
}
