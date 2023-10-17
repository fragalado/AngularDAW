import { Component } from '@angular/core';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  asignaturas: Asignatura[] = [];

  constructor(private asignaturaService: AsignaturasService) {}

  ngOnInit(): void{
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturaService.getAsignaturas()
      .subscribe(asignatura => this.asignaturas = asignatura);
  }
}
