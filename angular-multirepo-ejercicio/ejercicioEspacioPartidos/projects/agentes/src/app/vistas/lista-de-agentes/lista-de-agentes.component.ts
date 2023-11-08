import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';

@Component({
  selector: 'app-lista-de-agentes',
  templateUrl: './lista-de-agentes.component.html',
  styleUrls: ['./lista-de-agentes.component.css']
})
export class ListaDeAgentesComponent {

  usuarios: any;

  constructor(private agentesService: AgentesService) {}

  ngOnInit(): void {
    this.agentesService.get().subscribe( data => this.usuarios = data); // Se podria hacer en el constructor tambien
                                                                        // Pero cuando carguemos la pagina ya no funcionaria
                                                                        // Por eso se pone aqui
  }
}
