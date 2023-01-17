import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHandler} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private urlApi = 'http://localhost:5000/portfolio';

  constructor(private http:HttpClient) { }
  
  getPortfolio(): Observable<any>{
    return this.http.get(this.urlApi);
  }

}
