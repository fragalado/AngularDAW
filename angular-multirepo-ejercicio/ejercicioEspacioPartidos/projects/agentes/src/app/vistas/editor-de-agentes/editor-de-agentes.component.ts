import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agente } from '../../modelos/agente';

@Component({
  selector: 'app-editor-de-agentes',
  templateUrl: './editor-de-agentes.component.html',
  styleUrls: ['./editor-de-agentes.component.css']
})
export class EditorDeAgentesComponent {
  
  //agente: Agente = {id:0, email:"", first_name:"", last_name:"", avatar:""}; 1ª FORMA DE HACER
  agente?: Agente; // 2ª FORMA DE HACER
  idAgente!: number | null; // Podriamos poner any tambien

  constructor(
    private agentesService: AgentesService, 
    private ruta: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.ruta.paramMap.subscribe( data => console.log(data.get("id"))); // Forma de hacerlo con subscribe
    
    // Cargo el formulario de agente si hay id con los datos del agente
    // seleccionado (a través de la ruta)
    var idRuta = this.ruta.snapshot.paramMap.get("id"); // Obtiene el id de la ruta // Forma para hacerlo sin el subscribe
    if(idRuta != null){
      this.idAgente = parseInt(idRuta);
      this.agentesService.getAgenteById(this.idAgente).subscribe( res => this.agente = res.data);
      console.log(this.idAgente);      
    }
    else{
      // No hay id en la ruta, entonces es un nuevo agente
    }
  }
  
}
