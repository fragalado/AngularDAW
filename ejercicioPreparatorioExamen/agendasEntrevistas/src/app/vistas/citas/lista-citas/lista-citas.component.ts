import { Component } from '@angular/core';
import { Cita, DatosCita } from 'src/app/modelos/cita';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  datosCitas?: DatosCita[];
  citas?: Cita[];

  // Variables para la fecha
  hoy = new Date();
  anyo = this.hoy.getFullYear();
  mes = this.hoy.getMonth() + 1;
  dia = this.hoy.getDate();

  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    this.obtenerCitasDia();
  }

  obtenerCitasDia() {
    // Limpiamos el array citas
    this.citas = [];

    // Obtenemos el dia de hoy
    const fecha = this.dia + "" + this.mes + "" + this.anyo; // Formato: 28112023

    // Ahora obtenemos las citas del dia de hoy
    this.dbs.getCollection("agenda/" + fecha + "/citas").subscribe((res) => {
      // Si res es vacio, es decir, no existe ninguna cita, las vamos a crear
      if (res.length == 0) {
        // Llamamos al método addCitas
        this.addCitas();

        // Ahora volveremos a llamar a este método
        this.obtenerCitasDia();
      } else {
        this.datosCitas = res

        // Recorremos ahora el array datosCitas
        this.datosCitas.forEach((cita) => {

          // Buscamos el cliente
          // Si el idCliente esta vacio no buscaremos cliente
          if (cita.idCliente == "") {
            // Añadimos a la lista citas
            const citaCambio: Cita = {
              diaCita: cita.diaCita,
              entrevistadoPor: cita.entrevistadoPor,
              horaCita: cita.horaCita,
              visto: cita.visto,
              id: cita.id
            }
            this.citas?.push(citaCambio);
          } else {
            this.dbs.getDocumentById(cita.idCliente, "clientes").subscribe((cliente) => {
              // Añadimos a la lista citas
              const citaCambio: Cita = {
                diaCita: cita.diaCita,
                cliente: cliente,
                entrevistadoPor: cita.entrevistadoPor,
                horaCita: cita.horaCita,
                visto: cita.visto,
                id: cita.id
              }
              this.citas?.push(citaCambio);
            })
          }
        })
      }
    });
  }

  // Este método se ejecutará si no hay citas en un dia
  // Añadirá 16 citas a la base de datos
  addCitas() {
    // Creamos un nuevo documento en agenda
    const fecha = this.dia + "/" + this.mes + "/" + this.anyo;
    const fechaSinBarras = this.dia + "" + this.mes + "" + this.anyo;
    const horas = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];
    const citas: Cita[] = [];

    // Hacemos un bucle para añadir citas
    for (let index = 0; index < horas.length; index++) {
      // Añadimos citas de entrevistador A
      citas.push({
        visto: false,
        diaCita: fecha,
        entrevistadoPor: "A",
        horaCita: horas[index]
      });

      // Añadimos citas de entrevistador B
      citas.push({
        visto: false,
        diaCita: fecha,
        entrevistadoPor: "B",
        horaCita: horas[index]
      });
    }

    // Recorremos el array de citas y creamos un documento
    for (let index = 0; index < citas.length; index++) {
      this.dbs.newDocument(citas[index], "agenda/" + fechaSinBarras + "/citas");
    }
  }
}
