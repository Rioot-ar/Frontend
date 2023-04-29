import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Credenciales } from '../models/credenciales';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlService=environment.serviceUrl;
  url=this.urlService + "login";
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
