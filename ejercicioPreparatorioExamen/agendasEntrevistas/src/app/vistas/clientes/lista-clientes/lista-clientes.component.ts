import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  clientes?: Cliente[];

  constructor(private dbs: DatabaseService) {}

  ngOnInit(){
    this.getClientes();
  }

  // Método que obtiene los clientes y los guarda en el array clientes
  getClientes(){
    this.dbs.getCollection("clientes")
      .subscribe(res => this.clientes = res);
  }

  // Método que recibe un id de cliente y lo elimina de la base de datos
  deleteCliente(id: string){
    this.dbs.deleteDocument(id, "clientes")
      .then(() => console.log("Cliente ha sido borrado"))
      .catch(error => console.error(error));
  }
}
