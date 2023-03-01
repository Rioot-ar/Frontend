import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHandler} from '@angular/common/http'
import { item } from '../components/item';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private urlApi = 'http://localhost:5000';
  private portfolio = this.http.get(this.urlApi);
  constructor(private http:HttpClient) { }
  
  getPortfolio(seccion:String): Observable<any>{
    return this.http.get(`${this.urlApi}/${seccion}`);
  }

  setExperiencia(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}`;
    return this.http.post<item>(url,item);
  }

  deleteSeccion(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}/${item.id}`;
    return this.http.delete<item>(url);
  }

  editSeccion(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}/${item.id}`;
    return this.http.put<item>(url,item);
  }
}
