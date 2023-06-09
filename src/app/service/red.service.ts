import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../models/red';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  urlService=environment.serviceUrl;
  private urlApi = this.urlService + 'api/red';
  constructor(private http:HttpClient) { }
  
  getRed(): Observable<any>{
    return this.http.get(`${this.urlApi}/traer`);
  }
  deleteRed(red:Red): Observable<Red>{
    const url = `${this.urlApi}/borrar/${red.id}`;
    return this.http.delete<Red>(url);
  }

  editRed(red:Red): Observable<Red>{
    const url = `${this.urlApi}/editar`;
    return this.http.put<Red>(url,red);
  }

  addRed(red:Red): Observable<Red>{
    const url = `${this.urlApi}/crear`;
    return this.http.post<Red>(url,red);
  }
}
