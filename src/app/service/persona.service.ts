import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlApi = 'http://localhost:8080/api/persona';
  constructor(private http:HttpClient) { }

  getPersona(id:number): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }

  editPersona(persona:Persona): Observable<Persona>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Persona>(url,persona);
  }
}
