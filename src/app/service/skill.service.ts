import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  urlService=environment.serviceUrl;
  private urlApi = this.urlService + 'api/habilidad';
  constructor(private http:HttpClient) { }
  
  getSkill(): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }

  deleteSkill(habilidad:Habilidad): Observable<Habilidad>{
    const url = `${this.urlApi}/borrar/${habilidad.id}`;
    return this.http.delete<Habilidad>(url);
  }

  editSkill(habilidad:Habilidad): Observable<Habilidad>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Habilidad>(url,habilidad);
  }

  addSkill(habilidad:Habilidad): Observable<Habilidad>{
    const url = `${this.urlApi}/crear`;
    return this.http.post<Habilidad>(url,habilidad);
  }
}
