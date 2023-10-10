import { Component, EventEmitter, Output } from '@angular/core';
import { Articulo } from 'src/app/shared/articulo';
import { LISTADO } from 'src/app/shared/lista-de-articulos';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  listadoArticulos = LISTADO;
  @Output() detalleArticulo = new EventEmitter<Articulo>();

  verDetalle(articulo: Articulo): void{
    this.detalleArticulo.emit(articulo);
  }
}
