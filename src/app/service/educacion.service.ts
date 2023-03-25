import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private urlApi = 'http://localhost:8080/educacion';
  constructor(private http:HttpClient) { }

  getEducaciones(): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }

  setEducacion(educacion:Educacion): Observable<Educacion>{
    const url = `${this.urlApi}/crear`;
    return this.http.post<Educacion>(url,educacion);
  }

  deleteEducacion(educacion:Educacion): Observable<Educacion>{
    const url = `${this.urlApi}/borrar/${educacion.id}`;
    return this.http.delete<Educacion>(url);
  }

  editEducacion(educacion:Educacion): Observable<Educacion>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Educacion>(url,educacion);
  }  
}
