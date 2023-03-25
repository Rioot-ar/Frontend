import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private urlApi = 'http://localhost:8080/experiencia';
  constructor(private http:HttpClient) { }

  getExperiencias(): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }

  setExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    const url = `${this.urlApi}/crear`;
    return this.http.post<Experiencia>(url,experiencia);
  }

  deleteExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    const url = `${this.urlApi}/borrar/${experiencia.id}`;
    return this.http.delete<Experiencia>(url);
  }

  editExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Experiencia>(url,experiencia);
  }  
}
