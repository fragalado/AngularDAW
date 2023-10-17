import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  title: string =  "Ejercicio Angular 1ª Evaluacion";
  nombreAlumno: string = "Francisco José Gallego Dorado";
}
