import { Component, Input } from '@angular/core';
import { Articulo } from 'src/app/shared/articulo';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {
  @Input() articulo?: Articulo;
}
