import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  urlService=environment.serviceUrl;
  private urlApi = this.urlService + 'api/proyecto';
  constructor(private http:HttpClient) { }
  
  getProyecto(): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }



  addProyecto(proyecto:Proyecto): Observable<Proyecto>{
    const url = `${this.urlApi}/crear`;
    return this.http.post<Proyecto>(url,proyecto);
  }

  deleteProyecto(proyecto:Proyecto): Observable<Proyecto>{
    const url = `${this.urlApi}/borrar/${proyecto.id}`;
    return this.http.delete<Proyecto>(url);
  }

  editProyecto(proyecto:Proyecto): Observable<Proyecto>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Proyecto>(url,proyecto);
  }
}
