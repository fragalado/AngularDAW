import { Component } from '@angular/core';
import { ClasificacionService } from './servicios/clasificacion.service';
import { Clasificacion } from './modelos/clasificacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "clasificacion";
}
