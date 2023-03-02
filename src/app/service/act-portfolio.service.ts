import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHandler} from '@angular/common/http'
import { item } from '../components/item';

@Injectable({
  providedIn: 'root'
})
export class ActPortfolioService {

  private urlApi = 'http://localhost:5000/portfolio';

  constructor(private http:HttpClient) {  }
  
  

}
