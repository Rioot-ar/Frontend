import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../components/item';
import {HttpClient,HttpHandler} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private urlApi = 'http://localhost:5000/experiencia';

  constructor(private http:HttpClient) { }
  
  getExperiencias(): Observable<item[]>{
    return this.http.get<item[]>(this.urlApi);
  }
}
