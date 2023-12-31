import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes  = of(HEROES); // y ponemos return heroes;
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    //return of(HEROES);
  }
}
