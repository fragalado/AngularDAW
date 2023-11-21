import { Component } from '@angular/core';
import  Chart  from 'chart.js/auto';
import { Elecciones } from '../modelos/elecciones';
import { DatabaseService } from '../servicios/database.service';

@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.css']
})
export class EleccionesComponent {
  chart: any;

  constructor(private dbs: DatabaseService) {}

  ngOnInit(){
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("myChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['PCHOE', 'PESPES', 'RESTAR','CATALINES',
								 'PMV', 'BLOX', 'IHU', 'LOS AMARILLOS',], 
	       datasets: [
          {
            label: "Sales",
            data: ['112','142', '23', '15', '4',
								 '28', '1', '3'],
            backgroundColor: [
              'red', 'blue', 'orange', 'pink', 'lightblue', 'green', 'darkred', 'yellow'
            ]
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  creaFirebase(){
    let juegoDatos: Elecciones = {
      type: "pipe",
      labels: ["Amarillos", "Rojos", "Azules", "Verdes"],
      label: "Escaños",
      data: ["35", "123", "142", "29"],
      backgroundColor: ["yellow", "red", "blue", "green"],
    }

    this.dbs.newDocument(juegoDatos, "elecciones").then(() => console.log("Documento creado")).catch( error => console.error(error));
  }

}
