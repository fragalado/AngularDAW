import { Component, Output } from '@angular/core';
import { Articulo } from '../shared/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  articulo?: Articulo;
  articuloActivo(articulo: Articulo): void{
    this.articulo = articulo;
  }
}
