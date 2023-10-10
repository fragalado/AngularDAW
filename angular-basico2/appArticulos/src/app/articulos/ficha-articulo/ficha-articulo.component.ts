import { Component, Input } from '@angular/core';
import { Articulo } from 'src/app/shared/articulo';

@Component({
  selector: 'app-ficha-articulo',
  templateUrl: './ficha-articulo.component.html',
  styleUrls: ['./ficha-articulo.component.css']
})
export class FichaArticuloComponent {
  @Input() articulo?: Articulo;
}
