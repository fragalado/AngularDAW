import { Component } from '@angular/core';
import { MessageService } from '../servicios/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {} // tiene que ser public para poder usarlo en el html
}
