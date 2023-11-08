import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  ruta: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  // Método que devuelve todos los usuarios
  get(): Observable<any>{
    return this.http.get(this.ruta + 'users');
  }

  // Método que devuelve un usuario segun su id
  getAgenteById(id: number): Observable<any> {
    return this.http.get(`${this.ruta}users/${id}`);
  }
  
}
