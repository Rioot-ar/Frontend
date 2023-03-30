import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Credenciales } from '../models/credenciales';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080/login";
  constructor(private http:HttpClient) {}

   iniciarSesion(credentials:Credenciales){
    return this.http.post(this.url,credentials,{
      observe:'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body=response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('bearer','');

      localStorage.setItem('token',token);

      return body;
    }))
   }

   getStatus(){
    if(this.getToken()){
      return true;
    }else{
      return false;
    }
   }

   getToken(){
    return localStorage.getItem('token');
   }

   cerrarSesion(){
    localStorage.removeItem('token');
   }
}
