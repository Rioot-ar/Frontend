import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../components/item';
import {HttpClient,HttpHandler} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private urlApi = 'http://localhost:5000/educacion';

  constructor(private http:HttpClient) { }
  
  getEducacion(): Observable<item[]>{
    return this.http.get<item[]>(this.urlApi);
  }
}
