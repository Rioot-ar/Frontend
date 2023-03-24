import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:8080/autorizacion/login";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    this.currentUserSubjet=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }

   iniciarSesion(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubjet.next(data);
      return data;
    }))
   }

   get UsuarioAutenticado(){
    return this.currentUserSubjet.value;
   }
}
