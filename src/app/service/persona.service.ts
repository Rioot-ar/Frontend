import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlService=environment.serviceUrl;
  private urlApi = this.urlService + 'api/persona';
  constructor(private http:HttpClient) { }

  getPersona(id:number): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }

  editPersona(persona:Persona): Observable<Persona>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Persona>(url,persona);
  }
}
