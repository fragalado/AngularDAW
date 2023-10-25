import { Component } from '@angular/core';
import { Clasificacion } from '../../modelos/clasificacion';
import { ClasificacionService } from '../../servicios/clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {
  clasificacion: Clasificacion[] = [];

  constructor(private clasificacionService: ClasificacionService) {}

  ngOnInit(): void {
    this.getClasificacion();
  }

  getClasificacion(): void{
    this.clasificacionService.getClasificacion()
      .subscribe(clasificacion => this.clasificacion = clasificacion);
  }
}
