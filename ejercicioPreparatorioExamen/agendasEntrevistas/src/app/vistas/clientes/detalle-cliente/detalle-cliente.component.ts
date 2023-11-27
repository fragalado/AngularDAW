import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { DatabaseService } from 'src/app/servicios/database.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent {

  id?: string;
  cliente: Cliente = {nombre: "", apellidos: "", dni: "", email: "", telefono: ""};

  constructor(private dbs: DatabaseService, private route: ActivatedRoute) {}

  ngOnInit(){
    // Comprobamos si la url tiene un id
    // Si lo tiene obtendremos el cliente por el id
    if(this.route.snapshot.paramMap.get("id") != null){
      this.id = this.route.snapshot.paramMap.get("id")!;

      // Ahora que tenemos el id del cliente obtenemos el cliente
      this.dbs.getDocumentById(this.id, "clientes").subscribe(res => this.cliente = res);
    }
  }

  // Método que se activará al pulsar el botón de enviar del formulario
  // Comprobará si existe id o no
  // Si existe llamara a updateCliente
  // Si no existe llamara a agregaCliente
  enviaDatos(){
    if(this.id != undefined)
      this.updateCliente();
    else
      this.agregaCliente();
  }

  // Método que actualiza un cliente según el id
  updateCliente(){
    this.dbs.updateDocument(this.cliente, "clientes")
    .then(() => Swal.fire({
      title: "Actualizado!",
      text: "El cliente ha sido actualizado",
      icon: "success"
    }))
    .catch(() => Swal.fire({
      title: "Oops...!",
      text: "El cliente no ha sido actualizado",
      icon: "error"
    }));
  }

  // Método que agrega un cliente a la base de datos
  agregaCliente(){
    this.dbs.newDocument(this.cliente, "clientes")
      .then(() => Swal.fire({
        title: "Guardado!",
        text: "El cliente ha sido guardado",
        icon: "success"
      }))
      .catch(() => Swal.fire({
        title: "Oops...!",
        text: "El cliente no ha sido guardado",
        icon: "error"
      }));
  }
}
