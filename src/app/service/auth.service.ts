import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Credenciales } from '../models/credenciales';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlService=environment.serviceUrl;
  url=this.urlService + "login";
  constructor(private http:HttpClient) {}

   iniciarSesion(credentials:Credenciales):Observable<any>{
    return this.http.post(this.url,credentials,{
      observe:'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body=response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('bearer','');

      localStorage.setItem('token',token);
    }),
      catchError(this.handleError)
    )
   }

   private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Error: ',error.error);
    }else if(error.status===401){
      console.error('Error de autenticacion',error.status);
    }else{
      console.error('Backend error:', error.status, error.error);
    }
    return throwError(()=> new Error('Algo Fallo'));
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
