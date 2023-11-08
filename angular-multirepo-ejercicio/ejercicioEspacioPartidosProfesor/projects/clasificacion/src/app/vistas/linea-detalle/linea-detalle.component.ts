import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linea-detalle',
  templateUrl: './linea-detalle.component.html',
  styleUrls: ['./linea-detalle.component.css']
})
export class LineaDetalleComponent {

  @Input() country: any;
  @Input() i: number = 0;
}
